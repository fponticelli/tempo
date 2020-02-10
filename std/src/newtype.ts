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

/**
 * Usage:
 * export interface Int extends Newtype<
 *   number,
 *   { readonly Int: unique symbol }
 * > {}
 *
 * export const Int = new class extends NewtypeClass<Int> {
 *   isValid(v: number) { return Number.isInteger(v) }
 * }()
 */

import { Option, ofValue } from './option'
import { Maybe } from './maybe'

export interface Newtype<V, S> {
  readonly _T: V
  readonly _S: S
}

export abstract class NewtypeClass<T extends Newtype<any, any>> {
  abstract isValid(v: T['_T']): boolean
  unsafeOf(v: T['_T']): T {
    return v as unknown as T
  }
  of(v: T['_T']): Option<T> {
    return ofValue(this.maybeOf(v))
  }
  maybeOf(v: T['_T']): Maybe<T> {
    return this.isValid(v) ? v as unknown as T : undefined
  }
  get(v: T): T['_T'] {
    return v as unknown as T['_T']
  }
  maybeModify(f: (v: T['_T']) => T['_T']): (value: T) => Maybe<T> {
    return (value: T) => this.maybeOf(f(this.get(value)))
  }
  modify(f: (v: T['_T']) => T['_T']): (value: T) => Option<T> {
    const mf = this.maybeModify(f)
    return (value: T) => ofValue(mf(value))
  }
  unsafeModify(f: (v: T['_T']) => T['_T']): (value: T) => T {
    return (value: T) => this.unsafeOf(f(this.get(value)))
  }
}
