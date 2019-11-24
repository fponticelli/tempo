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

import { DOMChild, DOMTemplate } from './template'
import { DOMContext } from './context'
import { View, DynamicView } from '@tempo/core/lib/view'
import { domChildToTemplate, filterDynamics, removeNode } from './utils/dom'

export interface WhenOptions<State> {
  condition: (state: State) => boolean
  refId?: string
}

export class DOMWhenView<State, Action> implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(
    readonly condition: (state: State) => boolean,
    readonly ctx: DOMContext<Action>,
    readonly dispatch: (action: Action) => void,
    readonly removeNode: () => void,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  change(value: State): void {
    if (this.condition(value)) {
      if (typeof this.views === 'undefined') {
        // it has never been rendered before
        this.views = this.children.map(c => c.render(this.ctx, value))
        this.dynamics = filterDynamics(this.views)
      } else if (this.dynamics) {
        for (const d of this.dynamics) d.change(value)
      }
    } else {
      this.destroyViews()
    }
  }

  destroy() {
    this.destroyViews()
    this.removeNode()
  }

  private views: View<State>[] | undefined
  private dynamics: DynamicView<State>[] | undefined
  private destroyViews() {
    if (typeof this.views !== 'undefined') {
      for (const v of this.views) v.destroy()
      this.views = undefined
      this.dynamics = undefined
    }
  }
}

export class DOMWhen<State, Action> implements DOMTemplate<State, Action> {
  constructor(readonly options: WhenOptions<State>, readonly children: DOMChild<State, Action>[]) {}
  render(ctx: DOMContext<Action>, state: State): DOMWhenView<State, Action> {
    const ref = ctx.doc.createComment(this.options.refId || 'md:when')
    ctx.append(ref)
    const parent = ref.parentElement!
    const view = new DOMWhenView(
      this.options.condition,
      ctx.withAppend((node: Node) => parent.insertBefore(node, ref)),
      ctx.dispatch,
      () => removeNode(ref),
      this.children.map(domChildToTemplate)
    )
    view.change(state)
    return view
  }
}

export const when = <State, Action>(options: WhenOptions<State>, ...children: DOMChild<State, Action>[]) =>
  new DOMWhen<State, Action>(options, children)

export const unless = <State, Action>(options: WhenOptions<State>, ...children: DOMChild<State, Action>[]) =>
  new DOMWhen<State, Action>(
    {
      condition: (v: State) => !options.condition(v),
      refId: options.refId || 'md:unless'
    },
    children
  )
