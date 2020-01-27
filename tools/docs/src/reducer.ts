import { State } from './state'
import { Action } from './action'
import { loading } from 'tempo-std/lib/async'
import { reduceOnKind } from 'tempo-store/lib/reducer'

export const reducer = reduceOnKind<State, Action>({
  GoTo: (state, action) => ({
    ...state,
    route: action.route
  }),
  LoadedToc: (state, action) => ({
    ...state,
    toc: action.toc
  }),
  RequestToc: state => ({
    ...state,
    toc: loading(null)
  }),
  LoadedPageContent: (state, action) => ({
    ...state,
    content: action.content
  }),
  RequestPageContent: state => ({
    ...state,
    content: loading(null)
  })
})
