import { DOMDynamicFragmentView } from './fragment'
import { View, DynamicView } from '@mood/core'
import { Store, nextFrame } from '@mood/store'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { filterDynamics, domChildToTemplate } from './utils/dom'

export class DOMComponentView<State, Action> extends DOMDynamicFragmentView<State> {
  /* istanbul ignore next */
  constructor(
    readonly store: Store<State, Action>,
    readonly dispatch: (action: Action) => void,
    children: View<State>[],
    dynamics: DynamicView<State>[],
    private _destroy: () => void
  ) {
    super(children, (state: State) => {
      store.property.set(state)
      dynamics.forEach(child => child.change(state))
    })
  }

  destroy() {
    this._destroy()
    super.destroy()
  }
}

export class DOMComponent<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly store: Store<State, Action>,
    readonly children: DOMTemplate<State, Action>[],
    readonly delayed: boolean
  ) {}

  render(ctx: DOMContext<Action>, state: State) {
    let update = (state: State) => view.change(state)
    if (this.delayed) {
      update = nextFrame(update)
    }
    const { store } = this

    store.property.observable.on(update)
    const innerDispatch = (action: Action) => {
      store.process(action)
    }
    const newCtx = ctx.withDispatch(innerDispatch)
    const viewChildren = this.children.map(child => child.render(newCtx, store.property.get()))
    const dynamics = filterDynamics(viewChildren)
    const view = new DOMComponentView<State, Action>(store, innerDispatch, viewChildren, dynamics, () => {
      store.property.observable.off(update)
    })
    store.property.set(state)
    return view
  }
}

export const component = <State, Action>(
  attributes: {
    store: Store<State, Action>
    delayed?: boolean
  },
  ...children: DOMChild<State, Action>[]
) => new DOMComponent<State, Action>(attributes.store, children.map(domChildToTemplate), attributes.delayed || false)
