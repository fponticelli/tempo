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

import { footer, section, ul, li, aside, span, div, h2 } from 'dom/lib/html_old'
import { iterate } from 'dom/lib/impl/iterate'
import { fragment } from 'dom/lib/impl/fragment'
import { PageFeed, Item, External } from '../state'
import { Action } from '../action'
import { match, matchBool } from 'tempo-dom/lib/match'
import { mapState } from 'dom/lib/map_state'
import { Route } from '../route'
import { linkRoute } from './link_route'
import { paginationTemplate } from './pagination'

export const itemUrlTemplate = match<['url', 'kind'], Item, Action>({
  path: ['url', 'kind'],
  matchers: {
    External: linkRoute<Item & { url: External }, Action, unknown>(
      { route: item => Route.externalRoute(item.url.path) },
      h2({}, (item: Item) => item.title)
    ),
    Internal: linkRoute(
      { route: item => Route.item(item.id) },
      h2({}, (item: Item) => item.title)
    )
  }
})

export const listItemUrlTemplate = match<['url', 'kind'], Item, Action>({
  path: ['url', 'kind'],
  matchers: {
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

export const itemFooterTemplate = footer<Item, Action>(
  {},
  matchBool({
    condition: item => item.type === 'job',
    true: item => item.time_ago,
    false: fragment(
      item => String(item.points),
      ' points by ',
      linkRoute({ route: item => Route.user(item.user) }),
      ' ',
      item => item.time_ago,
      ' ',
      linkRoute(
        { route: item => Route.item(item.id) },
        item => String(item.comments_count),
        ' comments'
      )
    )
  })
)

const listItemTemplate = li<[Item, PageFeed, number], Action>(
  {},
  aside({}, ([_i, page, index]) => String((page.page - 1) * 30 + index + 1)),
  div(
    {},
    mapState(
      { map: ([item]) => item },
      listItemUrlTemplate,
      span(
        { attrs: { className: 'domain' } },
        item => item.domain,
        itemFooterTemplate
      )
    )
  )
)

export const pageFeedTemplate = section<PageFeed, Action>(
  {
    attrs: { className: 'list-view' }
  },
  ul({}, iterate({ map: state => state.items }, listItemTemplate)),
  mapState(
    {
      map: state => ({ feed: state.feed, page: state.page })
    },
    paginationTemplate
  )
)
