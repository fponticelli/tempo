import { DOMDynamicFragmentView } from './fragment'
import { View, DynamicView } from '@mood/core'
import { Store } from '@mood/store'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { filterDynamics, domChildToTemplate } from './utils/dom'

export class DOMComponentView<State, Action> extends DOMDynamicFragmentView<State> {
  /* istanbul ignore next */
  constructor(
    public store: Store<State, Action>,
    readonly dispatch: (action: Action) => void,
    children: View<State>[],
    dynamics: DynamicView<State>[],
    private _destroy: () => void
  ) {
    super(children, (state: State) => {
      dynamics.forEach(child => child.change(state))
    })
  }

  destroy() {
    this._destroy()
    super.destroy()
  }
}

export type UpdateF<State, Action> = (state: State, action: Action, dispatch: (action: Action) => void) => State

export class DOMComponent<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly store: Store<State, Action>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State) {
    const { store } = this
    const { property } = store
    const { observable } = property
    const update = () => {
      view.change(store.get())
    }
    observable.on(update)
    function innerDispatch(action: Action) {
      store.dispatch(action)
      ctx.dispatch(action)
    }
    const newCtx = ctx.withDispatch(innerDispatch)
    const viewChildren = this.children.map(child => child.render(newCtx, store.get()))
    const dynamics = filterDynamics(viewChildren)
    const view = new DOMComponentView<State, Action>(store, innerDispatch, viewChildren, dynamics, () => {
      observable.off(update)
    })
    property.set(state)
    return view
  }
}

export const component = <State, Action>(
  attributes: {
    store: Store<State, Action>
  },
  ...children: DOMChild<State, Action>[]
) => new DOMComponent<State, Action>(attributes.store, children.map(domChildToTemplate))
