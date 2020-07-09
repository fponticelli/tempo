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

describe('portal', () => {
  it('portalWithSelector', () => {
    const ctx = createContext()
    ctx.doc.body.innerHTML = '<div id="main"></div><div id="container"></div>'

    const state = 'hello'
    const reducer = (_: string, a: string) => a
    const comp = Component(reducer, $ =>
      $.PortalWithSelector('#container', $ =>
        $.SPAN($ => $.class((s: string) => s))
      )
    )
    const view = Tempo.renderComponent({
      el: ctx.doc.getElementById('main')!,
      component: comp,
      document: ctx.doc,
      state
    })
    expect(ctx.doc.body.innerHTML).toEqual(
      '<div id="main"></div><div id="container"><span class="hello"></span></div>'
    )
    view.dispatch('foo')
    expect(ctx.doc.body.innerHTML).toEqual(
      '<div id="main"></div><div id="container"><span class="foo"></span></div>'
    )
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual(
      '<div id="main"></div><div id="container"></div>'
    )
  })

  it('portalWithSelector throws if element is not found', () => {
    const ctx = createContext()
    ctx.doc.body.innerHTML = '<div id="main"></div><div id="container"></div>'
    const state = 'hello'
    const reducer = (_: string, a: string) => a
    const comp = Component(reducer, $ =>
      $.PortalWithSelector('#doesnotexist', $ =>
        $.SPAN($ => $.class((s: string) => s))
      )
    )
    expect(() => {
      Tempo.renderComponent({
        el: ctx.doc.getElementById('main')!,
        component: comp,
        document: ctx.doc,
        state
      })
    }).toThrow()
  })

  it('headPortal', () => {
    const ctx = createContext()
    const state = 'background-color: red'
    const reducer = (_: string, a: string) => a
    const comp = Component(reducer, $ =>
      $.HeadPortal($ => $.STYLE($ => $.text(s => s)))
    )
    const view = Tempo.renderComponent({
      el: ctx.doc.body!,
      component: comp,
      document: ctx.doc,
      state
    })
    expect(ctx.doc.head.innerHTML).toEqual(
      '<style>background-color: red</style>'
    )
    view.dispatch('color: black')
    expect(ctx.doc.head.innerHTML).toEqual('<style>color: black</style>')
    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('bodyPortal', () => {
    const ctx = createContext()
    const state = 'background-color: red'
    const reducer = (_: string, a: string) => a
    const comp = Component(reducer, $ =>
      $.BodyPortal($ => $.STYLE($ => $.text(s => s)))
    )
    const view = Tempo.renderComponent({
      el: ctx.doc.body!,
      component: comp,
      document: ctx.doc,
      state
    })
    expect(ctx.doc.body.innerHTML).toEqual(
      '<style>background-color: red</style>'
    )
    view.dispatch('color: black')
    expect(ctx.doc.body.innerHTML).toEqual('<style>color: black</style>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
