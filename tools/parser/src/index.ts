import { loader } from './loader'
import { parseAttributes, parseCollections, parseEvents, parseElements } from './parser'
import { DecodeResult } from 'partsing/core/result'
import { Attribute, Tag, StringType, AttributeType } from './attribute'
import { Element } from './element'
import { Project } from './project'

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

const exclude = (attr: Attribute | Element) => {
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

const setterToString = (types: AttributeType[]) => {
  if (types.length !== 1) {
    throw 'deal with this'
  } else {
    switch (types[0].kind) {
      case 'boolean': return 'setBoolAttribute'
      case 'eboolean': return 'setEnumBoolAttribute'
      case 'space-separated': return 'setSpaceSeparated'
      case 'comma-separated': return 'setCommaSeparated'
      case 'number': return 'setNumberAttribute'
      default: throw `deal with this as well: ${types[0].kind}`
    }
  }
}

async function f() {
  const attributes = await loadDecode('./specs/attributes.yaml', parseAttributes)
  const collections = await loadDecode('./specs/collections.yaml', parseCollections)
  const events = await loadDecode('./specs/events.yaml', parseEvents)
  const elements = await loadDecode('./specs/elements.yaml', parseElements)

  const attributesMap = attributes.reduce(
    (acc, attr) => {
      acc.set(attr.name, attr)
      return acc
    },
    new Map<string, Attribute>()
  )

  let project = Project.empty('./gen/')

  const filteredAttributes = attributes
    .filter(exclude)
    .reduce(combineAttributes(), [])

  const allAttributes = filteredAttributes
    .map(attributeToStringField)
    .sort()

  const domAttributesContent = `
import { DOMAttribute } from './value'

export interface DOMAttributes<State, Action> {
  ${allAttributes.join('\n  ')}
}
`
  project = project.addFile(`attributes.ts`, domAttributesContent)

  const attributeNames = filteredAttributes
    .filter(attr => attr.codeName !== attr.domName)
    .map(attr => `${attr.codeName}: '${attr.domName}'`)
    .sort()

  const regularAttributeTypes = ['string', 'integer', 'length', 'class', 'style', 'enum']

  const attributeApplication = filteredAttributes
    .filter(attr => attr.type.length === 1 && regularAttributeTypes.indexOf(attr.type[0].kind) < 0)
    .map(attr => `${attr.codeName}: ${setterToString(attr.type)}`)
    .sort()

  const attributeMapperContent = `
/* istanbul ignore next */
import {
  setBoolAttribute,
  setCommaSeparated,
  setSpaceSeparated,
  setNumberAttribute,
  setEnumBoolAttribute
} from './set_attribute'

/* istanbul ignore next */
export const attributeNameMap: Record<string, string> = {
  ${attributeNames.join(',\n  ')}
}

/* istanbul ignore next */
export const attributeMap: Record<string, (el: Element, name: string, value: any) => void> = {
  ${attributeApplication.join(',\n  ')}
}
`

  project = project.addFile(`attributes_mapper.ts`, attributeMapperContent)

  elements
    .filter(exclude)
    .forEach(el => {
      const attrType = `${ucFirst(el.codeName)}Attributes`
      const attributeNames =  Array.from(new Set(resolveGroups(collections, 'attributes', el.attributes)))
      const attributes = attributeNames.reduce(
        (acc, attr) => {
          if (attributesMap.has(attr)) {
            acc = acc.concat([attributesMap.get(attr)!])
          } else {
            console.error(`Not Found Attribute: ${el.name}.${attr}`)
          }
          return acc
        },
        [] as Attribute[]
      )
      .filter(exclude)
      .map(attributeToStringField)
      .join('\n  ')

      const content = `
import { DOMChild } from '../template'
import { DOMAttribute } from '../value'
import { el } from '../element'

export interface ${attrType}<State> {
  ${attributes}
}

export const ${el.codeName} = <State, Action>
    (attributes: ${attrType}<State>, ...children: DOMChild<State, Action>[]) => {
  return el<State, Action>('${el.domName}', attributes, children)
}
`

      project = project.addFile(`els/${el.name}.ts`, content)
    })

  await project.cleanAndSave()
}

f().catch(e => console.error(e))
