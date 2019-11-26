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
  readonly kind: 'LinkClicked'
  readonly isInternal: boolean
  readonly url: string // Browser.UrlRequest
}

export const linkClicked = (isInternal: boolean, url: string): Action =>
  ({ kind: 'LinkClicked', isInternal, url })

export interface UrlChanged {
  readonly kind: 'UrlChanged'
  readonly url: string // Url.Url
}

export const urlChanged = (url: string): Action =>
  ({ kind: 'UrlChanged', url })

export interface GotItem {
  readonly kind: 'GotItem'
  readonly id: number
  readonly result: Result<Item, HttpError>
}

export const gotItem = (id: number, result: Result<Item, HttpError>): Action =>
  ({ kind: 'GotItem', id, result })

export interface GotUser {
  readonly kind: 'GotUser'
  readonly user: string
  readonly result: Result<User, HttpError>
}

export const gotUser = (user: string, result: Result<User, HttpError>): Action =>
  ({ kind: 'GotUser', user, result })

export interface GotFeed {
  readonly kind: 'GotFeed'
  readonly feed: string
  readonly result: Result<Item[], HttpError>
}

export const gotFeed = (feed: string, result: Result<Item[], HttpError>): Action =>
  ({ kind: 'GotFeed', feed, result })

export type Action = LinkClicked | UrlChanged | GotItem | GotUser | GotFeed
