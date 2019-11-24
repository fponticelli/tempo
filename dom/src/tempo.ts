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

import { Store } from '@tempo/store/lib/store'
import { DOMComponent, component } from './component'
import { DOMContext } from './context'
import { DOMChild } from './template'

export type TempoView<State, Action> = Readonly<{
  store: Store<State, Action>
  destroy(): void
}>

export module Tempo {
  export function renderComponent<State, Action>(options: {
    el?: HTMLElement
    component: DOMComponent<State, Action>
    document?: Document
  }): TempoView<State, Action> {
    const { el: maybeElement, component } = options
    const { store } = component
    /* istanbul ignore next */
    const doc = options.document || document
    const el = maybeElement || doc.body
    const append = (node: Node) => el.appendChild(node)
    const view = component.render(
      new DOMContext(
        doc,
        append,
        el,
        () => {}
      ),
      store.property.get()
    )

    return {
      destroy: () => view.destroy(),
      store
    }
  }

  export function render<State, Action>(options: {
    el?: HTMLElement
    template: DOMChild<State, Action>
    store: Store<State, Action>
    document?: Document
    delayed?: boolean
  }): TempoView<State, Action> {
    const { el, store, document, template, delayed } = options
    const comp = component({ store, delayed }, template)
    return Tempo.renderComponent({ el, component: comp, document })
  }
}
