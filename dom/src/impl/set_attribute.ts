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

export function setAttribute(
  el: Element,
  name: string,
  value: string | undefined
) {
  if (value == null || value === '') {
    el.removeAttribute(name)
  } else {
    el.setAttribute(name, value)
  }
}

export function setNumberProperty(
  el: Element,
  name: string,
  value: string | undefined
) {
  const anyEl = el as any
  if (value == null) {
    anyEl[name] = null
  } else {
    anyEl[name] = Number(value)
  }
}

export function setProperty(
  el: Element,
  name: string,
  value: string | undefined
) {
  const anyEl = el as any
  if (value == null) {
    anyEl[name] = null
  } else {
    anyEl[name] = value
  }
}

export function setBoolProperty(
  el: Element,
  name: string,
  value: string | undefined
) {
  const anyEl = el as any
  if (value == null) {
    anyEl[name] = null
  } else {
    anyEl[name] = value === name
  }
}
