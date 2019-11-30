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

import { Action } from './action'
import { State, Page } from './state'
import { reduceOnKind } from '@tempo/store/lib/reducer'

export const reducer = reduceOnKind<State, Action>({
  LinkClicked: (state, action) => {
    return {
      ...state,
      route: action.route,
      page: action.route.kind === 'ExternalRoute' ? state.page : Page.loading
    }
  },
  UrlChanged: (state, action) => {
    if (state.route.kind === 'NotFoundRoute') {
      return {
        ...state,
        page: Page.notFound
      }
    } else {
      return state
    }
  },
  GotItem: (state, action) => ({
    ...state,
    page: action.result.match(Page.article, Page.error)
  }),
  GotFeed: (state, action) => ({
    ...state,
    page: action.result.match(
      items => {
        const page = (state.route.kind === 'FeedsRoute') ? state.route.page : 1
        return Page.feed(action.feed, page, items)
      },
      Page.error
    )
  }),
  GotUser: (state, action) => ({
    ...state,
    page: action.result.match(Page.profile, Page.error)
  })
})
