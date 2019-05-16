import { DOMComponent } from './component'
import { DOMContext } from './context'

export interface MoodView<State, Action> {
  destroy(): void
  dispatch(action: Action): void
  change(state: State): void
}

export const Mood = {
  render<State, Action>(options: {
    el: HTMLElement
    component: DOMComponent<State, Action>
    observe?: (state: State, action: Action) => void
    document?: Document
  }): MoodView<State, Action> {
    const { el, component, observe } = options
    /* istanbul ignore next */
    const doc = options.document || document
    const dispatch = observe == null ? (_: Action) => {} : (action: Action) => observe(view.state, action)
    const append = (node: Node) => el.appendChild(node)

    const view = component.render(
      new DOMContext(
        doc,
        append,
        el,
        dispatch
      ),
      component.state
    )
    return view
  }
}
