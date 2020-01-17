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

import { map, head, tail } from '../src/arrays'

describe('arrays:map', () => {
  it('should work with empty arrays', () => {
    expect(map(a => a, [])).toEqual([])
  })

  it('should work with any array', () => {
    expect(map(a => a + 1, [1, 2, 3])).toEqual([2, 3, 4])
  })
})

describe('arrays:head', () => {
  it('should return nothing if the array is empy', () => {
    expect(head([])).not.toBeDefined()
  })

  it('should return the first element', () => {
    expect(head([1])).toEqual(1)
    expect(head([1, 2])).toEqual(1)
    expect(head([1, 2, 3])).toEqual(1)
  })
})

describe('arrays:tail', () => {
  it('should return nothing if the array is empy', () => {
    expect(tail([])).toEqual([])
  })

  it('should return all the elements except for the first', () => {
    expect(tail([1])).toEqual([])
    expect(tail([1, 2])).toEqual([2])
    expect(tail([1, 2, 3])).toEqual([2, 3])
  })
})
