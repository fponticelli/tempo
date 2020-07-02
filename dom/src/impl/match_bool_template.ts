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

import { DOMTemplate, DOMChild } from '../template'
import { DOMContext } from '../context'
import { removeNode } from '../utils/dom'
import { Attribute, resolveAttribute } from '../value'
import { IBuilder, childOrBuilderToTemplate } from '../impl/builder'

export class MatchBoolTemplate<State, Action, Query>
  implements DOMTemplate<State, Action, Query> {
  readonly trueTemplate: DOMTemplate<State, Action, Query>
  readonly falseTemplate: DOMTemplate<State, Action, Query>
  constructor(
    readonly condition: Attribute<State, boolean>,
    trueTemplate:
      | DOMChild<State, Action, Query>
      | IBuilder<State, Action, Query>,
    falseTemplate:
      | DOMChild<State, Action, Query>
      | IBuilder<State, Action, Query>
  ) {
    this.trueTemplate = childOrBuilderToTemplate(trueTemplate)
    this.falseTemplate = childOrBuilderToTemplate(falseTemplate)
  }
  render(ctx: DOMContext<Action>, state: State) {
    const { ctx: newCtx, ref } = ctx.withAppendToReference()
    const { trueTemplate, falseTemplate } = this
    const condition = resolveAttribute(this.condition)
    let lastEvaluation = condition(state)
    let view = lastEvaluation
      ? trueTemplate.render(newCtx, state)
      : falseTemplate.render(newCtx, state)
    return {
      change: (state: State) => {
        const newEvaluation = condition(state)
        if (newEvaluation === lastEvaluation) {
          view.change(state)
        } else {
          view.destroy()
          lastEvaluation = newEvaluation
          view = newEvaluation
            ? trueTemplate.render(newCtx, state)
            : falseTemplate.render(newCtx, state)
        }
      },
      destroy: () => {
        removeNode(ref)
        view.destroy()
      },
      request: (query: Query) => {
        view.request(query)
      }
    }
  }
}
