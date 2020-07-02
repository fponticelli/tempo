import { BaseBuilder, IBuilder } from './internal'
import { PortalTemplate } from '../impl/portal'

export class PortalBuilder<State, Action, Query>
  extends BaseBuilder<State, Action, Query>
  implements IBuilder<State, Action, Query> {
  public appendChild: (doc: Document, node: Node) => void
  constructor(readonly getParent: (doc: Document) => Element) {
    super()
    this.appendChild = (doc: Document, node: Node) => {
      const parent = getParent(doc)
      parent.appendChild(node)
    }
  }
  build() {
    return new PortalTemplate<State, Action, Query>(
      this.getParent,
      this.appendChild,
      this._children
    )
  }
}
