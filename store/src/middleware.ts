export type Middleware<State, Action> =
  (state: State, action: Action, dispatch: (action: Action) => void) => void

export const effectAction = <State, Action>(f: (action: Action) => void): Middleware<State, Action> =>
  (state: State, action: Action, dispatch: (action: Action) => void) => f(action)
