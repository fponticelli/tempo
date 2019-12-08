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

import { DOMFragmentView } from './fragment'
import { View } from 'tempo-core/lib/view'
import { Store } from 'tempo-store/lib/store'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { domChildToTemplate } from './utils/dom'
import { mapArray } from 'tempo-core/lib/util/map'

export class DOMComponentView<State, Action, Query> extends DOMFragmentView<State, Query> {
  /* istanbul ignore next */
  constructor(
    readonly store: Store<State, Action>,
    readonly dispatch: (action: Action) => void,
    views: View<State, Query>[],
    private _destroy: () => void
  ) {
    super(views, (state: State) => {
      store.property.set(state)
      for (const view of views) view.change(state)
    })
  }

  request(query: Query) {
    for (const view of this.views) view.request(query)
  }

  destroy() {
    this._destroy()
    super.destroy()
  }
}

export class DOMComponentTemplate<State, Action, Query> implements DOMTemplate<State, Action, Query> {
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
    const views = mapArray(this.children, child => child.render(newCtx, property.get()))
    const view = new DOMComponentView<State, Action, Query>(store, innerDispatch, views, () => {
      property.observable.off(update)
    })
    property.set(state)
    return view
  }
}

export const component = <State, Action, Query = unknown>(
  attributes: {
    store: Store<State, Action>
    delayed?: boolean
  },
  ...children: DOMChild<State, Action, Query>[]
) => new DOMComponentTemplate<State, Action, Query>(attributes.store, mapArray(children, domChildToTemplate), attributes.delayed || false)
