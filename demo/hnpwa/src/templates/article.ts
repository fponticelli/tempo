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

import { ARTICLE } from 'tempo-dom/lib/html'
import { Article } from '../state'
import { Action } from '../action'
import { commentsTemplate } from './comments'
import { itemFooterTemplate, itemUrlTemplate } from './page_feed'
import { unsafeHtml } from 'tempo-dom/lib/lifecycle/unsafe_html'

export const articleTemplate = ARTICLE<Article, Action, unknown>($ =>
  $.MapState(
    s => s.item,
    $ =>
      $.SECTION($ =>
        $.Append(itemUrlTemplate)
          .SPAN($ => $.class('domain').text(s => s.domain))
          .Append(itemFooterTemplate)
      )
        .DIV($ => $.Lifecycle(unsafeHtml(s => s.content)))
        .SECTION($ =>
          $.class('comments-view').MapState(
            s => s.comments ?? [],
            $ => $.Append(commentsTemplate)
          )
        )
  )
)
