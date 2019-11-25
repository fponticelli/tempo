import { Action } from '../action'
import { Route, toUrl, Feed, toTitle } from '../route'
import { a, header, i, nav, span } from '@tempo/dom/lib/html'
import { g, svg, rect } from '@tempo/dom/lib/svg'
import { when, unless } from '@tempo/dom/lib/when'

const logo = svg<Route, Action>(
    { attrs: { width: 32, height: 32, viewBox: `0 0 32 32` } },
    g(
      { styles: { fill: 'none' } },
      rect({ attrs: { x: 0,  y: 0,  fill: '#ffffff', width: 8, height: 8 } }),
      rect({ attrs: { x: 11, y: 0,  fill: '#ffffff', width: 8, height: 8 } }),
      rect({ attrs: { x: 22, y: 0,  fill: '#ffffff', width: 8, height: 8 } }),
      rect({ attrs: { x: 11, y: 11, fill: '#ffffff', width: 8, height: 8 } }),
      rect({ attrs: { x: 11, y: 22, fill: '#ffffff', width: 8, height: 8 } })
    )
  )

const headerLink = (feed: Feed) => {
  const condition = (route: Route) => {
    switch (route.kind) {
      case 'feeds-route': return route.feed === feed
      default: return false
    }
  }
  return span<Route, Action>( // TODO need empty container?
    {},
    when(
      { condition },
      span(
        { attrs: { 'aria-current': 'page' } },
        toTitle(Route.feeds(feed, 1))
      )
    ),
    unless(
      { condition },
      a(
        { attrs: { href: toUrl(Route.feeds(feed, 1)) } },
        toTitle(Route.feeds(feed, 1))
      )
    )
  )
}

export const appHeader = header<Route, Action>(
  {},
  a(
    { attrs: { href: toUrl(Route.root()) } },
    i(
      { attrs: { 'aria-label': 'Homepage', className: 'logo' } },
      logo
    )
  ),
  nav(
    {},
    ...[ Feed.top, Feed.new, Feed.ask, Feed.show, Feed.jobs ].map(headerLink)
  ),
  a(
    { attrs: { className: 'githublink', href: 'https://github.com/fponticelli/mood2', target: '_blank', rel: 'noopener' } },
    'About'
  )
)
