import { DynamicView, StaticView, View } from '@mood/core/lib/view'
import { removeNode } from './utils/dom'

export class DOMBaseNodeView<State> {
  constructor(readonly node: Node, readonly children: View<State>[], readonly beforeDestroy?: () => void) {}
  destroy() {
    if (this.beforeDestroy) this.beforeDestroy()
    removeNode(this.node)
    for (const c of this.children) c.destroy()
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
