import { DOMChild, DOMTemplate } from './template'
import { View } from '@mood/core/lib/view'
import { DOMContext } from './context'
import { domChildToTemplate, filterDynamics } from './utils/dom'
import { DOMStaticFragmentView, DOMDynamicFragmentView, fragmentView } from './fragment'

export class MapStateTemplate<OuterState, InnerState, Action> implements DOMTemplate<OuterState, Action> {
  constructor(
    readonly map: (value: OuterState) => InnerState,
    readonly children: DOMTemplate<InnerState, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: OuterState): View<OuterState> {
    const { children, map } = this
    const innerState = map(state)
    const views = children.map(c => c.render(ctx, innerState))
    const dynamics = filterDynamics(views)

    if (dynamics.length === 0) {
      return new DOMStaticFragmentView(views)
    } else {
      return new DOMDynamicFragmentView<OuterState>(views, (state: OuterState) => {
        const innerState = map(state)
        dynamics.forEach(d => d.change(innerState))
      })
    }
  }
}

export const mapState = <OuterState, InnerState, Action>(
  options: { map: (value: OuterState) => InnerState },
  ...children: DOMChild<InnerState, Action>[]
) => new MapStateTemplate(options.map, children.map(domChildToTemplate))

export class MapActionTemplate<State, OuterAction, InnerAction> implements DOMTemplate<State, OuterAction> {
  constructor(
    readonly map: (value: InnerAction) => OuterAction | undefined,
    readonly children: DOMTemplate<State, InnerAction>[]
  ) {}

  render(ctx: DOMContext<OuterAction>, state: State): View<State> {
    const { children, map } = this
    const views = children.map(c => c.render(ctx.conditionalMapAction(map), state))
    return fragmentView(views)
  }
}

export const mapAction = <State, OuterAction, InnerAction>(
  options: { map: (value: InnerAction) => OuterAction | undefined },
  ...children: DOMChild<State, InnerAction>[]
) => new MapActionTemplate<State, OuterAction, InnerAction>(options.map, children.map(domChildToTemplate))
