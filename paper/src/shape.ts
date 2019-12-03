import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { DynamicView } from 'tempo-core/lib/view'
import { keys } from 'tempo-core/lib/util/objects'
import { Shape, Point, Color } from 'paper'
import { PaperAttribute } from './value'
import { UnwrappedDerivedValue } from 'tempo-core/lib/value'
import { WritableFields, ExcludeFunctionFields, RemoveNullableFromFields } from 'tempo-core/lib/types/objects'

export class ShapeDynamicView<State> implements DynamicView<State> {
  readonly kind = 'dynamic'

  constructor(
    readonly shape: Shape,
    readonly changeShape: (state: State, shape: Shape) => void
  ) {}

  change(state: State) {
    this.changeShape(state, this.shape)
  }

  destroy() {
    this.shape.remove()
  }
}

export class ShapeTemplate<State, Action> implements PaperTemplate<State, Action> {
  constructor(
    readonly createShape: (state: State) => Shape,
    readonly changeShape: (state: State, shape: Shape) => void
  ) {}
  render(ctx: PaperContext<Action>, state: State) {
    const shape = this.createShape(state)
    shape.fillColor = Color.random() // TODO
    shape.strokeColor = Color.random() // TODO
    shape.strokeWidth = 2 // TODO
    ctx.append(shape)
    return new ShapeDynamicView(
      shape,
      this.changeShape
    )
  }
}

type WritableShape = ExcludeFunctionFields<RemoveNullableFromFields<WritableFields<Shape>>>

type ShapeOptions<State> = {
  [k in keyof WritableShape]?: PaperAttribute<State, WritableShape[k]>
}

const shape = <State, Action>(
  makeShape: (state: State) => Shape,
  options: ShapeOptions<State>
) => {
  const setters = keys(options).map(k => {
    const attr = options[k]
    if (typeof attr === 'function') {
      const attrf = attr as UnwrappedDerivedValue<State, any>
      return {
        kind: 'dynamic',
        f: (state: State, shape: Shape) => shape[k] = attrf(state)
      }
    } else {
      return {
        kind: 'static',
        f: (state: State, shape: Shape) => shape[k] = attr as any
      }
    }
  })
  const dynamics = setters.filter(setter => setter.kind === 'dynamic').map(setter => setter.f)
  const make = (state: State) => {
    const shape = makeShape(state)
    setters.forEach(setter => setter.f(state, shape))
    return shape
  }
  return new ShapeTemplate<State, Action>(
    make,
    dynamics.length > 0 ?
      (state: State, shape: Shape) => {
        dynamics.forEach(dyna => dyna(state, shape))
      } :
      (_1: State, _2: Shape) => {}
  )
}

export const circle = <State, Action>(options: ShapeOptions<State>) => {
  return shape<State, Action>(
    (state: State) => new Shape.Circle(new Point(0, 0), 0),
    options
  )
}

export const rectangle = <State, Action>(options: ShapeOptions<State>) => {
  return shape<State, Action>(
    (state: State) => new Shape.Rectangle(new Point(0, 0), new Point(0, 0)),
    options
  )
}

export const ellipse = <State, Action>(options: ShapeOptions<State>) => {
  return shape<State, Action>(
    (state: State) => new Shape.Ellipse(new Point(0, 0)),
    options
  )
}
