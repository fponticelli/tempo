import { Mood } from '@mood/dom/lib/mood'
import { html } from '@mood/dom/lib/web'
const { div, button } = html
import { mapState } from '@mood/dom/lib/map'
import { Store } from '@mood/store/lib/store'

interface State {
  count: number
}

const state = { count: 0 }

interface Increment {
  kind: 'increment'
}
interface Decrement {
  kind: 'decrement'
}
type Action = Increment | Decrement

const decrement = (_: MouseEvent): Action => ({ kind: 'decrement' })
const increment = (_: MouseEvent): Action => ({ kind: 'increment' })

const reducer = (state: State, action: Action) => {
  switch (action.kind) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw `this should never happen`
  }
}

const store = Store.ofState({ state, reducer })

const template = div<State, Action>(
  { className: 'app' },
  mapState(
    { map: state => state.count },
    div({ className: 'count count-small' }, 'count'),
    div({ className: 'count' }, String),
    div(
      { className: 'buttons' },
      button({ onclick: decrement, disabled: (count: number) => count <= 0 }, '-'),
      button({ onclick: increment }, '+')
    )
  )
)

Mood.render({ store, template })
