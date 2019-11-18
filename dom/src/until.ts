/*
Copyright 2018 Google LLC
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

import { DynamicView, View } from '@tempo/core/lib/view'
import { DOMContext } from './context'
import { DOMTemplate, DOMChild } from './template'
import { removeNode, filterDynamics, domChildToTemplate, insertBefore } from './utils/dom'

export class DOMUntilView<OuterState, InnerState, Action> implements DynamicView<OuterState> {
  readonly kind = 'dynamic'
  constructor(
    readonly ref: Node,
    readonly repeatUntil: (state: OuterState, index: number) => InnerState | undefined,
    readonly ctx: DOMContext<Action>,
    readonly children: DOMTemplate<InnerState, Action>[]
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
    let count = 0
    let value: InnerState | undefined
    while ((value = this.repeatUntil(state, count)) !== undefined) {
      if (count < currentViewLength) {
        // replace existing
        for (const v of filterDynamics(this.childrenView[count])) v.change(value!)
      } else {
        // add node
        this.childrenView.push(this.children.map(el => el.render(this.ctx, value!)))
      }
      count++
    }
    let i = count
    while (i < currentViewLength) {
      // remove extra nodes
      for (const c of this.childrenView[i]) c.destroy()
      i++
    }
    this.childrenView = this.childrenView.slice(0, count)
  }

  private childrenView: View<InnerState>[][] = []
}

export class DOMUntilTemplate<OuterState, InnerState, Action> implements DOMTemplate<OuterState, Action> {
  constructor(
    readonly options: {
      refId?: string
      repeatUntil: (state: OuterState, index: number) => InnerState | undefined
    },
    readonly children: DOMTemplate<InnerState, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: OuterState): DynamicView<OuterState> {
    const ref = ctx.doc.createComment(this.options.refId || 'md:until')
    ctx.append(ref)
    const view = new DOMUntilView<OuterState, InnerState, Action>(
      ref,
      this.options.repeatUntil,
      ctx.withAppend(insertBefore(ref)),
      this.children
    )
    view.change(state)
    return view
  }
}

export const until = <OuterState, InnerState, Action>(
  options: {
    refId?: string
    repeatUntil: (state: OuterState, index: number) => InnerState | undefined
  },
  ...children: DOMChild<InnerState, Action>[]
) => new DOMUntilTemplate<OuterState, InnerState, Action>(options, children.map(domChildToTemplate))
