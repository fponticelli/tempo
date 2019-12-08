import { CompoundPath } from 'paper'
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

type WritableCompoundPath = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<CompoundPath>>
>

type WritableCompoundPathOptionKeys = keyof WritableCompoundPath

type WritableCompoundPathOptions<State> = {
  [K in WritableCompoundPathOptionKeys]?: PaperAttribute<State, WritableCompoundPath[K]>
}

type CompoundPathOptions<State, Action, Query, T> = MakeOptional<
  Merge<
    { args?: {} },
    Merge<
      Merge<
        WritableCompoundPathOptions<State>,
        TempoAttributes<State, Action, Query, CompoundPath, T>
      >,
      ItemEvents<State, Action, CompoundPath>
    >
  >
>

export const compoundPath = <State, Action, Query, T = unknown>(
  options: CompoundPathOptions<State, Action, Query, T>,
  ...children: PaperTemplate<State, Action, Query>[]
) =>
  createItem<
    State,
    Action,
    Query,
    CompoundPath,
    T,
    CompoundPathOptions<State, Action, Query, T>
  >((_: State) =>
    typeof options.args !== 'undefined' ?
      new CompoundPath(options.args) :
      new CompoundPath([]),
    options,
    children
)
