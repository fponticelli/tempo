import { div, a, button } from '@tempo/dom/lib/html'
import { Action } from '../action'

export const header = div(
  {},
  a({ attrs: { href: '#' }, events: { click: () => Action.toggleAllTests() } }, 'toggle all tests'),
  ' ',
  a({ attrs: { href: '#' }, events: { click: () => Action.toggleAllVersions() } }, 'toggle all versions'),
  ' ',
  button(
    { events: { click: () => Action.executeTests() } },
    'execute tests'
  )
)
