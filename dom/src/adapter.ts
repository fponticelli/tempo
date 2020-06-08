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

import { View } from 'tempo-core/lib/view'
import { ComponentTemplate } from './component'
import { DOMTemplate } from './template'
import { DOMContext } from './context'
import { Attribute, resolveAttribute } from './value'

class AdapterTemplate<OuterState, InnerState, OuterAction, InnerAction, Query>
  implements DOMTemplate<OuterState, OuterAction, Query> {
  private dispatchPropagate:
    | undefined
    | ((state: InnerState, action: InnerAction) => void)

  constructor(
    readonly bootstrapState: (outer: OuterState) => InnerState,
    readonly mergeStates: Attribute<
      { outerState: OuterState; innerState: InnerState },
      InnerState
    >,
    readonly propagate: (
      args: PropagateArg<OuterState, InnerState, OuterAction, InnerAction>
    ) => void,
    readonly child: ComponentTemplate<InnerState, InnerAction, Query>
  ) {}

  render(
    ctx: DOMContext<OuterAction>,
    outerState: OuterState
  ): View<OuterState, Query> {
    const innerState = this.bootstrapState(outerState)
    const mergedState =
      resolveAttribute(this.mergeStates)({
        outerState,
        innerState
      }) ?? innerState

    const viewComponent = this.child.render(
      ctx.withDispatch(() => {
        /* COMPONENT IS DETACHED FROM CONTAINER AND DOESN'T PROPAGATE */
      }),
      mergedState
    )

    const store = viewComponent.store

    this.dispatchPropagate = (state: InnerState, action: InnerAction) => {
      this.propagate({
        action,
        innerState: state,
        outerState,
        dispatchInner: (action: InnerAction) => store.process(action),
        dispatchOuter: ctx.dispatch
      })
    }

    store.observable.on(this.dispatchPropagate)

    return {
      change: (state: OuterState) => {
        const innerState = store.property.get()
        const newState = resolveAttribute(this.mergeStates)({
          outerState: state,
          innerState
        })
        if (newState !== undefined) viewComponent.change(newState)
      },
      destroy: () => {
        viewComponent.destroy()
        if (this.dispatchPropagate !== undefined) {
          store.observable.off(this.dispatchPropagate)
        }
      },
      request: (query: Query) => {
        viewComponent.request(query)
      }
    }
  }
}

export interface PropagateArg<
  OuterState,
  InnerState,
  OuterAction,
  InnerAction
> {
  action: InnerAction
  innerState: InnerState
  outerState: OuterState
  dispatchInner: (action: InnerAction) => void
  dispatchOuter: (action: OuterAction) => void
}

export function adapter<
  OuterState,
  InnerState,
  OuterAction,
  InnerAction,
  Query = unknown
>(
  props: {
    bootstrapState: (outer: OuterState) => InnerState
    mergeStates?: Attribute<
      {
        outerState: OuterState
        innerState: InnerState
      },
      InnerState
    >
    propagate?: (
      args: PropagateArg<OuterState, InnerState, OuterAction, InnerAction>
    ) => void
  },
  child: ComponentTemplate<InnerState, InnerAction, Query>
): DOMTemplate<OuterState, OuterAction, Query> {
  return new AdapterTemplate(
    props.bootstrapState,
    props.mergeStates,
    props.propagate || (() => undefined),
    child
  )
}

export function localAdapter<State, Action, Query = unknown>(
  props: {
    propagate?: (args: PropagateArg<State, State, Action, Action>) => void
  },
  child: ComponentTemplate<State, Action, Query>
): DOMTemplate<State, Action, Query> {
  return new AdapterTemplate(
    state => state,
    ({ outerState }) => outerState,
    props.propagate || (() => undefined),
    child
  )
}
