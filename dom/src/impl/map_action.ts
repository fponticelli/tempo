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

import { DOMTemplate, DOMChild } from '../template'
import { View } from 'tempo-core/lib/view'
import { DOMContext } from '../context'
import { map as mapArray } from 'tempo-std/lib/arrays'
import { IBuilder, childOrBuilderToTemplate } from './dom_builder'

export class MapActionTemplate<State, OuterAction, InnerAction, Query>
  implements DOMTemplate<State, OuterAction, Query> {
  readonly children: DOMTemplate<State, InnerAction, Query>[]
  constructor(
    readonly map: (value: InnerAction) => OuterAction | undefined,
    children: (
      | DOMChild<State, InnerAction, Query>
      | IBuilder<State, InnerAction, Query>
    )[]
  ) {
    this.children = children.map(childOrBuilderToTemplate)
  }

  render(ctx: DOMContext<OuterAction>, state: State): View<State, Query> {
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
