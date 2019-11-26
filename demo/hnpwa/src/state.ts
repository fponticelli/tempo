import { Result } from './result'
import { HttpError } from './http_error'
import { Route, Feed } from './route'

export interface State {
  // key: Navigation
  readonly route: Route
  readonly cache: Cache
  readonly page: Page
}

export const createState = (route: Route, cache: Cache, page: Page): State =>
  ({ route, cache, page })

export interface Cache {
  feeds: Record<string, Result<Item[], HttpError>>
  items: Record<number, Result<Item, HttpError>>
  users: Record<string, Result<User, HttpError>>
}

export const emptyCache = (): Cache => ({ feeds: {}, items: {}, users: {} })

export interface PageFeed {
  readonly kind: 'PageFeed'
  readonly feed: Feed
  readonly page: number
  readonly items: Item[]
  //     Route.Feed Int (List Item)
}

export const pageFeed = (feed: Feed, page: number, items: Item[]): Page =>
  ({ kind: 'PageFeed', feed, page, items })

export interface Article {
  readonly kind: 'Article'
  readonly item: Item
}

export const article = (item: Item): Page => ({ kind: 'Article', item })

export interface Profile {
  readonly kind: 'Profile'
  readonly user: User
}

export const profile = (user: User): Page => ({ kind: 'Profile', user })

export interface Loading {
  readonly kind: 'Loading'
}

export const loading = { kind: 'Loading' } as Page

export interface Error {
  readonly kind: 'Error'
  readonly error: HttpError
}

export const error = (error: HttpError): Page => ({ kind: 'Error', error })

export interface NotFound {
  readonly kind: 'NotFound'
}

export const notFound = { kind: 'NotFound' } as Page

export type Page = PageFeed | Article | Profile | Loading | Error | NotFound

export interface Item {
  readonly id: number
  readonly title: string
  readonly points: number
  readonly user: string
  readonly timeAgo: string
  readonly url: ItemUrl
  readonly domain: string
  readonly commentsCount: number
  readonly comments: Comments
  readonly content: string
  readonly type: string
}

export interface User {
  readonly about: string
  readonly created: string
  readonly id: string
  readonly karma: number
}

export interface External {
  readonly kind: 'external'
  readonly url: string
}

export const external = (url: string): ItemUrl => ({ kind: 'external', url })

export interface Internal {
  readonly kind: 'internal'
}

export const internal = { kind: 'internal' } as ItemUrl

export interface None {
  readonly kind: 'none'
}

export const none = { kind: 'none' } as ItemUrl

export type ItemUrl = External | Internal | None

export interface WithComments {
  readonly kind: 'with-comments'
  readonly items: ReadonlyArray<Item>
}

export const withComments = (items: Item[]): Comments => ({ kind: 'with-comments', items })

export interface Empty {
  readonly kind: 'empty'
}

export const empty = { kind: 'empty' } as Comments

export type Comments = WithComments | Empty
