/* istanbul ignore next */
import { UnwrappedValue, UnwrappedLiteralValue, WrappedDerivedValue, derived } from '../core/value'

export type DOMAttribute<S, V> = UnwrappedValue<S, V>
export type DOMEventHandler<S, E, Action> =
  | UnwrappedLiteralValue<(event: E) => Action | undefined>
  | WrappedDerivedValue<S, (event: E) => Action | undefined>
export type DOMProperty<S, V> = DOMAttribute<S, V>
export type DOMTextValue<S> = DOMAttribute<S, string>
export type MoodAttribute<S, El> = UnwrappedLiteralValue<(el: El) => void> | WrappedDerivedValue<S, (el: El) => void>

export const lifecycle = <State, Action, E extends Element>(f: (state: State) => (el: E) => void) =>
  derived<State, (el: E) => void>(f)

export const handler = <State, Action, E extends Event>(
  f: (state: State) => ((event: E) => Action | undefined) | undefined
) => derived<State, (event: E) => Action | undefined>(f)

export const stateHandler = <State, Action>(f: (state: State) => Action | undefined) =>
  derived<State, (event: Event) => Action | undefined>((s: State) => (_: Event) => f(s))
