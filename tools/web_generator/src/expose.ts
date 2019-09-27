import * as Browser from './tslib/types'

const extendsElement = (records: Record<string, Browser.Interface>) => (inter: Browser.Interface): boolean => {
  if (inter.extends === 'Element') return true
  if (!records[inter.extends]) return false
  return extendsElement(records)(records[inter.extends])
}

export const generateTypes = (webidl: Browser.WebIdl, forceKnownTypes: Set<string>) => {
  if (!webidl.interfaces) return
  const records = webidl.interfaces.interface
  const elements = Object.values(records)
    .filter(extendsElement(records))
    .filter(e => !!e.element)
  const result = [
    importsContent(),
    elements.map(interfaceTemplate(webidl)).join('\n\n')
  ].join('\n\n')
  console.log(result.split('\n').length)
  return result
}

const elementTemplate = (inter: Browser.Interface) => (el: Browser.Element) => {
  const ns = el.namespace || 'HTML'
  const lcns = ns.toLowerCase()
  const name = el.name
  const fname = mapElementFnName(name)
  const attributesTypeName = getAttributesTypeName(inter)

  const fcall = ns === 'HTML'
    ? `el<State, Action>('${name}', attributes, ...children)`
    : `elNS<State, Action>('${lcns}', '${name}', attributes, ...children)`

  const content = `export module ${lcns} {
    export function ${fname}<State, Action>(
    attributes: ${attributesTypeName}<State, Action> & CSSAttributes<State> & MoodAttributes<State, ${inter.name}>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return ${fcall}
  }
}`
  return content
}

const getAttributesTypeName = (inter: Browser.Interface) => {
  return `${inter.name}Attributes`
}

const collectProperties = (webidl: Browser.WebIdl) => (inter: Browser.Interface): Record<string, Browser.Property> => {
  let local = (inter.properties && inter.properties.property) || {}
  if (inter.implements) {
    local = inter.implements.reduce((acc: Record<string, Browser.Property>, curr) => {
      // console.log(curr, !!webidl.mixins!.mixin[curr], !!webidl.interfaces!.interface[curr])
      const mixin = webidl.mixins!.mixin[curr] || webidl.interfaces!.interface[curr]
      if (!mixin)
        return acc
      const prop = collectProperties(webidl)(mixin)
      return {
        ...acc,
        ...prop
      }
    }, local)
  }
  if (inter.extends && webidl.interfaces!.interface[inter.extends]) {
    const collected = collectProperties(webidl)(webidl.interfaces!.interface[inter.extends])
    return {
      ...local,
      ...collected
    }
  } else {
    return local
  }
}

const excludeProperties = new Set(['innerHTML', 'innerText', 'textContent', 'nodeValue', 'outerHTML'])

const isExposableProperty = (prop: Browser.Property): boolean => {
  if (typeof prop.type === 'string' && prop.type.includes('Element'))
    return false
  return !prop.deprecated && (!prop['read-only'] || prop.name === 'style') && !excludeProperties.has(prop.name)
}

const propertyTypes: Record<string, string> = {
  'CSSStyleDeclaration': 'CSSProperties',
  'DOMString': 'string',
  'USVString': 'string',
  'short': 'number',
  'float': 'number',
  'double': 'number',
  'long': 'number',
  'unsigned short': 'number',
  'unsigned long': 'number',
  'unrestricted double': 'number'
}

