import { SymbolItem, SymbolDefinition } from 'paper'
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

type WritableSymbolItem = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<SymbolItem>>
>

type WritableSymbolItemOptionKeys = keyof WritableSymbolItem

type WritableSymbolItemOptions<State> = {
  [K in WritableSymbolItemOptionKeys]?: PaperAttribute<State, WritableSymbolItem[K]>
}

type SymbolItemOptions<State, Action, Query, T, Sub> =
// Merge<
  MakeOptional<
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
