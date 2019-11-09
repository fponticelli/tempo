import { DynamicView, StaticView, View } from '@mood/core/lib/view'
import { removeNode } from './dom'

export class DOMBaseNodeView<State> {
  constructor(readonly node: Node, readonly children: View<State>[], readonly beforeDestroy?: () => void) {}
  destroy() {
    if (this.beforeDestroy) this.beforeDestroy()
    removeNode(this.node)
    this.children.forEach(child => child.destroy())
  }
}

export class DOMStaticNodeView<State> extends DOMBaseNodeView<State> implements StaticView {
  readonly kind = 'static'
}

export class DOMDynamicNodeView<State> extends DOMBaseNodeView<State> implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(
    readonly node: Node,
    readonly children: View<State>[],
    readonly change: (state: State) => void,
    readonly beforeDestroy?: () => void
  ) {
    super(node, children, beforeDestroy)
  }
}

// export const nodeView = <State>(node: Node, children: View<State>[]) => {
//   const dynamics = filterDynamics(children)
//   if (dynamics.length > 0) {
//     return new DOMDynamicNodeView(node, children, (state: State) => dynamics.forEach(child => child.change(state)))
//   } else {
//     return new DOMStaticNodeView(node, children)
//   }
// }
