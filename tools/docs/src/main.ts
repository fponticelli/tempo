import './style.sass'

import { Tempo } from 'tempo-dom/lib/tempo'
import { Store } from 'tempo-store/lib/store'
import { makeState } from './state'
import { reducer } from './reducer'
import { template } from './template'
import { middleware } from './middleware'

const url = location.pathname.split('/').pop() + location.hash

const store = Store.ofState({ state: makeState(url), reducer })

Tempo.render({ store, template })

store.observable.on(middleware(store))

store.process({ kind: 'RequestToc' })
