import './style.sass'

import { Tempo } from 'tempo-dom/lib/tempo'
import { Store } from 'tempo-store/lib/store'
import { state } from './state'
import { reducer } from './reducer'
import { template } from './template'

const store = Store.ofState({ state, reducer })

Tempo.render({ store, template })
