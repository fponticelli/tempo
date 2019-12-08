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

import { DifferentiateAt } from 'tempo-core/lib/types/differentiate'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { View } from 'tempo-core/lib/view'
import { domChildToTemplate } from './utils/dom'
import { IndexType } from 'core/lib/types/index_type'
import { ObjectWithPath, TypeAtPath, ObjectWithField } from 'tempo-core/lib/types/objects'

export class MatchView<
  Path extends IndexType[],
  State extends ObjectWithPath<Path, any>,
  Action,
  Query
> implements View<State, Query> {
  constructor(
    private key: TypeAtPath<Path, State>,
    private view: View<State, Query>,
    readonly path: Path,
    readonly matcher: {
      [k in TypeAtPath<Path, State>]: DOMTemplate<DifferentiateAt<Path, State, k>, Action, Query>
    },
    readonly ctx: DOMContext<Action>
  ) {}
  change(state: State) {
    const newKey = this.path.reduce((acc: any, key) => acc[key], state) as TypeAtPath<Path, State>
    if (newKey === this.key) {
      this.view.change(state as any)
    } else {
      this.view.destroy()
      this.key = newKey
      this.view = this.matcher[newKey].render(this.ctx, state as any)
    }
  }
  request(query: Query) {
    this.view.request(query)
  }
  destroy() {
    this.view.destroy()
  }
}

export class MatchTemplate<
  Path extends IndexType[],
  State extends ObjectWithPath<Path, any>,
  Action,
  Query
> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly path: Path,
    readonly matcher: {
      [k in TypeAtPath<Path, State>]: DOMTemplate<DifferentiateAt<Path, State, k>, Action, Query>
    }
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const key = this.path.reduce((acc: any, key) => acc[key], state) as TypeAtPath<Path, State>
    const view = this.matcher[key].render(ctx, state as any)
    return new MatchView<Path, State, Action, Query>(
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
  Action,
  Query = unknown
>(
  path: Path,
  matcher: {
    [k in TypeAtPath<Path, State>]: DOMChild<DifferentiateAt<Path, State, k>, Action, Query>
  }
): DOMTemplate<State, Action, Query> => {
  return new MatchTemplate<Path, State, Action, Query>(
    path,
    Object.keys(matcher).reduce((acc, key) => {
      return {
        ...acc,
        [key]: domChildToTemplate(matcher[key as keyof typeof matcher])
      }
    }, {} as {
      [k in TypeAtPath<Path, State>]: DOMTemplate<DifferentiateAt<Path, State, k>, Action, Query>
    })
  )
}

export const matchKind = <State extends ObjectWithField<'kind', any>, Action, Query = unknown>(
  matchers: {
    [k in State['kind']]: DOMChild<DifferentiateAt<['kind'], State, k>, Action, Query>
  }
): DOMTemplate<State, Action, Query> => match<['kind'], State, Action, Query>(['kind'], matchers)

export class MatchBoolView<State, Action, Query> implements View<State, Query> {
  constructor(
    readonly condition: (state: State) => boolean,
    readonly trueTemplate: DOMTemplate<State, Action, Query>,
    readonly falseTemplate: DOMTemplate<State, Action, Query>,
    private view: View<State, Query>,
    private lastEvaluation: boolean,
    readonly ctx: DOMContext<Action>
  ) {}
  change(state: State) {
    const newEvaluation = this.condition(state)
    if (newEvaluation === this.lastEvaluation) {
      this.view.change(state)
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
  request(query: Query) {
    this.view.request(query)
  }
}

export class MatchBoolTemplate<
  State,
  Action,
  Query
> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly condition: (state: State) => boolean,
    readonly trueTemplate: DOMTemplate<State, Action, Query>,
    readonly falseTemplate: DOMTemplate<State, Action, Query>
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const evaluation = this.condition(state)
    const view = evaluation ? this.trueTemplate.render(ctx, state) : this.falseTemplate.render(ctx, state)
    return new MatchBoolView<State, Action, Query>(
      this.condition,
      this.trueTemplate,
      this.falseTemplate,
      view,
      evaluation,
      ctx
    )
  }
}

export const matchBool = <State, Action, Query = unknown>(
  options: {
    condition: (state: State) => boolean,
    true: DOMChild<State, Action, Query>,
    false: DOMChild<State, Action, Query>
  }
): DOMTemplate<State, Action, Query> => new MatchBoolTemplate<State, Action, Query>(
  options.condition,
  domChildToTemplate(options.true),
  domChildToTemplate(options.false)
)

export class MatchValueView<State, Action, Query> implements View<State, Query> {
  constructor(
    readonly path: IndexType[],
    private key: string,
    readonly matchers: { [_ in (string | number)]: DOMTemplate<State, Action, Query> },
    readonly orElese: DOMTemplate<State, Action, Query>,
    private view: View<State, Query>,
    readonly ctx: DOMContext<Action>
  ) {}
  change(state: State) {
    const newKey = this.path.reduce((acc: any, key) => acc[key], state)
    if (newKey === this.key) {
      this.view.change(state)
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
  request(query: Query) {
    this.view.request(query)
  }
}

export class MatchValueTemplate<
  State,
  Action,
  Query
> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly path: IndexType[],
    readonly matchers: {
      [_ in (string | number)]: DOMTemplate<State, Action, Query>
    },
    readonly orElse: DOMTemplate<State, Action, Query>
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const key = this.path.reduce((acc: any, key) => acc[key], state)
    const template = this.matchers[key] || this.orElse
    const view = template.render(ctx, state)
    return new MatchValueView<State, Action, Query>(
      this.path,
      key,
      this.matchers,
      this.orElse,
      view,
      ctx
    )
  }
}

export const matchValue = <Path extends IndexType[], State extends ObjectWithPath<Path, string>, Action, Query = unknown>(
  path: Path,
  matchers: {
    [_ in (string | number)]: DOMChild<State, Action, Query>
  },
  orElse: DOMChild<State, Action, Query>
): DOMTemplate<State, Action, Query> => new MatchValueTemplate<State, Action, Query>(
  path,
  Object.keys(matchers).reduce((acc: { [_ in (string | number)]: DOMTemplate<State, Action, Query> }, key: string) => {
    return {
      ...acc,
      [key]: domChildToTemplate(matchers[key])
    }
  }, {}),
  domChildToTemplate(orElse)
)
