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

export type Success<T> = { kind: 'Success', value: T }
export type Failure<E> = { kind: 'Failure', error: E }

export type Result<T, E> =
  | Success<T>
  | Failure<E>

export function success<T, E>(value: T): Result<T, E> { return { kind: 'Success', value } }
export function failure<T, E>(error: E): Result<T, E> { return { kind: 'Failure', error } }

export function ofNullable<T, E>(value: T | undefined | null, error: E): Result<T, E> {
  if (value == null)
    return failure(error)
  else
    return success(value)
}

export function ap<A, B, Err>(result: Result<A, Err>, resultf: Result<(a: A) => B, Err>): Result<B, Err> {
  return flatten(map(resultf, f => map(result, v => f(v))))
}
export function apN<A, B, C, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  f: Result<Fun2<A, B, C>, Err>
): Result<C, Err>
export function apN<A, B, C, D, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  f: Result<Fun3<A, B, C, D>, Err>
): Result<D, Err>
export function apN<A, B, C, D, E, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  f: Result<Fun4<A, B, C, D, E>, Err>
): Result<E, Err>
export function apN<A, B, C, D, E, F, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  e: Result<E, Err>,
  f: Result<Fun5<A, B, C, D, E, F>, Err>
): Result<F, Err>
export function apN<A, B, C, D, E, F, G, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  e: Result<E, Err>,
  g: Result<F, Err>,
  f: Result<Fun6<A, B, C, D, E, F, G>, Err>
): Result<G, Err>
export function apN<Args extends any[], Err, Ret>(
  ...args: any[]
): Result<Ret, Err> {
  const f = args.pop()
  if (f.kind === 'Failure')
    return f
  for (const a of args)
    if (a.kind === 'Failure') return a
  const results = mapArray(args as { kind: 'Success', value: any }[], a => a.value)
  return success(f.value(...results as Args))
}

export function apNWithCombine<A, B, C, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  f: Result<Fun2<A, B, C>, Err>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<C, Err>
export function apNWithCombine<A, B, C, D, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  f: Result<Fun3<A, B, C, D>, Err>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<D, Err>
export function apNWithCombine<A, B, C, D, E, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  f: Result<Fun4<A, B, C, D, E>, Err>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<E, Err>
export function apNWithCombine<A, B, C, D, E, F, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  e: Result<E, Err>,
  f: Result<Fun5<A, B, C, D, E, F>, Err>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<F, Err>
export function apNWithCombine<A, B, C, D, E, F, G, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  e: Result<E, Err>,
  g: Result<F, Err>,
  f: Result<Fun6<A, B, C, D, E, F, G>, Err>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<G, Err>
export function apNWithCombine<Args extends any[], Err, Ret>(
  ...args: any[]
): Result<Ret, Err> {
  const combineErrors = args.pop()
  const f = args.pop()
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
    const results = mapArray(args as { kind: 'Success', value: any }[], a => a.value)
    return success((f as Success<(...args: Args) => Ret>).value(...results as Args))
  }
}

export function forEach<A, Err>(result: Result<A, Err>, f: (a: A) => void): void {
  switch (result.kind) {
    case 'Failure': return
    case 'Success': f(result.value)
  }
}

export function map<A, B, Err>(result: Result<A, Err>, f: (a: A) => B): Result<B, Err> {
  switch (result.kind) {
    case 'Failure': return result
    case 'Success': return success(f(result.value))
  }
}

export function mapError<A, E1, E2>(result: Result<A, E1>, f: (e: E1) => E2): Result<A, E2> {
  switch (result.kind) {
    case 'Failure': return failure(f(result.error))
    case 'Success': return success(result.value)
  }
}

export function mapN<A, B, C, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  f: Fun2<A, B, C>
): Result<C, Err>
export function mapN<A, B, C, D, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  f: Fun3<A, B, C, D>
): Result<D, Err>
export function mapN<A, B, C, D, E, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  f: Fun4<A, B, C, D, E>
): Result<E, Err>
export function mapN<A, B, C, D, E, F, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  e: Result<E, Err>,
  f: Fun5<A, B, C, D, E, F>
): Result<F, Err>
export function mapN<A, B, C, D, E, F, G, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  e: Result<E, Err>,
  g: Result<F, Err>,
  f: Fun6<A, B, C, D, E, F, G>
): Result<G, Err>
export function mapN<Args extends any[], Err, Ret>(
  ...args: any[]
): Result<Ret, Err> {
  const f = args.pop()
  for (const a of args) {
    if (a.kind === 'Failure')
      return a
  }
  const results = mapArray(args as { kind: 'Success', value: any }[], a => a.value)
  return success(f(...results as Args))
}

