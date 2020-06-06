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

import { State } from './state'
import { Action } from './action'
import { toTitle, Route, toUrl, Feed } from './route'
import { matchKind } from 'tempo-std/lib//match'
import { Request } from './request'
import { Store } from 'tempo-store/lib/store'
import { isGithub } from './config'

export const setTitle = (state: State) => {
  const title = ((page) => {
    switch (page.kind) {
      case 'Article': return page.item.title
      case 'Profile': return page.user.id
      default: return  toTitle(state.route)
    }
  })(state.page)
  document.title = `${title} | Tempo HNPWA`
}

export const loadRoute = (store: Store<State, Action>) => (route: Route) => {
  matchKind<Route, void>(
    route,
    {
      FeedsRoute: async r => {
        const result = await Request.feed(r.feed, r.page)
        store.process(Action.gotFeed(r.feed, result))
      },
      ItemRoute: async r => {
        const result = await Request.item(r.item)
        store.process(Action.gotItem(r.item, result))
      },
      NotFoundRoute: () => {},
      RootRoute: async r => {
        const result = await Request.feed(Feed.top, 1)
        store.process(Action.gotFeed(Feed.top, result))
      },
      UserRoute: async r => {
        const result = await Request.user(r.user)
        store.process(Action.gotUser(r.user, result))
      },
      ExternalRoute: () => {}
    }
  )
}

let current = ''
export const middleware = (store: Store<State, Action>) => (state: State, action: Action) => {
  switch (action.kind) {
    case 'LinkClicked':
      if (action.route.kind === 'ExternalRoute') {
        window.open(action.route.path, '_blank')
      } else if (action.route.kind !== 'NotFoundRoute') {
        const url = toUrl(action.route)
        if (url !== current) {
          const toSet = isGithub ? `#${url}` : url
          history.pushState(action.route, '', toSet)
          current = url
        }
        store.process(Action.urlChanged(url))
      }
      break
    case 'UrlChanged':
      loadRoute(store)(state.route)
      break
    default:
  }
}
