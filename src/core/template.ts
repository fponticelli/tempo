import { View } from './view'

export type TemplateRender<State, Action, Context> = (
  ctx: Context,
  state: State,
  dispatch: (action: Action) => void
) => View<State>

export interface Template<State, Action, Context> {
  render: TemplateRender<State, Action, Context>
}
