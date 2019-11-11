import { Action } from '../action'
import { Route, toUrl, Feed, toTitle } from '../route'
import { html, svg } from '@mood/dom/lib/web'
import { when, unless } from '@mood/dom/lib/when'

const logo = svg.svg<Route, Action>(
    { width: '26', height: '26', viewBox: '0 0 26 26' },
    svg.g(
      { '$fill': 'none' },
      svg.path({ '$fill': '#ffffff', d: 'M2 2v6h6v-6h-6' } as any), // TODO
      svg.path({ '$fill': '#ffffff', d: 'M18 2v6h6v-6h-6' } as any), // TODO
      svg.path({ '$fill': '#ffffff', d: 'M2 10v6h6v-6h-6' } as any), // TODO
      svg.path({ '$fill': '#ffffff', d: 'M18 10v6h6v-6h-6' } as any), // TODO
      svg.path({ '$fill': '#ffffff', d: 'M2 18v6h6v-6h-6' } as any), // TODO
      svg.path({ '$fill': '#ffffff', d: 'M18 18v6h6v-6h-6' } as any), // TODO
      svg.path({ '$fill': '#ffffff', d: 'M10 4v6h6v-6h-6' } as any) // TODO
    )
  )

const headerLink = (feed: Feed) => {
  const condition = (route: Route) => {
    switch (route.kind) {
      case 'feeds-route': return route.feed === feed
      default: return false
    }
  }
  return html.span<Route, Action>( // TODO need empty container?
    {},
    when(
      { condition },
      html.span(
        { 'aria-current': 'page' } as any, // TODO
        toTitle(Route.feeds(feed, 1))
      )
    ),
    unless(
      { condition },
      html.a(
        { href: toUrl(Route.feeds(feed, 1)) },
        toTitle(Route.feeds(feed, 1))
      )
    )
  )
}

export const appHeader = html.header<Route, Action>(
  {},
  html.a(
    { href: toUrl(Route.root()) },
    html.i(
      { 'aria-label': 'Homepage', className: 'logo' } as any, // TODO
      logo
    )
  ),
  html.nav(
    {},
    ...([ Feed.top, Feed.new, Feed.ask, Feed.show, Feed.jobs ].map(headerLink)
  ),
  html.a(
    { className: 'githublink', href: 'https://github.com/fponticelli/mood2', target: '_blank', rel: 'noopener' },
    'About'
  )
)
