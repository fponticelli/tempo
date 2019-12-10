import { el } from 'tempo-dom/lib/element'
import { DOMAttribute } from 'tempo-dom/lib/value'
import { Item, PaperScope } from 'paper'
import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { View } from 'tempo-core/lib/view'
import { DOMContext } from 'tempo-dom/lib/context'

interface PaperLocal<State, Action, Query> {
  views: View<State, Query>[]
  context: PaperContext<Action>
}

export const project = <State, Action, Query>(
  options: {
    width: DOMAttribute<State, number>
    height: DOMAttribute<State, number>
    scope?: PaperScope
  },
  ...children: PaperTemplate<State, Action, Query>[]
) => {
  return el<
    State,
    Action,
    Query,
    HTMLCanvasElement,
    PaperLocal<State, Action, Query>
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
      const scope = options.scope || PaperScope.get(0) as unknown as PaperScope
      scope.setup(el)
      scope.install(window)
      scope.activate()
      const project = scope.project!
      const rootLayer = project.activeLayer
      const context = new PaperContext(
        scope,
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
      scope: PaperLocal<State, Action, Query> | undefined
    ) => {
      scope?.views.forEach(view => view.change(state))
      return scope
    },
    beforedestroy: (
      el: HTMLCanvasElement,
      ctx,
      scope: PaperLocal<State, Action, Query> | undefined
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
      scope: PaperLocal<State, Action, Query> | undefined
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
