import { Point, Segment } from 'paper'

export type Mode =
  | { kind: 'idle' }
  | { kind: 'drawing' }
  | { kind: 'editing', pathIndex: number }

export const Mode = {
  idle: { kind: 'idle' } as Mode,
  drawing: { kind: 'drawing' } as Mode,
  editing(pathIndex: number): Mode { return { kind: 'editing', pathIndex } }
}

export interface PathItem {
  segments: Segment[]
  position: Point
}

export const state = {
  paths: [] as PathItem[],
  current: [] as Segment[],
  mode: Mode.idle
}

export type State = typeof state
