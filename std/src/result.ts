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
import { Fun2, Fun3, Fun4, Fun5, Fun6 } from './types'
import { Option, none, some } from './option'

export type Success<T> = { kind: 'Success', value: T }
export type Failure<E> = { kind: 'Failure', error: E }

export type Result<T, E> =
  | Success<T>
  | Failure<E>

export const success = <T, E>(value: T): Result<T, E> => ({ kind: 'Success', value })
export const failure = <T, E>(error: E): Result<T, E> => ({ kind: 'Failure', error })

export const ofNullable = <T, E>(value: T | undefined | null, error: E): Result<T, E> => {
  if (value == null)
    return failure(error)
  else
    return success(value)
}

export const ap = <A, B, Err>(resultf: Result<(a: A) => B, Err>, result: Result<A, Err>): Result<B, Err> =>
  flatten(map(f => map(v => f(v), result), resultf))
export function apN<A, B, C, Err>(f: Result<Fun2<A, B, C>, Err>, a: Result<A, Err>, b: Result<B, Err>): Result<C, Err>
export function apN<A, B, C, D, Err>(
  f: Result<Fun3<A, B, C, D>, Err>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>): Result<D, Err>
export function apN<A, B, C, D, E, Err>(
  f: Result<Fun4<A, B, C, D, E>, Err>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>): Result<E, Err>
export function apN<A, B, C, D, E, F, Err>(
  f: Result<Fun5<A, B, C, D, E, F>, Err>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>): Result<F, Err>
export function apN<A, B, C, D, E, F, G, Err>(
  f: Result<Fun6<A, B, C, D, E, F, G>, Err>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>, g: Result<F, Err>): Result<G, Err>
export function apN<Args extends any[], Err, Ret>(f: Result<(...args: Args) => Ret, Err>, ...args: Result<any, Err>[]): Result<Ret, Err> {
  if (f.kind === 'Failure')
    return f
  for (const a of args)
    if (a.kind === 'Failure') return a
  const results = mapArray(a => a.value, args as { kind: 'Success', value: any }[])
  return success(f.value(...results as Args))
}

export function apNWithCombine<A, B, C, Err>(
  f: Result<Fun2<A, B, C>, Err>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>): Result<C, Err>
export function apNWithCombine<A, B, C, D, Err>(
  f: Result<Fun3<A, B, C, D>, Err>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>): Result<D, Err>
export function apNWithCombine<A, B, C, D, E, Err>(
  f: Result<Fun4<A, B, C, D, E>, Err>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>): Result<E, Err>
export function apNWithCombine<A, B, C, D, E, F, Err>(
  f: Result<Fun5<A, B, C, D, E, F>, Err>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>): Result<F, Err>
export function apNWithCombine<A, B, C, D, E, F, G, Err>(
  f: Result<Fun6<A, B, C, D, E, F, G>, Err>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>, g: Result<F, Err>): Result<G, Err>
export function apNWithCombine<Args extends any[], Err, Ret>(
  f: Result<(...args: Args) => Ret, Err>,
  combineErrors: (e1: Err, e2: Err) => Err,
  ...args: Result<any, Err>[]): Result<Ret, Err> {
  let err: Err | null = null
  if (f.kind === 'Failure')
    err = f.error
  for (const a of args)
    if (a.kind === 'Failure') {
      if (err !== null) {
        err = combineErrors(err, a.error)
      } else {
        err = a.error
      }
    }
  if (err !== null) {
    return failure(err)
  } else {
    const results = mapArray(a => a.value, args as { kind: 'Success', value: any }[])
    return success((f as Success<(...args: Args) => Ret>).value(...results as Args))
  }
}

export const map = <A, B, Err>(f: (a: A) => B, result: Result<A, Err>): Result<B, Err> => {
  switch (result.kind) {
    case 'Failure': return result
    case 'Success': return success(f(result.value))
  }
}

export const mapError = <A, E1, E2>(f: (e: E1) => E2, result: Result<A, E1>): Result<A, E2> => {
  switch (result.kind) {
    case 'Failure': return failure(f(result.error))
    case 'Success': return success(result.value)
  }
}

export function mapN<A, B, C, Err>(f: Fun2<A, B, C>, a: Result<A, Err>, b: Result<B, Err>): Result<C, Err>
export function mapN<A, B, C, D, Err>(f: Fun3<A, B, C, D>, a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>): Result<D, Err>
export function mapN<A, B, C, D, E, Err>(
  f: Fun4<A, B, C, D, E>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>): Result<E, Err>
export function mapN<A, B, C, D, E, F, Err>(
  f: Fun5<A, B, C, D, E, F>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>): Result<F, Err>
export function mapN<A, B, C, D, E, F, G, Err>(
  f: Fun6<A, B, C, D, E, F, G>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>, g: Result<F, Err>): Result<G, Err>
