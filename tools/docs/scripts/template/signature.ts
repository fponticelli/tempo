import { PRE } from 'tempo-dom/lib/html'
import { unsafeHtml } from 'tempo-dom/lib/lifecycle/unsafe_html'
import Prism from 'prismjs'
const loadLanguages: any = require('prismjs/components/')
loadLanguages(['typescript'])

export const signature = PRE<string, unknown, unknown>($ =>
  $.class('ts language-ts signature').Lifecycle(
    unsafeHtml(s =>
      Prism.highlight(s, (Prism.languages as any).typescript, 'typescript')
    )
  )
)
