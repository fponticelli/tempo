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

import { Segment, Point } from 'paper'
import { Mode } from './state'

export type Action =
  | { kind: 'AddSegment'; segment: Segment }
  | { kind: 'AddPath' }
  | { kind: 'RemovePath' }
  | { kind: 'ChangeMode'; mode: Mode }
  | { kind: 'UpdatePosition'; delta: Point }

export const Action = {
  addSegment(segment: Segment): Action {
    return { kind: 'AddSegment', segment }
  },
  addPath: { kind: 'AddPath' } as Action,
  removePath: { kind: 'RemovePath' } as Action,
  selectPath(pathIndex: number): Action {
    return { kind: 'ChangeMode', mode: Mode.editing(pathIndex) }
  },
  draw: { kind: 'ChangeMode', mode: Mode.drawing } as Action,
  updatePosition(delta: Point): Action {
    return { kind: 'UpdatePosition', delta }
  }
}
