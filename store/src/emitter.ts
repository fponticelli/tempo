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

import { Listener } from './listener'
import { Observable } from './observable'

export class Emitter<T extends any[]> implements Observable<T> {
  static ofOne<A>(): Emitter1<A> {
    return new Emitter<[A]>()
  }
  static ofTwo<A, B>(): Emitter2<A, B> {
    return new Emitter<[A, B]>()
  }
  static ofThree<A, B, C>(): Emitter3<A, B, C> {
    return new Emitter<[A, B, C]>()
  }
  static ofFour<A, B, C, D>(): Emitter4<A, B, C, D> {
    return new Emitter<[A, B, C, D]>()
  }
  static ofFive<A, B, C, D, E>(): Emitter5<A, B, C, D, E> {
    return new Emitter<[A, B, C, D, E]>()
  }
  static ofSix<A, B, C, D, E, F>(): Emitter6<A, B, C, D, E, F> {
    return new Emitter<[A, B, C, D, E, F]>()
  }

  readonly listeners: Listener<T>[] = []

  private constructor() {}

  emit(...value: T) {
    for (const l of this.listeners) l(...value)
  }

  on(listener: Listener<T>) {
    this.listeners.push(listener)
  }

  off(listener: Listener<T>) {
    const index = this.listeners.indexOf(listener)
    if (index < 0) return false
    this.listeners.splice(index, 1)
    return true
  }

  once(listener: Listener<T>) {
    const wrapper = (...values: T) => {
      this.off(wrapper)
      listener(...values)
    }
    this.on(wrapper)
  }
}

export type Emitter1<T> = Emitter<[T]>
export type Emitter2<A, B> = Emitter<[A, B]>
export type Emitter3<A, B, C> = Emitter<[A, B, C]>
export type Emitter4<A, B, C, D> = Emitter<[A, B, C, D]>
export type Emitter5<A, B, C, D, E> = Emitter<[A, B, C, D, E]>
export type Emitter6<A, B, C, D, E, F> = Emitter<[A, B, C, D, E, F]>

export function debounce(delay: number) {
  return function<T extends any[]>(listener: Listener<T>): Listener<T> {
    let running = false
    let acc: T
    return (...values: T) => {
      acc = values
      if (running) return
      running = true
      setTimeout(() => {
        running = false
        listener(...acc)
      }, delay)
    }
  }
}

export function nextFrame<T extends any[]>(listener: Listener<T>): Listener<T> {
  let running = false
  let acc: T
  return (...values: T) => {
    acc = values
    if (running) return
    running = true
    requestAnimationFrame(() => {
      running = false
      listener(...acc)
    })
  }
}
