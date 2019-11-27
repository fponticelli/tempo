import { Action } from '../action'
import { Page } from '../state'
import { matchOnKind } from '@tempo/dom/lib/match'
import { article } from './article'
import { error } from './error'
import { loading } from './loading'
import { notFound } from './not_found'
import { pageFeed } from './page_feed'
import { profile } from './profile'

export const page = matchOnKind<Page, Action>({
  Article: article,
  Error: error,
  Loading: loading,
  NotFound: notFound,
  PageFeed: pageFeed,
  Profile: profile
})
