import { Segment, Point } from 'paper'
import { Mode } from './state'

export type Action =
  | { kind: 'AddSegment'; segment: Segment }
  | { kind: 'AddPath' }
  | { kind: 'RemovePath' }
  | { kind: 'ChangeMode'; mode: Mode }
  | { kind: 'UpdatePosition'; delta: Point }

export const Action = {
  addSegment(segment: Segment): Action {
    return { kind: 'AddSegment', segment }
  },
  addPath: { kind: 'AddPath' } as Action,
  removePath: { kind: 'RemovePath' } as Action,
  selectPath(pathIndex: number): Action {
    return { kind: 'ChangeMode', mode: Mode.editing(pathIndex) }
  },
  draw: { kind: 'ChangeMode', mode: Mode.drawing } as Action,
  updatePosition(delta: Point): Action {
    return { kind: 'UpdatePosition', delta }
  }
}
