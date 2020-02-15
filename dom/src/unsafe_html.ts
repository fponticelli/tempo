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
import { DerivedValue } from 'tempo-core/lib/value'
import { TextValue } from './value'

const renderLiteral = <State, Action, Query = unknown, El extends Element = Element, T = unknown>
(
  element: DOMElement<State, Action, Query, El, T>,
  ctx: DOMContext<Action>,
  transform: (source: string) => string,
  state: State,
  value: string | undefined
): View<State, Query> => {
  const view = element.render(ctx, state)
  const el = ctx.parent
  el.innerHTML = transform(value || '')
  return view
}

const renderFunction = <State, Action, Query, El extends Element = Element, T = unknown>(
  element: DOMElement<State, Action, Query, El, T>,
  ctx: DOMContext<Action>,
  transform: (source: string) => string,
  state: State,
  map: DerivedValue<State, string>
): View<State, Query> => {
  const prevAfterRender = element.afterrender
  let localEl: El
  element.afterrender = (state: State, el: El, ctx: DOMContext<Action>): T | undefined => {
    localEl = el
    if (prevAfterRender) {
      return prevAfterRender(state, el, ctx)
    } else {
      return undefined
    }
  }
  const view = element.render(ctx, state)
  const value = map(state) || ''
  localEl!.innerHTML = transform(value || '')
  let oldContent = ''
  return {
    change: (state: State) => {
      const newContent = transform(map(state) || '')
      if (newContent !== oldContent) {
        localEl.innerHTML = newContent
        if (newContent.length < 20000)
          oldContent = newContent
      }
    },
    destroy: () => {
      view.destroy()
    },
    request: (query: Query) => {
      view.request(query)
    }
  }
}

class UnsafeHtml<State, Action, Query, El extends Element = Element, T = unknown> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly content: TextValue<State>,
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
        this.content as DerivedValue<State, string>
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

export function unsafeHtml<State, Action, Query = unknown, El extends Element = Element, T = unknown>(
  options: {
    content: TextValue<State>
    element?: DOMElement<State, Action, Query, El, T>
    transform?: (source: string) => string
  }
): DOMTemplate<State, Action, Query> {
  return new UnsafeHtml<State, Action, Query, El, T>(
    options.content,
    options.element || el<State, Action, Query, El, T>('div', {}),
    options.transform || (s => s)
  )
}
