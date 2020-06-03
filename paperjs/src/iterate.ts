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
import { mapState } from './map'
import { until } from './until'
import { PaperAttribute, resolveAttribute } from './value'

export function iterate<
  OuterState,
  InnerState extends any[],
  Action,
  Query = unknown
>(
  props: {
    map: PaperAttribute<OuterState, InnerState>
  },
  ...children: PaperTemplate<
    [InnerState[number], OuterState, number],
    Action,
    Query
  >[]
): PaperTemplate<OuterState, Action, Query> {
  let outerState: OuterState
  return mapState<OuterState, InnerState, Action, Query>(
    {
      map: (outer: OuterState) => {
        outerState = outer
        return resolveAttribute(props.map)(outerState)
      }
    },
    until<InnerState, InnerState[number], Action, Query>(
      {
        next: ({ state, index }: { state: InnerState; index: number }) =>
          state[index] && [state[index], outerState, index]
      },
      ...children
    )
  )
}

export function iterateItems<
  OuterState,
  InnerState extends any[],
  Action,
  Query = unknown
>(
  props: {
    map: PaperAttribute<OuterState, InnerState>
  },
  ...children: PaperTemplate<InnerState[number], Action, Query>[]
): PaperTemplate<OuterState, Action, Query> {
  return mapState<OuterState, InnerState, Action, Query>(
    { map: outer => resolveAttribute(props.map)(outer) },
    until<InnerState, InnerState[number], Action, Query>(
      {
        next: ({ state, index }: { state: InnerState; index: number }) =>
          state[index]
      },
      ...children
    )
  )
}
