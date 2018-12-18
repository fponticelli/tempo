import { createDiv, createTextInput, createA } from './common'
import {
  setAttribute,
  setOneStyle,
  setEnumBoolAttribute,
  setSpaceSeparated,
  setBoolAttribute
} from '../../src/dom/set_attribute'

describe('set_attribute', () => {
  it('setAttribute', () => {
    const el = createDiv()
    setAttribute(el, 'id', 'main')
    expect(el.id).toEqual('main')
    setAttribute(el, 'id', null)
    expect(el.id).toEqual('')
    setAttribute(el, 'id', 'a')
    setAttribute(el, 'id', 'a')
    expect(el.id).toEqual('a')
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

  it('setEnumBoolAttribute', () => {
    const el = createDiv()
    setEnumBoolAttribute(el, 'draggable', true)
    expect(el.draggable).toEqual(true)
    setEnumBoolAttribute(el, 'draggable', undefined)
    expect(el.draggable).toEqual(false)
    setEnumBoolAttribute(el, 'draggable', false)
    expect(el.draggable).toEqual(false)
  })

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

  it('setSpaceSeparated', () => {
    // ping
    const el = createA()
    expect(el.rel).toEqual('')
    setSpaceSeparated(el, 'rel', ['a', 'b', 'c'])
    expect(el.rel).toEqual('a b c')
    setSpaceSeparated(el, 'rel', [])
    expect(el.rel).toEqual('')
    setSpaceSeparated(el, 'rel', undefined)
    expect(el.rel).toEqual('')
  })
})
