import { Result } from './result'
import { HttpError } from './http_error'
import { Item, User } from './state'

// type Msg
//     = LinkClicked Browser.UrlRequest
//     | UrlChanged Url.Url
//     | GotItem Int (Result Http.Error Item)
//     | GotUser String (Result Http.Error User)
//     | GotFeed String (Result Http.Error (List Item))

export interface LinkClicked {
  readonly kind: 'link-clicked'
  readonly isInternal: boolean
  readonly url: string // Browser.UrlRequest
}

export const linkClicked = (isInternal: boolean, url: string): Action =>
  ({ kind: 'link-clicked', isInternal, url })

export interface UrlChanged {
  readonly kind: 'url-changed'
  readonly url: string // Url.Url
}

export const urlChanged = (url: string): Action =>
  ({ kind: 'url-changed', url })

export interface GotItem {
  readonly kind: 'got-item'
  readonly id: number
  readonly result: Result<Item, HttpError>
}

export const gotItem = (id: number, result: Result<Item, HttpError>): Action =>
  ({ kind: 'got-item', id, result })

export interface GotUser {
  readonly kind: 'got-user'
  readonly user: string
  readonly result: Result<User, HttpError>
}

export const gotUser = (user: string, result: Result<User, HttpError>): Action =>
  ({ kind: 'got-user', user, result })

export interface GotFeed {
  readonly kind: 'got-feed'
  readonly feed: string
  readonly result: Result<Item[], HttpError>
}

export const gotFeed = (feed: string, result: Result<Item[], HttpError>): Action =>
  ({ kind: 'got-feed', feed, result })

export type Action = LinkClicked | UrlChanged | GotItem | GotUser | GotFeed
