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
import { View } from 'tempo-core/lib/view'

export function makeDelayedUpdate<State>(change: (state: State) => void) {
  let shouldRender = true
  return (state: State) => {
    if (shouldRender) {
      shouldRender = false
      setTimeout(() => {
        change(state)
        shouldRender = true
      })
    }
  }
}

export interface ComponentView<State, Action, Query>
  extends View<State, Query> {
  store: Store<State, Action>
}

export class ComponentTemplate<State, Action, Query>
  implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly delayed: boolean,
    readonly reducer: (state: State, action: Action) => State,
    readonly equal: undefined | ((a: State, b: State) => boolean),
    readonly children: DOMTemplate<State, Action, Query>[]
  ) {}

  render(
    ctx: DOMContext<Action>,
    state: State
  ): ComponentView<State, Action, Query> {
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
    const store = Store.ofState({
      state,
      reducer: this.reducer,
      equal: this.equal
    })
    const { property } = store

    property.observable.on(update)
    const innerDispatch = (action: Action) => {
      store.process(action)
    }
    const newCtx = ctx.withInterceptDispatch(innerDispatch)
    const views = map(this.children, child =>
      child.render(newCtx, property.get())
    )
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
      },
      store
    }
    property.set(state)
    return view
  }
}

export function component<State, Action, Query = unknown>(
  props: {
    delayed?: boolean
    reducer: (state: State, action: Action) => State
    equal?: (a: State, b: State) => boolean
  },
  ...children: DOMChild<State, Action, Query>[]
) {
  return new ComponentTemplate<State, Action, Query>(
    props.delayed || false,
    props.reducer,
    props.equal,
    map(children, domChildToTemplate)
  )
}
