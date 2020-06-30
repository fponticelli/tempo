import { div, article } from 'dom/lib/html_old'
import { htmlContent } from './html_content'
import { Content } from '../state'
import { Action } from '../action'
import { AsyncResult } from 'tempo-std/lib/async_result'
import { HttpError } from '../request'
import { matchAsyncResult, matchKind } from 'tempo-dom/lib/match'
import { mapField } from 'dom/lib/map_state'
import { demosContent } from './demos_content'
import { projectContent } from './project_content'
import { fragment } from 'dom/lib/impl/fragment'
import { loader } from './loader'

export const content = fragment<
  AsyncResult<Content, HttpError, unknown>,
  Action
>(
  matchAsyncResult({
    Failure: article(
      { attrs: { class: 'content message is-danger' } },
      div({ attrs: { class: 'message-body' } }, s => s.message)
    ),
    Loading: loader,
    NotAsked: '',
    Success: matchKind({
      HtmlPage: htmlContent,
      Demos: mapField('demos', demosContent),
      Project: mapField('project', projectContent)
    })
  })
)
