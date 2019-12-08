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
import { View } from 'tempo-core/lib/view'
import { domChildToTemplate, removeNode } from './utils/dom'
import { mapArray } from 'tempo-core/lib/util/map'

export interface WhenOptions<State> {
  condition: (state: State) => boolean
  refId?: string
}

export class DOMWhenTemplate<State, Action, Query> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly options: WhenOptions<State>,
    readonly children: DOMTemplate<State, Action, Query>[]
  ) {}
  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    const { condition, refId } = this.options
    const ref = ctx.doc.createComment(refId || 't:when')
    ctx.append(ref)
    const parent = ref.parentElement!
    const newCtx = ctx.withAppend((node: Node) => parent.insertBefore(node, ref))
    let views: View<State, Query>[] | undefined
    const view = {
      change: (state: State) => {
        if (condition(state)) {
          if (typeof views === 'undefined') {
            // it has never been rendered before
            views = mapArray(this.children, c => c.render(newCtx, state))
          } else {
            for (const view of views) view.change(state)
          }
        } else if (typeof views !== 'undefined') {
          for (const view of views) view.destroy()
          views = undefined
        }
      },
      destroy: () => {
        removeNode(ref)
        if (typeof views !== 'undefined') {
          for (const view of views) view.destroy()
        }
      },
      request: (query: Query) => {
        if (typeof views !== 'undefined') {
          for (const view of views) view.request(query)
        }
      }
    }
    view.change(state)
    return view
  }
}

export const when = <State, Action, Query = unknown>(options: WhenOptions<State>, ...children: DOMChild<State, Action, Query>[]):
    DOMTemplate<State, Action, Query> =>
  new DOMWhenTemplate<State, Action, Query>(options, mapArray(children, domChildToTemplate))

export const unless = <State, Action, Query = unknown>(options: WhenOptions<State>, ...children: DOMChild<State, Action, Query>[]):
    DOMTemplate<State, Action, Query> =>
  new DOMWhenTemplate<State, Action, Query>(
    {
      condition: (v: State) => !options.condition(v),
      refId: options.refId || 't:unless'
    },
    mapArray(children, domChildToTemplate)
  )
