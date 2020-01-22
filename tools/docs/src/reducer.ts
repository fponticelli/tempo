import { State } from './state'
import { Action } from './action'
import { loading } from 'tempo-std/lib/async'

export const reducer = (state: State, action: Action): State => {
  switch (action.kind) {
    case 'RequestToc':
      return {
        ...state,
        toc: loading(null)
      }
    case 'LoadedToc':
      return {
        ...state,
        toc: action.toc
      }
  }
}
