import { PaperEventHandler } from './value'
import { MouseEvent, Item } from 'paper'
import { View } from 'tempo-core/lib/view'
import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { TempoAttributes } from './tempo_attributes'
import { removeFields } from 'tempo-core/lib/util/objects'
import { UnwrappedDerivedValue, UnwrappedValue } from 'tempo-core/lib/value'
import { Merge, MakeOptional } from 'tempo-core/lib/types/objects'

export interface FrameEvent extends Event {
  // the number of times the frame event was fired
  count: number
  // the total amount of time passed since the first frame event in seconds
  time: number
  // the time passed in seconds since the last frame event
  delta: number
}

export interface ItemEvents<State, Action, El> {
  onFrame?: PaperEventHandler<State, Action, FrameEvent, El>
  onMouseDown?: PaperEventHandler<State, Action, MouseEvent, El>
  onMouseDrag?: PaperEventHandler<State, Action, MouseEvent, El>
  onMouseUp?: PaperEventHandler<State, Action, MouseEvent, El>
  onClick?: PaperEventHandler<State, Action, MouseEvent, El>
  onDoubleClick?: PaperEventHandler<State, Action, MouseEvent, El>
  onMouseMove?: PaperEventHandler<State, Action, MouseEvent, El>
  onMouseEnter?: PaperEventHandler<State, Action, MouseEvent, El>
  onMouseLeave?: PaperEventHandler<State, Action, MouseEvent, El>
}

export class ItemTemplate<
  State,
  Action,
  Query,
  I extends Item = Item,
  T = unknown
> implements PaperTemplate<State, Action, Query> {
  constructor(
    readonly createItem: (
      wrapper: { value: T | undefined },
      ctx: PaperContext<Action>
    ) => (state: State) => { item: I; views: View<State, Query>[] | undefined },
    readonly changeItem: (
      wrapper: { value: T | undefined },
      ctx: PaperContext<Action>,
      item: I,
      views: View<State, Query>[] | undefined
    ) => (state: State) => void,
    readonly destroy: (
      wrapper: { value: T | undefined },
      ctx: PaperContext<Action>,
      item: I,
      views: View<State, Query>[] | undefined
    ) => () => void,
    readonly request: (
      wrapper: { value: T | undefined },
      ctx: PaperContext<Action>,
      item: I,
      views: View<State, Query>[] | undefined
    ) => (query: Query) => void
  ) {}
  render(ctx: PaperContext<Action>, state: State) {
    const wrapper = { value: undefined }
    const { item, views } = this.createItem(wrapper, ctx)(state)
    ctx.append(item)
    const change = this.changeItem(wrapper, ctx, item, views)
    const destroy = this.destroy(wrapper, ctx, item, views)
    const request = this.request(wrapper, ctx, item, views)
    return { change, destroy, request }
  }
}

export const createItem = <State, Action, Query, I extends Item, T, Option>(
  makeItem: (state: State) => I,
  options: MakeOptional<
    Merge<
      { args?: {} },
      Merge<Option, TempoAttributes<State, Action, Query, I, T>>
    >
  >,
  children?: PaperTemplate<State, Action, Query>[] | undefined
) => {
  const { afterchange, afterrender, beforechange, beforedestroy } = options
  const attributes = removeFields(
    options,
    'afterchange',
    'afterrender',
    'beforechange',
    'beforedestroy'
  )
  const setters = Object.keys(attributes).map(k => {
    const attr = (attributes as any)[k] as UnwrappedValue<State, any>
    if (k.substring(0, 2) === 'on') {
      const attrf = attr as PaperEventHandler<State, Action, any, I>
      return {
        kind: 'dynamic',
        f: (state: State, item: I, ctx: PaperContext<Action>) => {
          const anyItem = item as any

          anyItem[k] = (e: any) => {
            const action = attrf(state, e, item)
            if (typeof action !== 'undefined') {
              ctx.dispatch(action)
            }
          }
        }
      }
    } else if (typeof attr === 'function') {
      const attrf = attr as UnwrappedDerivedValue<State, any>
      return {
        kind: 'dynamic',
        f: (state: State, item: I) => {
          const anyItem = item as any
          const value = attrf(state)
          // TODO
          anyItem[k] = value
        }
      }
    } else {
      return {
        kind: 'static',
        f: (_: State, item: I) => ((item as any)[k] = attr as any)
      }
    }
  })
  const dynamics = setters
    .filter(setter => setter.kind === 'dynamic')
    .map(setter => setter.f)
  const make = (
    wrapper: { value: T | undefined },
    ctx: PaperContext<Action>
  ) => (state: State): { item: I; views: View<State, Query>[] | undefined } => {
    const item = makeItem(state)
    setters.forEach(setter => setter.f(state, item, ctx))
    const newCtx = ctx.withAppend(child => item.addChild(child))
    const views = children?.map(child => child.render(newCtx, state))
    if (afterrender) {
      wrapper.value = afterrender(state, item, ctx)
    }
    return { item, views }
  }
  return new ItemTemplate<State, Action, Query, I, T>(
    make,
    (
      wrapper: { value: T | undefined },
      ctx: PaperContext<Action>,
      item: I,
      views: View<State, Query>[] | undefined
    ) => (state: State): void => {
      if (beforechange) {
        wrapper.value = beforechange(state, item, ctx, wrapper.value)
      }
      if (views) {
        views.forEach(view => view.change(state))
      }
      dynamics.forEach(dyna => dyna(state, item, ctx))
      if (afterchange) {
        wrapper.value = afterchange(state, item, ctx, wrapper.value)
      }
    },
    (
      wrapper: { value: T | undefined },
      ctx: PaperContext<Action>,
      item: I,
      views: View<State, Query>[] | undefined
    ) => () => {
      if (beforedestroy) {
        beforedestroy(item, ctx, wrapper.value)
      }
      item.remove()
      if (views) {
        views.forEach(view => view.destroy())
      }
    },
    (
      wrapper: { value: T | undefined },
      ctx: PaperContext<Action>,
      item: I,
      views: View<State, Query>[] | undefined
    ) => (query: Query) => {
      views?.forEach(view => view.request(query))
      if (typeof options.request !== 'undefined') {
        options.request(query, item, ctx, wrapper.value)
      }
    }
  )
}
