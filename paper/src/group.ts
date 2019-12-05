import { Group, Size } from 'paper'
import { PaperAttribute } from './value'
import { WritableFields, ExcludeFunctionFields, RemoveNullableFromFields, Merge, MakeOptional } from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'
import { PaperTemplate } from './template'

type WritableGroup = ExcludeFunctionFields<RemoveNullableFromFields<WritableFields<Group>>>

type WritableGroupOptionKeys = keyof WritableGroup

type WritableGroupOptions<State> = {
  [K in WritableGroupOptionKeys]?: PaperAttribute<State, WritableGroup[K]>
}

type GroupOptions<State, Action, T> =
  MakeOptional<
    Merge<
      Merge<
        WritableGroupOptions<State>,
        TempoAttributes<State, Action, T, Group>
      >,
      ItemEvents<State, Action, Group>
    >
  >

export const group = <State, Action, T = unknown>(
  options: GroupOptions<State, Action, T>,
  ...children: PaperTemplate<State, Action>[]
) =>
  createItem<State, Action, T, Group, GroupOptions<State, Action, T>>(
    (_: State) => new Group(new Size(0, 0)),
    options,
    children
  )
