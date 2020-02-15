/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License")
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { Maybe, nothing } from './maybe'
import { map as mapArray } from './arrays'
import { Fun2, Fun3, Fun4, Fun5, Fun6 } from './types/functions'
import { Option, none } from './option'
import { Result, success as successR, failure as failureR, map as mapR, mapN as mapNR, Success, Failure,
getOrElse as getOrElseR, getOrThrow as getOrThrowR, getOrElseLazy as getOrElseLazyR, toArray as toArrayR,
cata as cataR, cataLazy as cataLazyR, toOption as toOptionR, toMaybe as toMaybeR, recover as recoverR,
foldLeft as foldLeftR, any as anyR, each as eachR, all as allR, forEach as forEachR } from './result'
import { Async, outcome, map as mapA, mapN as mapNA, Outcome, Loading, NotAsked } from './async'

export type AsyncResult<T, E, P = unknown> = Async<Result<T, E>, P>

export function success<T, E, P = unknown>(value: T): AsyncResult<T, E, P> {
  return outcome(successR(value))
}
export function failure<T, E, P = unknown>(error: E): AsyncResult<T, E, P> {
  return outcome(failureR(error))
}
export const notAsked = { kind: 'NotAsked' } as AsyncResult<never, never>
export function loading<T, E, P = unknown>(progress: P): AsyncResult<T, E, P> {
  return { kind: 'Loading', progress }
}

export function forEach<A, Err>(result: AsyncResult<A, Err>, f: (a: A) => void): void {
  switch (result.kind) {
    case 'Loading':
    case 'NotAsked':
      return
    case 'Outcome':
      forEachR(f, result.value)
  }
}

export function map<A, B, Err, Prog>(async: AsyncResult<A, Err, Prog>, f: (a: A) => B): AsyncResult<B, Err, Prog> {
  return mapA(async, r => mapR(f, r))
}

export function mapN<A, B, C, Err, Prog>(
  a: AsyncResult<A, Err, Prog>,
  b: AsyncResult<B, Err, Prog>,
  f: Fun2<A, B, C>
): AsyncResult<C, Err, Prog>
export function mapN<A, B, C, D, Err, Prog>(
  a: AsyncResult<A, Err, Prog>,
  b: AsyncResult<B, Err, Prog>,
  c: AsyncResult<C, Err, Prog>,
  f: Fun3<A, B, C, D>
): AsyncResult<D, Err, Prog>
export function mapN<A, B, C, D, E, Err, Prog>(
  a: AsyncResult<A, Err, Prog>,
  b: AsyncResult<B, Err, Prog>,
  c: AsyncResult<C, Err, Prog>,
  d: AsyncResult<D, Err, Prog>,
  f: Fun4<A, B, C, D, E>
): AsyncResult<E, Err, Prog>
export function mapN<A, B, C, D, E, F, Err, Prog>(
  a: AsyncResult<A, Err, Prog>,
  b: AsyncResult<B, Err, Prog>,
  c: AsyncResult<C, Err, Prog>,
  d: AsyncResult<D, Err, Prog>,
  e: AsyncResult<E, Err, Prog>,
  f: Fun5<A, B, C, D, E, F>
): AsyncResult<F, Err, Prog>
export function mapN<A, B, C, D, E, F, G, Err, Prog>(
  a: AsyncResult<A, Err, Prog>,
  b: AsyncResult<B, Err, Prog>,
  c: AsyncResult<C, Err, Prog>,
  d: AsyncResult<D, Err, Prog>,
  e: AsyncResult<E, Err, Prog>,
  g: AsyncResult<F, Err, Prog>,
  f: Fun6<A, B, C, D, E, F, G>
): AsyncResult<G, Err, Prog>
export function mapN<Err, Prog, Ret>(
  ...args: any[]
): AsyncResult<Ret, Err, Prog> {
  const f = args.pop()
  return (mapNA as Function)((...r: any[]) => (mapNR as Function)(f, ...r), ...args)
}

export function flatMap<A, B, Err, Prog>(
  async: AsyncResult<A, Err, Prog>,
  f: (a: A) => AsyncResult<B, Err, Prog>
): AsyncResult<B, Err, Prog> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return async
    case 'Outcome':
      switch (async.value.kind) {
        case 'Success':
          return f(async.value.value)
        case 'Failure':
          return failure(async.value.error)
      }
  }
}

