import { div, when, unless, DOMContext } from '../../src/dom'
import { createContext, getWindow } from './common'

describe('context', () => {
  it('fromElements sets-up the right defaults', () => {
    const { document } = getWindow()
    const el = document.createElement('div')
    document.body.append(el)
    const ctx = DOMContext.fromElement(el, () => {})
    expect(ctx.doc).toBe(document)
    expect(ctx.parent).toBe(el)
    const sub = document.createElement('p')
    ctx.append(sub)
    expect(document.body.innerHTML).toBe('<div><p></p></div>')
  })

  it('mapAction trigger dispatch with the right value', () => {
    let grabber: any[] = []
    function fa(action: string) {
      grabber.push(action)
    }
    const ctx = createContext(fa)
    ctx.dispatch('a')
    expect(grabber).toEqual(['a'])
    const newCtx = ctx.mapAction(String)
    newCtx.dispatch(1)
    expect(grabber).toEqual(['a', '1'])
  })
})
