import { Shape, Point, Size } from 'paper'
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
  RemoveNullableFromFields<WritableFields<Shape>>
>

type WritableShapeOptionKeys = keyof WritableShape

type WritableShapeOptions<State> = {
  [K in WritableShapeOptionKeys]?: PaperAttribute<State, WritableShape[K]>
}

type ShapeOptions<State, Action, Query, T, Sub> = MakeOptional<
  Merge<
    Merge<
      WritableShapeOptions<State>,
      Merge<{ args?: {} }, TempoAttributes<State, Action, Query, Shape, T>>
    >,
    ItemEvents<State, Action, Shape>
  >
>

export const circle = <State, Action, Query = unknown, T = unknown>(
  options: ShapeOptions<State, Action, Query, T, Shape.Circle>
) =>
  createItem<
    State,
    Action,
    Query,
    Shape,
    T,
    ShapeOptions<State, Action, Query, T, Shape.Circle>
  >(
    (_: State) =>
      typeof options.args !== 'undefined'
        ? new Shape.Circle(options.args)
        : new Shape.Circle(new Point(0, 0), 0),
    options
  )

export const rectangle = <State, Action, Query = unknown, T = unknown>(
  options: ShapeOptions<State, Action, Query, T, Shape.Rectangle>
) =>
  createItem<
    State,
    Action,
    Query,
    Shape,
    T,
    ShapeOptions<State, Action, Query, T, Shape.Rectangle>
  >(
    (_: State) =>
      typeof options.args !== 'undefined'
        ? new Shape.Rectangle(options.args)
        : new Shape.Rectangle(new Point(0, 0), new Point(0, 0)),
    options
  )

export const ellipse = <State, Action, Query = unknown, T = unknown>(
  options: ShapeOptions<State, Action, Query, T, Shape.Ellipse>
) =>
  createItem<
    State,
    Action,
    Query,
    Shape,
    T,
    ShapeOptions<State, Action, Query, T, Shape.Ellipse>
  >(
    (_: State) =>
      typeof options.args !== 'undefined'
        ? new Shape.Ellipse(options.args)
        : new Shape.Ellipse({
            center: new Point(0, 0),
            size: new Size(0, 0)
          }),
    options
  )
