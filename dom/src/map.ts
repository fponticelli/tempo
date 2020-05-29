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
import { domChildToTemplate } from './utils/dom'
import { map as mapArray } from 'tempo-std/lib/arrays'
import { Attribute, resolveAttribute } from './value'

class MapStateTemplate<OuterState, InnerState, Action, Query>
  implements DOMTemplate<OuterState, Action, Query> {
  constructor(
    readonly map: Attribute<OuterState, InnerState>,
    readonly whenUndefined: DOMTemplate<unknown, Action, Query>,
    readonly children: DOMTemplate<InnerState, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: OuterState): View<OuterState, Query> {
    const { children, map, whenUndefined } = this

    let isUndefined = true
    let views: View<InnerState, Query>[] = []

    const innerState = resolveAttribute(map)(state)

    if (typeof innerState !== 'undefined') {
      isUndefined = false
      views = mapArray(children, c => c.render(ctx, innerState))
    } else {
      isUndefined = true
      views = [whenUndefined.render(ctx, state)]
    }

    function destroy() {
      for (const view of views) view.destroy()
    }

    return {
      change: (state: OuterState) => {
        const innerState = resolveAttribute(map)(state)
        if (typeof innerState !== 'undefined') {
          if (isUndefined) {
            destroy()
            views = mapArray(children, c => c.render(ctx, innerState))
          } else {
            for (const view of views) view.change(innerState)
          }
          isUndefined = false
        } else {
          destroy()
          views = [whenUndefined.render(ctx, state)]
          isUndefined = true
        }
      },
      destroy,
      request: (query: Query) => {
        for (const view of views) view.request(query)
      }
    }
  }
}

export function mapState<OuterState, InnerState, Action, Query = unknown>(
  props: {
    map: Attribute<OuterState, InnerState>
    whenUndefined?: DOMChild<unknown, Action, Query>
  },
  ...children: DOMChild<InnerState, Action, Query>[]
): DOMTemplate<OuterState, Action, Query> {
  return new MapStateTemplate(
    props.map,
    domChildToTemplate(props.whenUndefined),
    mapArray(children, domChildToTemplate)
  )
}

export function mapField<
  OuterState,
  Key extends keyof OuterState,
  Action,
  Query = unknown
>(
  props: { field: Key; whenUndefined?: DOMChild<unknown, Action, Query> },
  ...children: DOMChild<OuterState[Key], Action, Query>[]
): DOMTemplate<OuterState, Action, Query> {
  const { field, whenUndefined } = props
  return mapState<OuterState, OuterState[Key], Action, Query>(
    { map: (v: OuterState) => v[field], whenUndefined },
    ...children
  )
}

export function mapStateAndKeep<
  OuterState,
  InnerState,
  Action,
  Query = unknown
>(
  props: {
    map: Attribute<OuterState, InnerState>
    whenUndefined?: DOMChild<unknown, Action, Query>
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
      if (typeof inner !== 'undefined') {
        return [inner, state]
      } else {
        return undefined
      }
    },
    domChildToTemplate(props.whenUndefined),
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
        if (typeof innerQuery !== 'undefined') {
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
