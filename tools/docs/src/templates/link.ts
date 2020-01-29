import { fragment } from 'tempo-dom/lib/fragment'
import { matchBool } from 'tempo-dom/lib/match'
import { Action } from '../action'
import { toHref, Route } from '../route'
import { a } from 'tempo-dom/lib/html'
import { getUnsafe, Option, toBoolean } from 'tempo-std/lib/option'
import {
  DOMAttribute,
  mapAttribute,
  attributeToHandler
} from 'tempo-dom/lib/value'
import { DOMChild } from 'tempo-dom/lib/template'

export const maybeLink = <State>(
  label: DOMChild<State, Action>,
  route: DOMAttribute<State, Option<Route>>,
  className?: DOMAttribute<State, string>
) =>
  fragment<State, Action>(
    matchBool({
      condition: mapAttribute(route, toBoolean),
      false: a(
        {
          attrs: {
            class: mapAttribute(className || '', v =>
              (v ? [v] : []).concat(['is-active']).join(' ')
            )
          }
        },
        label
      ),
      true: link(label, mapAttribute(route, getUnsafe), className)
    })
  )

export const link = <State>(
  label: DOMChild<State, Action>,
  route: DOMAttribute<State, Route>,
  className?: DOMAttribute<State, string>
) =>
  a(
    {
      attrs: {
        class: className,
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
