/*
Copyright 2018 Google LLC
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

import { Property } from '../src/property'

describe('property', () => {
  it('should be able to get/set a value', () => {
    const p = new Property<number>(0)
    expect(p.get()).toEqual(0)
    p.set(1)
    expect(p.get()).toEqual(1)
  })

  it('should monitor changes', () => {
    const p = new Property<number>(0)
    let counter = 0
    const h = (_: number) => {
      counter++
    }
    p.observable.on(h)
    p.set(1)
    expect(p.get()).toEqual(1)
    expect(counter).toEqual(1)
  })

  it('should accept custom equality changes', () => {
    const p = new Property<{ id: number }>({ id: 1 }, (a, b) => a.id === b.id)
    let counter = 0
    const h = (_: { id: number }) => {
      counter++
    }
    p.observable.on(h)
    p.set({ id: 2 })
    expect(p.get()).toEqual({ id: 2 })
    expect(counter).toEqual(1)

    p.set({ id: 2 }) // should not change
    expect(p.get()).toEqual({ id: 2 })
    expect(counter).toEqual(1)
  })
})
