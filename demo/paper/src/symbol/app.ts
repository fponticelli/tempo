import { Point, Path, SymbolDefinition, Size, Color } from 'paper'
import { component } from 'tempo-paper/lib/component'
import { rectangle } from 'tempo-paper/lib/shape'
import { symbolItem } from 'tempo-paper/lib/symbol_item'
import { Store } from 'tempo-store/lib/store'
import { iterate } from 'tempo-paper/lib/iterate'
import { layer } from 'tempo-paper/lib/layer'

export interface State {
  size: Size
  stars: { pos: Point; rotation: number }[]
}

export type Action = unknown

const reducer = (state: State, action: Action) => state

const count = 500

const stars = [] as { pos: Point; rotation: number }[]
for (let i = 0; i < count; i++) {
  stars.push({
    pos: new Point(Math.random() * 0.95 + 0.025, Math.random() * 0.95 + 0.025),
    rotation: Math.random() * 30 - 15
  })
}

const state = {
  size: new Size(0, 0),
  stars
}

const store = Store.ofState({ state, reducer })

export const makeApp = () => {
  const star = new Path.Star({
    insert: false,
    center: new Point(0, 0),
    radius1: 2.5,
    radius2: 6,
    points: 5,
    fillColor: new Color(1, 1, 0.4),
    strokeWidth: 0.5,
    strokeColor: new Color(0.8, 0.8, 0.8),
    shadowBlur: 0
  })

  const definition = new SymbolDefinition(star)

  return component(
    { store },
    rectangle({
      opacity: 0.0,
      size: state => state.size,
      fillColor: new Color(0.11, 0.1, 0.15),
      position: state =>
        new Point(state.size.width! / 2, state.size.height! / 2),
      afterrender: (_, shape) => {
        shape.onFrame = () => {
          if (shape.opacity! < 1) {
            shape.opacity = shape.opacity! + 0.04
          } else {
            shape.opacity = 1
            if (star.shadowBlur! < 20) {
              star.shadowColor = new Color(1, 1, 0.9)
              star.shadowBlur = star.shadowBlur! + 1
              star.shadowOffset = new Point(0, 0)
            } else {
              shape.onFrame = null
            }
          }
        }
      }
    }),
    layer({
      fillColor: new Color(1, 0, 0)
    }),
    iterate(
      { getArray: state => state.stars },
      symbolItem<
        [{ pos: Point; rotation: number }, State, number],
        unknown,
        unknown
      >({
        definition,
        rotation: ([p]) => p.rotation,
        position: ([p, state]) => {
          const point = p.pos.clone()
          point.x = point.x! * state.size.width!
          point.y = point.y! * state.size.height!
          return point
        }
      })
    )
  )
}
