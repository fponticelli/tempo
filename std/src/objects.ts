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

import { TupleToUnion } from './types/tuples'
import { Merge } from './types/objects'

export const keys = <T>(object: T): (keyof T)[] => {
  return (Object.keys(object) as any) as (keyof T)[]
}

export const removeFields = <T, F extends (keyof T)[]>(
  ob: T,
  ...fields: F
): Omit<T, TupleToUnion<F>> => {
  return keys(ob).reduce((acc: any, key) => {
    if (fields.indexOf(key) < 0) acc[key] = ob[key]
    return acc
  }, {} as any) as Omit<T, TupleToUnion<F>>
}

export const merge = <A extends {}, B extends {}>(a: A, b: B): Merge<A, B> =>
  Object.assign({}, a, b) as Merge<A, B>
