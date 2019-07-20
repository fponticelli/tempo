import { View } from './view'

export type RenderMethod<State, Context> = (ctx: Context, state: State) => View<State>

export interface Template<State, Context> {
  render: RenderMethod<State, Context>
}
