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

import { Differentiate, DifferentiateDeep } from '../types/differentiate'
import { IndexKey } from '../types/index_key'
import { ObjectWithField, ObjectWithPath, TypeAtPath } from '../types/objects'

export const match = <F extends IndexKey, T extends ObjectWithField<F, any>, B>(
  field: F,
  matcher: { [k in T[F]]: (arg: Differentiate<F, T, k>) => B },
  input: T
): B => {
  const k = input[field]
  return matcher[k](input as any)
}

export const deepMatch = <
  Path extends IndexKey[],
  T extends ObjectWithPath<Path, any>,
  B
>(
  path: Path,
  matcher: { [k in TypeAtPath<Path, T>]: (arg: DifferentiateDeep<Path, T, k>) => B },
  input: T
): B => {
  const k = path.reduce((res: any, key) => res[key], input) as TypeAtPath<Path, T>
  return matcher[k](input as any)
}

export const createMatch = <F extends IndexKey>(field: F) => <T extends ObjectWithField<F, any>, B>(
  matcher: { [k in T[F]]: (arg: Differentiate<F, T, k>) => B }
) => (input: T): B => {
  const k = input[field]
  return matcher[k](input as any)
}

export const createDeepMatch = <Path extends IndexKey[]>(...path: Path) => <T extends ObjectWithPath<Path, any>, B>(
  matcher: { [k in TypeAtPath<Path, T>]: (arg: DifferentiateDeep<Path, T, k>) => B }
) => (input: T): B => {
  const k = path.reduce((res: any, key) => res[key], input) as TypeAtPath<Path, T>
  return matcher[k](input as any)
}

export const matchKind = createMatch('kind')
