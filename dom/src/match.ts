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

import { DifferentiateAt } from 'tempo-std/lib/types/differentiate'
import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { domChildToTemplate, removeNode } from './utils/dom'
import { IndexType } from 'tempo-std/lib/types/index_type'
import { ObjectWithPath, TypeAtPath, ObjectWithField } from 'tempo-std/lib/types/objects'
import { Option, Some } from 'tempo-std/lib/option'
import { mapState } from './map'
import { Maybe, Just } from 'tempo-std/lib/maybe'
import { Result, Success, Failure } from 'tempo-std/lib/result'
import { Async, Loading, Outcome } from 'tempo-std/lib/async'
import { AsyncResult } from 'tempo-std/lib/async_result'
import { DOMAttribute, resolveAttribute } from './value'

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
  },
  refId = 't-match-kind'
): DOMTemplate<State, Action, Query> => match<['kind'], State, Action, Query>(['kind'], matchers, refId)

export class MatchBoolTemplate<
  State,
  Action,
  Query
> implements DOMTemplate<State, Action, Query> {
  constructor(
    readonly condition: DOMAttribute<State, boolean>,
    readonly trueTemplate: DOMTemplate<State, Action, Query>,
    readonly falseTemplate: DOMTemplate<State, Action, Query>,
    readonly refId: string
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const { ctx: newCtx, ref } = ctx.withAppendToReference(this.refId)
    const { trueTemplate, falseTemplate } = this
    const condition = resolveAttribute(this.condition)
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
    condition: DOMAttribute<State, boolean>,
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

export const matchOption = <State, Action, Query = unknown>(matchers: {
  Some:  DOMChild<State, Action, Query>,
  None: DOMChild<unknown, Action, Query>
},                                                          refId = 't-match-option'): DOMTemplate<Option<State>, Action, Query> => {
  return matchKind({
    Some:  mapState({ map: (o: Some<State>) => o.value }, matchers.Some),
    None:  mapState({ map: () => null }, matchers.None)
  }, refId)
}

export const matchMaybe = <State, Action, Query = unknown>(matchers: {
  Just: DOMChild<State, Action, Query>,
  Nothing?: DOMChild<unknown, Action, Query>
},                                                         refId = 't-match-option'): DOMTemplate<Maybe<State>, Action, Query> => {
  return new MatchBoolTemplate<Maybe<State>, Action, Query>(
    v => typeof v !== 'undefined',
    mapState(
      { map: (opt: Maybe<State>) => (opt as Just<State>) },
      domChildToTemplate(matchers.Just)
    ),
    domChildToTemplate(matchers.Nothing),
    refId
  )
}

export const matchResult = <State, Error, Action, Query = unknown>(
  matchers: {
    Success:  DOMChild<State, Action, Query>,
    Failure: DOMChild<Error, Action, Query>
  },
  refId = 't-match-result'
): DOMTemplate<Result<State, Error>, Action, Query> => {
  return matchKind({
    Success:  mapState({ map: (o: Success<State>) => o.value }, matchers.Success),
    Failure:  mapState({ map: (o: Failure<Error>) => o.error }, matchers.Failure)
  }, refId)
}

export const matchAsync = <State, Progress, Action, Query = unknown>(
  matchers: {
    Outcome:  DOMChild<State, Action, Query>,
    NotAsked: DOMChild<unknown, Action, Query>,
    Loading:  DOMChild<Progress, Action, Query>
  },
  refId = 't-match-async'
): DOMTemplate<Async<State, Progress>, Action, Query> => {
  return matchKind({
    Outcome:  mapState({ map: (o: Outcome<State>) => o.value }, matchers.Outcome),
    Loading:  mapState({ map: (o: Loading<Progress>) => o.progress }, matchers.Loading),
    NotAsked: mapState({ map: () => null }, matchers.NotAsked)
  }, refId)
}

export const matchAsyncResult = <State, Error, Progress, Action, Query = unknown>(
  matchers: {
    Success:  DOMChild<State, Action, Query>,
    Failure:  DOMChild<Error, Action, Query>,
    NotAsked: DOMChild<unknown, Action, Query>,
    Loading:  DOMChild<Progress, Action, Query>
  },
  refId = 't-match-async-result'
): DOMTemplate<AsyncResult<State, Error, Progress>, Action, Query> => {
  return matchKind<AsyncResult<State, Error, Progress>, Action, Query>({
    Outcome:  mapState(
      { map: (o: Outcome<Result<State, Error>>) => o.value },
      matchResult<State, Error, Action, Query>({
        Success: matchers.Success,
        Failure: matchers.Failure
      }, `${refId}-sub`)
    ),
    Loading:  mapState({ map: (o: Loading<Progress>) => o.progress }, matchers.Loading),
    NotAsked: mapState({ map: () => null }, matchers.NotAsked)
  }, refId)
}
