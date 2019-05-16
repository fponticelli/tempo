import { createContext } from './common'
import { div } from '../../src/dom/els'
import { adapter, component } from '../../src/dom'

describe('adapter', () => {
  it('noOptions', () => {
    type InnerState = { inner: string; outer: string }

    const ctx = createContext(() => {})
    const template = adapter(
      {},
      component(
        {
          state: { inner: 'in', outer: 'out' },
          update: (state: InnerState) => {
            return state
          }
        },
        'inner: ',
        s => s.inner,
        ', outer: ',
        s => s.outer
      )
    )
    const view = template.render(ctx, { outer: 'out' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: out')
    view.change({ outer: 'OUT' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: out')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('mergeStates', () => {
    type OuterState = { outer: string }
    type InnerState = { inner: string; outer: string }

    const ctx = createContext(() => {})
    const template = adapter(
      {
        mergeStates: (outer: OuterState, inner: InnerState) => {
          return { ...outer, inner: inner.inner }
        }
      },
      component(
        {
          state: { inner: 'in', outer: '' },
          update: (state: InnerState) => {
            return state
          }
        },
        'inner: ',
        s => s.inner,
        ', outer: ',
        s => s.outer
      )
    )
    const view = template.render(ctx, { outer: 'out' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: out')
    view.change({ outer: 'OUT' })
    expect(ctx.doc.body.innerHTML).toEqual('inner: in, outer: OUT')
  })

  it('propagate', () => {
    type OuterState = { outer: string }
    type InnerState = { inner: string; outer: string }
    let counter = 0
    const ctx = createContext((v: number) => {
      counter = v
    })

    const template = adapter(
      {
        propagate: (
          action: number,
          innerState: InnerState,
          outerState: OuterState,
          dispatchInner: (action: number) => void,
          dispatchOuter: (action: number) => void
        ) => {
          if (action === 5) return
          expect(++counter).toEqual(2)
          expect(action).toEqual(1)
          expect(innerState).toEqual({ inner: '1', outer: 'notout' })
          expect(outerState).toEqual({ outer: 'out' })
          dispatchOuter(3)
          expect(++counter).toEqual(4)
          dispatchInner(5)
        }
      },
      component<InnerState, number>(
        {
          state: { inner: 'in', outer: 'notout' },
          update: (state: InnerState, action: number) => {
            if (action === 5) {
              return { ...state, inner: String(action) }
            } else {
              expect(++counter).toEqual(1)
              return { ...state, inner: String(action) }
            }
          }
        },
        div({ onClick: (_: MouseEvent) => 1 }, 'inner: ', s => s.inner, ', outer: ', s => s.outer)
      )
    )

    const view = template.render(ctx, { outer: 'out' })
    expect(counter).toEqual(0)
    expect(ctx.doc.body.innerHTML).toEqual('<div>inner: in, outer: notout</div>')

    const el = ctx.doc.body.firstElementChild as HTMLDivElement
    el.click()
    expect(counter).toEqual(4)
    expect(ctx.doc.body.innerHTML).toEqual('<div>inner: 5, outer: notout</div>')
  })
})
