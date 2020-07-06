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

import { FOOTER, SECTION, LI, H2, Match, Fragment } from 'tempo-dom/lib/html'
import { PageFeed, Item, External } from '../state'
import { Action } from '../action'
import { Route } from '../route'
import { linkRoute } from './link_route'
import { paginationTemplate } from './pagination'

export const itemUrlTemplate = Match<['url', 'kind'], Item, Action, unknown>({
  path: ['url', 'kind'],
  matcher: {
    External: linkRoute<Item & { url: External }, Action, unknown>(
      { route: item => Route.externalRoute(item.url.path) },
      H2<Item, Action, unknown>($ => $.text((item: Item) => item.title)).build()
    ),
    Internal: linkRoute(
      { route: item => Route.item(item.id) },
      H2<Item, Action, unknown>($ => $.text((item: Item) => item.title)).build()
    )
  }
})

export const listItemUrlTemplate = Match<
  ['url', 'kind'],
  Item,
  Action,
  unknown
>({
  path: ['url', 'kind'],
  matcher: {
    External: linkRoute<Item & { url: External }, Action, unknown>(
      { route: item => Route.externalRoute(item.url.path) },
      (item: Item) => item.title
    ),
    Internal: linkRoute(
      { route: item => Route.item(item.id) },
      (item: Item) => item.title
    )
  }
})

export const itemFooterTemplate = FOOTER<Item, Action, unknown>($ =>
  $.MatchBool({
    condition: item => item.type === 'job',
    true: item => item.time_ago,
    false: Fragment($ =>
      $.text(item => String(item.points))
        .text(' points by ')
        .Append(linkRoute({ route: item => Route.user(item.user) }))
        .text(' ')
        .text(item => item.time_ago)
        .text(' | ')
        .Append(
          linkRoute(
            { route: item => Route.item(item.id) },
            item => String(item.comments_count),
            ' comments'
          )
        )
    )
  })
)

const listItemTemplate = LI<[Item, PageFeed, number], Action, unknown>($ =>
  $.ASIDE($ =>
    $.text(([_i, page, index]) => String((page.page - 1) * 30 + index + 1))
  ).DIV($ =>
    $.MapState(
      ([item]) => item,
      $ =>
        $.Append(listItemUrlTemplate).SPAN($ =>
          $.class('domain')
            .text(s => s.domain)
            .Append(itemFooterTemplate)
        )
    )
  )
)

export const pageFeedTemplate = SECTION<PageFeed, Action, unknown>($ =>
  $.class('list-view')
    .UL($ =>
      $.Iterate(
        s => s.items,
        $ => $.Append(listItemTemplate)
      )
    )
    .MapState(
      s => ({ feed: s.feed, page: s.page }),
      $ => $.Append(paginationTemplate)
    )
)
