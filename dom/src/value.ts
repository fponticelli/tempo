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

import { DerivedOrLiteralValue, DerivedValue } from 'tempo-core/lib/value'
import { DOMContext } from './context'

export type Attribute<State, Value> = DerivedOrLiteralValue<State, Value | undefined> | undefined
export type TextValue<S> = Attribute<S, string>
export type EventHandler<S, Action, Ev extends Event = Event, El extends Element = Element> =
  (state: S, event: Ev, element: El) => Action | undefined
export type StyleAttribute<State, Value> = DerivedOrLiteralValue<State, Value | undefined>

export type AttributeValue = string | number | boolean | string[]

export interface Attributes<State, Action, Query = unknown, El extends Element = Element, T = unknown> {
  attrs?: Record<string, Attribute<State, AttributeValue>>
  events?: Record<string, EventHandler<State, Action, any, El>>
  styles?: Record<string, StyleAttribute<State, string>>
  afterrender?:  (state: State, el: El, ctx: DOMContext<Action>) => T | undefined
  beforechange?: (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
  afterchange?:  (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
  beforedestroy?: (el: El, ctx: DOMContext<Action>, value: T | undefined) => void
  respond?: (query: Query, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
}

export function mapAttribute<State, A, B>(attr: Attribute<State, A>, map: (a: A) => B): Attribute<State, B> {
  if (typeof attr === 'undefined') {
    return undefined
  } else if (typeof attr === 'function') {
    return (state: State) => {
      const res = (attr as DerivedValue<State, A>)(state)
      if (res !== undefined)
        return map(res)
      else
        return undefined
    }
  } else {
    return map(attr)
  }
}

export function attributeToHandler<State, Value, Action, Ev extends Event, El extends Element>(
  attr: Attribute<State, Value>,
  handler: EventHandler<Value, Action, Ev, El>
): EventHandler<State, Action, Ev, El> {
  if (typeof attr === 'undefined') {
    return () => { return undefined }
  } else if (typeof attr === 'function') {
    return (state: State, event: Ev, element: El) => {
      const res = (attr as DerivedValue<State, Value>)(state)
      if (res !== undefined)
        return handler(res, event, element)
      else
        return undefined
    }
  } else {
    return (_: State, event: Ev, element: El) => {
      return handler(attr, event, element)
    }
  }
}

export function resolveAttribute<State, Value>(attr: Attribute<State, Value>): ((state: State) => Value | undefined) {
  if (typeof attr === 'function') {
    return (attr as DerivedValue<State, Value>)
  } else {
    return (_: State): Value | undefined => attr
  }
}
