import { Path, PaperScope, Matrix } from 'paper'
import { reduceOnKind } from 'tempo-store/lib/reducer'
import { State, Mode } from './state'
import { Action } from './action'

const getActiveProject = () => (window.paper as PaperScope).project

export const reducer = reduceOnKind<State, Action>({
  AddSegment: (state, action) => {
    const current = state.current.concat([action.segment])
    return { ...state, current }
  },
  AddPath: (state) => {
    if (state.current.length <= 1)
      return state
    const path = new Path({
      segments: state.current,
      insert: false,
      project: getActiveProject(),
      applyMatrix: false
    })
    path.simplify(10)
    const paths = state.paths.concat([{
      segments: path.segments!.map(seg => {
        const newSeg = seg.clone()
        newSeg.transform(new Matrix(1, 0, 0, 1, -path.position!.x!, -path.position!.y!))
        return  newSeg
      }),
      position: path.position!
    }])
    path.remove()
    return { ...state, paths, current: [], mode: Mode.editing(paths.length - 1) }
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
      const paths = state.paths.slice(0, state.mode.pathIndex).concat([item]).concat(state.paths.slice(state.mode.pathIndex + 1))
      return { ...state, paths }
    } else {
      return state
    }
  }
})
