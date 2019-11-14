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

import { Store } from '../src/store'
import { Property } from '../src/property'

describe('store', () => {
  it('dispatcher triggers a change and middlware', () => {
    let collect: { state: string, action: string, type: string, changed?: boolean }[] = []
    const reducer = (state: string, action: string) => {
      collect.push({
        state, action, type: 'reduce'
      })
      return action
    }
    const middleware = (state: string, action: string, changed: boolean) => {
      collect.push({
        state, action, type: 'middleware', changed
      })
      return action
    }

    const store = Store.ofState({
      state: '', reducer
    })

    store.observable.on(middleware)

    const { property } = store

    expect(property.get()).toEqual('')

    store.process('a')

    expect(property.get()).toEqual('a')
    expect(collect).toEqual([
      { state: '', action: 'a', type: 'reduce' },
      { state: 'a', action: 'a', type: 'middleware', changed: true }
    ])

    collect = []

    store.process('a')

    expect(property.get()).toEqual('a')
    expect(collect).toEqual([
      { state: 'a', action: 'a', type: 'reduce' },
      { state: 'a', action: 'a', type: 'middleware', changed: false }
    ])

    collect = []
    store.process('b')

    expect(property.get()).toEqual('b')
    expect(collect).toEqual([
      { state: 'a', action: 'b', type: 'reduce' },
      { state: 'b', action: 'b', type: 'middleware', changed: true }
    ])

  })

  it('middleware is optional', () => {
    let collect: { state: string, action: string, type: string }[] = []
    const property = new Property('')
    const reducer = (state: string, action: string) => {
      collect.push({
        state, action, type: 'reduce'
      })
      return action
    }

    const store = new Store(property, reducer)
    expect(property.get()).toEqual('')

    store.process('a')

    expect(property.get()).toEqual('a')
    expect(collect).toEqual([
      { state: '', action: 'a', type: 'reduce' }
    ])
  })
})
