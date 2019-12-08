import { Raster } from 'paper'
import { PaperAttribute, PaperEventHandler } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge,
  MakeOptional
} from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'

export interface RasterSpecificEvents<State, Action, El> {
  onLoad: PaperEventHandler<State, Action, null, El>
  onError: PaperEventHandler<State, Action, null, El>
}

type WritableRaster = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Raster>>
>

type WritableRasterOptionKeys = keyof WritableRaster

type WritableRasterOptions<State> = {
  [K in WritableRasterOptionKeys]?: PaperAttribute<State, WritableRaster[K]>
}

type RasterOptions<State, Action, Query, T> = MakeOptional<
  Merge<
    { args?: {} },
    Merge<
      Merge<
        WritableRasterOptions<State>,
        TempoAttributes<State, Action, Query, Raster, T>
      >,
      Merge<
        ItemEvents<State, Action, Raster>,
        RasterSpecificEvents<State, Action, Raster>
      >
    >
  >
>

export const raster = <State, Action, Query = unknown, T = unknown>(
  options: RasterOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Raster,
    T,
    RasterOptions<State, Action, Query, T>
  >((_: State) =>
    typeof options.args ?
      new Raster(options.args as any) :
      new Raster(),
      options
    )
