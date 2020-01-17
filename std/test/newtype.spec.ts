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

import { Newtype, makeWrap, unwrap, wrapUnsafe } from '../src/newtype'

import { Assert, NotEquals, Equals } from '../src/types/assert'
import { Maybe } from '../src/maybe'

const sa = Symbol()
type SA = typeof sa
const sb = Symbol()
type SB = typeof sb

type _matching_signature_should_not_be_sufficient = Assert<NotEquals<Newtype<number, SA>, Newtype<number, SB>>>

const intSymbol = Symbol()

type Int = Newtype<number, typeof intSymbol>

const isValid = (v: number): boolean => v === Math.round(v)
const makeInt = makeWrap<Int>(isValid)

type _makeWrap_sets_the_right_type = Assert<Equals<ReturnType<typeof makeInt>, Maybe<Int>>>

describe('Newtype', () => {
  it('wrapUnsafe', () => {
    expect(unwrap(wrapUnsafe<Int>(1))).toEqual(1)
  })
  it('makeWrap', () => {
    expect(makeInt(1.1)).not.toBeDefined()
    expect(makeInt(1)).toBeDefined()
    expect(unwrap<Int>(makeInt(1)!)).toEqual(1)
  })
})

// @ts-ignore
type _TESTS_ =
  | _matching_signature_should_not_be_sufficient
  | _makeWrap_sets_the_right_type
