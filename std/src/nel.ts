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

export function Nel<T>() { return inst as NelTypeClass<T> }

export function isValid<T>(arr: T[]) { return arr.length > 0 }

// export function makeNel<T>(arr: T[]) { return makeWrap<Nel<T>>(isValid)(arr) }

export function ofValue<T>(value: T): Nel<T> { return Nel<T>().unsafeOf([value]) }

export function length<T>(nel: Nel<T>) { return Nel<T>().get(nel).length }

export function map<A, B>(f: (a: A) => B, nel: Nel<A>): Nel<B> {
  return Nel<B>().unsafeOf(Arr.map(Nel<A>().get(nel), f))!
}

export function flatMap<A, B>(f: (a: A) => Nel<B>, nel: Nel<A>): Nel<B> {
  return Nel<B>().unsafeOf(Arr.flatMap(Nel<A>().get(nel), v => Nel<B>().get(f(v))))!
}

export function head<A>(nel: Nel<A>): A { return Nel<A>().get(nel)[0] }
export function tail<A>(nel: Nel<A>): A[] { return Nel<A>().get(nel).slice(1) }

export function equals<T>(predicate: (a: T, b: T) => boolean, a: Nel<T>, b: Nel<T>): boolean {
  return Arr.equals(Nel<T>().get(a), Nel<T>().get(b), predicate)
}

export function filter<T>(predicate: (v: T) => boolean, nel: Nel<T>): T[] {
  return Arr.filter(Nel<T>().get(nel), predicate)
}

export function flatten<T>(nel: Nel<Nel<T>>): Nel<T> {
  return Nel<T>().unsafeOf(Arr.flatten(nel as unknown as T[][]))
}

export function foldLeft<T, B>(f: (acc: B, curr: T) => B, nel: Nel<T>, b: B): B {
  return Arr.foldLeft(Nel<T>().get(nel), f, b)
}

export function all<T>(predicate: (v: T) => boolean, nel: Nel<T>): boolean {
  return Arr.all(Nel<T>().get(nel), predicate)
}

export function any<T>(predicate: (v: T) => boolean, nel: Nel<T>): boolean {
  return Arr.any(Nel<T>().get(nel), predicate)
}

export function each<T>(f: (v: T) => void, nel: Nel<T>): void {
  return Arr.each(Nel<T>().get(nel), f)
}

export function concat<A>(...nels: Nel<A>[]): Nel<A> {
  return Nel<A>().unsafeOf(Arr.concat(...nels as unknown as A[][]))
}

export function sort<A>(compare: (a: A, b: A) => Ordering, arr: Nel<A>): Nel<A> {
  return Nel<A>().unsafeOf(Arr.sort(compare, Nel<A>().get(arr)))
}
