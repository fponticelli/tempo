import { mapState } from '@tempo/dom/lib/map'
import { main, section } from '@tempo/dom/lib/html'
import { State } from '../state'
import { Action } from '../action'
import { appHeader } from './header'
import { pageTemplate } from './page'

export const template = main<State, Action>(
  {},
  mapState({ map: state => state.route }, appHeader),
  section({ attrs: { id: 'content' } }, mapState({ map: state => state.page }, pageTemplate))
)
