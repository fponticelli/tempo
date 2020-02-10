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

import { DerivedValue } from 'tempo-core/lib/value'
import { Attribute, EventHandler, StyleAttribute } from '../value'
import { htmlAttributeMap as attributeMap } from './attributes_mapper'
import { setAttribute, setOneStyle } from './set_attribute'
import { DOMChild, DOMTemplate } from '../template'
import { text } from '../text'

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
  return function(node: Node) {
    if (ref.parentElement != null) {
      ref.parentElement.insertBefore(node, ref)
    }
  }
}

export function domChildToTemplate<State, Action, Query>(
  dom: DOMChild<State, Action, Query>
): DOMTemplate<State, Action, Query> {
  if (
    typeof dom === 'string' ||
    typeof dom === 'function' ||
    typeof dom === 'undefined'
  )
    return text(dom)
  else return dom
}

export type Acc<State> = ((state: State) => void)[]

export function processAttribute<State, Value>(
  el: Element,
  name: string,
  value: Attribute<State, Value>,
  acc: Acc<State>
): Acc<State> {
  let set = attributeMap[name] || setAttribute

  if (typeof value === 'function') {
    // state in inputs can incorrectly map to state
    if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
      const f = (state: State) => {
        const newValue = (value as DerivedValue<State, Value>)(state)
        set(el, name, newValue)
      }
      acc.push(f)
    } else {
      let oldValue: Value | undefined = undefined
      const f = (state: State) => {
        const newValue = (value as DerivedValue<State, Value>)(state)
        if (newValue !== oldValue) {
          set(el, name, newValue)
          if (String(newValue).length < 50000) {
            oldValue = newValue
          }
        }
      }
      acc.push(f)
    }
  } else {
    set(el, name, value)
  }
  return acc
}

export function processEvent<
  State,
  El extends Element,
  Ev extends Event,
  Action
>(
  el: El,
  name: string,
  value: EventHandler<State, Action, Ev, El>,
  dispatch: (action: Action) => void,
  acc: Acc<State>
): Acc<State> {
  let localState: State
  const anyEl = el as any
  anyEl[name] = (ev: Ev) => {
    const r = value(localState, ev as Ev, el)
    if (typeof r !== 'undefined') {
      dispatch(r)
    }
  }

  const f = (state: State) => {
    localState = state
  }
  acc.push(f)
  return acc
}

export function processStyle<State, Value>(
  el: Element,
  name: string,
  value: StyleAttribute<State, Value>,
  acc: Acc<State>
): Acc<State> {
  if (typeof value === 'function') {
    let oldValue: Value | undefined
    const f = (state: State) => {
      const newValue = (value as DerivedValue<State, Value>)(state)
      if (newValue !== oldValue) {
        setOneStyle(el, name, newValue)
        oldValue = newValue
      }
    }
    acc.push(f)
  } else {
    setOneStyle(el, name, value)
  }
  return acc
}

export const containerSize = (el: HTMLElement) => {
  const prev = []
  for (let i = 0; i < el.children.length; i++) {
    const child = el.children[i] as HTMLElement
    prev[i] = child.style.display
    child.style.display = 'none'
  }
  const size = {
    width: el.offsetWidth,
    height: el.offsetHeight
  }
  for (let i = 0; i < el.children.length; i++) {
    const child = el.children[i] as HTMLElement
    child.style.display = prev[i]
  }
  return size
}
