import { div, button } from 'tempo-dom/lib/html'
import { mapState } from 'tempo-dom/lib/map'
import { State } from './state'
import { Action, decrement, increment } from './action'

export const template = div<State, Action>(
  { attrs: { className: 'app' } },
  mapState(
    { map: (state: State) => state.count },
    div({ attrs: { className: 'count count-small' } }, 'count'),
    div({ attrs: { className: 'count' } }, String),
    div(
      { attrs: { className: 'buttons' } },
      button(
        {
          events: { click: decrement },
          attrs: { disabled: (count: number) => count <= 0 }
        },
        '-'
      ),
      button({ events: { click: increment } }, '+')
    )
  )
)
