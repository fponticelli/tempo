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

import { DifferentiateAt } from 'tempo-std/lib/types/differentiate'
import { DOMTemplate, DOMChild } from '../template'
import { DOMContext } from '../context'
import { removeNode } from '../utils/dom'
import { IndexType } from 'tempo-std/lib/types/index_type'
import { ObjectWithPath, TypeAtPath } from 'tempo-std/lib/types/objects'
import { IBuilder, childOrBuilderToTemplate } from '../impl/builder'
import { keys } from 'tempo-std/lib/objects'

export class MatchTemplate<
  Path extends IndexType[],
  State extends ObjectWithPath<Path, any>,
  Action,
  Query
> implements DOMTemplate<State, Action, Query> {
  readonly matcher: {
    [k in TypeAtPath<Path, State>]: DOMTemplate<
      DifferentiateAt<Path, State, k>,
      Action,
      Query
    >
  }
  constructor(
    readonly path: Path,
    matcher: {
      [k in TypeAtPath<Path, State>]:
        | DOMChild<DifferentiateAt<Path, State, k>, Action, Query>
        | IBuilder<DifferentiateAt<Path, State, k>, Action, Query>
    }
  ) {
    this.matcher = keys(matcher).reduce(
      (acc, key) => {
        acc[key] = childOrBuilderToTemplate(this.matcher[key])
        return acc
      },
      {} as {
        [k in TypeAtPath<Path, State>]: DOMTemplate<
          DifferentiateAt<Path, State, k>,
          Action,
          Query
        >
      }
    )
  }
  render(ctx: DOMContext<Action>, state: State) {
    const { ctx: newCtx, ref } = ctx.withAppendToReference()
    const { path, matcher } = this
    let key = this.path.reduce(
      (acc: any, key) => acc[key],
      state
    ) as TypeAtPath<Path, State>
    let view = matcher[key].render(newCtx, state as any)
    return {
      change: (state: State) => {
        const newKey = path.reduce(
          (acc: any, key) => acc[key],
          state
        ) as TypeAtPath<Path, State>
        if (newKey === key) {
          view.change(state as any)
        } else {
          view.destroy()
          key = newKey
          view = matcher[newKey].render(newCtx, state as any)
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
