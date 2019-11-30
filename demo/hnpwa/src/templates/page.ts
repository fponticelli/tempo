import { Action } from '../action'
import { Page } from '../state'
import { matchKind } from '@tempo/dom/lib/match'
import { articleTemplate } from './article'
import { errorTemplate } from './error'
import { loadingTemplate } from './loading'
import { notFoundTemplate } from './not_found'
import { pageFeedTemplate } from './page_feed'
import { profileTemplate } from './profile'

export const pageTemplate = matchKind<Page, Action>({
  Article: articleTemplate,
  Error: errorTemplate,
  Loading: loadingTemplate,
  NotFound: notFoundTemplate,
  PageFeed: pageFeedTemplate,
  Profile: profileTemplate
})
