export const setOneStyle = (el: Element, name: string, value: any) => {
  const anyStyle = (el as HTMLElement).style as any
  if (value == null) {
    anyStyle[name] = null
  } else {
    const s = String(value)
    if (s !== anyStyle[name]) {
      anyStyle[name] = String(value)
    }
  }
}

export const setAttribute = (el: Element, name: string, value: any) => {
  if (value == null) {
    el.removeAttribute(name)
  } else {
    const s = String(value)
    if (s !== el.getAttribute(name)) {
      el.setAttribute(name, s)
    }
  }
}

export const setProperty = (el: Element, name: string, value: any) => {
  const anyEl = el as any
  if (value == null && anyEl[name] != null) {
    anyEl[name] = null
  } else if (anyEl[name] !== value) {
    anyEl[name] = value
  }
}

export const setStyleAttribute = (el: Element, name: string, value: any) => {
  const html = el as HTMLElement
  if (value == null) {
    html.removeAttribute(name)
  } else if (typeof value === 'string') {
    setAttribute(el, name, value)
  } else {
    const s = Object.keys(value)
      .map(k => {
        return `${k}: ${(value as any)[k]!};`
      })
      .join(' ')
    setAttribute(el, name, (s.length && s) || (null as any))
  }
}

export const setBoolProperty = (el: Element, name: string, value: any) => {
  const anyEl = el as any
  if (value == null) {
    anyEl[name] = null
  } else {
    const bool = value === true || value === 'true'
    if (anyEl[name] !== bool) {
      anyEl[name] = bool
    }
  }
}

export const setEnumBoolAttribute = (el: Element, name: string, value: any) => {
  setAttribute(el, name, value === true || value === 'true' ? 'true' : value === false ? 'false' : (null as any))
}

export const setBoolAttribute = (el: Element, name: string, value: any) => {
  setAttribute(el, name, value === true || value === 'true' ? '' : (null as any))
}

export const setCommaSeparated = (el: Element, name: string, values: any) => {
  if (Array.isArray(values)) setAttribute(el, name, values.join(', ') || (null as any))
  else setAttribute(el, name, (values && String(values)) || (null as any))
}

export const setSpaceSeparated = (el: Element, name: string, values: any) => {
  if (Array.isArray(values)) setAttribute(el, name, values.join(' ') || (null as any))
  else setAttribute(el, name, (values && String(values)) || (null as any))
}
