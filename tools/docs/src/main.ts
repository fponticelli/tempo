import './style.sass'

import { Tempo } from 'tempo-dom/lib/tempo'
import { makeState } from './state'
import { reducer } from './reducer'
import { template } from './templates/main'
import { middleware } from './middleware'
import { contentFromRoute, parseLocation } from './route'
import { Action } from './action'
import { State } from './state'
import { isSuccess } from 'tempo-std/lib/async_result'

const route = parseLocation()
const state = makeState(route)

const { store } = Tempo.render({ state, reducer, template })

store.observable.on(middleware(store))

window.addEventListener('popstate', e => {
  const route = parseLocation()
  store.process(Action.goTo(route))
})

const triggerFirstContentLoad = (state: State, action: Action) => {
  if (action.kind === 'LoadedToc' && isSuccess(action.toc)) {
    store.observable.off(triggerFirstContentLoad)
    contentFromRoute(store, action.toc.value.value, route)
  }
}

store.observable.on(triggerFirstContentLoad)

store.process(Action.requestToc)
// store.process(Action.requestPageContent)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
  })
}
