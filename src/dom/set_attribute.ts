export const setOneStyle = (el: HTMLElement, name: string, value: any) => {
  const anyStyle = el.style as any
  if (value == null) {
    anyStyle[name] = null
  } else {
    anyStyle[name] = String(value)
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
    if (value !== el.getAttribute(name)) {
      el.setAttribute(name, value)
    }
  }
}

export const setNumberAttribute = (el: Element, name: string, value: number) => {
  if (value == null) {
    el.removeAttribute(name)
  } else {
    const s = String(value)
    if (s !== el.getAttribute(name)) {
      el.setAttribute(name, s)
    }
  }
}

// export const setProperty = (el: Element, name: string, value: any | undefined) => {
//   if (value == null) {
//     delete (el as any)[name]
//     return
//   }
//   if ((el as any)[name] !== value) (el as any)[name] = value
// }

// export const setBoolProperty = (el: Element, name: string, value: boolean | undefined) => {
//   if (value == null) {
//     delete (el as any)[name]
//     return
//   }
//   const bool = Boolean(value)
//   if ((el as any)[name] !== bool) (el as any)[name] = bool
// }

export const setEnumBoolAttribute = (el: Element, name: string, value: boolean | undefined) => {
  if (value == null) el.removeAttribute(name)
  else el.setAttribute(name, value ? 'true' : 'false')
}

export const setBoolAttribute = (el: Element, name: string, value: boolean | undefined) => {
  if (value == null || !value) el.removeAttribute(name)
  else el.setAttribute(name, '')
}

export const setCommaSeparated = (el: Element, name: string, values: string[] | undefined) => {
  if (values == null || values.length === 0) el.removeAttribute(name)
  else el.setAttribute(name, values.join(', '))
}

export const setSpaceSeparated = (el: Element, name: string, values: string[] | undefined) => {
  if (values == null || values.length === 0) el.removeAttribute(name)
  else el.setAttribute(name, values.join(' '))
}
