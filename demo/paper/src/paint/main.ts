import { lazy } from 'tempo-paper/lib/lazy'
import { adapter } from 'tempo-paper/lib/adapter'
import { SampleState } from '../canvas_state'
import { CanvasAction } from '../canvas_action'
import { makeApp } from './app'
import { State } from './state'
import { Action } from './action'

export const template = lazy(() =>
  adapter<SampleState, State, CanvasAction, Action>(
    {
      mergeStates: (outer, inner): State => {
        return { ...inner, size: outer.size }
      }
    },
    makeApp()
  )
)
