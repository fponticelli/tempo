import { Store } from '@mood/store'
import { DOMComponent, component } from './component'
import { DOMContext } from './context'
import { DOMChild } from './template'

export type MoodView<State, Action> = Readonly<{
  store: Store<State, Action>
  destroy(): void
}>

export module Mood {
  export function renderComponent<State, Action>(options: {
    el?: HTMLElement
    component: DOMComponent<State, Action>
    document?: Document
  }): MoodView<State, Action> {
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
        (action) => store.process(action)
      ),
      store.get()
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
  }): MoodView<State, Action> {
    const { el, store, document, template } = options
    const comp = component({ store }, template)
    return Mood.renderComponent({ el, component: comp, document })
  }
}
