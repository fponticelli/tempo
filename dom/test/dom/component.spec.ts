import { div, component, text } from '../../src'
import { createContext } from './common'
import { Store, Property } from '@mood/store'

describe('component', () => {
  it('fromElements sets-up the right defaults', () => {
    const ctx = createContext()
    const store = new Store(
      new Property(1),
      (state: number, action: number) => action
    )

    const node = component(
      { store },
      div({}, text(String))
    ).render(ctx, 2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>2</div>')
    node.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
