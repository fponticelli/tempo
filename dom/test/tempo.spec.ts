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

import { createContext } from './common'
import { Tempo } from '../src/tempo'
import { component } from '../src/component'
import { div } from '../src/html'
import { Store } from '@tempo/store/lib/store'
import { Property } from '@tempo/store/lib/property'

describe('Tempo', () => {
  it('render', () => {
    const ctx = createContext()
    const store = new Store(
      new Property('hello'),
      (state: string, action: string) => action
    )

    const comp = component(
      { store },
      div({}, a => a)
    )
    const view = Tempo.renderComponent({
      el: ctx.doc.body,
      component: comp,
      document: ctx.doc
    })
    expect(ctx.doc.body.innerHTML).toEqual('<div>hello</div>')
    view.store.property.set('world')
    expect(ctx.doc.body.innerHTML).toEqual('<div>world</div>')
    view.store.process('foo')
    expect(ctx.doc.body.innerHTML).toEqual('<div>foo</div>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('render with observe', () => {
    const ctx = createContext()
    let result = ['', '']

    const store = new Store(
      new Property('hello'),
      (state: string, action: string) => action.toUpperCase()
    )

    const middleware = (s: string, a: string) => {
      result[0] = s
      result[1] = a
    }

    store.observable.on(middleware)

    const comp = component(
      { store },
      div({}, a => a)
    )

    const view = Tempo.renderComponent({
      el: ctx.doc.body,
      component: comp,
      document: ctx.doc
    })
    expect(result[0]).toEqual('')
    expect(result[1]).toEqual('')
    view.store.process('foo')
    expect(result[0]).toEqual('FOO')
    expect(result[1]).toEqual('foo')
  })
})
