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
import { DOMTemplate } from '../template'
import { DOMContext } from '../context'
import { Attribute, resolveAttribute } from '../value'

export class AdapterTemplate<
  OuterState,
  InnerState,
  OuterAction,
  InnerAction,
  Query
> implements DOMTemplate<OuterState, OuterAction, Query> {
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
    let innerState = this.bootstrapState(outerState)
    innerState =
      resolveAttribute(this.mergeStates)({
        outerState,
        innerState
      }) ?? innerState

    const newCtx = ctx.withDispatch((action: InnerAction) =>
      dispatchPropagate(viewComponent.state, action)
    )

    const viewComponent = this.child.render(newCtx, innerState)

    const dispatchPropagate = (innerState: InnerState, action: InnerAction) => {
      this.propagate({
        action,
        innerState,
        outerState,
        dispatchInner: (action: InnerAction) => viewComponent.dispatch(action),
        dispatchOuter: (action: OuterAction) => ctx.dispatch(action)
      })
    }

    return {
      change: (outerState: OuterState) => {
        const newState = resolveAttribute(this.mergeStates)({
          outerState,
          innerState: viewComponent.state
        })
        if (newState !== undefined) {
          viewComponent.change(newState)
        }
      },
      destroy: () => {
        viewComponent.destroy()
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
