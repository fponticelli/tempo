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

const url = location.pathname.split('/').pop() + location.hash
const route = parseUrl(url)

const store = Store.ofState<State, Action>({ state: makeState(route), reducer })

Tempo.render({ store, template })

store.observable.on(middleware(store))

store.process(Action.requestToc)
store.process(Action.requestPageContent)
