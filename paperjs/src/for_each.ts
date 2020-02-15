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

import { PaperTemplate } from './template'
import { until } from './until'

export function forEach<State extends any[], Action, Query = unknown>(
  options: { refId?: string },
  ...children: PaperTemplate<State[number], Action, Query>[]
): PaperTemplate<State, Action, Query> {
  return until(
    {
      repeatUntil: (state: State, index: number) => state[index]
    },
    ...children
  )
}
