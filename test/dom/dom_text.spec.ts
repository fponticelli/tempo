import { createContext } from './util'
import { DOMText } from '../../src/dom/dom_text'
import { DynamicView } from '../../src/core/view'

describe('dom_text', () => {
  it('create static undefined', () => {
    const ctx = createContext()
    const nodeUndefined = new DOMText(undefined).render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('create static with literal value', () => {
    const ctx = createContext()
    const node = new DOMText('abc').render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('abc')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('create static with function value', () => {
    const ctx = createContext()
    const node = new DOMText(
        (r: string | undefined) => r
      ).render(ctx, 'abc', () => {}) as DynamicView<string | undefined>
    expect(ctx.doc.body.innerHTML).toEqual('abc')
    node.change('abc')
    expect(ctx.doc.body.innerHTML).toEqual('abc')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('')
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual('xyz')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
    const nodeUndefined = new DOMText(
        (r: string | undefined) => r
      ).render(ctx, undefined, () => {}) as DynamicView<string | undefined>
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
