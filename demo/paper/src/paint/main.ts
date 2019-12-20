import { lazy } from 'tempo-paper/lib/lazy'
import { adapter } from 'tempo-paper/lib/adapter'
import { SampleState } from '../canvas_state'
import { CanvasAction } from '../canvas_action'
import { makeApp } from './app'
import { State } from './state'
import { Action } from './action'
import { resizeRaster } from './reducer'

export const template = lazy(() =>
  adapter<SampleState, State, CanvasAction, Action>(
    {
      mergeStates: (outer, inner): State => {
        let raster = undefined
        if (typeof inner.raster !== 'undefined' && typeof inner.image !== 'undefined') {
          raster = resizeRaster(inner.image, inner.raster, outer.size)
        }
        return { ...inner, raster, size: outer.size }
      }
    },
    makeApp()
  )
)
