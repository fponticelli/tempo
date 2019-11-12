/* istanbul ignore next */
import { UnwrappedLiteralValue, WrappedDerivedValue, UnwrappedValue } from '@mood/core/lib/value'
import { DOMContext } from './context'

export type DOMEventHandler<S, E extends Event, Action> =
  | UnwrappedLiteralValue<(event: E) => Action | undefined>
  | WrappedDerivedValue<S, (event: E) => Action | undefined>
export type DOMTextValue<S> = DOMAttribute<S, string>
export type DOMAttribute<State, Value> = UnwrappedValue<State, Value>
export type DOMStyleAttribute<State, Value> = UnwrappedValue<State, Value>

export type AttributeValue = string | number | boolean | string[]

export interface DOMAttributes<State, Action, El extends Element, T> {
  attrs?: Record<string, DOMAttribute<State, AttributeValue>>
  afterrender?:  (state: State, el: El, ctx: DOMContext<Action>) => T | undefined
  beforechange?: (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
  afterchange?:  (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined
  beforedestroy?: ((el: El, ctx: DOMContext<Action>, value: T | undefined) => void)
  events?: Record<string, DOMEventHandler<State, any, Action>>
  styles?: Record<string, DOMStyleAttribute<State, string>>
}
