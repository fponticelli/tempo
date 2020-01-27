import { div } from 'tempo-dom/lib/html'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
import { Action } from '../action'
import { AsyncResult } from 'tempo-std/lib/async_result'
import { HttpError } from '../request'
import { matchAsyncResult } from 'tempo-dom/lib/match'

export const content = div<AsyncResult<string, HttpError, unknown>, Action>(
  { attrs: { className: 'content' } },
  matchAsyncResult({
    Failure: div({ attrs: { class: 'error-message' }}, s => s.message),
    Loading: '...',
    NotAsked: '',
    Success: unsafeHtml({ content: s => s})
  })
)
