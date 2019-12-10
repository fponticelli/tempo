import { Tool } from 'paper'
import { PaperAttribute, resolveAttribute } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge,
  MakeOptional
} from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { PaperTemplate } from 'paperjs/lib/template'
import { PaperContext } from 'paperjs/lib/context'
import { UnwrappedDerivedValue } from 'tempo-core/lib/value'

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

}

type ToolOptions<State, Action, Query, T> = MakeOptional<
  Merge<
    Merge<
      WritableToolOptions<State>,
      TempoAttributes<State, Action, Query, Tool, T>
    >,
    Merge<
      ToolAttributes<State>,
      ToolEvents<State, Action>
    >
  >
>

const attrs = ['minDistance', 'maxDistance', 'fixedDistance']

export const tool = <State, Action, Query = unknown, T = unknown>(
  options: ToolOptions<State, Action, Query, T>
): PaperTemplate<State, Action, Query> => {
  return {
    render(ctx: PaperContext<Action>, state: State) {
      const tool = new ctx.scope.Tool() as Tool
      let value: T | undefined
      if (options.afterrender)
         value = options.afterrender(state, tool, ctx)
      if (resolveAttribute(options.active))
        tool.activate()

      const derived = [] as ((state: State) => void)[]
      if (typeof options.active === 'function')
        derived.push((state: State) => {
          const fun = options.active! as UnwrappedDerivedValue<State, boolean>
          if (fun(state)) tool.activate()
        })

      for (const attr of attrs) {
        if (typeof options[attr] !== 'undefined') continue
        const value = resolveAttribute(options[attr])
        tool[attr] = falue
        if (typeof options[attr] === 'function') {
          derived.push((state: State) => {
            const fun = options[attr]! as UnwrappedDerivedValue<State, boolean>
            options[attr] = fun(state)
          })
        }
      }

      return {
        change(state: State) {
          if (options.beforechange)
            value = options.beforechange(state, tool, ctx, value)

          derived.forEach(d => d(state))

          if (options.afterchange)
            value = options.afterchange(state, tool, ctx, value)
        },
        destroy() {
          if (options.beforedestroy)
            options.beforedestroy(tool, ctx, value)
        },
        request(query: Query) {

        }
      }
    }
  }
}
