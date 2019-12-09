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

type WritableShape = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<SymbolItem>>
>

type WritableShapeOptionKeys = keyof WritableShape

type WritableShapeOptions<State> = {
  [K in WritableShapeOptionKeys]?: PaperAttribute<State, WritableShape[K]>
}

type ShapeOptions<State, Action, Query, T, Sub> = MakeOptional<
  Merge<
    Merge<
      WritableShapeOptions<State>,
      Merge<{ definition: SymbolDefinition }, TempoAttributes<State, Action, Query, SymbolItem, T>>
    >,
    ItemEvents<State, Action, SymbolItem>
  >
>

export const shape = <State, Action, Query = unknown, T = unknown>(
  options: ShapeOptions<State, Action, Query, T, SymbolItem>
) =>
  createItem<
    State,
    Action,
    Query,
    SymbolItem,
    T,
    ShapeOptions<State, Action, Query, T, SymbolItem>
  >(
    (_: State) =>
      new SymbolItem(options.definition as SymbolDefinition),
    options
  )
