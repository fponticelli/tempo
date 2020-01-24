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

export type Outcome<T> = { kind: 'Outcome', value: T }
export type NotAsked = { kind: 'NotAsked' }
export type Loading<P> = { kind: 'Loading', progress: P }

export type Async<T, P> =
  | Outcome<T>
  | NotAsked
  | Loading<P>

export const outcome = <T, P>(value: T): Async<T, P> => ({ kind: 'Outcome', value })
export const notAsked = { kind: 'NotAsked' } as Async<never, never>
export const loading = <T, P>(progress: P): Async<T, P> => ({ kind: 'Loading', progress })

export const map = <A, B, P>(f: (a: A) => B, async: Async<A, P>): Async<B, P> => {
  switch (async.kind) {
    case 'Loading':
    case 'NotAsked': return async
    case 'Outcome': return outcome(f(async.value))
  }
}

export const mapLoading = <A, E1, E2>(f: (e: E1) => E2, async: Async<A, E1>): Async<A, E2> => {
  switch (async.kind) {
    case 'Loading': return loading(f(async.progress))
    case 'NotAsked': return async
    case 'Outcome': return outcome(async.value)
  }
}

export function mapN<A, B, C, Prog>(f: Fun2<A, B, C>, a: Async<A, Prog>, b: Async<B, Prog>): Async<C, Prog>
export function mapN<A, B, C, D, Prog>(f: Fun3<A, B, C, D>, a: Async<A, Prog>, b: Async<B, Prog>, c: Async<C, Prog>): Async<D, Prog>
export function mapN<A, B, C, D, E, Prog>(
  f: Fun4<A, B, C, D, E>,
  a: Async<A, Prog>, b: Async<B, Prog>, c: Async<C, Prog>, d: Async<D, Prog>): Async<E, Prog>
export function mapN<A, B, C, D, E, F, Prog>(
  f: Fun5<A, B, C, D, E, F>,
  a: Async<A, Prog>, b: Async<B, Prog>, c: Async<C, Prog>, d: Async<D, Prog>, e: Async<E, Prog>): Async<F, Prog>
export function mapN<A, B, C, D, E, F, G, Prog>(
  f: Fun6<A, B, C, D, E, F, G>,
  a: Async<A, Prog>, b: Async<B, Prog>, c: Async<C, Prog>, d: Async<D, Prog>, e: Async<E, Prog>, g: Async<F, Prog>): Async<G, Prog>
export function mapN<Prog, Ret>(f: (...args: any[]) => Ret, ...args: Async<any, Prog>[]): Async<Ret, Prog> {
  for (const a of args) {
    if (a.kind === 'Loading' || a.kind === 'NotAsked')
      return a
  }
  const results = mapArray(a => a.value, args as { kind: 'Outcome', value: any }[])
  return outcome(f(...results))
}

export const flatMap = <A, B, Prog>(f: (a: A) => Async<B, Prog>, async: Async<A, Prog>): Async<B, Prog> => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return async
    case 'Outcome': return f(async.value)
  }
}

export function flatMapN<A, B, C, Prog>(
  f: Fun2<A, B, Async<C, Prog>>,
  a: Async<A, Prog>, b: Async<B, Prog>): Async<C, Prog>
export function flatMapN<A, B, C, D, Prog>(
  f: Fun3<A, B, C, Async<D, Prog>>,
  a: Async<A, Prog>, b: Async<B, Prog>, c: Async<C, Prog>): Async<D, Prog>
export function flatMapN<A, B, C, D, E, Prog>(
  f: Fun4<A, B, C, D, Async<E, Prog>>,
  a: Async<A, Prog>, b: Async<B, Prog>, c: Async<C, Prog>, d: Async<D, Prog>): Async<E, Prog>
export function flatMapN<A, B, C, D, E, F, Prog>(
  f: Fun5<A, B, C, D, E, Async<F, Prog>>,
  a: Async<A, Prog>, b: Async<B, Prog>, c: Async<C, Prog>, d: Async<D, Prog>, e: Async<E, Prog>): Async<F, Prog>
export function flatMapN<A, B, C, D, E, F, G, Prog>(
  f: Fun6<A, B, C, D, E, F, Async<G, Prog>>,
  a: Async<A, Prog>, b: Async<B, Prog>, c: Async<C, Prog>, d: Async<D, Prog>, e: Async<E, Prog>, g: Async<F, Prog>): Async<G, Prog>
