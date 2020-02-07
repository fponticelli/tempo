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

import { DerivedOrLiteralValue, DerivedValue } from 'tempo-core/lib/value'
import { Project } from 'paper'

export type PaperAttribute<State, Value> =
  | DerivedOrLiteralValue<State, Value | undefined>
  | undefined

export type PaperEventHandler<State, Action, Event, Target> = (
  state: State,
  event: Event,
  target: Target,
  project: Project
) => Action | undefined

export const resolveAttribute = <State, Value>(
  attr: PaperAttribute<State, Value>
): ((state: State) => Value | undefined) => {
  if (typeof attr === 'function') {
    return attr as DerivedValue<State, Value>
  } else {
    return (_: State): Value | undefined => attr
  }
}
