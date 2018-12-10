import { DOMTemplate } from './dom_template'
import { DOMContext } from './dom_context'
import { View } from '../core/view'
import { DOMStaticNodeView, DOMDynamicNodeView } from './dom_node_view'
import { UnwrappedLiteralValue, UnwrappedDerivedValue } from '../core/value'
import { DOMTextValue } from './dom_value'

const renderLiteral = <State>(ctx: DOMContext, value: UnwrappedLiteralValue<string>): View<State> => {
  const node = ctx.doc.createTextNode(value || '')
  const view = new DOMStaticNodeView(node, [])
  ctx.append(node)
  return view
}

const renderFunction = <State>(
  ctx: DOMContext,
  state: State,
  map: UnwrappedDerivedValue<State, string>
): View<State> => {
  const node = ctx.doc.createTextNode(map(state) || '')
  const f = (state: State) => {
    const newContent = map(state) || ''
    // TODO, is this optimization worth it?
    if (node.textContent !== newContent) node.textContent = newContent
  }
  const view = new DOMDynamicNodeView(node, [], f)
  ctx.append(node)
  return view
}

export class DOMText<State, Action> implements DOMTemplate<State, Action> {
  constructor(readonly content: DOMTextValue<State>) {}

  render(ctx: DOMContext, state: State, _: (action: Action) => void): View<State> {
    if (typeof this.content === 'function') {
      return renderFunction(ctx, state, this.content)
    } else {
      return renderLiteral(ctx, this.content)
    }
  }
}

export const text = <State, Action>(content: DOMTextValue<State>) => new DOMText<State, Action>(content)
