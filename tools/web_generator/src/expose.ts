import * as Browser from './tslib/types'
import { baseTypeConversionMap } from './tslib/helpers'

const extendsElement = (records: Record<string, Browser.Interface>) => (inter: Browser.Interface): boolean => {
  if (inter.extends === 'Element') return true
  if (!records[inter.extends]) return false
  return extendsElement(records)(records[inter.extends])
}

export const filterElements = (webidl: Browser.WebIdl, forceKnownTypes: Set<string>) => {
  if (!webidl.interfaces) return []
  const records = webidl.interfaces.interface
  return Object.values(records)
    .filter(extendsElement(records))
    .filter(e => !!e.element)
}

export const generateTypes = (elements: Browser.Interface[]) => {
  const groups = [].concat(...elements.map(interfaceTemplate))
    .reduce((acc: Record<string, string[]>, curr: { module: string, f: string }) => {
      const arr = acc[curr.module]
      if (arr) {
        arr.push(curr.f)
        return acc
      } else {
        return {
          ...acc,
          [curr.module]: [curr.f]
        }
      }
    }, {} as Record<string, string[]>)

  console.log(Object.keys(groups))

  const elementsr = Object.keys(groups)
    .map(group => {
      const fs = groups[group].sort((a, b) => {
        if (a < b) return -1
        else if (a > b) return 1
        else return 0
      })
      return `export module ${group} {
  ${fs.join('\n')}
}`
    })
    .join('\n\n')

  const result = [importsWebContent(), elementsr].join('\n\n')
  return result
}

export const generateWebAttributes = (elements: Browser.Interface[], webidl: Browser.WebIdl) => {
  const result = [importsAttributesContent(), attributesTemplate(elements, webidl)].join('\n\n')
  return result
}

const elementTemplate = (inter: Browser.Interface) => (el: Browser.Element) => {
  const ns = el.namespace || 'HTML'
  const lcns = ns.toLowerCase()
  const name = el.name
  const fname = mapElementFnName(name)
  // const attributesTypeName = getAttributesTypeName(inter)

  const fcall =
    ns === 'HTML'
      ? `el2<${inter.name}>('${name}')`
      : `elNS2<${inter.name}>('${lcns}', '${name}')`

  return {
    module: lcns,
    f: `export const ${fname} = ${fcall}`
  }
}

// const getAttributesTypeName = (inter: Browser.Interface) => {
//   return `${inter.name}Attributes`
// }

