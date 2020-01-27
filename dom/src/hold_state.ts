import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { map as mapA, each } from 'tempo-std/lib/arrays'
import { domChildToTemplate } from './utils'

export const holdMappedState = <State, HeldState>(map: (s: State) => HeldState) => {
  let counter = 0
  const stateCache = new Map<number, HeldState>()
  const capture = <Action, Query>(...children: DOMChild<State, Action, Query>[]): DOMTemplate<State, Action, Query> => {
    const childTemplates = mapA(domChildToTemplate, children)
    return {
      render(ctx: DOMContext<Action>, state: State) {
        const views = mapA(t => t.render(ctx, state), childTemplates)
        const id = ++counter
        return {
          change(state: State) {
            stateCache.set(id,  map(state))
            each(v => v.change(state), views)
          },
          destroy() {
            stateCache.delete(id)
            each(v => v.destroy(), views)
          },
          request(query: Query) { each(v => v.request(query), views) }
        }
      }
    }
  }

  const release = <InnerState, InnerAction, InnerQuery>(
    ...children: DOMChild<[HeldState, InnerState], InnerAction, InnerQuery>[]
  ): DOMTemplate<InnerState, InnerAction, InnerQuery> => {
    const childTemplates = mapA(domChildToTemplate, children)
    return {
      render(ctx: DOMContext<InnerAction>, state: InnerState) {
        const id = counter // TODO this is not a very robust solution
        const heldState = stateCache.get(id)
        if (typeof heldState === 'undefined') throw 'held state is not available at render, make sure that your `release` template is nested inside `capture`.'
        const combinedState = [heldState, state] as [HeldState, InnerState]
        const views = mapA(t => t.render(ctx, combinedState), childTemplates)
        return {
          change(state: InnerState) {
            const heldState = stateCache.get(id)
            if (typeof heldState === 'undefined') throw 'held state is not available at change, make sure that your `release` template is nested inside `capture`.'
            const combinedState = [heldState, state] as [HeldState, InnerState]
            each(v => v.change(combinedState), views)
          },
          destroy() { each(v => v.destroy(), views) },
          request(query: InnerQuery) { each(v => v.request(query), views) }
        }
      }
    }
  }

  return { capture, release }
}

export const holdState = <State>() => holdMappedState<State, State>(a => a)
