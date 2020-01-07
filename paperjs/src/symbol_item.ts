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

import { SymbolItem, SymbolDefinition } from 'paper'
import { PaperAttribute } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge
} from 'tempo-std/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'

type WritableSymbolItem = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<SymbolItem>>
>

type WritableSymbolItemOptionKeys = keyof WritableSymbolItem

type WritableSymbolItemOptions<State> = {
  [K in WritableSymbolItemOptionKeys]?: PaperAttribute<
    State,
    WritableSymbolItem[K]
  >
}

type SymbolItemOptions<State, Action, Query, T, Sub> =
  // Merge<
  Partial<
    Merge<
      Merge<
        WritableSymbolItemOptions<State>,
        TempoAttributes<State, Action, Query, SymbolItem, T>
      >,
      ItemEvents<State, Action, SymbolItem>
    >
  >
// { definition: PaperAttribute<State, SymbolDefinition> }
// >

export const symbolItem = <State, Action, Query = unknown, T = unknown>(
  options: SymbolItemOptions<State, Action, Query, T, SymbolItem>
) =>
  createItem<
    State,
    Action,
    Query,
    SymbolItem,
    T,
    SymbolItemOptions<State, Action, Query, T, SymbolItem>
  >(
    (_: State) => new SymbolItem(options.definition as SymbolDefinition),
    options
  )
