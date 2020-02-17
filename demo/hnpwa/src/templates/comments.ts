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

import { li, ul, div } from 'tempo-dom/lib/html'
import { mapState } from 'tempo-dom/lib/map'
import { forEach } from 'tempo-dom/lib/for_each'
import { Route } from '../route'
import { Item } from '../state'
import { Action } from '../action'
import { lazy } from 'tempo-dom/lib/lazy'
import { DOMTemplate } from 'tempo-dom/lib/template'
import { when } from 'tempo-dom/lib/when'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
import { linkRoute } from './link_route'

export const commentTemplate: DOMTemplate<Item, Action> = lazy<Item, Action>(
  () =>
    li<Item, Action>(
      {},
      div(
        { attrs: { className: 'comment-meta' } },
        linkRoute({ route: item => Route.user(item.user) }),
        ' ',
        item => item.time_ago
      ),
      unsafeHtml({}, item => item.content),
      mapState<Item, Item[], Action>(
        { map: item => item.comments || [] },
        commentsTemplate
      )
    )
)

export const commentsTemplate = lazy<Item[], Action>(() =>
  when(
    { condition: comments => comments.length > 0 },
    ul({}, forEach({}, commentTemplate))
  )
)
