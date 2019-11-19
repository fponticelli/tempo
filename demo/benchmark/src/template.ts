import { div, button } from '@tempo/dom/lib/html'
import { State } from './state'
import { Action } from './action'
import { optionsSelection } from './template/options_selection'
import { mapState } from '@tempo/dom/lib/map'
import { testSelection } from './template/test_selection'
import { versionSelection } from './template/version_selection'

export const template = div<State, Action>(
  { attrs: { className: 'display_test' } },
  mapState(
    { map: state => state.options },
    optionsSelection
  ),
  mapState(
    { map: state => state.tests },
    testSelection
  ),
  mapState(
    { map: state => state.versions },
    versionSelection
  ),
  button(
    { events: { click: () => Action.executeTests() } },
    'execute tests'
  )
)
