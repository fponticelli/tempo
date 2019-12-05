import { Layer, Size } from 'paper'
import { PaperAttribute } from './value'
import { WritableFields, ExcludeFunctionFields, RemoveNullableFromFields, Merge, MakeOptional } from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'
import { PaperTemplate } from './template'

type WritableLayer = ExcludeFunctionFields<RemoveNullableFromFields<WritableFields<Layer>>>

type WritableLayerOptionKeys = keyof WritableLayer

type WritableLayerOptions<State> = {
  [K in WritableLayerOptionKeys]?: PaperAttribute<State, WritableLayer[K]>
}

type LayerOptions<State, Action, T> =
  MakeOptional<
    Merge<
      Merge<
        WritableLayerOptions<State>,
        TempoAttributes<State, Action, T, Layer>
      >,
      ItemEvents<State, Action, Layer>
    >
  >

export const layer = <State, Action, T = unknown>(
  options: LayerOptions<State, Action, T>,
  ...children: PaperTemplate<State, Action>[]
) =>
  createItem<State, Action, T, Layer, LayerOptions<State, Action, T>>(
    (_: State) => new Layer(new Size(0, 0)),
    options,
    children
  )
