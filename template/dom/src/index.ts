import { Tempo } from 'tempo-dom/lib/tempo'
import { Store } from 'tempo-store/lib/store'
import { main as template } from './template/main'
import { initialState as state } from './app/state'
import { reducer } from './app/reducer'

const store = Store.ofState({
  state,
  reducer
})

Tempo.render({
  store,
  template
})
