import { Tempo } from '@tempo/dom/lib/tempo'
import { Store } from '@tempo/store/lib/store'
import { template } from './templates/app'
import { reducer } from './reducer'
import { createState, emptyCache, loading } from './state'
import { Route } from './route'
import { middleware, setTitle } from './middleware'

const state = createState(
  Route.root(),
  emptyCache(),
  loading
)

const store = Store.ofState({
  state,
  reducer
})

document.body.innerHTML = ''
Tempo.render({ store, template })

setTitle(state)

store.property.observable.on(setTitle)
store.observable.on(middleware)
