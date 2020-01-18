/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {
  decodeText,
  match,
  digits,
  rest,
  eoi
} from 'partsing/text'

import { oneOf } from 'partsing/core/decoder'
import { matchKind } from 'tempo-std/lib//match'

export enum Feed {
  top = 'top',
  new = 'new',
  ask = 'ask',
  show = 'show',
  jobs = 'jobs'
}

export interface RootRoute {
  readonly kind: 'RootRoute'
}

export interface FeedsRoute {
  readonly kind: 'FeedsRoute'
  readonly feed: Feed
  readonly page: number
}

export interface ExternalRoute {
  readonly kind: 'ExternalRoute'
  readonly path: string
}

export interface ItemRoute {
  readonly kind: 'ItemRoute'
  readonly item: number
}

export interface UserRoute {
  readonly kind: 'UserRoute'
  readonly user: string
}

export interface NotFoundRoute {
  readonly kind: 'NotFoundRoute'
}

export type Route = RootRoute | FeedsRoute | ItemRoute | UserRoute | NotFoundRoute | ExternalRoute

export const Route = {
  root: { kind: 'RootRoute' } as Route,
  feeds: (feed: Feed, page: number): Route => ({ kind: 'FeedsRoute', feed, page }),
  item: (item: number): Route => ({ kind: 'ItemRoute', item }),
  user: (user: string | undefined): Route => ({ kind: 'UserRoute', user: user || '' }),
  notFound: { kind: 'NotFoundRoute' } as Route,
  externalRoute: (path: string): Route => ({ kind: 'ExternalRoute', path }),

  fromUrl: (url: string): Route => {
    const result = urlDecoder(url)
    switch (result.kind) {
      case 'decode-success':
        return result.value
      default:
        return Route.notFound
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
    case Feed.new:  return 10
    case Feed.ask:  return 2
    case Feed.show: return 2
    case Feed.jobs: return 1
    default: throw 'should never happen'
  }
}

const feedToTitle = (feed: Feed) => {
  const s = feed.toString()
  return s.substring(0, 1).toUpperCase() + s.substring(1)
}

export const toRouteData = matchKind<Route, RouteData>({
  FeedsRoute: (route) => routeData(feedToTitle(route.feed), route.page === 1 ? `/${route.feed}` : `/${route.feed}/page/${route.page}`),
  ItemRoute: (route) => routeData('Item', `/item/${route.item}`),
  NotFoundRoute: () => routeData('404', '/404'),
  RootRoute: () => routeData('Top', '/'),
  UserRoute: (route) => routeData(route.user, `/user/${route.user}`),
  ExternalRoute: (route) => routeData('External', route.path)
})

export const toTitle = (route: Route): string => toRouteData(route).title
export const toUrl = (route: Route): string => toRouteData(route).url

const parseFeed = oneOf(
  match('/top').withResult(Feed.top),
  match('/new').withResult(Feed.new),
  match('/ask').withResult(Feed.ask),
  match('/show').withResult(Feed.show),
  match('/jobs').withResult(Feed.jobs)
)

const urlDecoder = decodeText<Route>(
  oneOf(
    oneOf(
      parseFeed.skipNext(eoi).map(feed => Route.feeds(feed, 1)),
      parseFeed.join(
        match('/page/').pickNext(digits(1)).map(Number)
      ).map(([feed, page]: [Feed, number]) => Route.feeds(feed, page))
    ),
    match('/item/').pickNext(digits(0)).map(Number).map(Route.item),
    match('/user/').pickNext(rest).map(i => Route.user(i)),
    match('/404').map(() => Route.notFound),
    match('/').skipNext(eoi).map(_ => Route.root)
  )
)
