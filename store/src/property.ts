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

import { Emitter } from './emitter'
import { Observable1 } from './observable'
import { strictEqual } from 'tempo-std/lib/equals'

export class Property<T> {
  readonly observable: Observable1<T>

  constructor(
    private value: T,
    private equal: (a: T, b: T) => boolean = strictEqual
  ) {
    this.observable = this.emitter = Emitter.ofOne()
  }

  set(value: T): boolean {
    if (this.equal(this.value, value)) {
      return false
    }
    this.value = value
    this.emit(this.value)
    return true
  }

  get() {
    return this.value
  }

  private readonly emitter: Emitter<[T]>

  private emit(value: T) {
    this.emitter.emit(value)
  }
}
