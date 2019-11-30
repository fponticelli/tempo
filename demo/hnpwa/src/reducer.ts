import { Action } from './action'
import { State, Page } from './state'
import { reduceOnKind } from '@tempo/store/lib/reducer'

export const reducer = reduceOnKind<State, Action>({
  LinkClicked: (state, action) => {
    return {
      ...state,
      route: action.route,
      page: action.route.kind === 'ExternalRoute' ? state.page : Page.loading
    }
  },
  UrlChanged: (state, action) => {
    if (state.route.kind === 'NotFoundRoute') {
      return {
        ...state,
        page: Page.notFound
      }
    } else {
      return state
    }
  },
  GotItem: (state, action) => ({
    ...state,
    page: action.result.match(Page.article, Page.error)
  }),
  GotFeed: (state, action) => ({
    ...state,
    page: action.result.match(
      items => {
        const page = (state.route.kind === 'FeedsRoute') ? state.route.page : 1
        return Page.feed(action.feed, page, items)
      },
      Page.error
    )
  }),
  GotUser: (state, action) => ({
    ...state,
    page: action.result.match(Page.profile, Page.error)
  })
})
