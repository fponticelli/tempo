/* istanbul ignore next */
import { UnwrappedValue, UnwrappedLiteralValue, WrappedDerivedValue } from '../core/value'

export type DOMAttribute<S, V> = UnwrappedValue<S, V>
export type DOMEventHandler<S, E, Action> =
  | UnwrappedLiteralValue<(event: E) => Action>
  | WrappedDerivedValue<S, (event: E) => Action>
export type DOMProperty<S, V> = DOMAttribute<S, V>
export type DOMTextValue<S> = DOMAttribute<S, string>

/* istanbul ignore next */
export { derived } from '../core/value'
