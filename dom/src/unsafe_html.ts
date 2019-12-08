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

import { DOMTemplate } from './template'
import { DOMContext } from './context'
import { View } from 'tempo-core/lib/view'
import { DOMElement, el } from './element'
import { UnwrappedDerivedValue } from 'tempo-core/lib/value'
import { DOMNodeView } from './node_view'
import { DOMTextValue } from './value'

const renderLiteral = <State, Action, Query = unknown, El extends Element = Element, T = unknown>
(
  element: DOMElement<State, Action, Query, El, T>,
  ctx: DOMContext<Action>,
  transform: (source: string) => string,
  state: State,
  value: string | undefined
): View<State, Query> => {
  const view = element.render(ctx, state)
  const el = ((view as DOMNodeView<State, Query>).node as HTMLElement)
  el.innerHTML = transform(value || '')
  return view
}

const renderFunction = <State, Action, Query, El extends Element = Element, T = unknown>(
  element: DOMElement<State, Action, Query, El, T>,
  ctx: DOMContext<Action>,
  transform: (source: string) => string,
  state: State,
  map: UnwrappedDerivedValue<State, string>
): View<State, Query> => {
  const view = element.render(ctx, state)
  const value = map(state) || ''
  const el = ((view as DOMNodeView<State, Query>).node as HTMLElement)
  el.innerHTML = transform(value || '')
  let oldContent = ''
  const f = (state: State) => {
    const newContent = transform(map(state) || '')
    if (newContent !== oldContent) {
      el.innerHTML = newContent
      if (newContent.length < 20000)
        oldContent = newContent
    }
  }
  return new DOMNodeView(el, [view], f, (query: Query) => view.request(query))
}

export class DOMUnsafeHtml<State, Action, Query, El extends Element = Element, T = unknown> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly content: DOMTextValue<State>,
    readonly element: DOMElement<State, Action, Query, El, T>,
    readonly transform: (source: string) => string
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    if (typeof this.content === 'function') {
      return renderFunction<State, Action, Query, El, T>(
        this.element,
        ctx,
        this.transform,
        state,
        this.content as UnwrappedDerivedValue<State, string>
      )
    } else {
      return renderLiteral<State, Action, Query, El, T>(
        this.element,
        ctx,
        this.transform,
        state,
        this.content
      )
    }
  }
}

export const unsafeHtml = <State, Action, Query = unknown, El extends Element = Element, T = unknown>(
  options: {
    content: DOMTextValue<State>
    element?: DOMElement<State, Action, Query, El, T>
    transform?: (source: string) => string
  }
): DOMTemplate<State, Action, Query> =>
  new DOMUnsafeHtml<State, Action, Query, El, T>(
    options.content,
    options.element || el<State, Action, Query, El, T>('div', {}),
    options.transform || (s => s)
  )
