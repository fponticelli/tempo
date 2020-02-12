import { Converter } from 'showdown'
import { JSDOM } from 'jsdom'
import Prism from 'prismjs'
import fm from 'front-matter'
import { trimChars } from 'tempo-std/lib/strings'

const loadLanguages: any = require('prismjs/components/')
loadLanguages(['typescript'])

const converter = new Converter({
  parseImgDimensions: true,
  strikethrough: true,
  tables: true,
  tasklists: true
})

const renameHtml = (path: string) => {
  const hasLeadingHash = path.startsWith('#')
  const parts = path.split('#').filter(a => !!a)
  if (!parts[0].endsWith('.html')) return path
  function processPart(part: string) {
    return part.split('.').map(p => trimChars(p, '_')).join('.')
  }
  const res = parts[0].split('/').map(processPart).join('/')
  return (hasLeadingHash ? [''] : []).concat([res].concat(parts.slice(1))).join('#')
}

export const markdown = (content: string, anchorMangler: (s: string) => string) => {
  const rawHtml = converter.makeHtml(content)
  const dom = new JSDOM(rawHtml)
  const codes = dom.window.document.querySelectorAll('.language-ts')
  for (let i = 0; i < codes.length; i++) {
    const code = codes[i]
    code.parentElement?.classList.add('language-ts')
    code.innerHTML = Prism.highlight(code.textContent || '', Prism.languages.typescript, 'typescript')
  }

  const anchors = dom.window.document.querySelectorAll('a')
  for (let i = 0; i < anchors.length; i++) {
    const a = anchors[i]
    const href = a.href
    if (href.startsWith('http:') || href.startsWith('https:')) continue
    a.href = renameHtml(anchorMangler(href))
  }

  return dom.window.document.body.innerHTML
}

export const markdownWithFM = (content: string, anchorMangler: (s: string) => string) => {
  const parsed = fm(content)
  const html = markdown(parsed.body, anchorMangler)
  return {
    html,
    data: parsed.attributes as any
  }
}
