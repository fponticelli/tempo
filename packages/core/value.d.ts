export declare type UnwrappedLiteralValue<Value> = Value;
export declare type UnwrappedDerivedValue<State, Value> = (state: State) => Value | undefined;
export declare type UnwrappedValue<S, V> = UnwrappedLiteralValue<V> | UnwrappedDerivedValue<S, V>;
declare abstract class WrappedValueBase<State, Value> {
    abstract readonly kind: 'literal' | 'derived';
    abstract resolve(state: State): Value | undefined;
}
export declare class WrappedLiteralValue<State, Value> extends WrappedValueBase<never, Value> {
    readonly value: UnwrappedLiteralValue<Value>;
    readonly kind = "literal";
    constructor(value: UnwrappedLiteralValue<Value>);
    resolve(_: State): Value | undefined;
}
export declare class WrappedDerivedValue<State, Value> extends WrappedValueBase<State, Value> {
    readonly map: UnwrappedDerivedValue<State, Value>;
    readonly kind = "derived";
    constructor(map: UnwrappedDerivedValue<State, Value>);
    resolve(state: State): Value | undefined;
}
export declare type WrappedValue<S, V> = WrappedLiteralValue<S, V> | WrappedDerivedValue<S, V>;
export declare type WrappedOrUnwrappedValue<S, V> = UnwrappedValue<S, V> | WrappedValue<S, V>;
export declare const derived: <State, Value>(map: UnwrappedDerivedValue<State, Value>) => WrappedDerivedValue<State, Value>;
export declare const literal: <State, Value>(value: Value) => WrappedValue<State, Value>;
export declare const wrapLiteral: <State, Value>(value: Value | WrappedDerivedValue<State, Value>) => WrappedValue<State, Value>;
export {};
//# sourceMappingURL=value.d.ts.map