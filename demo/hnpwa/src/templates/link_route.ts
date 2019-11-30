import { Action } from '../action'
import { Route, toUrl, toTitle } from '../route'
import { a } from '@tempo/dom/lib/html'
import { DOMAttribute, mapAttribute, resolveAttribute } from '@tempo/dom/lib/value'
import { DOMChild } from '@tempo/dom/lib/template'

export const linkRoute = <State>(
  opts: {
    route: DOMAttribute<State, Route>
    className?: DOMAttribute<State, string>
  },
  ...children: DOMChild<State, Action>[]
) => {
  if (children.length === 0) {
    children.push(mapAttribute(opts.route, toTitle))
  }
  return a(
    {
      attrs: {
        href: mapAttribute(opts.route, toUrl),
        className: opts.className,
        target: mapAttribute(opts.route, a => (a.kind === 'ExternalRoute' ? '_blank' : undefined)),
        rel: mapAttribute(opts.route, a => (a.kind === 'ExternalRoute' ? 'noopener' : undefined))
      },
      events: {
        click: (state: State, e: MouseEvent) => {
          e.preventDefault()
          const route = resolveAttribute(opts.route)(state)
          return Action.linkClicked(route!)
        }
      }
    },
    ...children
  )
}
