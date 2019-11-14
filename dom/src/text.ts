/*
Copyright 2018 Google LLC
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
import { View } from '@mood/core/lib/view'
import { UnwrappedLiteralValue, UnwrappedDerivedValue } from '@mood/core/lib/value'
import { DOMStaticNodeView, DOMDynamicNodeView } from './node_view'
import { DOMTextValue } from './value'

const renderLiteral = <State>(ctx: DOMContext<never>, value: UnwrappedLiteralValue<string>): View<State> => {
  const node = ctx.doc.createTextNode(value || '')
  const view = new DOMStaticNodeView(node, [])
  ctx.append(node)
  return view
}

const renderFunction = <State>(
  ctx: DOMContext<never>,
  state: State,
  map: UnwrappedDerivedValue<State, string>
): View<State> => {
  const node = ctx.doc.createTextNode(map(state) || '')
  const f = (state: State) => {
    const newContent = map(state) || ''
    // TODO, is this optimization worth it?
    if (node.textContent !== newContent)
      node.textContent = newContent
  }
  const view = new DOMDynamicNodeView(node, [], f)
  ctx.append(node)
  return view
}

export class DOMText<State, Action> implements DOMTemplate<State, Action> {
  constructor(readonly content: DOMTextValue<State>) {}

  render(ctx: DOMContext<Action>, state: State): View<State> {
    if (typeof this.content === 'function') {
      return renderFunction(ctx, state, this.content as UnwrappedDerivedValue<State, string>)
    } else {
      return renderLiteral(ctx, this.content)
    }
  }
}

export const text = <State, Action>(content: DOMTextValue<State>) => new DOMText<State, Action>(content)
