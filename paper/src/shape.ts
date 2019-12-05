import { Shape, Point } from 'paper'
import { PaperAttribute } from './value'
import { WritableFields, ExcludeFunctionFields, RemoveNullableFromFields, Merge, MakeOptional } from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'

type WritableShape = ExcludeFunctionFields<RemoveNullableFromFields<WritableFields<Shape>>>

type WritableShapeOptionKeys = keyof WritableShape

type WritableShapeOptions<State> = {
  [K in WritableShapeOptionKeys]?: PaperAttribute<State, WritableShape[K]>
}

type ShapeOptions<State, Action, T> =
  MakeOptional<
    Merge<
      Merge<
        WritableShapeOptions<State>,
        TempoAttributes<State, Action, T, Shape>
      >,
      ItemEvents<State, Action, Shape>
    >
  >

export const circle = <State, Action, T = unknown>(options: ShapeOptions<State, Action, T>) =>
  createItem<State, Action, T, Shape, ShapeOptions<State, Action, T>>(
    (_: State) => new Shape.Circle(new Point(0, 0), 0),
    options
  )

export const rectangle = <State, Action, T = unknown>(options: ShapeOptions<State, Action, T>) =>
  createItem<State, Action, T, Shape, ShapeOptions<State, Action, T>>(
    (_: State) => new Shape.Rectangle(new Point(0, 0), new Point(0, 0)),
    options
  )

export const ellipse = <State, Action, T = unknown>(options: ShapeOptions<State, Action, T>) =>
  createItem<State, Action, T, Shape, ShapeOptions<State, Action, T>>(
    (_: State) => new Shape.Ellipse(new Point(0, 0), new Size(0, 0)),
    options
  )
