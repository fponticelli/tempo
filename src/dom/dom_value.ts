/* istanbul ignore next */
import { UnwrappedValue, UnwrappedLiteralValue, WrappedDerivedValue } from '../core/value'

export type DOMAttribute<S, V> = UnwrappedValue<S, V>
export type DOMEvent<S, V> = UnwrappedLiteralValue<V> | WrappedDerivedValue<S, V>
export type DOMProperty<S, V> = DOMAttribute<S, V>
export type DOMTextValue<S> = DOMAttribute<S, string>

/* istanbul ignore next */
export { derived } from '../core/value'
