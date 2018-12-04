import { View } from './view'

export interface Template<State, Action, Context> {
  render(
    ctx: Context,
    state: State,
    dispatch: (action: Action) => void
  ): View<State>
}
