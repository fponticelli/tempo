import { div, when, unless, DOMContext, component, text } from '../../src/dom'
import { createContext, getWindow } from './common'

describe('component', () => {
  it('fromElements sets-up the right defaults', () => {
    const ctx = createContext()
    const node = component(
      {
        state: 1,
        update: (state: number, action: number) => action
      },
      div({}, text(String))
    ).render(ctx, 2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>2</div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
