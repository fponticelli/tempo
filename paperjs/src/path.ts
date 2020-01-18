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
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'

type WritablePath = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Path>>
>

type WritablePathOptionKeys = keyof WritablePath

type WritablePathOptions<State> = {
  [K in WritablePathOptionKeys]?: PaperAttribute<State, WritablePath[K]>
}

type PathOptions<State, Action, Query, T> = Partial<
  Merge<
    { args?: {} },
    Merge<
      Merge<
        WritablePathOptions<State>,
        TempoAttributes<State, Action, Query, Path, T>
      >,
      ItemEvents<State, Action, Path>
    >
  >
>

type PathConstrOptions<State, Action, Query, T> = Merge<
  { args: any },
  Partial<
    Merge<
      Merge<
        WritablePathOptions<State>,
        TempoAttributes<State, Action, Query, Path, T>
      >,
      ItemEvents<State, Action, Path>
    >
  >
>

export const path = <State, Action, Query = unknown, T = unknown>(
  options: PathOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >(
    (_: State) =>
      typeof options.args !== 'undefined'
        ? new Path(options.args)
        : new Path([]),
    options
  )

export const pathLine = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Line(options.args), options)

export const pathCircle = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Circle(options.args), options)

export const pathRectangle = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Rectangle(options.args), options)

export const pathEllipse = <State, Action, Query, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Ellipse(options.args), options)

export const pathArc = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Arc(options.args), options)

export const pathRegularPolygon = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.RegularPolygon(options.args), options)

export const pathStar = <State, Action, Query = unknown, T = unknown>(
  options: PathConstrOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Path,
    T,
    PathOptions<State, Action, Query, T>
  >((_: State) => new Path.Star(options.args), options)
