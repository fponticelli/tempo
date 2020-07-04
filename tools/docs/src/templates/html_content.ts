import { unsafeHtml } from 'tempo-dom/lib/lifecycle/unsafe_html'
import { Action } from '../action'
import { fragment } from 'tempo-dom/lib/html'

export const htmlContent = fragment<
  { title: string | undefined; html: string; path: string | undefined },
  Action,
  unknown
>($ =>
  $.when(
    s => typeof s.path === 'string',
    $ =>
      $.div($ =>
        $.class('top-right').a($ => $.href(s => s.path).text('✏️ edit me'))
      )
  )
    .when(
      s => typeof s === 'string',
      $ => $.text(s => s.title)
    )
    .article($ => $.class('content').lifecycle(unsafeHtml(s => s.html)))
)
