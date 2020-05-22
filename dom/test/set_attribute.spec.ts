/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {
  createDiv,
  createTextInput,
  createA,
  createImg,
  createInput
} from './common'
import {
  setAttribute,
  setOneStyle,
  setEnumBoolAttribute,
  setCommaSeparated,
  setSpaceSeparated,
  setBoolAttribute,
  setBoolProperty,
  setStyleAttribute,
  setProperty
} from '../src/utils/set_attribute'

describe('set_attribute', () => {
  it('setAttribute', () => {
    const el = createDiv()
    setAttribute(el, 'id', 'main')
    expect(el.id).toEqual('main')
    setAttribute(el, 'id', null as any)
    expect(el.id).toEqual('')
    setAttribute(el, 'id', 'a')
    setAttribute(el, 'id', 'a')
    expect(el.id).toEqual('a')
    setAttribute(el, 'id', undefined as any)
    expect(el.id).toEqual('')
  })

  it('seOneStyle', () => {
    const el = createDiv()
    expect(el.style.backgroundColor).toEqual('')
    setOneStyle(el, 'backgroundColor', 'rgb(204, 204, 204)')
    expect(el.style.backgroundColor).toEqual('rgb(204, 204, 204)')
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
    const el = createA()
    expect(el.rel).toEqual('')
    setSpaceSeparated(el, 'rel', ['a', 'b', 'c'])
    expect(el.rel).toEqual('a b c')
    setSpaceSeparated(el, 'rel', [])
    expect(el.rel).toEqual('')
    setSpaceSeparated(el, 'rel', undefined)
    expect(el.rel).toEqual('')
  })

  it('setCommaSeparated', () => {
    const el = createImg()
    setCommaSeparated(el, 'srcset', ['a', 'b', 'c'])
    expect(el.srcset).toEqual('a, b, c')
    setCommaSeparated(el, 'srcset', null as any)
    expect(el.srcset).toEqual('')
  })

  it('setBoolProperty', () => {
    const el = createInput('checkbox')
    expect(el.checked).toEqual(false)
    setBoolProperty(el, 'checked', true)
    expect(el.checked).toEqual(true)
    setBoolProperty(el, 'checked', true)
    expect(el.checked).toEqual(true)
    setBoolProperty(el, 'checked', false)
    expect(el.checked).toEqual(false)
    setBoolProperty(el, 'checked', null as any)
    expect(el.checked).toEqual(false)
  })

  it('setProperty', () => {
    const el = createInput('text')
    expect(el.value).toEqual('')
    setProperty(el, 'value', 'a')
    expect(el.value).toEqual('a')
    setProperty(el, 'value', 'a')
    expect(el.value).toEqual('a')
    setProperty(el, 'value', 'b')
    expect(el.value).toEqual('b')
    setProperty(el, 'value', null as any)
    expect(el.value).toEqual('')
  })

  it('setStyle', () => {
    const el = createDiv()
    expect(el.getAttribute('style')).toBeNull()
    setStyleAttribute(el, 'style', null as any)
    expect(el.getAttribute('style')).toBeNull()
    setStyleAttribute(el, 'style', {})
    expect(el.getAttribute('style')).toBeNull()
    setStyleAttribute(el, 'style', { 'background-color': 'rgb(1,2,3)' })
    expect(el.getAttribute('style')).toEqual('background-color: rgb(1,2,3);')
    setStyleAttribute(el, 'style', {
      'font-weight': 'bold',
      'font-size': '10px',
      border: '1px solid red'
    })
    expect(el.getAttribute('style')).toEqual(
      'font-weight: bold; font-size: 10px; border: 1px solid red;'
    )
    setStyleAttribute(el, 'style', null as any)
    expect(el.getAttribute('style')).toBeNull()
  })
})
