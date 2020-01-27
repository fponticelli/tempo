import { fragment } from 'tempo-dom/lib/fragment'
import { matchBool } from 'tempo-dom/lib/match'
import { Action } from '../action'
import { toHref, Route } from '../route'
import { span, a } from 'tempo-dom/lib/html'
import { getUnsafe, Option, toBoolean } from 'tempo-std/lib/option'
import {
  DOMAttribute,
  mapAttribute,
  attributeToHandler
} from 'tempo-dom/lib/value'
import { DOMChild } from 'tempo-dom/lib/template'

export const maybeLink = <State>(
  label: DOMChild<State, Action>,
  route: DOMAttribute<State, Option<Route>>
) =>
  fragment<State, Action>(
    matchBool({
      condition: mapAttribute(route, toBoolean),
      false: span({ attrs: { class: 'active' } }, label),
      true: link(label, mapAttribute(route, getUnsafe))
    })
  )

export const link = <State>(
  label: DOMChild<State, Action>,
  route: DOMAttribute<State, Route>
) =>
  a(
    {
      attrs: {
        class: 'link',
        href: mapAttribute<State, Route, string>(route, route => toHref(route))
      },
      events: {
        click: attributeToHandler(route, (route: Route, e: MouseEvent) => {
          e.preventDefault()
          const url = toHref(route)
          history.pushState(null, '', url || './')
          return Action.goTo(route)
        })
      }
    },
    label
  )
