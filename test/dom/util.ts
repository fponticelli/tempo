import { JSDOM } from 'jsdom'
import { DOMContext } from '../../src/dom/dom_context'

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
