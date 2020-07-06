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

import { SECTION, SPAN, MatchBool } from 'tempo-dom/lib/html'
import { Feed, maxPage, Route } from '../route'
import { Action } from '../action'
import { linkRoute } from './link_route'

const paginationDesktop = MatchBool<
  { feed: Feed; page: number; current: number },
  Action,
  unknown
>({
  condition: s => s.page === s.current,
  true: SPAN($ => $.ariaCurrent('page').text(s => `${s.page}`)),
  false: linkRoute(
    { route: state => Route.feeds(state.feed, state.page) },
    state => String(state.page)
  )
})

const previousPageLink = SECTION<{ feed: Feed; page: number }, Action, unknown>(
  $ =>
    $.MatchBool({
      condition: s => s.page === 1,
      true: SPAN($ => $.class('inactive').text('Previous')),
      false: linkRoute(
        { route: state => Route.feeds(state.feed, state.page - 1) },
        'Previous'
      )
    })
)

const nextPageLink = SECTION<{ feed: Feed; page: number }, Action, unknown>($ =>
  $.MatchBool({
    condition: s => maxPage(s.feed) === s.page,
    true: SPAN($ => $.class('inactive').text('Next')),
    false: linkRoute(
      { route: state => Route.feeds(state.feed, state.page + 1) },
      'Next'
    )
  })
)

const pageRange = (
  feed: Feed,
  current: number
): { feed: Feed; current: number; page: number }[] => {
  const arr = new Array(maxPage(feed))
    .fill({ feed, current, page: 0 })
    .map((o, i) => ({ ...o, page: i + 1 }))
  return arr
}

export const paginationTemplate = SECTION<
  { feed: Feed; page: number },
  Action,
  unknown
>($ =>
  $.class('pagination')
    .Append(previousPageLink)
    .NAV($ =>
      $.MapState(
        s => pageRange(s.feed, s.page),
        $ => $.ForEach($ => $.Append(paginationDesktop))
      )
    )
    .DIV($ =>
      $.class('mobile')
        .SPAN($ => $.text(s => String(s.page)))
        .SPAN($ => $.text('/'))
        .SPAN($ => $.text(s => String(maxPage(s.feed))))
    )
    .Append(nextPageLink)
)
