import { pre } from 'tempo-dom/lib/html'
import Prism from 'prismjs'
const loadLanguages: any = require('prismjs/components/')
loadLanguages(['typescript'])

export const signature = pre<string, unknown>(
  { attrs: { class: 'ts language-ts signature' } },
  unsafeHtml({}, s =>
    Prism.highlight(s, Prism.languages.typescript, 'typescript')
  )
)
