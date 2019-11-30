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
import { DOMDynamicNodeView, DOMBaseNodeView } from './node_view'
import { DOMTextValue } from './value'

const renderLiteral = <State, Action, El extends Element = Element, T = unknown>
(
  element: DOMElement<State, Action, El, T>,
  ctx: DOMContext<Action>,
  transform: (source: string) => string,
  state: State,
  value: string | undefined
): View<State> => {
  const view = element.render(ctx, state)
  const el = ((view as unknown as DOMBaseNodeView<State>).node as HTMLElement)
  el.innerHTML = transform(value || '')
  return view
}

const renderFunction = <State, Action, El extends Element = Element, T = unknown>(
  element: DOMElement<State, Action, El, T>,
  ctx: DOMContext<Action>,
  transform: (source: string) => string,
  state: State,
  map: UnwrappedDerivedValue<State, string>
): View<State> => {
  const view = element.render(ctx, state)
  const value = map(state) || ''
  const el = ((view as unknown as DOMBaseNodeView<State>).node as HTMLElement)
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
  return new DOMDynamicNodeView(el, [view], f)
}

export class DOMUnsafeHtml<State, Action, El extends Element = Element, T = unknown> implements DOMTemplate<State, Action> {
  constructor(
    readonly content: DOMTextValue<State>,
    readonly element: DOMElement<State, Action, El, T>,
    readonly transform: (source: string) => string
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State> {
    if (typeof this.content === 'function') {
      return renderFunction<State, Action, El, T>(
        this.element,
        ctx,
        this.transform,
        state,
        this.content as UnwrappedDerivedValue<State, string>
      )
    } else {
      return renderLiteral<State, Action, El, T>(
        this.element,
        ctx,
        this.transform,
        state,
        this.content
      )
    }
  }
}

export const unsafeHtml = <State, Action, El extends Element = Element, T = unknown>(
  options: {
    content: DOMTextValue<State>
    element?: DOMElement<State, Action, El, T>
    transform?: (source: string) => string
  }
): DOMTemplate<State, Action> =>
  new DOMUnsafeHtml<State, Action, El, T>(
    options.content,
    options.element || el<State, Action, El, T>('div', {}),
    options.transform || (s => s)
  )
