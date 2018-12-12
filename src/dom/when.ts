import { DOMChild } from './template'
import { controlFlow } from './control'
import { DOMContext } from './context'

export const when = <State, Action>(
  opts: { condition: (state: State) => boolean },
  ...children: DOMChild<State, Action>[]
) => {
  let renderf: undefined | ((state: State) => void) = undefined
  return controlFlow<State, Action>(
    {
      withReference: true,
      controlRender: (ctx: DOMContext, state: State, dispatch, render) => {
        if (opts.condition(state)) {
          render(ctx, state, dispatch)
        } else {
          renderf = (s: State) => render(ctx, s, dispatch)
        }
      },
      controlChange: (state: State, change) => {
        if (opts.condition(state)) {
          if (renderf !== void 0) {
            renderf(state)
            renderf = undefined
          } else {
            change(state)
          }
        }
      }
    },
    ...children
  )
}

export const unless = <State, Action>(
  opts: { condition: (state: State) => boolean },
  ...children: DOMChild<State, Action>[]
) => when<State, Action>({ condition: (v: State) => !opts.condition(v) }, ...children)