const mapPropertyType = (type: string): string => {
  return propertyTypes[type] || type.replace(/["]/g, "'")
}

const specialElementNames: Record<string, string> = {
  'switch': 'switchEl',
  'var': 'varEl'
}

const mapElementFnName = (name: string): string => {
  return specialElementNames[name] || name // name.substring(0, 1).toUpperCase() + name.substring(1)
}

const mapPropertyName = (name: string): string => {
  return name.replace(/[?]/g, '')
}

const extractTypes = (prop: Browser.Typed): { names: string[], nullable: boolean } => {
  if (prop['override-type'])
    return { names: [prop['override-type']], nullable: prop.nullable === undefined || !!prop.nullable}
  if (typeof prop.type === 'string')
    return { names: [prop.type], nullable: prop.nullable === undefined || !!prop.nullable}

  const subs = prop.type.map(p => extractTypes(p))
  return {
    names: Array.prototype.concat(...subs.map(v => v.names)),
    nullable: subs.reduce((acc: boolean, curr) => curr.nullable ? true : acc, false)
  }
}

const mangleEventType = (type: string) => {
  switch (type) {
    case 'EventHandlerNonNull':
    case 'EventHandler':
      return 'Event'
    case 'OnErrorEventHandler':
      return 'ErrorEvent'
    case 'OnBeforeUnloadEventHandler':
        return 'BeforeUnloadEvent'
    default:
      console.log(type)
      return type
  }
}

const propertyTemplate = (prop: Browser.Property) => {
  const types = extractTypes(prop)
  const names = types.names.map(mapPropertyType)
  // if (['inputmode', 'spellcheck', 'dir', 'autocapitalize'].includes(prop.name))
  //   console.log(prop)
  // if (!types.nullable) {
  //   console.log(types)
  // }
  // if (prop.type === 'EventHandler') {
  //   console.log(prop)
  // }
  // onMouseLeave?: DOMEventHandler<State, MouseEvent, Action>
  const stype = isEvent(prop.type)
    ? `DOMEventHandler<State, ${mangleEventType(prop.type as string)}, Action>`
    : `DOMAttribute<State, ${names.join(' | ')}>`
  return `${mapPropertyName(prop.name)}${types.nullable ? '?' : ''}: ${stype}`
}

const isEvent = (type: Browser.Typed[] | string) => {
  return typeof type === 'string' && type.includes('EventHandler')
}

const comparePropertyByType = (a: Browser.Property, b: Browser.Property): number => {
  const aIsEvent = isEvent(a.type)
  const bIsEvent = isEvent(b.type)
  if ((aIsEvent && bIsEvent) || (!aIsEvent && !bIsEvent))
    return 0
  if (aIsEvent)
    return 1
  else
    return -1
}

const compareProperty = (a: Browser.Property, b: Browser.Property): number => {
  const byType = comparePropertyByType(a, b)
  if (byType !== 0)
    return byType
  if (a.name === b.name)
    return 0
  if (a.name < b.name)
    return -1
  else
    return 1
}

const attributesTypeTemplate = (webidl: Browser.WebIdl) => (inter: Browser.Interface) => {
  const name = getAttributesTypeName(inter)
  const properties = Object.values(collectProperties(webidl)(inter))
    .filter(isExposableProperty)
    .sort(compareProperty)
  // console.log(properties)
  return `export interface ${name}<State, Action> {
  ${properties.map(propertyTemplate).join('\n  ')}
}`
}

const filterElement = (inter: Browser.Interface) => (el: Browser.Element) => {
  if (inter.name === 'HTMLTableCellElement' && (el.name === 'td' || el.name === 'th'))
    return false
  return true
}

const interfaceTemplate = (webidl: Browser.WebIdl) => (inter: Browser.Interface) => {
  // console.log(inter)
  if (!inter.element) return ''
  const result = [
      attributesTypeTemplate(webidl)(inter)
    ]
    .concat(inter.element.filter(filterElement(inter)).map(elementTemplate(inter)))
    .join('\n\n')
  // console.log(result)
  return result
}

const importsContent = () => {
  return `
import { DOMChild } from './template'
import { DOMAttribute, DOMEventHandler } from './value'
import { el, DOMElement } from './element'
import { elNS } from './element_ns'
import { CSSAttributes, CSSProperties } from './css_properties'
import { MoodAttributes } from './mood_attributes'`
}