export function flatMapN<Args extends any[], Prog, Ret>(
  f: (...args: Args) => Async<Ret, Prog>,
  ...args: Async<any, Prog>[]
): Async<Ret, Prog> {
  for (const a of args) {
    if (a.kind === 'Loading' || a.kind === 'NotAsked') {
      return a
    }
  }
  const results = mapArray(a => a.value, args as { kind: 'Outcome', value: any }[])
  return f(...results as Args)
}

export const equals = <T, P>(predicateOutcome: (a: T, b: T) => boolean, predicateProgress: (a: P, b: P) => boolean, a: Async<T, P>, b: Async<T, P>): boolean => {
  if (a.kind !== b.kind)
    return false
  else if (a.kind === 'NotAsked' && b.kind === 'NotAsked')
    return true
  else if (a.kind === 'Loading' && b.kind === 'Loading')
    return predicateProgress((a as { kind: 'Loading', progress: P }).progress, (b as { kind: 'Loading', progress: P }).progress)
  else
    return predicateOutcome((a as { kind: 'Outcome', value: T }).value, (b as { kind: 'Outcome', value: T }).value)
}

export const isOutcome = <T, P>(async: Async<T, P>): async is Outcome<T> => async.kind === 'Outcome'
export const isLoading = <T, P>(async: Async<T, P>): async is Loading<P> => async.kind === 'Loading'
export const isNotAsked = <T, P>(async: Async<T, P>): async is NotAsked => async.kind === 'NotAsked'

export const getOrThrow = <T, P>(async: Async<T, P>): Maybe<T> => {
  switch (async.kind) {
    case 'NotAsked': throw 'Can\'t retrieve value from NotAsked'
    case 'Loading': throw 'Can\'t retrieve value from Loading: ' + async.progress
    case 'Outcome': return async.value
  }
}

export const getOrElse = <T, P>(async: Async<T, P>, alt: T): T => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return alt
    case 'Outcome': return async.value
  }
}

export const getOrElseLazy = <T, P>(async: Async<T, P>, alt: () => T): T => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return alt()
    case 'Outcome': return async.value
  }
}

export const toArray = <T, P>(async: Async<T, P>): T[] => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return []
    case 'Outcome': return [async.value]
  }
}

export const toMaybe = <T, P>(async: Async<T, P>): Maybe<T> => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return nothing
    case 'Outcome': return just(async.value)
  }
}

export const toOption = <T, P>(async: Async<T, P>): Option<T> => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return none
    case 'Outcome': return some(async.value)
  }
}

export const flatten = <T, P>(async: Async<Async<T, P>, P>): Async<T, P> => {
  switch (async.kind) {
    case 'NotAsked': return notAsked
    case 'Loading': return loading(async.progress)
    case 'Outcome': return async.value
  }
}

export const cata = <A, B, Prog>(f: (a: A) => B, async: Async<A, Prog>, ifNotOutcome: B): B => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return ifNotOutcome
    case 'Outcome': return f(async.value)
  }
}

export const cataLazy = <A, B, Prog>(f: (a: A) => B, async: Async<A, Prog>, ifNotOutcome: () => B): B => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return ifNotOutcome()
    case 'Outcome': return f(async.value)
  }
}

export const foldLeft = <T, B, Prog>(f: (acc: B, curr: T) => B, async: Async<T, Prog>, b: B): B => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return b
    case 'Outcome': return f(b, async.value)
  }
}

export const all = <T, P>(f: (v: T) => boolean, async: Async<T, P>): boolean => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return true
    case 'Outcome': return f(async.value)
  }
}

export const any = <T, P>(f: (v: T) => boolean, async: Async<T, P>): boolean => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return false
    case 'Outcome': return f(async.value)
  }
}

export const each = <T, P>(f: (v: T) => void, async: Async<T, P>): void => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return
    case 'Outcome': return f(async.value)
  }
}

export const firstOutcome = <A, Prog>(...args: Async<A, Prog>[]): Async<A, Prog> => {
  for (const a of args) {
    if (isOutcome(a))
      return a
  }
  for (const a of args) {
    return a
  }
  throw 'cannot use `firstOutcome` with empty argument list'
}

export const recover = <T, P>(async: Async<T, P>, whenNoOutcome: T) => {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return outcome(whenNoOutcome)
    case 'Outcome': return async
  }
}

export type T<V, E> = Async<V, E>
