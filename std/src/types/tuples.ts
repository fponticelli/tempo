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

export type Tail<T extends any[]> = ((...args: T) => void) extends (
  _: any,
  ...rest: infer Rest
) => void
  ? Rest
  : never

export type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never

export type Last<T extends any[]> = {
  n: Last<Tail<T>>
  one: T extends [infer H] ? H : never
  empty: never
}[T extends [] ? 'empty' : T extends [any] ? 'one' : 'n']

export type TupleToUnion<T extends any[]> = T[number]

export type Prepend<Insert, Tail extends any[]> = ((
  i: Insert,
  ...tail: Tail
) => void) extends (...tuple: infer Tuple) => void
  ? Tuple
  : never

// TYPE TESTS
import { Assert, Equals, AssertNot, NotEquals } from './assert'

type _head = Head<[number, string]>
type _tail = Tail<[number, string, boolean]>
type _head_is_number = Assert<Equals<_head, number>>
type _tail_is_string_boolean = Assert<Equals<_tail, [string, boolean]>>
type _head_is_not_string = AssertNot<Equals<Head<[number, string]>, boolean>>
type _last_is_boolean = Assert<Equals<Last<[number, string, boolean]>, boolean>>
type _last_is_not_string = Assert<NotEquals<Last<[number, string]>, boolean>>
type _tuple_to_union_of_empty_is_never = Assert<Equals<TupleToUnion<[]>, never>>
type _tuple_to_union_of_not_empty_is_list = Assert<
  Equals<TupleToUnion<[string, 1]>, string | 1>
>
type _prepend_works_on_empty_tail = Assert<
  Equals<Prepend<string, []>, [string]>
>
type _prepend_works_on_non_empty_tail = Assert<
  Equals<Prepend<string, [number]>, [string, number]>
>
type _prepend_fails_on_mismatching_types = Assert<
  NotEquals<Prepend<string, [boolean]>, [string, number]>
>

// @ts-ignore
type _TESTS_ =
  | _head_is_number
  | _tail_is_string_boolean
  | _head_is_not_string
  | _last_is_boolean
  | _last_is_not_string
  | _tuple_to_union_of_empty_is_never
  | _tuple_to_union_of_not_empty_is_list
  | _prepend_works_on_empty_tail
  | _prepend_works_on_non_empty_tail
  | _prepend_fails_on_mismatching_types
