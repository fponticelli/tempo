import { el } from 'tempo-dom/lib/element'
import { DOMAttribute } from 'tempo-dom/lib/value'
import { Project, Layer, Item } from 'paper'
import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { View } from 'tempo-core/lib/view'
import { DOMContext } from 'tempo-dom/lib/context'

interface PaperScope<State, Action, Query> {
  views: View<State, Query>[]
  context: PaperContext<Action>
}

export const project = <State, Action, Query>(
  options: {
    width: DOMAttribute<State, number>
    height: DOMAttribute<State, number>
  },
  ...children: PaperTemplate<State, Action, Query>[]
) => {
  return el<
    State,
    Action,
    Query,
    HTMLCanvasElement,
    PaperScope<State, Action, Query>
  >('canvas', {
    attrs: {
      width: options.width,
      height: options.height
    },
    afterrender: (
      state: State,
      el: HTMLCanvasElement,
      ctx: DOMContext<Action>
    ) => {
      const project = new Project(el)
      const rootLayer = new Layer()
      project.addLayer(rootLayer)
      const context = new PaperContext(
        project,
        (item: Item) => rootLayer.addChild(item),
        (action: Action) => ctx.dispatch(action)
      )
      const views = children.map(child => child.render(context, state))
      return { context, views }
    },
    afterchange: (
      state: State,
      el: HTMLCanvasElement,
      ctx,
      scope: PaperScope<State, Action, Query> | undefined
    ) => {
      scope?.views.forEach(view => view.change(state))
      return scope
    },
    beforedestroy: (
      el: HTMLCanvasElement,
      ctx,
      scope: PaperScope<State, Action, Query> | undefined
    ) => {
      if (typeof scope !== undefined) {
        const { context, views } = scope!
        views.forEach(view => view.destroy())
        context.project.remove()
      }
    },
    respond: (
      query: Query,
      el: HTMLCanvasElement,
      ctx: DOMContext<Action>,
      scope: PaperScope<State, Action, Query> | undefined
    ) => {
      if (typeof scope !== undefined) {
        const { views } = scope!
        views.forEach(view => view.request(query))
        return scope
      } else {
        return undefined
      }
    }
  })
}
