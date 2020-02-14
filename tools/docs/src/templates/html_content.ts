import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
import { Action } from '../action'
import { fragment } from 'tempo-dom/lib/fragment'
import { when } from 'tempo-dom/lib/when'
import { div, a } from 'tempo-dom/lib/html'

export const htmlContent = fragment<
  { title: string | undefined, html: string, path: string | undefined },
  Action
>(
  when(
    { condition: s => typeof s.path === 'string' },
    div(
      { attrs: { class: 'is-pulled-right' } },
      a(
        { attrs: { href: s => s.path } },
        '✏️ edit this content'
      )
    )
  ),
  when(
    { condition: s => typeof s === 'string' },
    s => s.title
  ),
  unsafeHtml({ content: s => s.html })
)
