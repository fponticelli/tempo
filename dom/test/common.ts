/*
Copyright 2018 Google LLC
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

export const getWindow = (): Window => {
  const dom = new JSDOM(`<!DOCTYPE html>`)
  return dom.window
}

export const createContext = <Action>(dispatch?: (action: Action) => void): DOMContext<Action> => {
  const { document } = getWindow()
  return new DOMContext(
    document,
    (node: Node) => document.body.appendChild(node),
    document.body,
    dispatch || (() => {})
  )
}

export const createDiv = () => {
  return getWindow().document.createElement('div')
}

export const createA = () => {
  return getWindow().document.createElement('a')
}

export const createImg = () => {
  return getWindow().document.createElement('img')
}

export const createInput = (type = 'text') => {
  const el = getWindow().document.createElement('input')
  el.setAttribute('type', type)
  return el
}

export const createTextInput = () => {
  const input = getWindow().document.createElement('input')
  input.type = 'text'
  return input
}
