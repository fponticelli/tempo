import { div, input, label, table, tr, td, th } from '@tempo/dom/lib/html'
import { Action } from '../action'
import { TestOptions } from '../state'

export const optionsSelection = div<TestOptions, Action>(
  {},
  table(
    {},
    tr(
      {},
      th({}, label({ attrs: { for: 'options_max_time' } }, 'max execution time')),
      td(
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
)
