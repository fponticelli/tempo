import { createContext } from './common'
import { Mood, component, div } from '../../src/dom'

describe('Mood', () => {
  it('render', () => {
    const ctx = createContext()
    const comp = component(
      {
        state: 'hello',
        update: (_: string, a: string) => a
      },
      div({}, a => a)
    )
    const view = Mood.render({
      el: ctx.doc.body,
      component: comp,
      document: ctx.doc
    })
    expect(ctx.doc.body.innerHTML).toEqual('<div>hello</div>')
    view.change('world')
    expect(ctx.doc.body.innerHTML).toEqual('<div>world</div>')
    view.dispatch('foo')
    expect(ctx.doc.body.innerHTML).toEqual('<div>foo</div>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('render with observe', () => {
    const ctx = createContext()
    let result = ['', '']
    const comp = component(
      {
        state: 'hello',
        update: (_: string, a: string) => a.toUpperCase()
      },
      div({}, a => a)
    )

    const view = Mood.render({
        el: ctx.doc.body,
        component: comp,
        document: ctx.doc,
        observe: (s: string, a: string) => {
          result[0] = s
          result[1] = a
        }
    })
    expect(result[0]).toEqual('')
    expect(result[1]).toEqual('')
    view.dispatch('foo')
    console.log(result)
    expect(result[0]).toEqual('FOO')
    expect(result[1]).toEqual('foo')
  })
})
