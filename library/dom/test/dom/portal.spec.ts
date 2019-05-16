import { createContext } from './common'
import { Mood, component, span, portalWithSelector, headPortal, style, bodyPortal } from '../../src/dom'

describe('portal', () => {
  it('portalWithSelector', () => {
    const ctx = createContext()
    ctx.doc.body.innerHTML = '<div id="main"></div><div id="container"></div>'
    const comp = component(
      {
        state: 'hello',
        update: (_: string, a: string) => a
      },
      portalWithSelector({ selector: '#container' }, span({ className: s => s }))
    )
    const view = Mood.render({
      el: ctx.doc.getElementById('main')!,
      component: comp,
      document: ctx.doc
    })
    expect(ctx.doc.body.innerHTML).toEqual('<div id="main"></div><div id="container"><span class="hello"></span></div>')
    view.dispatch('foo')
    expect(ctx.doc.body.innerHTML).toEqual('<div id="main"></div><div id="container"><span class="foo"></span></div>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('<div id="main"></div><div id="container"></div>')
  })

  it('portalWithSelector throws if element is not found', () => {
    const ctx = createContext()
    ctx.doc.body.innerHTML = '<div id="main"></div><div id="container"></div>'
    const comp = component(
      {
        state: 'hello',
        update: (_: string, a: string) => a
      },
      portalWithSelector({ selector: '#doesnotexist' }, span({ className: s => s }))
    )
    expect(() => {
      Mood.render({
        el: ctx.doc.getElementById('main')!,
        component: comp,
        document: ctx.doc
      })
    }).toThrow()
  })

  it('headPortal', () => {
    const ctx = createContext()
    const comp = component(
      {
        state: 'background-color: red',
        update: (_: string, a: string) => a
      },
      headPortal(style({}, s => s))
    )
    const view = Mood.render({
      el: ctx.doc.body!,
      component: comp,
      document: ctx.doc
    })
    expect(ctx.doc.head.innerHTML).toEqual('<style>background-color: red</style>')
    view.dispatch('color: black')
    expect(ctx.doc.head.innerHTML).toEqual('<style>color: black</style>')
    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('bodyPortal', () => {
    const ctx = createContext()
    const comp = component(
      {
        state: 'background-color: red',
        update: (_: string, a: string) => a
      },
      bodyPortal(style({}, s => s))
    )
    const view = Mood.render({
      el: ctx.doc.body!,
      component: comp,
      document: ctx.doc
    })
    expect(ctx.doc.body.innerHTML).toEqual('<style>background-color: red</style>')
    view.dispatch('color: black')
    expect(ctx.doc.body.innerHTML).toEqual('<style>color: black</style>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
