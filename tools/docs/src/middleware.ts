import { State, Content } from './state'
import { Action } from './action'
import { loadJson, loadText } from './request'
import { Store } from 'tempo-store/lib/store'
import { outcome } from 'tempo-std/lib/async'
import { forEach } from 'tempo-std/lib/async_result'
import { Toc } from './toc'
import { HttpError } from './request'
import { Result, map } from 'tempo-std/lib/result'
import {
  toContentUrl,
  contentFromRoute,
  sameRoute,
  toUrlForAnalytics
} from './route'
import { each } from 'tempo-std/lib/option'
import { splitOnLast } from 'tempo-std/lib/strings'

declare const ga: any

export const scrollTo = () => {
  const ref = location.hash.split('#').pop()
  if (ref) {
    const refEl = document.getElementById(ref)
    let el: null | HTMLElement = refEl
    while (el && !el?.classList.contains('scrollable')) {
      el = el.parentElement
    }
    if (refEl && el && el.parentElement) {
      el.scrollTop = refEl.offsetTop - el.offsetTop
      // el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
    }
  }
}

const urlToGitHubContent = (url: string) => {
  if (url.startsWith('pages/')) {
    const path = splitOnLast(url, '.')[0] + '.md'
    return `https://github.com/fponticelli/tempo/edit/master/${path}`
  } else {
    return undefined
  }
}

export const middleware = (store: Store<State, Action>) => (
  state: State,
  action: Action,
  prev: State
) => {
  // console.log(state, action)
  switch (action.kind) {
    case 'RequestToc':
      loadJson('toc.json').then(json => {
        const toc = map(json as Result<Toc, HttpError>, t => ({
          ...t,
          pages: t.pages.filter(p => p.path !== 'index.html')
        }))
        store.process(Action.loadedToc(outcome(toc)))
      }) // TODO parse Toc
      break
    case 'RequestPageContent':
      each((url: string) => {
        loadText(url).then((htmlResult: Result<string, HttpError>) =>
          store.process(
            Action.loadedContent(
              outcome(
                map(htmlResult, h =>
                  Content.htmlPage(undefined, h, urlToGitHubContent(url))
                )
              )
            )
          )
        )
      }, toContentUrl(state.route))
      break
    case 'LoadedContent':
      scrollTo()
      break
    case 'GoTo':
      if (!sameRoute(action.route, prev.route)) {
        const path = toUrlForAnalytics(action.route)
        if (ga) {
          ga('set', 'page', path)
          ga('send', 'pageview')
        }
        forEach(state.toc, toc => contentFromRoute(store, toc, action.route))
      } else {
        scrollTo()
      }
      break
  }
}
