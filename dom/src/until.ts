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
import { DOMContext } from './context'
import { DOMTemplate, DOMChild } from './template'
import { removeNode, domChildToTemplate, insertBefore } from './utils/dom'
import { mapArray } from 'tempo-core/lib/util/map'

export class DOMUntilTemplate<OuterState, InnerState, Action, Query> implements DOMTemplate<OuterState, Action, Query> {
  constructor(
    readonly options: {
      refId?: string
      repeatUntil: (state: OuterState, index: number) => InnerState | undefined
    },
    readonly children: DOMTemplate<InnerState, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: OuterState): View<OuterState, Query> {
    const { children } = this
    const { refId, repeatUntil } = this.options
    const ref = ctx.doc.createComment(refId || 't:until')
    ctx.append(ref)
    const newCtx = ctx.withAppend(insertBefore(ref))
    let childrenViews: View<InnerState, Query>[][] = []
    const view = {
      change: (state: OuterState) => {
        const currentLength = childrenViews.length
        let index = 0
        while (true) {
          const value = repeatUntil(state, index)
          if (typeof value === 'undefined')
            break
          if (index < currentLength) {
            // replace existing
            const filteredViews = childrenViews[index]
            for (const view of filteredViews) view.change(value!)
          } else {
            // add node
            childrenViews.push(mapArray(children, el => el.render(newCtx, value!)))
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
          for (const view of childViews)
            view.destroy()
        childrenViews = []
      },
      request: (query: Query) => {
        for (const childViews of childrenViews)
          for (const view of childViews)
            view.request(query)
      }
    }
    view.change(state)
    return view
  }
}

export const until = <OuterState, InnerState, Action, Query = unknown>(
  options: {
    refId?: string
    repeatUntil: (state: OuterState, index: number) => InnerState | undefined
  },
  ...children: DOMChild<InnerState, Action, Query>[]
): DOMTemplate<OuterState, Action, Query> =>
  new DOMUntilTemplate<OuterState, InnerState, Action, Query>(options, mapArray(children, domChildToTemplate))
