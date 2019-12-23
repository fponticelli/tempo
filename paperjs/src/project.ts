/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { el } from 'tempo-dom/lib/element'
import { DOMAttribute } from 'tempo-dom/lib/value'
import { Item, PaperScope } from 'paper'
import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { View } from 'tempo-core/lib/view'
import { DOMContext } from 'tempo-dom/lib/context'
import { resolveAttribute } from './value'
import { UnwrappedDerivedValue } from 'tempo-core/lib/value'

interface PaperLocal<State, Action, Query> {
  derived: ((state: State) => void)[]
  views: View<State, Query>[]
  context: PaperContext<Action>
}

export const project = <State, Action, Query>(
  options: {
    width: DOMAttribute<State, number>
    height: DOMAttribute<State, number>
    scope?: PaperScope
    active?: DOMAttribute<State, boolean>
    respond?: (
      query: Query,
      el: HTMLCanvasElement,
      ctx: DOMContext<Action>,
      scope: PaperLocal<State, Action, Query> | undefined
    ) => void
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
      const scope =
        options.scope || ((PaperScope.get(0) as unknown) as PaperScope)
      const derived = [] as ((state: State) => void)[]
      scope.setup(el)
      scope.install(window)
      const active = resolveAttribute(options.active)(state)
      if (typeof active === 'undefined' || active === true) {
        scope.activate()
      }

      const project = scope.project!
      if (typeof active === 'undefined' || active === true) {
        project.activate()
      }

      if (typeof options.active === 'function')
        derived.push((state: State) => {
          const fun = options.active! as UnwrappedDerivedValue<State, boolean>
          if (fun(state)) {
            scope.activate()
            project.activate()
          }
        })

      if (typeof options.width === 'function') {
        derived.push((state: State) => {
          const f = options.width as UnwrappedDerivedValue<State, number>
          project.view.viewSize!.width = f(state) || null
        })
      }

      if (typeof options.height === 'function') {
        derived.push((state: State) => {
          const f = options.height as UnwrappedDerivedValue<State, number>
          project.view.viewSize!.height = f(state) || null
        })
      }

      const rootLayer = project.activeLayer
      const context = new PaperContext(
        el,
        scope,
        project,
        (item: Item) => rootLayer.addChild(item),
        (action: Action) => ctx.dispatch(action)
      )
      const views = children.map(child => child.render(context, state))
      return { context, views, derived }
    },
    afterchange: (
      state: State,
      el: HTMLCanvasElement,
      ctx,
      scope: PaperLocal<State, Action, Query> | undefined
    ) => {
      scope?.derived.forEach(f => f(state))
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
        if (options.respond) {
          options.respond(query, el, ctx, scope)
        }
        return scope
      } else {
        return undefined
      }
    }
  })
}