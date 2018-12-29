import { loader } from './loader'
import { parseAttributes, parseCollections, parseEvents, parseElements, parseCSSProperties } from './parser'
import { DecodeResult } from 'partsing/core/result'
import { Attribute, Tag, StringType, AttributeType } from './attribute'
import { Element } from './element'
import { Event } from './event'
import { Project } from './project'
import { moodAttributes } from './mood_attribute'

async function loadDecode<T>(path: string, decoder: (input: any) => DecodeResult<any, T, string>) {
  const content = await loader(path)
  const result = decoder(content)
  switch (result.kind) {
    case 'decode-success': return result.value
    case 'decode-failure': throw result.failures.join('; ')
    default: throw 'unreacheable code'
  }
}

export const ucFirst = (s: string) => s.substring(0, 1).toUpperCase() + s.substring(1)

export const resolveGroups = (collections: Map<string, string[]>, groupName: string, values: string[]): string[] => {
  return values.reduce(
    (acc: string[], value: string) => {
      if (value.substring(0, 1) === '@') {
        const key = `${groupName}:${value.substring(1)}`
        if (collections.has(key)) {
          return acc.concat(collections.get(key)!)
        } else {
          console.error(`Not Found Collection: ${key}`)
          return acc
        }
      } else {
        return acc.concat([value])
      }
    },
    [] as string[]
  )
}

const excludeTags = [Tag.deprecated, Tag.experimental, Tag.msExtension, Tag.obsolete, Tag.nonStandard, Tag.legacy]

const exclude = (attr: Attribute | Element | Event) => {
  return attr.tags.findIndex(val => excludeTags.indexOf(val) >= 0) < 0
}

const combineAttributes = () => {
  const map = new Map<string, { attr: Attribute, index: number }>()
  return (attributes: Attribute[], curr: Attribute) => {
    if (!map.has(curr.codeName)) {
      map.set(curr.codeName, { attr: curr, index: attributes.length })
      attributes.push(curr)
    } else {
      const stored = map.get(curr.codeName)!
      const attr = stored.attr.append(curr)
      map.set(curr.codeName, { attr, index: stored.index })
      attributes[stored.index] = attr
    }
    return attributes
  }
}

const attributeToStringField = (attr: Attribute) => {
  return `${attr.codeName}?: DOMAttribute<State, ${attr.type.map(t => t.toTSString()).join(' | ')}>`
}

const eventToStringField = (event: Event) => {
  return `${event.codeName}?: DOMEventHandler<State, ${event.type.join(' | ')}, Action>`
}

const setterToString = (types: AttributeType[], isProperty: boolean) => {
  if (types.length < 1) {
    throw `deal with empty types`
  } else if (isProperty) {
    switch (types[0].kind) {
      case 'string': return 'setProperty'
      case 'boolean': return 'setBoolProperty'
      case 'number': return 'setProperty'
      default: throw `deal with this property as well: ${types[0].kind}`
    }
  } else {
    switch (types[0].kind) {
      case 'enum': return 'setAttribute'
      case 'string': return 'setAttribute'
      case 'style': return 'setStyleAttribute'
      case 'length': return 'setAttribute'
      case 'class': return 'setAttribute'
      case 'boolean': return 'setBoolAttribute'
      case 'eboolean': return 'setEnumBoolAttribute'
      case 'space-separated': return 'setSpaceSeparated'
      case 'comma-separated': return 'setCommaSeparated'
      case 'number': return 'setAttribute'
      case 'integer': return 'setAttribute'
      default: throw `deal with this attribute as well: ${types[0].kind}`
    }
  }
}

