import { unsafeHtml } from 'dom/lib/lifecycle/unsafe_html'
import { Action } from '../action'
import { fragment } from 'dom/lib/impl/fragment'
import { when } from 'dom/lib/impl/when'
import { div, a, article } from 'tempo-dom/lib/html'

export const htmlContent = fragment<
  { title: string | undefined; html: string; path: string | undefined },
  Action
>(
  when(
    { condition: s => typeof s.path === 'string' },
    div(
      { attrs: { class: 'top-right' } },
      a({ attrs: { href: s => s.path } }, '✏️ edit me')
    )
  ),
  when({ condition: s => typeof s === 'string' }, s => s.title),
  article({
    attrs: {
      class: 'content'
    },
    lifecycle: unsafeHtml(s => s.html)
  })
)
