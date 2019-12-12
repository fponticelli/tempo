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
import { domChildToTemplate, removeNode } from './utils/dom'
import { IndexType } from 'core/lib/types/index_type'
import { ObjectWithPath, TypeAtPath, ObjectWithField } from 'tempo-core/lib/types/objects'

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
    },
    readonly refId: string
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const { ctx: newCtx, ref } = ctx.withAppendToReference(this.refId)
    let key = this.path.reduce((acc: any, key) => acc[key], state) as TypeAtPath<Path, State>
    let view = this.matcher[key].render(newCtx, state as any)
    const { matcher, path } = this
    return {
      change: (state: State) => {
        const newKey = path.reduce((acc: any, key) => acc[key], state) as TypeAtPath<Path, State>
        if (newKey === key) {
          view.change(state as any)
        } else {
          view.destroy()
          key = newKey
          view = matcher[newKey].render(newCtx, state as any)
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

export const match = <
  Path extends IndexType[],
  State extends ObjectWithPath<Path, any>,
  Action,
  Query = unknown
>(
  path: Path,
  matcher: {
    [k in TypeAtPath<Path, State>]: DOMChild<DifferentiateAt<Path, State, k>, Action, Query>
  },
  refId?: string
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
    }),
    refId || 't:match'
  )
}

export const matchKind = <State extends ObjectWithField<'kind', any>, Action, Query = unknown>(
  matchers: {
    [k in State['kind']]: DOMChild<DifferentiateAt<['kind'], State, k>, Action, Query>
  }
): DOMTemplate<State, Action, Query> => match<['kind'], State, Action, Query>(['kind'], matchers)

export class MatchBoolTemplate<
  State,
  Action,
  Query
> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly condition: (state: State) => boolean,
    readonly trueTemplate: DOMTemplate<State, Action, Query>,
    readonly falseTemplate: DOMTemplate<State, Action, Query>,
    readonly refId: string
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const { ctx: newCtx, ref } = ctx.withAppendToReference(this.refId)
    const { condition, trueTemplate, falseTemplate } = this
    let lastEvaluation = condition(state)
    let view = lastEvaluation ? trueTemplate.render(newCtx, state) : falseTemplate.render(newCtx, state)
    return {
      change: (state: State) => {
        const newEvaluation = condition(state)
        if (newEvaluation === lastEvaluation) {
          view.change(state)
        } else {
          view.destroy()
          lastEvaluation = newEvaluation
          view = newEvaluation ?
            trueTemplate.render(newCtx, state) :
            falseTemplate.render(newCtx, state)
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

export const matchBool = <State, Action, Query = unknown>(
  options: {
    condition: (state: State) => boolean,
    true: DOMChild<State, Action, Query>,
    false: DOMChild<State, Action, Query>,
    refId?: string
  }
): DOMTemplate<State, Action, Query> => new MatchBoolTemplate<State, Action, Query>(
  options.condition,
  domChildToTemplate(options.true),
  domChildToTemplate(options.false),
  options.refId || 't:match-bool'
)

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
    readonly orElse: DOMTemplate<State, Action, Query>,
    readonly refId: string
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const { matchers, orElse } = this
    const { ctx: newCtx, ref } = ctx.withAppendToReference(this.refId)
    let oldKey = this.path.reduce((acc: any, key) => acc[key], state)
    const template = this.matchers[oldKey] || this.orElse
    let view = template.render(newCtx, state)
    return {
      change: (state: State) => {
        const newKey = this.path.reduce((acc: any, key) => acc[key], state)
        if (newKey === oldKey) {
          view.change(state)
        } else {
          view.destroy()
          oldKey = newKey
          const template = matchers[newKey] || orElse
          view = template.render(newCtx, state)
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

export const matchValue = <Path extends IndexType[], State extends ObjectWithPath<Path, string>, Action, Query = unknown>(
  path: Path,
  matchers: {
    [_ in (string | number)]: DOMChild<State, Action, Query>
  },
  orElse: DOMChild<State, Action, Query>,
  refId?: string
): DOMTemplate<State, Action, Query> => new MatchValueTemplate<State, Action, Query>(
  path,
  Object.keys(matchers).reduce((acc: { [_ in (string | number)]: DOMTemplate<State, Action, Query> }, key: string) => {
    return {
      ...acc,
      [key]: domChildToTemplate(matchers[key])
    }
  }, {}),
  domChildToTemplate(orElse),
  refId || 't:match-value'
)
