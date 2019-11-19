import { div, dl, h1, dt, dd, input, label, a } from '@tempo/dom/lib/html'
import { Action } from '../action'
import { TestInfoWithSelected } from '../state'
import { forEach } from '@tempo/dom/lib/for_each'

export const testSelection = div<TestInfoWithSelected[], Action>(
  {},
  h1({}, 'Tests'),
  a({ attrs: { href: '#' }, events: { click: () => Action.toggleAllTests() } }, 'toggle all'),
  dl(
    {},
    forEach(
      {},
      dt(
        {},
        label({ attrs: { for: s => `test_${s.id}` } }, s => s.name)
      ),
      dd(
        {},
        input({
          attrs: {
            id: s => `test_${s.id}`,
            type: 'checkbox',
            checked: s => s.selected
          },
          events: {
            change: (s, e, el) => Action.toggleTest(s.id, el.checked)
          }
        })
      )
    )
  )
)
