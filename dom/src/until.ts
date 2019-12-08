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

import { DynamicView, View } from 'tempo-core/lib/view'
import { DOMContext } from './context'
import { DOMTemplate, DOMChild } from './template'
import { removeNode, filterDynamics, domChildToTemplate, insertBefore } from './utils/dom'
import { mapArray } from 'tempo-core/lib/util/map'

export class DOMUntilView<OuterState, InnerState, Action, Query> implements DynamicView<OuterState, Query> {
  readonly kind = 'dynamic'
  constructor(
    readonly ref: Node,
    readonly repeatUntil: (state: OuterState, index: number) => InnerState | undefined,
    readonly ctx: DOMContext<Action>,
    readonly children: DOMTemplate<InnerState, Action, Query>[]
  ) {}

  destroy(): void {
    removeNode(this.ref)
    for (const c of this.childrenView)
      for (const e of c)
        e.destroy()
    this.childrenView = []
  }

  change(state: OuterState): void {
    const currentViewLength = this.childrenView.length
    let index = 0
    while (true) {
      const value = this.repeatUntil(state, index)
      if (typeof value === 'undefined') break
      if (index < currentViewLength) {
        // replace existing
        const filtered = filterDynamics(this.childrenView[index])
        for (const v of filtered) v.change(value!)
      } else {
        // add node
        this.childrenView.push(mapArray(this.children, el => el.render(this.ctx, value!)))
      }
      index++
    }
    let i = index
    // remove extra nodes
    while (i < currentViewLength) {
      for (const c of this.childrenView[i]) c.destroy()
      i++
    }
    this.childrenView = this.childrenView.slice(0, index)
  }

  request(query: Query) {
    this.childrenView.forEach(views => views.forEach(view => view.request(query)))
  }

  private childrenView: View<InnerState, Query>[][] = []
}

export class DOMUntilTemplate<OuterState, InnerState, Action, Query> implements DOMTemplate<OuterState, Action, Query> {
  constructor(
    readonly options: {
      refId?: string
      repeatUntil: (state: OuterState, index: number) => InnerState | undefined
    },
    readonly children: DOMTemplate<InnerState, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: OuterState): DynamicView<OuterState, Query> {
    const ref = ctx.doc.createComment(this.options.refId || 't:until')
    ctx.append(ref)
    const view = new DOMUntilView<OuterState, InnerState, Action, Query>(
      ref,
      this.options.repeatUntil,
      ctx.withAppend(insertBefore(ref)),
      this.children
    )
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
