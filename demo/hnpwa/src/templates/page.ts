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
import { Page } from '../state'
import { matchKind } from 'tempo-dom/lib/match'
import { articleTemplate } from './article'
import { errorTemplate } from './error'
import { loadingTemplate } from './loading'
import { notFoundTemplate } from './not_found'
import { pageFeedTemplate } from './page_feed'
import { profileTemplate } from './profile'

export const pageTemplate = matchKind<Page, Action>({
  matchers: {
    Article: articleTemplate,
    Error: errorTemplate,
    Loading: loadingTemplate,
    NotFound: notFoundTemplate,
    PageFeed: pageFeedTemplate,
    Profile: profileTemplate
  }
})
