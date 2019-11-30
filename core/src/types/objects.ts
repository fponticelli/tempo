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

import { IndexType } from './index_type'
import { Tail } from './tuples'

export type ObjectWithField<F extends IndexType, V> = { [_ in F]: V }

export type ObjectWithPath<Path extends IndexType[], V> = Path extends []
  ? {}
  : Path extends [infer T]
  ? T extends IndexType
    ? { [_ in T]: V }
    : never
  : Path extends [infer K, ...any[]]
  ? K extends IndexType
    ? Tail<Path> extends infer Rest
      ? Rest extends IndexType[]
        ? { [_ in K]: ObjectWithPath<Rest, V> }
        : never
      : never
    : never
  : never

// type T0 = ObjectWithPath<[], number>
// type T1 = ObjectWithPath<['a'], number>
// type T2 = ObjectWithPath<['a', 'b'], number>
// type T3 = ObjectWithPath<['a', 'b', 'c'], number>
// type T4 = ObjectWithPath<['a', 'b', 'c', 0], number>

export type TypeAtPath<Path extends IndexType[], O> = {
  next: Path extends [infer K, ...any[]]
    ? K extends IndexType
      ? Tail<Path> extends infer Rest
        ? O extends Record<IndexType, any>
          ? Rest extends IndexType[]
            ? TypeAtPath<Rest, O[K]>
            : never
          : never
        : never
      : never
    : never
  empty: O
  done: O extends Record<IndexType, any>
    ? Path extends [infer K]
      ? K extends IndexType
        ? O[K]
        : never
      : never
    : never
}[Path extends [] ? 'empty' : Path extends [any] ? 'done' : 'next']

// type Nested = { a: { b: boolean[], c: number }, d: string }
// type T0 = TypeAtPath<[], Nested>
// type T1 = TypeAtPath<['a'], Nested>
// type T2 = TypeAtPath<['a', 'b'], Nested>
// type T3 = TypeAtPath<['a', 'b', 0], Nested>
