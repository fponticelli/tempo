import { el } from 'tempo-dom/lib/element'
import { DOMAttribute } from 'tempo-dom/lib/value'
import { Project, Layer, Item } from 'paper'
import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { View, DynamicView, filterDynamics } from 'tempo-core/lib/view'
import { DOMContext } from 'tempo-dom/lib/context'

interface PaperScope<State, Action> {
  views: View<State>[]
  dynamics: DynamicView<State>[]
  context: PaperContext<Action>
}

export const project = <State, Action>(
  options: {
    width: DOMAttribute<State, number>
    height: DOMAttribute<State, number>
  },
  ...children: PaperTemplate<State, Action>[]
) => {
  return el<State, Action, HTMLCanvasElement, PaperScope<State, Action>>(
    'canvas',
    {
      attrs: {
        width: options.width,
        height: options.height
      },
      afterrender: (state: State, el: HTMLCanvasElement, ctx: DOMContext<Action>) => {
        const project = new Project(el)
        const rootLayer = new Layer()
        project.addLayer(rootLayer)
        const context = new PaperContext(
          project,
          (item: Item) => rootLayer.addChild(item),
          (action: Action) => ctx.dispatch(action)
        )
        const views = children.map(child => child.render(context, state))
        const dynamics = filterDynamics(views)
        return { context, views, dynamics }
      },
      afterchange: (state: State, el: HTMLCanvasElement, ctx, scope: PaperScope<State, Action> | undefined) => {
        scope?.dynamics.forEach(view => view.change(state))
        return scope
      },
      beforedestroy: (el: HTMLCanvasElement, ctx, scope: PaperScope<State, Action> | undefined) => {
        if (typeof scope !== undefined) {
          const { context, views } = scope!
          views.forEach(view => view.destroy())
          context.project.remove()
        }
      }
    }
  )
}
