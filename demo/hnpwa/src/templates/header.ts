import { Action } from '../action'
import { Route, toUrl, Feed, toTitle } from '../route'
import { a, header, i, nav, span } from '@tempo/dom/lib/html'
import { g, path, svg } from '@tempo/dom/lib/svg'
import { when, unless } from '@tempo/dom/lib/when'

const logo = svg<Route, Action>(
    { attrs: { width: '26', height: '26', viewBox: '0 0 26 26' } },
    g(
      { styles: { fill: 'none' } },
      path({ styles: { fill: '#ffffff', d: 'M2 2v6h6v-6h-6' } }),
      path({ styles: { fill: '#ffffff', d: 'M18 2v6h6v-6h-6' } }),
      path({ styles: { fill: '#ffffff', d: 'M2 10v6h6v-6h-6' } }),
      path({ styles: { fill: '#ffffff', d: 'M18 10v6h6v-6h-6' } }),
      path({ styles: { fill: '#ffffff', d: 'M2 18v6h6v-6h-6' } }),
      path({ styles: { fill: '#ffffff', d: 'M18 18v6h6v-6h-6' } }),
      path({ styles: { fill: '#ffffff', d: 'M10 4v6h6v-6h-6' } })
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
