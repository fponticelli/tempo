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

import { Fun2, Fun3, Fun4, Fun5, Fun6 } from './types/functions'
import * as Res from './result'
import { Nel, ofValue, concat, map } from './nel'

export type Validation<T, E> = Res.T<T, Nel<E>>

export function success<T, E>(value: T): Validation<T, E> {
  return { kind: 'Success', value }
}
export function failure<T, E>(error: E): Validation<T, E> {
  return { kind: 'Failure', error: ofValue(error) }
}
export function failures<T, E>(errors: Nel<E>
): Validation<T, E> {
  return { kind: 'Failure', error: errors }
}

export function ofNullable<T, E>(value: T | undefined | null, error: E): Validation<T, E> {
  return Res.ofNullable(value, ofValue(error))
}

export function match<A, B, E>(value: Validation<A, E>, f: (v: A) => B, fErr: (e: Nel<E>) => B): B {
  switch (value.kind) {
    case 'Success': return f(value.value)
    case 'Failure': return fErr(value.error)
  }
}

export function apN<A, B, C, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  f: Validation<Fun2<A, B, C>, Err>
): Validation<C, Err>
export function apN<A, B, C, D, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  f: Validation<Fun3<A, B, C, D>, Err>
): Validation<D, Err>
export function apN<A, B, C, D, E, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  d: Validation<D, Err>,
  f: Validation<Fun4<A, B, C, D, E>, Err>
): Validation<E, Err>
export function apN<A, B, C, D, E, F, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  d: Validation<D, Err>,
  e: Validation<E, Err>,
  f: Validation<Fun5<A, B, C, D, E, F>, Err>
): Validation<F, Err>
export function apN<A, B, C, D, E, F, G, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  d: Validation<D, Err>,
  e: Validation<E, Err>,
  g: Validation<F, Err>,
  f: Validation<Fun6<A, B, C, D, E, F, G>, Err>
): Validation<G, Err>
export function apN<Args extends any[], Err, Ret>(
  ...args: Validation<any, Err>[]
): Validation<Ret, Err> {
  const f = args.pop()
  return (Res.apNWithCombine as Function)(f, concat, ...args)
}

export function mapError<A, E1, E2>(result: Validation<A, E1>, f: (e: E1) => E2): Validation<A, E2> {
  switch (result.kind) {
    case 'Failure': return failures(map(result.error, f))
    case 'Success': return success(result.value)
  }
}

export function mapN<A, B, C, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  f: Fun2<A, B, C>
): Validation<C, Err>
export function mapN<A, B, C, D, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  f: Fun3<A, B, C, D>
): Validation<D, Err>
export function mapN<A, B, C, D, E, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  d: Validation<D, Err>,
  f: Fun4<A, B, C, D, E>
): Validation<E, Err>
export function mapN<A, B, C, D, E, F, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  d: Validation<D, Err>,
  e: Validation<E, Err>,
  f: Fun5<A, B, C, D, E, F>
): Validation<F, Err>
export function mapN<A, B, C, D, E, F, G, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  d: Validation<D, Err>,
  e: Validation<E, Err>,
  g: Validation<F, Err>,
  f: Fun6<A, B, C, D, E, F, G>
): Validation<G, Err>
export function mapN<Args extends any[], Err, Ret>(...args: any[]): Validation<Ret, Err> {
  const f = args.pop()
  return (Res.mapNWithCombine as Function)(f, concat, ...args)
}

export function flatMapN<A, B, C, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  f: Fun2<A, B, Validation<C, Err>>
): Validation<C, Err>
export function flatMapN<A, B, C, D, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  f: Fun3<A, B, C, Validation<D, Err>>
): Validation<D, Err>
export function flatMapN<A, B, C, D, E, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  d: Validation<D, Err>,
  f: Fun4<A, B, C, D, Validation<E, Err>>
): Validation<E, Err>
export function flatMapN<A, B, C, D, E, F, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  d: Validation<D, Err>,
  e: Validation<E, Err>,
  f: Fun5<A, B, C, D, E, Validation<F, Err>>
): Validation<F, Err>
export function flatMapN<A, B, C, D, E, F, G, Err>(
  a: Validation<A, Err>,
  b: Validation<B, Err>,
  c: Validation<C, Err>,
  d: Validation<D, Err>,
  e: Validation<E, Err>,
  g: Validation<F, Err>,
  f: Fun6<A, B, C, D, E, F, Validation<G, Err>>
): Validation<G, Err>
export function flatMapN<Args extends any[], Err, Ret>(
  ...args: any[]
): Validation<Ret, Err> {
  const f = args.pop()
  return (Res.flatMapNWithCombine as Function)(f, concat, ...args)
}

export function filter<T, E>(result: Validation<T, E>, predicate: (v: T) => boolean, error: E): Validation<T, E> {
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

export function filterLazy<T, E>(result: Validation<T, E>, predicate: (v: T) => boolean, errorf: () => E): Validation<T, E> {
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

export function flatten<T, E>(result: Validation<Validation<T, E>, E>
): Validation<T, E> {
  switch (result.kind) {
    case 'Failure': return failures(result.error)
    case 'Success': return result.value
  }
}

export function recover<T, E>(result: Validation<T, E>, whenFailure: T) {
  switch (result.kind) {
    case 'Failure': return success(whenFailure)
    case 'Success': return result
  }
}

export function recoverFromError<T, E>(result: Validation<T, E>, whenFailuref: (e: Nel<E>) => T) {
  switch (result.kind) {
    case 'Failure': return success(whenFailuref(result.error))
    case 'Success': return result
  }
}

export function swap<T, E>(result: Validation<T, E>): Res.T<Nel<E>, T> {
  switch (result.kind) {
    case 'Failure': return Res.success(result.error)
    case 'Success': return Res.failure(result.value)
  }
}

export type T<V, E> = Validation<V, E>
