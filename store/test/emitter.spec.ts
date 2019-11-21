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

import { Emitter } from '../src/emitter'

describe('emitter', () => {
  it('should allow adding handlers and trigger them', () => {
    const e = Emitter.ofOne<number>()
    let counter = 0
    const h = (value: number) => {
      counter++
      expect(value).toEqual(0)
    }
    e.on(h)
    e.emit(0)
    expect(counter).toEqual(1)
  })

  it('should allow removing a listener', () => {
    const e = Emitter.ofOne<number>()
    let counter = 0
    const h = (_: number) => {
      counter++
    }
    e.on(h)
    e.off(h)
    e.emit(0)
    expect(counter).toEqual(0)
  })

  it('`once` should be triggered once', () => {
    const e = Emitter.ofOne<number>()
    let counter = 0
    const h = (_: number) => {
      counter++
    }
    e.once(h)
    e.emit(0)
    expect(counter).toEqual(1)
    e.emit(1)
    expect(counter).toEqual(1)
  })

  it('a listener that is not registered should return false when removed', () => {
    const e = Emitter.ofOne<number>()
    expect(e.off(() => {})).toBeFalsy()
  })
})
