import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
import { Action } from '../action'
import { fragment } from 'tempo-dom/lib/fragment'
import { when } from 'tempo-dom/lib/when'

export const htmlContent = fragment<{ title: string | undefined, html: string }, Action>(
  when(
    { condition: s => typeof s === 'string' },
    s => s.title
  ),
  unsafeHtml({ content: s => s.html })
)
