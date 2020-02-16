import { Action } from '../action'
import { ProjectRef } from '../toc'
import { div, p, a, span, article, img, br, h1 } from 'tempo-dom/lib/html'
import { mapField } from 'tempo-dom/lib/map'
import { when } from 'tempo-dom/lib/when'
import { forEach } from 'tempo-dom/lib/for_each'
import { Route } from '../route'
import { link } from './link'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'

function renamePackage(s: string) {
  if (s === 'paperjs')
    return 'paper'
  else
    return s
}

export const projectContent = article<ProjectRef, Action>(
  { attrs: { class: 'content' } },
  h1({ attrs: { class: 'title' } }, s => s.title),
  p({ attrs: { class: 'subtitle' } }, s => s.description),
  mapField<ProjectRef, 'keywords', Action>(
    { field: 'keywords' },
    when(
      { condition: tags => tags.length > 0 },
      div(
        { attrs: { class: 'tags' } },
        forEach(
          {},
          span({ attrs: { class: 'tag' } }, s => s)
        )
      )
    )
  ),
  p(
    { attrs: { class: 'version' } },
    a(
      {
        attrs: {
          href: s => `https://www.npmjs.com/package/tempo-${renamePackage(s.name)}`
        }
      },
      img({
        attrs: {
          src: s =>
            `https://img.shields.io/npm/v/tempo-${renamePackage(s.name)}?label=npm%3A%20tempo-${renamePackage(s.name)}`,
          alt: s => `npm tempo ${s.name}`
        }
      })
    ),
    br({}),
    a(
      { attrs: {} },
      link({
        label: 'change log',
        route: p => Route.changelog(p.name)
      })
    )
  ),
  unsafeHtml({
    content: s => s.content
  })
)
