import { DOMContext } from '../context'
import {
  Attribute,
  AttributeValue,
  EventHandler,
  StyleAttribute
} from '../value'
import { map } from 'tempo-std/lib/arrays'
import { attributeNameMap } from '../utils/attributes_mapper'

export function applyChange<State, Action, T>(
  change: (
    state: State,
    el: HTMLElement,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => T | undefined,
  el: HTMLElement,
  ctx: DOMContext<Action>
) {
  return (state: State, value: T | undefined): T | undefined => {
    return change(state, el, ctx, value)
  }
}

export function applyAfterRender<State, Action, T>(
  attr: (
    state: State,
    el: HTMLElement,
    ctx: DOMContext<Action>
  ) => T | undefined,
  el: HTMLElement,
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

export function extractEvents<State, Action>(
  attrs: Record<string, EventHandler<State, Action>> | undefined
): { name: string; value: EventHandler<State, Action> }[] {
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

export function makeCreateElement(name: string) {
  return (doc: Document) => (doc.createElement(name) as any) as HTMLElement
}

export function makeCreateElementNS(namespace: string, name: string) {
  return (doc: Document) => doc.createElementNS(namespace, name) as HTMLElement // TODO
}

export const defaultNamespaces: Record<string, string> = {
  svg: 'http://www.w3.org/2000/svg'
}
