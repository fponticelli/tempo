import { mapState } from '@mood/dom/lib/map'
import { html } from '@mood/dom/lib/web'
import { State } from '../state'
import { Action } from '../action'
import { appHeader } from './header'
import { page } from './page'
const { main, section } = html

export const template = main<State, Action>(
  {},
  mapState(
    { map: state => state.route },
    appHeader
  ),
  section(
    { id: 'content' },
    mapState(
      { map: state => state.page },
      page
    )
  )
)
