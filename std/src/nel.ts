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

import { Newtype, makeWrap, unwrap, wrapUnsafe } from './newtype'
import * as Arr from './arrays'
import { Ordering } from './ord'

const nelSymbol = Symbol()

export type Nel<T> = Newtype<ReadonlyArray<T>, typeof nelSymbol>

export const isValid = <T>(arr: ReadonlyArray<T>) => arr.length > 0

export const makeNel = <T>(arr: ReadonlyArray<T>) => makeWrap<Nel<T>>(isValid)(arr)

export const ofValue = <T>(value: T): Nel<T> => wrapUnsafe([value])

export const length = <T>(nel: Nel<T>) => unwrap(nel).length

export const map = <A, B>(f: (a: A) => B, nel: Nel<A>): Nel<B> =>
  wrapUnsafe<Nel<B>>(Arr.map(f, unwrap(nel)))!

export const flatMap = <A, B>(f: (a: A) => Nel<B>, nel: Nel<A>): Nel<B> =>
  wrapUnsafe<Nel<B>>(Arr.flatMap(v => unwrap(f(v)), unwrap(nel)))!

export const head = <A>(nel: Nel<A>): A => unwrap(nel)[0]
export const tail = <A>(nel: Nel<A>): ReadonlyArray<A> => unwrap(nel).slice(1)

export const equals = <T>(predicate: (a: T, b: T) => boolean, a: Nel<T>, b: Nel<T>): boolean =>
  Arr.equals(predicate, unwrap(a), unwrap(b))

export const filter = <T>(predicate: (v: T) => boolean, nel: Nel<T>): ReadonlyArray<T> =>
  Arr.filter(predicate, unwrap(nel))

export const flatten = <T>(nel: Nel<Nel<T>>): Nel<T> =>
  wrapUnsafe<Nel<T>>(Arr.flatten(nel as unknown as T[][]))

export const foldLeft = <T, B>(f: (acc: B, curr: T) => B, nel: Nel<T>, b: B): B =>
  Arr.foldLeft(f, unwrap(nel), b)

export const all = <T>(predicate: (v: T) => boolean, nel: Nel<T>): boolean =>
  Arr.all(predicate, unwrap(nel))

export const any = <T>(predicate: (v: T) => boolean, nel: Nel<T>): boolean =>
  Arr.any(predicate, unwrap(nel))

export const each = <T>(f: (v: T) => void, nel: Nel<T>): void =>
  Arr.each(f, unwrap(nel))

export const concat = <A>(...nels: Nel<A>[]): Nel<A> =>
  wrapUnsafe(Arr.concat(...(nels as unknown as A[][])))

export const sort = <A>(compare: (a: A, b: A) => Ordering, arr: Nel<A>): Nel<A> =>
  wrapUnsafe(Arr.sort(compare, unwrap(arr)))
