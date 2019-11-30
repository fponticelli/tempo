import { section, nav, div, span } from '@tempo/dom/lib/html'
import { Feed, maxPage, Route } from '../route'
import { Action } from '../action'
import { matchBool } from '@tempo/dom/lib/match'
import { linkRoute } from './link_route'
import { mapState } from '@tempo/dom/lib/map'
import { forEach } from '@tempo/dom/lib/for_each'

const paginationDesktop = matchBool<{ feed: Feed; page: number; current: number }, Action>({
  condition: state => state.page === state.current,
  true: span({ attrs: { 'aria-current': 'page' } }, state => `${state.page}`),
  false: linkRoute({ route: state => Route.feeds(state.feed, state.page) }, state => String(state.page))
})

const previousPageLink = section<{ feed: Feed; page: number }, Action>(
  {},
  matchBool({
    condition: state => state.page === 1,
    true: span({ attrs: { class: 'inactive' } }, 'Previous'),
    false: linkRoute({ route: state => Route.feeds(state.feed, state.page - 1) }, 'Previous')
  })
)

const nextPageLink = section<{ feed: Feed; page: number }, Action>(
  {},
  matchBool({
    condition: state => maxPage(state.feed) === state.page,
    true: span({ attrs: { className: 'inactive' } }, 'Next'),
    false: linkRoute({ route: state => Route.feeds(state.feed, state.page + 1) }, 'Next')
  })
)

const pageRange = (feed: Feed, current: number): { feed: Feed; current: number; page: number }[] => {
  const arr = new Array(maxPage(feed)).fill({ feed, current, page: 0 }).map((o, i) => ({ ...o, page: i + 1 }))
  return arr
}

export const paginationTemplate = section<{ feed: Feed; page: number }, Action>(
  {
    attrs: { className: 'pagination' }
  },
  previousPageLink,
  nav({}, mapState({ map: state => pageRange(state.feed, state.page) }, forEach({}, paginationDesktop))),
  div(
    { attrs: { className: 'mobile' } },
    span({}, state => `${state.page}`),
    span({}, '/'),
    span({}, state => `${maxPage(state.feed)}`)
  ),
  nextPageLink
)
