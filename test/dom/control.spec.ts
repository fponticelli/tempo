import { el } from '../../src/dom/dom_element'
import { mapState, mapAction } from '../../src/dom/control'
import { createContext } from './common'
import { DynamicView } from '../../src/core/view'

describe('control', () => {
  it('mapState', () => {
    const template = el(
      'div',
      {},
      mapState(
        { map: (v: number) => `#${v}` },
        s => s
      )
    )
    const ctx = createContext()
    const view = template.render(ctx, 1, () => {}) as DynamicView<number>
    expect(ctx.doc.body.innerHTML).toEqual('<div>#1</div>')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>#2</div>')
  })

  it('mapAction', () => {
    let ref: string | undefined
    const onclick = (_: Event): number =>  1
    const template = el<undefined, string>(
      'div',
      {},
      mapAction(
        { map: (v: number) => `#${v}` },
        el<undefined, number>(
          'div',
          { onclick } as any,
          'xxx'
        )
      )
    )
    const ctx = createContext()
    const view = template.render(ctx, undefined, (n: string) => { ref = n }) as DynamicView<undefined>
    expect(ctx.doc.body.innerHTML).toEqual('<div><div>xxx</div></div>')
    const domEl = ctx.doc.body.firstElementChild!.firstElementChild! as HTMLDivElement
    domEl.click()
    expect(ref).toEqual('#1')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
