import { fragment } from 'tempo-dom/lib/fragment'
import { matchBool } from 'tempo-dom/lib/match'
import { Action } from '../action'
import { toHref, Route } from '../route'
import { a, span } from 'tempo-dom/lib/html'
import { getUnsafe, Option, toBoolean } from 'tempo-std/lib/option'
import {
  Attribute,
  mapAttribute,
  attributeToHandler
} from 'tempo-dom/lib/value'
import { DOMChild } from 'tempo-dom/lib/template'

export const maybeLink = <State>(attrs: {
  label: DOMChild<State, Action>,
  route: Attribute<State, Option<Route>>,
  class?: Attribute<State, string>
}) =>
  fragment<State, Action>(
    matchBool({
      condition: mapAttribute(attrs.route, toBoolean),
      false: span(
        {
          attrs: {
            class: mapAttribute(attrs.class || '', v =>
              (v ? [v] : []).concat(['is-active']).join(' ')
            )
          }
        },
        attrs.label
      ),
      true: link({
        label: attrs.label,
        route: mapAttribute(attrs.route, getUnsafe),
        class: attrs.class
      })
    })
  )

export const link = <State>(attrs: {
  label: DOMChild<State, Action>,
  route: Attribute<State, Route>,
  class?: Attribute<State, string>
}) =>
  a(
    {
      attrs: {
        class: attrs.class,
        href: mapAttribute<State, Route, string>(attrs.route, route => toHref(route))
      },
      events: {
        click: attributeToHandler(attrs.route, (route: Route, e: MouseEvent) => {
          e.preventDefault()
          const url = toHref(route)
          history.pushState(null, '', url || './')
          return Action.goTo(route)
        })
      }
    },
    attrs.label
  )