export function mapN<Args extends any[], Err, Ret>(f: (...args: Args) => Ret, ...args: Result<any, Err>[]): Result<Ret, Err> {
  for (const a of args) {
    if (a.kind === 'Failure')
      return a
  }
  const results = mapArray(a => a.value, args as { kind: 'Success', value: any }[])
  return success(f(...results as Args))
}

export function mapNWithCombine<A, B, C, Err>(
  f: Fun2<A, B, C>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>): Result<C, Err>
export function mapNWithCombine<A, B, C, D, Err>(
  f: Fun3<A, B, C, D>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>): Result<D, Err>
export function mapNWithCombine<A, B, C, D, E, Err>(
  f: Fun4<A, B, C, D, E>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>): Result<E, Err>
export function mapNWithCombine<A, B, C, D, E, F, Err>(
  f: Fun5<A, B, C, D, E, F>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>): Result<F, Err>
export function mapNWithCombine<A, B, C, D, E, F, G, Err>(
  f: Fun6<A, B, C, D, E, F, G>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>, g: Result<F, Err>): Result<G, Err>
export function mapNWithCombine<Args extends any[], Err, Ret>(
  f: (...args: Args) => Ret,
  combineErrors: (e1: Err, e2: Err) => Err,
  ...args: Result<any, Err>[]
): Result<Ret, Err> {
  let error: Err | null = null
  for (const a of args) {
    if (a.kind === 'Failure') {
      if (error !== null)
        error = combineErrors(error, a.error)
      else
        error = a.error
    }
  }
  if (error !== null) {
    return failure(error)
  } else {
    const results = mapArray(a => a.value, args as { kind: 'Success', value: any }[])
    return success(f(...results as Args))
  }
}

export const flatMap = <A, B, Err>(f: (a: A) => Result<B, Err>, result: Result<A, Err>): Result<B, Err> => {
  switch (result.kind) {
    case 'Failure': return result
    case 'Success': return f(result.value)
  }
}

export function flatMapN<A, B, C, Err>(
  f: Fun2<A, B, Result<C, Err>>,
  a: Result<A, Err>, b: Result<B, Err>): Result<C, Err>
export function flatMapN<A, B, C, D, Err>(
  f: Fun3<A, B, C, Result<D, Err>>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>): Result<D, Err>
export function flatMapN<A, B, C, D, E, Err>(
  f: Fun4<A, B, C, D, Result<E, Err>>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>): Result<E, Err>
export function flatMapN<A, B, C, D, E, F, Err>(
  f: Fun5<A, B, C, D, E, Result<F, Err>>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>): Result<F, Err>
export function flatMapN<A, B, C, D, E, F, G, Err>(
  f: Fun6<A, B, C, D, E, F, Result<G, Err>>,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>, g: Result<F, Err>): Result<G, Err>
export function flatMapN<Args extends any[], Err, Ret>(
  f: (...args: Args) => Result<Ret, Err>,
  ...args: Result<any, Err>[]
): Result<Ret, Err> {
  for (const a of args) {
    if (a.kind === 'Failure') {
      return a
    }
  }
  const results = mapArray(a => a.value, args as { kind: 'Success', value: any }[])
  return f(...results as Args)
}

export function flatMapNWithCombine<A, B, C, Err>(
  f: Fun2<A, B, Result<C, Err>>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>): Result<C, Err>
export function flatMapNWithCombine<A, B, C, D, Err>(
  f: Fun3<A, B, C, Result<D, Err>>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>): Result<D, Err>
export function flatMapNWithCombine<A, B, C, D, E, Err>(
  f: Fun4<A, B, C, D, Result<E, Err>>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>): Result<E, Err>
export function flatMapNWithCombine<A, B, C, D, E, F, Err>(
  f: Fun5<A, B, C, D, E, Result<F, Err>>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>): Result<F, Err>
export function flatMapNWithCombine<A, B, C, D, E, F, G, Err>(
  f: Fun6<A, B, C, D, E, F, Result<G, Err>>,
  combineErrors: (e1: Err, e2: Err) => Err,
  a: Result<A, Err>, b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>, g: Result<F, Err>): Result<G, Err>
export function flatMapNWithCombine<Args extends any[], Err, Ret>(
  f: (...args: Args) => Result<Ret, Err>,
  combineErrors: (e1: Err, e2: Err) => Err,
  ...args: Result<any, Err>[]
): Result<Ret, Err> {
  let error: Err | null = null
  for (const a of args) {
    if (a.kind === 'Failure') {
      if (error !== null)
        error = combineErrors(error, a.error)
      else
        error = a.error
    }
  }
  if (error !== null) {
    return failure(error)
  } else {
    const results = mapArray(a => a.value, args as { kind: 'Success', value: any }[])
    return f(...results as Args)
  }
}

export const equals = <T, E>(predicate: (a: T, b: T) => boolean, a: Result<T, E>, b: Result<T, E>): boolean => {
  if (a.kind !== b.kind)
    return false
  else if (a.kind === 'Failure' && b.kind === 'Failure')
    return true
  else
    return predicate((a as { kind: 'Success', value: T }).value, (b as { kind: 'Success', value: T }).value)
}

