import { Tempo } from '@tempo/dom/lib/tempo'
import { Store } from '@tempo/store/lib/store'
import { template } from './templates/app'
import { reducer } from './reducer'
import { createState, Page } from './state'
import { Route } from './route'
import { middleware, setTitle } from './middleware'
import { Action } from './action'
import { getCurrentPath } from './config'

const route = Route.fromUrl(getCurrentPath())

console.log(route)

const state = createState(
  Route.root,
  Page.loading
)

const store = Store.ofState({
  state,
  reducer
})

document.body.innerHTML = ''
Tempo.render({ store, template })

setTitle(state)

store.property.observable.on(setTitle)
store.observable.on(middleware(store))

store.process(Action.linkClicked(route))

window.addEventListener('popstate', (event) => {
  const route = Route.fromUrl(getCurrentPath())
  store.process(Action.linkClicked(route))
})
