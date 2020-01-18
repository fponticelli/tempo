/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { map } from 'tempo-std/lib/arrays'

export function setOneStyle(el: Element, name: string, value: any) {
  const anyStyle = (el as HTMLElement).style as any
  if (value == null) {
    anyStyle[name] = null
  } else {
    anyStyle[name] = value
  }
}

export function setAttribute(el: Element, name: string, value: any) {
  if (value == null) {
    el.removeAttribute(name)
  } else {
    el.setAttribute(name, value)
  }
}

export function setProperty(el: Element, name: string, value: any) {
  const anyEl = el as any
  if (value == null) {
    anyEl[name] = null
  } else {
    anyEl[name] = value
  }
}

export function setStyleAttribute(el: Element, name: string, value: any) {
  const html = el as HTMLElement
  if (value == null) {
    html.removeAttribute(name)
  } else if (typeof value === 'string') {
    setAttribute(el, name, value)
  } else {
    const s = map(k => `${k}: ${(value as any)[k]!};`, Object.keys(value)).join(
      ' '
    )
    setAttribute(el, name, (s.length && s) || (null as any))
  }
}

export function setBoolProperty(el: Element, name: string, value: any) {
  const anyEl = el as any
  if (value == null) {
    anyEl[name] = null
  } else {
    const bool = value === true || value === 'true'
    anyEl[name] = bool
  }
}

export function setEnumBoolAttribute(el: Element, name: string, value: any) {
  setAttribute(
    el,
    name,
    value === true || value === 'true'
      ? 'true'
      : value === false
      ? 'false'
      : (null as any)
  )
}

export function setBoolAttribute(el: Element, name: string, value: any) {
  setAttribute(
    el,
    name,
    value === true || value === 'true' ? '' : (null as any)
  )
}

export function setCommaSeparated(el: Element, name: string, values: any) {
  if (Array.isArray(values))
    setAttribute(el, name, values.join(', ') || (null as any))
  else setAttribute(el, name, (values && String(values)) || (null as any))
}

export function setSpaceSeparated(el: Element, name: string, values: any) {
  if (Array.isArray(values))
    setAttribute(el, name, values.join(' ') || (null as any))
  else setAttribute(el, name, (values && String(values)) || (null as any))
}
