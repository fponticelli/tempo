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

import { View, StaticView, DynamicView } from 'tempo-core/lib/view'
import { filterDynamics, domChildToTemplate } from './utils/dom'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { mapArray } from 'tempo-core/lib/util/map'

export class DOMBaseFragmentView<Query> {
  constructor(readonly views: View<any, Query>[]) {}

  destroy(): void {
    for (const v of this.views) v.destroy()
  }

  request(query: Query) {
    for (const v of this.views) v.request(query)
  }
}

export class DOMStaticFragmentView<Query> extends DOMBaseFragmentView<Query> implements StaticView<Query> {
  readonly kind = 'static'
}

export class DOMDynamicFragmentView<State, Query> extends DOMBaseFragmentView<Query> implements DynamicView<State, Query> {
  readonly kind = 'dynamic'
  constructor(
    views: View<any, Query>[],
    readonly change: (state: State) => void
  ) {
    super(views)
  }
}

export const fragmentView = <State, Query = unknown>(views: View<State, Query>[]) => {
  const dynamics = filterDynamics(views)
  if (dynamics.length > 0) {
    return new DOMDynamicFragmentView<State, Query>(views, (state: State) => {
      for (const d of dynamics) d.change(state)
    })
  } else {
    return new DOMStaticFragmentView(views)
  }
}

export class DOMFragmentTemplate<State, Action, Query> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly children: DOMTemplate<State, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    const views = mapArray(this.children, child => child.render(ctx, state))
    return fragmentView(views)
  }
}

export const fragment = <State, Action, Query = unknown>(...children: DOMChild<State, Action, Query>[]): DOMTemplate<State, Action, Query> =>
  new DOMFragmentTemplate<State, Action, Query>(mapArray(children, domChildToTemplate))
