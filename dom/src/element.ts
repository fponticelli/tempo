import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { View } from '@mood/core/lib/view'
import { wrapLiteral, WrappedValue } from '@mood/core/lib/value'
import { DOMAttributes } from './dom_attributes'
import { Acc, processAttribute, filterDynamics, domChildToTemplate } from './utils/dom'
import { DOMDynamicNodeView, DOMStaticNodeView } from './utils/node_view'
import { DOMAttribute } from './value'

export const applyMood = <State>(el: Element, attr: WrappedValue<State, (el: any) => void>) => (state: State) => {
  const f = attr.resolve(state)
  /* istanbul ignore next */
  if (f != null) {
    f(el)
  }
}

export const maybeApplyMood = <State>(el: Element, attr: WrappedValue<State, (el: any) => void> | undefined) => (
  state: State
) => {
  if (attr != null) {
    applyMood(el, attr)(state)
  }
}

export const prepareAttributes = <State, Action, El>(attrs: DOMAttributes<State, Action, El>) => {
  const attributes = { ...attrs }

  const afterRender = attributes.moodAfterRender && wrapLiteral(attributes.moodAfterRender)
  const beforeChange = attributes.moodBeforeChange && wrapLiteral(attributes.moodBeforeChange)
  const afterChange = attributes.moodAfterChange && wrapLiteral(attributes.moodAfterChange)
  const beforeDestroyf = attributes.moodBeforeDestroy
  const beforeDestroy = beforeDestroyf && (() => beforeDestroyf(el as never))

  delete attributes.moodAfterRender
  delete attributes.moodBeforeChange
  delete attributes.moodAfterChange
  delete attributes.moodBeforeDestroy

  return { attributes, afterRender, beforeChange, afterChange, beforeDestroy }
}

export class DOMElement<State, Action, El> implements DOMTemplate<State, Action> {
  constructor(
    readonly createElement: (doc: Document) => Element,
    readonly attributes: DOMAttributes<State, Action, El>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State> {
    const el = this.createElement(ctx.doc)

    const { attributes, afterRender, beforeChange, afterChange, beforeDestroy } = prepareAttributes(this.attributes)

    const keys = Object.keys(attributes)

    const { statics, dynamics } = keys.reduce(
      (acc: Acc<State>, key: string) =>
        processAttribute(el, key, attributes[key] as DOMAttribute<State, any>, ctx.dispatch, acc),
      { statics: [], dynamics: [] }
    )

    ctx.append(el)

    // apply attributes
    for (const st of statics) st()
    for (const dy of dynamics) dy(state)

    // children
    const appendChild = (n: Node) => el.appendChild(n)
    const views = this.children.map(child => child.render(ctx.withAppend(appendChild).withParent(el), state))

    maybeApplyMood(el, afterRender)(state)

    const dynamicChildren = filterDynamics(views).map(child => (state: State) => child.change(state))

    const allDynamics = dynamics.concat(dynamicChildren)

    if (beforeChange) {
      allDynamics.unshift(applyMood(el, beforeChange))
    }

    if (afterChange) {
      allDynamics.push(applyMood(el, afterChange))
    }

    if (allDynamics.length > 0) {
      return new DOMDynamicNodeView(el, views, (state: State) => {
        for (const f of allDynamics) f(state)
      }, beforeDestroy)
    } else {
      return new DOMStaticNodeView(el, views, beforeDestroy)
    }
  }
}

const makeCreateElement = (name: string) => (doc: Document) => doc.createElement(name)

export const el = <State, Action, El>(
  name: string,
  attributes: DOMAttributes<State, Action, El>,
  ...children: DOMChild<State, Action>[]
) => {
  return new DOMElement<State, Action, El>(makeCreateElement(name), attributes, children.map(domChildToTemplate))
}

export const el2 = <El>(name: string) => <State, Action>(
  attributes: DOMAttributes<State, Action, El>,
  ...children: DOMChild<State, Action>[]) => {
    return new DOMElement<State, Action, El>(makeCreateElement(name), attributes, children.map(domChildToTemplate))
  }

export const defaultNamespaces: Record<string, string> = {
  'svg': 'http://www.w3.org/2000/svg'
}

const makeCreateElementNS = (namespace: string, name: string) => (doc: Document) => doc.createElementNS(namespace, name)

export const elNS = <State, Action, El>(
  ns: string,
  name: string,
  attributes: DOMAttributes<State, Action, El>,
  ...children: DOMChild<State, Action>[]
) => {
  const namespace = defaultNamespaces[ns] || ns
  return new DOMElement<State, Action, El>(makeCreateElementNS(namespace, name), attributes, children.map(domChildToTemplate))
}

export const elNS2 = <El>(namespace: string, name: string) => <State, Action>(
  attributes: DOMAttributes<State, Action, El>,
  ...children: DOMChild<State, Action>[]) => {
    return new DOMElement<State, Action, El>(makeCreateElementNS(namespace, name), attributes, children.map(domChildToTemplate))
  }
