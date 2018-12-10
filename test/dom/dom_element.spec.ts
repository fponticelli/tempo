import { createContext } from './common'
import { el } from '../../src/dom/dom_element'
import { DynamicView } from '../../src/core/view'
import { derived } from '../../src/dom/dom_value'

describe('dom_element', () => {
  it('static empty-element', () => {
    const ctx = createContext()
    const nodeUndefined = el('div', {}).render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static nested-element', () => {
    const ctx = createContext()
    const nodeUndefined = el('div', {}, el('a', {}, el('span', {}, 'abc'))
    ).render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<div><a><span>abc</span></a></div>')
    nodeUndefined.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static attribute', () => {
    const ctx = createContext()
    const node = el('div', { id: 'main' }).render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<div id="main"></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic attribute', () => {
    const ctx = createContext()
    const node = el('div', { id: (v: string) => v }).render(ctx, 'abc', () => {}) as DynamicView<
      string | undefined
    >
    expect(ctx.doc.body.innerHTML).toEqual('<div id="abc"></div>')
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual('<div id="xyz"></div>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic child', () => {
    const ctx = createContext()
    const node = el(
      'div',
      { id: (v: string) => v },
      el('a', { href: (v: string) => v && `#${v}` })
    ).render(ctx, 'abc', () => {}) as DynamicView<string | undefined>
    expect(ctx.doc.body.innerHTML).toEqual('<div id="abc"><a href="#abc"></a></div>')
    node.change('xyz')
    expect(ctx.doc.body.innerHTML).toEqual('<div id="xyz"><a href="#xyz"></a></div>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<div><a></a></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('static $style', () => {
    const ctx = createContext()
    const node = el('div', { $color: 'red' } as any).render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<div style="color: red;"></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('dynamic $style', () => {
    const ctx = createContext()
    const node = el(
      'div',
      { $color: (v: number | undefined) => v && (v === 1 ? 'red' : 'blue') } as any
    ).render(ctx, 1, () => {}) as DynamicView<number | undefined>
    expect(ctx.doc.body.innerHTML).toEqual('<div style="color: red;"></div>')
    node.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div style="color: blue;"></div>')
    node.change(undefined)
    expect(ctx.doc.body.innerHTML).toEqual('<div style=""></div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('event that dispatch', () => {
    const ctx = createContext()
    let count = 0
    const onclick = (e: MouseEvent) => 1
    const node = el<number, number>(
                  'div',
                  { onclick: onclick } as any
                ).render(ctx, 1, (c: number) => {
                  count = c
                })
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(1)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it("derived event that doesn't dispatches", () => {
    const ctx = createContext()
    let count = 0
    const onclick = derived(s => undefined)
    const node = el<number, number>('div', { onclick } as any).render(ctx, 1, (c: number) => {
      count = c
    })
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(0)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('derived event that dispatch', () => {
    const ctx = createContext()
    let count = 0
    const onclick = derived((s: number) => (e: Event) => s + 1)
    const node = el<number, number>('div', { onclick } as any).render(ctx, 1, (c: number) => {
      count = c
    })
    expect(ctx.doc.body.innerHTML).toEqual('<div></div>')
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(2)
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('event that does not dispatch', () => {
    const ctx = createContext()
    let count = 0
    const onclick = (e: MouseEvent) => undefined
    const node = el<number, number>('div', { onclick } as any).render(ctx, 1, (c: number) => {
      count = c
    })
    const domEl = ctx.doc.body.firstElementChild as HTMLDivElement
    expect(count).toEqual(0)
    domEl.click()
    expect(count).toEqual(0)
  })
})
