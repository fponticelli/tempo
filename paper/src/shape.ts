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

type ShapeOptions<State, Action, Query, T> = MakeOptional<
  Merge<
    Merge<
      WritableShapeOptions<State>,
      TempoAttributes<State, Action, Query, Shape, T>
    >,
    ItemEvents<State, Action, Shape>
  >
>

export const circle = <State, Action, Query = unknown, T = unknown>(
  options: ShapeOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Shape,
    T,
    ShapeOptions<State, Action, Query, T>
  >((_: State) => new Shape.Circle(new Point(0, 0), 0), options)

export const rectangle = <State, Action, Query = unknown, T = unknown>(
  options: ShapeOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Shape,
    T,
    ShapeOptions<State, Action, Query, T>
  >(
    (_: State) => new Shape.Rectangle(new Point(0, 0), new Point(0, 0)),
    options
  )

export const ellipse = <State, Action, Query = unknown, T = unknown>(
  options: ShapeOptions<State, Action, Query, T>
) =>
  createItem<
    State,
    Action,
    Query,
    Shape,
    T,
    ShapeOptions<State, Action, Query, T>
  >(
    (_: State) =>
      new Shape.Ellipse({
        center: new Point(0, 0),
        size: new Size(0, 0)
      }),
    options
  )
