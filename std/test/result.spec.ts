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
  all, ap, apN, apNWithCombine,
  cata, cataLazy,
  equals, getOrThrow,
  map, failure, success, isFailure, isSuccess, toMaybe, toOption,
  mapNWithCombine, flatMapNWithCombine,
  mapN, flatMap, flatMapN, getOrElse, getOrElseLazy, filter, filterLazy, combine,
  recover, recoverFromError, spread, swap,
  toArray, toBoolean, flatten, firstSuccess, any, each, foldLeft
} from '../src/result'
import { none, some } from '../src/option'

describe('Option', () => {
  it('should define `failure` and `success`', () => {
    expect(isFailure(failure('x'))).toBe(true)
    expect(isFailure(success(1))).toBe(false)
    expect(isSuccess(failure('x'))).toBe(false)
    expect(isSuccess(success(1))).toBe(true)
  })

  it('should extract value', () => {
    expect(toMaybe(success(2))).toBe(2)
    expect(toMaybe(failure('x'))).toBeUndefined()
    expect(getOrElse(success(2), 3)).toBe(2)
    expect(getOrElse(failure('x'), 3)).toBe(3)
    expect(getOrElseLazy(success(2), () => 3)).toBe(2)
    expect(getOrElseLazy(failure('x'), () => 3)).toBe(3)
  })

  it('should ap', () => {
    expect(ap(success(2), success((i: number): number => i * 3))).toEqual(success(6))
    expect(ap(success(2), failure<(i: number) => number, string>('x'))).toEqual(failure('x'))
    expect(ap(failure<number, string>('x'), failure<(i: number) => number, string>('x'))).toEqual(failure('x'))

    expect(apN(
      success(2), success('a'), success(true),
      success((i: number, s: string, b: boolean): number => i * 3 + s.length + (b ? 1 : 0))
    )).toEqual(success(8))
    expect(apN(
      success<number, string>(2), success<string, string>('a'), failure<boolean, string>('x'),
      success((i: number, s: string, b: boolean): number => i * 3 + s.length + (b ? 1 : 0))
    )).toEqual(failure('x'))
    expect(apN(
      success(2), success('a'), success(true),
      failure<(i: number, s: string, b: boolean) => number, string>('x')
    )).toEqual(failure('x'))

    expect(apNWithCombine<number, string, boolean, number, string[]>(
      success(2), success('a'), success(true),
      success((i: number, s: string, b: boolean): number => i * 3 + s.length + (b ? 1 : 0)),
      (a: string[], b: string[]) => a.concat(b)
    )).toEqual(success(8))
    expect(apNWithCombine<number, string, boolean, number, string[]>(
      success(2), success('a'), failure(['x']),
      success((i: number, s: string, b: boolean): number => i * 3 + s.length + (b ? 1 : 0)),
      (a: string[], b: string[]) => a.concat(b)
    )).toEqual(failure(['x']))
    expect(apNWithCombine<number, string, boolean, number, string[]>(
      success(2), failure(['x']), failure(['y']),
      success((i: number, s: string, b: boolean): number => i * 3 + s.length + (b ? 1 : 0)),
      (a: string[], b: string[]) => a.concat(b)
    )).toEqual(failure(['x', 'y']))
    expect(apNWithCombine<number, string, boolean, number, string[]>(
      success(2), success('a'), success(true),
      failure<(i: number, s: string, b: boolean) => number, [string]>(['x']),
      (a: string[], b: string[]) => a.concat(b)
    )).toEqual(failure(['x']))
  })

  it('should map', () => {
    expect(map(
      success<number, string>(2),
      i => i * 3
    )).toEqual(success(6))
    expect(map(
      failure<number, string>('x'),
      (i: number) => i * 3
    )).toEqual(failure('x'))

    expect(mapN(
      success(2), success('a'), success(true),
      (i, s, b) => i * 3 + s.length + (b ? 1 : 0)
    )).toEqual(success(8))
    expect(mapN(
      success(2), success('a'), failure('x'),
      (i, s, b) => i * 3 + s.length + (b ? 1 : 0)
    )).toEqual(failure('x'))

    expect(mapNWithCombine(
      success<number, string[]>(2), success<string, string[]>('a'), success<boolean, string[]>(true),
      (i: number, s: string, b: boolean): number => i * 3 + s.length + (b ? 1 : 0),
      (a: string[], b: string[]) => a.concat(b)
    )).toEqual(success(8))
    expect(mapNWithCombine(
      success<number, string[]>(2), success<string, string[]>('a'), failure<boolean, string[]>(['x']),
      (i: number, s: string, b: boolean): number => i * 3 + s.length + (b ? 1 : 0),
      (a: string[], b: string[]) => a.concat(b)
    )).toEqual(failure(['x']))
    expect(mapNWithCombine(
      success<number, string[]>(2), failure<string, string[]>(['x']), failure<boolean, string[]>(['y']),
      (i: number, s: string, b: boolean): number => i * 3 + s.length + (b ? 1 : 0),
      (a: string[], b: string[]) => a.concat(b)
    )).toEqual(failure(['x', 'y']))
  })

  it('should flatMap', () => {
    expect(flatMap(
      success(2),
      i => success(i * 3)
    )).toEqual(success(6))
    expect(flatMap(
      success(2),
      _ => failure('x')
    )).toEqual(failure('x'))
    expect(flatMap(
      failure<number, string>('x'),
      (i: number) => success(i * 3)
    )).toEqual(failure('x'))
    expect(flatMap(
      failure<number, string>('x'),
      _ => failure('x')
    )).toEqual(failure('x'))

    expect(flatMapN(
      success(2), success('a'), success(true),
      (i, s, b) => success(i * 3 + s.length + (b ? 1 : 0))
    )).toEqual(success(8))
    expect(flatMapN(
      success(2), success('a'), failure('x'),
      (i, s, b) => success(i * 3 + s.length + (b ? 1 : 0))
    )).toEqual(failure('x'))

    expect(flatMapNWithCombine<number, string, boolean, number, string[]>(
      success(2), success('a'), success(true),
      (i: number, s: string, b: boolean) => success(i * 3 + s.length + (b ? 1 : 0)),
      (a: string[], b: string[]) => a.concat(b)
    )).toEqual(success(8))
    expect(flatMapNWithCombine<number, string, boolean, number, string[]>(
      success(2), success('a'), failure(['x']),
      (i: number, s: string, b: boolean) => success(i * 3 + s.length + (b ? 1 : 0)),
      (a: string[], b: string[]) => a.concat(b)
    )).toEqual(failure(['x']))
    expect(flatMapNWithCombine<number, string, boolean, number, string[]>(
      success(2), failure(['x']), failure(['y']),
      (i: number, s: string, b: boolean) => success(i * 3 + s.length + (b ? 1 : 0)),
      (a: string[], b: string[]) => a.concat(b)
    )).toEqual(failure(['x', 'y']))
  })

  it('equals should work', () => {
    expect(equals(
      failure('x'), failure('x'),
      (a, b) => a === b
    )).toBe(true)
    expect(equals(
      success(1), failure('x'),
      (a, b) => a === b
    )).toBe(false)
    expect(equals(
      success(1), success(1),
      (a, b) => a === b
    )).toBe(true)
    expect(equals(
      success(1), success(2),
      (a, b) => a === b
    )).toBe(false)
  })

  it('isFailure should work', () => {
    expect(isFailure(failure('x'))).toBe(true)
    expect(isFailure(success(1))).toBe(false)
  })

  it('isSuccess should work', () => {
    expect(isSuccess(failure('x'))).toBe(false)
    expect(isSuccess(success(1))).toBe(true)
  })

  it('filter should work', () => {
    expect(filter(success(1), (a: number) => a === 1, 'x')).toEqual(success(1))
    expect(filter(success(2), (a: number) => a === 1, 'x')).toEqual(failure('x'))
    expect(filter(failure<number, string>('x'), (a: number) => a === 1, 'x')).toEqual(failure('x'))
  })

  it('filterLazy should work', () => {
    expect(filterLazy(success(1), (a: number) => a === 1, () => 'x')).toEqual(success(1))
    expect(filterLazy(success(2), (a: number) => a === 1, () => 'x')).toEqual(failure('x'))
    expect(filterLazy<number, string>(failure('x'), (a: number) => a === 1, () => 'x')).toEqual(failure('x'))
  })

  it('getOrThrow should work', () => {
    expect(getOrThrow(success(1))).toEqual(1)
    expect(() => getOrThrow(failure('x'))).toThrow('x')

  })
  it('toMaybe should work', () => {
    expect(toMaybe(success(1))).toEqual(1)
    expect(toMaybe(failure('x'))).not.toBeDefined()
  })
  it('getOrElse should work', () => {
    expect(getOrElse(success(1), 2)).toEqual(1)
    expect(getOrElse(failure('x'), 2)).toEqual(2)
  })
  it('getOrElseLazy should work', () => {
    expect(getOrElseLazy(success(1), () => 2)).toEqual(1)
    expect(getOrElseLazy(failure('x'), () => 2)).toEqual(2)
  })
  it('toBoolean should work', () => {
    expect(toBoolean(success(1))).toBe(true)
    expect(toBoolean(failure('x'))).toBe(false)
  })
  it('toArray should work', () => {
    expect(toArray(success(1))).toEqual([1])
    expect(toArray(failure('x'))).toEqual([])
  })
  it('toOption should work', () => {
    expect(toOption(failure('x'))).toEqual(none)
    expect(toOption(success(1))).toEqual(some(1))
  })
  it('flatten should work', () => {
    expect(flatten(success(success(1)))).toEqual(success(1))
    expect(flatten(success(failure('x')))).toEqual(failure('x'))
    expect(flatten(failure('x'))).toEqual(failure('x'))
  })
  it('cata should work', () => {
    expect(cata(success(1), v => v, 2)).toBe(1)
    expect(cata(failure('x'), v => v, 2)).toBe(2)
  })
  it('cataLazy should work', () => {
    expect(cataLazy(success(1), v => v, () => 2)).toBe(1)
    expect(cataLazy(failure('x'), v => v, () => 2)).toBe(2)
  })
  it('foldLeft should work', () => {
    expect(foldLeft(failure<number, string>('x'), (acc: number, curr: number) => acc + curr, 0)).toBe(0)
    expect(foldLeft(success(1), (acc: number, curr: number) => acc + curr, 2)).toBe(3)
  })
  it('all should work', () => {
    expect(all(failure('x'), v => v === 1)).toBe(true)
    expect(all(success(1), v => v === 1)).toBe(true)
  })
  it('any should work', () => {
    expect(any(failure('x'), v => v === 1)).toBe(false)
    expect(any(success(1), v => v === 1)).toBe(true)
  })
  it('recover should work', () => {
    expect(recover(failure('x'), 1)).toEqual(success(1))
    expect(recover(success(1), 2)).toEqual(success(1))
  })
  it('recoverFromError should work', () => {
    expect(recoverFromError(failure('x'), (_) => 1)).toEqual(success(1))
    expect(recoverFromError(success(1), (_) => 2)).toEqual(success(1))
  })
  it('each should work', () => {
    let count = 0
    const f = (a: number): number => count = a
    each(failure<number, string>('x'), f)
    expect(count).toBe(0)
    each(success(2), f)
    expect(count).toBe(2)
  })
  it('firstSuccess should work', () => {
    expect(firstSuccess(failure('x'), success(1))).toEqual(success(1))
    expect(firstSuccess(success(2), success(1), success(3))).toEqual(success(2))
    expect(firstSuccess(success(2), failure('x'), success(3))).toEqual(success(2))
    expect(firstSuccess(failure('x'), failure('x'), success(3))).toEqual(success(3))
    expect(firstSuccess(failure('x'), failure('x'), failure('x'))).toEqual(failure('x'))
  })
  it('combine should work', () => {
    expect(combine(success(1), success(2))).toEqual(success([1, 2]))
    expect(combine(failure('x'), success(2))).toEqual(failure('x'))
    expect(combine(success(2), failure('x'))).toEqual(failure('x'))
    expect(combine(failure('x'), failure('x'))).toEqual(failure('x'))
  })
  it('spread should work', () => {
    expect(spread((a, b) => a + b, success([1, 2]))).toEqual(success(3))
    expect(spread((a: number, b: number) => a + b, failure('x'))).toEqual(failure('x'))
  })
  it('swap should work', () => {
    expect(swap(success(1))).toEqual(failure(1))
    expect(swap(failure(1))).toEqual(success(1))
  })
})
