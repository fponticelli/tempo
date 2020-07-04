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

import { section, span, matchBool } from 'tempo-dom/lib/html'
import { Feed, maxPage, Route } from '../route'
import { Action } from '../action'
import { linkRoute } from './link_route'

const paginationDesktop = matchBool<
  { feed: Feed; page: number; current: number },
  Action,
  unknown
>({
  condition: s => s.page === s.current,
  true: span($ => $.ariaCurrent('page').text(s => `${s.page}`)),
  false: linkRoute(
    { route: state => Route.feeds(state.feed, state.page) },
    state => String(state.page)
  )
})

const previousPageLink = section<{ feed: Feed; page: number }, Action, unknown>(
  $ =>
    $.matchBool({
      condition: s => s.page === 1,
      true: span($ => $.class('inactive').text('Previous')),
      false: linkRoute(
        { route: state => Route.feeds(state.feed, state.page - 1) },
        'Previous'
      )
    })
)

const nextPageLink = section<{ feed: Feed; page: number }, Action, unknown>($ =>
  $.matchBool({
    condition: s => maxPage(s.feed) === s.page,
    true: span($ => $.class('inactive').text('Next')),
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

export const paginationTemplate = section<
  { feed: Feed; page: number },
  Action,
  unknown
>($ =>
  $.class('pagination')
    .append(previousPageLink)
    .nav($ =>
      $.mapState(
        s => pageRange(s.feed, s.page),
        $ => $.forEach($ => $.append(paginationDesktop))
      )
    )
    .div($ =>
      $.class('mobile')
        .spanEl($ => $.text(s => String(s.page)))
        .spanEl($ => $.text('/'))
        .spanEl($ => $.text(s => String(maxPage(s.feed))))
    )
    .append(nextPageLink)
)
