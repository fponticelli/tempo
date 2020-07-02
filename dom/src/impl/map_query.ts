import { DOMTemplate } from '../template'
import { DOMContext } from '../context'
import { View } from 'tempo-core/lib/view'
import { map as mapArray } from 'tempo-std/lib/arrays'
// import { domChildToTemplate } from '../utils/dom'

export class MapQueryTemplate<State, Action, OuterQuery, InnerQuery>
  implements DOMTemplate<State, Action, OuterQuery> {
  constructor(
    readonly map: (value: OuterQuery) => InnerQuery | undefined,
    readonly children: DOMTemplate<State, Action, InnerQuery>[]
  ) {}

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

// export function mapQuery<State, Action, OuterQuery, InnerQuery>(
//   props: { map: (value: OuterQuery) => InnerQuery },
//   ...children: DOMChild<State, Action, InnerQuery>[]
// ): DOMTemplate<State, Action, OuterQuery> {
//   return new MapQueryTemplate<State, Action, OuterQuery, InnerQuery>(
//     props.map,
//     mapArray(children, domChildToTemplate)
//   )
// }

// export function mapQueryConditional<State, Action, OuterQuery, InnerQuery>(
//   props: { map: (value: OuterQuery) => InnerQuery | undefined },
//   ...children: DOMChild<State, Action, InnerQuery>[]
// ): DOMTemplate<State, Action, OuterQuery> {
//   return new MapQueryTemplate<State, Action, OuterQuery, InnerQuery>(
//     props.map,
//     mapArray(children, domChildToTemplate)
//   )
// }
