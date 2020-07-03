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

import { div, input, label, table, tr, td, th } from 'tempo-dom/lib/html'
import { Action } from '../action'
import { TestOptions } from '../state'

export const optionsSelection = div<TestOptions, Action>(
  {},
  table(
    {},
    tr(
      {},
      th(
        {},
        label({ attrs: { for: 'options_max_time' } }, 'max execution time')
      ),
      td(
        { attrs: { className: 'option-value' } },
        input({
          attrs: {
            id: 'options_max_time',
            type: 'number',
            min: 0,
            value: options => options.maxTime
          },
          events: {
            change: (_s, _e, el) =>
              Action.changeOptionMaxTime(Number((el as HTMLInputElement).value))
          }
        })
      )
    )
  )
)
