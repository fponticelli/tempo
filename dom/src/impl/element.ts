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

import { DOMTemplate } from '../template'
import { DOMContext } from '../context'
import { View } from 'tempo-core/lib/view'
import { removeNode, setElAttribute } from '../utils/dom'
import { EventHandler } from '../value'
import { map } from 'tempo-std/lib/arrays'

import { MakeLifecycle } from '../lifecycle'
import { DerivedValue } from 'tempo-core/lib/value'

export class DOMElement<State, Action, Query = unknown>
  implements DOMTemplate<State, Action, Query> {
  constructor(
    public createElement: (doc: Document) => HTMLElement,
    public literalAttrs: { name: string; value: string }[],
    public derivedAttrs: {
      name: string
      resolve: DerivedValue<State, string | undefined>
    }[],
    public literalStyles: { name: string; value: string }[],
    public derivedStyles: {
      name: string
      resolve: DerivedValue<State, string | undefined>
    }[],
    public handlers: {
      name: string
      callback: EventHandler<State, Action>
    }[],
    public makeLifecycle: MakeLifecycle<State, Action>,
    public respond: (
      query: Query,
      el: HTMLElement,
      ctx: DOMContext<Action>
    ) => void,
    public children: DOMTemplate<State, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    const { respond } = this
    let localState = state
    const el = this.createElement(ctx.doc)

    for (const att of this.literalAttrs) setElAttribute(el, att.name, att.value)

    for (const att of this.derivedAttrs) {
      setElAttribute(el, att.name, att.resolve(localState))
    }

    for (const handler of this.handlers) {
      el.addEventListener(
        handler.name,
        (event: Event) => {
          const action = handler.callback(localState, event, el)
          if (action !== undefined) {
            ctx.dispatch(action)
          }
        },
        false
      )
    }

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const newCtx = ctx.withAppend(appendChild)
    const views = map(this.children, child => child.render(newCtx, localState))

    ctx.append(el)

    const lifecycle = this.makeLifecycle(localState, el, ctx)

    return {
      change: (state: State) => {
        localState = state
        lifecycle.beforeChange(localState)

        for (const att of this.derivedAttrs) {
          setElAttribute(el, att.name, att.resolve(localState))
        }
        for (const view of views) {
          view.change(localState)
        }

        lifecycle.afterChange(localState)
      },
      destroy: () => {
        lifecycle.beforeDestroy()
        removeNode(el)
        for (const view of views) view.destroy()
      },
      request: (query: Query) => {
        respond(query, el, ctx)
        for (const view of views) {
          view.request(query)
        }
      }
    }
  }
}

export const defaultNamespaces: Record<string, string> = {
  svg: 'http://www.w3.org/2000/svg'
}
