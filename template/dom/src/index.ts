import { Tempo } from 'tempo-dom/lib/tempo'
import { main as template } from './template/main'
import { initialState as state } from './app/state'
import { reducer } from './app/reducer'

Tempo.render({
  state,
  reducer,
  template
})
