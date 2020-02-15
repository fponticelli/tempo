import { pre } from 'tempo-dom/lib/html'
import Prism from 'prismjs'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
const loadLanguages: any = require('prismjs/components/')
loadLanguages(['typescript'])

export const signature = pre<string, unknown>(
  { attrs: { class: 'ts language-ts signature' }},
  unsafeHtml({
    content: s => Prism.highlight(s, Prism.languages.typescript, 'typescript')
  })
)
