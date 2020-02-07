import { matchKind } from 'tempo-std/lib/match'
import { deepEqual } from 'tempo-std/lib/equals'
import { Option, some, none, getUnsafe } from 'tempo-std/lib/option'
import { PageRef, Toc } from './toc'
import { ProjectRef } from './toc'
import { Store } from 'tempo-store/lib/store'
import { State, Content } from './state'
import { Action } from './action'
import { success } from 'tempo-std/lib/async_result'

export type Route =
  | { kind: 'Page', path: string }
  | { kind: 'Demos' }
  | { kind: 'Demo', path: string }
  | { kind: 'Api', name: string, path: string }
  | { kind: 'Changelog', name: string }
  | { kind: 'NotFound', path: string }
  | { kind: 'Home' }

export const toHref = matchKind<Route, string>({
  Home: _ => '',
  Demos: o => `#/demo`,
  Demo: o => `#/demo/${o.path}`,
  Page: o => `#/page/${o.path}`,
  Api: o => `#/api/${o.name}/${o.path}`,
  NotFound: o => o.path,
  Changelog: o => `#/changelog/${o.name}`
})

export const toContentUrl = matchKind<Route, Option<string>>({
  Home: _ => some('pages/index.html'),
  Api: o => some(`api/${o.name}/${o.path}`),
  Demos: _ => none,
  Demo: o => some(`demo/${o.path}`),
  Page: o => some(`pages/${o.path}`),
  NotFound: _ => none,
  Changelog: o => some(`changelog/${o.name}.html`)
})

export const Route = {
  home: ({ kind: 'Home' }) as Route,
  api: (name: string, path: string): Route => ({ kind: 'Api', name, path }),
  demos: ({ kind: 'Demos' }) as Route,
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
    } else if (url === '/demo') {
      return Route.demos
    } else if (url.startsWith('/demo/')) {
      return Route.demo(url.substring(6))
    } else if (url.startsWith('/page/')) {
      return Route.page(url.substring(6))
    } else if (url.startsWith('/changelog/')) {
      return Route.page(url.substring(11))
    } else {
      return Route.notFound(url)
    }
  }
}

export const isApiProjectRoute = (route: Route, name: string) => {
  return route.kind === 'Api' && route.name === name || route.kind === 'Changelog' && route.name === name
}

export const contentFromRoute = (store: Store<State, Action>, toc: Toc, route: Route) => {
  if (route.kind === 'Demo') {
    location.href = getUnsafe(toContentUrl(route))
  } else if (route.kind === 'Demos') {
    store.process(Action.loadedContent(success(Content.demos(toc.demos))))
  } else {
    store.process(Action.requestPageContent)
  }
}

export const parseLocation = () => {
  const url = location.pathname.split('/').pop() + location.hash
  return parseUrl(url)
}
