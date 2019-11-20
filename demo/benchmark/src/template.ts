import { div, button } from '@tempo/dom/lib/html'
import { State } from './state'
import { Action } from './action'
import { optionsSelection } from './template/options_selection'
import { mapState } from '@tempo/dom/lib/map'
import { tableView } from './template/table_view'
import { header } from './template/header'

export const template = div<State, Action>(
  { attrs: { className: 'display_test' } },
  header,
  mapState(
    { map: state => state.options },
    optionsSelection
  ),
  tableView
)
