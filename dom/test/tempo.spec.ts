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

import { createContext } from './common'
import { Tempo } from '../src/tempo'
import { Component } from '../src/html'

describe('Tempo', () => {
  it('render', () => {
    const ctx = createContext()
    const reducer = (state: string, action: string) => action
    const state = 'hello'

    const comp = Component(reducer, $ => $.DIV($ => $.text(a => a)))
    const { view, store } = Tempo.renderComponent({
      el: ctx.doc.body,
      component: comp,
      document: ctx.doc,
      state
    })

    expect(ctx.doc.body.innerHTML).toEqual('<div>hello</div>')
    store.property.set('world')
    expect(ctx.doc.body.innerHTML).toEqual('<div>world</div>')
    store.process('foo')
    expect(ctx.doc.body.innerHTML).toEqual('<div>foo</div>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('render with observe', () => {
    const ctx = createContext()
    let result = ['', '']

    const state = 'hello'
    const reducer = (state: string, action: string) => action.toUpperCase()

    const middleware = (s: string, a: string) => {
      result[0] = s
      result[1] = a
    }

    const comp = Component(reducer, $ => $.DIV($ => $.text(a => a)))

    const { store } = Tempo.renderComponent({
      el: ctx.doc.body,
      component: comp,
      document: ctx.doc,
      state
    })

    store.observable.on(middleware)

    expect(result[0]).toEqual('')
    expect(result[1]).toEqual('')
    store.process('foo')
    expect(result[0]).toEqual('FOO')
    expect(result[1]).toEqual('foo')
  })
})
