import { JSDOM } from 'jsdom'
import { DOMContext } from '../../src/dom/context'

export const getWindow = (): Window => {
  const dom = new JSDOM(`<!DOCTYPE html>`)
  return dom.window
}

export const createContext = <Action>(): DOMContext<Action> => {
  const { document } = getWindow()
  return new DOMContext(
    document,
    (node: Node) => document.body.appendChild(node),
    document.body,
    (action: Action) => {
      console.log(action)
    }
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
