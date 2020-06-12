import { DOMChild } from './template'
import { el } from './element'

export function hiddenWhenEmpty<State, Action, Query = unknown>(
  props: {
    element?: string
    selector?: string
  },
  ...children: DOMChild<State, Action, Query>[]
) {
  const element = props.element ?? 'div'
  const selector = props.selector ?? '*'

  function isEmpty(el: HTMLElement) {
    const it = el.querySelectorAll(selector)
    for (let i = 0; i < it.length; i++) {
      if (it[i].innerHTML.trim() !== '') return false
    }
    return true
  }

  return el<State, Action, Query, HTMLElement, string>(
    element,
    {
      afterrender: (_, el: HTMLElement) => {
        const display = el.style.display
        if (isEmpty(el)) {
          el.style.display = 'none'
        }
        return display
      },
      afterchange: (_, el: HTMLElement, _c, display) => {
        if (isEmpty(el)) {
          el.style.display = 'none'
        } else {
          el.style.display = display ?? ''
        }
        return display
      }
    },
    ...children
  )
}
