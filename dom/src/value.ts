/* istanbul ignore next */
import { UnwrappedValue } from '@mood/core/lib/value'
import { DOMContext } from './context'

export type DOMAttribute<State, Value> = UnwrappedValue<State, Value>
export type DOMTextValue<S> = DOMAttribute<S, string>
export type DOMEventHandler<S, Action, El extends Element = Element, Ev extends Event = any> =
  (state: S, event: Ev, element: El) => Action | undefined
export type DOMStyleAttribute<State, Value> = UnwrappedValue<State, Value>

export type AttributeValue = string | number | boolean | string[]

export interface DOMAttributes<State, Action, El extends Element, T> {
  attrs?: Record<string, DOMAttribute<State, AttributeValue>>
  afterrender?:  (state: State, el: El, ctx: DOMContext<Action>) => T | undefined
  beforechange?: (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
  afterchange?:  (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
  beforedestroy?: ((el: El, ctx: DOMContext<Action>, value: T | undefined) => void)
  events?: Record<string, DOMEventHandler<State, Action, El>>
  styles?: Record<string, DOMStyleAttribute<State, string>>
}
