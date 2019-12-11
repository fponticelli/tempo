import { adapter } from 'tempo-paper/lib/adapter'
import { component } from 'tempo-paper/lib/component'
import { iterate } from 'tempo-paper/lib/iterate'
import { path } from 'tempo-paper/lib/path'
import { tool } from 'tempo-paper/lib/tool'
import { CanvasState } from '../state'
import { Segment, MouseEvent, Color, Path, View, PaperScope, Project, Tool, Point } from 'paper'
import { Store } from 'tempo-store/lib/store'
import { reduceOnKind } from 'tempo-store/lib/reducer'
import { matchKind } from 'tempo-core/lib/util/match'

type Mode =
  | { kind: 'idle' }
  | { kind: 'drawing' }
  | { kind: 'editing', pathIndex: number }

const Mode = {
  idle: { kind: 'idle' } as Mode,
  drawing: { kind: 'drawing' } as Mode,
  editing(pathIndex: number): Mode { return { kind: 'editing', pathIndex } }
}

interface PathItem {
  segments: Segment[]
  position: Point
}

const state = {
  paths: [] as PathItem[],
  current: [] as Segment[],
  mode: Mode.idle
}

type State = typeof state
type Action =
  | { kind: 'AddSegment', segment: Segment }
  | { kind: 'AddPath' }
  | { kind: 'ChangeMode', mode: Mode }
  | { kind: 'UpdatePosition', delta: Point }

const Action = {
  addSegment(segment: Segment): Action {
    return { kind: 'AddSegment', segment }
  },
  addPath: { kind: 'AddPath' } as Action,
  selectPath(pathIndex: number): Action {
    return { kind: 'ChangeMode', mode: Mode.editing(pathIndex) }
  },
  unselect: { kind: 'ChangeMode', mode: Mode.idle } as Action,
  draw: { kind: 'ChangeMode', mode: Mode.drawing } as Action,
  updatePosition(delta: Point): Action {
    return { kind: 'UpdatePosition', delta }
  }
}

const getActiveProject = () => (window.paper as PaperScope).project

const reducer = reduceOnKind<State, Action>({
  AddSegment: (state, action) => {
    const current = state.current.concat([action.segment])
    return { ...state, current }
  },
  AddPath: (state) => {
    const path = new Path({
      segments: state.current.slice(0),
      insert: false,
      project: getActiveProject()
    })
    path.simplify(10)
    const paths = state.paths.concat([{
      segments: path.segments!,
      position: new Point(0, 0)
    }])
    path.remove()
    return { ...state, paths, current: [], mode: Mode.idle }
  },
  ChangeMode: (state, action) => {
    return {
      ...state,
      mode: action.mode
    }
  },
  UpdatePosition: (state, action) => {
    if (state.mode.kind === 'editing') {
      const old = state.paths[state.mode.pathIndex]
      const item = {
        ...old,
        position: old.position.add(action.delta)
      }
      // console.log(old.position, item.position, action.delta)
      const paths = state.paths.slice(0, state.mode.pathIndex).concat([item]).concat(state.paths.slice(state.mode.pathIndex + 1))
      return { ...state, paths }
    } else {
      return state
    }
  }
})

const store = Store.ofState<State, Action>({
  state, reducer
})

export const template =
  adapter<CanvasState, State, unknown, Action>(
    {},
    component<State, Action, unknown>(
      { store },
      tool<State, Action, unknown, View>({
        active: ({ mode }) => mode.kind === 'idle',
        onMouseDown: (_1: State, event: MouseEvent, _3: Tool, project: Project) => {
          const target = project.hitTest(event.point!, { stroke: true, tolerance: 5 })
          if (target) {
            return Action.selectPath(target.item!.index)
          } else {
            return Action.draw
          }
        }
      }),
      tool<State, Action, unknown, View>({
        active: ({ mode }) => mode.kind === 'editing',
        onMouseDown: (_1: State, event: MouseEvent, _3: Tool, project: Project) => {
          const target = project.hitTest(event.point!, { stroke: true, tolerance: 5 })
          if (target) {
            return Action.selectPath(target.item!.index)
          } else {
            return Action.unselect
          }
        },
        onMouseDrag: (_, event: MouseEvent) => Action.updatePosition(event.delta!)
      }),
      tool<State, Action, unknown, View>({
        active: ({ mode }) => mode.kind === 'drawing',
        onMouseUp: () => Action.addPath,
        onMouseDrag: (_, event: MouseEvent) => Action.addSegment(new Segment(event.point!))
      }),
      path({
        segments: state => state.current,
        selected: true
      }),
      iterate(
        { getArray: state => state.paths },
        path<[PathItem, State, number], Action>(
          {
            // position: new Point(200, 0),
            // pivot: ([item]) => {
            //   console.log(item.position)
            //   return new Point(0, 0) // item.position
            // },
            position: ([item]) => {
              console.log(item.position)
              return item.position
            },
            rotation: ([item]) => item.position.x!,
            segments: ([item]) => item.segments,
            strokeWidth: 2,
            strokeColor: new Color(0.75, 0.75, 0.75),
            selected: ([current, state, index]) => matchKind<Mode, boolean>({
              drawing: () => false,
              editing: ({ pathIndex }) => pathIndex === index,
              idle: () => false
            })(state.mode)
          }
        )
      )
    )
  )
