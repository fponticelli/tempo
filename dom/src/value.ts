/* istanbul ignore next */
import { UnwrappedLiteralValue, WrappedDerivedValue, UnwrappedValue } from '@mood/core/lib/value'

export type DOMEventHandler<S, E extends Event, Action> =
  | UnwrappedLiteralValue<(event: E) => Action | undefined>
  | WrappedDerivedValue<S, (event: E) => Action | undefined>
export type DOMTextValue<S> = DOMAttribute<S, string>
export type MoodAttribute<S, El> = UnwrappedLiteralValue<(el: El) => void> | WrappedDerivedValue<S, (el: El) => void>
export type DOMAttribute<State, Value> = UnwrappedValue<State, Value>
export type DOMStyleAttribute<State, Value> = UnwrappedValue<State, Value>

export type AttributeValue = string | number | boolean | string[]

export interface DOMAttributes<State, Action, El extends Element> {
  attrs?: Record<string, DOMAttribute<State, AttributeValue>>
  afterrender?: MoodAttribute<State, El>
  beforechange?: MoodAttribute<State, El>
  afterchange?: MoodAttribute<State, El>
  beforedestroy?: ((el: El) => void)
  events?: Record<string, DOMEventHandler<State, any, Action>>
  styles?: Record<string, DOMStyleAttribute<State, string>>
}
