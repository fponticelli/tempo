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

import { IndexKey } from './index_value'
import { Tail } from './tuples'

export type ObjectWithField<F extends IndexKey, V> = { [_ in F]: V }

export type ObjectWithPath<Path extends IndexKey[], V> = Path extends []
  ? {}
  : Path extends [infer T]
  ? T extends IndexKey
    ? { [_ in T]: V }
    : never
  : Path extends [infer K, ...any[]]
  ? K extends IndexKey
    ? Tail<Path> extends infer Rest ?
      Rest extends IndexKey[]
      ? { [_ in K]: ObjectWithPath<Rest, V> }
      : never
      : never
    : never
  : never
export type TypeAtPath<Path extends IndexKey[], O> = {
  next: number,
  empty: O,
  done: O[K]
}[
  Path extends [] ? 'empty' : Path extends [infer K] ? 'done' : 'next'
]

export type T0 = TypeAtPath<['a', 'b', 0], {
  a: {
    b: boolean[]
    c: number
  }
  d: string
}

  // Path extends []
  // ? {}
  // : Path extends [infer T]
  // ? T extends IndexKey
  //   ? O extends Record<IndexKey, any>
  //   ? O[T]
  //   : never
  //   : never
  // : Path extends [infer K, ...any[]]
  // ? K extends IndexKey
  //   ? Tail<Path> extends infer Rest ?
  //     Rest extends IndexKey[]
  //     ? O extends Record<IndexKey, any>
  //     ? O[K] extends Record<IndexKey, any>
  //     ? TypeAtPath<Rest, O[K]>
  //     : never
  //     : never
  //     : never
  //     : never
  //   : never
  // : never

// type T0 = ObjectWithPath<[], number>
// type T1 = ObjectWithPath<['a'], number>
// type T2 = ObjectWithPath<['a', 'b'], number>
// type T3 = ObjectWithPath<['a', 'b', 'c'], number>
// type T4 = ObjectWithPath<['a', 'b', 'c', 0], number>
