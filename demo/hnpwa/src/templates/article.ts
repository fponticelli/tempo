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

import { article, section, span } from 'tempo-dom/lib/html'
import { Article } from '../state'
import { Action } from '../action'
import { commentsTemplate } from './comments'
import { itemFooterTemplate, itemUrlTemplate } from './page_feed'
import { mapState } from 'tempo-dom/lib/map'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'

export const articleTemplate = article<Article, Action>(
  {},
  mapState(
    { map: (article: Article) => article.item },
    section(
      {},
      itemUrlTemplate,
      span({ attrs: { className: 'domain' } }, item => item.domain),
      itemFooterTemplate
    ),
    unsafeHtml({}, item => item.content),
    section(
      { attrs: { className: 'comments-view' } },
      mapState({ map: item => item.comments || [] }, commentsTemplate)
    )
  )
)
