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

/**
 * `nel` stands for 'non-empty list'. This module provides functions
 * to manipulate and generate `Nel<T>` values.
 */

import { Newtype, NewtypeClass } from './newtype'
import * as Arr from './arrays'
import { Ordering } from './ord'

export type Nel<T> = Newtype<T[], { readonly Nel: unique symbol }>

class NelTypeClass<T> extends NewtypeClass<Nel<T>> {
  isValid(arr: T[]) { return arr.length > 0 }
  ofValue(value: T): Nel<T> { return this.unsafeOf([value]) }
}

const inst = new NelTypeClass<unknown>()

export const Nel = <T>() => inst as NelTypeClass<T>

export const isValid = <T>(arr: T[]) => arr.length > 0

// export const makeNel = <T>(arr: T[]) => makeWrap<Nel<T>>(isValid)(arr)

export const ofValue = <T>(value: T): Nel<T> => Nel<T>().unsafeOf([value])

export const length = <T>(nel: Nel<T>) => Nel<T>().get(nel).length

export const map = <A, B>(f: (a: A) => B, nel: Nel<A>): Nel<B> =>
  Nel<B>().unsafeOf(Arr.map(f, Nel<A>().get(nel)))!

export const flatMap = <A, B>(f: (a: A) => Nel<B>, nel: Nel<A>): Nel<B> =>
  Nel<B>().unsafeOf(Arr.flatMap(v => Nel<B>().get(f(v)), Nel<A>().get(nel)))!

export const head = <A>(nel: Nel<A>): A => Nel<A>().get(nel)[0]
export const tail = <A>(nel: Nel<A>): A[] => Nel<A>().get(nel).slice(1)

export const equals = <T>(predicate: (a: T, b: T) => boolean, a: Nel<T>, b: Nel<T>): boolean =>
  Arr.equals(predicate, Nel<T>().get(a), Nel<T>().get(b))

export const filter = <T>(predicate: (v: T) => boolean, nel: Nel<T>): T[] =>
  Arr.filter(predicate, Nel<T>().get(nel))

export const flatten = <T>(nel: Nel<Nel<T>>): Nel<T> =>
  Nel<T>().unsafeOf(Arr.flatten(nel as unknown as T[][]))

export const foldLeft = <T, B>(f: (acc: B, curr: T) => B, nel: Nel<T>, b: B): B =>
  Arr.foldLeft(f, Nel<T>().get(nel), b)

export const all = <T>(predicate: (v: T) => boolean, nel: Nel<T>): boolean =>
  Arr.all(predicate, Nel<T>().get(nel))

export const any = <T>(predicate: (v: T) => boolean, nel: Nel<T>): boolean =>
  Arr.any(predicate, Nel<T>().get(nel))

export const each = <T>(f: (v: T) => void, nel: Nel<T>): void =>
  Arr.each(f, Nel<T>().get(nel))

export const concat = <A>(...nels: Nel<A>[]): Nel<A> =>
  Nel<A>().unsafeOf(Arr.concat(...nels as unknown as A[][]))

export const sort = <A>(compare: (a: A, b: A) => Ordering, arr: Nel<A>): Nel<A> =>
  Nel<A>().unsafeOf(Arr.sort(compare, Nel<A>().get(arr)))
