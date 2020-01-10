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
  map, none, some, isNone, isSome, ofValue, getMaybe,
  mapN, flatMap, flatMapN, getOrElse, getOrElseLazy
} from '../src/option'

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
    expect(getMaybe(some(2))).toBe(2)
    expect(getMaybe(none)).toBeUndefined()
    expect(getOrElse(some(2), 3)).toBe(2)
    expect(getOrElse(none, 3)).toBe(3)
    expect(getOrElseLazy(some(2), () => 3)).toBe(2)
    expect(getOrElseLazy(none, () => 3)).toBe(3)
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
})
