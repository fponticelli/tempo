import { DynamicView } from '@mood/core'
import { DOMComponentView, DOMComponent } from './component'
import { DOMTemplate } from './template'
import { DOMContext } from './context'

export class DOMAdapterView<OuterState, InnerState, InnerAction> implements DynamicView<OuterState> {
  readonly kind = 'dynamic'
  constructor(
    readonly mergeStates: (outerState: OuterState, innerState: InnerState) => InnerState | undefined,
    readonly child: DOMComponentView<InnerState, InnerAction>
  ) {}

  destroy(): void {
    this.child.destroy()
  }

  change(outerState: OuterState): void {
    const newState = this.mergeStates(outerState, this.child.store.get())
    if (newState == null) return
    this.child.change(newState)
  }
}

export class DOMAdapter<OuterState, InnerState, OuterAction, InnerAction>
  implements DOMTemplate<OuterState, OuterAction> {
  constructor(
    readonly mergeStates: (outerState: OuterState, innerState: InnerState) => InnerState | undefined,
    readonly propagate: (
      action: InnerAction,
      innerState: InnerState,
      outerState: OuterState,
      dispatchInner: (action: InnerAction) => void,
      dispatchOuter: (action: OuterAction) => void
    ) => void,
    readonly child: DOMComponent<InnerState, InnerAction>
  ) {}

  render(ctx: DOMContext<OuterAction>, outerState: OuterState): DynamicView<OuterState> {
    const mergedState = (this.mergeStates && this.mergeStates(outerState, this.child.store.get())) || this.child.store.get()
    const viewChild = this.child.render(
      ctx.withDispatch((action: InnerAction) => {
        this.propagate(action, viewChild.store.get(), outerState, viewChild.dispatch, ctx.dispatch)
      }),
      mergedState
    )
    const view = new DOMAdapterView(this.mergeStates, viewChild)
    return view
  }
}

export const adapter = <OuterState, InnerState, OuterAction, InnerAction>(
  opts: {
    mergeStates?: (outerState: OuterState, innerState: InnerState) => InnerState | undefined
    propagate?: (
      action: InnerAction,
      innerState: InnerState,
      outerState: OuterState,
      dispatchInner: (action: InnerAction) => void,
      dispatchOuter: (action: OuterAction) => void
    ) => void
  },
  child: DOMComponent<InnerState, InnerAction>
) =>
  new DOMAdapter(
    opts.mergeStates || ((_u: OuterState, _d: InnerState) => undefined),
    /* istanbul ignore next */
    opts.propagate ||
      ((
        _m: InnerAction,
        _d: InnerState,
        _u: OuterState,
        _f1: (action: InnerAction) => void,
        _f2: (action: OuterAction) => void
      ) => undefined),
    child
  )
