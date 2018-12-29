import { DynamicView, View } from '../core/view'
import { DOMContext } from './context'
import { DOMTemplate, DOMChild } from './template'
import { removeNode, filterDynamics, domChildToTemplate } from './utils'

export class DOMElementsView<Element, State extends Element[], Action> implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(
    readonly ref: Node,
    readonly ctx: DOMContext,
    readonly dispatch: (action: Action) => void,
    readonly children: DOMTemplate<Element, Action>[]
  ) {}
  destroy(): void {
    removeNode(this.ref)
    if (this.childrenView) this.childrenView.forEach(e => e.forEach(c => c.destroy()))
  }

  change(state: State): void {
    const stateLength = state.length
    const viewLength = this.childrenView.length
    if (stateLength > viewLength) {
      for (let i = 0; i < viewLength; i++) {
        const val = state[i]
        filterDynamics(this.childrenView[i]).forEach(child => child.change(val))
      }
      for (let i = viewLength; i < stateLength; i++) {
        const val = state[i]
        this.childrenView.push(this.children.map(el => el.render(this.ctx, val, this.dispatch)))
      }
    } else {
      for (let i = 0; i < stateLength; i++) {
        const val = state[i]
        filterDynamics(this.childrenView[i]).forEach(child => child.change(val))
      }
      for (let i = stateLength; i < viewLength; i++) {
        this.childrenView[i].forEach(child => child.destroy())
      }
      this.childrenView = this.childrenView.slice(0, stateLength)
    }
  }
  private childrenView: View<Element>[][] = []
}

export class DOMElementsTemplate<Element, State extends Element[], Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly opts: { refId?: string },
    readonly children: DOMTemplate<Element, Action>[]
  ) {}

  render(ctx: DOMContext, state: State, dispatch: (action: Action) => void): DynamicView<State> {
    const ref = ctx.doc.createComment(this.opts.refId || 'md:repeat')
    ctx.append(ref)
    const appendChild = (node: Node) => {
      if (ref.parentElement) ref.parentElement.insertBefore(node, ref)
    }
    const view = new DOMElementsView<Element, State, Action>(
      ref,
      { ...ctx, append: appendChild },
      dispatch,
      this.children
    )
    view.change(state)
    return view
  }
}

export const elements = <State extends any[], Action>(
  opts: { refId?: string },
  ...children: DOMChild<State[number], Action>[]
) =>
  new DOMElementsTemplate<State[number], State, Action>(opts, children.map(domChildToTemplate))
