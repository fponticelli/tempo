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
import { component, ComponentTemplate } from './component'
import { DOMContext } from './context'
import { DOMChild } from './template'
import { View } from 'tempo-core/lib/view'
import { SimpleComponent } from './simple_component'
import { Reducer } from 'tempo-store/lib/reducer'

export type TempoView<State, Action, Query> = Readonly<{
  view: View<State, Query>
  store: Store<State, Action>
}>

export const Tempo = {
  renderComponent<State, Action, Query = unknown>(options: {
    el?: HTMLElement
    state: State
    component: ComponentTemplate<State, Action, Query>
    document?: Document
  }): TempoView<State, Action, Query> {
    const { el: maybeElement, component, state } = options
    const doc = options.document || document
    const el = maybeElement || doc.body
    const append = (node: Node) => el.appendChild(node)
    const view = component.render(
      new DOMContext(doc, append, el, () => {}),
      state
    )

    return {
      view,
      store: view.store
    }
  },

  render<State, Action, Query = unknown>(options: {
    el?: HTMLElement
    template: DOMChild<State, Action, Query>
    state: State
    reducer: Reducer<State, Action>
    equal?: (a: State, b: State) => boolean
    document?: Document
    delayed?: boolean
  }): TempoView<State, Action, Query> {
    const { el, state, reducer, equal, document, template, delayed } = options
    const comp = component({ reducer, equal, delayed }, template)
    return Tempo.renderComponent({ el, component: comp, state, document })
  },

  renderSimple<State, Query = unknown>(options: {
    el?: HTMLElement
    component: SimpleComponent<State, Query>
    state: State
    document?: Document
  }): View<State, Query> {
    const { el: maybeElement, component, state } = options
    const doc = options.document || document
    const el = maybeElement || doc.body
    const append = (node: Node) => el.appendChild(node)
    return component.render(new DOMContext(doc, append, el, () => {}), state)
  }
}
