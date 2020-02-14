import Prism from 'prismjs'

const loadLanguages: any = require('prismjs/components/')
loadLanguages(['typescript'])

export const highlight = (code: string) => {
  return Prism.highlight(code, Prism.languages.typescript, 'typescript')
}
