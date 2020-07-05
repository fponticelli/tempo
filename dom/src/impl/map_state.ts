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
import { removeNode } from './dom'
import { map as mapArray } from 'tempo-std/lib/arrays'
import { Attribute, resolveAttribute } from '../value'
import { IBuilder, childOrBuilderToTemplate } from './dom_builder'

export class MapStateTemplate<OuterState, InnerState, Action, Query>
  implements DOMTemplate<OuterState, Action, Query> {
  readonly children: DOMTemplate<InnerState, Action, Query>[]
  constructor(
    readonly map: Attribute<OuterState, InnerState>,
    readonly orElse: DOMTemplate<OuterState, Action, Query>,
    readonly equals: (a: InnerState, b: InnerState) => boolean,
    children: (
      | DOMChild<InnerState, Action, Query>
      | IBuilder<InnerState, Action, Query>
    )[]
  ) {
    this.children = children.map(childOrBuilderToTemplate)
  }

  render(ctx: DOMContext<Action>, state: OuterState): View<OuterState, Query> {
    const { children, map, orElse, equals } = this

    let views: View<InnerState | OuterState, Query>[] = []

    const { ctx: newCtx, ref } = ctx.withAppendToReference()

    let current: InnerState | undefined = undefined
    const next = resolveAttribute(map)(state)

    if (next === undefined) {
      views = [orElse.render(newCtx, state)]
    } else {
      current = next
      views = mapArray(children, c => c.render(newCtx, next))
    }

    function destroy() {
      for (const view of views) view.destroy()
    }

    return {
      change: (state: OuterState) => {
        const next = resolveAttribute(map)(state)
        if (next !== undefined) {
          if (current === undefined) {
            destroy()
            current = next
            views = mapArray(children, c => c.render(newCtx, next))
          } else if (!equals(current, next)) {
            current = next
            for (const view of views) view.change(next)
          }
        } else {
          if (current !== undefined) {
            current = undefined
            destroy()
            views = [orElse.render(newCtx, state)]
          } else {
            for (const view of views) view.change(state)
          }
        }
      },
      destroy: () => {
        destroy()
        removeNode(ref)
      },
      request: (query: Query) => {
        for (const view of views) view.request(query)
      }
    }
  }
}
