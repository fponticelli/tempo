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

import { DOMTemplate, DOMChild } from '../template'
import { DOMContext } from '../context'
import { map } from 'tempo-std/lib/arrays'
import { View } from 'tempo-core/lib/view'
import { IBuilder, childOrBuilderToTemplate } from './dom_builder'
import { strictEqual } from 'tempo-std/lib/equals'

export interface ComponentView<State, Action, Query>
  extends View<State, Query> {
  dispatch: (action: Action) => void
  state: State
}

export class ComponentTemplate<State, Action, Query>
  implements DOMTemplate<State, Action, Query> {
  readonly children: DOMTemplate<State, Action, Query>[]
  constructor(
    readonly delayed: boolean,
    readonly reducer: (state: State, action: Action) => State,
    readonly equal: undefined | ((a: State, b: State) => boolean),
    children: (
      | DOMChild<State, Action, Query>
      | IBuilder<State, Action, Query>
    )[]
  ) {
    this.children = children.map(childOrBuilderToTemplate)
  }

  render(
    ctx: DOMContext<Action>,
    state: State
  ): ComponentView<State, Action, Query> {
    const equals = this.equal ?? strictEqual
    let update: (state: State) => void
    if (this.delayed) {
      let shouldRender = true
      update = (state: State) => {
        view.state = state
        if (shouldRender) {
          shouldRender = false
          setTimeout(() => {
            view.change(view.state)
            shouldRender = true
          })
        }
      }
    } else {
      update = (state: State) => {
        view.state = state
        view.change(state)
      }
    }

    const innerDispatch = (action: Action) => {
      const newState = this.reducer(view.state, action)
      if (!equals(newState, view.state)) {
        // view.state = newState
        update(newState)
      }
      ctx.dispatch(action)
    }
    const newCtx = ctx.withDispatch(innerDispatch)
    const views = map(this.children, child => child.render(newCtx, state))
    const view = {
      change: (state: State) => {
        view.state = state
        for (const view of views) view.change(state)
      },
      destroy: () => {
        for (const view of views) view.destroy()
      },
      request: (query: Query) => {
        for (const view of views) view.request(query)
      },
      state,
      dispatch: (action: Action) => {
        innerDispatch(action)
      }
    }
    return view
  }
}
