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
import { DOMContext } from '../context'
import { removeNode } from './dom'
import { IndexType } from 'tempo-std/lib/types/index_type'
import { IBuilder, childOrBuilderToTemplate } from './dom_builder'
import { keys } from 'tempo-std/lib/objects'

export class MatchValueTemplate<State, Action, Query>
  implements DOMTemplate<State, Action, Query> {
  readonly matcher: {
    [_ in string | number]: DOMTemplate<State, Action, Query>
  }
  readonly orElse: DOMTemplate<State, Action, Query>
  constructor(
    readonly path: IndexType[],
    matcher: {
      [_ in string | number]:
        | DOMChild<State, Action, Query>
        | IBuilder<State, Action, Query>
    },
    orElse: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
  ) {
    this.matcher = keys(matcher).reduce(
      (acc, key) => {
        acc[key] = childOrBuilderToTemplate(matcher[key])
        return acc
      },
      {} as {
        [_ in string | number]: DOMTemplate<State, Action, Query>
      }
    )
    this.orElse = childOrBuilderToTemplate(orElse)
  }
  render(ctx: DOMContext<Action>, state: State) {
    const { matcher, orElse } = this
    const { ctx: newCtx, ref } = ctx.withAppendToReference()
    let oldKey = this.path.reduce((acc: any, key) => acc[key], state)
    const template = this.matcher[oldKey] || this.orElse
    let view = template.render(newCtx, state)
    return {
      change: (state: State) => {
        const newKey = this.path.reduce((acc: any, key) => acc[key], state)
        if (newKey === oldKey) {
          view.change(state)
        } else {
          view.destroy()
          oldKey = newKey
          const template = matcher[newKey] || orElse
          view = template.render(newCtx, state)
        }
      },
      destroy: () => {
        removeNode(ref)
        view.destroy()
      },
      request: (query: Query) => {
        view.request(query)
      }
    }
  }
}