async function f() {
  const attributes = await loadDecode('./specs/attributes.yaml', parseAttributes)
  const collections = await loadDecode('./specs/collections.yaml', parseCollections)
  const events = await loadDecode('./specs/events.yaml', parseEvents)
  const elements = await loadDecode('./specs/elements.yaml', parseElements)
  const cssProperties = await loadDecode('./specs/css-properties.yaml', parseCSSProperties)

  const attributesMap = attributes.reduce(
    (acc, attr) => {
      acc.set(attr.name, attr)
      return acc
    },
    new Map<string, Attribute>()
  )

  let project = Project.empty('./gen/')

  const filteredEvents = events
    .filter(exclude)

  const filteredAttributes = attributes
    .filter(exclude)
    .reduce(combineAttributes(), [])

  const filteredElements = elements
    .filter(exclude)

  const allAttributes = filteredAttributes
    .map(attributeToStringField)
    .sort()
    .concat(filteredEvents.map(eventToStringField))
    .concat(cssProperties.map(p => `$${p.codeName}?: DOMAttribute<State, string>`))
    .concat(moodAttributes.map(a => a.pairToString('any')))

  const domAttributesContent = `
/* istanbul ignore file */
import { DOMAttribute, DOMEventHandler, MoodAttribute } from './value'

import { CSSProperties } from './css_properties'

export interface DOMAttributes<State, Action> {
  ${allAttributes.join('\n  ')}
}
`
  project = project.addFile(`attributes.ts`, domAttributesContent)

  const attributeNames = filteredAttributes
    .filter(attr => attr.codeName !== attr.domName)
    .map(attr => `${attr.codeName}: '${attr.domName}'`)
    .sort()

  const regularAttributeTypes = ['string', 'length', 'class', 'number', 'integer', 'enum']

  const attributeApplication = filteredAttributes
    .filter(attr =>
      // attr.type.length === 1 &&
      attr.type.length > 0 &&
      (
        attr.isProperty ||
        regularAttributeTypes.indexOf(attr.type[0].kind) < 0
      )
    )
    .map(attr => `${attr.codeName}: ${setterToString(attr.type, attr.isProperty)}`)
    .sort()

  const attributeMapperContent = `
  /* istanbul ignore file */
import {
  setBoolAttribute,
  setCommaSeparated,
  setEnumBoolAttribute,
  setSpaceSeparated,
  setStyleAttribute,
  setBoolProperty,
  setProperty
} from './set_attribute'

export const attributeNameMap: Record<string, string> = {
  ${attributeNames.join(',\n  ')}
}

export const attributeMap: Record<string, (el: Element, name: string, value: any) => void> = {
  ${attributeApplication.join(',\n  ')}
}
`

  project = project.addFile(`attributes_mapper.ts`, attributeMapperContent)

  filteredElements
    .forEach(el => {
      const attrType = `${ucFirst(el.codeName)}Attributes`
      const attributeNames = Array.from(new Set(resolveGroups(collections, 'attributes', el.attributes)))
      const map = new Map<string, { index: number, attr: Attribute }>()
      const attributes = attributeNames.reduce(
        (acc, attr) => {
          if (attributesMap.has(attr)) {
            const inst = attributesMap.get(attr)!
            if (map.has(inst.domName)) {
              const ex = map.get(inst.domName)!
              console.log(`CONFLICTING: ${JSON.stringify(ex.attr)} VS ${JSON.stringify(inst)}`)
              map.set(inst.domName, { index: ex.index, attr: inst })
              acc[ex.index] = inst
            } else {
              map.set(inst.domName, { index: acc.length, attr: inst })
              acc.push(inst)
            }
          } else {
            console.error(`Not Found Attribute: ${el.name}.${attr}`)
          }
          return acc
        },
        [] as Attribute[]
      )
      .filter(exclude)
      .map(attributeToStringField)
      .sort()
      .concat(filteredEvents.map(eventToStringField))
      .join('\n  ')

      const content = `
/* istanbul ignore file */
import { DOMChild } from '../template'
import { DOMAttribute, DOMEventHandler } from '../value'
import { DOMElement } from '../element'
import { CSSAttributes, CSSProperties } from '../css_properties'
import { MoodAttributes } from '../mood_attributes'
import { el } from '../element'

export interface ${attrType}<State, Action> {
  ${attributes}
}

export function ${el.codeName}<State, Action>(
  attributes: ${attrType}<State, Action> & CSSAttributes<State> & MoodAttributes<State, ${el.domInterface}>,
  ...children: DOMChild<State, Action>[]
): DOMElement<State, Action> {
  return el<State, Action>('${el.domName}', attributes, ...children)
}
`

      project = project.addFile(`els/${el.name}.ts`, content)
    })

  const indexContent = filteredElements.map(el => `export { ${el.codeName} } from './${el.name}'`).join('\n')
  project = project.addFile(`els/index.ts`, indexContent)

  const cssPropertiesContent = cssProperties.map(p => `${p.codeName}?: string`).join('\n  ')
  const cssPropertiesMapContent = cssProperties
    .filter(p => p.codeName !== p.domName)
    .map(p => `${p.codeName}: '${p.domName}'`).join(',\n  ')
  const cssAttributesContent = cssProperties.map(p => `$${p.codeName}?: DOMAttribute<State, string>`).join('\n  ')

  const cssContent = `
/* istanbul ignore file */
import { DOMAttribute } from './value'

export interface CSSProperties {
  ${cssPropertiesContent}
}

export interface CSSAttributes<State> {
  ${cssAttributesContent}
}

export const cssMapper = {
  ${cssPropertiesMapContent}
}
`

  project = project.addFile(`css_properties.ts`, cssContent)

  const moodAttributeContent = moodAttributes.map(a => a.pairToString('El')).join(',\n  ')

  const moodContent = `
/* istanbul ignore file */
import { MoodAttribute }   from './value'

export interface MoodAttributes<State, El> {
  ${moodAttributeContent}
}
`

  project = project.addFile(`mood_attributes.ts`, moodContent)

  await project.cleanAndSave()
}

f().catch(e => console.error(e))
