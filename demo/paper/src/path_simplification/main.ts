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

import { adapter } from 'tempo-paper/lib/adapter'
import { SampleState } from '../canvas_state'
import { state, State } from './state'
import { reducer } from './reducer'
import { Store } from 'tempo-store/lib/store'
import { Action } from './action'
import { makeApp } from './app'

const store = Store.ofState<State, Action>({
  state,
  reducer
})

export const template = adapter<SampleState, State, unknown, Action>(
  {},
  makeApp(store)
)
