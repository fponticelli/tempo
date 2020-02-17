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

import { Raster } from 'paper'
import { PaperAttribute, PaperEventHandler } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge
} from 'tempo-std/lib/types/objects'
import { Props } from './value'
import { ItemEvents, createItem } from './item'

export interface RasterSpecificEvents<State, Action, El> {
  onLoad: PaperEventHandler<State, Action, null, El>
  onError: PaperEventHandler<State, Action, null, El>
}

type WritableRaster = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Raster>>
>

type WritableRasterOptionKeys = keyof WritableRaster

type WritableRasterProps<State> = {
  [K in WritableRasterOptionKeys]?: PaperAttribute<State, WritableRaster[K]>
}

type RasterProps<State, Action, Query, T> = Partial<
  Merge<
    { args?: {} },
    Merge<
      Merge<
        WritableRasterProps<State>,
        Props<State, Action, Query, Raster, T>
      >,
      Merge<
        ItemEvents<State, Action, Raster>,
        RasterSpecificEvents<State, Action, Raster>
      >
    >
  >
>

export function raster<State, Action, Query = unknown, T = unknown>(
  props: RasterProps<State, Action, Query, T>
) {
  return createItem<
    State,
    Action,
    Query,
    Raster,
    T,
    RasterProps<State, Action, Query, T>
  >(
    (_: State) =>
      typeof props.args ? new Raster(props.args as any) : new Raster(),
    props
  )
}
