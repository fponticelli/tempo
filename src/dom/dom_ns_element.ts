import { DOMTemplate } from './dom_template'
import { DOMAttributes } from './dom_attributes'
import { DOMContext } from './dom_context'
import { processAttribute, Acc, filterDynamics } from './utils'
import { DOMDynamicNodeView, DOMStaticNodeView } from './dom_node_view'
import { DOMValue } from './dom_value'

export class DOMNSElement<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly ns: string,
    readonly name: string,
    readonly attributes: DOMAttributes<State, Action>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext, state: State, dispatch: (action: Action) => void) {
    type AttributeName = keyof (typeof attributes)
    const attributes = this.attributes
    const el = ctx.doc.createElementNS(this.ns, this.name) as HTMLElement
    const keys = Object.keys(this.attributes) as AttributeName[]

    const { statics, dynamics } = keys.reduce(
      (acc: Acc<State>, key: AttributeName) =>
        processAttribute(el, key, this.attributes[key] as DOMValue<State, any>, dispatch, acc),
      { statics: [], dynamics: [] }
    ) as Acc<State>
    // apply attributes attributes
    statics.forEach(f => f())
    dynamics.forEach(f => f(state))

    // TODO append before or after children
    ctx.append(el)

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const viewChildren = this.children.map(child =>
      child.render({ ...ctx, parent: el, append: appendChild }, state, dispatch)
    )
    const dynamicChildren = filterDynamics(viewChildren).map(child => (state: State) => child.change(state))
    const allDynamics = dynamics.concat(dynamicChildren)
    if (allDynamics.length > 0) {
      return new DOMDynamicNodeView(el, viewChildren, (state: State) => allDynamics.forEach(f => f(state)))
    } else {
      return new DOMStaticNodeView(el, viewChildren)
    }
  }
}
