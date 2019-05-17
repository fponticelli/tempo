import { UnwrappedValue, UnwrappedLiteralValue, WrappedDerivedValue } from '@mood/core/value';
export declare type DOMAttribute<S, V> = UnwrappedValue<S, V>;
export declare type DOMEventHandler<S, E, Action> = UnwrappedLiteralValue<(event: E) => Action | undefined> | WrappedDerivedValue<S, (event: E) => Action | undefined>;
export declare type DOMProperty<S, V> = DOMAttribute<S, V>;
export declare type DOMTextValue<S> = DOMAttribute<S, string>;
export declare type MoodAttribute<S, El> = UnwrappedLiteralValue<(el: El) => void> | WrappedDerivedValue<S, (el: El) => void>;
export declare const lifecycle: <State, Action, E extends Element>(f: (state: State) => (el: E) => void) => WrappedDerivedValue<State, (el: E) => void>;
export declare const handler: <State, Action, E extends Event>(f: (state: State) => ((event: E) => Action | undefined) | undefined) => WrappedDerivedValue<State, (event: E) => Action | undefined>;
export declare const stateHandler: <State, Action>(f: (state: State) => Action | undefined) => WrappedDerivedValue<State, (event: Event) => Action | undefined>;
//# sourceMappingURL=value.d.ts.map