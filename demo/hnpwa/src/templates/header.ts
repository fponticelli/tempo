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

import { Action } from '../action'
import { Route, Feed, toTitle } from '../route'
import { header, i, nav, span } from 'tempo-dom/lib/html'
import { g, svg, rect } from 'tempo-dom/lib/svg'
import { when, unless } from 'tempo-dom/lib/when'
import { fragment } from 'tempo-dom/lib/fragment'
import { linkRoute } from './link_route'

const logo = svg<Route, unknown, Action>(
  { attrs: { width: 32, height: 32, viewBox: `0 0 32 32` } },
  g(
    { styles: { fill: 'none' } },
    rect({ attrs: { x: 0, y: 0, fill: '#ffffff', width: 8, height: 8 } }),
    rect({ attrs: { x: 11, y: 0, fill: '#ffffff', width: 8, height: 8 } }),
    rect({ attrs: { x: 22, y: 0, fill: '#ffffff', width: 8, height: 8 } }),
    rect({ attrs: { x: 11, y: 11, fill: '#ffffff', width: 8, height: 8 } }),
    rect({ attrs: { x: 11, y: 22, fill: '#ffffff', width: 8, height: 8 } })
  )
)

const headerLink = (feed: Feed) => {
  const condition = (route: Route) => {
    switch (route.kind) {
      case 'FeedsRoute':
        return route.feed === feed
      default:
        return false
    }
  }
  return fragment<Route, unknown, Action>(
    when({ condition }, span({ attrs: { 'aria-current': 'page' } }, toTitle(Route.feeds(feed, 1)))),
    unless({ condition }, linkRoute({ route: Route.feeds(feed, 1) }))
  )
}

export const appHeader = header<Route, unknown, Action>(
  {},
  linkRoute({ route: Route.root }, i({ attrs: { 'aria-label': 'Homepage', className: 'logo' } }, logo)),
  nav({}, ...[Feed.top, Feed.new, Feed.ask, Feed.show, Feed.jobs].map(headerLink)),
  linkRoute(
    {
      className: 'githublink',
      route: Route.externalRoute('https://github.com/fponticelli/tempo')
    },
    'About'
  )
)
