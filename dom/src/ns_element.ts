import { DOMTemplate, DOMChild } from './template'
import { DOMAttributes } from './utils/attributes'
import { DOMContext } from './context'
import { processAttribute, Acc, filterDynamics, domChildToTemplate } from './utils/dom'
import { DOMDynamicNodeView, DOMStaticNodeView } from './utils/node_view'
import { DOMAttribute } from './value'

export class DOMNSElement<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly ns: string,
    readonly name: string,
    readonly attributes: DOMAttributes<State, Action>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State) {
    type AttributeName = keyof (typeof attributes)
    const attributes = this.attributes
    const el = ctx.doc.createElementNS(this.ns, this.name) as HTMLElement
    const keys = Object.keys(this.attributes) as AttributeName[]

    const { statics, dynamics } = keys.reduce(
      (acc: Acc<State>, key: AttributeName) =>
        processAttribute(el, key, this.attributes[key] as DOMAttribute<State, any>, ctx.dispatch, acc),
      { statics: [], dynamics: [] }
    ) as Acc<State>
    // apply attributes attributes
    statics.forEach(f => f())
    dynamics.forEach(f => f(state))

    // TODO append before or after children
    ctx.append(el)

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const viewChildren = this.children.map(child => child.render(ctx.withAppend(appendChild).withParent(el), state))
    const dynamicChildren = filterDynamics(viewChildren).map(child => (state: State) => child.change(state))
    const allDynamics = dynamics.concat(dynamicChildren)
    if (allDynamics.length > 0) {
      return new DOMDynamicNodeView(el, viewChildren, (state: State) => allDynamics.forEach(f => f(state)))
    } else {
      return new DOMStaticNodeView(el, viewChildren)
    }
  }
}

export const defaultNamespaces: Record<string, string> = {
  // TODO add here SVG and friends
}

export const nsEl = <State, Action>(
  ns: string,
  name: string,
  attributes: DOMAttributes<State, Action>,
  ...children: DOMChild<State, Action>[]
) => {
  const namespace = defaultNamespaces[ns] || ns
  return new DOMNSElement<State, Action>(namespace, name, attributes, children.map(domChildToTemplate))
}
