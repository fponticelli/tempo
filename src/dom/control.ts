import { DOMContext } from './dom_context'
import { DynamicView, View } from '../core/view'
import { DOMTemplate, DOMChild } from './dom_template'
import { filterDynamics, removeNode, domChildToTemplate } from './utils'

let refCounter = 0

export class DOMControlView<OuterState, InnerState, OuterAction, InnerAction> implements DynamicView<OuterState> {
  kind: 'dynamic' = 'dynamic'
  constructor(
    readonly ctx: DOMContext,
    readonly state: OuterState,
    readonly dispatch: (action: OuterAction) => void,
    readonly controlRender: (
      ctx: DOMContext,
      state: OuterState,
      dispatch: (action: OuterAction) => void,
      render: (ctx: DOMContext, state: InnerState, dispatch: (action: InnerAction) => void) => void,
      change: (state: InnerState) => void
    ) => void,
    readonly controlChange: (state: OuterState, change: (state: InnerState) => void) => void,
    readonly controlDestroy: (destroy: () => void) => void,
    readonly children: DOMTemplate<InnerState, InnerAction>[]
  ) {
    const render = (
      innerCtx: DOMContext,
      innerState: InnerState,
      innerDispatch: (action: InnerAction) => void
    ): void => {
      this.views = this.children.map(child => child.render(innerCtx, innerState, innerDispatch))
      this.dynamics = filterDynamics(this.views)
      if (this.destroyed) {
        this.destroy()
        return
      }
      if (this.latestState !== void 0) {
        this.dynamics.forEach(view => view.change(this.latestState!))
        this.latestState = undefined
      }
    }
    this.controlRender(ctx, state, dispatch, render, (state: InnerState) =>
      this.dynamics!.forEach(view => view.change(state))
    )
  }
  destroy() {
    if (this.views !== void 0) {
      this.controlDestroy(() => {
        this.views!.forEach(view => view.destroy())
      })
    } else {
      this.destroyed = true
    }
  }
  change(state: OuterState) {
    if (this.destroyed) return
    if (this.dynamics === void 0) {
      this.controlChange(state, (state: InnerState) => {
        this.latestState = state
      })
    } else {
      if (this.dynamics.length === 0) return
      this.controlChange(state, (state: InnerState) => {
        this.dynamics!.forEach(child => child.change(state))
      })
    }
  }

  private views: View<InnerState>[] | undefined
  private dynamics: DynamicView<InnerState>[] | undefined
  private latestState: InnerState | undefined
  private destroyed = false
}

export class DOMControl<OuterState, InnerState, OuterAction, InnerAction>
  implements DOMTemplate<OuterState, OuterAction> {
  constructor(
    readonly controlRender: (
      ctx: DOMContext,
      state: OuterState,
      dispatch: (action: OuterAction) => void,
      render: (ctx: DOMContext, state: InnerState, dispatch: (action: InnerAction) => void) => void,
      change: (state: InnerState) => void
    ) => void,
    readonly controlChange: (state: OuterState, change: (state: InnerState) => void) => void,
    readonly controlDestroy: (destroy: () => void) => void,
    readonly children: DOMTemplate<InnerState, InnerAction>[]
  ) {}

  render(ctx: DOMContext, state: OuterState, dispatch: (action: OuterAction) => void) {
    return new DOMControlView<OuterState, InnerState, OuterAction, InnerAction>(
      ctx,
      state,
      dispatch,
      this.controlRender,
      this.controlChange,
      this.controlDestroy,
      this.children
    )
  }
}

export class DOMRefControlView<OuterState, InnerState, OuterAction, InnerAction> implements DynamicView<OuterState> {
  kind: 'dynamic' = 'dynamic'
  constructor(
    readonly ref: Node,
    readonly ctx: DOMContext,
    readonly state: OuterState,
    readonly dispatch: (action: OuterAction) => void,
    readonly controlRender: (
      ctx: DOMContext,
      state: OuterState,
      dispatch: (action: OuterAction) => void,
      render: (ctx: DOMContext, state: InnerState, dispatch: (action: InnerAction) => void) => void,
      change: (state: InnerState) => void
    ) => void,
    readonly controlChange: (state: OuterState, change: (state: InnerState) => void) => void,
    readonly controlDestroy: (destroy: () => void) => void,
    readonly children: DOMTemplate<InnerState, InnerAction>[]
  ) {
    const render = (ctx: DOMContext, state: InnerState, dispatch: (action: InnerAction) => void): void => {
      this.views = this.children.map(child => child.render(ctx, state, dispatch))
      // this.renderViews(views)
      this.dynamics = filterDynamics(this.views)
      if (this.destroyed) {
        this.destroy()
        return
      }
      if (this.latestState !== void 0) {
        this.dynamics.forEach(view => view.change(this.latestState!))
        this.latestState = undefined
      }
    }
    this.controlRender(this.ctx, state, dispatch, render, (state: InnerState) =>
      this.dynamics!.forEach(view => view.change(state))
    )
  }
  destroy() {
    if (this.views !== void 0) {
      this.controlDestroy(() => {
        this.views!.forEach(view => view.destroy())
        removeNode(this.ref)
      })
    } else {
      this.destroyed = true
    }
  }
  change(state: OuterState) {
    if (this.destroyed) return
    if (this.dynamics === void 0) {
      this.controlChange(state, (state: InnerState) => {
        this.latestState = state
      })
    } else {
      if (this.dynamics.length === 0) return
      this.controlChange(state, (state: InnerState) => {
        this.dynamics!.forEach(child => child.change(state))
      })
    }
  }

