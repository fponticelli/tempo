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

import { createDiv, createInput } from './common'
import {
  setAttribute,
  setBoolProperty,
  setProperty
} from '../src/impl/set_attribute'
import { setElStyle } from '../src/impl/dom'

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
    setElStyle(el, 'background-color', 'rgb(204, 204, 204)')
    expect(el.style.backgroundColor).toEqual('rgb(204, 204, 204)')
    setElStyle(el, 'background-color', 'rgb(204, 204, 204)')
    expect(el.style.backgroundColor).toEqual('rgb(204, 204, 204)')
    setElStyle(el, 'background-color', 'rgb(199, 199, 199)')
    expect(el.style.backgroundColor).toEqual('rgb(199, 199, 199)')
    setElStyle(el, 'background-color', undefined)
    expect(el.style.backgroundColor).toEqual('')
  })

  it('setBoolProperty', () => {
    const el = createInput('checkbox')
    expect(el.checked).toEqual(false)
    setBoolProperty(el, 'checked', 'checked')
    expect(el.checked).toEqual(true)
    setBoolProperty(el, 'checked', 'checked')
    expect(el.checked).toEqual(true)
    setBoolProperty(el, 'checked', undefined)
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
})