export function mapNWithCombine<A, B, C, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  f: Fun2<A, B, C>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<C, Err>
export function mapNWithCombine<A, B, C, D, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  f: Fun3<A, B, C, D>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<D, Err>
export function mapNWithCombine<A, B, C, D, E, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  f: Fun4<A, B, C, D, E>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<E, Err>
export function mapNWithCombine<A, B, C, D, E, F, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  e: Result<E, Err>,
  f: Fun5<A, B, C, D, E, F>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<F, Err>
export function mapNWithCombine<A, B, C, D, E, F, G, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  c: Result<C, Err>,
  d: Result<D, Err>,
  e: Result<E, Err>,
  g: Result<F, Err>,
  f: Fun6<A, B, C, D, E, F, G>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<G, Err>
export function mapNWithCombine<Args extends any[], Err, Ret>(
  ...args: any[]
): Result<Ret, Err> {
  const combineErrors = args.pop()
  const f = args.pop()
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
    const results = mapArray(args as { kind: 'Success', value: any }[], a => a.value)
    return success(f(...results as Args))
  }
}

export function flatMap<A, B, Err>(result: Result<A, Err>, f: (a: A) => Result<B, Err>): Result<B, Err> {
  switch (result.kind) {
    case 'Failure': return result
    case 'Success': return f(result.value)
  }
}

export function flatMapN<A, B, C, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  f: Fun2<A, B, Result<C, Err>>
): Result<C, Err>
export function flatMapN<A, B, C, D, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>, c: Result<C, Err>,
  f: Fun3<A, B, C, Result<D, Err>>
): Result<D, Err>
export function flatMapN<A, B, C, D, E, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>,
  f: Fun4<A, B, C, D, Result<E, Err>>
): Result<E, Err>
export function flatMapN<A, B, C, D, E, F, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>,
  f: Fun5<A, B, C, D, E, Result<F, Err>>
): Result<F, Err>
export function flatMapN<A, B, C, D, E, F, G, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>,
  g: Result<F, Err>,
  f: Fun6<A, B, C, D, E, F, Result<G, Err>>
): Result<G, Err>
export function flatMapN<Args extends any[], Err, Ret>(
  ...args: any[]
): Result<Ret, Err> {
  const f = args.pop()
  for (const a of args) {
    if (a.kind === 'Failure') {
      return a
    }
  }
  const results = mapArray(args as { kind: 'Success', value: any }[], a => a.value)
  return f(...results as Args)
}

export function flatMapNWithCombine<A, B, C, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>,
  f: Fun2<A, B, Result<C, Err>>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<C, Err>
export function flatMapNWithCombine<A, B, C, D, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>, c: Result<C, Err>,
  f: Fun3<A, B, C, Result<D, Err>>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<D, Err>
export function flatMapNWithCombine<A, B, C, D, E, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>,
  f: Fun4<A, B, C, D, Result<E, Err>>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<E, Err>
export function flatMapNWithCombine<A, B, C, D, E, F, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>,
  f: Fun5<A, B, C, D, E, Result<F, Err>>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<F, Err>
export function flatMapNWithCombine<A, B, C, D, E, F, G, Err>(
  a: Result<A, Err>,
  b: Result<B, Err>, c: Result<C, Err>, d: Result<D, Err>, e: Result<E, Err>,
  g: Result<F, Err>,
  f: Fun6<A, B, C, D, E, F, Result<G, Err>>,
  combineErrors: (e1: Err, e2: Err) => Err
): Result<G, Err>
export function flatMapNWithCombine<Args extends any[], Err, Ret>(
  ...args: any[]
): Result<Ret, Err> {
  const combineErrors = args.pop()
  const f = args.pop()
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
    const results = mapArray(args as { kind: 'Success', value: any }[], a => a.value)
    return f(...results as Args)
  }
}

export function equals<T, E>(
  a: Result<T, E>,
  b: Result<T, E>,
  predicate: (a: T, b: T) => boolean
): boolean {
  if (a.kind !== b.kind)
    return false
  else if (a.kind === 'Failure' && b.kind === 'Failure')
    return true
  else
    return predicate((a as { kind: 'Success', value: T }).value, (b as { kind: 'Success', value: T }).value)
}

export function makeEquals<T, E>(predicate: (a: T, b: T) => boolean) {
  return function(a: Result<T, E>, b: Result<T, E>) {
    return equals(a, b, predicate)
  }
}

