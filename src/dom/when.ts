import { DOMChild, DOMTemplate } from './template'
import { DOMContext } from './context'
import { View, DynamicView } from '../core/view'
import { domChildToTemplate, filterDynamics, removeNode } from './utils'

export interface WhenOptions<State> {
  condition: (state: State) => boolean
  refId?: string
}

export class DOMWhenView<State, Action> implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(
    readonly condition: (state: State) => boolean,
    readonly ctx: DOMContext<Action>,
    readonly dispatch: (action: Action) => void,
    readonly removeNode: () => void,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  change(value: State): void {
    if (this.condition(value)) {
      if (this.views == null) {
        // it has never been rendered before
        this.views = this.children.map(c => c.render(this.ctx, value, this.dispatch))
        this.dynamics = filterDynamics(this.views)
      } else {
        this.dynamics!.forEach(d => d.change(value))
      }
    } else {
      this.destroyViews()
    }
  }

  destroy() {
    this.destroyViews()
    this.removeNode()
  }

  private views: View<State>[] | undefined
  private dynamics: DynamicView<State>[] | undefined
  private destroyViews() {
    if (this.views != null) {
      this.views.forEach(v => v.destroy())
      this.views = undefined
      this.dynamics = undefined
    }
  }
}

export class DOMWhen<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly opts: WhenOptions<State>,
    readonly children: DOMChild<State, Action>[]
    ) {}
  render(
    ctx: DOMContext<Action>,
    state: State,
    dispatch: (action: Action) => void
  ): DOMWhenView<State, Action> {
    const ref = ctx.doc.createComment(this.opts.refId || 'md:when')
    ctx.append(ref)
    const parent = ref.parentElement!
    const view = new DOMWhenView(
      this.opts.condition,
      ctx.withAppend((node: Node) => parent.insertBefore(node, ref)),
      dispatch,
      () => removeNode(ref),
      this.children.map(domChildToTemplate)
    )
    view.change(state)
    return view
  }
}

export const when = <State, Action>(
  opts: WhenOptions<State>,
  ...children: DOMChild<State, Action>[]
) => new DOMWhen<State, Action>(opts, children)

export const unless = <State, Action>(
  opts: WhenOptions<State>,
  ...children: DOMChild<State, Action>[]
) => new DOMWhen<State, Action>(
  {
    condition: (v: State) => !opts.condition(v),
    refId: opts.refId || 'md:unless'
  },
  children
)
