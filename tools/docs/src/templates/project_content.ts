import { Action } from '../action'
import { ProjectRef } from '../toc'
import { article } from 'tempo-dom/lib/html'
import { Route } from '../route'
import { link } from './link'
import { unsafeHtml } from 'dom/lib/lifecycle/unsafe_html'

function renamePackage(s: string) {
  return s
}

export const projectContent = article<ProjectRef, Action, unknown>($ =>
  $.class('content').h1($ =>
    $.class('title')
      .text(s => s.title)
      .p($ => $.class('subtitile').text(s => s.description))
      .mapField('keywords', $ =>
        $.when(
          tags => tags.length > 0,
          $ =>
            $.div($ =>
              $.class('tags').forEach($ =>
                $.spanEl($ => $.class('tag').text(s => s))
              )
            )
        )
      )
      .p($ =>
        $.class('version')
          .a($ =>
            $.href(
              s =>
                `https://www.npmjs.com/package/tempo-${renamePackage(s.name)}`
            ).img($ =>
              $.src(
                s =>
                  `https://img.shields.io/npm/v/tempo-${renamePackage(
                    s.name
                  )}?label=npm%3A%20tempo-${renamePackage(s.name)}`
              ).alt(s => `npm tempo ${s.name}`)
            )
          )
          .br()
          .a($ =>
            $.append(
              link({
                label: 'change log',
                route: p => Route.changelog(p.name)
              })
            )
          )
      )
      .div($ => $.lifecycle(unsafeHtml(s => s.content)))
  )
)
