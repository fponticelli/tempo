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

import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { domChildToTemplate } from './utils/dom'
import { map } from 'tempo-std/lib/arrays'

export type SimpleComponent<State, Query> = DOMTemplate<State, State, Query>

class ComponentTemplate<State, Query> implements SimpleComponent<State, Query> {
  constructor(
    readonly children: DOMTemplate<State, State, Query>[],
    readonly delayed: boolean
  ) {}

  render(ctx: DOMContext<State>, state: State) {
    let update: (state: State) => void
    if (this.delayed) {
      let shouldRender = true
      update = (state: State) => {
        if (shouldRender) {
          shouldRender = false
          setTimeout(() => {
            view.change(state)
            shouldRender = true
          })
        }
      }
    } else {
      update = (state: State) => {
        view.change(state)
      }
    }

    const newCtx = ctx.withInterceptDispatch(update)
    const views = map(this.children, child => child.render(newCtx, state))

    const view = {
      change: (state: State) => {
        for (const view of views) view.change(state)
      },
      destroy: () => {
        for (const view of views) view.destroy()
      },
      request: (query: Query) => {
        for (const view of views) view.request(query)
      }
    }
    return view
  }
}

export function simpleComponent<State, Query = unknown>(
  props: {
    delayed?: boolean
  },
  ...children: DOMChild<State, State, Query>[]
): SimpleComponent<State, Query> {
  return new ComponentTemplate<State, Query>(
    map(children, domChildToTemplate),
    props.delayed || false
  )
}
