import { div, article } from 'tempo-dom/lib/html'
import { htmlContent } from './html_content'
import { Content } from '../state'
import { Action } from '../action'
import { AsyncResult } from 'tempo-std/lib/async_result'
import { HttpError } from '../request'
import { matchAsyncResult, matchKind } from 'tempo-dom/lib/match'
import { mapState } from 'tempo-dom/lib/map'
import { demosContent } from './demos_content'
import { projectContent } from './project_content'
import { fragment } from 'tempo-dom/lib/fragment'
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
      Demos: mapState({ map: c => c.demos }, demosContent),
      Project: mapState({ map: c => c.project }, projectContent)
    })
  })
)
