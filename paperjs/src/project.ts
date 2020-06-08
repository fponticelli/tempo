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
import { Attribute } from 'tempo-dom/lib/value'
import { Item, PaperScope } from 'paper'
import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { View } from 'tempo-core/lib/view'
import { DOMContext } from 'tempo-dom/lib/context'
import { resolveAttribute } from './value'
import { DerivedValue } from 'tempo-core/lib/value'

interface PaperLocal<State, Action, Query> {
  derived: ((state: State) => void)[]
  views: View<State, Query>[]
  context: PaperContext<Action>
}

export function project<State, Action, Query>(
  props: {
    width: Attribute<State, number>
    height: Attribute<State, number>
    scope?: PaperScope
    active?: Attribute<State, boolean>
    respond?: (
      query: Query,
      el: HTMLCanvasElement,
      ctx: DOMContext<Action>,
      scope: PaperLocal<State, Action, Query> | undefined
    ) => void
  },
  ...children: PaperTemplate<State, Action, Query>[]
) {
  return el<
    State,
    Action,
    Query,
    HTMLCanvasElement,
    PaperLocal<State, Action, Query>
  >('canvas', {
    attrs: {
      width: props.width,
      height: props.height
    },
    afterrender: (
      state: State,
      el: HTMLCanvasElement,
      ctx: DOMContext<Action>
    ) => {
      const scope =
        props.scope || ((PaperScope.get(0) as unknown) as PaperScope)
      const derived = [] as ((state: State) => void)[]
      scope.setup(el)
      scope.install(window)
      const active = resolveAttribute(props.active)(state)
      if (active === undefined || active === true) {
        scope.activate()
      }

      const project = scope.project!
      if (active === undefined || active === true) {
        project.activate()
      }

      if (typeof props.active === 'function')
        derived.push((state: State) => {
          const fun = props.active! as DerivedValue<State, boolean>
          if (fun(state)) {
            scope.activate()
            project.activate()
          }
        })

      if (typeof props.width === 'function') {
        derived.push((state: State) => {
          const f = props.width as DerivedValue<State, number>
          project.view.viewSize!.width = f(state) || null
        })
      }

      if (typeof props.height === 'function') {
        derived.push((state: State) => {
          const f = props.height as DerivedValue<State, number>
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
      if (scope !== undefined) {
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
      if (scope !== undefined) {
        const { views } = scope!
        views.forEach(view => view.request(query))
        if (props.respond) {
          props.respond(query, el, ctx, scope)
        }
        return scope
      } else {
        return undefined
      }
    }
  })
}
