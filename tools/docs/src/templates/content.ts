import { div, article } from 'tempo-dom/lib/html'
import { htmlContent } from './html_content'
import { Content } from '../state'
import { Action } from '../action'
import { AsyncResult } from 'tempo-std/lib/async_result'
import { HttpError } from '../request'
import { matchAsyncResult, matchKind } from 'tempo-dom/lib/match'
import { mapState } from 'tempo-dom/lib/map'
import { demosContent } from './demos_content'

export const content = article<
  AsyncResult<Content, HttpError, unknown>,
  Action
>(
  { attrs: { className: 'content' } },
  matchAsyncResult({
    Failure: article(
      { attrs: { class: 'message is-danger' } },
      div({ attrs: { class: 'message-body' } }, s => s.message)
    ),
    Loading: '...',
    NotAsked: '',
    Success: matchKind({
      HtmlPage: htmlContent,
      Demos: mapState({ map: c => c.demos }, demosContent)
    })
  })
)
