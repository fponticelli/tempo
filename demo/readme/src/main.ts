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
import { div, button } from 'dom/lib/html_old'
import { simpleComponent } from 'tempo-dom/lib/simple_component'

const component = simpleComponent<number>(
  {},
  div(
    { attrs: { class: 'app' } },
    div({ attrs: { class: 'count count-small' } }, 'count'),
    div({ attrs: { class: 'count' } }, String),
    div(
      { attrs: { class: 'buttons' } },
      button(
        {
          events: { click: count => count - 1 },
          attrs: { disabled: count => count <= 0 }
        },
        '-'
      ),
      button({ events: { click: count => count + 1 } }, '+')
    )
  )
)

Tempo.renderSimple({ component, state: 0 })
