import { DOMTemplate, DOMChild } from '../template'
import { DOMContext } from '../context'
import { View } from 'tempo-core/lib/view'
import { map as mapArray } from 'tempo-std/lib/arrays'
import { IBuilder, childOrBuilderToTemplate } from './dom_builder'

export class MapQueryTemplate<State, Action, OuterQuery, InnerQuery>
  implements DOMTemplate<State, Action, OuterQuery> {
  readonly children: DOMTemplate<State, Action, InnerQuery>[]
  constructor(
    readonly map: (value: OuterQuery) => InnerQuery | undefined,
    children: (
      | DOMChild<State, Action, InnerQuery>
      | IBuilder<State, Action, InnerQuery>
    )[]
  ) {
    this.children = children.map(childOrBuilderToTemplate)
  }

  render(ctx: DOMContext<Action>, state: State): View<State, OuterQuery> {
    const { children, map } = this
    const views = mapArray(children, c => c.render(ctx, state))
    return {
      change: (state: State) => {
        for (const view of views) view.change(state)
      },
      destroy: () => {
        for (const view of views) view.destroy()
      },
      request: (query: OuterQuery) => {
        const innerQuery = map(query)
        if (innerQuery !== undefined) {
          views.forEach(view => view.request(innerQuery))
        }
      }
    }
  }
}
