import { Layer } from 'paper'
import { PaperAttribute } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge
} from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'
import { PaperTemplate } from './template'

type WritableLayer = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Layer>>
>

type WritableLayerOptionKeys = keyof WritableLayer

type WritableLayerOptions<State> = {
  [K in WritableLayerOptionKeys]?: PaperAttribute<State, WritableLayer[K]>
}

type LayerOptions<State, Action, Query, T> = Partial<
  Merge<
    { args?: {} },
    Merge<
      Merge<
        WritableLayerOptions<State>,
        TempoAttributes<State, Action, Query, Layer, T>
      >,
      ItemEvents<State, Action, Layer>
    >
  >
>

export const layer = <State, Action, Query = unknown, T = unknown>(
  options: LayerOptions<State, Action, Query, T>,
  ...children: PaperTemplate<State, Action, Query>[]
) =>
  createItem<
    State,
    Action,
    Query,
    Layer,
    T,
    LayerOptions<State, Action, Query, T>
  >(
    (_: State) =>
      typeof options.args !== 'undefined'
        ? new Layer(options.args)
        : new Layer([]),
    options,
    children
  )
