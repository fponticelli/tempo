import { span, button } from 'tempo-dom/lib/html'
import { State } from './state'
import { Action } from './action'
import { match } from 'tempo-dom/lib/match'

export const toolbar = span<State, Action, unknown>(
  {},
  span(
    { attrs: { class: 'message' } },
    match<['mode', 'kind'], State, Action>(['mode', 'kind'], {
      editing: state =>
        `Selected line has ${
          state.paths[state.mode.pathIndex].segments.length
        } segments`,
      drawing: state => {
        if (state.current.length > 0)
          return `line has ${state.current.length} segments`
        else if (state.paths.length > 0)
          return 'click to select a line or click and drag to draw'
        else return 'click and drag to draw a line'
      }
    })
  ),
  span(
    { attrs: { class: 'actions' } },
    button(
      {
        attrs: {
          disabled: state => state.mode.kind !== 'editing'
        },
        events: {
          click: () => Action.removePath
        }
      },
      'Remove Selected'
    )
  )
)
