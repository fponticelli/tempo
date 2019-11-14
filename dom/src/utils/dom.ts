/*
Copyright 2018 Google LLC
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

import { View, DynamicView } from '@mood/core/lib/view'
import { UnwrappedDerivedValue } from '@mood/core/lib/value'
import { DOMAttribute, DOMEventHandler, DOMStyleAttribute } from '../value'
import { htmlAttributeNameMap as attributeNameMap, htmlAttributeMap as attributeMap } from '../dom_attributes_mapper'
import { setAttribute, setOneStyle } from './set_attribute'
import { DOMChild, DOMTemplate } from '../template'
import { text } from '../text'

export const removeNode = (node: Node) => {
  const el = node as HTMLElement
  if (el && el.onblur) {
    el.onblur = null
  }
  if (node && node.parentElement) {
    node.parentElement.removeChild(node)
  }
}

export const insertBefore = (ref: Node) => (node: Node) => {
  if (ref.parentElement != null) {
    ref.parentElement.insertBefore(node, ref)
  }
}

export const filterDynamics = <State>(children: View<State>[]) =>
  children.filter(child => child.kind === 'dynamic') as DynamicView<State>[]

export const domChildToTemplate = <State, Action>(dom: DOMChild<State, Action>): DOMTemplate<State, Action> => {
  if (typeof dom === 'string' || typeof dom === 'function') return text(dom)
  else return dom
}

export type Acc<State> = ((state: State) => void)[]

export const processAttribute = <State, Action>(
  el: Element,
  name: string,
  value: DOMAttribute<State, Action>,
  acc: Acc<State>
): Acc<State> => {
  name = name.toLowerCase()
  name = attributeNameMap[name] || name

  let set = attributeMap[name] || setAttribute

  if (typeof value === 'function') {
    const f = (state: State) => set(el, name, (value as UnwrappedDerivedValue<State, Action>)(state))
    acc.push(f)
  } else {
    set(el, name, value)
  }
  return acc
}

export const processEvent = <State, El extends Element, Ev extends Event, Action>(
  el: El,
  name: string,
  value: DOMEventHandler<State, Action, Ev, El>,
  dispatch: (action: Action) => void,
  acc: Acc<State>
): Acc<State> => {
  const anyEl = el as any
  name = 'on' + name.toLowerCase()
  const f = (state: State) => {
    anyEl[name] = (ev: Ev) => {
      const r = value(state, ev, el)
      if (r != null) {
        dispatch(r)
      }
    }
  }
  acc.push(f)
  return acc
}

export const processStyle = <State, Action>(
  el: Element,
  name: string,
  value: DOMStyleAttribute<State, Action>,
  acc: Acc<State>
): Acc<State> => {
  name = name.toLowerCase()

  let set = setOneStyle

  if (typeof value === 'function') {
    const f = (state: State) => set(el, name, (value as UnwrappedDerivedValue<State, Action>)(state))
    acc.push(f)
  } else {
    set(el, name, value)
  }
  return acc
}
