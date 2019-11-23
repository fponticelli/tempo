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

import { DOMChild } from './template'
import { mapState } from './map'
import { forEach } from './for_each'

export const iterate = <OuterState, InnerState extends any[], Action>(
  options: {
    refId?: string
    getArray: (outer: OuterState) => InnerState
  },
  ...children: DOMChild<[InnerState[number], OuterState], Action>[]
) => {
  let outerState: OuterState
  return mapState<OuterState, InnerState, Action>(
    {
      map: (outer) => {
        outerState = outer
        return options.getArray(outer)
      }
    },
    forEach(
      { refId: options.refId },
      mapState<InnerState[number], [InnerState[number], OuterState], Action>(
        { map: (value: InnerState[number]) => [value, outerState] },
        ...children
      )  
    )
  )
}