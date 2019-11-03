import { Mood } from '@mood/dom'
import { Store } from '@mood/store'
import { DataStore } from './data_store'
import { reducer } from './reducer'
import { template } from './app_view'

const state = DataStore.get()

const store = Store.ofState({ state, reducer })

store.observable.on((_, action) => console.log(action))

Mood.render({ store, template })
