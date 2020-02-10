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

import { Point, Segment } from 'paper'

export type Mode = { kind: 'drawing' } | { kind: 'editing'; pathIndex: number }

export const Mode = {
  drawing: { kind: 'drawing' } as Mode,
  editing(pathIndex: number): Mode {
    return { kind: 'editing', pathIndex }
  }
}

export interface PathItem {
  segments: Segment[]
  position: Point
}

export const state = {
  paths: [] as PathItem[],
  current: [] as Segment[],
  mode: Mode.drawing
}

export type State = typeof state