export function flatMapN<A, B, C, Err, Prog>(
  a: AsyncResult<A, Err, Prog>,
  b: AsyncResult<B, Err, Prog>,
  f: Fun2<A, B, AsyncResult<C, Err, Prog>>
): AsyncResult<C, Err, Prog>
export function flatMapN<A, B, C, D, Err, Prog>(
  a: AsyncResult<A, Err, Prog>,
  b: AsyncResult<B, Err, Prog>,
  c: AsyncResult<C, Err, Prog>,
  f: Fun3<A, B, C, AsyncResult<D, Err, Prog>>
): AsyncResult<D, Err, Prog>
export function flatMapN<A, B, C, D, E, Err, Prog>(
  a: AsyncResult<A, Err, Prog>,
  b: AsyncResult<B, Err, Prog>,
  c: AsyncResult<C, Err, Prog>,
  d: AsyncResult<D, Err, Prog>,
  f: Fun4<A, B, C, D, AsyncResult<E, Err, Prog>>
): AsyncResult<E, Err, Prog>
export function flatMapN<A, B, C, D, E, F, Err, Prog>(
  a: AsyncResult<A, Err, Prog>,
  b: AsyncResult<B, Err, Prog>,
  c: AsyncResult<C, Err, Prog>,
  d: AsyncResult<D, Err, Prog>,
  e: AsyncResult<E, Err, Prog>,
  f: Fun5<A, B, C, D, E, AsyncResult<F, Err, Prog>>
): AsyncResult<F, Err, Prog>
export function flatMapN<A, B, C, D, E, F, G, Err, Prog>(
  a: AsyncResult<A, Err, Prog>,
  b: AsyncResult<B, Err, Prog>,
  c: AsyncResult<C, Err, Prog>,
  d: AsyncResult<D, Err, Prog>,
  e: AsyncResult<E, Err, Prog>,
  g: AsyncResult<F, Err, Prog>,
  f: Fun6<A, B, C, D, E, F, AsyncResult<G, Err, Prog>>
): AsyncResult<G, Err, Prog>
export function flatMapN<Args extends any[], Err, Prog, Ret>(
  ...args: any[]
): AsyncResult<Ret, Err, Prog> {
  const f = args.pop()
  for (const a of args) {
    if (a.kind === 'Loading' || a.kind === 'NotAsked') {
      return a
    }
  }
  const results = mapArray(args as { kind: 'Outcome', value: any }[], a => a.value)
  return f(...results as Args)
}

export function isSuccess<T, E, P>(async: AsyncResult<T, E, P>): async is Outcome<Success<T>> {
  return async.kind === 'Outcome' && async.value.kind === 'Success'
}
export function isFailure<T, E, P>(async: AsyncResult<T, E, P>): async is Outcome<Failure<E>> {
  return async.kind === 'Outcome' && async.value.kind === 'Failure'
}
export function isLoading<T, E, P>(async: AsyncResult<T, E, P>): async is Loading<P> {
  return async.kind === 'Loading'
}
export function isNotAsked<T, E, P>(async: AsyncResult<T, E, P>): async is NotAsked {
  return async.kind === 'NotAsked'
}

export function getOrThrow<T, P>(async: AsyncResult<T, P>): Maybe<T> {
  switch (async.kind) {
    case 'NotAsked': throw 'Can\'t retrieve value from NotAsked'
    case 'Loading': throw 'Can\'t retrieve value from Loading: ' + async.progress
    case 'Outcome': return getOrThrowR(async.value)
  }
}

export function getOrElse<T, P>(async: AsyncResult<T, P>, alt: T): T {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return alt
    case 'Outcome': return getOrElseR(async.value, alt)
  }
}

export function getOrElseLazy<T, P>(async: AsyncResult<T, P>, alt: () => T): T {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return alt()
    case 'Outcome': return getOrElseLazyR(async.value, alt)
  }
}

export function toArray<T, P>(async: AsyncResult<T, P>): T[] {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return []
    case 'Outcome': return toArrayR(async.value)
  }
}

export function toMaybe<T, P>(async: AsyncResult<T, P>): Maybe<T> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return nothing
    case 'Outcome': return toMaybeR(async.value)
  }
}

export function toOption<T, P>(async: AsyncResult<T, P>): Option<T> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return none
    case 'Outcome': return toOptionR(async.value)
  }
}

export function flatten<T, E, P>(async: AsyncResult<AsyncResult<T, E, P>, E, P>): AsyncResult<T, E, P> {
  switch (async.kind) {
    case 'NotAsked': return notAsked as AsyncResult<T, E, P>
    case 'Loading': return loading<T, E, P>(async.progress)
    case 'Outcome':
      if (async.value.kind === 'Success' && async.value.value.kind === 'Outcome' && async.value.value.value.kind === 'Success') {
        return async.value.value
      } else {
        return async as AsyncResult<T, E, P>
      }
  }
}

export function cata<A, B, Prog>(async: AsyncResult<A, Prog>, f: (a: A) => B, ifNotOutcome: B): B {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return ifNotOutcome
    case 'Outcome': return cataR(f, async.value, ifNotOutcome)
  }
}

export function cataLazy<A, B, Prog>(async: AsyncResult<A, Prog>, f: (a: A) => B, ifNotOutcome: () => B): B {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return ifNotOutcome()
    case 'Outcome': return cataLazyR(f, async.value, ifNotOutcome)
  }
}

export function foldLeft<T, B, Prog>(async: AsyncResult<T, Prog>, f: (acc: B, curr: T) => B, b: B): B {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return b
    case 'Outcome': return foldLeftR(f, async.value, b)
  }
}

export function all<T, P>(async: AsyncResult<T, P>, f: (v: T) => boolean): boolean {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return true
    case 'Outcome': return allR(f, async.value)
  }
}

export function any<T, P>(async: AsyncResult<T, P>, f: (v: T) => boolean): boolean {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return false
    case 'Outcome': return anyR(f, async.value)
  }
}

export function each<T, P>(async: AsyncResult<T, P>, f: (v: T) => void): void {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return
    case 'Outcome': return eachR(f, async.value)
  }
}

export function firstSuccess<A, Prog>(...args: AsyncResult<A, Prog>[]): AsyncResult<A, Prog> {
  for (const a of args) {
    if (isSuccess(a))
      return a
  }
  for (const a of args) {
    return a
  }
  throw 'cannot use `firstSuccess` with empty argument list'
}

export function recover<T, E, P>(async: AsyncResult<T, E, P>, whenNoOutcome: T): AsyncResult<T, E, P> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return success(whenNoOutcome)
    case 'Outcome': return outcome(recoverR(async.value, whenNoOutcome))
  }
}

export type T<V, E> = AsyncResult<V, E>
