import { DOMChild, DOMTemplate } from './template'
import { View } from '../core/view'
import { DOMContext } from './context'
import { domChildToTemplate, filterDynamics } from './utils'
import { DOMStaticFragmentView, DOMDynamicFragmentView, fragmentView } from './fragment'

export class MapStateTemplate<OuterState, InnerState, Action> implements DOMTemplate<OuterState, Action> {
  constructor(
    readonly map: (value: OuterState) => InnerState,
    readonly children: DOMTemplate<InnerState, Action>[]
  ) {}
  render(
    ctx: DOMContext,
    state: OuterState,
    dispatch: (action: Action) => void
  ): View<OuterState> {
    const { children, map } = this
    const innerState = map(state)
    const views = children.map(c => c.render(ctx, innerState, dispatch))
    const dynamics = filterDynamics(views)

    if (dynamics.length === 0) {
      return new DOMStaticFragmentView(views)
    } else {
      return new DOMDynamicFragmentView<OuterState>(
        views,
        (state: OuterState) => {
          const innerState = map(state)
          dynamics.forEach(d => d.change(innerState))
        }
      )
    }
  }
}

export const mapState = <OuterState, InnerState, Action>(
  opts: { map: (value: OuterState) => InnerState },
  ...children: DOMChild<InnerState, Action>[]
) => new MapStateTemplate(opts.map, children.map(domChildToTemplate))

export class MapActionTemplate<State, OuterAction, InnerAction> implements DOMTemplate<State, OuterAction> {
  constructor(
    readonly map: (value: InnerAction) => (OuterAction | undefined),
    readonly children: DOMTemplate<State, InnerAction>[]
  ) {}

  render(
    ctx: DOMContext,
    state: State,
    dispatch: (action: OuterAction) => void
  ): View<State> {
    const { children, map } = this
    const innerDispatch = (innerAction: InnerAction) => {
      const action = map(innerAction)
      if (action != null)
        dispatch(action)
    }
    const views = children.map(c => c.render(ctx, state, innerDispatch))
    return fragmentView(views)
  }
}

export const mapAction = <State, OuterAction, InnerAction>(
  opts: { map: (value: InnerAction) => (OuterAction | undefined) },
  ...children: DOMChild<State, InnerAction>[]
) => new MapActionTemplate<State, OuterAction, InnerAction>(opts.map, children.map(domChildToTemplate))
