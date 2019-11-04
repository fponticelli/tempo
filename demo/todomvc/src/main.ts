import { Mood } from '@mood/dom'
import { Store, debounce } from '@mood/store'
import { DataStore } from './data_store'
import { reducer } from './reducer'
import { template } from './app_view'
import { State } from './state'

const state = DataStore.get()

const store = Store.ofState({ state, reducer })

const saveToDataStore = debounce(250)((state: State) => DataStore.set(state))

store.property.observable.on(saveToDataStore)

store.observable.on((_, action) => console.log(action))

Mood.render({ store, template })
