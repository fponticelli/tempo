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

import { Template } from 'tempo-core/lib/template'
import { DOMContext } from './context'
import { TextValue } from './value'

export interface DOMTemplate<State, Action, Query = unknown> extends Template<State, Query, DOMContext<Action>> {}

export type DOMChild<State, Action, Query = unknown> = DOMTemplate<State, Action, Query> | TextValue<State>
