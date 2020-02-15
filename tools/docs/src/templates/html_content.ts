import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
import { Action } from '../action'
import { fragment } from 'tempo-dom/lib/fragment'
import { when } from 'tempo-dom/lib/when'
import { div, a, article } from 'tempo-dom/lib/html'

export const htmlContent = fragment<
  { title: string | undefined, html: string, path: string | undefined },
  Action
>(
  when(
    { condition: s => typeof s.path === 'string' },
    div(
      { attrs: { class: 'top-right' } },
      a(
        { attrs: { href: s => s.path } },
        '✏️ edit me'
      )
    )
  ),
  when(
    { condition: s => typeof s === 'string' },
    s => s.title
  ),
  unsafeHtml({ content: s => s.html, element: article({ attrs: { class: 'content' } }) })
)
