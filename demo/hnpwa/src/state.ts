import { Result } from './result'
import { HttpError } from './http_error'
import { Route, Feed } from './route'

export interface State {
  // key: Navigation
  readonly route: Route
  readonly cache: Cache
  readonly page: Page
}

export const state = (route: Route, cache: Cache, page: Page): State =>
  ({ route, cache, page })

export interface Cache {
  feeds: Record<string, Result<Item[], HttpError>>
  items: Record<number, Result<Item, HttpError>>
  users: Record<string, Result<User, HttpError>>
}

export const emptyCache = (): Cache => ({ feeds: {}, items: {}, users: {} })

export interface PageFeed {
  readonly kind: 'page-feed'
  readonly feed: Feed
  readonly page: number
  readonly items: Item[]
  //     Route.Feed Int (List Item)
}

export const pageFeed = (feed: Feed, page: number, items: Item[]): Page =>
  ({ kind: 'page-feed', feed, page, items })

export interface Article {
  readonly kind: 'article'
  readonly item: Item
}

export const article = (item: Item): Page => ({ kind: 'article', item })

export interface Profile {
  readonly kind: 'profile'
  readonly user: User
}

export const profile = (user: User): Page => ({ kind: 'profile', user })

export interface Loading {
  readonly kind: 'loading'
}

export const loading = { kind: 'loading' } as Page

export interface Error {
  readonly kind: 'error'
  readonly error: HttpError
}

export const error = (error: HttpError): Page => ({ kind: 'error', error })

export interface NotFound {
  readonly kind: 'not-found'
}

export const notFound = { kind: 'not-found' } as Page

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
