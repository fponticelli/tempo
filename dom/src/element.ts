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
import {
  processAttribute,
  processEvent,
  processStyle,
  domChildToTemplate,
  removeNode
} from './utils/dom'
import {
  Props,
  Attribute,
  AttributeValue,
  EventHandler,
  StyleAttribute
} from './value'
import { map } from 'tempo-std/lib/arrays'

import { attributeNameMap } from './utils/attributes_mapper'
import { MakeLifecycle } from './lifecycle'

export class DOMElement<State, Action, Query = unknown>
  implements DOMTemplate<State, Action, Query> {
  constructor(
    public createElement: (doc: Document) => HTMLElement,
    public attrs: { name: string; value: Attribute<State, AttributeValue> }[],
    public events: {
      name: string
      value: EventHandler<State, Action>
    }[],
    public styles: { name: string; value: StyleAttribute<State, string> }[],
    public makeLifecycle: MakeLifecycle<State, Action>,
    public respond:
      | undefined
      | ((query: Query, el: HTMLElement, ctx: DOMContext<Action>) => void),
    public children: DOMTemplate<State, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    const el = this.createElement(ctx.doc)

    const allChanges = [] as ((state: State) => void)[]

    for (const o of this.attrs)
      processAttribute(el, o.name, o.value, allChanges)

    for (const o of this.events)
      processEvent(el, o.name, o.value, ctx.dispatch, allChanges)

    for (const o of this.styles) processStyle(el, o.name, o.value, allChanges)

    for (const change of allChanges) change(state)

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const newCtx = ctx.withAppend(appendChild).withParent(el)
    const views = map(this.children, child => child.render(newCtx, state))

    ctx.append(el)

    const lifecycle = this.makeLifecycle(state, el, ctx)

    const viewChanges = map(views, child => (state: State) =>
      child.change(state)
    )

    allChanges.push(...viewChanges)

    const { respond } = this

    return {
      change: (state: State) => {
        lifecycle.beforeChange(state)
        for (const change of allChanges) change(state)
        lifecycle.afterChange(state)
      },
      destroy: () => {
        lifecycle.beforeDestroy()
        removeNode(el)
        for (const view of views) view.destroy()
      },
      request: (query: Query) => {
        if (respond) {
          respond(query, el, ctx)
        }
        for (const view of views) {
          view.request(query)
        }
      }
    }
  }
}

function extractAttrs<State>(
  attrs: Record<string, Attribute<State, AttributeValue>> | undefined
): {
  name: string
  value: Attribute<State, AttributeValue>
}[] {
  return map(Object.keys(attrs || {}), attName => {
    let name = attName // .toLowerCase()
    name = attributeNameMap[name] || name
    return {
      name,
      value: attrs![attName]
    }
  })
}

function extractEvents<State, Action>(
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

function extractStyles<State>(
  attrs: Record<string, StyleAttribute<State, string>> | undefined
): { name: string; value: StyleAttribute<State, string> }[] {
  return map(Object.keys(attrs || {}), name => ({
    name,
    value: attrs![name]
  }))
}

const makeCreateElement = (name: string) => (doc: Document) =>
  doc.createElement(name)

export function el<State, Action, Query = unknown>(
  name: string,
  props: Props<State, Action, Query>,
  ...children: DOMChild<State, Action, Query>[]
) {
  return new DOMElement<State, Action, Query>(
    makeCreateElement(name),
    extractAttrs(props.attrs),
    extractEvents(props.events),
    extractStyles(props.styles),
    props.lifecycle ?? (() => defaultLifecycle),
    props.respond,
    map(children, domChildToTemplate)
  )
}

export function el2(name: string) {
  return function <State, Action, Query = unknown>(
    props: Props<State, Action, Query>,
    ...children: DOMChild<State, Action, Query>[]
  ) {
    return new DOMElement<State, Action, Query>(
      makeCreateElement(name),
      extractAttrs(props.attrs),
      extractEvents(props.events),
      extractStyles(props.styles),
      props.lifecycle ?? (() => defaultLifecycle),
      props.respond,
      map(children, domChildToTemplate)
    )
  }
}

export const defaultNamespaces: Record<string, string> = {
  svg: 'http://www.w3.org/2000/svg'
}

const makeCreateElementNS = (namespace: string, name: string) => (
  doc: Document
) => doc.createElementNS(namespace, name) as HTMLElement // TODO

export function elNS<State, Action, Query = unknown>(
  ns: string,
  name: string,
  props: Props<State, Action, Query>,
  ...children: DOMChild<State, Action, Query>[]
) {
  const namespace = defaultNamespaces[ns] || ns
  return new DOMElement<State, Action, Query>(
    makeCreateElementNS(namespace, name),
    extractAttrs(props.attrs),
    extractEvents(props.events),
    extractStyles(props.styles),
    props.lifecycle ?? (() => defaultLifecycle),
    props.respond,
    map(children, domChildToTemplate)
  )
}

const defaultLifecycle = {
  beforeChange: () => {},
  afterChange: () => {},
  beforeDestroy: () => {}
}

export function elNS2(namespace: string, name: string) {
  return function <State, Action, Query = unknown>(
    props: Props<State, Action, Query>,
    ...children: DOMChild<State, Action, Query>[]
  ) {
    return new DOMElement<State, Action, Query>(
      makeCreateElementNS(namespace, name),
      extractAttrs(props.attrs),
      extractEvents(props.events),
      extractStyles(props.styles),
      props.lifecycle ?? (() => defaultLifecycle),
      props.respond,
      map(children, domChildToTemplate)
    )
  }
}
