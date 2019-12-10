import { Tool, Point, Item } from 'paper'
import { PaperAttribute } from './value'
import {
  WritableFields,
  ExcludeFunctionFields,
  RemoveNullableFromFields,
  Merge,
  MakeOptional
} from 'tempo-core/lib/types/objects'
import { TempoAttributes } from './tempo_attributes'
import { ItemEvents, createItem } from './item'
import { PaperTemplate } from 'paperjs/lib/template'
import { PaperContext } from 'paperjs/lib/context'

type WritableTool = ExcludeFunctionFields<
  RemoveNullableFromFields<WritableFields<Tool>>
>

type WritableToolOptionKeys = keyof WritableTool

type WritableToolOptions<State> = {
  [K in WritableToolOptionKeys]?: PaperAttribute<State, WritableTool[K]>
}

type ToolOptions<State, Action, Query, T> = MakeOptional<
  Merge<
    Merge<
      WritableToolOptions<State>,
      TempoAttributes<State, Action, Query, Item, T>
    >,
    ItemEvents<State, Action, Tool>
  >
>

export const tool = <State, Action, Query = unknown, T = unknown>(
  options: ToolOptions<State, Action, Query, T>
): PaperTemplate<State, Action, Query> => {
  return {
    render(ctx: PaperContext<Action>, state: State) {
      return {
        change(value: State) {

        },
        destroy() {

        },
        request(query: Query) {

        }
      }
    }
  }
}
