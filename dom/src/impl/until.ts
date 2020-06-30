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
import { DOMContext } from '../context'
import { DOMTemplate, DOMChild } from '../template'
import { removeNode, domChildToTemplate } from '../utils/dom'
import { map } from 'tempo-std/lib/arrays'
import { Attribute, resolveAttribute } from '../value'

export class UntilTemplate<OuterState, InnerState, Action, Query>
  implements DOMTemplate<OuterState, Action, Query> {
  constructor(
    readonly next: Attribute<{ state: OuterState; index: number }, InnerState>,
    readonly children: DOMTemplate<InnerState, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: OuterState): View<OuterState, Query> {
    const { children } = this
    const next = this.next
    const { ctx: newCtx, ref } = ctx.withAppendToReference()
    let childrenViews: View<InnerState, Query>[][] = []
    // TODO, when next is a static literal it can be optimized to only render once
    const view = {
      change: (state: OuterState) => {
        const currentLength = childrenViews.length
        let index = 0
        while (true) {
          const value = resolveAttribute(next)({ state, index })
          if (value === undefined) break
          if (index < currentLength) {
            // replace existing
            const filteredViews = childrenViews[index]
            for (const view of filteredViews) view.change(value!)
          } else {
            // add node
            childrenViews.push(map(children, el => el.render(newCtx, value!)))
          }
          index++
        }
        let i = index
        // remove extra nodes
        while (i < currentLength) {
          for (const c of childrenViews[i]) c.destroy()
          i++
        }
        childrenViews = childrenViews.slice(0, index)
      },
      destroy: () => {
        removeNode(ref)
        for (const childViews of childrenViews)
          for (const view of childViews) view.destroy()
        childrenViews = []
      },
      request: (query: Query) => {
        for (const childViews of childrenViews)
          for (const view of childViews) view.request(query)
      }
    }
    view.change(state)
    return view
  }
}

export function until<OuterState, InnerState, Action, Query = unknown>(
  next: Attribute<{ state: OuterState; index: number }, InnerState>,
  ...children: DOMChild<InnerState, Action, Query>[]
): DOMTemplate<OuterState, Action, Query> {
  return new UntilTemplate<OuterState, InnerState, Action, Query>(
    next,
    map(children, domChildToTemplate)
  )
}
