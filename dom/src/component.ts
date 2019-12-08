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

import { DOMDynamicFragmentView } from './fragment'
import { View, DynamicView } from 'tempo-core/lib/view'
import { Store } from 'tempo-store/lib/store'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { filterDynamics, domChildToTemplate } from './utils/dom'
import { mapArray } from 'tempo-core/lib/util/map'

export class DOMComponentView<State, Action, Query> extends DOMDynamicFragmentView<State, Query> {
  /* istanbul ignore next */
  constructor(
    readonly store: Store<State, Action>,
    readonly dispatch: (action: Action) => void,
    children: View<State, Query>[],
    dynamics: DynamicView<State, Query>[],
    private _destroy: () => void
  ) {
    super(children, (state: State) => {
      store.property.set(state)
      for (const dy of dynamics) dy.change(state)
    })
  }

  request(query: Query) {
    throw 'TODO' // TODO
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
    const viewChildren = mapArray(this.children, child => child.render(newCtx, property.get()))
    const dynamics = filterDynamics(viewChildren)
    const view = new DOMComponentView<State, Action, Query>(store, innerDispatch, viewChildren, dynamics, () => {
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
