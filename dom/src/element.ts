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

const applyChange = <State, Action, El extends Element, T>(
  change: (
    state: State,
    el: El,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => T | undefined,
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

export class DOMElement<
  State,
  Action,
  Query = unknown,
  El extends Element = Element,
  T = unknown
> implements DOMTemplate<State, Action, Query> {
  constructor(
    public createElement: (doc: Document) => El,
    public attrs: { name: string; value: Attribute<State, AttributeValue> }[],
    public events: {
      name: string
      value: EventHandler<State, Action, any, El>
    }[],
    public styles: { name: string; value: StyleAttribute<State, string> }[],
    public afterrender:
      | undefined
      | ((state: State, el: El, ctx: DOMContext<Action>) => T | undefined),
    public beforechange:
      | undefined
      | ((
          state: State,
          el: El,
          ctx: DOMContext<Action>,
          value: T | undefined
        ) => T | undefined),
    public afterchange:
      | undefined
      | ((
          state: State,
          el: El,
          ctx: DOMContext<Action>,
          value: T | undefined
        ) => T | undefined),
    public beforedestroy:
      | undefined
      | ((el: El, ctx: DOMContext<Action>, value: T | undefined) => void),
    public respond:
      | undefined
      | ((
          query: Query,
          el: El,
          ctx: DOMContext<Action>,
          value: T | undefined
        ) => T | undefined),
    public children: DOMTemplate<State, Action, Query>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State, Query> {
    const el = this.createElement(ctx.doc)
    let value: T | undefined = undefined

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

    if (this.afterrender) {
      value = applyAfterRender(this.afterrender, el, ctx, state)
    }

    const viewChanges = map(views, child => (state: State) =>
      child.change(state)
    )

    allChanges.push(...viewChanges)

    if (this.beforechange) {
      const change = applyChange(this.beforechange, el, ctx)
      const update = (state: State) => {
        value = change(state, value)
      }
      allChanges.unshift(update)
    }

    if (this.afterchange) {
      const change = applyChange(this.afterchange, el, ctx)
      const update = (state: State) => {
        value = change(state, value)
      }
      allChanges.push(update)
    }

    const beforedestroyf =
      this.beforedestroy && (() => this.beforedestroy!(el, ctx, value))
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

function extractEvents<State, Action, El extends Element>(
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

function extractStyles<State>(
  attrs: Record<string, StyleAttribute<State, string>> | undefined
): { name: string; value: StyleAttribute<State, string> }[] {
  return map(Object.keys(attrs || {}), name => ({
    name,
    value: attrs![name]
  }))
}

const makeCreateElement = <El extends Element>(name: string) => (
  doc: Document
) => (doc.createElement(name) as any) as El

export function el<
  State,
  Action,
  Query = unknown,
  El extends Element = Element,
  T = unknown
>(
  name: string,
  props: Props<State, Action, Query, El, T>,
  ...children: DOMChild<State, Action, Query>[]
) {
  return new DOMElement<State, Action, Query, El, T>(
    makeCreateElement(name),
    extractAttrs(props.attrs),
    extractEvents(props.events),
    extractStyles(props.styles),
    props.afterrender,
    props.beforechange,
    props.afterchange,
    props.beforedestroy,
    props.respond,
    map(children, domChildToTemplate)
  )
}

export function el2<El extends Element>(name: string) {
  return function<State, Action, Query = unknown, T = unknown>(
    props: Props<State, Action, Query, El, T>,
    ...children: DOMChild<State, Action, Query>[]
  ) {
    return new DOMElement<State, Action, Query, El, T>(
      makeCreateElement(name),
      extractAttrs(props.attrs),
      extractEvents(props.events),
      extractStyles(props.styles),
      props.afterrender,
      props.beforechange,
      props.afterchange,
      props.beforedestroy,
      props.respond,
      map(children, domChildToTemplate)
    )
  }
}

export const defaultNamespaces: Record<string, string> = {
  svg: 'http://www.w3.org/2000/svg'
}

const makeCreateElementNS = <El extends Element>(
  namespace: string,
  name: string
) => (doc: Document) => (doc.createElementNS(namespace, name) as any) as El

export function elNS<
  State,
  Action,
  Query = unknown,
  El extends Element = Element,
  T = unknown
>(
  ns: string,
  name: string,
  props: Props<State, Action, Query, El, T>,
  ...children: DOMChild<State, Action, Query>[]
) {
  const namespace = defaultNamespaces[ns] || ns
  return new DOMElement<State, Action, Query, El, T>(
    makeCreateElementNS(namespace, name),
    extractAttrs(props.attrs),
    extractEvents(props.events),
    extractStyles(props.styles),
    props.afterrender,
    props.beforechange,
    props.afterchange,
    props.beforedestroy,
    props.respond,
    map(children, domChildToTemplate)
  )
}

export function elNS2<El extends Element>(namespace: string, name: string) {
  return function<State, Action, Query = unknown, T = unknown>(
    props: Props<State, Action, Query, El, T>,
    ...children: DOMChild<State, Action, Query>[]
  ) {
    return new DOMElement<State, Action, Query, El, T>(
      makeCreateElementNS(namespace, name),
      extractAttrs(props.attrs),
      extractEvents(props.events),
      extractStyles(props.styles),
      props.afterrender,
      props.beforechange,
      props.afterchange,
      props.beforedestroy,
      props.respond,
      map(children, domChildToTemplate)
    )
  }
}
