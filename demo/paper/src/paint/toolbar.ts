import { span, input } from 'tempo-dom/lib/html'
import { State } from './state'
import { Action } from './action'

export const toolbar = span<State, Action, unknown>(
  {},
  span({ attrs: { class: 'message' } }, state => state.message),
  span(
    { attrs: { class: 'action' } },
    input({
      attrs: {
        type: 'text',
        value: state => state.url
      }
    })
  )
)
