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
import { Props } from './value'
import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { DerivedValue } from 'tempo-core/lib/value'
import { keys } from 'tempo-std/lib//objects'

type WritableTool = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Tool>>
>

type WritableToolOptionKeys = keyof WritableTool

type WritableToolProps<State> = {
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

type ToolProps<State, Action, Query, T> = Partial<
  Merge<
    Merge<
      WritableToolProps<State>,
      Props<State, Action, Query, Tool, T>
    >,
    Merge<ToolAttributes<State>, ToolEvents<State, Action>>
  >
>

export function tool<State, Action, Query = unknown, T = unknown>(
  props: ToolProps<State, Action, Query, T>
): PaperTemplate<State, Action, Query> {
  return {
    render(ctx: PaperContext<Action>, state: State) {
      const tool = new ctx.scope.Tool() as Tool
      let value: T | undefined
      if (props.afterrender) value = props.afterrender(state, tool, ctx)
      const active = resolveAttribute(props.active)(state)
      if (typeof active === 'undefined' || active === true) tool.activate()

      const derived = [] as ((state: State) => void)[]

      derived.push((newState: State) => (state = newState))

      if (typeof props.active === 'function')
        derived.push((state: State) => {
          const fun = props.active! as DerivedValue<State, boolean>
          if (fun(state)) tool.activate()
        })

      const anyTool = tool as any
      keys(props).forEach(attr => {
        if (attr.startsWith('on')) {
          const f = props[attr] as PaperEventHandler<State, Action, any, Tool>
          anyTool[attr] = (event: any) => {
            const action = f(state, event, tool, ctx.project)
            if (typeof action !== 'undefined') ctx.dispatch(action)
          }
        } else {
          const value = resolveAttribute(props[attr])
          anyTool[attr] = value
          if (typeof props[attr] === 'function') {
            const k = attr as keyof ToolProps<State, Action, Query, T>
            derived.push((state: State) => {
              const fun = props[k]! as DerivedValue<State, boolean>
              anyTool[k] = fun(state)
            })
          }
        }
      })

      return {
        change(state: State) {
          if (props.beforechange)
            value = props.beforechange(state, tool, ctx, value)

          derived.forEach(d => d(state))

          if (props.afterchange)
            value = props.afterchange(state, tool, ctx, value)
        },
        destroy() {
          if (props.beforedestroy) props.beforedestroy(tool, ctx, value)
          tool.remove()
        },
        request(query: Query) {}
      }
    }
  }
}
