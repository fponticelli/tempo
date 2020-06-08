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

import { Shape, Point, Size } from 'paper'
import { PaperAttribute } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge
} from 'tempo-std/lib/types/objects'
import { Props } from './value'
import { ItemEvents, createItem } from './item'

type WritableShape = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Shape>>
>

type WritableShapeOptionKeys = keyof WritableShape

type WritableShapeProps<State> = {
  [K in WritableShapeOptionKeys]?: PaperAttribute<State, WritableShape[K]>
}

type ShapeProps<State, Action, Query, T, Sub> = Partial<
  Merge<
    Merge<
      WritableShapeProps<State>,
      Merge<{ args?: {} }, Props<State, Action, Query, Shape, T>>
    >,
    ItemEvents<State, Action, Shape>
  >
>

export function circle<State, Action, Query = unknown, T = unknown>(
  props: ShapeProps<State, Action, Query, T, Shape.Circle>
) {
  return createItem<
    State,
    Action,
    Query,
    Shape,
    T,
    ShapeProps<State, Action, Query, T, Shape.Circle>
  >(
    (_: State) =>
      props.args !== undefined
        ? new Shape.Circle(props.args)
        : new Shape.Circle(new Point(0, 0), 0),
    props
  )
}

export function rectangle<State, Action, Query = unknown, T = unknown>(
  props: ShapeProps<State, Action, Query, T, Shape.Rectangle>
) {
  return createItem<
    State,
    Action,
    Query,
    Shape,
    T,
    ShapeProps<State, Action, Query, T, Shape.Rectangle>
  >(
    (_: State) =>
      props.args !== undefined
        ? new Shape.Rectangle(props.args)
        : new Shape.Rectangle(new Point(0, 0), new Point(0, 0)),
    props
  )
}

export function ellipse<State, Action, Query = unknown, T = unknown>(
  props: ShapeProps<State, Action, Query, T, Shape.Ellipse>
) {
  return createItem<
    State,
    Action,
    Query,
    Shape,
    T,
    ShapeProps<State, Action, Query, T, Shape.Ellipse>
  >(
    (_: State) =>
      props.args !== undefined
        ? new Shape.Ellipse(props.args)
        : new Shape.Ellipse({
            center: new Point(0, 0),
            size: new Size(0, 0)
          }),
    props
  )
}
