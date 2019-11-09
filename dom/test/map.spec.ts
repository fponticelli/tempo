import { el } from '../src/element'
import { mapState, mapAction } from '../src/map'
import { createContext } from './common'
import { DynamicView } from '@mood/core/lib/view'

describe('map', () => {
  it('mapState', () => {
    const template = el('div', {}, mapState({ map: (v: number) => `#${v}` }, s => s))
    const ctx = createContext()
    const view = template.render(ctx, 1) as DynamicView<number>
    expect(ctx.doc.body.innerHTML).toEqual('<div>#1</div>')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>#2</div>')
  })

  it('mapState only static', () => {
    const template = el('div', {}, mapState({ map: (v: number) => `#${v}` }, 'X'))
    const ctx = createContext()
    template.render(ctx, 1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>X</div>')
  })

  it('mapAction', () => {
    let ref: string | undefined
    const onclick = (_: Event): number => 1
    const template = el<string, string, HTMLDivElement>(
      'div',
      {},
      mapAction({ map: (v: number) => `#${v}` }, el<string, number, HTMLDivElement>('div', { onclick } as any, s => s))
    )
    const ctx = createContext((n: string) => {
      ref = n
    })
    const view = template.render(ctx, 'A') as DynamicView<string>
    expect(ctx.doc.body.innerHTML).toEqual('<div><div>A</div></div>')
    const domEl = ctx.doc.body.firstElementChild!.firstElementChild! as HTMLDivElement
    domEl.click()
    expect(ref).toEqual('#1')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('mapAction passing undefined', () => {
    let ref = 'ORIG'
    const onclick = (_: Event): string => 'X'
    const template = el<string, string, HTMLDivElement>(
      'div',
      {},
      mapAction(
        { map: (v: string): string | undefined => undefined },
        el<string, string, HTMLDivElement>('div', { onclick } as any, s => s)
      )
    )
    const ctx = createContext((n: string) => {
      ref = n
    })
    const view = template.render(ctx, 'A') as DynamicView<string>
    expect(ctx.doc.body.innerHTML).toEqual('<div><div>A</div></div>')
    const domEl = ctx.doc.body.firstElementChild!.firstElementChild! as HTMLDivElement
    domEl.click()
    expect(ref).toEqual('ORIG')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('mapAction only static', () => {
    let ref: string | undefined
    const onclick = (_: Event): number => 1
    const template = el<string, string, HTMLDivElement>(
      'div',
      {},
      mapAction({ map: (v: number) => `#${v}` }, el<string, number, HTMLDivElement>('div', { onclick } as any, 'X'))
    )
    const ctx = createContext((n: string) => {
      ref = n
    })
    const view = template.render(ctx, 'A') as DynamicView<string>
    expect(ctx.doc.body.innerHTML).toEqual('<div><div>X</div></div>')
    const domEl = ctx.doc.body.firstElementChild!.firstElementChild! as HTMLDivElement
    domEl.click()
    expect(ref).toEqual('#1')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
