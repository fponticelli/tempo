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

import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { View } from 'tempo-core/lib/view'
import { map } from 'tempo-std/lib/arrays'
import { Group } from 'paper'

export interface WhenProps<State> {
  condition: (state: State) => boolean
}

class PaperWhenTemplate<State, Action, Query>
  implements PaperTemplate<State, Action, Query> {
  constructor(
    readonly props: WhenProps<State>,
    readonly children: PaperTemplate<State, Action, Query>[]
  ) {}
  render(ctx: PaperContext<Action>, state: State): View<State, Query> {
    const { condition } = this.props
    const ref = new Group()
    ctx.append(ref)
    const newCtx = ctx.withAppend(item => ref.addChild(item))
    let views: View<State, Query>[] | undefined
    const view = {
      change: (state: State) => {
        if (condition(state)) {
          if (typeof views === 'undefined') {
            // it has never been rendered before
            views = map(this.children, c => c.render(newCtx, state))
          } else {
            for (const view of views) view.change(state)
          }
        } else if (typeof views !== 'undefined') {
          for (const view of views) view.destroy()
          views = undefined
        }
      },
      destroy: () => {
        ref.remove()
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

export function when<State, Action, Query = unknown>(
  props: WhenProps<State>,
  ...children: PaperTemplate<State, Action, Query>[]
): PaperTemplate<State, Action, Query> {
  return new PaperWhenTemplate<State, Action, Query>(props, children)
}

export function unless<State, Action, Query = unknown>(
  props: WhenProps<State>,
  ...children: PaperTemplate<State, Action, Query>[]
): PaperTemplate<State, Action, Query> {
  return new PaperWhenTemplate<State, Action, Query>(
    {
      condition: (v: State) => !props.condition(v)
    },
    children
  )
}
