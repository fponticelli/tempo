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

import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { domChildToTemplate } from './utils/dom'
import { map } from 'tempo-std/lib/arrays'

class PortalTemplate<State, Action, Query> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly getParent: (doc: Document) => Element,
    readonly append: (doc: Document, node: Node) => void,
    readonly children: DOMTemplate<State, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State) {
    const append = (node: Node) => this.append(ctx.doc, node)
    const parent = this.getParent(ctx.doc)
    const newCtx = ctx.withAppend(append).withParent(parent)
    const views = map(this.children, child => child.render(newCtx, state))
    return {
      change: (state: State) => {
        for (const view of views) view.change(state)
      },
      destroy: () => {
        for (const view of views) view.destroy()
      },
      request: (query: Query) => {
        for (const view of views) view.request(query)
      }
    }
  }
}

export function portal<State, Action, Query = unknown>(
  props: {
    getParent: (doc: Document) => Element
    append: (doc: Document, node: Node) => void
  },
  ...children: DOMChild<State, Action, Query>[]
): DOMTemplate<State, Action, Query> {
  return new PortalTemplate<State, Action, Query>(props.getParent, props.append, map(children, domChildToTemplate))
}

export function portalWithSelector<State, Action, Query = unknown>(
  props: { selector: string },
  ...children: DOMChild<State, Action, Query>[]
): DOMTemplate<State, Action, Query> {
  return portal<State, Action, Query>(
    {
      getParent: (doc: Document) => {
        const el = doc.querySelector(props.selector)
        if (!el) {
          throw new Error(`selector doesn't match any element: "${props.selector}"`)
        }
        return el
      },
      append: (doc: Document, node: Node) => {
        // Parent should always be available given the guarantee from `getParent`.
        // If parent has been removed from unsafe manipulation of the dom, an exception will occurr.
        const parent = doc.querySelector(props.selector)!
        parent.appendChild(node)
      }
    },
    ...children
  )
}

export function headPortal<State, Action, Query = unknown>(
  ...children: DOMChild<State, Action, Query>[]
): DOMTemplate<State, Action, Query> {
  return new PortalTemplate<State, Action, Query>(
    (doc: Document) => doc.head!,
    (doc: Document, node: Node) => doc.head!.appendChild(node),
    map(children, domChildToTemplate)
  )
}

export function bodyPortal<State, Action, Query = unknown>(
  ...children: DOMChild<State, Action, Query>[]
): DOMTemplate<State, Action, Query> {
  return new PortalTemplate<State, Action, Query>(
    (doc: Document) => doc.body,
    (doc: Document, node: Node) => doc.body.appendChild(node),
    map(children, domChildToTemplate)
  )
}
