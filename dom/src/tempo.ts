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

import { ComponentTemplate, ComponentView } from './impl/component'
import { DOMContext } from './context'
import { DOMChild } from './template'
import { SimpleComponent } from './impl/simple_component'
import { Reducer } from 'tempo-core/lib/reducer'
import {
  SimpleComponentHTMLBuilder,
  ComponentHTMLBuilder
} from './impl/html_builder'
import { IBuilder, childOrBuilderToTemplate } from './impl/dom_builder'
import { Component } from './impl/html'

export type Middleware<State, Action> = (
  dispatch: (action: Action) => void
) => (state: State, action: Action, previous: State) => void

export type SimpleMiddlware<State> = (
  dispatch: (state: State) => void
) => (state: State, previous: State) => void

export const Tempo = {
  renderComponent<State, Action, Query = unknown>(options: {
    el?: HTMLElement
    state: State
    component:
      | ComponentTemplate<State, Action, Query>
      | ComponentHTMLBuilder<State, Action, Query>
    document?: Document
    middleware?: Middleware<State, Action>
  }): ComponentView<State, Action, Query> {
    const { el: maybeElement, component } = options
    let localState = options.state
    const doc = options.document || document
    const el = maybeElement || doc.body
    const append = (node: Node) => el.appendChild(node)
    const template = childOrBuilderToTemplate(component) as ComponentTemplate<
      State,
      Action,
      Query
    >

    const appliedMiddleware =
      options.middleware !== undefined
        ? options.middleware((action: Action) => {
            view.dispatch(action)
          })
        : () => {}

    const view = template.render(
      new DOMContext(doc, append, (action: Action) => {
        appliedMiddleware(view.state, action, localState)
        localState = view.state
      }),
      localState
    )

    return view
  },

  render<State, Action, Query = unknown>(options: {
    el?: HTMLElement
    template: DOMChild<State, Action, Query> | IBuilder<State, Action, Query>
    state: State
    reducer: Reducer<State, Action>
    equal?: (a: State, b: State) => boolean
    document?: Document
    delayed?: boolean
    middleware?: Middleware<State, Action>
  }): ComponentView<State, Action, Query> {
    const {
      el,
      state,
      reducer,
      equal,
      document,
      template,
      delayed,
      middleware
    } = options
    const component = Component(reducer, $ => {
      $.Equals(equal).Delayed(delayed).Append(template)
    })
    return Tempo.renderComponent({
      el,
      component,
      state,
      document,
      middleware
    })
  },

  renderSimple<State, Query = unknown>(options: {
    el?: HTMLElement
    component:
      | SimpleComponent<State, Query>
      | SimpleComponentHTMLBuilder<State, Query>
    state: State
    document?: Document
    middleware?: SimpleMiddlware<State>
  }) {
    const { el: maybeElement, component } = options
    let localState = options.state
    const doc = options.document || document
    const el = maybeElement || doc.body
    const append = (node: Node) => el.appendChild(node)
    const template = childOrBuilderToTemplate(component)

    const appliedMiddleware =
      options.middleware !== undefined
        ? options.middleware((state: State) => result.change(state))
        : () => {}

    const result = {
      ...template.render(
        new DOMContext(doc, append, (state: State) => {
          appliedMiddleware(state, localState)
          localState = state
        }),
        localState
      )
    }

    return result
  }
}
