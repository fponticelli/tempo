import { DOMTemplate, DOMChild } from './template'
import { DOMContext } from './context'
import { View, wrapLiteral, WrappedValue } from '@mood/core'
import { DOMAttributes as DOMAttributes } from './html/common/html_attributes'
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

export const prepareAttributes = <State, Action>(attrs: DOMAttributes<State, Action>) => {
  const attributes = { ...attrs }

  const afterRender = attributes.moodAfterRender && wrapLiteral(attributes.moodAfterRender)
  const beforeChange = attributes.moodBeforeChange && wrapLiteral(attributes.moodBeforeChange)
  const afterChange = attributes.moodAfterChange && wrapLiteral(attributes.moodAfterChange)
  const beforeDestroyf = attributes.moodBeforeDestroy
  const beforeDestroy = beforeDestroyf && (() => beforeDestroyf(el))

  delete attributes.moodAfterRender
  delete attributes.moodBeforeChange
  delete attributes.moodAfterChange
  delete attributes.moodBeforeDestroy

  return { attributes, afterRender, beforeChange, afterChange, beforeDestroy }
}

export class DOMElement<State, Action> implements DOMTemplate<State, Action> {
  constructor(
    readonly name: string,
    readonly attributes: DOMAttributes<State, Action>,
    readonly children: DOMTemplate<State, Action>[]
  ) {}

  render(ctx: DOMContext<Action>, state: State): View<State> {
    type AttributeName = keyof (typeof attributes)
    const el = ctx.doc.createElement(this.name)

    const { attributes, afterRender, beforeChange, afterChange, beforeDestroy } = prepareAttributes(this.attributes)

    const keys = Object.keys(attributes) as AttributeName[]

    const { statics, dynamics } = keys.reduce(
      (acc: Acc<State>, key: AttributeName) =>
        processAttribute(el, key, attributes[key] as DOMAttribute<State, any>, ctx.dispatch, acc),
      { statics: [], dynamics: [] }
    )

    // apply attributes
    statics.forEach(f => f())
    dynamics.forEach(f => f(state))

    // TODO append before or after children?
    ctx.append(el)

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
      return new DOMDynamicNodeView(el, views, (state: State) => allDynamics.forEach(f => f(state)), beforeDestroy)
    } else {
      return new DOMStaticNodeView(el, views, beforeDestroy)
    }
  }
}

export const el = <State, Action>(
  name: string,
  attributes: DOMAttributes<State, Action>,
  ...children: DOMChild<State, Action>[]
) => {
  return new DOMElement<State, Action>(name, attributes, children.map(domChildToTemplate))
}
