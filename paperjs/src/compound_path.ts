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

import { CompoundPath } from 'paper'
import { PaperAttribute } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge
} from 'tempo-std/lib/types/objects'
import { Props } from './value'
import { ItemEvents, createItem } from './item'
import { PaperTemplate } from './template'

type WritableCompoundPath = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<CompoundPath>>
>

type WritableCompoundPathPorpsKeys = keyof WritableCompoundPath

type WritableCompoundPathProps<State> = {
  [K in WritableCompoundPathPorpsKeys]?: PaperAttribute<
    State,
    WritableCompoundPath[K]
  >
}

type CompoundPathProps<State, Action, Query, T> = Partial<
  Merge<
    { args?: {} },
    Merge<
      Merge<
        WritableCompoundPathProps<State>,
        Props<State, Action, Query, CompoundPath, T>
      >,
      ItemEvents<State, Action, CompoundPath>
    >
  >
>

export function compoundPath<State, Action, Query, T = unknown>(
  props: CompoundPathProps<State, Action, Query, T>,
  ...children: PaperTemplate<State, Action, Query>[]
) {
  return createItem<
    State,
    Action,
    Query,
    CompoundPath,
    T,
    CompoundPathProps<State, Action, Query, T>
  >(
    (_: State) =>
      props.args !== undefined
        ? new CompoundPath(props.args)
        : new CompoundPath([]),
    props,
    children
  )
}
