/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Tempo } from 'tempo-dom/lib/tempo'
import { div, button } from 'tempo-dom/lib/html'
import { mapState } from 'tempo-dom/lib/map'
import { Store } from 'tempo-store/lib/store'

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

const decrement = (): Action => ({ kind: 'decrement' })
const increment = (): Action => ({ kind: 'increment' })

const reducer = (state: State, action: Action): State => {
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

Tempo.render({ store, template })
