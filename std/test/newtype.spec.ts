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

import { Newtype, NewtypeClass } from '../src/newtype'

import { Assert, NotEquals, Equals, Same } from '../src/types/assert'
import { toMaybe, Option, none, some } from '../src/option'

const sa = Symbol()
type SA = typeof sa
const sb = Symbol()
type SB = typeof sb

type _matching_signature_should_not_be_sufficient = Assert<NotEquals<Newtype<number, SA>, Newtype<number, SB>>>

type Int = Newtype<number, { readonly Int: unique symbol }>
const Int = new class extends NewtypeClass<Int> {
  isValid(v: number): boolean { return v === Math.round(v) }
}

type _ = ReturnType<typeof Int['of']>

type _makeWrap_sets_the_right_type = Assert<Same<_, Option<Int>>>

describe('Newtype', () => {
  it('wrapUnsafe', () => {
    expect(Int.get(Int.unsafeOf(1))).toEqual(1)
  })
  it('makeWrap', () => {
    expect(Int.of(1.1)).toEqual(none)
    expect(Int.of(1)).toEqual(some(1))
    expect(Int.get(Int.maybeOf(1)!)).toEqual(1)
  })
})

// @ts-ignore
type _TESTS_ =
  | _matching_signature_should_not_be_sufficient
  | _makeWrap_sets_the_right_type
