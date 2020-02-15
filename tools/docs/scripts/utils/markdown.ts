import { Converter } from 'showdown'
import { JSDOM } from 'jsdom'
import fm from 'front-matter'
import { trimChars } from 'tempo-std/lib/strings'
import { highlight } from './highlight'

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

function getComments(el: Element) {
  const arr = [] as Node[]
  for (const i in el.childNodes) {
    const n = el.childNodes[i]
    if (n.nodeType === 8) {
      arr.push(n)
    } else if (n.nodeType === 1) {
      arr.push(...getComments(n as Element))
    }
  }
  return arr
}

export const markdown = (content: string, anchorMangler: (s: string) => string) => {
  const rawHtml = converter.makeHtml(content)
  const dom = new JSDOM(rawHtml)
  const codes = dom.window.document.querySelectorAll('.language-ts')
  for (let i = 0; i < codes.length; i++) {
    const code = codes[i]
    code.parentElement?.classList.add('language-ts')
    code.innerHTML = highlight(code.textContent || '')
  }

  const anchors = dom.window.document.querySelectorAll('a')
  for (let i = 0; i < anchors.length; i++) {
    const a = anchors[i]
    const href = a.href
    if (href.startsWith('http:') || href.startsWith('https:')) continue
    a.href = renameHtml(anchorMangler(href))
  }

  const comments = getComments(dom.window.document.body)
  const toDelete = [] as Node[]
  for (let comment of comments) {
    let next: ChildNode | null = comment as ChildNode
    toDelete.push(next)
    while (next = next.nextSibling) {
      if (next != null && next.nodeType === Node.TEXT_NODE) {
        toDelete.push(next)
      } else {
        break
      }
    }
  }
  toDelete.forEach(n => {
    n.parentElement?.removeChild(n)
  })

  let el = dom.window.document.body
  // while (el.childNodes.length === 1) {
  //   if (!el.firstElementChild) break
  //   el = el.firstElementChild as HTMLElement
  // }
  // console.log(el.nodeName)
  return el.innerHTML
}

export const markdownWithFM = (content: string, anchorMangler: (s: string) => string) => {
  const parsed = fm(content)
  const html = markdown(parsed.body, anchorMangler)
  return {
    html,
    data: parsed.attributes as any
  }
}
