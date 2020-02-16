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

export type Outcome<T> = { kind: 'Outcome', value: T }
export type NotAsked = { kind: 'NotAsked' }
export type Loading<P> = { kind: 'Loading', progress: P }

export type Async<T, P> =
  | Outcome<T>
  | NotAsked
  | Loading<P>

export function outcome<T, P>(value: T): Async<T, P> { return { kind: 'Outcome', value }}
export const notAsked = { kind: 'NotAsked' } as Async<never, never>
export function loading<T, P>(progress: P): Async<T, P> { return { kind: 'Loading', progress }}



export function match<A, B, Prog = unknown>(
  result: Async<A, Prog>,
  f: (a: A) => B,
  notAsked: B,
  fProg: (p: Prog) => B
): B {
  switch (result.kind) {
    case 'Loading':  return fProg(result.progress)
    case 'NotAsked': return notAsked
    case 'Outcome':  return f(result.value)
  }
}

export function map<A, B, P>(async: Async<A, P>, f: (a: A) => B): Async<B, P> {
  switch (async.kind) {
    case 'Loading':
    case 'NotAsked': return async
    case 'Outcome': return outcome(f(async.value))
  }
}

export function mapLoading<A, E1, E2>(async: Async<A, E1>, f: (e: E1) => E2): Async<A, E2> {
  switch (async.kind) {
    case 'Loading': return loading(f(async.progress))
    case 'NotAsked': return async
    case 'Outcome': return outcome(async.value)
  }
}

export function mapN<A, B, C, Prog>(
  a: Async<A, Prog>,
  b: Async<B, Prog>,
  f: Fun2<A, B, C>
): Async<C, Prog>
export function mapN<A, B, C, D, Prog>(
  a: Async<A, Prog>,
  b: Async<B, Prog>,
  c: Async<C, Prog>,
  f: Fun3<A, B, C, D>
): Async<D, Prog>
export function mapN<A, B, C, D, E, Prog>(
  a: Async<A, Prog>,
  b: Async<B, Prog>,
  c: Async<C, Prog>,
  d: Async<D, Prog>,
  f: Fun4<A, B, C, D, E>
): Async<E, Prog>
export function mapN<A, B, C, D, E, F, Prog>(
  a: Async<A, Prog>,
  b: Async<B, Prog>,
  c: Async<C, Prog>,
  d: Async<D, Prog>,
  e: Async<E, Prog>,
  f: Fun5<A, B, C, D, E, F>
): Async<F, Prog>
export function mapN<A, B, C, D, E, F, G, Prog>(
  a: Async<A, Prog>,
  b: Async<B, Prog>,
  c: Async<C, Prog>,
  d: Async<D, Prog>,
  e: Async<E, Prog>,
  g: Async<F, Prog>,
  f: Fun6<A, B, C, D, E, F, G>
): Async<G, Prog>
export function mapN<Prog, Ret>(
  ...args: any[]
): Async<Ret, Prog> {
  const f = args.pop()
  for (const a of args) {
    if (a.kind === 'Loading' || a.kind === 'NotAsked')
      return a
  }
  const results = mapArray(args as { kind: 'Outcome', value: any }[], a => a.value)
  return outcome(f(...results))
}

export function flatMap<A, B, Prog>(async: Async<A, Prog>, f: (a: A) => Async<B, Prog>): Async<B, Prog> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return async
    case 'Outcome': return f(async.value)
  }
}

