import { Action } from '../action'
import { DemoRef } from '../toc'
import { div, p, a } from 'tempo-dom/lib/html'
import { forEach } from 'tempo-dom/lib/for_each'

const demo = div<DemoRef, Action>(
  { attrs: { class: 'tile is-parent tile-width' } },
  div(
    { attrs: { class: 'tile is-child box' } },
    p(
      { attrs: { class: 'title is-5' } },
      a({ attrs: { href: s => `demo/${s.path}/` } }, s => s.title)
    ),
    p({ attrs: { class: 'description' } }, s => s.description)
  )
)

export const demosContent = div<DemoRef[], Action>(
  {},
  p({ attrs: { class: 'title' } }, 'Demos'),
  div({ attrs: { class: 'tile is-ancestor wrap' } }, forEach({}, demo))
)
