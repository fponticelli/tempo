import { Action } from '../action'
import { DemoRef } from '../toc'
import { div, p } from 'tempo-dom/lib/html'
import { forEach } from 'tempo-dom/lib/for_each'
import { Route } from '../route'
import { link } from './link'

const demo = div<DemoRef, Action>(
  { attrs: { class: 'tile is-parent' } },
    div(
      { attrs: { class: 'tile is-child box' } },
      p(
        { attrs: { class: 'title is-5' } },
        link(s => s.title, s => Route.demo(s.path)),
      ),
      p(
        { attrs: { class: 'content' }},
        s => s.description
      )
    )
  )

export const demosContent = div<DemoRef[], Action>(
  { attrs: { class: 'tile is-ancestor wrap' } },
  forEach(
    {},
    demo
  )
)
