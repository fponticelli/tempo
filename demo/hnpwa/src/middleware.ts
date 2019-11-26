import { State } from './state'
import { Action } from './action'
import { toTitle } from './route'

export const setTitle = (state: State) => {
  const title = ((page) => {
    switch (page.kind) {
      case 'Article': return page.item.title
      case 'Profile': return page.user.id
      default: return  toTitle(state.route)
    }
  })(state.page)
  document.title = `${title} | Tempo HNPWA`
}

export const middleware = (state: State, action: Action) => {
  switch (action.kind) {
    case 'LinkClicked':
      if (action.isInternal) {
        window.history.pushState({}, '', action.url)
      } else {
        window.location.assign(action.url)
      }
      break
    default:
  }
}
