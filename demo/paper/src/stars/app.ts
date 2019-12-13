import { Point, Path, SymbolDefinition, PaperScope } from 'paper'
import { component } from 'tempo-paper/lib/component'
import { symbolItem } from 'tempo-paper/lib/symbol_item'
import { Store } from 'tempo-store/lib/store'
import { iterate } from 'tempo-paper/lib/iterate'
// import { pathStar } from 'tempo-paper/lib/path'

const getActiveProject = () => (window.paper as PaperScope).project

export interface State {
  size: Point
  stars: Point[]
}

export type Action = unknown

const reducer = (state: State, action: Action) => state

export const makeApp = () => {
  const stars = [] as Point[]
  for (let i = 0; i < 200; i++) {
    stars.push(new Point(Math.random(), Math.random()))
  }

  const state = {
    size: new Point(1, 1), // size capture as Point to simplify multiplication
    stars
  }
  const store = Store.ofState({ state, reducer })

  const star = new Path({
    segments: [new Point(-1, -1), new Point(-1, 1), new Point(1, 1), new Point(1, -1)],
    closed: true,
    insert: false,
    // points: 5,
    fillColor: 'red',
    project: getActiveProject()
  })

  const definition = new SymbolDefinition(star)

  return component(
    { store },
    // pathStar({
    //   args: { points: 5 },
    //   // segments: [new Point(-1, -1), new Point(-1, 1), new Point(1, 1), new Point(1, -1)].map(p => new Segment(p)),
    //   closed: true,
    //   // insert: false,
    //   fillColor: new Color(1, 0, 0)
    // }),
    iterate(
      { getArray: state => state.stars },
      symbolItem<[Point, State, number], unknown, unknown>({
        definition,
        position: ([p]) => p.multiply(state.size)
      })
    )
  )
}
