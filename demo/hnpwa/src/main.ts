import { Mood } from '@mood/dom/lib/mood'
import { Store } from '@mood/store/lib/store'
import { template } from './templates/app'
import { reducer } from './reducer'
import { state as createState, emptyCache, loading, State } from './state'
import { Route, toTitle } from './route'

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
Mood.render({ store, template })

const setTitle = (state: State) => {
  const title = ((page) => {
    switch (page.kind) {
      case 'article': return page.item.title
      case 'profile': return page.user.id
      default: return  toTitle(state.route)
    }
  })(state.page)
  document.title = `${title} | Mood HNPWA`
}

setTitle(state)

store.property.observable.on(setTitle)
