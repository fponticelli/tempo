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

import { Maybe, nothing, just } from './maybe'
import { map as mapArray } from './arrays'
import { Fun2, Fun3, Fun4, Fun5, Fun6 } from './types/functions'
import { Option, none, some } from './option'

export type Success<T> = { kind: 'Success'; value: T }
export type Failure<E> = { kind: 'Failure'; error: E }
export type NotAsked = { kind: 'NotAsked' }
export type Loading<P> = { kind: 'Loading'; progress: P }

export type AsyncResult<T, E, P = unknown> =
  | Success<T>
  | Failure<E>
  | NotAsked
  | Loading<P>

export function success<T, E, P = unknown>(value: T): AsyncResult<T, E, P> {
  return { kind: 'Success', value }
}
export function failure<T, E, P = unknown>(error: E): AsyncResult<T, E, P> {
  return { kind: 'Failure', error }
}
export const notAsked = { kind: 'NotAsked' } as AsyncResult<never, never>
export function loading<T, E, P = unknown>(progress: P): AsyncResult<T, E, P> {
  return { kind: 'Loading', progress }
}

export function forEach<A, Err>(
  result: AsyncResult<A, Err>,
  f: (a: A) => void
): void {
  switch (result.kind) {
    case 'Loading':
    case 'NotAsked':
    case 'Failure':
      return
    case 'Success':
      f(result.value)
  }
}

export function match<A, B, Err, Prog = unknown>(
  result: AsyncResult<A, Err, Prog>,
  f: (a: A) => B,
  fErr: (e: Err) => B,
  notAsked: B,
  fProg: (p: Prog) => B
): B {
  switch (result.kind) {
    case 'Loading':
      return fProg(result.progress)
    case 'NotAsked':
      return notAsked
    case 'Success':
      return f(result.value)
    case 'Failure':
      return fErr(result.error)
  }
}

export function map<A, B, Err, Prog>(
  result: AsyncResult<A, Err, Prog>,
  f: (a: A) => B
): AsyncResult<B, Err, Prog> {
  switch (result.kind) {
    case 'Loading':
    case 'NotAsked':
    case 'Failure':
      return result
    case 'Success':
      return success(f(result.value))
  }
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
export function mapN<Args extends any[], Err, Prog, Ret>(
  ...args: Args
): AsyncResult<Ret, Err, Prog> {
  const f = args.pop()
  for (const a of args) {
    if (a.kind === 'Failure' || a.kind === 'Loading' || a.kind === 'NotAsked')
      return a
  }
  const results = mapArray(
    args as { kind: 'Success'; value: any }[],
    a => a.value
  )
  return success(f(...(results as Args)))
}

export function flatMap<A, B, Err, Prog>(
  async: AsyncResult<A, Err, Prog>,
  f: (a: A) => AsyncResult<B, Err, Prog>
): AsyncResult<B, Err, Prog> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
      return async
    case 'Success':
      return f(async.value)
    case 'Failure':
      return failure(async.error)
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
    if (a.kind === 'Loading' || a.kind === 'NotAsked' || a.kind === 'Failure') {
      return a
    }
  }
  const results = mapArray(
    args as { kind: 'Success'; value: any }[],
    a => a.value
  )
  return f(...(results as Args))
}

export function isSuccess<T, E, P>(
  async: AsyncResult<T, E, P>
): async is Success<T> {
  return async.kind === 'Success'
}
export function isFailure<T, E, P>(
  async: AsyncResult<T, E, P>
): async is Failure<E> {
  return async.kind === 'Failure'
}
export function isLoading<T, E, P>(
  async: AsyncResult<T, E, P>
): async is Loading<P> {
  return async.kind === 'Loading'
}
export function isNotAsked<T, E, P>(
  async: AsyncResult<T, E, P>
): async is NotAsked {
  return async.kind === 'NotAsked'
}

export function getOrThrow<T, P>(async: AsyncResult<T, P>): Maybe<T> {
  switch (async.kind) {
    case 'NotAsked':
      throw "Can't retrieve value from NotAsked"
    case 'Loading':
      throw "Can't retrieve value from Loading: " + async.progress
    case 'Failure':
      throw "Can't retrieve value from Failure: " + async.error
    case 'Success':
      return async.value
  }
}

export function getOrElse<T, P>(async: AsyncResult<T, P>, alt: T): T {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return alt
    case 'Success':
      return async.value
  }
}

export function getOrElseLazy<T, P>(async: AsyncResult<T, P>, alt: () => T): T {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return alt()
    case 'Success':
      return async.value
  }
}

export function toArray<T, P>(async: AsyncResult<T, P>): T[] {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return []
    case 'Success':
      return [async.value]
  }
}

export function toMaybe<T, P>(async: AsyncResult<T, P>): Maybe<T> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return nothing
    case 'Success':
      return just(async.value)
  }
}

export function toOption<T, P>(async: AsyncResult<T, P>): Option<T> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return none
    case 'Success':
      return some(async.value)
  }
}

export function flatten<T, E, P>(
  result: AsyncResult<AsyncResult<T, E, P>, E, P>
): AsyncResult<T, E, P> {
  switch (result.kind) {
    case 'NotAsked':
      return notAsked as AsyncResult<T, E, P>
    case 'Loading':
      return loading<T, E, P>(result.progress)
    case 'Failure':
      return failure<T, E, P>(result.error)
    case 'Success':
      return result.value as AsyncResult<T, E, P>
  }
}

export function cata<A, B, E, Prog>(
  result: AsyncResult<A, E, Prog>,
  f: (a: A) => B,
  ifNot: B
): B {
  switch (result.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return ifNot
    case 'Success':
      return f(result.value)
  }
}

export function cataLazy<A, B, Prog>(
  async: AsyncResult<A, Prog>,
  f: (a: A) => B,
  ifNot: () => B
): B {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return ifNot()
    case 'Success':
      return f(async.value)
  }
}

export function foldLeft<T, B, Prog>(
  async: AsyncResult<T, Prog>,
  f: (acc: B, curr: T) => B,
  b: B
): B {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return b
    case 'Success':
      return f(b, async.value)
  }
}

export function all<T, P>(
  async: AsyncResult<T, P>,
  f: (v: T) => boolean
): boolean {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return true
    case 'Success':
      return f(async.value)
  }
}

export function any<T, P>(
  async: AsyncResult<T, P>,
  f: (v: T) => boolean
): boolean {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return false
    case 'Success':
      return f(async.value)
  }
}

export function each<T, P>(async: AsyncResult<T, P>, f: (v: T) => void): void {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return
    case 'Success':
      return f(async.value)
  }
}

export function firstSuccess<A, Prog>(
  ...args: AsyncResult<A, Prog>[]
): AsyncResult<A, Prog> {
  for (const a of args) {
    if (isSuccess(a)) return a
  }
  for (const a of args) {
    return a
  }
  throw 'cannot use `firstSuccess` with empty argument list'
}

export function recover<T, E, P>(
  async: AsyncResult<T, E, P>,
  whenNoResult: T
): AsyncResult<T, E, P> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading':
    case 'Failure':
      return success(whenNoResult)
    case 'Success':
      return success(async.value)
  }
}

export type T<V, E> = AsyncResult<V, E>
