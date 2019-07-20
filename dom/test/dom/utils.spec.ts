import { removeNode, insertBefore } from '../../src/utils'
import { createContext } from './common'

describe('utils', () => {
  it('removeNode odd scenarios', () => {
    expect(removeNode(undefined as any)).toBeUndefined()
    expect(removeNode({} as any)).toBeUndefined()
  })

  it("element blur doesn't prevent node removal", () => {
    const ctx = createContext()
    const input = ctx.doc.createElement('input')
    let triggered = 0
    ctx.doc.body.appendChild(input)
    input.onblur = (e: FocusEvent) => ++triggered
    input.focus()
    input.blur()
    removeNode(input)
    expect(triggered).toEqual(1)
  })

  it('insertBefore', () => {
    const ctx = createContext()
    const div0 = ctx.doc.createElement('div')
    div0.innerHTML = '0'
    const div1 = ctx.doc.createElement('div')
    div1.innerHTML = '1'
    const div2 = ctx.doc.createElement('div')
    div2.innerHTML = '2'
    insertBefore(div1)(div0) // this will not insert
    ctx.doc.body.appendChild(div2)
    insertBefore(div2)(div1)
    expect(ctx.doc.body.innerHTML).toEqual('<div>1</div><div>2</div>')
  })
})
