import { Raster, Size } from 'paper'
import { PaperAttribute, PaperEventHandler } from './value'
import { WritableFields, ExcludeFunctionFields, RemoveNullableFromFields, Merge, MakeOptional } from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'

export interface RasterSpecificEvents<State, Action, El> {
  onLoad: PaperEventHandler<State, Action, null, El>
  onError: PaperEventHandler<State, Action, null, El>
}

type WritableRaster = ExcludeFunctionFields<RemoveNullableFromFields<WritableFields<Raster>>>

type WritableRasterOptionKeys = keyof WritableRaster

type WritableRasterOptions<State> = {
  [K in WritableRasterOptionKeys]?: PaperAttribute<State, WritableRaster[K]>
}

type RasterOptions<State, Action, T> =
  MakeOptional<
    Merge<
      Merge<
        WritableRasterOptions<State>,
        TempoAttributes<State, Action, T, Raster>
      >,
      Merge<
        ItemEvents<State, Action, Raster>,
        RasterSpecificEvents<State, Action, Raster>
      >
    >
  >

export const raster = <State, Action, T = unknown>(options: RasterOptions<State, Action, T>) =>
  createItem<State, Action, T, Raster, RasterOptions<State, Action, T>>(
    (_: State) => new Raster(new Size(0, 0)),
    options
  )
