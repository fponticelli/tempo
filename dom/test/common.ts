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

import { JSDOM } from 'jsdom'
import { DOMContext } from '../src/context'

export function getWindow(): Window {
  const dom = new JSDOM(`<!DOCTYPE html>`)
  return dom.window
}

export function createContext<Action>(dispatch?: (action: Action) => void): DOMContext<Action> {
  const { document } = getWindow()
  return new DOMContext(
    document,
    (node: Node) => document.body.appendChild(node),
    document.body,
    dispatch || (() => {})
  )
}

export function createDiv() {
  return getWindow().document.createElement('div')
}

export function createA() {
  return getWindow().document.createElement('a')
}

export function createImg() {
  return getWindow().document.createElement('img')
}

export function createInput(type = 'text') {
  const el = getWindow().document.createElement('input')
  el.setAttribute('type', type)
  return el
}

export function createTextInput() {
  const input = getWindow().document.createElement('input')
  input.type = 'text'
  return input
}
