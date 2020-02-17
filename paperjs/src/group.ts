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

import { Group, Size } from 'paper'
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

type WritableGroup = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Group>>
>

type WritableGroupOptionKeys = keyof WritableGroup

type WritableGroupProps<State> = {
  [K in WritableGroupOptionKeys]?: PaperAttribute<State, WritableGroup[K]>
}

type GroupProps<State, Action, Query, T> = Partial<
  Merge<
    Merge<
      WritableGroupProps<State>,
      Props<State, Action, Query, Group, T>
    >,
    ItemEvents<State, Action, Group>
  >
>

export function group<State, Action, Query, T = unknown>(
  props: GroupProps<State, Action, Query, T>,
  ...children: PaperTemplate<State, Action, Query>[]
) {
  return createItem<
    State,
    Action,
    Query,
    Group,
    T,
    GroupProps<State, Action, Query, T>
  >((_: State) => new Group(new Size(0, 0)), props, children)
}
