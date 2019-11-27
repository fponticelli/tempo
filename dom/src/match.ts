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

import { Differentiate } from '@tempo/core/lib/util/differentiate'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { DynamicView, View } from '@tempo/core/lib/view'
import { domChildToTemplate } from './utils/dom'

export class MatchView<
  Field extends (string | number | symbol),
  State extends { [k in Field]: any },
  Action
> implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(
    private key: State[Field],
    private view: View<State>,
    readonly field: Field,
    readonly matches: {
      [k in State[Field]]: DOMTemplate<Differentiate<Field, State, k>, Action>
    },
    readonly ctx: DOMContext<Action>
  ) {}
  change(state: State) {
    const newKey = state[this.field]
    if (newKey === this.key) {
      if (this.view.kind === 'dynamic') {
        this.view.change(state as any)
      }
    } else {
      this.view.destroy()
      this.key = newKey
      this.view = this.matches[newKey].render(this.ctx, state as any)
    }
  }
  destroy() {
    this.view.destroy()
  }
}

export class MatchTemplate<
  Field extends (string | number | symbol),
  State extends { [k in Field]: any },
  Action
> implements DOMTemplate<State, Action> {
  constructor(
    readonly field: Field,
    readonly matches: {
      [k in State[Field]]: DOMTemplate<Differentiate<Field, State, k>, Action>
    }
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const key = state[this.field]
    const view = this.matches[key].render(ctx, state as any)
    return new MatchView<Field, State, Action>(
      key,
      view,
      this.field,
      this.matches,
      ctx
    )
  }
}

export const match = <
  Field extends (string | number | symbol),
  State extends { [k in Field]: any },
  Action
>(
  field: Field,
  matches: {
    [k in State[Field]]: DOMChild<Differentiate<Field, State, k>, Action>
  }
) => {
  return new MatchTemplate<Field, State, Action>(
    field,
    Object.keys(matches).reduce((acc, key) => {
      return {
        ...acc,
        [key]: domChildToTemplate(matches[key as keyof typeof matches])
      }
    }, {} as {
      [k in State[Field]]: DOMTemplate<Differentiate<Field, State, k>, Action>
    })
  )
}

export const createMatch = <
  Field extends (string | number | symbol)
>(field: Field) =>
<
  State extends { [k in Field]: any },
  Action
>(
  matches: {
    [k in State[Field]]: DOMTemplate<Differentiate<Field, State, k>, Action>
  }
) => {
  return new MatchTemplate<Field, State, Action>(
    field,
    matches
  )
}

export const matchOnKind = createMatch('kind')

export class MatchBoolView<State, Action> implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(
    readonly condition: (state: State) => boolean,
    readonly trueTemplate: DOMTemplate<State, Action>,
    readonly falseTemplate: DOMTemplate<State, Action>,
    private view: View<State>,
    private lastEvaluation: boolean,
    readonly ctx: DOMContext<Action>
  ) {}
  change(state: State) {
    const newEvaluation = this.condition(state)
    if (newEvaluation === this.lastEvaluation) {
      if (this.view.kind === 'dynamic') {
        this.view.change(state)
      }
    } else {
      this.view.destroy()
      this.lastEvaluation = newEvaluation
      this.view = newEvaluation ?
        this.trueTemplate.render(this.ctx, state) :
        this.falseTemplate.render(this.ctx, state)
    }
  }
  destroy() {
    this.view.destroy()
  }
}

export class MatchBoolTemplate<
  State,
  Action
> implements DOMTemplate<State, Action> {
  constructor(
    readonly condition: (state: State) => boolean,
    readonly trueTemplate: DOMTemplate<State, Action>,
    readonly falseTemplate: DOMTemplate<State, Action>
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const evaluation = this.condition(state)
    const view = evaluation ? this.trueTemplate.render(ctx, state) : this.falseTemplate.render(ctx, state)
    return new MatchBoolView<State, Action>(
      this.condition,
      this.trueTemplate,
      this.falseTemplate,
      view,
      evaluation,
      ctx
    )
  }
}

export const matchBool = <State, Action>(
  options: {
    condition: (state: State) => boolean,
    true: DOMChild<State, Action>,
    false: DOMChild<State, Action>
  }
) => new MatchBoolTemplate(
  options.condition,
  domChildToTemplate(options.true),
  domChildToTemplate(options.false)
)
