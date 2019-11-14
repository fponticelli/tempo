export type UnwrappedLiteralValue<Value> = Value
export type UnwrappedDerivedValue<State, Value> = (state: State) => Value | undefined
export type UnwrappedValue<S, V> = UnwrappedLiteralValue<V> | UnwrappedDerivedValue<S, V>
