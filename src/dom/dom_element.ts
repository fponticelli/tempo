import { DOMTemplate } from './dom_template'
import { DOMContext } from './dom_context'
import { View } from '../core/view'
import { DOMAttributes } from './dom_attributes'
import { Acc, processAttribute, filterDynamics } from './utils'
import { DOMDynamicNodeView, DOMStaticNodeView } from './dom_node_view'
import { DOMValue } from './dom_value'

export class DOMElement<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly name: string,
    readonly attributes: DOMAttributes<State, Action>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext, state: State, dispatch: (action: Action) => void): View<State> {
    type AttributeName = keyof (typeof attributes)
    const el = ctx.doc.createElement(this.name)
    const attributes = this.attributes
    const keys = Object.keys(attributes) as AttributeName[]

    const { statics, dynamics } = keys.reduce(
      (acc: Acc<State>, key: AttributeName) =>
        processAttribute(el, key, attributes[key] as DOMValue<State, any>, dispatch, acc),
      { statics: [], dynamics: [] }
    )

    // apply attributes
    statics.forEach(f => f())
    dynamics.forEach(f => f(state))

    // TODO append before or after children
    ctx.append(el)

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const viewdChildren = this.children.map(child =>
      child.render({ ...ctx, parent: el, append: appendChild }, state, dispatch)
    )
    const dynamicChildren = filterDynamics(viewdChildren).map(child => (state: State) => child.change(state))
    const allDynamics = dynamics.concat(dynamicChildren)
    if (allDynamics.length > 0) {
      return new DOMDynamicNodeView(el, viewdChildren, (state: State) => allDynamics.forEach(f => f(state)))
    } else {
      return new DOMStaticNodeView(el, viewdChildren)
    }
  }
}
