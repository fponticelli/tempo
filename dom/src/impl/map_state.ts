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

import { DOMChild, DOMTemplate } from '../template'
import { View } from 'tempo-core/lib/view'
import { DOMContext } from '../context'
import { domChildToTemplate, removeNode } from '../utils/dom'
import { map as mapArray } from 'tempo-std/lib/arrays'
import { Attribute, resolveAttribute } from '../value'

export class MapStateTemplate<OuterState, InnerState, Action, Query>
  implements DOMTemplate<OuterState, Action, Query> {
  constructor(
    readonly map: Attribute<OuterState, InnerState>,
    readonly whenNot: DOMTemplate<OuterState, Action, Query>,
    readonly equals: (a: InnerState, b: InnerState) => boolean,
    readonly children: DOMTemplate<InnerState, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: OuterState): View<OuterState, Query> {
    const { children, map, whenNot, equals } = this

    let views: View<InnerState | OuterState, Query>[] = []

    const { ctx: newCtx, ref } = ctx.withAppendToReference()

    let current: InnerState | undefined = undefined
    const next = resolveAttribute(map)(state)

    if (next === undefined) {
      views = [whenNot.render(newCtx, state)]
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
            views = [whenNot.render(newCtx, state)]
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
    whenNot?: DOMChild<OuterState, Action, Query>
    equals?: (a: InnerState, b: InnerState) => boolean
  },
  ...children: DOMChild<InnerState, Action, Query>[]
): DOMTemplate<OuterState, Action, Query> {
  return new MapStateTemplate(
    props.map,
    domChildToTemplate(props.whenNot),
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
        whenNot?: DOMChild<OuterState, Action, Query>
        equals?: (a: OuterState[Key], b: OuterState[Key]) => boolean
      }
    | Key,
  ...children: DOMChild<OuterState[Key], Action, Query>[]
): DOMTemplate<OuterState, Action, Query> {
  if (typeof props === 'object') {
    const { field, whenNot, equals } = props
    return mapState<OuterState, OuterState[Key], Action, Query>(
      { map: (v: OuterState) => v[field], whenNot, equals },
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
    whenNot?: DOMChild<OuterState, Action, Query>
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
    domChildToTemplate(props.whenNot),
    props.equals ??
      ((a: [InnerState, OuterState], b: [InnerState, OuterState]) => false),
    mapArray(children, domChildToTemplate)
  )
}
