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
import { map } from 'tempo-std/lib/arrays'
import { Attribute, resolveAttribute, mapAttribute } from './value'

export interface WhenProps<State> {
  condition: Attribute<State, boolean>
}

class WhenTemplate<State, Action, Query>
  implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly props: WhenProps<State>,
    readonly children: DOMTemplate<State, Action, Query>[]
  ) {}
  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    const { condition } = this.props
    const { ctx: newCtx, ref } = ctx.withAppendToReference()
    let views: View<State, Query>[] | undefined
    const view = {
      change: (state: State) => {
        if (resolveAttribute(condition)(state)) {
          if (views === undefined) {
            // it has never been rendered before
            views = map(this.children, c => c.render(newCtx, state))
          } else {
            for (const view of views) view.change(state)
          }
        } else if (views !== undefined) {
          for (const view of views) view.destroy()
          views = undefined
        }
      },
      destroy: () => {
        removeNode(ref)
        if (views !== undefined) {
          for (const view of views) view.destroy()
        }
      },
      request: (query: Query) => {
        if (views !== undefined) {
          for (const view of views) view.request(query)
        }
      }
    }
    view.change(state)
    return view
  }
}

export function when<State, Action, Query = unknown>(
  props: WhenProps<State>,
  ...children: DOMChild<State, Action, Query>[]
): DOMTemplate<State, Action, Query> {
  return new WhenTemplate<State, Action, Query>(
    props,
    map(children, domChildToTemplate)
  )
}

export function unless<State, Action, Query = unknown>(
  props: WhenProps<State>,
  ...children: DOMChild<State, Action, Query>[]
): DOMTemplate<State, Action, Query> {
  return new WhenTemplate<State, Action, Query>(
    {
      condition: mapAttribute(props.condition, v => !v)
    },
    map(children, domChildToTemplate)
  )
}
