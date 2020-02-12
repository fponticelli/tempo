import { Action } from '../action'
import { ProjectRef } from '../toc'
import { div, p, a, span, article } from 'tempo-dom/lib/html'
import { mapState } from 'tempo-dom/lib/map'
import { when } from 'tempo-dom/lib/when'
import { forEach } from 'tempo-dom/lib/for_each'
import { Route } from '../route'
import { link } from './link'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'

export const projectContent = article<ProjectRef, Action>(
  { attrs: { class: '' } },
  div(
    { attrs: { class: '' } },
    p({ attrs: { class: 'title' } }, s => s.title),
    p({ attrs: { class: 'subtitle' } }, s => s.description),
    mapState<ProjectRef, string[], Action>(
      { map: p => p.keywords },
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
            href: s => `https://www.npmjs.com/package/tempo-${s.name}`,
            target: '_blank'
          }
        },
        'npm v.',
        s => s.version
      ),
      ' (',
      a(
        { attrs: {} },
        link({
          label: 'change log',
          route: p => Route.changelog(p.name)
        })
      ),
      ')'
    ),
    unsafeHtml({
      content: s => s.content
    })
  )
)

// maybeLink(
//   ([s]) => `v.${s.version}`,
//   ([p, s]) =>
//     projectChangelogMatchesRoute(p, s.route)
//       ? none
//       : some(Route.changelog(p.name)),
//   'is-pulled-right is-size-7'
// ),
