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
    const newState = this.mergeStates(outerState, this.child.store.property.get())
    if (newState == null) return
    this.child.change(newState)
  }
}

export class DOMAdapter<OuterState, InnerState, OuterAction, InnerAction>
  implements DOMTemplate<OuterState, OuterAction> {
  constructor(
    readonly mergeStates: (outerState: OuterState, innerState: InnerState) => InnerState | undefined,
    readonly propagate: (args: PropagateArg<OuterState, InnerState, OuterAction, InnerAction>) => void,
    readonly child: DOMComponent<InnerState, InnerAction>
  ) {}

  render(ctx: DOMContext<OuterAction>, outerState: OuterState): DynamicView<OuterState> {
    const mergedState =
      (this.mergeStates && this.mergeStates(outerState, this.child.store.property.get())) ||
      this.child.store.property.get()

    const viewChild = this.child.render(
      ctx.withDispatch(() => { /* COMPONENT IS DETACHED FROM CONTAINER AND DOESN'T PROPAGATE */ }),
      mergedState
    )

    this.child.store.observable.on((state: InnerState, action: InnerAction) => {
      this.propagate({
        action,
        innerState: state,
        outerState,
        dispatchInner: (action: InnerAction) => this.child.store.process(action),
        dispatchOuter: ctx.dispatch
      })
    })
    const view = new DOMAdapterView(this.mergeStates, viewChild)
    return view
  }
}

export interface PropagateArg<OuterState, InnerState, OuterAction, InnerAction> {
  action: InnerAction
  innerState: InnerState
  outerState: OuterState
  dispatchInner: (action: InnerAction) => void
  dispatchOuter: (action: OuterAction) => void
}

export const adapter = <OuterState, InnerState, OuterAction, InnerAction>(
  options: {
    mergeStates?: (outerState: OuterState, innerState: InnerState) => InnerState | undefined
    propagate?: (args: PropagateArg<OuterState, InnerState, OuterAction, InnerAction>) => void
  },
  child: DOMComponent<InnerState, InnerAction>
) =>
  new DOMAdapter(
    options.mergeStates || ((_u: OuterState, _d: InnerState) => undefined),
    /* istanbul ignore next */
    options.propagate || (() => undefined),
    child
  )