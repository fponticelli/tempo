import { Action } from './action'
import { State } from './state'
import { reduceOnKind } from 'tempo-store/lib/reducer'

export const reducer = reduceOnKind<State, Action>({
  ChangeUrl: (state, action) => {
    return {
      ...state,
      url: action.url
    }
  },
  LoadUrl: (state, action) => {
    return {
      ...state,
      message: `loading ${state.url}`
    }
  },
  ImageLoaded: (state, action) => {
    switch (action.result.kind) {
      case 'failure':
        return {
          ...state,
          message: action.result.message
        }
      case 'success':
        return {
          ...state,
          message: '',
          raster: action.result.value
        }
      default:
        throw 'unreacheable'
    }
  }
})
