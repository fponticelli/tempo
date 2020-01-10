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
import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { map } from 'tempo-std/lib/arrays'

export class PaperFragmentTemplate<State, Action, Query>
  implements PaperTemplate<State, Action, Query> {
  constructor(readonly children: PaperTemplate<State, Action, Query>[]) {}

  render(ctx: PaperContext<Action>, state: State): View<State, Query> {
    const views = map(child => child.render(ctx, state), this.children)
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

export const fragment = <State, Action, Query = unknown>(
  ...children: PaperTemplate<State, Action, Query>[]
): PaperTemplate<State, Action, Query> =>
  new PaperFragmentTemplate<State, Action, Query>(children)
