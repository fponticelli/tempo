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

import { Maybe } from './maybe'
import { map as mapArray } from './arrays'
import { Fun2, Fun3, Fun4, Fun5, Fun6 } from './types/functions'
import { Result, failure, success } from './result'

export type Some<T> = { kind: 'Some', value: T }
export type None = { kind: 'None' }

export type Option<T> =
  | Some<T>
  | None

export function some<T>(value: T): Option<T> {
  return { kind: 'Some', value }
}
export const none = { kind: 'None' } as Option<never>
export function ofValue<T>(value: T | undefined | null): Option<T> {
  if (value == null)
    return none
  else
    return some(value)
}

export function ap<A, B>(optf: Option<(a: A) => B>, opt: Option<A>): Option<B> {
  return flatten(map(f => map(v => f(v), opt), optf))
}

export function apN<A, B, C>(f: Option<Fun2<A, B, C>>, a: Option<A>, b: Option<B>): Option<C>
export function apN<A, B, C, D>(f: Option<Fun3<A, B, C, D>>, a: Option<A>, b: Option<B>, c: Option<C>): Option<D>
export function apN<A, B, C, D, E>(
  f: Option<Fun4<A, B, C, D, E>>,
  a: Option<A>, b: Option<B>, c: Option<C>, d: Option<D>): Option<E>
export function apN<A, B, C, D, E, F>(
  f: Option<Fun5<A, B, C, D, E, F>>,
  a: Option<A>, b: Option<B>, c: Option<C>, d: Option<D>, e: Option<E>): Option<F>
export function apN<A, B, C, D, E, F, G>(
  f: Option<Fun6<A, B, C, D, E, F, G>>,
  a: Option<A>, b: Option<B>, c: Option<C>, d: Option<D>, e: Option<E>, g: Option<F>): Option<G>
export function apN<Args extends any[], Ret>(f: Option<(...args: Args) => Ret>, ...args: Option<any>[]): Option<Ret> {
  if (f.kind === 'None')
    return none
  for (const a of args)
    if (a.kind === 'None') return none
  const results = mapArray(args as { kind: 'Some', value: any }[], a => a.value)
  return some(f.value(...results as Args))
}

export function map<A, B>(f: (a: A) => B, opt: Option<A>): Option<B> {
  switch (opt.kind) {
    case 'None': return opt
    case 'Some': return some(f(opt.value))
  }
}

export function mapN<A, B, C>(f: Fun2<A, B, C>, a: Option<A>, b: Option<B>): Option<C>
export function mapN<A, B, C, D>(f: Fun3<A, B, C, D>, a: Option<A>, b: Option<B>, c: Option<C>): Option<D>
export function mapN<A, B, C, D, E>(
  f: Fun4<A, B, C, D, E>,
  a: Option<A>, b: Option<B>, c: Option<C>, d: Option<D>): Option<E>
export function mapN<A, B, C, D, E, F>(
  f: Fun5<A, B, C, D, E, F>,
  a: Option<A>, b: Option<B>, c: Option<C>, d: Option<D>, e: Option<E>): Option<F>
export function mapN<A, B, C, D, E, F, G>(
  f: Fun6<A, B, C, D, E, F, G>,
  a: Option<A>, b: Option<B>, c: Option<C>, d: Option<D>, e: Option<E>, g: Option<F>): Option<G>
export function mapN<Args extends any[], Ret>(f: (...args: Args) => Ret, ...args: Option<any>[]): Option<Ret> {
  for (const a of args)
    if (a.kind === 'None') return none
  const results = mapArray(args as { kind: 'Some', value: any }[], a => a.value)
  return some(f(...results as Args))
}

export function flatMap<A, B>(f: (a: A) => Option<B>, opt: Option<A>): Option<B> {
  switch (opt.kind) {
    case 'None': return opt
    case 'Some': return f(opt.value)
  }
}

export function flatMapN<A, B, C>(f: Fun2<A, B, Option<C>>, a: Option<A>, b: Option<B>): Option<C>
export function flatMapN<A, B, C, D>(f: Fun3<A, B, C, Option<D>>, a: Option<A>, b: Option<B>, c: Option<C>): Option<D>
export function flatMapN<A, B, C, D, E>(f: Fun4<A, B, C, D, Option<E>>, a: Option<A>, b: Option<B>, c: Option<C>, d: Option<D>): Option<E>
export function flatMapN<A, B, C, D, E, F>(
  f: Fun5<A, B, C, D, E, Option<F>>,
  a: Option<A>, b: Option<B>, c: Option<C>, d: Option<D>, e: Option<E>): Option<F>
export function flatMapN<A, B, C, D, E, F, G>(
  f: Fun6<A, B, C, D, E, F, Option<G>>,
  a: Option<A>, b: Option<B>, c: Option<C>, d: Option<D>, e: Option<E>, g: Option<F>): Option<G>
