import { Converter } from 'showdown'
import 'prismjs'

const loadLanguages: any = require('prismjs/components/')
loadLanguages(['typescript'])

const converter = new Converter({
  parseImgDimensions: true,
  strikethrough: true,
  tables: true,
  tasklists: true
})

export const markdown = (content: string) => {
  return converter.makeHtml(content)
}
