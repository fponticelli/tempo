import { Store } from '../src/store'
import { Property } from '../src/property'

describe('store', () => {
  it('dispatcher triggers a change and middlware', () => {
    let collect: { state: string, action: string, type: string }[] = []
    const reducer = (state: string, action: string) => {
      collect.push({
        state, action, type: 'reduce'
      })
      return action
    }
    const middleware = (state: string, action: string) => {
      collect.push({
        state, action, type: 'middleware'
      })
      return action
    }

    const store = Store.ofState({
      state: '', reducer, middleware
    })
    expect(store.get()).toEqual('')

    store.dispatch('a')

    expect(store.get()).toEqual('a')
    expect(collect).toEqual([
      { state: '', action: 'a', type: 'reduce' },
      { state: 'a', action: 'a', type: 'middleware' }
    ])

    collect = []

    store.dispatch('a')

    expect(store.get()).toEqual('a')
    expect(collect).toEqual([
      { state: 'a', action: 'a', type: 'reduce' }
      // middlweare is not called because the value didn't change
    ])

    collect = []
    store.dispatch('b')

    expect(store.get()).toEqual('b')
    expect(collect).toEqual([
      { state: 'a', action: 'b', type: 'reduce' },
      { state: 'b', action: 'b', type: 'middleware' }
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
    expect(store.get()).toEqual('')

    store.dispatch('a')

    expect(store.get()).toEqual('a')
    expect(collect).toEqual([
      { state: '', action: 'a', type: 'reduce' }
    ])
  })
})
