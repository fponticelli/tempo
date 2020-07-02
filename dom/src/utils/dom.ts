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

import { AttributeValue } from '../value'
import { htmlAttributeMap as attributeMap } from './attributes_mapper'
import { setAttribute } from './set_attribute'

export function removeNode(node: Node) {
  const el = node as HTMLElement
  if (el && el.onblur) {
    el.onblur = null
  }
  if (!node || node.ownerDocument === undefined) return
  if (node.parentElement) {
    node.parentElement.removeChild(node)
  }
}

export function insertFBefore(ref: Node) {
  return function (node: Node) {
    if (ref.parentElement != null) {
      ref.parentElement.insertBefore(node, ref)
    }
  }
}

export function makeCreateElement(name: string) {
  return (doc: Document) => (doc.createElement(name) as any) as HTMLElement
}

export function makeCreateElementNS(namespace: string, name: string) {
  return (doc: Document) => doc.createElementNS(namespace, name) as HTMLElement // TODO
}

export type Acc<State> = ((state: State) => void)[]

export function setElAttribute(
  el: Element,
  name: string,
  value: AttributeValue | undefined
) {
  let set = attributeMap[name] || setAttribute
  set(el, name, value)
}
