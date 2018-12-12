import { View, StaticView, DynamicView } from '../core/view'
import { filterDynamics } from './utils'

export class DOMBaseFragmentView<State, Action> {
  constructor(readonly children: View<State>[]) {}

  destroy(): void {
    this.children.forEach(child => child.destroy())
  }
}

export class DOMStaticFragmentView<State, Action> extends DOMBaseFragmentView<State, Action> implements StaticView {
  readonly kind = 'static'
}

export class DOMFragmentView<State, Action> extends DOMBaseFragmentView<State, Action> implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(children: View<State>[], readonly change: (state: State) => void) {
    super(children)
  }
}

export const fragmentView = <State, Action>(children: View<State>[]) => {
  const dynamics = filterDynamics(children)
  if (dynamics.length > 0) {
    return new DOMFragmentView<State, Action>(children, (state: State) =>
      dynamics.forEach(child => child.change(state))
    )
  } else {
    return new DOMStaticFragmentView<State, Action>(children)
  }
}
