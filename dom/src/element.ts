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

import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { View } from 'tempo-core/lib/view'
import { processAttribute, processEvent, processStyle, domChildToTemplate, removeNode } from './utils/dom'
import { DOMAttributes, DOMAttribute, AttributeValue, DOMEventHandler, DOMStyleAttribute } from './value'
import { map } from 'tempo-std/lib/arrays'
import { attributeNameMap } from './dom_attributes_mapper'

const applyChange = <State, Action, El extends Element, T>(
  change: (state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined,
  el: El,
  ctx: DOMContext<Action>
) => (state: State, value: T | undefined): T | undefined => {
  return change(state, el, ctx, value)
}

const applyAfterRender = <State, Action, El extends Element, T>(
  attr: (state: State, el: El, ctx: DOMContext<Action>) => T | undefined,
  el: El,
  ctx: DOMContext<Action>,
  state: State
) => {
  if (typeof attr !== undefined) {
    return attr(state, el, ctx)
  } else {
    return undefined
  }
}

export class DOMElement<State, Action, Query = unknown, El extends Element = Element, T = unknown>
    implements DOMTemplate<State, Action, Query> {
  constructor(
    public createElement: (doc: Document) => El,
    public attrs: { name: string, value: DOMAttribute<State, AttributeValue>}[],
    public events: { name: string, value: DOMEventHandler<State, Action, any, El>}[],
    public styles: { name: string, value: DOMStyleAttribute<State, string>}[],
    public afterrender:  undefined | ((state: State, el: El, ctx: DOMContext<Action>) => T | undefined),
    public beforechange: undefined | ((state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined),
    public afterchange:  undefined | ((state: State, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined),
    public beforedestroy: undefined | (((el: El, ctx: DOMContext<Action>, value: T | undefined) => void)),
    public respond: undefined | ((query: Query, el: El, ctx: DOMContext<Action>, value: T | undefined) => T | undefined),
    public children: DOMTemplate<State, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    const el = this.createElement(ctx.doc)
    let value: T | undefined = undefined

    const allChanges = [] as ((state: State) => void)[]

    for (const o of this.attrs) processAttribute(el, o.name, o.value, allChanges)

    for (const o of this.events) processEvent(el, o.name, o.value, ctx.dispatch, allChanges)

    for (const o of this.styles) processStyle(el, o.name, o.value, allChanges)

    for (const change of allChanges) change(state)

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const newCtx = ctx.withAppend(appendChild).withParent(el)
    const views = map(child => child.render(newCtx, state), this.children)

    ctx.append(el)

    if (this.afterrender) {
      value = applyAfterRender(this.afterrender, el, ctx, state)
    }

    const viewChanges = map(child => (state: State) => child.change(state), views)

    allChanges.push(...viewChanges)

    if (this.beforechange) {
      const change = applyChange(this.beforechange, el, ctx)
      const update = (state: State) => { value = change(state, value) }
      allChanges.unshift(update)
    }

    if (this.afterchange) {
      const change = applyChange(this.afterchange, el, ctx)
      const update = (state: State) => { value = change(state, value) }
      allChanges.push(update)
    }

    const beforedestroyf = this.beforedestroy && (() => this.beforedestroy!(el, ctx, value))
    const { respond } = this

    return {
      change: (state: State) => {
        for (const change of allChanges) change(state)
      },
      destroy: () => {
        if (beforedestroyf) beforedestroyf()
        removeNode(el)
        for (const view of views) view.destroy()
      },
      request: (query: Query) => {
        if (respond) {
          value = respond(query, el, ctx, value)
        }
        for (const view of views) {
          view.request(query)
        }
      }
    }
  }
}

function extractAttrs<State>(
  attrs: Record<string, DOMAttribute<State, AttributeValue>> | undefined
): {
  name: string,
  value: DOMAttribute<State, AttributeValue>
}[] {
  return map(attName =>  {
    let name = attName.toLowerCase()
    name = attributeNameMap[name] || name
    return {
      name,
      value: attrs![attName]
    }
  }, Object.keys(attrs || {}))
}

function extractEvents<State, Action, El extends Element>(
  attrs: Record<string, DOMEventHandler<State, Action, any, El>> | undefined
): { name: string, value: DOMEventHandler<State, Action, any, El>}[] {
  return map(eventName => {
    let name = `on${eventName.toLowerCase()}`
    return {
      name,
      value: attrs![eventName]
    }
  }, Object.keys(attrs || {}))
}

function extractStyles<State>(
  attrs: Record<string, DOMStyleAttribute<State, string>> | undefined
): { name: string, value: DOMStyleAttribute<State, string>}[] {
  return map(name => ({
    name,
    value: attrs![name]
  }), Object.keys(attrs || {}))
}

const makeCreateElement = <El extends Element>(name: string) => (doc: Document) => doc.createElement(name) as any as El

export const el = <State, Action, Query = unknown, El extends Element = Element, T = unknown>(
  name: string,
  attributes: DOMAttributes<State, Action, Query, El, T>,
  ...children: DOMChild<State, Action, Query>[]
) => {
  return new DOMElement<State, Action, Query, El, T>(
    makeCreateElement(name),
    extractAttrs(attributes.attrs),
    extractEvents(attributes.events),
    extractStyles(attributes.styles),
    attributes.afterrender,
    attributes.beforechange,
    attributes.afterchange,
    attributes.beforedestroy,
    attributes.respond,
    map(domChildToTemplate, children)
  )
}

export const el2 = <El extends Element>(name: string) => <State, Action, Query = unknown, T = unknown>(
  attributes: DOMAttributes<State, Action, Query, El, T>,
  ...children: DOMChild<State, Action, Query>[]) => {
    return new DOMElement<State, Action, Query, El, T>(
      makeCreateElement(name),
      extractAttrs(attributes.attrs),
      extractEvents(attributes.events),
      extractStyles(attributes.styles),
      attributes.afterrender,
      attributes.beforechange,
      attributes.afterchange,
      attributes.beforedestroy,
      attributes.respond,
      map(domChildToTemplate, children)
    )
  }

export const defaultNamespaces: Record<string, string> = {
  'svg': 'http://www.w3.org/2000/svg'
}

const makeCreateElementNS = <El extends Element>(namespace: string, name: string) =>
  (doc: Document) => doc.createElementNS(namespace, name) as any as El

export const elNS = <State, Action, Query = unknown, El extends Element = Element, T = unknown>(
  ns: string,
  name: string,
  attributes: DOMAttributes<State, Action, Query, El, T>,
  ...children: DOMChild<State, Action, Query>[]
) => {
  const namespace = defaultNamespaces[ns] || ns
  return new DOMElement<State, Action, Query, El, T>(
    makeCreateElementNS(namespace, name),
    extractAttrs(attributes.attrs),
    extractEvents(attributes.events),
    extractStyles(attributes.styles),
    attributes.afterrender,
    attributes.beforechange,
    attributes.afterchange,
    attributes.beforedestroy,
    attributes.respond,
    map(domChildToTemplate, children)
  )
}

export const elNS2 = <El extends Element>(namespace: string, name: string) => <State, Action, Query = unknown, T = unknown>(
  attributes: DOMAttributes<State, Action, Query, El, T>,
  ...children: DOMChild<State, Action, Query>[]) => {
    return new DOMElement<State, Action, Query, El, T>(
      makeCreateElementNS(namespace, name),
      extractAttrs(attributes.attrs),
      extractEvents(attributes.events),
      extractStyles(attributes.styles),
      attributes.afterrender,
      attributes.beforechange,
      attributes.afterchange,
      attributes.beforedestroy,
      attributes.respond,
      map(domChildToTemplate, children)
    )
  }
