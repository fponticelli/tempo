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

import {
  all, ap, apN,
  cata, cataLazy,
  equals, getOrThrow,
  map, none, some, isNone, isSome, ofValue, toMaybe,
  mapN, flatMap, flatMapN, getOrElse, getOrElseLazy, filter, combine,
  spread,
  toArray, toBoolean, flatten, firstSome, any, each, foldLeft, toResult,
  toResultLazy
} from '../src/option'
import { success, failure } from '../src/result'

describe('Option', () => {
  it('should define `none` and `some`', () => {
    expect(isNone(none)).toBe(true)
    expect(isNone(some(1))).toBe(false)
    expect(isSome(none)).toBe(false)
    expect(isSome(some(1))).toBe(true)
    expect(isSome(ofValue(1))).toBe(true)
    expect(isSome(ofValue(null))).toBe(false)
    expect(isSome(ofValue(undefined))).toBe(false)
  })

  it('should extract value', () => {
    expect(toMaybe(some(2))).toBe(2)
    expect(toMaybe(none)).toBeUndefined()
    expect(getOrElse(some(2), 3)).toBe(2)
    expect(getOrElse(none, 3)).toBe(3)
    expect(getOrElseLazy(some(2), () => 3)).toBe(2)
    expect(getOrElseLazy(none, () => 3)).toBe(3)
  })

  it('should ap', () => {
    expect(ap(some((i: number): number => i * 3), some(2))).toEqual(some(6))
    expect(ap(none, some(2))).toEqual(none)
    expect(ap(none, none)).toEqual(none)

    expect(apN(some((i: number, s: string, b: boolean): number => i * 3 + s.length + (b ? 1 : 0)), some(2), some('a'), some(true))).toEqual(some(8))
    expect(apN(some((i: number, s: string, b: boolean): number => i * 3 + s.length + (b ? 1 : 0)), some(2), some('a'), none)).toEqual(none)
    expect(apN(none, some(2), some('a'), some(true))).toEqual(none)
  })

  it('should map', () => {
    expect(map(i => i * 3, some(2))).toEqual(some(6))
    expect(map(i => i * 3, none)).toEqual(none)

    expect(mapN((i, s, b) => i * 3 + s.length + (b ? 1 : 0), some(2), some('a'), some(true))).toEqual(some(8))
    expect(mapN((i, s, b) => i * 3 + s.length + (b ? 1 : 0), some(2), some('a'), none)).toEqual(none)
  })

  it('should flatMap', () => {
    expect(flatMap(i => some(i * 3), some(2))).toEqual(some(6))
    expect(flatMap(_ => none, some(2))).toEqual(none)
    expect(flatMap(i => some(i * 3), none)).toEqual(none)
    expect(flatMap(_ => none, none)).toEqual(none)

    expect(flatMapN((i, s, b) => some(i * 3 + s.length + (b ? 1 : 0)), some(2), some('a'), some(true))).toEqual(some(8))
    expect(flatMapN((i, s, b) => some(i * 3 + s.length + (b ? 1 : 0)), some(2), some('a'), none)).toEqual(none)
  })

  it('equals should work', () => {
    expect(equals((a, b) => a === b, none, none)).toBe(true)
    expect(equals((a, b) => a === b, some(1), none)).toBe(false)
    expect(equals((a, b) => a === b, some(1), some(1))).toBe(true)
    expect(equals((a, b) => a === b, some(1), some(2))).toBe(false)
  })

  it('isNone should work', () => {
    expect(isNone(none)).toBe(true)
    expect(isNone(some(1))).toBe(false)
  })

  it('isSome should work', () => {
    expect(isSome(none)).toBe(false)
    expect(isSome(some(1))).toBe(true)
  })

  it('filter should work', () => {
    expect(filter(a => a === 1, some(1))).toEqual(some(1))
    expect(filter(a => a === 1, some(2))).toEqual(none)
    expect(filter(a => a === 1, none)).toEqual(none)
  })

  it('getOrThrow should work', () => {
    expect(getOrThrow(some(1), 'nooo')).toEqual(1)
    expect(() => getOrThrow(none, 'nooo')).toThrow('nooo')

  })
  it('toMaybe should work', () => {
    expect(toMaybe(some(1))).toEqual(1)
    expect(toMaybe(none)).not.toBeDefined()
  })
  it('getOrElse should work', () => {
    expect(getOrElse(some(1), 2)).toEqual(1)
    expect(getOrElse(none, 2)).toEqual(2)
  })
  it('getOrElseLazy should work', () => {
    expect(getOrElseLazy(some(1), () => 2)).toEqual(1)
    expect(getOrElseLazy(none, () => 2)).toEqual(2)
  })
  it('toBoolean should work', () => {
    expect(toBoolean(some(1))).toBe(true)
    expect(toBoolean(none)).toBe(false)
  })
  it('toArray should work', () => {
    expect(toArray(some(1))).toEqual([1])
    expect(toArray(none)).toEqual([])
  })
  it('toResult should work', () => {
    expect(toResult(none, 'error')).toEqual(failure('error'))
    expect(toResult(some(1), 'error')).toEqual(success(1))
  })
  it('toResultLazy should work', () => {
    expect(toResultLazy(none, () => 'error')).toEqual(failure('error'))
    expect(toResultLazy(some(1), () => 'error')).toEqual(success(1))
  })
  it('flatten should work', () => {
    expect(flatten(some(some(1)))).toEqual(some(1))
    expect(flatten(some(none))).toEqual(none)
    expect(flatten(none)).toEqual(none)
  })
  it('cata should work', () => {
    expect(cata(v => v, some(1), 2)).toBe(1)
    expect(cata(v => v, none, 2)).toBe(2)
  })
  it('cataLazy should work', () => {
    expect(cataLazy(v => v, some(1), () => 2)).toBe(1)
    expect(cataLazy(v => v, none, () => 2)).toBe(2)
  })
  it('foldLeft should work', () => {
    expect(foldLeft((acc, curr) => acc + curr, none, 0)).toBe(0)
    expect(foldLeft((acc, curr) => acc + curr, some(1), 2)).toBe(3)
  })
  it('all should work', () => {
    expect(all(v => v === 1, none)).toBe(true)
    expect(all(v => v === 1, some(1))).toBe(true)
  })
  it('any should work', () => {
    expect(any(v => v === 1, none)).toBe(false)
    expect(any(v => v === 1, some(1))).toBe(true)
  })
  it('each should work', () => {
    let count = 0
    const f = (a: number): number => count = a
    each(f, none)
    expect(count).toBe(0)
    each(f, some(2))
    expect(count).toBe(2)
  })
  it('firstSome should work', () => {
    expect(firstSome(none, some(1))).toEqual(some(1))
    expect(firstSome(some(2), some(1), some(3))).toEqual(some(2))
    expect(firstSome(some(2), none, some(3))).toEqual(some(2))
    expect(firstSome(none, none, some(3))).toEqual(some(3))
    expect(firstSome(none, none, none)).toEqual(none)
  })
  it('combine should work', () => {
    expect(combine(some(1), some(2))).toEqual(some([1, 2]))
    expect(combine(none, some(2))).toEqual(none)
    expect(combine(some(2), none)).toEqual(none)
    expect(combine(none, none)).toEqual(none)
  })
  it('spread should work', () => {
    expect(spread((a, b) => a + b, some([1, 2]))).toEqual(some(3))
    expect(spread((a: number, b: number) => a + b, none)).toEqual(none)
  })
})
