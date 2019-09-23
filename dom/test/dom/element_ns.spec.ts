import { createContext } from './common'
import { DOMElementNS } from '../../src/element_ns'
import { DynamicView } from '@mood/core'

describe('dom_ns_element', () => {
  it('static empty-element', () => {
    const ctx = createContext()
    // this is not the correct namespace but it is the way to make it work with JSDOM
    const nodeUndefined = new DOMElementNS('svg', 'svg', {}, []).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<svg></svg>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
  it('static nested-element', () => {
    const ctx = createContext()
    const nodeUndefined = new DOMElementNS('svg', 'svg', {}, [
      new DOMElementNS('svg', 'g', {}, [new DOMElementNS('svg', 'rect', {}, [])])
    ]).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<svg><g><rect></rect></g></svg>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static attribute', () => {
    const ctx = createContext()
    const node = new DOMElementNS('svg', 'svg', { id: 'main' }, []).render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="main"></svg>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic attribute', () => {
    const ctx = createContext()
    const node = new DOMElementNS('svg', 'svg', { id: (v: string) => v }, []).render(ctx, 'abc') as DynamicView<
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
    const node = new DOMElementNS('svg', 'svg', { id: (v: string) => v }, [
      new DOMElementNS('svg', 'a', { href: (v: string) => v && `#${v}` }, [])
    ]).render(ctx, 'abc') as DynamicView<string | undefined>
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="abc"><a href="#abc"></a></svg>')
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="xyz"><a href="#xyz"></a></svg>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<svg><a></a></svg>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
