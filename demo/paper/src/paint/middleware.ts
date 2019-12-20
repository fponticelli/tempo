import { State } from './state'
import { Action } from './action'
import { Store } from 'tempo-store/lib/store'

export const middleware = (store: Store<State, Action>) => (
  state: State,
  action: Action
) => {
  switch (action.kind) {
    case 'LoadUrl':
      const image = new Image()
      image.crossOrigin = "Anonymous"
      image.onerror = () => {
        store.process(Action.imageFailed(`Failed to load ${state.url}`))
      }
      image.onload = () => {
        store.process(Action.imageLoaded(image))
      }
      image.src = state.url
      break
    default:
    // do nothing
  }
}
