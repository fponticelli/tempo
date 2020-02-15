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

import { Store } from 'tempo-store/lib/store'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { domChildToTemplate } from './utils/dom'
import { map } from 'tempo-std/lib/arrays'

export interface Component<State, Action, Query> extends DOMTemplate<State, Action, Query> {
  store: Store<State, Action>
}

class ComponentTemplate<State, Action, Query> implements Component<State, Action, Query> {
  constructor(
    readonly store: Store<State, Action>,
    readonly children: DOMTemplate<State, Action, Query>[],
    readonly delayed: boolean
  ) {}

  render(ctx: DOMContext<Action>, state: State) {
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
    const { store } = this
    const { property } = store

    property.observable.on(update)
    const innerDispatch = (action: Action) => {
      store.process(action)
    }
    const newCtx = ctx.withDispatch(innerDispatch)
    const views = map(child => child.render(newCtx, property.get()), this.children)
    const view = {
      change: (state: State) => {
        store.property.set(state)
        for (const view of views) view.change(state)
      },
      destroy: () => {
        property.observable.off(update)
        for (const view of views) view.destroy()
      },
      request: (query: Query) => {
        for (const view of views) view.request(query)
      }
    }
    property.set(state)
    return view
  }
}

export function component<State, Action, Query = unknown>(
  attributes: {
    store: Store<State, Action>
    delayed?: boolean
  },
  ...children: DOMChild<State, Action, Query>[]
): Component<State, Action, Query> {
  return new ComponentTemplate<State, Action, Query>(attributes.store, map(domChildToTemplate, children), attributes.delayed || false)
}
