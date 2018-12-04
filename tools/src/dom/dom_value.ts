export type DOMValue<State, Value> =
  undefined | Value | ((state: State) => (undefined | Value))
