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

import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { View } from '@mood/core/lib/view'
import { processAttribute, processEvent, processStyle, filterDynamics, domChildToTemplate } from './utils/dom'
import { DOMDynamicNodeView, DOMStaticNodeView } from './node_view'
import { DOMAttributes } from './value'

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
  if (attr != null) {
    return attr(state, el, ctx)
  } else {
    return undefined
  }
}

export class DOMElement<State, Action, El extends Element = Element, T = unknown> implements DOMTemplate<State, Action> {
  constructor(
    readonly createElement: (doc: Document) => El,
    readonly attributes: DOMAttributes<State, Action, El, T>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State> {
    const el = this.createElement(ctx.doc)
    let value: T | undefined = undefined

    const {
      attrs,
      events,
      styles,
      afterrender,
      beforechange,
      afterchange,
      beforedestroy
    } = this.attributes

    const beforedestroyf = beforedestroy && (() => beforedestroy(el, ctx, value))

    const allDynamics = [] as ((state: State) => void)[]

    if (attrs) {
      Object.keys(attrs).forEach(
        (key: keyof typeof attrs) => processAttribute(el, key, attrs[key], allDynamics)
      )
    }

    if (events) {
      Object.keys(events).forEach(
        (key: keyof typeof events) => processEvent(el, key, events[key], ctx.dispatch, allDynamics)
      )
    }

    if (styles) {
      Object.keys(styles).forEach(
        (key: keyof typeof styles) => processStyle(el, key, styles[key], allDynamics)
      )
    }

    for (const dy of allDynamics) dy(state)

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const newCtx = ctx.withAppend(appendChild).withParent(el)
    const views = this.children.map(child => child.render(newCtx, state))

    ctx.append(el)

    if (afterrender) {
      value = applyAfterRender(afterrender, el, ctx, state)
    }

    const dynamicChildren = filterDynamics(views).map(child => (state: State) => child.change(state))

    allDynamics.push(...dynamicChildren)

    if (beforechange) {
      const change = applyChange(beforechange, el, ctx)
      const update = (state: State) => { value = change(state, value) }
      allDynamics.unshift(update)
    }

    if (afterchange) {
      const change = applyChange(afterchange, el, ctx)
      const update = (state: State) => { value = change(state, value) }
      allDynamics.push(update)
    }

    if (allDynamics.length > 0) {
      return new DOMDynamicNodeView(el, views, (state: State) => {
        for (const f of allDynamics) f(state)
      }, beforedestroyf)
    } else {
      return new DOMStaticNodeView(el, views, beforedestroyf)
    }
  }
}

const makeCreateElement = <El extends Element>(name: string) => (doc: Document) => doc.createElement(name) as any as El

export const el = <State, Action, El extends Element, T = unknown>(
  name: string,
  attributes: DOMAttributes<State, Action, El, T>,
  ...children: DOMChild<State, Action>[]
) => {
  return new DOMElement<State, Action, El, T>(
    makeCreateElement(name),
    attributes,
    children.map(domChildToTemplate)
  )
}

export const el2 = <El extends Element>(name: string) => <State, Action, T = unknown>(
  attributes: DOMAttributes<State, Action, El, T>,
  ...children: DOMChild<State, Action>[]) => {
    return new DOMElement<State, Action, El, T>(
      makeCreateElement(name),
      attributes,
      children.map(domChildToTemplate)
    )
  }

export const defaultNamespaces: Record<string, string> = {
  'svg': 'http://www.w3.org/2000/svg'
}

const makeCreateElementNS = <El extends Element>(namespace: string, name: string) =>
  (doc: Document) => doc.createElementNS(namespace, name) as any as El

export const elNS = <State, Action, El extends Element, T = unknown>(
  ns: string,
  name: string,
  attributes: DOMAttributes<State, Action, El, T>,
  ...children: DOMChild<State, Action>[]
) => {
  const namespace = defaultNamespaces[ns] || ns
  return new DOMElement<State, Action, El, T>(
    makeCreateElementNS(namespace, name),
    attributes,
    children.map(domChildToTemplate)
  )
}

export const elNS2 = <El extends Element>(namespace: string, name: string) => <State, Action, T = unknown>(
  attributes: DOMAttributes<State, Action, El, T>,
  ...children: DOMChild<State, Action>[]) => {
    return new DOMElement<State, Action, El, T>(
      makeCreateElementNS(namespace, name),
      attributes,
      children.map(domChildToTemplate)
    )
  }
