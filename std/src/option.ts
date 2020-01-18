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
import { Fun2, Fun3, Fun4, Fun5, Fun6 } from './types'
import { Result, failure, success } from './result'

export type Some<T> = { kind: 'some', value: T }
export type None = { kind: 'none' }

export type Option<T> =
  | Some<T>
  | None

export const some = <T>(value: T): Option<T> => ({ kind: 'some', value })
export const none = { kind: 'none' } as Option<never>
export const ofValue = <T>(value: T | undefined | null): Option<T> => {
  if (value == null)
    return none
  else
    return some(value)
}

export const ap = <A, B>(optf: Option<(a: A) => B>, opt: Option<A>): Option<B> =>
  flatten(map(f => map(v => f(v), opt), optf))

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
  if (f.kind === 'none')
    return none
  for (const a of args)
    if (a.kind === 'none') return none
  const results = mapArray(a => a.value, args as { kind: 'some', value: any }[])
  return some(f.value(...results as Args))
}

export const map = <A, B>(f: (a: A) => B, opt: Option<A>): Option<B> => {
  switch (opt.kind) {
    case 'none': return opt
    case 'some': return some(f(opt.value))
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
    if (a.kind === 'none') return none
  const results = mapArray(a => a.value, args as { kind: 'some', value: any }[])
  return some(f(...results as Args))
}

export const flatMap = <A, B>(f: (a: A) => Option<B>, opt: Option<A>): Option<B> => {
  switch (opt.kind) {
    case 'none': return opt
    case 'some': return f(opt.value)
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
    if (a.kind === 'none') return none
  const results = mapArray(a => a.value, args as { kind: 'some', value: any }[])
  return f(...results as Args)
}

export const equals = <T>(predicate: (a: T, b: T) => boolean, a: Option<T>, b: Option<T>): boolean => {
  if (a.kind !== b.kind)
    return false
  else if (a.kind === 'none' && b.kind === 'none')
    return true
  else
    return predicate((a as { kind: 'some', value: T }).value, (b as { kind: 'some', value: T }).value)
}

export const isNone = <T>(option: Option<T>): option is None => option.kind === 'none'
export const isSome = <T>(option: Option<T>): option is Some<T> => option.kind === 'some'

export const filter = <T>(predicate: (v: T) => boolean, option: Option<T>): Option<T> => {
  switch (option.kind) {
    case 'none': return none
    case 'some':
      if (predicate(option.value)) {
        return option
      } else {
        return none
      }
  }
}

export const getOrThrow = <T, E>(option: Option<T>, exception: E): Maybe<T> => {
  switch (option.kind) {
    case 'none': throw exception
    case 'some': return option.value
  }
}

export const toMaybe = <T>(option: Option<T>): Maybe<T> => {
  switch (option.kind) {
    case 'none': return undefined
    case 'some': return option.value
  }
}

export const getOrElse = <T>(option: Option<T>, alt: T): T => {
  switch (option.kind) {
    case 'none': return alt
    case 'some': return option.value
  }
}

export const getOrElseLazy = <T>(option: Option<T>, alt: () => T): T => {
  switch (option.kind) {
    case 'none': return alt()
    case 'some': return option.value
  }
}

export const toBoolean = (option: Option<unknown>) => {
  switch (option.kind) {
    case 'none': return false
    case 'some': return true
  }
}

export const toArray = <T>(option: Option<T>): T[] => {
  switch (option.kind) {
    case 'none': return []
    case 'some': return [option.value]
  }
}

export const toResult = <T, E>(option: Option<T>, error: E): Result<T, E> => {
  switch (option.kind) {
    case 'none': return failure(error)
    case 'some': return success(option.value)
  }
}

export const toResultLazy = <T, E>(option: Option<T>, errorf: () => E): Result<T, E> => {
  switch (option.kind) {
    case 'none': return failure(errorf())
    case 'some': return success(option.value)
  }
}

export const flatten = <T>(option: Option<Option<T>>): Option<T> => {
  switch (option.kind) {
    case 'none': return none
    case 'some': return option.value
  }
}

export const cata = <A, B>(f: (a: A) => B, option: Option<A>, ifNone: B): B => {
  switch (option.kind) {
    case 'none': return ifNone
    case 'some': return f(option.value)
  }
}

export const cataLazy = <A, B>(f: (a: A) => B, option: Option<A>, ifNone: () => B): B => {
  switch (option.kind) {
    case 'none': return ifNone()
    case 'some': return f(option.value)
  }
}

export const foldLeft = <T, B>(f: (acc: B, curr: T) => B, option: Option<T>, b: B): B => {
  switch (option.kind) {
    case 'none': return b
    case 'some': return f(b, option.value)
  }
}

export const all = <T>(f: (v: T) => boolean, option: Option<T>): boolean => {
  switch (option.kind) {
    case 'none': return true
    case 'some': return f(option.value)
  }
}

export const any = <T>(f: (v: T) => boolean, option: Option<T>): boolean => {
  switch (option.kind) {
    case 'none': return false
    case 'some': return f(option.value)
  }
}

export const each = <T>(f: (v: T) => void, option: Option<T>): void => {
  switch (option.kind) {
    case 'none': return
    case 'some': return f(option.value)
  }
}

export const firstSome = <A>(...args: Option<A>[]): Option<A> => {
  for (const a of args) {
    if (isSome(a))
      return a
  }
  return none
}

export const recover = <T>(result: Option<T>, whenFailure: T) => {
  switch (result.kind) {
    case 'none': return some(whenFailure)
    case 'some': return result
  }
}

export const recoverLazy = <T>(result: Option<T>, whenFailuref: () => T) => {
  switch (result.kind) {
    case 'none': return some(whenFailuref())
    case 'some': return result
  }
}

export const combine = <A, B>(a: Option<A>, b: Option<B>): Option<[A, B]> =>
  mapN((a, b) => [a, b], a, b)

export const spread = <A, B, C>(f: (a: A, b: B) => C, v: Option<[A, B]>): Option<C> =>
  map((t) => f(t[0], t[1]), v)

export type T<V> = Option<V>
