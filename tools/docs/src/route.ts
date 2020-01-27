import { matchKind } from 'tempo-std/lib/match'
import { deepEqual } from 'tempo-std/lib/equals'
import { Option, some, none } from 'tempo-std/lib/option'
import { PageRef } from './toc'
import { ProjectRef } from './toc'

export type Route =
  | { kind: 'Page', path: string }
  | { kind: 'Demo', path: string }
  | { kind: 'Api', name: string, path: string }
  | { kind: 'Changelog', name: string }
  | { kind: 'NotFound', path: string }
  | { kind: 'Home' }

export const toHref = matchKind<Route, string>({
  Home: _ => '',
  Demo: o => `#/demo/${o.path}`,
  Page: o => `#/page/${o.path}`,
  Api: o => `#/api/${o.name}/${o.path}`,
  NotFound: o => o.path,
  Changelog: o => `#/changelog/${o.name}`
})

export const toContentUrl = matchKind<Route, Option<string>>({
  Home: _ => some('pages/index.html'),
  Api: o => some(`api/${o.name}/${o.path}`),
  Demo: o => some(`demo/${o.path}`),
  Page: o => some(`pages/${o.path}`),
  NotFound: _ => none,
  Changelog: o => some(`changelog/${o.name}.html`)
})

export const Route = {
  home: ({ kind: 'Home' }) as Route,
  api: (name: string, path: string): Route => ({ kind: 'Api', name, path }),
  demo: (path: string): Route => ({ kind: 'Demo', path }),
  page: (path: string): Route => {
    if (path === 'index.html')
      return Route.home
    else
      return { kind: 'Page', path }
  },
  changelog: (name: string): Route => ({ kind: 'Changelog', name }),
  notFound: (path: string): Route => ({ kind: 'NotFound', path })
}

export type Link = {
  label: string
  route: Option<Route>
}

// export const pageToLink = (page: PageRef, active: Boolean): Link => {
//   return ({ label: page.title, route: active ? none : some(Route.page(page.path)) })
// }

export const pageToRoute = (page: PageRef): Route => {
  return Route.page(page.path)
}

export const sameRoute = (a: Route, b: Route) => deepEqual(a, b)

export const pageMatchesRoute = (p: PageRef, r: Route) => {
  return sameRoute(Route.page(p.path), r)
}

export const projectChangelogMatchesRoute = (p: ProjectRef, r: Route) => {
  return sameRoute(Route.changelog(p.name), r)
}

export const apiMatchesRoute = (name: string, path: string, r: Route) => {
  return sameRoute(Route.api(name, path), r)
}

export const parseUrl = (url: string): Route => {
  if (url === '' || url === 'index.html') {
    return Route.home
  } else {
    const parts = url.substring(1).split('#')
    url = parts[0]
    if (url.startsWith('/api/')) {
      const parts = url.substring(5).split('/')
      const name = parts.shift()!
      const path = parts.join('/')
      return Route.api(name, path)
    } else if (url.startsWith('/page/')) {
      return Route.page(url.substring(6))
    } else if (url.startsWith('/changelog/')) {
      return Route.page(url.substring(11))
    } else {
      return Route.notFound(url)
    }
  }
}
