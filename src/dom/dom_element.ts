import { DOMTemplate } from './dom_template'
import { DOMContext } from './dom_context'
import { View, DynamicView, StaticView } from '../core/view'

export class DOMElement<State, Action> implements DOMTemplate<State, Action> {
  constructor(readonly name: string) {}

  render(
    ctx: DOMContext,
    state: State,
    dispatch: (action: Action) => void
  ): View<State> {
    const el = ctx.doc.createElement(this.name)
    ctx.append(el)
  }
}

abstract class DOMNodeViewBase {
  abstract readonly kind: 'dynamic' | 'static'
  constructor(readonly node: Node) {}
  destroy(): void {
    if (this.node.parentElement) this.node.parentElement.removeChild(this.node)
  }
}

export class DOMNodeViewDynamic<State> extends DOMNodeViewBase
  implements DynamicView<State> {
  kind: 'dynamic' = 'dynamic'
  change(value: State): void {
    throw new Error('Method not implemented.')
  }
}

export class DOMNodeViewStatic<State> extends DOMNodeViewBase
  implements StaticView<State> {
  kind: 'static' = 'static'
}
