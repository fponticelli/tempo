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
import { View, DynamicView } from 'tempo-core/lib/view'
import { domChildToTemplate, filterDynamics, removeNode } from './utils/dom'
import { mapArray } from 'tempo-core/lib/util/map'

export interface WhenOptions<State> {
  condition: (state: State) => boolean
  refId?: string
}

export class DOMWhenView<State, Query, Action> implements DynamicView<State, Query> {
  readonly kind = 'dynamic'
  constructor(
    readonly condition: (state: State) => boolean,
    readonly ctx: DOMContext<Action>,
    readonly dispatch: (action: Action) => void,
    readonly removeNode: () => void,
    readonly children: DOMTemplate<State, Query, Action>[]
  ) {}

  change(value: State): void {
    if (this.condition(value)) {
      if (typeof this.views === 'undefined') {
        // it has never been rendered before
        this.views = mapArray(this.children, c => c.render(this.ctx, value))
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

  request(query: Query) {
    this.views?.forEach(view => view.request(query))
  }

  private views: View<State, Query>[] | undefined
  private dynamics: DynamicView<State, Query>[] | undefined
  private destroyViews() {
    if (typeof this.views !== 'undefined') {
      for (const v of this.views) v.destroy()
      this.views = undefined
      this.dynamics = undefined
    }
  }
}

export class DOMWhenTemplate<State, Query, Action> implements DOMTemplate<State, Query, Action> {
  constructor(readonly options: WhenOptions<State>, readonly children: DOMChild<State, Query, Action>[]) {}
  render(ctx: DOMContext<Action>, state: State): DOMWhenView<State, Query, Action> {
    const ref = ctx.doc.createComment(this.options.refId || 't:when')
    ctx.append(ref)
    const parent = ref.parentElement!
    const view = new DOMWhenView(
      this.options.condition,
      ctx.withAppend((node: Node) => parent.insertBefore(node, ref)),
      ctx.dispatch,
      () => removeNode(ref),
      mapArray(this.children, domChildToTemplate)
    )
    view.change(state)
    return view
  }
}

export const when = <State, Query, Action>(options: WhenOptions<State>, ...children: DOMChild<State, Query, Action>[]):
    DOMTemplate<State, Query, Action> =>
  new DOMWhenTemplate<State, Query, Action>(options, children)

export const unless = <State, Query, Action>(options: WhenOptions<State>, ...children: DOMChild<State, Query, Action>[]):
    DOMTemplate<State, Query, Action> =>
  new DOMWhenTemplate<State, Query, Action>(
    {
      condition: (v: State) => !options.condition(v),
      refId: options.refId || 't:unless'
    },
    children
  )
