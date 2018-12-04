import { loader } from './loader'
import { parseAttributes, parseCollections, parseEvents, parseElements } from './parser'
import { DecodeResult } from 'partsing/core/result'
import { Attribute, Tag } from './attribute'
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

const excludeTags = [Tag.deprecated, Tag.experimental, Tag.msExtension, Tag.obsolete, Tag.nonStandard]

const exclude = (attr: Attribute | Element) => {
  return attr.tags.findIndex(val => excludeTags.indexOf(val) >= 0) < 0
}

const attributeToStringField = (attr: Attribute) => {
  return `${attr.codeName}?: DOMValue<State, ${attr.type.map(t => t.toTSString()).join(' | ')}>`
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

  const allAttributes = attributes
    .filter(exclude)
    .map(attributeToStringField)
    .join('\n  ')

  const domAttributesContent = `
import { DOMValue } from './dom_value'

export interface DOMAttributes<State> {
  ${allAttributes}
}
`
  project = project.addFile(`dom_attributes.ts`, domAttributesContent)

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
import { DOMChild } from '../dom_child'
import { DOMValue } from '../dom_value'
import { el } from '../dom_element'

export interface ${attrType}<State> {
  ${attributes}
}

export const ${el.codeName} = <State, Action>(attributes: ${attrType}<State>, ...children: DOMChild<State, Action>[]) => {
  return el<State, Action>('${el.domName}', attributes, children)
}
`

      project = project.addFile(`els/${el.name}.ts`, content)
    })

  await project.cleanAndSave()
}

f().catch(e => console.error(e))
