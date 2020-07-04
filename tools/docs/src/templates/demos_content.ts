import { Action } from '../action'
import { DemoRef } from '../toc'
import { div } from 'tempo-dom/lib/html'

function demoSrc(path: string) {
  return `https://github.com/fponticelli/tempo/tree/master/demo/${path}`
}

const demo = div<DemoRef, Action, unknown>($ =>
  $.class('tile is-parent tile-width')
    .div($ =>
      $.class('tile is-child box').p($ =>
        $.class('title is-5').a($ =>
          $.href(s => `demo/${s.path}/`).text(s => s.title)
        )
      )
    )
    .p($ => $.class('description').text(s => s.description))
    .p($ =>
      $.class('source').a($ => $.href(s => demoSrc(s.path)).text('source code'))
    )
)

export const demosContent = div<DemoRef[], Action, unknown>($ =>
  $.p($ => $.class('title').text('Demos')).div($ =>
    $.class('tile is-ancestor wrap').forEach($ => $.append(demo))
  )
)
