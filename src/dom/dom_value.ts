export type DOMValueLiteral<Value> = Value
export type DOMValueFunction<State, Value> = (state: State) => DOMValueLiteral<Value>

export type DOMValue<State, Value> = DOMValueLiteral<Value> | DOMValueFunction<State, Value>
