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

import { PointText, Point } from 'paper'
import { PaperAttribute } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge
} from 'tempo-std/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'

type WritableShape = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<PointText>>
>

type WritableShapeOptionKeys = keyof WritableShape

type WritableShapeOptions<State> = {
  [K in WritableShapeOptionKeys]?: PaperAttribute<State, WritableShape[K]>
}

type ShapeOptions<State, Action, Query, T, Sub> = Partial<
  Merge<
    Merge<
      WritableShapeOptions<State>,
      TempoAttributes<State, Action, Query, PointText, T>
    >,
    ItemEvents<State, Action, PointText>
  >
>

export const shape = <State, Action, Query = unknown, T = unknown>(
  options: ShapeOptions<State, Action, Query, T, PointText>
) =>
  createItem<
    State,
    Action,
    Query,
    PointText,
    T,
    ShapeOptions<State, Action, Query, T, PointText>
  >((_: State) => new PointText(new Point(0, 0)), options)
