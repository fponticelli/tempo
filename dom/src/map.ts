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

import { DOMChild, DOMTemplate } from './template'
import { View } from 'tempo-core/lib/view'
import { DOMContext } from './context'
import { domChildToTemplate, removeNode } from './utils/dom'
import { map as mapArray } from 'tempo-std/lib/arrays'
import { Attribute, resolveAttribute } from './value'

export class MapStateTemplate<OuterState, InnerState, Action, Query>
  implements DOMTemplate<OuterState, Action, Query> {
  constructor(
    readonly map: Attribute<OuterState, InnerState>,
    readonly whenUndefined: DOMTemplate<OuterState, Action, Query>,
    readonly equals: (a: InnerState, b: InnerState) => boolean,
    readonly children: DOMTemplate<InnerState, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: OuterState): View<OuterState, Query> {
    const { children, map, whenUndefined, equals } = this

    let views: View<InnerState | OuterState, Query>[] = []

    const { ctx: newCtx, ref } = ctx.withAppendToReference()

    let current: InnerState | undefined = undefined
    const next = resolveAttribute(map)(state)

    if (next === undefined) {
      views = [whenUndefined.render(newCtx, state)]
    } else {
      current = next
      views = mapArray(children, c => c.render(newCtx, next))
    }

    function destroy() {
      for (const view of views) view.destroy()
    }

    return {
      change: (state: OuterState) => {
        const next = resolveAttribute(map)(state)
        if (next !== undefined) {
          if (current === undefined) {
            destroy()
            current = next
            views = mapArray(children, c => c.render(newCtx, next))
          } else if (!equals(current, next)) {
            current = next
            for (const view of views) view.change(next)
          }
        } else {
          if (current !== undefined) {
            current = undefined
            destroy()
            views = [whenUndefined.render(newCtx, state)]
          } else {
            for (const view of views) view.change(state)
          }
        }
      },
      destroy: () => {
        destroy()
        removeNode(ref)
      },
      request: (query: Query) => {
        for (const view of views) view.request(query)
      }
    }
  }
}

export function mapState<OuterState, InnerState, Action, Query = unknown>(
  props: {
    map: Attribute<OuterState, InnerState>
    whenUndefined?: DOMChild<OuterState, Action, Query>
    equals?: (a: InnerState, b: InnerState) => boolean
  },
  ...children: DOMChild<InnerState, Action, Query>[]
): DOMTemplate<OuterState, Action, Query> {
  return new MapStateTemplate(
    props.map,
    domChildToTemplate(props.whenUndefined),
    props.equals ?? ((a: InnerState, b: InnerState) => false),
    mapArray(children, domChildToTemplate)
  )
}

export function mapField<
  OuterState,
  Key extends keyof OuterState,
  Action,
  Query = unknown
>(
  props:
    | {
        field: Key
        whenUndefined?: DOMChild<OuterState, Action, Query>
        equals?: (a: OuterState[Key], b: OuterState[Key]) => boolean
      }
    | Key,
  ...children: DOMChild<OuterState[Key], Action, Query>[]
): DOMTemplate<OuterState, Action, Query> {
  if (typeof props === 'object') {
    const { field, whenUndefined, equals } = props
    return mapState<OuterState, OuterState[Key], Action, Query>(
      { map: (v: OuterState) => v[field], whenUndefined, equals },
      ...children
    )
  } else {
    return mapState<OuterState, OuterState[Key], Action, Query>(
      { map: (v: OuterState) => v[props] },
      ...children
    )
  }
}

export function mapStateAndKeep<
  OuterState,
  InnerState,
  Action,
  Query = unknown
>(
  props: {
    map: Attribute<OuterState, InnerState>
    whenUndefined?: DOMChild<OuterState, Action, Query>
    equals?: (
      a: [InnerState, OuterState],
      b: [InnerState, OuterState]
    ) => boolean
  },
  ...children: DOMChild<[InnerState, OuterState], Action, Query>[]
): DOMTemplate<OuterState, Action, Query> {
  return new MapStateTemplate<
    OuterState,
    [InnerState, OuterState],
    Action,
    Query
  >(
    (state: OuterState) => {
      const inner = resolveAttribute(props.map)(state)
      if (inner !== undefined) {
        return [inner, state]
      } else {
        return undefined
      }
    },
    domChildToTemplate(props.whenUndefined),
    props.equals ??
      ((a: [InnerState, OuterState], b: [InnerState, OuterState]) => false),
    mapArray(children, domChildToTemplate)
  )
}

class MapActionTemplate<State, OuterAction, InnerAction, Query>
  implements DOMTemplate<State, OuterAction, Query> {
  constructor(
    readonly map: (value: InnerAction) => OuterAction | undefined,
    readonly children: DOMTemplate<State, InnerAction, Query>[]
  ) {}

  render(ctx: DOMContext<OuterAction>, state: State): View<State, Query> {
    const { children, map } = this
    const newCtx = ctx.conditionalMapAction(map)
    const views = mapArray(children, c => c.render(newCtx, state))
    return {
      change: (state: State) => {
        for (const view of views) view.change(state)
      },
      destroy: () => {
        for (const view of views) view.destroy()
      },
      request: (query: Query) => {
        for (const view of views) view.request(query)
      }
    }
  }
}

export function mapAction<State, OuterAction, InnerAction, Query = unknown>(
  props: { map: (value: InnerAction) => OuterAction | undefined },
  ...children: DOMChild<State, InnerAction, Query>[]
): DOMTemplate<State, OuterAction, Query> {
  return new MapActionTemplate<State, OuterAction, InnerAction, Query>(
    props.map,
    mapArray(children, domChildToTemplate)
  )
}

class MapQueryTemplate<State, Action, OuterQuery, InnerQuery>
  implements DOMTemplate<State, Action, OuterQuery> {
  constructor(
    readonly map: (value: OuterQuery) => InnerQuery | undefined,
    readonly children: DOMTemplate<State, Action, InnerQuery>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State, OuterQuery> {
    const { children, map } = this
    const views = mapArray(children, c => c.render(ctx, state))
    return {
      change: (state: State) => {
        for (const view of views) view.change(state)
      },
      destroy: () => {
        for (const view of views) view.destroy()
      },
      request: (query: OuterQuery) => {
        const innerQuery = map(query)
        if (innerQuery !== undefined) {
          views.forEach(view => view.request(innerQuery))
        }
      }
    }
  }
}

export function mapQuery<State, Action, OuterQuery, InnerQuery>(
  props: { map: (value: OuterQuery) => InnerQuery },
  ...children: DOMChild<State, Action, InnerQuery>[]
): DOMTemplate<State, Action, OuterQuery> {
  return new MapQueryTemplate<State, Action, OuterQuery, InnerQuery>(
    props.map,
    mapArray(children, domChildToTemplate)
  )
}

export function mapQueryConditional<State, Action, OuterQuery, InnerQuery>(
  props: { map: (value: OuterQuery) => InnerQuery | undefined },
  ...children: DOMChild<State, Action, InnerQuery>[]
): DOMTemplate<State, Action, OuterQuery> {
  return new MapQueryTemplate<State, Action, OuterQuery, InnerQuery>(
    props.map,
    mapArray(children, domChildToTemplate)
  )
}
