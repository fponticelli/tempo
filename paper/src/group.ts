import { Group, Size } from 'paper'
import { PaperAttribute } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge,
  MakeOptional
} from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'
import { PaperTemplate } from './template'

type WritableGroup = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Group>>
>

type WritableGroupOptionKeys = keyof WritableGroup

type WritableGroupOptions<State> = {
  [K in WritableGroupOptionKeys]?: PaperAttribute<State, WritableGroup[K]>
}

type GroupOptions<State, Action, Query, T> = MakeOptional<
  Merge<
    Merge<
      WritableGroupOptions<State>,
      TempoAttributes<State, Action, Query, Group, T>
    >,
    ItemEvents<State, Action, Group>
  >
>

export const group = <State, Action, Query, T = unknown>(
  options: GroupOptions<State, Action, Query, T>,
  ...children: PaperTemplate<State, Action, Query>[]
) =>
  createItem<
    State,
    Action,
    Query,
    Group,
    T,
    GroupOptions<State, Action, Query, T>
  >((_: State) => new Group(new Size(0, 0)), options, children)
