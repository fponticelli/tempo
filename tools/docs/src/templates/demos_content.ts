import { Action } from '../action'
import { DemoRef } from '../toc'
import { div, p, a } from 'tempo-dom/lib/html'
import { forEach } from 'dom/lib/impl/for_each'

function demoSrc(path: string) {
  return `https://github.com/fponticelli/tempo/tree/master/demo/${path}`
}

const demo = div<DemoRef, Action>(
  { attrs: { class: 'tile is-parent tile-width' } },
  div(
    { attrs: { class: 'tile is-child box' } },
    p(
      { attrs: { class: 'title is-5' } },
      a({ attrs: { href: s => `demo/${s.path}/` } }, s => s.title)
    ),
    p({ attrs: { class: 'description' } }, s => s.description),
    p(
      { attrs: { class: 'source' } },
      a({ attrs: { href: s => demoSrc(s.path) } }, 'source code')
    )
  )
)

export const demosContent = div<DemoRef[], Action>(
  {},
  p({ attrs: { class: 'title' } }, 'Demos'),
  div({ attrs: { class: 'tile is-ancestor wrap' } }, forEach({}, demo))
)
