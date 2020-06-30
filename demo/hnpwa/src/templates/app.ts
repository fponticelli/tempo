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

import { mapState } from 'dom/lib/map_state'
import { main, section } from 'dom/lib/html_old'
import { State } from '../state'
import { Action } from '../action'
import { appHeader } from './header'
import { pageTemplate } from './page'

export const template = main<State, Action>(
  {},
  mapState({ map: state => state.route }, appHeader),
  section(
    { attrs: { id: 'content' } },
    mapState({ map: state => state.page }, pageTemplate)
  )
)
