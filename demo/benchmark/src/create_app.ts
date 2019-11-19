import { reducer } from './reducer'
import { template } from './template'
import { State } from './state'
import { Store } from '@tempo/store/lib/store'
import { Tempo } from '@tempo/dom/lib/tempo'
import { middleware } from './middleware'

export const createApp = (state: State) => {
  const store = Store.ofState({ state, reducer })

  const el = document.getElementById('app')!

  const app = Tempo.render({ store, template, el })

  app.store.observable.on(middleware(app))
}
