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

import { Path } from 'paper'
import { PaperAttribute } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge
} from 'tempo-std/lib/types/objects'
import { Props } from './value'
import { ItemEvents, createItem } from './item'

type WritablePath = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Path>>
>

type WritablePathOptionKeys = keyof WritablePath

type WritablePathProps<State> = {
  [K in WritablePathOptionKeys]?: PaperAttribute<State, WritablePath[K]>
}

type PathProps<State, Action, Query, T> = Partial<
  Merge<
    { args?: {} },
    Merge<
      Merge<
        WritablePathProps<State>,
        Props<State, Action, Query, Path, T>
      >,
      ItemEvents<State, Action, Path>
    >
  >
>

type PathConstrProps<State, Action, Query, T> = Merge<
  { args: any },
  Partial<
    Merge<
      Merge<
        WritablePathProps<State>,
        Props<State, Action, Query, Path, T>
      >,
      ItemEvents<State, Action, Path>
    >
  >
>

export function path<State, Action, Query = unknown, T = unknown>(
  props: PathProps<State, Action, Query, T>
) {
  return createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathProps<State, Action, Query, T>
  >(
    (_: State) =>
      typeof props.args !== 'undefined'
        ? new Path(props.args)
        : new Path([]),
    props
  )
}

export function pathLine<State, Action, Query = unknown, T = unknown>(
  props: PathConstrProps<State, Action, Query, T>
) {
  return createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathProps<State, Action, Query, T>
  >((_: State) => new Path.Line(props.args), props)
}

export function pathCircle<State, Action, Query = unknown, T = unknown>(
  props: PathConstrProps<State, Action, Query, T>
) {
  return createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathProps<State, Action, Query, T>
  >((_: State) => new Path.Circle(props.args), props)
}

export function pathRectangle<State, Action, Query = unknown, T = unknown>(
  props: PathConstrProps<State, Action, Query, T>
) {
  return createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathProps<State, Action, Query, T>
  >((_: State) => new Path.Rectangle(props.args), props)
}

export function pathEllipse<State, Action, Query, T = unknown>(
  props: PathConstrProps<State, Action, Query, T>
) {
  return createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathProps<State, Action, Query, T>
  >((_: State) => new Path.Ellipse(props.args), props)
}

export function pathArc<State, Action, Query = unknown, T = unknown>(
  props: PathConstrProps<State, Action, Query, T>
) {
  return createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathProps<State, Action, Query, T>
  >((_: State) => new Path.Arc(props.args), props)
}

export function pathRegularPolygon<State, Action, Query = unknown, T = unknown>(
  props: PathConstrProps<State, Action, Query, T>
) {
  return createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathProps<State, Action, Query, T>
  >((_: State) => new Path.RegularPolygon(props.args), props)
}

export function pathStar<State, Action, Query = unknown, T = unknown>(
  props: PathConstrProps<State, Action, Query, T>
) {
  return createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathProps<State, Action, Query, T>
  >((_: State) => new Path.Star(props.args), props)
}
