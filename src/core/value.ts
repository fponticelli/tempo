export type UnwrappedLiteralValue<Value> = Value
export type UnwrappedDerivedValue<State, Value> = (state: State) => (Value | undefined)
export type UnwrappedValue<S, V> = UnwrappedLiteralValue<V> | UnwrappedDerivedValue<S, V>

abstract class WrappedValueBase<State, Value> {
  abstract readonly kind: 'literal' | 'derived'
  abstract resolve(state: State): Value | undefined
}

export class WrappedLiteralValue<State, Value> extends WrappedValueBase<never, Value> {
  readonly kind = 'literal'
  constructor(readonly value: UnwrappedLiteralValue<Value>) {
    super()
  }
  resolve(_: State): Value | undefined {
    return this.value
  }
}

export class WrappedDerivedValue<State, Value> extends WrappedValueBase<State, Value> {
  readonly kind = 'derived'
  constructor(readonly map: UnwrappedDerivedValue<State, Value>) {
    super()
  }
  resolve(state: State): Value | undefined {
    return this.map(state)
  }
}

export type WrappedValue<S, V> = WrappedLiteralValue<S, V> | WrappedDerivedValue<S, V>

export const derived = <State, Value>(map: UnwrappedDerivedValue<State, Value>): WrappedDerivedValue<State, Value> =>
  new WrappedDerivedValue(map)
export const literal = <State, Value>(value: UnwrappedLiteralValue<Value>): WrappedValue<State, Value> =>
  new WrappedLiteralValue(value)
