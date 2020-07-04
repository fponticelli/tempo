import { pre } from 'tempo-dom/lib/html'
import { unsafeHtml } from 'tempo-dom/lib/lifecycle/unsafe_html'
import Prism from 'prismjs'
const loadLanguages: any = require('prismjs/components/')
loadLanguages(['typescript'])

export const signature = pre<string, unknown, unknown>($ =>
  $.class('ts language-ts signature').lifecycle(
    unsafeHtml(s =>
      Prism.highlight(s, Prism.languages.typescript, 'typescript')
    )
  )
)
