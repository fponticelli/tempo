import {
  decodeText,
  match,
  digits,
  TextInput,
  rest
} from 'partsing/text'

import { oneOf, succeed } from 'partsing/core/decoder'
import { DecodeError } from 'partsing/error'

export enum Feed {
  top = 'top',
  new = 'new',
  ask = 'ask',
  show = 'show',
  jobs = 'jobs'
}

export interface RootRoute {
  readonly kind: 'root-route'
}

export interface FeedsRoute {
  readonly kind: 'feeds-route'
  readonly feed: Feed
  readonly page: number
}

export interface ItemRoute {
  readonly kind: 'item-route'
  readonly item: number
}

export interface UserRoute {
  readonly kind: 'user-route'
  readonly user: string
}

export interface NotFoundRoute {
  readonly kind: 'not-found-route'
}

export type Route = RootRoute | FeedsRoute | ItemRoute | UserRoute | NotFoundRoute

export const Route = {
  root: (): Route => ({ kind: 'root-route' }),
  feeds: (feed: Feed, page: number): Route => ({ kind: 'feeds-route', feed, page }),
  item: (item: number): Route => ({ kind: 'item-route', item }),
  user: (user: string): Route => ({ kind: 'user-route', user }),
  notFound: (): Route => ({ kind: 'not-found-route' }),

  fromUrl: (url: string): Route => {
    const result = decoder(url)
    switch (result.kind) {
      case 'decode-success':
        return result.value
      default:
        return Route.notFound()
    }
  }
}

export interface RouteData {
  readonly title: string
  readonly url: string
}

export const routeData = (title: string, url: string): RouteData => ({ title, url })

export const maxPage = (feed: Feed) => {
  switch (feed) {
    case Feed.top:  return 10
    case Feed.new:  return 12
    case Feed.ask:  return 3
    case Feed.show: return 2
    case Feed.jobs: return 1
    default: throw 'should never happen'
  }
}

const feedToTitle = (feed: Feed) => {
  const s = feed.toString()
  return s.substring(0, 1).toUpperCase() + s.substring(1)
}

export const toRouteData = (route: Route): RouteData => {
  switch (route.kind) {
    case 'feeds-route':
      return routeData(feedToTitle(route.feed), `/${route.feed}/page/${route.page}`)
    case 'item-route':
      return routeData('Item', `/item/${route.item}`)
    case 'not-found-route':
      return routeData('404', '/404')
    case 'root-route':
      return routeData('Top', '/')
    case 'user-route':
      return routeData('User', `/user/${route.user}`)
    default: throw 'should never happen'
  }
}

export const toTitle = (route: Route): string => toRouteData(route).title
export const toUrl = (route: Route): string => toRouteData(route).url

const parseFeed = oneOf(
  match('/top').withResult(Feed.top),
  match('/new').withResult(Feed.new),
  match('/ask').withResult(Feed.ask),
  match('/show').withResult(Feed.show),
  match('/jobs').withResult(Feed.jobs)
)

const decoder = decodeText<Route>(
  oneOf(
    parseFeed
      .join(
        match('?page=').pickNext(digits(1)).map(Number)
          .or(succeed<TextInput, number, DecodeError>(1))
      ).map(([feed, page]: [Feed, number]) => Route.feeds(feed, page)),
    match('/item/').pickNext(digits(0)).map(Number).map(Route.item),
    match('/user/').pickNext(rest).map(i => Route.user(i)),
    match('/').map(_ => Route.root())
  )
)
