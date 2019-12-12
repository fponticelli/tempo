import { adapter } from 'tempo-paper/lib/adapter'
import { CanvasState } from '../state'
import { state, State } from './state'
import { reducer } from './reducer'
import { Store } from 'tempo-store/lib/store'
import { Action } from './action'
import { makeApp } from './app'

const store = Store.ofState<State, Action>({
  state, reducer
})

export const template =
  adapter<CanvasState, State, unknown, Action>(
    {},
    makeApp(store)
  )
