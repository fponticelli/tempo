import { CSSProperties } from '../web_css_properties'

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

export const setEvent = <Action>(dispatch: (action: Action) => void) => {
  return (el: Element, name: string, value: (e: Event) => Action | undefined) => {
    const anyEl = el as any
    if (value == null) {
      anyEl[name] = null
    } else {
      anyEl[name] = (e: Event) => {
        const r = value(e)
        if (r != null) dispatch(r)
      }
    }
  }
}

export const setAttribute = (el: Element, name: string, value: string) => {
  if (value == null) {
    el.removeAttribute(name)
  } else {
    const s = String(value)
    if (s !== el.getAttribute(name)) {
      el.setAttribute(name, s)
    }
  }
}

export const setProperty = (el: Element, name: string, value: any | undefined) => {
  const anyEl = el as any
  if (value == null && anyEl[name] != null) {
    anyEl[name] = null
  } else if (anyEl[name] !== value) {
    anyEl[name] = value
  }
}

export const setStyleAttribute = (el: Element, name: string, value: CSSProperties | undefined) => {
  const html = el as HTMLElement
  if (value == null) {
    html.removeAttribute(name)
  } else {
    const s = Object.keys(value)
      .map(k => {
        // const cssName = cssMapper[k as keyof (typeof cssMapper)] || k
        return `${k}: ${(value as any)[k]!};`
      })
      .join(' ')
    setAttribute(el, name, (s.length && s) || (null as any))
  }
}

export const setBoolProperty = (el: Element, name: string, value: boolean | undefined) => {
  const anyEl = el as any
  if (value == null) {
    anyEl[name] = null
  } else {
    const bool = Boolean(value)
    if (anyEl[name] !== bool) {
      anyEl[name] = bool
    }
  }
}

export const setEnumBoolAttribute = (el: Element, name: string, value: boolean | undefined) => {
  setAttribute(el, name, value === true ? 'true' : value === false ? 'false' : (null as any))
}

export const setBoolAttribute = (el: Element, name: string, value: boolean | undefined) => {
  setAttribute(el, name, value === true ? '' : (null as any))
}

export const setCommaSeparated = (el: Element, name: string, values: string[] | undefined) => {
  setAttribute(el, name, (values && values.length > 0 && values.join(', ')) || (null as any))
}

export const setSpaceSeparated = (el: Element, name: string, values: string[] | undefined) => {
  setAttribute(el, name, (values && values.length > 0 && values.join(' ')) || (null as any))
}
