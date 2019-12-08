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

import { DOMChild, DOMTemplate } from './template'
import { mapState } from './map'
import { until } from './until'

export const iterate = <OuterState, InnerState extends any[], Action, Query = unknown>(
  options: {
    refId?: string
    getArray: (outer: OuterState) => InnerState
  },
  ...children: DOMChild<[InnerState[number], OuterState, number], Action, Query>[]
): DOMTemplate<OuterState, Action, Query> => {
  let outerState: OuterState
  return mapState<OuterState, InnerState, Action, Query>(
    {
      map: (outer) => {
        outerState = outer
        return options.getArray(outer)
      }
    },
    until<InnerState, InnerState[number], Action, Query>(
      {
        repeatUntil:
          (value: InnerState, index: number) => value[index] && ([value[index], outerState, index])
      },
      ...children
    )
  )
}

export const iterateItems = <OuterState, InnerState extends any[], Action, Query = unknown>(
  options: {
    refId?: string
    getArray: (outer: OuterState) => InnerState
  },
  ...children: DOMChild<InnerState[number], Action, Query>[]
): DOMTemplate<OuterState, Action, Query> => {
  return mapState<OuterState, InnerState, Action, Query>(
    {
      map: (outer) => options.getArray(outer)
    },
    until<InnerState, InnerState[number], Action, Query>(
      {
        repeatUntil:
          (value: InnerState, index: number) => value[index]
      },
      ...children
    )
  )
}
