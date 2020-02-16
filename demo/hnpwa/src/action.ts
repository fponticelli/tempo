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

import { HttpError } from './http_error'
import { Item, User } from './state'
import { Route, Feed } from './route'
import { Result } from 'tempo-std/lib/result'

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
