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
import { ObjectWithField } from './objects'
import { Tail } from './tuples'

export type Differentiate<
  Field extends IndexType,
  State extends ObjectWithField<Field, any>,
  ExpectedType extends State[Field]
> = State extends ObjectWithField<Field, ExpectedType> ? State : never

export type DifferentiateByKind<State extends { kind: any }, K extends State['kind']> = Differentiate<'kind', State, K>

export type DifferentiateAt<Path extends IndexType[], State, ExpectedType> = Path extends []
  ? State
  : Path extends [infer T]
  ? T extends keyof State
    ? ExpectedType extends State[T]
      ? Differentiate<T, State, ExpectedType>
      : never
    : never
  : Path extends [infer K, ...any[]]
  ? K extends keyof State
    ? Tail<Path> extends infer Rest
      ? Rest extends IndexType[]
        ? State & { [k in K]: DifferentiateAt<Rest, State[k], ExpectedType> }
        : never
      : never
    : never
  : never

// export type A = { kind: 'A'; a: string }
// export type B = { kind: 'B'; b: string }
// export type AB = A | B
// export type C = { ab: AB; c: string }
// export type T1 = DifferentiateAt<['ab', 'kind'], C, 'A'>
// export const t1: T1 = { ab: { kind: 'A', a: 'hello' }, c: '' }
// console.log(t1.ab.a)
