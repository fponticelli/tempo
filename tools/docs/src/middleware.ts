import { State } from './state'
import { Action } from './action'
import { loadJson, loadText } from './request'
import { Store } from 'tempo-store/lib/store'
import { outcome } from 'tempo-std/lib/async'
import { Toc } from './toc'
import { HttpError } from '../build/request'
import { Result, map } from 'tempo-std/lib/result'
import { toContentUrl } from './route'
import { each, getUnsafe } from 'tempo-std/lib/option'

export const middleware = (store: Store<State, Action>) => (
  state: State,
  action: Action
) => {
  switch (action.kind) {
    case 'RequestToc':
      loadJson('toc.json')
        .then((json) => {
          const toc = map(t => ({
            ...t,
            pages: t.pages.filter(p => p.path !== 'index.html')
          }), json as Result<Toc, HttpError>)
          store.process(Action.loadedToc(outcome(toc)))
        }) // TODO parse Toc
      break
    case 'RequestPageContent':
      each(
        (url: string) => {
          loadText(url).then(
            (content: Result<string, HttpError>) => store.process(Action.loadedPageContent(outcome(content)))
          )
        },
        toContentUrl(state.route)
      )
      break
    case 'GoTo':
      if (action.route.kind === 'Demo') {
        location.href = getUnsafe(toContentUrl(action.route))
      }
      store.process(Action.requestPageContent)
      break
  }
}
