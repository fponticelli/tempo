import './style.sass'

import { Tempo } from 'tempo-dom/lib/tempo'
import { Store } from 'tempo-store/lib/store'
import { makeState } from './state'
import { reducer } from './reducer'
import { template } from './template'
import { middleware } from './middleware'
import { parseUrl } from './route'
import { Action } from './action'
import { State } from './state'

const parseLocation = () => {
  const url = location.pathname.split('/').pop() + location.hash
  return parseUrl(url)
}

const store = Store.ofState<State, Action>({
  state: makeState(parseLocation()),
  reducer
})

Tempo.render({ store, template })

store.observable.on(middleware(store))

window.addEventListener('popstate', e => {
  const route = parseLocation()
  store.process(Action.goTo(route))
})

store.process(Action.requestToc)
store.process(Action.requestPageContent)
