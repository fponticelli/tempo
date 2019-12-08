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

import { DOMChild, DOMTemplate } from './template'
import { View, DynamicView, StaticView } from 'tempo-core/lib/view'
import { DOMContext } from './context'
import { domChildToTemplate, filterDynamics } from './utils/dom'
import { DOMStaticFragmentView, DOMDynamicFragmentView, fragmentView } from './fragment'
import { mapArray } from 'tempo-core/lib/util/map'

export class MapStateTemplate<OuterState, InnerState, Action, Query> implements DOMTemplate<OuterState, Action, Query> {
  constructor(
    readonly map: (value: OuterState) => InnerState,
    readonly children: DOMTemplate<InnerState, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: OuterState): View<OuterState, Query> {
    const { children, map } = this
    const innerState = map(state)
    const views = mapArray(children, c => c.render(ctx, innerState))
    const dynamics = filterDynamics(views)

    if (dynamics.length === 0) {
      return new DOMStaticFragmentView(views)
    } else {
      return new DOMDynamicFragmentView<OuterState, Query>(views, (state: OuterState) => {
        const innerState = map(state)
        for (const d of dynamics) d.change(innerState)
      })
    }
  }
}

export const mapState = <OuterState, InnerState, Action, Query = unknown>(
  options: { map: (value: OuterState) => InnerState },
  ...children: DOMChild<InnerState, Action, Query>[]
): DOMTemplate<OuterState, Action, Query> => new MapStateTemplate(options.map, mapArray(children, domChildToTemplate))

export const mapStateAndKeep = <OuterState, InnerState, Action, Query = unknown>(
  options: { map: (value: OuterState) => InnerState },
  ...children: DOMChild<[InnerState, OuterState], Action, Query>[]
): DOMTemplate<OuterState, Action, Query> => new MapStateTemplate<OuterState, [InnerState, OuterState], Action, Query>(
  (state: OuterState) => ([options.map(state), state]),
  mapArray(children, domChildToTemplate)
)

export class MapActionTemplate<State, OuterAction, InnerAction, Query> implements DOMTemplate<State, OuterAction, Query> {
  constructor(
    readonly map: (value: InnerAction) => OuterAction | undefined,
    readonly children: DOMTemplate<State, InnerAction, Query>[]
  ) {}

  render(ctx: DOMContext<OuterAction>, state: State): View<State, Query> {
    const { children, map } = this
    const views = mapArray(children, c => c.render(ctx.conditionalMapAction(map), state))
    return fragmentView(views)
  }
}

export const mapAction = <State, OuterAction, InnerAction, Query = unknown>(
  options: { map: (value: InnerAction) => OuterAction | undefined },
  ...children: DOMChild<State, InnerAction, Query>[]
): DOMTemplate<State, OuterAction, Query> =>
  new MapActionTemplate<State, OuterAction, InnerAction, Query>(options.map, mapArray(children, domChildToTemplate))

export class MapQueryDynamicView<State, OuterQuery, InnerQuery> implements DynamicView<State, OuterQuery> {
  readonly kind = 'dynamic'
  constructor(
    readonly map: (query: OuterQuery) => InnerQuery | undefined,
    readonly views: View<State, InnerQuery>[],
    readonly dynamicViews: DynamicView<State, InnerQuery>[]
  ) { }

  request(query: OuterQuery) {
    const innerQuery = this.map(query)
    if (typeof innerQuery !== 'undefined') {
      this.views.forEach(view => view.request(innerQuery))
    }
  }

  change(state: State) {
    this.dynamicViews.forEach(view => view.change(state))
  }

  destroy() {
    this.views.forEach(view => view.destroy())
  }
}

export class MapQueryStaticView<OuterQuery, InnerQuery> implements StaticView<OuterQuery> {
  readonly kind = 'static'
  constructor(
    readonly map: (query: OuterQuery) => InnerQuery | undefined,
    readonly views: StaticView<InnerQuery>[]
  ) { }

  request(query: OuterQuery) {
    const innerQuery = this.map(query)
    if (typeof innerQuery !== 'undefined') {
      this.views.forEach(view => view.request(innerQuery))
    }
  }

  destroy() {
    this.views.forEach(view => view.destroy())
  }
}

export class MapQueryTemplate<State, Action, OuterQuery, InnerQuery> implements DOMTemplate<State, Action, OuterQuery> {
  constructor(
    readonly map: (value: OuterQuery) => InnerQuery | undefined,
    readonly children: DOMTemplate<State, Action, InnerQuery>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State, OuterQuery> {
    const { children, map } = this
    const views = mapArray(children, c => c.render(ctx, state))
    const dynamicViews = filterDynamics(views)
    if (dynamicViews.length > 0) {
      return new MapQueryDynamicView<State, OuterQuery, InnerQuery>(map, views, dynamicViews)
    } else {
      return new MapQueryStaticView<OuterQuery, InnerQuery>(map, views as (StaticView<InnerQuery>[]))
    }
  }
}

export const mapQuery = <State, Action, OuterQuery, InnerQuery>(
  options: { map: (value: OuterQuery) => InnerQuery },
  ...children: DOMChild<State, Action, InnerQuery>[]
): DOMTemplate<State, Action, OuterQuery> =>
  new MapQueryTemplate<State, Action, OuterQuery, InnerQuery>(options.map, mapArray(children, domChildToTemplate))

export const mapQueryConditional = <State, Action, OuterQuery, InnerQuery>(
  options: { map: (value: OuterQuery) => InnerQuery | undefined },
  ...children: DOMChild<State, Action, InnerQuery>[]
): DOMTemplate<State, Action, OuterQuery> =>
  new MapQueryTemplate<State, Action, OuterQuery, InnerQuery>(options.map, mapArray(children, domChildToTemplate))

