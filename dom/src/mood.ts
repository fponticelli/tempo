import { DOMComponent, component } from './component'
import { DOMContext } from './context'
import { DOMChild } from './template'

export interface MoodView<State, Action> {
  destroy(): void
  dispatch(action: Action): void
  change(state: State): void
}

export module Mood {
  export function renderComponent<State, Action>(options: {
    el?: HTMLElement
    component: DOMComponent<State, Action>
    observe?: (state: State, action: Action) => void
    document?: Document
  }): MoodView<State, Action> {
    const { el: maybeElement, component, observe } = options
    /* istanbul ignore next */
    const doc = options.document || document
    const el = maybeElement || doc.body
    const dispatch = observe == null ? (_: Action) => {} : (action: Action) => observe(view.state, action)
    const append = (node: Node) => el.appendChild(node)

    const view = component.render(new DOMContext(doc, append, el, dispatch), component.state)

    return view
  }

  export function render<State, Action>(options: {
    el?: HTMLElement
    template: DOMChild<State, Action>
    state: State
    update?: (state: State, action: Action, dispatch: (action: Action) => void) => State
    observe?: (state: State, action: Action) => void
    document?: Document
  }): MoodView<State, Action> {
    const { el, observe, document, state, template, update: maybeUpdate } = options
    const update = maybeUpdate || ((state: State) => state)
    const comp = component({ state, update }, template)
    return Mood.renderComponent({ el, component: comp, observe, document })
  }
}
