import * as Browser from './tslib/types'

const extendsElement = (records: Record<string, Browser.Interface>) => (inter: Browser.Interface): boolean => {
  if (inter.extends === 'Element') return true
  if (!records[inter.extends]) return false
  return extendsElement(records)(records[inter.extends])
}

export const getElementTypes = (webidl: Browser.WebIdl, forceKnownTypes: Set<string>) => {
  if (!webidl.interfaces) return
  const records = webidl.interfaces.interface
  const elements = Object.values(records)
    .filter(extendsElement(records))
    .filter(e => !!e.element)
  const result = elements.map(interfaceTemplate(webidl)).join('\n\n')
  console.log(result.split('\n').length)
  return result
}

export const elementTemplate = (inter: Browser.Interface) => (el: Browser.Element) => {
  // const ns = el.namespace || 'HTML'
  const name = el.name
  const fname = name
  const attributesTypeName = getAttributesTypeName(inter)

  const content = `export function ${fname}<State, Action>(
  attributes: ${attributesTypeName}<State, Action> & CSSAttributes<State> & MoodAttributes<State, {el.domInterface}>,
  ...children: DOMChild<State, Action>[]
): DOMElement<State, Action> {
  return el<State, Action>('{el.domName}', attributes, ...children)
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
      const mixin = webidl.mixins!.mixin[curr]
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
  return !prop.deprecated && !prop['read-only'] && !excludeProperties.has(prop.name)
}

const propertyTypes: Record<string, string> = {
  DOMString: 'string',
  'unsigned long': 'number',
  'unrestricted double': 'number'
}

const mapPropertyType = (type: string): string => {
  return propertyTypes[type] || type.replace('"', "'")
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

const propertyTemplate = (prop: Browser.Property) => {
  const types = extractTypes(prop)
  const names = types.names.map(mapPropertyType)
  // if (!types.nullable) {
  //   console.log(types)
  // }
  // if (prop.type === 'EventHandler') {
  //   console.log(prop)
  // }
  // onMouseLeave?: DOMEventHandler<State, MouseEvent, Action>
  return `${prop.name}${types.nullable ? '?' : ''}: DOMAttribute<State, ${names.join(' | ')}>`
}

const comparePropertyByType = (a: Browser.Property, b: Browser.Property): number => {
  const aIsEvent = typeof a.type === 'string' && a.type.indexOf('EventHandler') >= 0
  const bIsEvent = typeof b.type === 'string' && b.type.indexOf('EventHandler') >= 0
  if ((aIsEvent && bIsEvent) || (!aIsEvent && !bIsEvent))
    return 0
  if (typeof a.type === 'string' && a.type.indexOf('EventHandler') >= 0)
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

export const attributesTypeTemplate = (webidl: Browser.WebIdl) => (inter: Browser.Interface) => {
  const name = getAttributesTypeName(inter)
  const properties = Object.values(collectProperties(webidl)(inter))
    .filter(isExposableProperty)
    .sort(compareProperty)
  // console.log(properties)
  return `export interface ${name}<State, Action> {
  ${properties.map(propertyTemplate).join(',\n  ')}
}`
}

export const interfaceTemplate = (webidl: Browser.WebIdl) => (inter: Browser.Interface) => {
  // console.log(inter)
  if (!inter.element) return ''
  const result = [
      attributesTypeTemplate(webidl)(inter)
    ]
    .concat(inter.element.map(elementTemplate(inter)))
    .join('\n\n')
  // console.log(result)
  return result
}
