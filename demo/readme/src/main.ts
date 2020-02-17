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
import { Store } from 'tempo-store/lib/store'

const state = 0

type Action = 'increment' | 'decrement'

const reducer = (state: number, action: Action): number => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      throw `this should never happen`
  }
}

const store = Store.ofState({ state, reducer })

const template = div<number, Action>(
  { attrs: { class: 'app' } },
  div({ attrs: { class: 'count count-small' } }, 'count'),
  div({ attrs: { class: 'count' } }, String),
  div(
    { attrs: { class: 'buttons' } },
    button(
      {
        events: { click: () => 'decrement' },
        attrs: { disabled: count => count <= 0 }
      },
      '-'
    ),
    button({ events: { click: () => 'increment' } }, '+')
  )
)

Tempo.render({ store, template })
