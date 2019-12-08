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
import { PaperTemplate } from './template'
import { PaperContext } from './context'
import { IndexType } from 'core/lib/types/index_type'
import { ObjectWithPath, TypeAtPath, ObjectWithField } from 'tempo-core/lib/types/objects'

export class MatchTemplate<
  Path extends IndexType[],
  State extends ObjectWithPath<Path, any>,
  Action,
  Query
> implements PaperTemplate<State, Action, Query> {
  constructor(
    readonly path: Path,
    readonly matcher: {
      [k in TypeAtPath<Path, State>]: PaperTemplate<DifferentiateAt<Path, State, k>, Action, Query>
    }
  ) {}
  render(ctx: PaperContext<Action>, state: State) {
    let key = this.path.reduce((acc: any, key) => acc[key], state) as TypeAtPath<Path, State>
    let view = this.matcher[key].render(ctx, state as any)
    const { matcher, path } = this
    return {
      change: (state: State) => {
        const newKey = path.reduce((acc: any, key) => acc[key], state) as TypeAtPath<Path, State>
        if (newKey === key) {
          view.change(state as any)
        } else {
          view.destroy()
          key = newKey
          view = matcher[newKey].render(ctx, state as any)
        }
      },
      destroy: () => {
        view.destroy()
      },
      request: (query: Query) => {
        view.request(query)
      }
    }
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
    [k in TypeAtPath<Path, State>]: PaperTemplate<DifferentiateAt<Path, State, k>, Action, Query>
  }
): PaperTemplate<State, Action, Query> => {
  return new MatchTemplate<Path, State, Action, Query>(
    path,
    Object.keys(matcher).reduce((acc, key) => {
      return {
        ...acc,
        [key]: matcher[key as keyof typeof matcher]
      }
    }, {} as {
      [k in TypeAtPath<Path, State>]: PaperTemplate<DifferentiateAt<Path, State, k>, Action, Query>
    })
  )
}

export const matchKind = <State extends ObjectWithField<'kind', any>, Action, Query = unknown>(
  matchers: {
    [k in State['kind']]: PaperTemplate<DifferentiateAt<['kind'], State, k>, Action, Query>
  }
): PaperTemplate<State, Action, Query> => match<['kind'], State, Action, Query>(['kind'], matchers)

export class MatchBoolTemplate<
  State,
  Action,
  Query
> implements PaperTemplate<State, Action, Query> {
  constructor(
    readonly condition: (state: State) => boolean,
    readonly trueTemplate: PaperTemplate<State, Action, Query>,
    readonly falseTemplate: PaperTemplate<State, Action, Query>
  ) {}
  render(ctx: PaperContext<Action>, state: State) {
    const { condition, trueTemplate, falseTemplate } = this
    let lastEvaluation = condition(state)
    let view = lastEvaluation ? trueTemplate.render(ctx, state) : falseTemplate.render(ctx, state)
    return {
      change: (state: State) => {
        const newEvaluation = condition(state)
        if (newEvaluation === lastEvaluation) {
          view.change(state)
        } else {
          view.destroy()
          lastEvaluation = newEvaluation
          view = newEvaluation ?
            trueTemplate.render(ctx, state) :
            falseTemplate.render(ctx, state)
        }
      },
      destroy: () => {
        view.destroy()
      },
      request: (query: Query) => {
        view.request(query)
      }
    }
  }
}

export const matchBool = <State, Action, Query = unknown>(
  options: {
    condition: (state: State) => boolean,
    true: PaperTemplate<State, Action, Query>,
    false: PaperTemplate<State, Action, Query>
  }
): PaperTemplate<State, Action, Query> => new MatchBoolTemplate<State, Action, Query>(
  options.condition,
  options.true,
  options.false
)

export class MatchValueTemplate<
  State,
  Action,
  Query
> implements PaperTemplate<State, Action, Query> {
  constructor(
    readonly path: IndexType[],
    readonly matchers: {
      [_ in (string | number)]: PaperTemplate<State, Action, Query>
    },
    readonly orElse: PaperTemplate<State, Action, Query>
  ) {}
  render(ctx: PaperContext<Action>, state: State) {
    const { matchers, orElse } = this
    let oldKey = this.path.reduce((acc: any, key) => acc[key], state)
    const template = this.matchers[oldKey] || this.orElse
    let view = template.render(ctx, state)
    return {
      change: (state: State) => {
        const newKey = this.path.reduce((acc: any, key) => acc[key], state)
        if (newKey === oldKey) {
          view.change(state)
        } else {
          view.destroy()
          oldKey = newKey
          const template = matchers[newKey] || orElse
          view = template.render(ctx, state)
        }
      },
      destroy: () => {
        view.destroy()
      },
      request: (query: Query) => {
        view.request(query)
      }
    }
  }
}

export const matchValue = <Path extends IndexType[], State extends ObjectWithPath<Path, string>, Action, Query = unknown>(
  path: Path,
  matchers: {
    [_ in (string | number)]: PaperTemplate<State, Action, Query>
  },
  orElse: PaperTemplate<State, Action, Query>
): PaperTemplate<State, Action, Query> => new MatchValueTemplate<State, Action, Query>(
  path,
  Object.keys(matchers).reduce((acc: { [_ in (string | number)]: PaperTemplate<State, Action, Query> }, key: string) => {
    return {
      ...acc,
      [key]: matchers[key]
    }
  }, {}),
  orElse
)
