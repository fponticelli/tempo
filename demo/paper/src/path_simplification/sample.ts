import { layer } from 'tempo-paper/lib/layer'
import { adapter } from 'tempo-paper/lib/adapter'
import { component } from 'tempo-paper/lib/component'
import { iterate } from 'tempo-paper/lib/iterate'
import { path } from 'tempo-paper/lib/path'
import { CanvasState } from '../state'
import { View, Segment, MouseEvent, Color, Path, Project } from 'paper'
import { Store } from 'tempo-store/lib/store'
import { reduceOnKind } from 'tempo-store/lib/reducer'

const state = {
  paths: [] as Segment[][],
  current: [] as Segment[]
}

let project: Project

type State = typeof state
type Action = {
  kind: 'AddSegment'
  segment: Segment
} | {
  kind: 'AddPath'
}

const Action = {
  addSegment(segment: Segment): Action {
    return { kind: 'AddSegment', segment }
  },
  addPath: { kind: 'AddPath' } as Action
}

const reducer = reduceOnKind<State, Action>({
  AddSegment: (state, action) => {
    const current = state.current.concat([action.segment])
    return {
      ...state,
      current
    }
  },
  AddPath: (state) => {
    const path = new Path({
      segments: state.current.slice(0),
      insert: false,
      project
    })
    path.simplify(10)
    const segments = path.segments!
    path.remove()
    return {
      ...state,
      paths: state.paths.concat([segments]),
      current: []
    }
  }
})

const store = Store.ofState<State, Action>({
  state, reducer
})

store.observable.on((state, action) => {
  // console.log(state)
})

export const template =
  adapter<CanvasState, State, unknown, Action>(
    {},
    component<State, Action, unknown>(
      { store },
      layer<State, Action, unknown, View>(
        {
          afterrender: (state, el, ctx) => {
            project = ctx.project // TODO dirty hack to remove
            const view = ctx.project.view
            view.onMouseDown = () => {
            }
            view.onMouseUp = () => {
              store.process(Action.addPath)
            }
            view.onMouseDrag = (event: MouseEvent) => {
              const segment = new Segment(event.point!)
              store.process(Action.addSegment(segment))
            }
            return view
          },
          beforedestroy: (el, ctx, view) => {
            if (view) {
              view.onMouseDown = null
              view.onMouseUp = null
              view.onMouseDrag = null
            }
          }
        },
        path(
          {
            segments: state => state.current,
            selected: true
          }
        ),
        iterate(
          { getArray: (state: State) => state.paths },
          path<[Segment[], State, number], Action>(
            {
              segments: ([segments]) => segments,
              strokeWidth: 2,
              strokeColor: new Color(0.75, 0.75, 0.75),
              selected: ([_, state, index]) => state.paths.length - 1 === index
            }
          )
        )
      )
    )
  )
