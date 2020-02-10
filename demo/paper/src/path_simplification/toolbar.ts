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
