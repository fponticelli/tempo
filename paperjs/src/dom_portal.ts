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

import { portal } from 'tempo-dom/lib/portal'
import { PaperTemplate } from './template'
import { DOMChild } from 'tempo-dom/lib/template'
import { DOMContext } from 'tempo-dom/lib/context'
import { PaperContext } from './context'

export const domPortal = <State, Action, Query = unknown>(
  options: {
    getParent: (doc: Document) => Element
    append: (doc: Document, node: Node) => void
  },
  ...children: DOMChild<State, Action, Query>[]
): PaperTemplate<State, Action, Query> => {
  return {
    render(ctx: PaperContext<Action>, state: State) {
      const doc = ctx.canvas.ownerDocument!
      const append = (doc: Document, node: Node) => {
        options.append(doc, node)
      }
      const domCtx = new DOMContext(doc!, () => {}, ctx.canvas, ctx.dispatch)

      const port = portal(
        { append, getParent: options.getParent },
        ...children
      ).render(domCtx, state)
      return {
        change(state: State) {
          port.change(state)
        },
        destroy() {
          port.destroy()
        },
        request(query: Query) {
          port.request(query)
        }
      }
    }
  }
}

export const domPortalWithSelector = <State, Action, Query = unknown>(
  options: { selector: string },
  ...children: DOMChild<State, Action, Query>[]
): PaperTemplate<State, Action, Query> =>
  domPortal<State, Action, Query>(
    {
      getParent: (doc: Document) => {
        const el = doc.querySelector(options.selector)
        if (!el) {
          throw new Error(
            `selector doesn't match any element: "${options.selector}"`
          )
        }
        return el
      },
      append: (doc: Document, node: Node) => {
        // Parent should always be available given the guarantee from `getParent`.
        // If parent has been removed from unsafe manipulation of the dom, an exception will occurr.
        const parent = doc.querySelector(options.selector)!
        parent.appendChild(node)
      }
    },
    ...children
  )

export const domHeadPortal = <State, Action, Query = unknown>(
  ...children: DOMChild<State, Action, Query>[]
): PaperTemplate<State, Action, Query> =>
  domPortal<State, Action, Query>(
    {
      getParent: (doc: Document) => doc.head!,
      append: (doc: Document, node: Node) => doc.head!.appendChild(node)
    },
    ...children
  )

export const domBodyPortal = <State, Action, Query = unknown>(
  ...children: DOMChild<State, Action, Query>[]
): PaperTemplate<State, Action, Query> =>
  domPortal<State, Action, Query>(
    {
      getParent: (doc: Document) => doc.body,
      append: (doc: Document, node: Node) => doc.body.appendChild(node)
    },
    ...children
  )
