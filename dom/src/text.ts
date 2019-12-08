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
import { UnwrappedDerivedValue } from 'tempo-core/lib/value'
import { DOMStaticNodeView, DOMDynamicNodeView } from './node_view'
import { DOMTextValue } from './value'

const renderLiteral = <State, Query = unknown>(ctx: DOMContext<never>, value: string | undefined): View<State, Query> => {
  const node = ctx.doc.createTextNode(value || '')
  const view = new DOMStaticNodeView(node, [], () => {})
  ctx.append(node)
  return view
}

const renderFunction = <State, Query = unknown>(
  ctx: DOMContext<never>,
  state: State,
  map: UnwrappedDerivedValue<State, string>
): View<State, Query> => {
  const node = ctx.doc.createTextNode(map(state) || '')
  let oldContent = ''
  const f = (state: State) => {
    const newContent = map(state) || ''
    if (newContent !== oldContent) {
      node.nodeValue = newContent
      if (newContent.length < 5000)
        oldContent = newContent
    }
  }
  const view = new DOMDynamicNodeView(node, [], f, () => {})
  ctx.append(node)
  return view
}

export class DOMTextTemplate<State, Action, Query> implements DOMTemplate<State, Action, Query> {
  constructor(readonly content: DOMTextValue<State>) {}

  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    if (typeof this.content === 'function') {
      return renderFunction(ctx, state, this.content as UnwrappedDerivedValue<State, string>)
    } else {
      return renderLiteral(ctx, this.content)
    }
  }
}

export const text = <State, Action, Query = unknown>(content: DOMTextValue<State>): DOMTemplate<State, Action, Query> =>
  new DOMTextTemplate<State, Action, Query>(content)
