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

import { keys } from 'tempo-std/lib/objects'
import { DerivedOrLiteralValue, DerivedValue } from 'tempo-core/lib/value'
import { DOMContext } from './context'

export type Attribute<State, Value> =
  | DerivedOrLiteralValue<State, Value | undefined>
  | undefined
export type TextValue<S> = Attribute<S, string>
export type EventHandler<
  S,
  Action,
  Ev extends Event = Event,
  El extends Element = Element
> = ((state: S, event: Ev, element: El) => Action | undefined) | undefined
export type StyleAttribute<State, Value> = DerivedOrLiteralValue<
  State,
  Value | undefined
>

export type ValueOfAttribute<
  Att extends Attribute<any, any>
> = Att extends Attribute<any, infer Value> ? Value : never

export type AttributeValue = string | number | boolean | string[]

export interface Props<
  State,
  Action,
  Query = unknown,
  El extends Element = Element,
  T = unknown
> {
  attrs?: Record<string, Attribute<State, AttributeValue>>
  events?: Record<string, EventHandler<State, Action, any, El>>
  styles?: Record<string, StyleAttribute<State, string>>
  afterrender?: (state: State, el: El, ctx: DOMContext<Action>) => T | undefined
  beforechange?: (
    state: State,
    el: El,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => T | undefined
  afterchange?: (
    state: State,
    el: El,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => T | undefined
  beforedestroy?: (
    el: El,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => void
  respond?: (
    query: Query,
    el: El,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => T | undefined
}

export function applyAttributes<State, A, B, C>(
  attrA: Attribute<State, A>,
  attrB: Attribute<State, B>,
  apply: (a: A, b: B) => C
): Attribute<State, C> {
  if (attrA === undefined) return undefined
  if (attrB === undefined) return undefined
  if (typeof attrA === 'function' && typeof attrB === 'function') {
    return (state: State) => {
      const resA = (attrA as DerivedValue<State, A>)(state)
      const resB = (attrB as DerivedValue<State, B>)(state)
      if (resA !== undefined && resB !== undefined) return apply(resA, resB)
      else return undefined
    }
  } else if (typeof attrA === 'function') {
    return (state: State) => {
      const resA = (attrA as DerivedValue<State, A>)(state)
      if (resA !== undefined) return apply(resA, attrB as B)
      else return undefined
    }
  } else if (typeof attrB === 'function') {
    return (state: State) => {
      const resB = (attrB as DerivedValue<State, B>)(state)
      if (resB !== undefined) return apply(attrA as A, resB)
      else return undefined
    }
  } else {
    return apply(attrA, attrB)
  }
}

export function mapAttribute<State, A, B>(
  attr: Attribute<State, A>,
  map: (a: A) => B
): Attribute<State, B> {
  if (attr === undefined) {
    return undefined
  } else if (typeof attr === 'function') {
    return (state: State) => {
      const res = (attr as DerivedValue<State, A>)(state)
      if (res !== undefined) return map(res)
      else return undefined
    }
  } else {
    return map(attr)
  }
}

export function mapAttributes<
  State,
  T extends { [_ in string]: Attribute<State, any> },
  B
>(
  attributes: T,
  map: (values: { [K in keyof T]: ValueOfAttribute<T[K]> }) => B
): Attribute<State, B> {
  const ks = keys(attributes)
  const isDynamic = ks.some(k => typeof attributes[k] === 'function')
  if (isDynamic) {
    return (state: State) => {
      const o = ks.reduce((acc: T, k: keyof T) => {
        acc[k] = resolveAttribute(attributes[k])(state) as T[typeof k]
        return acc
      }, {} as T)
      return map(o)
    }
  } else {
    return map(attributes as T)
  }
}

export function attributeToHandler<
  State,
  Value,
  Action,
  Ev extends Event,
  El extends Element
>(
  attr: Attribute<State, Value>,
  handler: EventHandler<Value, Action, Ev, El>
): EventHandler<State, Action, Ev, El> | undefined {
  if (attr === undefined || handler === undefined) {
    return () => {
      return undefined
    }
  } else if (typeof attr === 'function') {
    return (state: State, event: Ev, element: El) => {
      const res = (attr as DerivedValue<State, Value>)(state)
      if (res !== undefined) return handler(res, event, element)
      else return undefined
    }
  } else {
    return (_: State, event: Ev, element: El) => {
      return handler(attr, event, element)
    }
  }
}

export function resolveAttribute<State, Value>(attr: Attribute<State, Value>) {
  if (typeof attr === 'function') {
    return attr as DerivedValue<State, Value>
  } else {
    return (_: State): Value | undefined => attr
  }
}