const collectProperties = (webidl: Browser.WebIdl) => (inter: Browser.Interface): Record<string, Browser.Property> => {
  let local = (inter.properties && inter.properties.property) || {}
  if (inter.implements) {
    local = inter.implements.reduce((acc: Record<string, Browser.Property>, curr) => {
      const mixin = webidl.mixins!.mixin[curr] || webidl.interfaces!.interface[curr]
      if (!mixin) return acc
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
  if (typeof prop.type === 'string' && prop.type.includes('Element')) return false
  return (
    (typeof prop.type === 'string' && prop.type.startsWith('SVG')) ||
    (!prop.deprecated && (!prop['read-only'] || prop.name === 'style') && !excludeProperties.has(prop.name))
  )
}

const propertyTypes: Record<string, string> = {
  CSSStyleDeclaration: 'CSSProperties',
  SVGAnimatedLength: 'string',
  SVGAnimatedNumber: 'number',
  SVGAnimatedInteger: 'number',
  SVGAnimatedAngle: 'string',
  SVGAnimatedEnumeration: 'string',
  SVGPointList: 'string',
  SVGPoint: 'string',
  SVGAnimatedLengthList: 'string',
  SVGAnimatedTransformList: 'string',
  SVGAnimatedString: 'string',
  SVGAnimatedNumberList: 'string',
  SVGPathSegList: 'string',
  SVGAnimatedBoolean: 'boolean',
  SVGAnimatedPreserveAspectRatio: 'string',
  SVGStringList: 'string',
  SVGAnimatedRect: 'string',
  SVGRect: 'string'
}

const mapPropertyType = (type: string): string => {
  let value
  if (baseTypeConversionMap.has(type)) value = baseTypeConversionMap.get(type)
  return propertyTypes[value || type] || value || type.replace(/[']/g, "'")
}

const specialElementNames: Record<string, string> = {
  switch: 'switchEl',
  var: 'varEl'
}

const mapElementFnName = (name: string): string => {
  return specialElementNames[name] || name // name.substring(0, 1).toUpperCase() + name.substring(1)
}

const namePropertyMap = {
  htmlFor: 'for'
}

const mapPropertyName = (name: string): string => {
  name = name.replace(/[?]/g, '')
  return namePropertyMap[name] || name
}

// const sameTypes = (a: { names: string[], nullable: boolean }, b: { names: string[], nullable: boolean }) => {
//   if (a.nullable !== b.nullable || a.names.length !== b.names.length) return false
//   for (let i = 0; i < a.names.length; i++) {
//     if (a.names[i] !== b.names[i]) return false
//   }
//   return true
// }

const extractTypes = (prop: Browser.Typed): { names: string[]; nullable: boolean } => {
  if (prop['override-type'])
    return { names: [prop['override-type']], nullable: prop.nullable === undefined || !!prop.nullable }
  if (typeof prop.type === 'string')
    return { names: [prop.type], nullable: prop.nullable === undefined || !!prop.nullable }

  const subs = prop.type.map(p => extractTypes(p))
  return {
    names: Array.prototype.concat(...subs.map(v => v.names)),
    nullable: subs.reduce((acc: boolean, curr) => (curr.nullable ? true : acc), false)
  }
}

const eventTypeMap = {
  onabort: 'UIEvent',
  oncomplete: 'Event',
  onclick: 'MouseEvent',
  onerror: 'ErrorEvent',
  onload: 'UIEvent',
  onloadstart: 'Event',
  onprogress: 'ProgressEvent',
  onreadystatechange: 'ProgressEvent',
  onresize: 'UIEvent',
  onscroll: 'UIEvent',
  onselect: 'UIEvent',
  onunload: 'UIEvent',
  ontimeout: 'ProgressEvent',
  onkeydown: 'KeyboardEvent',
  onkeypress: 'KeyboardEvent',
  onkeyup: 'KeyboardEvent',
  onmousedown: 'MouseEvent',
  onmouseenter: 'MouseEvent',
  onmouseleave: 'MouseEvent',
  onmousemove: 'MouseEvent',
  onmouseout: 'MouseEvent',
  onmouseover: 'MouseEvent',
  onmouseup: 'MouseEvent',
  onmousewheel: 'MouseEvent',

  onanimationend: 'AnimationEvent',
  onanimationiteration: 'AnimationEvent',
  onanimationstart: 'AnimationEvent',
  onTransitionEnd: 'AnimationEvent',
  oncompositionend: 'CompositionEvent',
  oncompositionstart: 'CompositionEvent',
  oncompositionupdate: 'CompositionEvent',

  oncopy: 'ClipboardEvent',
  oncut: 'ClipboardEvent',
  onpaste: 'ClipboardEvent',

  ondragend: 'DragEvent',
  ondragenter: 'DragEvent',
  ondragexit: 'DragEvent',
  ondragleave: 'DragEvent',
  ondragover: 'DragEvent',
  ondragstart: 'DragEvent',
  ondrop: 'DragEvent',

  onblur: 'FocusEvent',
  onfocus: 'FocusEvent',
  onfocusin: 'FocusEvent',
  onfocusout: 'FocusEvent',

  ontouchcancel: 'TouchEvent',
  ontouchend: 'TouchEvent',
  ontouchmove: 'TouchEvent',
  ontouchstart: 'TouchEvent',

  onwheen: 'WheelEvent'
}

const mangleEventType = (name: string, type: string) => {
  name = name.toLowerCase()

  if (eventTypeMap[name]) return eventTypeMap[name]
  switch (type) {
    case 'Event':
    case 'EventHandlerNonNull':
    case 'EventHandler':
      return 'Event'
    case 'OnErrorEventHandler':
      return 'ErrorEvent'
    case 'OnBeforeUnloadEventHandler':
      return 'BeforeUnloadEvent'
    case 'Event | EventHandlerNonNull':
      return 'Event | EventHandlerNonNull'
    default:
      console.log(`Unknown Event Type: ${type}`)
      return type
  }
}

const getProperyTypes = (prop: Browser.Property) => {
  const types = extractTypes(prop)
  return Array.from(new Set(types.names.map(mapPropertyType)))
}

// const propertyTemplate = (prop: Browser.Property) => {
//   const types = extractTypes(prop)
//   const typeNames = Array.from(new Set(types.names.map(mapPropertyType)))
//   return propertyExpression(typeNames, types.nullable, prop.name)
// }

const propertyExpression = (types: string[], nullable: boolean, name: string) => {
  const type = types.join(' | ')

  const stype = isEvent(name, type)
    ? `DOMEventHandler<State, ${mangleEventType(name, type)}, Action>`
    : `DOMAttribute<State, ${type}>`
  return `${mapPropertyName(name)}${nullable ? '?' : ''}: ${stype}`
}

const isEvent = (name: string, type: Browser.Typed[] | string) => {
  return name.startsWith('on') || (typeof type === 'string' && type.includes('EventHandler'))
}

const comparePropertyByType = (a: Browser.Property, b: Browser.Property): number => {
  const aIsEvent = isEvent(a.name, a.type)
  const bIsEvent = isEvent(a.name, b.type)
  if ((aIsEvent && bIsEvent) || (!aIsEvent && !bIsEvent)) return 0
  if (aIsEvent) return 1
  else return -1
}

const compareProperty = (a: Browser.Property, b: Browser.Property): number => {
  const byType = comparePropertyByType(a, b)
  if (byType !== 0) return byType
  if (a.name === b.name) return 0
  if (a.name < b.name) return -1
  else return 1
}

const attributesCache = new Map<string, Browser.Property[]>()
const getAttributes = (webidl: Browser.WebIdl, inter: Browser.Interface) => {
  const id = inter.name
  if (attributesCache.has(id)) return attributesCache.get(id)
  const properties = Object.values(collectProperties(webidl)(inter))
    .filter(isExposableProperty)
    .sort(compareProperty)
  attributesCache.set(id, properties)
  return properties
}

// const attributesTypeTemplate = (webidl: Browser.WebIdl) => (inter: Browser.Interface) => {
//   const name = getAttributesTypeName(inter)
//   const properties = getAttributes(webidl, inter)
//   return `export interface ${name}<State, Action> {
//   ${properties.map(propertyTemplate).join('\n  ')}
// }`
// }

const filterElement = (inter: Browser.Interface) => (el: Browser.Element) => {
  if (inter.name === 'HTMLTableCellElement' && (el.name === 'td' || el.name === 'th')) return false
  return true
}

const attributesTemplate = (elements: Browser.Interface[], webidl: Browser.WebIdl) => {
  const attributes = getAllAttributes(elements, webidl)
  const properties = attributes.map(a => propertyExpression(a.types, true, a.attribute))
  return `
export interface DOMAttributes<State, Action, El> extends MoodAttributes<State, El> {
  ${properties.join('\n  ')}
}
`
}

const getAllAttributes = (elements: Browser.Interface[], webidl: Browser.WebIdl) => {
  const accumulator = new Map<string, string[]>()
  elements.forEach(element => {
    getAttributes(webidl, element).forEach(attribute => {
      const name = mapPropertyName(attribute.name)
      const types = getProperyTypes(attribute)
      if (!accumulator.has(name)) {
        accumulator.set(name, types)
      } else {
        const all = Array.from(new Set(accumulator.get(name).concat(types)))
        accumulator.set(name, all)
      }
    })
  })
  const keys = Array.from(accumulator.keys())
  return keys
    .map(attribute => ({
      attribute,
      types: accumulator.get(attribute)
    }))
    .sort((a, b) => {
      if (a.attribute < b.attribute) {
        return -1
      } else if (a.attribute > b.attribute) {
        return 1
      } else {
        return 0
      }
    })
}

const interfaceTemplate = (inter: Browser.Interface) => {
  if (!inter.element) return []
  // const result = [attributesTypeTemplate(webidl)(inter)]
  //   .concat(inter.element.filter(filterElement(inter)).map(elementTemplate(inter)))
  return inter.element.filter(filterElement(inter)).map(elementTemplate(inter))
}

const importsWebContent = () => {
  return `
// THIS FILE IS AUTOMATICALLY GENERATED, PLEASE DO NOT CHANGE DIRECTLY

import { el2 } from './element'
import { elNS2 } from './element_ns'
`.trim()
}

const importsAttributesContent = () => {
  return `
// THIS FILE IS AUTOMATICALLY GENERATED, PLEASE DO NOT CHANGE DIRECTLY

import { DOMAttribute, DOMEventHandler } from './value'
import { CSSProperties } from './web_css_properties'
import { MoodAttributes } from './mood_attributes'`.trim()
}
