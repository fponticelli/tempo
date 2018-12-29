import { div, when, unless } from '../../src/dom'
import { createContext } from './common'

describe('when', () => {
  it('always true', () => {
    const ctx = createContext()
    const template = when(
      { condition: _ => true, refId: 'A' },
      div({}, 'a')
    )
    const view = template.render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--A-->')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--A-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('always false', () => {
    const ctx = createContext()
    const template = when(
      { condition: _ => false },
      div({}, 'a')
    )
    const view = template.render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<!--md:when-->')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<!--md:when-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('unless', () => {
    const ctx = createContext()
    const template = unless(
      { condition: _ => false },
      div({}, 'a')
    )
    const view = template.render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--md:unless-->')
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--md:unless-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('alternate start with true', () => {
    const ctx = createContext()
    let condition = true
    const template = when(
      { condition: _ => condition },
      div({}, 'a')
    )
    const view = template.render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--md:when-->')
    condition = false
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<!--md:when-->')
    condition = true
    view.change(3)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--md:when-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('alternate start with false', () => {
    const ctx = createContext()
    let condition = false
    const template = when(
      { condition: _ => condition },
      div({}, 'a')
    )
    const view = template.render(ctx, 1, () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<!--md:when-->')
    condition = true
    view.change(2)
    expect(ctx.doc.body.innerHTML).toEqual('<div>a</div><!--md:when-->')
    condition = false
    view.change(3)
    expect(ctx.doc.body.innerHTML).toEqual('<!--md:when-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
