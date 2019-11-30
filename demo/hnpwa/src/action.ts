import { Result } from './result'
import { HttpError } from './http_error'
import { Item, User } from './state'
import { Route, Feed } from './route'

export interface LinkClicked {
  readonly kind: 'LinkClicked'
  readonly route: Route
}

export interface UrlChanged {
  readonly kind: 'UrlChanged'
  readonly url: string // Url.Url
}

export interface GotItem {
  readonly kind: 'GotItem'
  readonly id: number
  readonly result: Result<Item, HttpError>
}

export interface GotUser {
  readonly kind: 'GotUser'
  readonly user: string
  readonly result: Result<User, HttpError>
}

export interface GotFeed {
  readonly kind: 'GotFeed'
  readonly feed: Feed
  readonly result: Result<Item[], HttpError>
}

export type Action = LinkClicked | UrlChanged | GotItem | GotUser | GotFeed

export const Action = {
  linkClicked(route: Route): Action {
    return { kind: 'LinkClicked', route }
  },
  urlChanged(url: string): Action {
    return { kind: 'UrlChanged', url }
  },
  gotItem(id: number, result: Result<Item, HttpError>): Action {
    return { kind: 'GotItem', id, result }
  },
  gotUser(user: string, result: Result<User, HttpError>): Action {
    return { kind: 'GotUser', user, result }
  },
  gotFeed(feed: Feed, result: Result<Item[], HttpError>): Action {
    return { kind: 'GotFeed', feed, result }
  }
}
