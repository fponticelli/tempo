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
 * Utility functions to manipulate `Array` values.
 */

import { Maybe, nothing } from './maybe'
import { Ordering, Compare } from './ord'
import { Primitive } from './primitive'
import { keys } from './objects'

export function map<A, B>(arr: A[], f: (a: A) => B): B[] {
  const length = arr.length
  const buff = new Array(length)
  for (let i = 0; i < length; i++) {
    buff[i] = f(arr[i])
  }
  return buff
}

export function flatMap<A, B>(arr: A[], f: (a: A) => B[]): B[] {
  const buff = new Array()
  for (const el of arr) {
    buff.push(...f(el))
  }
  return buff
}

export function head<A>(arr: A[]): Maybe<A> {
  return arr.length > 0 ? arr[0] : nothing
}

export function tail<A>(arr: A[]): A[] {
  return arr.slice(1)
}

export function equals<T>(
  a: T[],
  b: T[],
  predicate: (a: T, b: T) => boolean
): boolean {
  if (a.length !== b.length) return false
  else {
    for (let i = 0; i < a.length; i++) {
      if (!predicate(a[i], b[i])) return false
    }
    return true
  }
}

export function makeEquals<T>(predicate: (a: T, b: T) => boolean) {
  return function (a: T[], b: T[]) {
    return equals(a, b, predicate)
  }
}

export function isEmpty<T>(arr: T[]): arr is [] {
  return arr.length === 0
}

export function hasValues<T>(arr: T[]): arr is [T, ...T[]] {
  return arr.length > 0
}

export function filter<T>(arr: T[], predicate: (v: T) => boolean): T[] {
  const buff = [] as T[]
  for (const a of arr) if (predicate(a)) buff.push(a)
  return buff
}

export function flatten<T>(arr: T[][]): T[] {
  return ([] as T[]).concat(...arr)
}

export function foldLeft<T, B>(arr: T[], f: (acc: B, curr: T) => B, b: B): B {
  for (const a of arr) {
    b = f(b, a)
  }
  return b
}

export function all<T>(arr: T[], predicate: (v: T) => boolean): boolean {
  for (const a of arr) {
    if (!predicate(a)) {
      return false
    }
  }
  return true
}

export function any<T>(arr: T[], predicate: (v: T) => boolean): boolean {
  for (const a of arr) {
    if (predicate(a)) {
      return true
    }
  }
  return false
}

export function each<T>(arr: T[], f: (v: T) => void): void {
  for (const a of arr) f(a)
}

export function concat<A>(...arrs: A[][]): A[] {
  return ([] as A[]).concat(...arrs)
}

export function makeCompare<A>(comparef: Compare<A>, shorterFirst = true) {
  return function (a: A[], b: A[]) {
    if (a.length < b.length) {
      return -1 * (shorterFirst ? 1 : -1)
    } else if (a.length > b.length) {
      return 1 * (shorterFirst ? 1 : -1)
    }
    for (let i = 0; i < a.length; i++) {
      const ord = comparef(a[i], b[i])
      if (ord !== 0) return ord
    }
    return 0
  }
}

export function sort<A>(compare: (a: A, b: A) => Ordering, arr: A[]): A[] {
  return arr.slice().sort(compare)
}

export function range<A>(length: number, f: (index: number) => A): A[] {
  const buff = new Array(length) as A[]
  for (let i = 0; i < length; i++) buff[i] = f(i)
  return buff
}

export function numbersRange(length: number, startAt = 0) {
  return range(length, i => startAt + i)
}

export function fill<A>(length: number, value: A): A[] {
  return range(length, () => value)
}

export function distinctPrimitive<T extends Primitive>(values: T[]): T[] {
  return Array.from(new Set(values))
}

export function distinctByPredicate<T>(
  values: T[],
  predicate: (a: T) => string
): T[] {
  const map = {} as Record<string, T>
  values.forEach(v => {
    map[predicate(v)] = v
  })
  return keys(map).map(k => map[k])
}

export function remove<A>(
  arr: A[],
  item: A,
  predicate?: (a: A) => boolean
): boolean {
  let index
  if (predicate !== undefined) {
    index = arr.findIndex(predicate)
  } else {
    index = arr.indexOf(item)
  }
  if (index < 0) {
    return false
  } else {
    arr.splice(index, 1)
    return true
  }
}

export function ofIterableIterator<A>(it: IterableIterator<A>): A[] {
  const buff = [] as A[]
  for (let r = it.next(); !r.done; r = it.next()) {
    buff.push(r.value)
  }
  return buff
}
