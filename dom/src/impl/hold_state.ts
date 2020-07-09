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

import { DOMTemplate } from '../template'
import { DOMContext } from '../context'
import { IBuilder, childOrBuilderToTemplate } from './dom_builder'
import { MapState } from '../html'

export type ReleaseF<
  StateA,
  StateB,
  StateC,
  Action,
  Query,
  Builder extends IBuilder<StateC, Action, Query>
> = (
  merge: (a: StateA, b: StateB) => StateC,
  init: (builder: Builder) => void
) => DOMTemplate<StateB, Action, Query> | IBuilder<StateB, Action, Query>
export type HoldF<
  StateA,
  StateB,
  StateC,
  Action,
  Query,
  Builder extends IBuilder<StateC, Action, Query>
> = (
  releasef: ReleaseF<StateA, StateB, StateC, Action, Query, Builder>
) => DOMTemplate<StateA, Action, Query> | IBuilder<StateA, Action, Query>

export class HoldStateTemplate<
  StateA,
  StateB,
  StateC,
  Action,
  Query,
  Builder extends IBuilder<StateC, Action, Query>
> implements DOMTemplate<StateA, Action, Query> {
  private template!: DOMTemplate<StateA, Action, Query>
  constructor(
    readonly holdf: HoldF<StateA, StateB, StateC, Action, Query, Builder>,
    readonly builder: Builder
  ) {}
  render(ctx: DOMContext<Action>, state: StateA) {
    let localState = state
    if (this.template === undefined) {
      this.template = childOrBuilderToTemplate(
        this.holdf((merge, init) => {
          init(this.builder)
          return MapState<StateB, StateC, Action, Query>(
            (b: StateB) => merge(localState, b),
            $ => $.Append(this.builder)
          )
        })
      )
    }

    const view = this.template.render(ctx, localState)
    return {
      change(state: StateA) {
        localState = state
        view.change(localState)
      },
      request(query: Query) {
        view.request(query)
      },
      destroy() {
        view.destroy
      }
    }
  }
}
