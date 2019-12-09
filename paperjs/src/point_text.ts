import { PointText, Point } from 'paper'
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
  RemoveNullableFromFields<WritableFields<PointText>>
>

type WritableShapeOptionKeys = keyof WritableShape

type WritableShapeOptions<State> = {
  [K in WritableShapeOptionKeys]?: PaperAttribute<State, WritableShape[K]>
}

type ShapeOptions<State, Action, Query, T, Sub> = MakeOptional<
  Merge<
    Merge<
      WritableShapeOptions<State>,
      TempoAttributes<State, Action, Query, PointText, T>
    >,
    ItemEvents<State, Action, PointText>
  >
>

export const shape = <State, Action, Query = unknown, T = unknown>(
  options: ShapeOptions<State, Action, Query, T, PointText>
) =>
  createItem<
    State,
    Action,
    Query,
    PointText,
    T,
    ShapeOptions<State, Action, Query, T, PointText>
  >(
    (_: State) =>
      new PointText(new Point(0, 0)),
    options
  )
