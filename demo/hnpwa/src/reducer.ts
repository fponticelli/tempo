import { Action } from './action'
import { State, article, error, profile, pageFeed } from './state'
import { Route, Feed } from './route'
import { match } from './result'
import { reduceOnKind } from '@tempo/store/lib/reducer'

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

export const reducer = reduceOnKind<State, Action>({
  LinkClicked: (state, _) => state,
  UrlChanged: (state, action) => ({
    ...state,
    route: Route.fromUrl(action.url)
  }),
  GotItem: (state, action) => ({
    ...state,
    page: match(action.result, article, error),
    cache: {
      ...state.cache,
      items: {
        ...state.cache.items,
        [String(action.id)]: action.result
      }
    }
  }),
  GotFeed: (state, action) => ({
    ...state,
    page: match(action.result, items => pageFeed(Feed.top, 1, items), error), // TODO feed, page
    cache: {
      ...state.cache,
      feeds: {
        ...state.cache.feeds,
        [action.feed]: action.result
      }
    }
  }),
  GotUser: (state, action) => ({
    ...state,
    page: match(action.result, profile, error),
    cache: {
      ...state.cache,
      users: {
        ...state.cache.users,
        [action.user]: action.result
      }
    }
  })
})
