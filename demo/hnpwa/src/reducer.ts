import { Action } from './action'
import { State, article, error, profile, pageFeed } from './state'
import { Route, Feed } from './route'
import { match } from './result'

// type Load result cmd
//     = View result
//     | Request cmd

// export interface View<Result> {
//   readonly kind: 'view'
//   readonly result: Result
// }

// export interface Request<Cmd> {
//   readonly kind: 'request'
//   readonly cmd: Cmd
// }

// export type Load<Result, Cmd> = View<Result> | Request<Cmd>

// update msg ({ cache } as model) =
//     case msg of
//         LinkClicked (Browser.Internal url) ->
//             ( model, Navigation.pushUrl model.key (Url.toString url) )

//         LinkClicked (Browser.External href) ->
//             ( model, Navigation.load href )

//         UrlChanged url ->
//             check { model | route = Route.fromUrl url }

//         GotItem id item ->
//             check { model | cache = { cache | items = Dict.insert id item cache.items } }

//         GotUser id user ->
//             check { model | cache = { cache | users = Dict.insert id user cache.users } }

//         GotFeed id feed ->
//             check { model | cache = { cache | feeds = Dict.insert id feed cache.feeds } }

export const reducer = (state: State, action: Action): State => {
  switch (action.kind) {
    case 'link-clicked':
      if (action.isInternal) {
        window.history.pushState({}, '', action.url)
      } else {
        window.location.assign(action.url)
      }
      return state
    case 'url-changed':
      return {
        ...state,
        route: Route.fromUrl(action.url)
      }
    case 'got-item':
      return {
        ...state,
        page: match(action.result, article, error),
        cache: {
          ...state.cache,
          items: {
            ...state.cache.items,
            [String(action.id)]: action.result
          }
        }
      }
    case 'got-user':
      return {
        ...state,
        page: match(action.result, profile, error),
        cache: {
          ...state.cache,
          users: {
            ...state.cache.users,
            [action.user]: action.result
          }
        }
      }
    case 'got-feed':
      return {
        ...state,
        page: match(action.result, items => pageFeed(Feed.top, 1, items), error), // TODO feed, page
        cache: {
          ...state.cache,
          feeds: {
            ...state.cache.feeds,
            [action.feed]: action.result
          }
        }
      }
    default:
      throw 'not all actions have been processed'
  }
}
