import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { View } from '@mood/core/lib/view'
import { UnwrappedValue, WrappedDerivedValue } from '@mood/core/lib/value'
import { Acc, processAttribute, processEvent, processStyle, filterDynamics, domChildToTemplate } from './utils/dom'
import { DOMDynamicNodeView, DOMStaticNodeView } from './utils/node_view'
import { DOMAttributes } from './value'

export const applyMood = <State, El extends Element>(
  el: El,
  attr: UnwrappedValue<State, (el: El) => void> | WrappedDerivedValue<State, (el: El) => void>
) => (state: State) => {
  const f = (attr instanceof WrappedDerivedValue ? attr.resolve(state) : attr) as undefined | ((el: El) => void)
  /* istanbul ignore next */
  if (f != null) {
    f(el)
  }
}

export const maybeApplyMood = <State, El extends Element>(
  el: El,
  attr: UnwrappedValue<State, (el: El) => void> | WrappedDerivedValue<State, (el: El) => void> | undefined
) => (
  state: State
) => {
  if (attr != null) {
    applyMood(el, attr)(state)
  }
}

export class DOMElement<State, Action, El extends Element> implements DOMTemplate<State, Action> {
  constructor(
    readonly createElement: (doc: Document) => El,
    readonly attributes: DOMAttributes<State, Action, El>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State> {
    const el = this.createElement(ctx.doc)

    const {
      attrs,
      events,
      styles,
      afterrender,
      beforechange,
      afterchange,
      beforedestroy
    } = this.attributes

    const beforedestroyf = beforedestroy && (() => beforedestroy(el))

    const allDynamics = [] as ((state: State) => void)[]

    if (attrs) {
      const dynamics = Object.keys(attrs).reduce(
        (acc: Acc<State>, key: keyof typeof attrs) =>
          processAttribute(el, key, attrs[key], acc),
          []
      )
      for (const dy of dynamics) dy(state)
      allDynamics.push(...dynamics)
    }

    if (events) {
      const dynamics = Object.keys(events).reduce(
        (acc: Acc<State>, key: keyof typeof events) =>
          processEvent(el, key, events[key], ctx.dispatch, acc),
          []
      )
      for (const dy of dynamics) dy(state)
      allDynamics.push(...dynamics)
    }

    if (styles) {
      const dynamics = Object.keys(styles).reduce(
        (acc: Acc<State>, key: keyof typeof styles) =>
          processStyle(el, key, styles[key], acc),
          []
      )
      for (const dy of dynamics) dy(state)
      allDynamics.push(...dynamics)
    }

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const newCtx = ctx.withAppend(appendChild).withParent(el)
    const views = this.children.map(child => child.render(newCtx, state))

    ctx.append(el)

    maybeApplyMood(el, afterrender)(state)

    const dynamicChildren = filterDynamics(views).map(child => (state: State) => child.change(state))

    allDynamics.push(...dynamicChildren)

    if (beforechange) {
      allDynamics.unshift(applyMood(el, beforechange))
    }

    if (afterchange) {
      allDynamics.push(applyMood(el, afterchange))
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

export const el = <State, Action, El extends Element>(
  name: string,
  attributes: DOMAttributes<State, Action, El>,
  ...children: DOMChild<State, Action>[]
) => {
  return new DOMElement<State, Action, El>(
    makeCreateElement(name),
    attributes,
    children.map(domChildToTemplate)
  )
}

export const el2 = <El extends Element>(name: string) => <State, Action>(
  attributes: DOMAttributes<State, Action, El>,
  ...children: DOMChild<State, Action>[]) => {
    return new DOMElement<State, Action, El>(
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

export const elNS = <State, Action, El extends Element>(
  ns: string,
  name: string,
  attributes: DOMAttributes<State, Action, El>,
  ...children: DOMChild<State, Action>[]
) => {
  const namespace = defaultNamespaces[ns] || ns
  return new DOMElement<State, Action, El>(
    makeCreateElementNS(namespace, name),
    attributes,
    children.map(domChildToTemplate)
  )
}

export const elNS2 = <El extends Element>(namespace: string, name: string) => <State, Action>(
  attributes: DOMAttributes<State, Action, El>,
  ...children: DOMChild<State, Action>[]) => {
    return new DOMElement<State, Action, El>(
      makeCreateElementNS(namespace, name),
      attributes,
      children.map(domChildToTemplate)
    )
  }
