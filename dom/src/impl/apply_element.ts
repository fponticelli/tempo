import { DOMContext } from '../context'
import {
  Attribute,
  AttributeValue,
  EventHandler,
  StyleAttribute
} from '../value'
import { map } from 'tempo-std/lib/arrays'
import { attributeNameMap } from '../utils/attributes_mapper'

export function applyChange<State, Action, El extends Element, T>(
  change: (
    state: State,
    el: El,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => T | undefined,
  el: El,
  ctx: DOMContext<Action>
) {
  return (state: State, value: T | undefined): T | undefined => {
    return change(state, el, ctx, value)
  }
}

export function applyAfterRender<State, Action, El extends Element, T>(
  attr: (state: State, el: El, ctx: DOMContext<Action>) => T | undefined,
  el: El,
  ctx: DOMContext<Action>,
  state: State
) {
  if (attr !== undefined) {
    return attr(state, el, ctx)
  } else {
    return undefined
  }
}

export function extractAttrs<State>(
  attrs: Record<string, Attribute<State, AttributeValue>> | undefined
): {
  name: string
  value: Attribute<State, AttributeValue>
}[] {
  return map(Object.keys(attrs || {}), attName => {
    let name = attName.toLowerCase()
    name = attributeNameMap[name] || name
    return {
      name,
      value: attrs![attName]
    }
  })
}

export function extractEvents<State, Action, El extends Element>(
  attrs: Record<string, EventHandler<State, Action, any, El>> | undefined
): { name: string; value: EventHandler<State, Action, any, El> }[] {
  return map(Object.keys(attrs || {}), eventName => {
    let name = `on${eventName.toLowerCase()}`
    return {
      name,
      value: attrs![eventName]
    }
  })
}

export function extractStyles<State>(
  attrs: Record<string, StyleAttribute<State, string>> | undefined
): { name: string; value: StyleAttribute<State, string> }[] {
  return map(Object.keys(attrs || {}), name => ({
    name,
    value: attrs![name]
  }))
}

export function makeCreateElement<El extends Element>(name: string) {
  return (doc: Document) => (doc.createElement(name) as any) as El
}

export function makeCreateElementNS<El extends Element>(
  namespace: string,
  name: string
) {
  return (doc: Document) => (doc.createElementNS(namespace, name) as any) as El
}

export const defaultNamespaces: Record<string, string> = {
  svg: 'http://www.w3.org/2000/svg'
}
