import { createContext } from './common'
import { DOMNSElement } from '../../src/dom/dom_ns_element'
import { DynamicView } from '../../src/core/view'

describe('dom_ns_element', () => {
  it('static empty-element', () => {
    const ctx = createContext()
    // this is not the correct namespace but it is the way to make it work with JSDOM
    const nodeUndefined = new DOMNSElement('svg', 'svg', {}, []).render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<svg></svg>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
  it('static nested-element', () => {
    const ctx = createContext()
    const nodeUndefined = new DOMNSElement(
      'svg',
      'svg',
      {},
      [
        new DOMNSElement(
          'svg',
          'g',
          {},
          [
            new DOMNSElement(
              'svg',
              'rect',
              {},
              []
            )
          ]
        )
      ]
    ).render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<svg><g><rect></rect></g></svg>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static attribute', () => {
    const ctx = createContext()
    const node = new DOMNSElement('svg', 'svg', { id: 'main' }, []).render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="main"></svg>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic attribute', () => {
    const ctx = createContext()
    const node = new DOMNSElement(
      'svg',
      'svg',
      { id: (v: string | undefined) => v },
      []
    ).render(ctx, 'abc', () => {}) as DynamicView<string | undefined>
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="abc"></svg>')
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual('<svg id="xyz"></svg>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<svg></svg>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
