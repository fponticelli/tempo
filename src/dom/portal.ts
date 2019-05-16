import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { fragmentView } from './fragment'
import { domChildToTemplate } from './utils'

export class DOMPortal<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly getParent: (doc: Document) => Element,
    readonly append: (doc: Document, node: Node) => void,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State) {
    const doc = ctx.doc
    const append = (node: Node) => this.append(doc, node)
    const parent = this.getParent(doc)
    const viewChildren = this.children.map(child => {
      const newCtx = ctx.withAppend(append).withParent(parent)
      return child.render(newCtx, state)
    })
    return fragmentView(viewChildren)
  }
}

export const portal = <State, Action>(
  opts: {
    getParent: (doc: Document) => Element
    append: (doc: Document, node: Node) => void
  },
  ...children: DOMChild<State, Action>[]
) => new DOMPortal<State, Action>(opts.getParent, opts.append, children.map(domChildToTemplate))

export const portalWithSelector = <State, Action>(opts: { selector: string }, ...children: DOMChild<State, Action>[]) =>
  portal<State, Action>(
    {
      getParent: (doc: Document) => {
        const el = doc.querySelector(opts.selector)
        if (!el) {
          throw new Error(`selector doesn't match any element: "${opts.selector}"`)
        }
        return el
      },
      append: (doc: Document, node: Node) => {
        // Parent should always be available given the guarantee from `getParent`.
        // If parent has been removed from unsafe manipulation of the dom, an exception will occurr.
        const parent = doc.querySelector(opts.selector)!
        parent.appendChild(node)
      }
    },
    ...children
  )

export const headPortal = <State, Action>(...children: DOMChild<State, Action>[]) =>
  new DOMPortal<State, Action>(
    (doc: Document) => doc.head!,
    (doc: Document, node: Node) => doc.head!.appendChild(node),
    children.map(domChildToTemplate)
  )

export const bodyPortal = <State, Action>(...children: DOMChild<State, Action>[]) =>
  new DOMPortal<State, Action>(
    (doc: Document) => doc.body,
    (doc: Document, node: Node) => doc.body.appendChild(node),
    children.map(domChildToTemplate)
  )
