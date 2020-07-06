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

import { Item } from '../state'
import { Action } from '../action'
import { Lazy, LI, When } from 'tempo-dom/lib/html'
import { linkRoute } from './link_route'
import { Route } from '../route'
import { unsafeHtml } from 'tempo-dom/lib/lifecycle/unsafe_html'
import { DOMTemplate } from 'tempo-dom/lib/template'

export const commentTemplate: DOMTemplate<Item, Action, unknown> = Lazy<
  Item,
  Action,
  unknown
>(() =>
  LI<Item, Action, unknown>($ =>
    $.DIV($ =>
      $.class('comment-meta')
        .Append(linkRoute({ route: item => Route.user(item.user) }))
        .text(' ')
        .text(s => s.time_ago)
    )
      .DIV($ => $.Lifecycle(unsafeHtml(s => s.content)))
      .MapState(
        s => s.comments ?? [],
        $ => $.Append(commentsTemplate)
      )
  )
)

export const commentsTemplate = Lazy<Item[], Action, unknown>(() =>
  When(
    comments => comments.length > 0,
    $ => $.UL($ => $.ForEach($ => $.Append(commentTemplate)))
  )
)
