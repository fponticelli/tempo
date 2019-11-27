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
import { View } from '@tempo/core/lib/view'
import { DOMContext } from './context'
import { domChildToTemplate, filterDynamics } from './utils/dom'
import { DOMStaticFragmentView, DOMDynamicFragmentView, fragmentView } from './fragment'
import { mapArray } from '@tempo/core/lib/util/map'

export class MapStateTemplate<OuterState, InnerState, Action> implements DOMTemplate<OuterState, Action> {
  constructor(
    readonly map: (value: OuterState) => InnerState,
    readonly children: DOMTemplate<InnerState, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: OuterState): View<OuterState> {
    const { children, map } = this
    const innerState = map(state)
    const views = mapArray(children, c => c.render(ctx, innerState))
    const dynamics = filterDynamics(views)

    if (dynamics.length === 0) {
      return new DOMStaticFragmentView(views)
    } else {
      return new DOMDynamicFragmentView<OuterState>(views, (state: OuterState) => {
        const innerState = map(state)
        for (const d of dynamics) d.change(innerState)
      })
    }
  }
}

export const mapState = <OuterState, InnerState, Action>(
  options: { map: (value: OuterState) => InnerState },
  ...children: DOMChild<InnerState, Action>[]
) => new MapStateTemplate(options.map, mapArray(children, domChildToTemplate))

export const mapStateAndKeep = <OuterState, InnerState, Action>(
  options: { map: (value: OuterState) => InnerState },
  ...children: DOMChild<[InnerState, OuterState], Action>[]
) => new MapStateTemplate<OuterState, [InnerState, OuterState], Action>(
  (state: OuterState) => ([options.map(state), state]),
  mapArray(children, domChildToTemplate)
)

export class MapActionTemplate<State, OuterAction, InnerAction> implements DOMTemplate<State, OuterAction> {
  constructor(
    readonly map: (value: InnerAction) => OuterAction | undefined,
    readonly children: DOMTemplate<State, InnerAction>[]
  ) {}

  render(ctx: DOMContext<OuterAction>, state: State): View<State> {
    const { children, map } = this
    const views = mapArray(children, c => c.render(ctx.conditionalMapAction(map), state))
    return fragmentView(views)
  }
}

export const mapAction = <State, OuterAction, InnerAction>(
  options: { map: (value: InnerAction) => OuterAction | undefined },
  ...children: DOMChild<State, InnerAction>[]
) => new MapActionTemplate<State, OuterAction, InnerAction>(options.map, mapArray(children, domChildToTemplate))
