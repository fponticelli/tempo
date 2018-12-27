import { JSDOM } from 'jsdom'
import { DOMContext } from '../../src/dom/context'

export const getWindow = (): Window => {
  const dom = new JSDOM(`<!DOCTYPE html>`)
  return dom.window
}

export const createContext = (): DOMContext => {
  const { document } = getWindow()
  return {
    append: (node: Node) => document.body.appendChild(node),
    doc: document,
    parent: document.body
  }
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
