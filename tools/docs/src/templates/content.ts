import { div, article } from 'tempo-dom/lib/html'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
import { Action } from '../action'
import { AsyncResult } from 'tempo-std/lib/async_result'
import { HttpError } from '../request'
import { matchAsyncResult } from 'tempo-dom/lib/match'

export const content = article<AsyncResult<string, HttpError, unknown>, Action>(
  { attrs: { className: 'content' } },
  matchAsyncResult({
    Failure: article({ attrs: { class: 'message is-danger' }}, div({ attrs: { class: 'message-body' } }, s => s.message)),
    Loading: '...',
    NotAsked: '',
    Success: unsafeHtml({ content: s => s})
  })
)
