/* istanbul ignore next */
import { UnwrappedValue, UnwrappedLiteralValue, WrappedDerivedValue } from '../core/value'

export type DOMAttribute<S, V> = UnwrappedValue<S, V>
export type DOMEventHandler<S, E, Action> =
  | UnwrappedLiteralValue<(event: E) => (Action | undefined)>
  | WrappedDerivedValue<S, (event: E) => (Action | undefined)>
export type DOMProperty<S, V> = DOMAttribute<S, V>
export type DOMTextValue<S> = DOMAttribute<S, string>
export type MoodAttribute<S, El> =
  | UnwrappedLiteralValue<(el: El) => void>
  | WrappedDerivedValue<S, (el: El) => void>

/* istanbul ignore next */
export { derived } from '../core/value'
