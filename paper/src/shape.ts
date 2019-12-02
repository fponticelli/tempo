import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { DynamicView } from 'tempo-core/lib/view'
import { keys } from 'tempo-core/lib/util/objects'
import { Shape, Point, Color } from 'paper'
import { PaperAttribute } from './value'
import { UnwrappedDerivedValue } from 'tempo-core/lib/value'

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
    shape.fillColor = Color.random()
    ctx.append(shape)
    console.log(shape, shape.fillColor, shape.position, shape.radius)
    return new ShapeDynamicView(
      shape,
      this.changeShape
    )
  }
}

type SecondArgument<F> = F extends (_: any, arg: infer V) => any ? V : never

const circleSetters = {
  'radius': <State>(shape: Shape, value: number) => shape.radius = value,
  'cx': <State>(shape: Shape, value: number) => shape.position!.x = value,
  'cy': <State>(shape: Shape, value: number) => shape.position!.y = value
}

export type CircleOptions<State> = {
  [k in keyof typeof circleSetters]: PaperAttribute<State, SecondArgument<typeof circleSetters[k]>>
}

export const circle = <State, Action>(options: CircleOptions<State>) => {
  const setters = keys(options).map(k => {
    const setter = circleSetters[k]
    const attr = options[k]
    if (typeof attr === 'function') {
      const attrf = attr as UnwrappedDerivedValue<State, any>
      return {
        kind: 'dynamic',
        f: (state: State, shape: Shape) => setter(shape, attrf(state))
      }
    } else {
      const attr = options[k] as SecondArgument<typeof circleSetters[typeof k]>
      return {
        kind: 'static',
        f: (state: State, shape: Shape) => setter(shape, attr)
      }
    }
  })
  const dynamics = setters.filter(setter => setter.kind === 'dynamic').map(setter => setter.f)
  return new ShapeTemplate<State, Action>(
    (state: State) => {
      const shape = new Shape.Circle(new Point(0, 0), 0)
      setters.forEach(setter => setter.f(state, shape))
      return shape
    },
    dynamics.length > 0 ?
      (state: State, shape: Shape) => {
        dynamics.forEach(dyna => dyna(state, shape))
      } :
      (_1: State, _2: Shape) => {}
  )
}