export function isFailure<T, E>(result: Result<T, E>): result is Failure<E> {
  return result.kind === 'Failure'
}

export function isSuccess<T, E>(result: Result<T, E>): result is Success<T> {
  return result.kind === 'Success'
}

export function filter<T, E>(result: Result<T, E>, predicate: (v: T) => boolean, error: E): Result<T, E> {
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

export function filterLazy<T, E>(result: Result<T, E>, predicate: (v: T) => boolean, errorf: () => E): Result<T, E> {
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

export function getOrThrow<T, E>(result: Result<T, E>): Maybe<T> {
  switch (result.kind) {
    case 'Failure': throw result.error
    case 'Success': return result.value
  }
}

export function getOrElse<T, E>(result: Result<T, E>, alt: T): T {
  switch (result.kind) {
    case 'Failure': return alt
    case 'Success': return result.value
  }
}

export function getOrElseLazy<T, E>(result: Result<T, E>, alt: () => T): T {
  switch (result.kind) {
    case 'Failure': return alt()
    case 'Success': return result.value
  }
}

export function toBoolean(result: Result<unknown, unknown>) {
  switch (result.kind) {
    case 'Failure': return false
    case 'Success': return true
  }
}

export function toArray<T, E>(result: Result<T, E>): T[] {
  switch (result.kind) {
    case 'Failure': return []
    case 'Success': return [result.value]
  }
}

export function toMaybe<T, E>(result: Result<T, E>): Maybe<T> {
  switch (result.kind) {
    case 'Failure': return nothing
    case 'Success': return just(result.value)
  }
}

export function toOption<T, E>(result: Result<T, E>): Option<T> {
  switch (result.kind) {
    case 'Failure': return none
    case 'Success': return some(result.value)
  }
}

export function flatten<T, E>(result: Result<Result<T, E>, E>): Result<T, E> {
  switch (result.kind) {
    case 'Failure': return failure(result.error)
    case 'Success': return result.value
  }
}

export function cata<A, B, Err>(result: Result<A, Err>, f: (a: A) => B, ifNone: B): B {
  switch (result.kind) {
    case 'Failure': return ifNone
    case 'Success': return f(result.value)
  }
}

export function cataLazy<A, B, Err>(result: Result<A, Err>, f: (a: A) => B, ifNone: () => B): B {
  switch (result.kind) {
    case 'Failure': return ifNone()
    case 'Success': return f(result.value)
  }
}

export function foldLeft<T, B, Err>(result: Result<T, Err>, f: (acc: B, curr: T) => B, b: B): B {
  switch (result.kind) {
    case 'Failure': return b
    case 'Success': return f(b, result.value)
  }
}

export function all<T, E>(result: Result<T, E>, f: (v: T) => boolean): boolean {
  switch (result.kind) {
    case 'Failure': return true
    case 'Success': return f(result.value)
  }
}

export function any<T, E>(result: Result<T, E>, f: (v: T) => boolean): boolean {
  switch (result.kind) {
    case 'Failure': return false
    case 'Success': return f(result.value)
  }
}

export function each<T, E>(result: Result<T, E>, f: (v: T) => void): void {
  switch (result.kind) {
    case 'Failure': return
    case 'Success': return f(result.value)
  }
}

export function firstSuccess<A, Err>(...args: Result<A, Err>[]): Result<A, Err> {
  for (const a of args) {
    if (isSuccess(a))
      return a
  }
  for (const a of args) {
    return a
  }
  throw 'cannot use `firstSuccess` with empty argument list'
}

export function recover<T, E>(result: Result<T, E>, whenFailure: T): Result<T, E> {
  switch (result.kind) {
    case 'Failure': return success(whenFailure)
    case 'Success': return result
  }
}

export function recoverFromError<T, E>(result: Result<T, E>, whenFailuref: (e: E) => T) {
  switch (result.kind) {
    case 'Failure': return success(whenFailuref(result.error))
    case 'Success': return result
  }
}

export function swap<T, E>(result: Result<T, E>): Result<E, T> {
  switch (result.kind) {
    case 'Failure': return success(result.error)
    case 'Success': return failure(result.value)
  }
}

export function combine<A, B, Err>(a: Result<A, Err>,
  b: Result<B, Err>): Result<[A, B], Err> {
  return mapN(a, b, (a, b) => [a, b])
}

export function spread<A, B, C, Err>(f: (a: A, b: B) => C, v: Result<[A, B], Err>): Result<C, Err> {
  return map(v, (t) => f(t[0], t[1]))
}

export type T<V, E> = Result<V, E>
