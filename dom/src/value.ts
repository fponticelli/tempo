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

/* istanbul ignore next */
import { UnwrappedValue } from '@tempo/core/lib/value'
import { DOMContext } from './context'

export type DOMAttribute<State, Value> = UnwrappedValue<State, Value>
export type DOMTextValue<S> = DOMAttribute<S, string>
export type DOMEventHandler<S, Action, Ev extends Event = Event, El extends Element = Element> =
  (state: S, event: Ev, element: El) => Action | undefined
export type DOMStyleAttribute<State, Value> = UnwrappedValue<State, Value>

export type AttributeValue = string | number | boolean | string[]

export interface DOMAttributes<State, Action, El extends Element, T> {
  attrs?: Record<string, DOMAttribute<State, AttributeValue>>
  events?: Record<string, DOMEventHandler<State, Action, any, El>>
  styles?: Record<string, DOMStyleAttribute<State, string>>
  afterrender?:  (state: State, el: El, ctx: DOMContext<Action>) => T | undefined
  beforechange?: (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
  afterchange?:  (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
  beforedestroy?: ((el: El, ctx: DOMContext<Action>, value: T | undefined) => void)
}
