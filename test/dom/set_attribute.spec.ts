import { createDiv, createTextInput, createA } from './common'
import {
  setAttribute,
  setOneStyle,
  setEnumBoolAttribute,
  setCommaSeparated,
  setBoolAttribute
} from '../../src/dom/set_attribute'

describe('set_attribute', () => {
  it('setAttribute', () => {
    const el = createDiv()
    setAttribute(el, 'id', 'main')
    expect(el.id).toEqual('main')
    setAttribute(el, 'id', null)
    expect(el.id).toEqual('')
    setAttribute(el, 'id', 'main')
    setAttribute(el, 'id', undefined)
    expect(el.id).toEqual('')
  })

  it('seOneStyle', () => {
    const el = createDiv()
    expect(el.style.backgroundColor).toEqual('')
    setOneStyle(el, 'backgroundColor', 'rgb(204, 204, 204)')
    expect(el.style.backgroundColor).toEqual('rgb(204, 204, 204)')
    setOneStyle(el, 'backgroundColor', undefined)
    expect(el.style.backgroundColor).toEqual('')
  })

  // TODO content editable on JSDOM seems finnicky
  // it('setEnumBoolAttribute', () => {
  //   const el = createDiv()
  //   setEnumBoolAttribute(el, 'contentEditable', true)
  //   expect(el.contentEditable).toEqual('true')
  //   setEnumBoolAttribute(el, 'contentEditable', undefined)
  //   expect(el.contentEditable).toEqual('false')
  //   setEnumBoolAttribute(el, 'contentEditable', false)
  //   expect(el.contentEditable).toEqual('false')
  // })

  it('setBoolAttribute', () => {
    const el = createTextInput()
    expect(el.autofocus).toEqual(false)
    setBoolAttribute(el, 'autofocus', true)
    expect(el.autofocus).toEqual(true)
    setBoolAttribute(el, 'autofocus', undefined)
    expect(el.autofocus).toEqual(false)
    setBoolAttribute(el, 'autofocus', false)
    expect(el.autofocus).toEqual(false)
  })

  it('setCommaSeparated', () => {
    // ping
    const el = createA()
    expect(el.rel).toEqual('')
    setCommaSeparated(el, 'rel', ['a', 'b', 'c'])
    expect(el.rel).toEqual('a b c')
    setCommaSeparated(el, 'rel', [])
    expect(el.rel).toEqual('')
    setCommaSeparated(el, 'rel', undefined)
    expect(el.rel).toEqual('')
  })
})
