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
import { fragmentView } from './fragment'
import { domChildToTemplate } from './utils/dom'
import { mapArray } from '@tempo/core/lib/util/map'

export class DOMPortalTemplate<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly getParent: (doc: Document) => Element,
    readonly append: (doc: Document, node: Node) => void,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State) {
    const doc = ctx.doc
    const append = (node: Node) => this.append(doc, node)
    const parent = this.getParent(doc)
    const viewChildren = mapArray(this.children, child => {
      const newCtx = ctx.withAppend(append).withParent(parent)
      return child.render(newCtx, state)
    })
    return fragmentView(viewChildren)
  }
}

export const portal = <State, Action>(
  options: {
    getParent: (doc: Document) => Element
    append: (doc: Document, node: Node) => void
  },
  ...children: DOMChild<State, Action>[]
): DOMTemplate<State, Action> => new DOMPortalTemplate<State, Action>(options.getParent, options.append, mapArray(children, domChildToTemplate))

export const portalWithSelector = <State, Action>(options: { selector: string }, ...children: DOMChild<State, Action>[]): DOMTemplate<State, Action> =>
  portal<State, Action>(
    {
      getParent: (doc: Document) => {
        const el = doc.querySelector(options.selector)
        if (!el) {
          throw new Error(`selector doesn't match any element: "${options.selector}"`)
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

export const headPortal = <State, Action>(...children: DOMChild<State, Action>[]): DOMTemplate<State, Action> =>
  new DOMPortalTemplate<State, Action>(
    (doc: Document) => doc.head!,
    (doc: Document, node: Node) => doc.head!.appendChild(node),
    mapArray(children, domChildToTemplate)
  )

export const bodyPortal = <State, Action>(...children: DOMChild<State, Action>[]): DOMTemplate<State, Action> =>
  new DOMPortalTemplate<State, Action>(
    (doc: Document) => doc.body,
    (doc: Document, node: Node) => doc.body.appendChild(node),
    mapArray(children, domChildToTemplate)
  )
