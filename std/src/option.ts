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

import { Maybe } from './maybe'
import { map as mapArray } from './arrays'
import { Fun2, Fun3, Fun4, Fun5, Fun6 } from './types'

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
export function mapN<Args extends any[], Ret>(f: (...functions: Args) => Ret, ...args: Option<any>[]): Option<Ret> {
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
export function flatMapN<Args extends any[], Ret>(f: (...functions: Args) => Option<Ret>, ...args: Option<any>[]): Option<Ret> {
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

export const getMaybe = <T>(option: Option<T>): Maybe<T> => {
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

// export const getOrThrow
// export const apply
// export const recover
// export const flatten/join/collapse
// export const cata<A, B>(option: Option<A>, ifNone: B, f: A -> B): B
// export const cataLazy<A, B>(option: Option<A>, ifNone: () => B, f: A -> B): B
// foldLeft<T, B>(option: Option<T>, b: B, f: B -> T -> B): B
// foldLeftLazy<T, B>(option: Option<T>, b: B, f: B -> T -> B): B
// Lazy<T> ... LazyOrNot<T>
// public static function foldMap<A, B>(option: Option<A>, f: A -> B, m: Monoid<B>): B
//   return foldLeft(map(option, f), m.zero, m.append);
// filter
// toArray
// toBool
// toResult/toSuccess
// toResultLazy/toSuccessLazy
// toFailure
// toFailureLazy
// orElse<T>(option : Option<T>, alt : Option<T>) : Option<T>
// orElseLazy<T>(option : Option<T>, alt : () => Option<T>) : Option<T>
// public static function all<T>(option: Option<T>, f: T -> Bool): Bool
// return switch option {
//   case None: true;
//   case Some(v): f(v);
// };
// each

// public static function any<T>(option: Option<T>, f: T -> Bool): Bool
// return switch option {
//   case None: false;
//   case Some(v): f(v);
// };
// inline static public function alt2<A>(a : Option<A>, b : Option<A>) : Option<A> {
//   return switch [a, b] {
//     case [None, r] : r;
//     case [l, _] : l;
//   };
// }
// inline static public function combine<A, B>(a : Option<A>, b : Option<B>) : Option<Tuple2<A, B>>
//   return ap2(Tuple2.of, a, b);
// inline static public function spread<A, B, C>(v : Option<Tuple2<A, B>>, f : A -> B -> C) : Option<C>
//   return map(v, function(t) {
//     return f(t._0, t._1);
//   });
// Nel

export type T<V> = Option<V>
