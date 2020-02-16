/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { PaperTemplate } from './template'
import { View } from 'tempo-core/lib/view'
import { PaperContext } from './context'
import { map as mapArray } from 'tempo-std/lib/arrays'

class MapStateTemplate<OuterState, InnerState, Action, Query>
  implements PaperTemplate<OuterState, Action, Query> {
  constructor(
    readonly map: (value: OuterState) => InnerState,
    readonly children: PaperTemplate<InnerState, Action, Query>[]
  ) {}

  render(
    ctx: PaperContext<Action>,
    state: OuterState
  ): View<OuterState, Query> {
    const { children, map } = this
    const innerState = map(state)
    const views = mapArray(children, c => c.render(ctx, innerState))

    return {
      change: (state: OuterState) => {
        const innerState = map(state)
        for (const view of views) view.change(innerState)
      },
      destroy: () => {
        for (const view of views) view.destroy()
      },
      request: (query: Query) => {
        for (const view of views) view.request(query)
      }
    }
  }
}

export function mapState<OuterState, InnerState, Action, Query = unknown>(
  options: { map: (value: OuterState) => InnerState },
  ...children: PaperTemplate<InnerState, Action, Query>[]
): PaperTemplate<OuterState, Action, Query> {
  return new MapStateTemplate(options.map, children)
}

export function mapStateAndKeep<
  OuterState,
  InnerState,
  Action,
  Query = unknown
>(
  options: { map: (value: OuterState) => InnerState },
  ...children: PaperTemplate<[InnerState, OuterState], Action, Query>[]
): PaperTemplate<OuterState, Action, Query> {
  return new MapStateTemplate<
    OuterState,
    [InnerState, OuterState],
    Action,
    Query
  >((state: OuterState) => [options.map(state), state], children)
}

class MapActionTemplate<State, OuterAction, InnerAction, Query>
  implements PaperTemplate<State, OuterAction, Query> {
  constructor(
    readonly map: (value: InnerAction) => OuterAction | undefined,
    readonly children: PaperTemplate<State, InnerAction, Query>[]
  ) {}

  render(ctx: PaperContext<OuterAction>, state: State): View<State, Query> {
    const { children, map } = this
    const newCtx = ctx.conditionalMapAction(map)
    const views = mapArray(children, c => c.render(newCtx, state))
    return {
      change: (state: State) => {
        for (const view of views) view.change(state)
      },
      destroy: () => {
        for (const view of views) view.destroy()
      },
      request: (query: Query) => {
        for (const view of views) view.request(query)
      }
    }
  }
}

export function mapAction<State, OuterAction, InnerAction, Query = unknown>(
  options: { map: (value: InnerAction) => OuterAction | undefined },
  ...children: PaperTemplate<State, InnerAction, Query>[]
): PaperTemplate<State, OuterAction, Query> {
  return new MapActionTemplate<State, OuterAction, InnerAction, Query>(
    options.map,
    children
  )
}

class MapQueryTemplate<State, Action, OuterQuery, InnerQuery>
  implements PaperTemplate<State, Action, OuterQuery> {
  constructor(
    readonly map: (value: OuterQuery) => InnerQuery | undefined,
    readonly children: PaperTemplate<State, Action, InnerQuery>[]
  ) {}

  render(ctx: PaperContext<Action>, state: State): View<State, OuterQuery> {
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
        if (typeof innerQuery !== 'undefined') {
          views.forEach(view => view.request(innerQuery))
        }
      }
    }
  }
}

export function mapQuery<State, Action, OuterQuery, InnerQuery>(
  options: { map: (value: OuterQuery) => InnerQuery },
  ...children: PaperTemplate<State, Action, InnerQuery>[]
): PaperTemplate<State, Action, OuterQuery> {
  return new MapQueryTemplate<State, Action, OuterQuery, InnerQuery>(
    options.map,
    children
  )
}

export function mapQueryConditional<State, Action, OuterQuery, InnerQuery>(
  options: { map: (value: OuterQuery) => InnerQuery | undefined },
  ...children: PaperTemplate<State, Action, InnerQuery>[]
): PaperTemplate<State, Action, OuterQuery> {
  return new MapQueryTemplate<State, Action, OuterQuery, InnerQuery>(
    options.map,
    children
  )
}