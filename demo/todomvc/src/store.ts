import { State, Filter } from './state'

export class Store {
  static get(namespace: string): State {
    const store = localStorage.getItem(namespace)
    return (store && JSON.parse(store)) || {
      filter: Filter.All,
      todos: []
    }
  }

  static set(namespace: string, data: State) {
    return localStorage.setItem(namespace, JSON.stringify(data))
  }
}
