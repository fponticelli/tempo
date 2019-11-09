import { createContext } from './common'
import { Mood } from '../src/mood'
import { component } from '../src/component'
import { portalWithSelector, headPortal, bodyPortal } from '../src/portal'
import { html } from '../src/web'
const { span, style } = html
import { Store } from '@mood/store/lib/store'

describe('portal', () => {
  it('portalWithSelector', () => {
    const ctx = createContext()
    ctx.doc.body.innerHTML = '<div id="main"></div><div id="container"></div>'
    const store = Store.ofState({
      state: 'hello',
      reducer: (_: string, a: string) => a
    })
    const comp = component(
      { store },
      portalWithSelector({ selector: '#container' }, span({ className: s => s }))
    )
    const view = Mood.renderComponent({
      el: ctx.doc.getElementById('main')!,
      component: comp,
      document: ctx.doc
    })
    expect(ctx.doc.body.innerHTML).toEqual('<div id="main"></div><div id="container"><span class="hello"></span></div>')
    view.store.process('foo')
    expect(ctx.doc.body.innerHTML).toEqual('<div id="main"></div><div id="container"><span class="foo"></span></div>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('<div id="main"></div><div id="container"></div>')
  })

  it('portalWithSelector throws if element is not found', () => {
    const ctx = createContext()
    ctx.doc.body.innerHTML = '<div id="main"></div><div id="container"></div>'
    const store = Store.ofState({
      state: 'hello',
      reducer: (_: string, a: string) => a
    })
    const comp = component(
      { store },
      portalWithSelector({ selector: '#doesnotexist' }, span({ className: s => s }))
    )
    expect(() => {
      Mood.renderComponent({
        el: ctx.doc.getElementById('main')!,
        component: comp,
        document: ctx.doc
      })
    }).toThrow()
  })

  it('headPortal', () => {
    const ctx = createContext()
    const store = Store.ofState({
      state: 'background-color: red',
      reducer: (_: string, a: string) => a
    })
    const comp = component(
      { store },
      headPortal(style({}, s => s))
    )
    const view = Mood.renderComponent({
      el: ctx.doc.body!,
      component: comp,
      document: ctx.doc
    })
    expect(ctx.doc.head.innerHTML).toEqual('<style>background-color: red</style>')
    view.store.process('color: black')
    expect(ctx.doc.head.innerHTML).toEqual('<style>color: black</style>')
    view.destroy()
    expect(ctx.doc.head.innerHTML).toEqual('')
  })

  it('bodyPortal', () => {
    const ctx = createContext()
    const store = Store.ofState({
      state: 'background-color: red',
      reducer: (_: string, a: string) => a
    })
    const comp = component(
      { store },
      bodyPortal(style({}, s => s))
    )
    const view = Mood.renderComponent({
      el: ctx.doc.body!,
      component: comp,
      document: ctx.doc
    })
    expect(ctx.doc.body.innerHTML).toEqual('<style>background-color: red</style>')
    view.store.process('color: black')
    expect(ctx.doc.body.innerHTML).toEqual('<style>color: black</style>')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
