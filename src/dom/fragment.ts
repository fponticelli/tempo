import { View, StaticView, DynamicView } from '../core/view'
import { filterDynamics } from './utils'

export class DOMBaseFragmentView {
  constructor(readonly views: View<any>[]) {}

  destroy(): void {
    this.views.forEach(view => view.destroy())
  }
}

export class DOMStaticFragmentView extends DOMBaseFragmentView implements StaticView {
  readonly kind = 'static'
}

export class DOMDynamicFragmentView<State>
    extends DOMBaseFragmentView
    implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(views: View<any>[], readonly change: (state: State) => void) {
    super(views)
  }
}

export const fragmentView = <State>(views: View<State>[]) => {
  const dynamics = filterDynamics(views)
  if (dynamics.length > 0) {
    return new DOMDynamicFragmentView<State>(views, (state: State) =>
      dynamics.forEach(child => child.change(state))
    )
  } else {
    return new DOMStaticFragmentView(views)
  }
}
