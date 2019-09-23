import { State, Filter } from './state'

const STORE_KEY = 'todomvc-mood'

export class Store {
  static get(): State {
    const store = localStorage.getItem(STORE_KEY)
    return (
      (store && JSON.parse(store)) || {
        filter: Filter.All,
        todos: []
      }
    )
  }

  static set(data: State) {
    return localStorage.setItem(STORE_KEY, JSON.stringify(data))
  }
}
