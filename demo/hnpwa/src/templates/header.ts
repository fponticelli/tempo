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
import { HEADER, I, Fragment } from 'tempo-dom/lib/html'
import { linkRoute } from './link_route'
import { SVG } from 'tempo-dom/lib/svg'

const logo = SVG<Route, Action, unknown>($ =>
  $.width(32)
    .height(32)
    .viewBox([0, 0, 32, 32])
    .G($ =>
      $.fill('#ffffff')
        .RECT($ => $.x(0).y(0).width(8).height(8))
        .RECT($ => $.x(11).y(0).width(8).height(8))
        .RECT($ => $.x(22).y(0).width(8).height(8))
        .RECT($ => $.x(11).y(11).width(8).height(8))
        .RECT($ => $.x(11).y(22).width(8).height(8))
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
  return Fragment<Route, Action, unknown>($ =>
    $.When(condition, $ =>
      $.SPAN($ => $.ariaCurrent('page').Append(toTitle(Route.feeds(feed, 1))))
    ).Unless(condition, $ =>
      $.Append(linkRoute({ route: Route.feeds(feed, 1) }))
    )
  )
}

export const appHeader = HEADER<Route, Action, unknown>($ =>
  $.Append(
    linkRoute(
      { route: Route.root },
      I<Route, Action, unknown>($ =>
        $.ariaLabel('Homepage').class('logo').Append(logo)
      ).build()
    )
  )
    .NAV($ =>
      $.AppendMany(
        ...[Feed.top, Feed.new, Feed.ask, Feed.show, Feed.jobs].map(headerLink)
      )
    )
    .Append(
      linkRoute(
        {
          className: 'githublink',
          route: Route.externalRoute('https://github.com/fponticelli/tempo')
        },
        'About'
      )
    )
)
