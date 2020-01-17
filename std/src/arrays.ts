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

import { Maybe, nothing } from './maybe'
import { Ordering } from './ord'

export const map = <A, B>(f: (a: A) => B, arr: A[]): B[] => {
  const length = arr.length
  const buff = new Array(length)
  for (let i = 0; i < length; i++) {
    buff[i] = f(arr[i])
  }
  return buff
}

export const flatMap = <A, B>(f: (a: A) => B[], arr: A[]): B[] => {
  const buff = new Array()
  for (const el of arr) {
    buff.push(...f(el))
  }
  return buff
}

export const head = <A>(arr: A[]): Maybe<A> => arr.length > 0 ? arr[0] : nothing
export const tail = <A>(arr: A[]): A[] => arr.slice(1)

export const equals = <T>(predicate: (a: T, b: T) => boolean, a: T[], b: T[]): boolean => {
  if (a.length !== b.length)
    return false
  else {
    for (let i = 0; i < a.length; i++) {
      if (!predicate(a[i], b[i])) return false
    }
    return true
  }
}

export const isEmpty = <T>(arr: T[]): arr is [] => arr.length === 0
export const hasValues = <T>(arr: T[]): arr is [T, ...T[]] => arr.length > 0

export const filter = <T>(predicate: (v: T) => boolean, arr: T[]): T[] => {
  const buff = [] as T[]
  for (const a of arr)
    if (predicate(a))
      buff.push(a)
  return buff
}

export const flatten = <T>(arr: T[][]): T[] => {
  return ([] as T[]).concat(...arr)
}

export const foldLeft = <T, B>(f: (acc: B, curr: T) => B, arr: T[], b: B): B => {
  for (const a of arr) {
    b = f(b, a)
  }
  return b
}

export const all = <T>(predicate: (v: T) => boolean, arr: T[]): boolean => {
  for (const a of arr) {
    if (!predicate(a)) {
      return false
    }
  }
  return true
}

export const any = <T>(predicate: (v: T) => boolean, arr: T[]): boolean => {
  for (const a of arr) {
    if (predicate(a)) {
      return true
    }
  }
  return false
}

export const each = <T>(f: (v: T) => void, arr: T[]): void => {
  for (const a of arr)
    f(a)
}

export const concat = <A>(...arrs: A[][]): A[] =>
  ([] as A[]).concat(...arrs)

export const sort = <A>(compare: (a: A, b: A) => Ordering, arr: A[]): A[] =>
  arr.slice().sort(compare)
