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

import { DOMTemplate, DOMChild } from 'tempo-dom/lib/template'
import {
  applyAfterRender,
  applyChange,
  makeCreateElement,
  defaultNamespaces,
  makeCreateElementNS,
  extractEvents
} from 'tempo-dom/lib/impl/apply_element'
import { DOMContext } from 'tempo-dom/lib/context'
import { View } from 'tempo-core/lib/view'
import {
  processEvent,
  domChildToTemplate,
  removeNode
} from 'tempo-dom/lib/utils/dom'
import { Attribute, EventHandler } from 'tempo-dom/lib/value'
import { map } from 'tempo-std/lib/arrays'
import { keys } from 'tempo-std/lib/objects'

function applyAttributes(
  el: HTMLElement,
  attributes: { classes: string[]; styles: Record<string, string> } | undefined
) {
  if (typeof attributes === 'undefined') return
  const { classes, styles } = attributes
  el.className = classes.join(' ')
  keys(styles).forEach(k => {
    el.style.setProperty(`--${k}`, styles[k])
  })
}

function processAttributes<State>(
  el: HTMLElement,
  attributes: Attribute<
    State,
    { classes: string[]; styles: Record<string, string> }
  >,
  changes: ((state: State) => void)[]
) {
  if (typeof attributes === 'function') {
    changes.push(state => applyAttributes(el, attributes(state)))
  } else {
    applyAttributes(el, attributes)
  }
}

function resetStyles(el: HTMLElement) {
  // fastest way to achieve resetting CSS variables
  el.setAttribute('style', '')
}

export class DOMUIElement<
  State,
  Action,
  Query = unknown,
  El extends HTMLElement = HTMLElement,
  T = unknown
> implements DOMTemplate<State, Action, Query> {
  constructor(
    public createElement: (doc: Document) => El,
    public attrsf:
      | ((
          doc: Document
        ) => Attribute<
          State,
          { classes: string[]; styles: Record<string, string> }
        >)
      | undefined,
    public events: {
      name: string
      value: EventHandler<State, Action, any, El>
    }[],
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

    processAttributes(el, this.attrsf && this.attrsf(ctx.doc), allChanges)

    for (const o of this.events)
      processEvent(el, o.name, o.value, ctx.dispatch, allChanges)

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
        resetStyles(el)
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

export interface UIProps<
  State,
  Action,
  Query = unknown,
  El extends Element = Element,
  T = unknown
> {
  attrsf?: (
    doc: Document
  ) => Attribute<State, { classes: string[]; styles: Record<string, string> }>
  events?: Record<string, EventHandler<State, Action, any, El>>
  afterrender?: (state: State, el: El, ctx: DOMContext<Action>) => T | undefined
  beforechange?: (
    state: State,
    el: El,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => T | undefined
  afterchange?: (
    state: State,
    el: El,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => T | undefined
  beforedestroy?: (
    el: El,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => void
  respond?: (
    query: Query,
    el: El,
    ctx: DOMContext<Action>,
    value: T | undefined
  ) => T | undefined
}

export function el<
  State,
  Action,
  Query = unknown,
  El extends HTMLElement = HTMLElement,
  T = unknown
>(
  name: string,
  props: UIProps<State, Action, Query, El, T>,
  ...children: DOMChild<State, Action, Query>[]
) {
  return new DOMUIElement<State, Action, Query, El, T>(
    makeCreateElement(name),
    props.attrsf,
    extractEvents(props.events),
    props.afterrender,
    props.beforechange,
    props.afterchange,
    props.beforedestroy,
    props.respond,
    map(children, domChildToTemplate)
  )
}

export function elNS<
  State,
  Action,
  Query = unknown,
  El extends HTMLElement = HTMLElement,
  T = unknown
>(
  ns: string,
  name: string,
  props: UIProps<State, Action, Query, El, T>,
  ...children: DOMChild<State, Action, Query>[]
) {
  const namespace = defaultNamespaces[ns] || ns
  return new DOMUIElement<State, Action, Query, El, T>(
    makeCreateElementNS(namespace, name),
    props.attrsf,
    extractEvents(props.events),
    props.afterrender,
    props.beforechange,
    props.afterchange,
    props.beforedestroy,
    props.respond,
    map(children, domChildToTemplate)
  )
}
