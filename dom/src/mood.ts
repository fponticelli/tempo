import { Store } from '@mood/store'
import { DOMComponent, component } from './component'
import { DOMContext } from './context'
import { DOMChild } from './template'

export type MoodView<State, Action> = Readonly<{
  store: Store<State, Action>
  destroy(): void
}>

export module Mood {
  // export function renderComponent<State, Action>(options: {
  //   el?: HTMLElement
  //   component: DOMComponent<State, Action>
  //   middleware?: (state: State, action: Action) => void
  //   document?: Document
  // }): MoodView<State, Action> {
  //   const { el: maybeElement, component, middleware } = options
  //   /* istanbul ignore next */
  //   const doc = options.document || document
  //   const el = maybeElement || doc.body
  //   const dispatch = middleware == null ? (_: Action) => {} : (action: Action) => middleware(view.state, action)
  //   const append = (node: Node) => el.appendChild(node)

  //   const view = component.render(new DOMContext(doc, append, el, dispatch), component.state)

  //   return view
  // }

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
    // const dispatch = middleware == null ? (_: Action) => {} : (action: Action) => middleware(view.state, action)
    const append = (node: Node) => el.appendChild(node)

    const view = component.render(new DOMContext(doc, append, el, (action) => store.dispatch(action)), store.get())

    return {
      destroy: () => view.destroy(),
      store
    }
  }

  // export function render<State, Action>(options: {
  //   el?: HTMLElement
  //   template: DOMChild<State, Action>
  //   state: State
  //   reduce?: (state: State, action: Action) => State
  //   middleware?: Middleware<State, Action>
  //   document?: Document
  //   stateEquals?: (a: State, b: State) => boolean
  // }): MoodView<State, Action> {
  //   const property = new Property(options.state, options.stateEquals)
  //   const reducer = options.reduce || ((state: State, action: Action) => state)
  //   const store = new Store(property, reducer, options.middleware)

  //   const { el, middleware, document, state, template, reduce: maybeReduce } = options
  //   const reduce = maybeReduce || ((state: State) => state)
  //   const comp = component({ state, update: reduce }, template)
  //   return Mood.renderComponent({ el, component: comp, middleware, document })
  // }

  export function renderStore<State, Action>(options: {
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
