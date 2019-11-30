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

import { View, StaticView, DynamicView } from '@tempo/core/lib/view'
import { filterDynamics, domChildToTemplate } from './utils/dom'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { mapArray } from '@tempo/core/lib/util/map'

export class DOMBaseFragmentView {
  constructor(readonly views: View<any>[]) {}

  destroy(): void {
    for (const v of this.views) v.destroy()
  }
}

export class DOMStaticFragmentView extends DOMBaseFragmentView implements StaticView {
  readonly kind = 'static'
}

export class DOMDynamicFragmentView<State> extends DOMBaseFragmentView implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(
    views: View<any>[],
    readonly change: (state: State) => void
  ) {
    super(views)
  }
}

export const fragmentView = <State>(views: View<State>[]) => {
  const dynamics = filterDynamics(views)
  if (dynamics.length > 0) {
    return new DOMDynamicFragmentView<State>(views, (state: State) => {
      for (const d of dynamics) d.change(state)
    })
  } else {
    return new DOMStaticFragmentView(views)
  }
}

export class DOMFragmentTemplate<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State> {
    const views = mapArray(this.children, child => child.render(ctx, state))
    return fragmentView(views)
  }
}

export const fragment = <State, Action>(...children: DOMChild<State, Action>[]): DOMTemplate<State, Action> =>
  new DOMFragmentTemplate<State, Action>(mapArray(children, domChildToTemplate))
