import { State } from './state'
import { Action } from './action'
import { Store } from 'tempo-store/lib/store'

export const middleware = (store: Store<State, Action>) => (
  state: State,
  action: Action
) => {
  switch (action.kind) {
    case 'LoadUrl':
      const raster = new Image()
      raster.onerror = () => {
        store.process(Action.imageFailed(`Failed to load ${state.url}`))
      }
      raster.onload = () => {
        store.process(Action.imageLoaded(raster))
      }
      raster.src = state.url
      break
  }
}
