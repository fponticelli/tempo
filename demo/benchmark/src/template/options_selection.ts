import { div, dl, dd, dt, h1, input, label } from '@tempo/dom/lib/html'
import { Action } from '../action'
import { TestOptions } from '../state'

export const optionsSelection = div<TestOptions, Action>(
  {},
  h1({}, 'Options'),
  dl(
    {},
    dt({}, label({ attrs: { for: 'options_max_time' } }, 'Test max execution time')),
    dd(
      {},
      input({
        attrs: {
          id: 'options_max_time',
          type: 'number',
          min: 0,
          value: options => options.maxTime
        },
        events: {
          change: (s, e, el) => Action.changeOptionMaxTime(Number(el.value))
        }
      })
    )
  )
)