export function flatMapN<Args extends any[], Ret>(f: (...args: Args) => Option<Ret>, ...args: Option<any>[]): Option<Ret> {
  for (const a of args)
    if (a.kind === 'None') return none
  const results = mapArray(args as { kind: 'Some', value: any }[], a => a.value)
  return f(...results as Args)
}

export function equals<T>(predicate: (a: T, b: T) => boolean, a: Option<T>, b: Option<T>): boolean {
  if (a.kind !== b.kind)
    return false
  else if (a.kind === 'None' && b.kind === 'None')
    return true
  else
    return predicate((a as { kind: 'Some', value: T }).value, (b as { kind: 'Some', value: T }).value)
}

export function isNone<T>(option: Option<T>): option is None {
  return option.kind === 'None'
}
export function isSome<T>(option: Option<T>): option is Some<T> {
  return option.kind === 'Some'
}

export function filter<T>(predicate: (v: T) => boolean, option: Option<T>): Option<T> {
  switch (option.kind) {
    case 'None': return none
    case 'Some':
      if (predicate(option.value)) {
        return option
      } else {
        return none
      }
  }
}

export function getOrThrow<T, E>(option: Option<T>, exception: E): T {
  switch (option.kind) {
    case 'None': throw exception
    case 'Some': return option.value
  }
}

export function toMaybe<T>(option: Option<T>): Maybe<T> {
  switch (option.kind) {
    case 'None': return undefined
    case 'Some': return option.value
  }
}

export function getUnsafe<T>(option: Option<T>): T {
  return getOrThrow(option, 'unable to extract value from None')
}

export function getOrElse<T>(option: Option<T>, alt: T): T {
  switch (option.kind) {
    case 'None': return alt
    case 'Some': return option.value
  }
}

export function getOrElseLazy<T>(option: Option<T>, alt: () => T): T {
  switch (option.kind) {
    case 'None': return alt()
    case 'Some': return option.value
  }
}

export function toBoolean(option: Option<unknown>) {
  switch (option.kind) {
    case 'None': return false
    case 'Some': return true
  }
}

export function toArray<T>(option: Option<T>): T[] {
  switch (option.kind) {
    case 'None': return []
    case 'Some': return [option.value]
  }
}

export function toResult<T, E>(option: Option<T>, error: E): Result<T, E> {
  switch (option.kind) {
    case 'None': return failure(error)
    case 'Some': return success(option.value)
  }
}

export function toResultLazy<T, E>(option: Option<T>, errorf: () => E): Result<T, E> {
  switch (option.kind) {
    case 'None': return failure(errorf())
    case 'Some': return success(option.value)
  }
}

export function flatten<T>(option: Option<Option<T>>): Option<T> {
  switch (option.kind) {
    case 'None': return none
    case 'Some': return option.value
  }
}

export function cata<A, B>(f: (a: A) => B, option: Option<A>, ifNone: B): B {
  switch (option.kind) {
    case 'None': return ifNone
    case 'Some': return f(option.value)
  }
}

export function cataLazy<A, B>(f: (a: A) => B, option: Option<A>, ifNone: () => B): B {
  switch (option.kind) {
    case 'None': return ifNone()
    case 'Some': return f(option.value)
  }
}

export function foldLeft<T, B>(f: (acc: B, curr: T) => B, option: Option<T>, b: B): B {
  switch (option.kind) {
    case 'None': return b
    case 'Some': return f(b, option.value)
  }
}

export function all<T>(f: (v: T) => boolean, option: Option<T>): boolean {
  switch (option.kind) {
    case 'None': return true
    case 'Some': return f(option.value)
  }
}

export function any<T>(f: (v: T) => boolean, option: Option<T>): boolean {
  switch (option.kind) {
    case 'None': return false
    case 'Some': return f(option.value)
  }
}

export function each<T>(f: (v: T) => void, option: Option<T>): void {
  switch (option.kind) {
    case 'None': return
    case 'Some': return f(option.value)
  }
}

export function firstSome<A>(...args: Option<A>[]): Option<A> {
  for (const a of args) {
    if (isSome(a))
      return a
  }
  return none
}

export function recover<T>(result: Option<T>, whenFailure: T) {
  switch (result.kind) {
    case 'None': return some(whenFailure)
    case 'Some': return result
  }
}

export function recoverLazy<T>(result: Option<T>, whenFailuref: () => T) {
  switch (result.kind) {
    case 'None': return some(whenFailuref())
    case 'Some': return result
  }
}

export function combine<A, B>(a: Option<A>, b: Option<B>): Option<[A, B]> {
  return mapN((a, b) => [a, b], a, b)
}

export function spread<A, B, C>(f: (a: A, b: B) => C, v: Option<[A, B]>): Option<C> {
  return map((t) => f(t[0], t[1]), v)
}

export type T<V> = Option<V>
