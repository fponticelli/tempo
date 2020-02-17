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
import { PaperContext } from './context'
import { PaperTemplate } from './template'
import { map } from 'tempo-std/lib/arrays'
import { Group } from 'paper'

class PaperUntilTemplate<OuterState, InnerState, Action, Query>
  implements PaperTemplate<OuterState, Action, Query> {
  constructor(
    readonly props: {
      repeatUntil: (state: OuterState, index: number) => InnerState | undefined
    },
    readonly children: PaperTemplate<InnerState, Action, Query>[]
  ) {}

  render(
    ctx: PaperContext<Action>,
    state: OuterState
  ): View<OuterState, Query> {
    const { children } = this
    const { repeatUntil } = this.props
    const ref = new Group()
    ctx.append(ref)
    const newCtx = ctx.withAppend(item => ref.addChild(item))
    let childrenViews: View<InnerState, Query>[][] = []
    const view = {
      change: (state: OuterState) => {
        const currentLength = childrenViews.length
        let index = 0
        while (true) {
          const value = repeatUntil(state, index)
          if (typeof value === 'undefined') break
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
        ref.remove()
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
  props: {
    repeatUntil: (state: OuterState, index: number) => InnerState | undefined
  },
  ...children: PaperTemplate<InnerState, Action, Query>[]
): PaperTemplate<OuterState, Action, Query> {
  return new PaperUntilTemplate<OuterState, InnerState, Action, Query>(
    props,
    children
  )
}
