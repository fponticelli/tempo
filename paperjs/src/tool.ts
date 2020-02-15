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

import { Tool, KeyEvent, MouseEvent } from 'paper'
import { PaperAttribute, resolveAttribute, PaperEventHandler } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge
} from 'tempo-std/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { DerivedValue } from 'tempo-core/lib/value'
import { keys } from 'tempo-std/lib//objects'

type WritableTool = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Tool>>
>

type WritableToolOptionKeys = keyof WritableTool

type WritableToolOptions<State> = {
  [K in WritableToolOptionKeys]?: PaperAttribute<State, WritableTool[K]>
}

interface ToolAttributes<State> {
  active: PaperAttribute<State, boolean>
}

interface ToolEvents<State, Action> {
  onMouseDown?: PaperEventHandler<State, Action, MouseEvent, Tool>
  onMouseDrag?: PaperEventHandler<State, Action, MouseEvent, Tool>
  onMouseMove?: PaperEventHandler<State, Action, MouseEvent, Tool>
  onMouseUp?: PaperEventHandler<State, Action, MouseEvent, Tool>

  onKeyDown?: PaperEventHandler<State, Action, KeyEvent, Tool>
  onKeyUp?: PaperEventHandler<State, Action, KeyEvent, Tool>
}

type ToolOptions<State, Action, Query, T> = Partial<
  Merge<
    Merge<
      WritableToolOptions<State>,
      TempoAttributes<State, Action, Query, Tool, T>
    >,
    Merge<ToolAttributes<State>, ToolEvents<State, Action>>
  >
>

export function tool<State, Action, Query = unknown, T = unknown>(
  options: ToolOptions<State, Action, Query, T>
): PaperTemplate<State, Action, Query> {
  return {
    render(ctx: PaperContext<Action>, state: State) {
      const tool = new ctx.scope.Tool() as Tool
      let value: T | undefined
      if (options.afterrender) value = options.afterrender(state, tool, ctx)
      const active = resolveAttribute(options.active)(state)
      if (typeof active === 'undefined' || active === true) tool.activate()

      const derived = [] as ((state: State) => void)[]

      derived.push((newState: State) => (state = newState))

      if (typeof options.active === 'function')
        derived.push((state: State) => {
          const fun = options.active! as DerivedValue<State, boolean>
          if (fun(state)) tool.activate()
        })

      const anyTool = tool as any
      keys(options).forEach(attr => {
        if (attr.startsWith('on')) {
          const f = options[attr] as PaperEventHandler<State, Action, any, Tool>
          anyTool[attr] = (event: any) => {
            const action = f(state, event, tool, ctx.project)
            if (typeof action !== 'undefined') ctx.dispatch(action)
          }
        } else {
          const value = resolveAttribute(options[attr])
          anyTool[attr] = value
          if (typeof options[attr] === 'function') {
            const k = attr as keyof ToolOptions<State, Action, Query, T>
            derived.push((state: State) => {
              const fun = options[k]! as DerivedValue<State, boolean>
              anyTool[k] = fun(state)
            })
          }
        }
      })

      return {
        change(state: State) {
          if (options.beforechange)
            value = options.beforechange(state, tool, ctx, value)

          derived.forEach(d => d(state))

          if (options.afterchange)
            value = options.afterchange(state, tool, ctx, value)
        },
        destroy() {
          if (options.beforedestroy) options.beforedestroy(tool, ctx, value)
          tool.remove()
        },
        request(query: Query) {}
      }
    }
  }
}
