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

import { DifferentiateAt } from '@tempo/core/lib/types/differentiate'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { DynamicView, View } from '@tempo/core/lib/view'
import { domChildToTemplate } from './utils/dom'
import { IndexType } from 'core/lib/types/index_type'
import { ObjectWithPath, TypeAtPath, ObjectWithField } from '@tempo/core/lib/types/objects'

export class MatchView<
  Path extends IndexType[],
  State extends ObjectWithPath<Path, any>,
  Action
> implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(
    private key: TypeAtPath<Path, State>,
    private view: View<State>,
    readonly path: Path,
    readonly matcher: {
      [k in TypeAtPath<Path, State>]: DOMTemplate<DifferentiateAt<Path, State, k>, Action>
    },
    readonly ctx: DOMContext<Action>
  ) {}
  change(state: State) {
    const newKey = this.path.reduce((acc: any, key) => acc[key], state) as TypeAtPath<Path, State>
    if (newKey === this.key) {
      if (this.view.kind === 'dynamic') {
        this.view.change(state as any)
      }
    } else {
      this.view.destroy()
      this.key = newKey
      this.view = this.matcher[newKey].render(this.ctx, state as any)
    }
  }
  destroy() {
    this.view.destroy()
  }
}

export class MatchTemplate<
  Path extends IndexType[],
  State extends ObjectWithPath<Path, any>,
  Action
> implements DOMTemplate<State, Action> {
  constructor(
    readonly path: Path,
    readonly matcher: {
      [k in TypeAtPath<Path, State>]: DOMTemplate<DifferentiateAt<Path, State, k>, Action>
    }
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const key = this.path.reduce((acc: any, key) => acc[key], state) as TypeAtPath<Path, State>
    const view = this.matcher[key].render(ctx, state as any)
    return new MatchView<Path, State, Action>(
      key,
      view,
      this.path,
      this.matcher,
      ctx
    )
  }
}

export const match = <
  Path extends IndexType[],
  State extends ObjectWithPath<Path, any>,
  Action
>(
  path: Path,
  matcher: {
    [k in TypeAtPath<Path, State>]: DOMChild<DifferentiateAt<Path, State, k>, Action>
  }
): DOMTemplate<State, Action> => {
  return new MatchTemplate<Path, State, Action>(
    path,
    Object.keys(matcher).reduce((acc, key) => {
      return {
        ...acc,
        [key]: domChildToTemplate(matcher[key as keyof typeof matcher])
      }
    }, {} as {
      [k in TypeAtPath<Path, State>]: DOMTemplate<DifferentiateAt<Path, State, k>, Action>
    })
  )
}

export const matchKind = <State extends ObjectWithField<'kind', any>, Action>(
  matchers: {
    [k in State['kind']]: DOMChild<DifferentiateAt<['kind'], State, k>, Action>
  }
): DOMTemplate<State, Action> => match<['kind'], State, Action>(['kind'], matchers)

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
): DOMTemplate<State, Action> => new MatchBoolTemplate(
  options.condition,
  domChildToTemplate(options.true),
  domChildToTemplate(options.false)
)

export class MatchValueView<State, Action> implements DynamicView<State> {
  readonly kind = 'dynamic'
  constructor(
    readonly path: IndexType[],
    private key: string,
    readonly matchers: { [_ in (string | number)]: DOMTemplate<State, Action> },
    readonly orElese: DOMTemplate<State, Action>,
    private view: View<State>,
    readonly ctx: DOMContext<Action>
  ) {}
  change(state: State) {
    const newKey = this.path.reduce((acc: any, key) => acc[key], state)
    if (newKey === this.key) {
      if (this.view.kind === 'dynamic') {
        this.view.change(state)
      }
    } else {
      this.view.destroy()
      this.key = newKey
      const template = this.matchers[newKey] || this.orElese
      this.view = template.render(this.ctx, state)
    }
  }
  destroy() {
    this.view.destroy()
  }
}

export class MatchValueTemplate<
  State,
  Action
> implements DOMTemplate<State, Action> {
  constructor(
    readonly path: IndexType[],
    readonly matchers: {
      [_ in (string | number)]: DOMTemplate<State, Action>
    },
    readonly orElse: DOMTemplate<State, Action>
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const key = this.path.reduce((acc: any, key) => acc[key], state)
    const template = this.matchers[key] || this.orElse
    const view = template.render(ctx, state)
    return new MatchValueView<State, Action>(
      this.path,
      key,
      this.matchers,
      this.orElse,
      view,
      ctx
    )
  }
}

export const matchValue = <Path extends IndexType[], State extends ObjectWithPath<Path, string>, Action>(
  path: Path,
  matchers: {
    [_ in (string | number)]: DOMChild<State, Action>
  },
  orElse: DOMChild<State, Action>
): DOMTemplate<State, Action> => new MatchValueTemplate(
  path,
  Object.keys(matchers).reduce((acc: { [_ in (string | number)]: DOMTemplate<State, Action> }, key: string) => {
    return {
      ...acc,
      [key]: domChildToTemplate(matchers[key])
    }
  }, {}),
  domChildToTemplate(orElse)
)
