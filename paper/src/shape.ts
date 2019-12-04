import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { DynamicView } from 'tempo-core/lib/view'
import { keys, removeFields } from 'tempo-core/lib/util/objects'
import { Shape, Point, Color, Item } from 'paper'
import { PaperAttribute } from './value'
import { UnwrappedDerivedValue } from 'tempo-core/lib/value'
import { WritableFields, ExcludeFunctionFields, RemoveNullableFromFields } from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'

export class ShapeDynamicView<State, Action, T> implements DynamicView<State> {
  readonly kind = 'dynamic'

  constructor(
    readonly change: (state: State) => void,
    readonly destroy: () => void
  ) {}
}

export class ShapeTemplate<State, Action, T> implements PaperTemplate<State, Action> {
  constructor(
    readonly createShape: (wrapper: { value: T | undefined }, ctx: PaperContext<Action>) => (state: State) => Shape,
    readonly changeShape: (wrapper: { value: T | undefined }, ctx: PaperContext<Action>, shape: Shape) => (state: State) => void,
    readonly destroy: (wrapper: { value: T | undefined }, ctx: PaperContext<Action>, shape: Shape) => () => void
  ) {}
  render(ctx: PaperContext<Action>, state: State) {
    const wrapper = { value: undefined }
    const shape = this.createShape(wrapper, ctx)(state)
    shape.fillColor = Color.random() // TODO
    shape.strokeColor = Color.random() // TODO
    shape.strokeWidth = 2 // TODO
    ctx.append(shape)
    return new ShapeDynamicView(
      this.changeShape(wrapper, ctx, shape),
      this.destroy(wrapper, ctx, shape)
    )
  }
}

type WritableShape = ExcludeFunctionFields<RemoveNullableFromFields<WritableFields<Shape>>>

type ShapeOptionKeys<State, Action, T, El extends Item> = keyof WritableShape | keyof TempoAttributes<State, Action, T, El>

type ShapeOptions<State, Action, T> = {
  [k in ShapeOptionKeys<State, Action, T, Shape>]?:
    k extends keyof WritableShape ?
    PaperAttribute<State, WritableShape[k]> :
      k extends keyof TempoAttributes<State, Action, T, Shape> ?
        TempoAttributes<State, Action, T, Shape>[k] : never
}

const shape = <State, Action, T>(
  makeShape: (state: State) => Shape,
  options: ShapeOptions<State, Action, T>
) => {
  const { afterchange, afterrender, beforechange, beforedestroy } = options
  console.log(beforedestroy)
  const attributes = removeFields(options, 'afterchange', 'afterrender', 'beforechange', 'beforedestroy')
  const setters = keys(attributes).map(k => {
    const attr = attributes[k]
    if (typeof attr === 'function') {
      const attrf = attr as UnwrappedDerivedValue<State, any>
      return {
        kind: 'dynamic',
        f: (state: State, shape: Shape) => shape[k] = attrf(state)
      }
    } else {
      return {
        kind: 'static',
        f: (_: State, shape: Shape) => shape[k] = attr as any
      }
    }
  })
  const dynamics = setters.filter(setter => setter.kind === 'dynamic').map(setter => setter.f)
  const make = (wrapper: { value: T | undefined }, ctx: PaperContext<Action>) => (state: State): Shape => {
    const shape = makeShape(state)
    setters.forEach(setter => setter.f(state, shape))
    if (afterrender) {
      wrapper.value = afterrender(state, shape, ctx)
    }
    return shape
  }
  return new ShapeTemplate<State, Action, T>(
    make,
    dynamics.length > 0 ?
      (wrapper: { value: T | undefined }, ctx: PaperContext<Action>, shape: Shape) => (state: State): void => {
        if (beforechange) {
          wrapper.value = beforechange(state, shape, ctx, wrapper.value)
        }
        dynamics.forEach(dyna => dyna(state, shape))
        if (afterchange) {
          wrapper.value = afterchange(state, shape, ctx, wrapper.value)
        }
      } :
      (wrapper: { value: T | undefined }, ctx: PaperContext<Action>, shape: Shape) => (state: State): void => {},
    (wrapper: { value: T | undefined }, ctx: PaperContext<Action>, shape: Shape) => () => {
      if (beforedestroy) {
        beforedestroy(shape, ctx, wrapper.value)
      }
      shape.remove()
    }
  )
}

export const circle = <State, Action, T = unknown>(options: ShapeOptions<State, Action, T>) => {
  return shape<State, Action, T>(
    (_: State) => new Shape.Circle(new Point(0, 0), 0),
    options
  )
}

export const rectangle = <State, Action, T = unknown>(options: ShapeOptions<State, Action, T>) => {
  return shape<State, Action, T>(
    (_: State) => new Shape.Rectangle(new Point(0, 0), new Point(0, 0)),
    options
  )
}

export const ellipse = <State, Action, T = unknown>(options: ShapeOptions<State, Action, T>) => {
  return shape<State, Action, T>(
    (_: State) => new Shape.Ellipse(new Point(0, 0)),
    options
  )
}
