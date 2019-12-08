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
import { mapArray } from 'tempo-core/lib/util/map'

export class FilterStateTemplate<State, Action, Query> implements PaperTemplate<State, Action, Query> {
  constructor(
    readonly isSame: (prev: State, next: State ) => boolean,
    readonly children: PaperTemplate<State, Action, Query>[]
  ) {}

  render(ctx: PaperContext<Action>, state: State): View<State, Query> {
    const { children, isSame: filter } = this
    const views = mapArray(children, c => c.render(ctx, state))

    let prevState = state
    return {
      change: (newState: State) => {
        if (!filter(prevState, newState)) {
          prevState = newState
          for (const view of views) view.change(newState)
        }
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

export const filterState = <State, Action, Query = unknown>(
  options: { isSame?: (prev: State, next: State ) => boolean },
  ...children: PaperTemplate<State, Action, Query>[]
): PaperTemplate<State, Action, Query> => new FilterStateTemplate(
  options.isSame || ((a: State, b: State) => a === b),
  children
)
