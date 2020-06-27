/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Action } from '../action'
import { Route, toUrl, toTitle } from '../route'
import { a } from 'tempo-dom/lib/html'
import { Attribute, mapAttribute, resolveAttribute } from 'tempo-dom/lib/value'
import { DOMChild, DOMTemplate } from 'tempo-dom/lib/template'
// import 'tempo-dom/lib/value'

export function linkRoute<State, Action, Query>(
  opts: {
    route: Attribute<State, Route>
    className?: Attribute<State, string>
  },
  ...children: DOMChild<State, Action, Query>[]
): DOMTemplate<State, Action, Query> {
  if (children.length === 0) {
    children.push(mapAttribute(opts.route, toTitle))
  }
  return a<State, Action, Query>(
    {
      attrs: {
        href: mapAttribute(opts.route, toUrl),
        className: opts.className,
        target: mapAttribute(opts.route, a =>
          a.kind === 'ExternalRoute' ? '_blank' : undefined
        ),
        rel: mapAttribute(opts.route, a =>
          a.kind === 'ExternalRoute' ? 'noopener' : undefined
        )
      },
      events: {
        click: (state: State, ev, el) => {
          ev.preventDefault()
          const route = resolveAttribute(opts.route)(state)!
          return (Action.linkClicked(route) as unknown) as Action // TODO not sure why this is needed
        }
      }
    },
    ...children
  )
}
