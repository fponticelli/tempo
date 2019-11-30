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
import { elNS } from '../src/element'
import { DynamicView } from 'tempo-core/lib/view'

describe('dom_ns_element', () => {
  it('static empty-element', () => {
    const ctx = createContext()
    // this is not the correct namespace but it is the way to make it work with JSDOM
    const nodeUndefined = elNS('svg', 'svg', {}).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<svg></svg>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
  it('static nested-element', () => {
    const ctx = createContext()
    const nodeUndefined = elNS('svg', 'svg', {},
      elNS('svg', 'g', {}, elNS('svg', 'rect', {}))
    ).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<svg><g><rect></rect></g></svg>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static attribute', () => {
    const ctx = createContext()
    const node = elNS('svg', 'svg', { attrs: { id: 'main' } }).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="main"></svg>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic attribute', () => {
    const ctx = createContext()
    const node = elNS('svg', 'svg', { attrs: { id: (v: string) => v } }).render(ctx, 'abc') as DynamicView<
      string | undefined
    >
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="abc"></svg>')
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="xyz"></svg>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<svg></svg>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic child', () => {
    const ctx = createContext()
    const node = elNS('svg', 'svg', { attrs: { id: (v: string) => v } },
      elNS('svg', 'a', { attrs: { href: (v: string) => v && `#${v}` } })
    ).render(ctx, 'abc') as DynamicView<string | undefined>
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="abc"><a href="#abc"></a></svg>')
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="xyz"><a href="#xyz"></a></svg>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<svg><a></a></svg>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
