import { DOMDynamicFragmentView } from './fragment'
import { View, DynamicView } from '@mood/core'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { filterDynamics, domChildToTemplate } from './utils'

export class DOMComponentView<State, Action> extends DOMDynamicFragmentView<State> {
  /* istanbul ignore next */
  constructor(
    public state: State,
    readonly dispatch: (action: Action) => void,
    children: View<State>[],
    dynamics: DynamicView<State>[]
  ) {
    super(children, (state: State) => {
      this.state = state
      dynamics.forEach(child => child.change(state))
    })
  }
}

export type UpdateF<State, Action> = (state: State, action: Action, dispatch: (action: Action) => void) => State

export class DOMComponent<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly state: State,
    readonly update: UpdateF<State, Action>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State) {
    const { update } = this
    function innerDispatch(action: Action) {
      view.state = update(view.state, action, innerDispatch)
      view.change(view.state)
      ctx.dispatch(action)
    }
    const newCtx = ctx.withDispatch(innerDispatch)
    const viewChildren = this.children.map(child => child.render(newCtx, state))
    const dynamics = filterDynamics(viewChildren)
    const view = new DOMComponentView<State, Action>(state, innerDispatch, viewChildren, dynamics)
    return view
  }
}

export const component = <State, Action>(
  attributes: {
    state: State
    update: (state: State, action: Action, dispatch: (action: Action) => void) => State
  },
  ...children: DOMChild<State, Action>[]
) => new DOMComponent<State, Action>(attributes.state, attributes.update, children.map(domChildToTemplate))