  private views: View<InnerState>[] | undefined
  private dynamics: DynamicView<InnerState>[] | undefined
  private latestState: InnerState | undefined
  private destroyed = false
}

export class DOMRefControl<OuterState, InnerState, OuterAction, InnerAction>
  implements DOMTemplate<OuterState, OuterAction> {
  constructor(
    readonly controlRender: (
      ctx: DOMContext,
      state: OuterState,
      dispatch: (action: OuterAction) => void,
      render: (ctx: DOMContext, state: InnerState, dispatch: (action: InnerAction) => void) => void,
      change: (state: InnerState) => void
    ) => void,
    readonly controlChange: (state: OuterState, change: (state: InnerState) => void) => void,
    readonly controlDestroy: (destroy: () => void) => void,
    readonly children: DOMTemplate<InnerState, InnerAction>[]
  ) {}

  render(ctx: DOMContext, state: OuterState, dispatch: (action: OuterAction) => void) {
    const ref = ctx.doc.createComment(`md:control:${refCounter++}`)
    ctx.append(ref)
    const appendChild = (node: Node) => {
      if (ref.parentElement) ref.parentElement.insertBefore(node, ref)
    }
    return new DOMRefControlView<OuterState, InnerState, OuterAction, InnerAction>(
      ref,
      { ...ctx, append: appendChild },
      state,
      dispatch,
      this.controlRender,
      this.controlChange,
      this.controlDestroy,
      this.children
    )
  }
}

const controlDestroy = (destroy: () => void) => destroy()

export interface ControlOpts<OuterState, InnerState, OuterAction, InnerAction> {
  withReference: boolean
  controlRender: (
    ctx: DOMContext,
    state: OuterState,
    dispatch: (action: OuterAction) => void,
    render: (ctx: DOMContext, state: InnerState, dispatch: (action: InnerAction) => void) => void,
    change: (state: InnerState) => void
  ) => void
  controlChange: (state: OuterState, change: (state: InnerState) => void) => void
  controlDestroy?: (destroy: () => void) => void
}

export const control = <OuterState, InnerState, OuterAction, InnerAction>(
  opts: ControlOpts<OuterState, InnerState, OuterAction, InnerAction>,
  ...children: DOMChild<InnerState, InnerAction>[]
) => {
  if (opts.withReference) {
    return new DOMRefControl<OuterState, InnerState, OuterAction, InnerAction>(
      opts.controlRender,
      opts.controlChange,
      opts.controlDestroy || controlDestroy,
      children.map(domChildToTemplate)
    )
  } else {
    return new DOMControl<OuterState, InnerState, OuterAction, InnerAction>(
      opts.controlRender,
      opts.controlChange,
      opts.controlDestroy || controlDestroy,
      children.map(domChildToTemplate)
    )
  }
}

const controlRender = <State, Action>(
  ctx: DOMContext,
  state: State,
  dispatch: (action: Action) => void,
  render: (ctx: DOMContext, state: State, dispatch: (action: Action) => void) => void,
  change: (state: State) => void
) => render(ctx, state, dispatch)

const controlChange = <State, Action>(state: State, change: (state: State) => void) => change(state)

export interface ControlFlowOpts<State, Action> {
  withReference: boolean
  controlRender?: (
    ctx: DOMContext,
    state: State,
    dispatch: (action: Action) => void,
    render: (ctx: DOMContext, state: State, dispatch: (action: Action) => void) => void,
    change: (state: State) => void
  ) => void
  controlChange?: (state: State, change: (state: State) => void) => void
  controlDestroy?: (destroy: () => void) => void
}

export const controlFlow = <State, Action>(
  opts: ControlFlowOpts<State, Action>,
  ...children: DOMChild<State, Action>[]
) => {
  if (opts.withReference) {
    return new DOMRefControl<State, State, Action, Action>(
      opts.controlRender || controlRender,
      opts.controlChange || controlChange,
      opts.controlDestroy || controlDestroy,
      children.map(domChildToTemplate)
    )
  } else {
    return new DOMControl<State, State, Action, Action>(
      opts.controlRender || controlRender,
      opts.controlChange || controlChange,
      opts.controlDestroy || controlDestroy,
      children.map(domChildToTemplate)
    )
  }
}

export const mapState = <OuterState, InnerState, Action>(
  opts: { map: (value: OuterState) => InnerState },
  ...children: DOMChild<InnerState, Action>[]
) =>
  control<OuterState, InnerState, Action, Action>(
    {
      withReference: false,
      controlRender: (ctx, state, dispatch, render) => {
        const inState = opts.map(state)
        render(ctx, inState, dispatch)
      },
      controlChange: (state, change) => change(opts.map(state))
    },
    ...children
  )

export const mapAction = <State, OuterAction, InnerAction>(
  opts: { map: (value: InnerAction) => OuterAction | undefined },
  ...children: DOMChild<State, InnerAction>[]
) =>
  control<State, State, OuterAction, InnerAction>(
    {
      withReference: false,
      controlRender: (ctx, state, dispatch, render) => {
        const dispatchOut = (b: InnerAction) => {
          const a = opts.map(b)
          if (a != null) dispatch(a)
        }
        render(ctx, state, dispatchOut)
      },
      controlChange: (state, change) => change(state)
    },
    ...children
  )
