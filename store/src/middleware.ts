export type Middleware<State, Action> =
  (state: State, action: Action, dispatch: (action: Action) => void) => void

export const effectState = <State, Action>(f: (state: State) => void): Middleware<State, Action> =>
  (state: State, action: Action, dispatch: (action: Action) => void) => f(state)

export const effectAction = <State, Action>(f: (action: Action) => void): Middleware<State, Action> =>
  (state: State, action: Action, dispatch: (action: Action) => void) => f(action)

export const effect = <State, Action>(f: (state: State, action: Action) => void): Middleware<State, Action> =>
  (state: State, action: Action, dispatch: (action: Action) => void) => f(state, action)
