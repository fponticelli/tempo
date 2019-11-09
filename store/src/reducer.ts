export type Reducer<State, Action> = (state: State, action: Action) => State

export const compose = <State, Action>(reducer: Reducer<State, Action>, ...others: Reducer<State, Action>[]) => (
  state: State,
  action: Action
) => {
  return others.reduce((s, f) => f(s, action), reducer(state, action))
}
