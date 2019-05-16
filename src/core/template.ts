import { View } from './view'

export type TemplateRender<State, Context> = (ctx: Context, state: State) => View<State>

export interface Template<State, Context> {
  render: TemplateRender<State, Context>
}