export function flatMapN<A, B, C, Prog>(
  a: Async<A, Prog>,
  b: Async<B, Prog>,
  f: Fun2<A, B, Async<C, Prog>>
): Async<C, Prog>
export function flatMapN<A, B, C, D, Prog>(
  a: Async<A, Prog>,
  b: Async<B, Prog>,
  c: Async<C, Prog>,
  f: Fun3<A, B, C, Async<D, Prog>>
): Async<D, Prog>
export function flatMapN<A, B, C, D, E, Prog>(
  a: Async<A, Prog>,
  b: Async<B, Prog>,
  c: Async<C, Prog>,
  d: Async<D, Prog>,
  f: Fun4<A, B, C, D, Async<E, Prog>>
): Async<E, Prog>
export function flatMapN<A, B, C, D, E, F, Prog>(
  a: Async<A, Prog>,
  b: Async<B, Prog>,
  c: Async<C, Prog>,
  d: Async<D, Prog>,
  e: Async<E, Prog>,
  f: Fun5<A, B, C, D, E, Async<F, Prog>>
): Async<F, Prog>
export function flatMapN<A, B, C, D, E, F, G, Prog>(
  a: Async<A, Prog>,
  b: Async<B, Prog>,
  c: Async<C, Prog>,
  d: Async<D, Prog>,
  e: Async<E, Prog>,
  g: Async<F, Prog>,
  f: Fun6<A, B, C, D, E, F, Async<G, Prog>>
): Async<G, Prog>
export function flatMapN<Args extends any[], Prog, Ret>(
  ...args: any[]
): Async<Ret, Prog> {
  const f = args.pop()
  for (const a of args) {
    if (a.kind === 'Loading' || a.kind === 'NotAsked') {
      return a
    }
  }
  const results = mapArray(args as { kind: 'Outcome', value: any }[], a => a.value)
  return f(...results as Args)
}

export function isOutcome<T, P>(async: Async<T, P>): async is Outcome<T> {
  return async.kind === 'Outcome'
}

export function isLoading<T, P>(async: Async<T, P>): async is Loading<P> {
  return async.kind === 'Loading'
}

export function isNotAsked<T, P>(async: Async<T, P>): async is NotAsked {
  return async.kind === 'NotAsked'
}

export function getOrThrow<T, P>(async: Async<T, P>): Maybe<T> {
  switch (async.kind) {
    case 'NotAsked': throw 'Can\'t retrieve value from NotAsked'
    case 'Loading': throw 'Can\'t retrieve value from Loading: ' + async.progress
    case 'Outcome': return async.value
  }
}

export function getOrElse<T, P>(async: Async<T, P>, alt: T): T {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return alt
    case 'Outcome': return async.value
  }
}

export function getOrElseLazy<T, P>(async: Async<T, P>, alt: () => T): T {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return alt()
    case 'Outcome': return async.value
  }
}

export function toArray<T, P>(async: Async<T, P>): T[] {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return []
    case 'Outcome': return [async.value]
  }
}

export function toMaybe<T, P>(async: Async<T, P>): Maybe<T> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return nothing
    case 'Outcome': return just(async.value)
  }
}

export function toOption<T, P>(async: Async<T, P>): Option<T> {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return none
    case 'Outcome': return some(async.value)
  }
}

export function flatten<T, P>(async: Async<Async<T, P>, P>): Async<T, P> {
  switch (async.kind) {
    case 'NotAsked': return notAsked
    case 'Loading': return loading(async.progress)
    case 'Outcome': return async.value
  }
}

export function cata<A, B, Prog>(async: Async<A, Prog>, f: (a: A) => B, ifNotOutcome: B): B {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return ifNotOutcome
    case 'Outcome': return f(async.value)
  }
}

export function cataLazy<A, B, Prog>(async: Async<A, Prog>, f: (a: A) => B, ifNotOutcome: () => B): B {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return ifNotOutcome()
    case 'Outcome': return f(async.value)
  }
}

export function foldLeft<T, B, Prog>(async: Async<T, Prog>, f: (acc: B, curr: T) => B, b: B): B {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return b
    case 'Outcome': return f(b, async.value)
  }
}

export function all<T, P>(async: Async<T, P>, f: (v: T) => boolean): boolean {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return true
    case 'Outcome': return f(async.value)
  }
}

export function any<T, P>(async: Async<T, P>, f: (v: T) => boolean): boolean {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return false
    case 'Outcome': return f(async.value)
  }
}

export function each<T, P>(async: Async<T, P>, f: (v: T) => void): void {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return
    case 'Outcome': return f(async.value)
  }
}

export function firstOutcome<A, Prog>(...args: Async<A, Prog>[]): Async<A, Prog> {
  for (const a of args) {
    if (isOutcome(a))
      return a
  }
  for (const a of args) {
    return a
  }
  throw 'cannot use `firstOutcome` with empty argument list'
}

export function recover<T, P>(async: Async<T, P>, whenNoOutcome: T) {
  switch (async.kind) {
    case 'NotAsked':
    case 'Loading': return outcome(whenNoOutcome)
    case 'Outcome': return async
  }
}

export type T<V, E> = Async<V, E>
