import { getWindow } from './util'
import { setAttribute, setOneStyle } from '../../src/dom/set_attribute'

describe('set_attribute', () => {
  it('setAttribute', () => {
    const doc = getWindow().document
    const el = doc.createElement('div')
    setAttribute(el, 'id', 'main')
    expect(el.id).toEqual('main')
    setAttribute(el, 'id', null)
    expect(el.id).toEqual('')
    setAttribute(el, 'id', 'main')
    setAttribute(el, 'id', undefined)
    expect(el.id).toEqual('')
  })

  it('setStyle', () => {
    const doc = getWindow().document
    const el = doc.createElement('div')
    expect(el.style.backgroundColor).toEqual('')
    setOneStyle(el, 'backgroundColor', 'rgb(204, 204, 204)')
    expect(el.style.backgroundColor).toEqual('rgb(204, 204, 204)')
    setOneStyle(el, 'backgroundColor', undefined)
    expect(el.style.backgroundColor).toEqual('')
  })
})
