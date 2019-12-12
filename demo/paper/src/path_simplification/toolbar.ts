import { span } from 'tempo-dom/lib/html'
import { State } from './state'
import { Action } from './action'
import { match,  } from 'tempo-dom/lib/match'

export const toolbar = span<State, Action, unknown>(
  {},
  match<['mode', 'kind'], State, Action>(
    ['mode', 'kind'],
    {
      idle: state => state.paths.length > 0 ? 'Click to select a line or click and drag to draw' : 'Click and drop to draw a line',
      editing: state => `Selected line has ${state.paths[state.mode.pathIndex].segments.length} segments`,
      drawing: state => `Line has ${state.current.length} segments`
    }
  )
)
