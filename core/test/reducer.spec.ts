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

import { compose, reduceOnKind } from '../src/reducer'

describe('compose', () => {
  it('aggregates multiple reducers', () => {
    const red1 = (state: number[], action: number) => state.concat([1, action])
    const red2 = (state: number[], action: number) => state.concat([2, action])

    expect(compose(red1, red2, red1)([], 0)).toEqual([1, 0, 2, 0, 1, 0])
  })
})

describe('reduceOnKind', () => {
  it('works just like reduce', () => {
    type A = { kind: 'A'; a: string }
    type B = { kind: 'B'; b: string }
    type AB = A | B
    const red = reduceOnKind<string, AB>({
      A: (state, action) => state + ':' + action.a,
      B: (state, action) => state + ':' + action.b
    })

    expect(red('state', { kind: 'A', a: 'a' })).toEqual('state:a')
    expect(red('state', { kind: 'B', b: 'b' })).toEqual('state:b')
  })
})
