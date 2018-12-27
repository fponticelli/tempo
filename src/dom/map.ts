import { DOMChild } from './template'
import { control } from './control'

export const mapState = <OuterState, InnerState, Action>(
  opts: { map: (value: OuterState) => InnerState },
  ...children: DOMChild<InnerState, Action>[]
) =>
  control<OuterState, InnerState, Action, Action>(
    {
      withReference: false,
      controlRender: (ctx, state, dispatch, render) => {
        const inState = opts.map(state)
        render(ctx, inState, dispatch)
      },
      controlChange: (state, change) => change(opts.map(state))
    },
    ...children
  )

export const mapAction = <State, OuterAction, InnerAction>(
  opts: { map: (value: InnerAction) => (OuterAction | undefined) },
  ...children: DOMChild<State, InnerAction>[]
) =>
  control<State, State, OuterAction, InnerAction>(
    {
      withReference: false,
      controlRender: (ctx, state, dispatch, render) => {
        const dispatchOut = (b: InnerAction) => {
          const a = opts.map(b)
          if (a != null) dispatch(a)
        }
        render(ctx, state, dispatchOut)
      },
      controlChange: (state, change) => change(state)
    },
    ...children
  )
