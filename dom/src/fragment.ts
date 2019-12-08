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

import { View } from 'tempo-core/lib/view'
import { domChildToTemplate } from './utils/dom'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { mapArray } from 'tempo-core/lib/util/map'

export class DOMFragmentView<State, Query> implements View<State, Query> {
  constructor(
    readonly views: View<any, Query>[],
    readonly change: ((state: State) => void) = (state: State) => {
      for (const v of this.views) v.change(state)
    }
  ) { }

  destroy(): void {
    for (const v of this.views) v.destroy()
  }

  request(query: Query) {
    for (const v of this.views) v.request(query)
  }
}

export class DOMFragmentTemplate<State, Action, Query> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly children: DOMTemplate<State, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    const views = mapArray(this.children, child => child.render(ctx, state))
    return new DOMFragmentView(views)
  }
}

export const fragment = <State, Action, Query = unknown>(...children: DOMChild<State, Action, Query>[])
    : DOMTemplate<State, Action, Query> =>
  new DOMFragmentTemplate<State, Action, Query>(mapArray(children, domChildToTemplate))
