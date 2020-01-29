import { State, Content } from './state'
import { Action } from './action'
import { loading, success } from 'tempo-std/lib/async_result'
import { reduceOnKind } from 'tempo-store/lib/reducer'
import { HttpError } from './request'

export const reducer = reduceOnKind<State, Action>({
  GoTo: (state, action) => {
    const content =
      action.route.kind === 'Demos' &&
      state.toc.kind === 'Outcome' &&
      state.toc.value.kind === 'Success' ?
        success<Content, HttpError>(Content.demos(state.toc.value.value.demos)) :
        state.content
    return {
      ...state,
      route: action.route,
      content
    }
  },
  LoadedToc: (state, action) => ({
    ...state,
    toc: action.toc
  }),
  RequestToc: state => ({
    ...state,
    toc: loading(null)
  }),
  LoadedContent: (state, action) => ({
    ...state,
    content: action.content
  }),
  RequestPageContent: state => ({
    ...state,
    content: loading(null)
  })
})