export const isFailure = <T, E>(result: Result<T, E>): result is Failure<E> => result.kind === 'Failure'
export const isSuccess = <T, E>(result: Result<T, E>): result is Success<T> => result.kind === 'Success'

export const filter = <T, E>(predicate: (v: T) => boolean, error: E, result: Result<T, E>): Result<T, E> => {
  switch (result.kind) {
    case 'Failure': return result
    case 'Success':
      if (predicate(result.value)) {
        return result
      } else {
        return failure(error)
      }
  }
}

export const filterLazy = <T, E>(predicate: (v: T) => boolean, errorf: () => E, result: Result<T, E>): Result<T, E> => {
  switch (result.kind) {
    case 'Failure': return result
    case 'Success':
      if (predicate(result.value)) {
        return result
      } else {
        return failure(errorf())
      }
  }
}

export const getOrThrow = <T, E>(result: Result<T, E>): Maybe<T> => {
  switch (result.kind) {
    case 'Failure': throw result.error
    case 'Success': return result.value
  }
}

export const getOrElse = <T, E>(result: Result<T, E>, alt: T): T => {
  switch (result.kind) {
    case 'Failure': return alt
    case 'Success': return result.value
  }
}

export const getOrElseLazy = <T, E>(result: Result<T, E>, alt: () => T): T => {
  switch (result.kind) {
    case 'Failure': return alt()
    case 'Success': return result.value
  }
}

export const toBoolean = (result: Result<unknown, unknown>) => {
  switch (result.kind) {
    case 'Failure': return false
    case 'Success': return true
  }
}

export const toArray = <T, E>(result: Result<T, E>): T[] => {
  switch (result.kind) {
    case 'Failure': return []
    case 'Success': return [result.value]
  }
}

export const toMaybe = <T, E>(result: Result<T, E>): Maybe<T> => {
  switch (result.kind) {
    case 'Failure': return nothing
    case 'Success': return just(result.value)
  }
}

export const toOption = <T, E>(result: Result<T, E>): Option<T> => {
  switch (result.kind) {
    case 'Failure': return none
    case 'Success': return some(result.value)
  }
}

export const flatten = <T, E>(result: Result<Result<T, E>, E>): Result<T, E> => {
  switch (result.kind) {
    case 'Failure': return failure(result.error)
    case 'Success': return result.value
  }
}

export const cata = <A, B, Err>(f: (a: A) => B, result: Result<A, Err>, ifNone: B): B => {
  switch (result.kind) {
    case 'Failure': return ifNone
    case 'Success': return f(result.value)
  }
}

export const cataLazy = <A, B, Err>(f: (a: A) => B, result: Result<A, Err>, ifNone: () => B): B => {
  switch (result.kind) {
    case 'Failure': return ifNone()
    case 'Success': return f(result.value)
  }
}

export const foldLeft = <T, B, Err>(f: (acc: B, curr: T) => B, result: Result<T, Err>, b: B): B => {
  switch (result.kind) {
    case 'Failure': return b
    case 'Success': return f(b, result.value)
  }
}

export const all = <T, E>(f: (v: T) => boolean, result: Result<T, E>): boolean => {
  switch (result.kind) {
    case 'Failure': return true
    case 'Success': return f(result.value)
  }
}

export const any = <T, E>(f: (v: T) => boolean, result: Result<T, E>): boolean => {
  switch (result.kind) {
    case 'Failure': return false
    case 'Success': return f(result.value)
  }
}

export const each = <T, E>(f: (v: T) => void, result: Result<T, E>): void => {
  switch (result.kind) {
    case 'Failure': return
    case 'Success': return f(result.value)
  }
}

export const firstSuccess = <A, Err>(...args: Result<A, Err>[]): Result<A, Err> => {
  for (const a of args) {
    if (isSuccess(a))
      return a
  }
  for (const a of args) {
    return a
  }
  throw 'cannot use `firstSuccess` with empty argument list'
}

export const recover = <T, E>(result: Result<T, E>, whenFailure: T) => {
  switch (result.kind) {
    case 'Failure': return success(whenFailure)
    case 'Success': return result
  }
}

export const recoverFromError = <T, E>(result: Result<T, E>, whenFailuref: (e: E) => T) => {
  switch (result.kind) {
    case 'Failure': return success(whenFailuref(result.error))
    case 'Success': return result
  }
}

export const swap = <T, E>(result: Result<T, E>): Result<E, T> => {
  switch (result.kind) {
    case 'Failure': return success(result.error)
    case 'Success': return failure(result.value)
  }
}

export const combine = <A, B, Err>(a: Result<A, Err>, b: Result<B, Err>): Result<[A, B], Err> =>
  mapN((a, b) => [a, b], a, b)

export const spread = <A, B, C, Err>(f: (a: A, b: B) => C, v: Result<[A, B], Err>): Result<C, Err> =>
  map((t) => f(t[0], t[1]), v)

export type T<V, E> = Result<V, E>
