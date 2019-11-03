import { Mood } from '@mood/dom'
import { Store } from '@mood/store'
import { DataStore } from './data_store'
import { reducer } from './reducer'
import { appView } from './app_view'

const store = Store.ofState({
  state: DataStore.get(),
  reducer
})

store.observable.on((state, action) => console.log(action))

Mood.renderComponent({
  component: appView(store)
})
