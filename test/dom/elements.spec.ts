import { createContext } from './common'
import { elements, div } from '../../src/dom'

describe('repeat', () => {
  it('repeat starting empty', () => {
    const ctx = createContext()
    const template = elements({}, div({}, String))
    const view = template.render(ctx, [], () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<!--md:repeat-->')
    view.change([1, 2, 3])
    expect(ctx.doc.body.innerHTML).toEqual('<div>1</div><div>2</div><div>3</div><!--md:repeat-->')
    view.change([4, 5])
    expect(ctx.doc.body.innerHTML).toEqual('<div>4</div><div>5</div><!--md:repeat-->')
    view.change([1, 2, 3])
    expect(ctx.doc.body.innerHTML).toEqual('<div>1</div><div>2</div><div>3</div><!--md:repeat-->')
    view.change([])
    expect(ctx.doc.body.innerHTML).toEqual('<!--md:repeat-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })

  it('repeat starting full', () => {
    const ctx = createContext()
    const template = elements({ refId: 'A' }, div({}, String))
    const view = template.render(ctx, [1, 2, 3], () => {})
    expect(ctx.doc.body.innerHTML).toEqual('<div>1</div><div>2</div><div>3</div><!--A-->')
    view.change([4, 5])
    expect(ctx.doc.body.innerHTML).toEqual('<div>4</div><div>5</div><!--A-->')
    view.change([1, 2, 3])
    expect(ctx.doc.body.innerHTML).toEqual('<div>1</div><div>2</div><div>3</div><!--A-->')
    view.change([])
    expect(ctx.doc.body.innerHTML).toEqual('<!--A-->')
    view.destroy()
    expect(ctx.doc.body.innerHTML).toEqual('')
  })
})
