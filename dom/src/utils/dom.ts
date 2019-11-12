import { View, DynamicView } from '@mood/core/lib/view'
import { UnwrappedDerivedValue, WrappedDerivedValue } from '@mood/core/lib/value'
import { DOMAttribute, DOMEventHandler, DOMStyleAttribute } from '../value'
import { htmlAttributeNameMap as attributeNameMap, htmlAttributeMap as attributeMap } from '../dom_attributes_mapper'
import { setEvent, setAttribute, setOneStyle } from './set_attribute'
import { DOMChild, DOMTemplate } from '../template'
import { text } from '../text'

export const removeNode = (node: Node) => {
  const el = node as HTMLElement
  if (el && el.onblur) {
    el.onblur = null
  }
  if (node && node.parentElement) {
    node.parentElement.removeChild(node)
  }
}

export const insertBefore = (ref: Node) => (node: Node) => {
  if (ref.parentElement != null) {
    ref.parentElement.insertBefore(node, ref)
  }
}

export const filterDynamics = <State>(children: View<State>[]): DynamicView<State>[] =>
  children.filter(child => child.kind === 'dynamic').map(child => child as DynamicView<State>)

export const domChildToTemplate = <State, Action>(dom: DOMChild<State, Action>): DOMTemplate<State, Action> => {
  if (typeof dom === 'string' || typeof dom === 'function') return text(dom)
  else return dom
}

export type Acc<State> = ((state: State) => void)[]

export const processAttribute = <State, Action>(
  el: Element,
  name: string,
  value: DOMAttribute<State, Action>,
  acc: Acc<State>
): Acc<State> => {
  name = name.toLowerCase()
  name = attributeNameMap[name] || name

  let set = attributeMap[name] || setAttribute

  if (typeof value === 'function') {
    const f = (state: State) => set(el, name, (value as UnwrappedDerivedValue<State, Action>)(state))
    acc.push(f)
  } else {
    set(el, name, value)
  }
  return acc
}

export const processEvent = <State, Ev extends Event, Action>(
  el: Element,
  name: string,
  value: DOMEventHandler<State, Ev, Action>,
  dispatch: (action: Action) => void,
  acc: Acc<State>
): Acc<State> => {
  name = name.toLowerCase()
  let set = setEvent<Action, Ev>(dispatch)

  const anyValue = value as any
  if (anyValue && anyValue.kind && anyValue.kind === 'derived') {
    const derived = anyValue as WrappedDerivedValue<State, (event: Ev) => Action | undefined>
    const f = (state: State) => set(el, name, derived.resolve(state))
    acc.push(f)
  } else {
    set(el, name, anyValue)
  }
  return acc
}

export const processStyle = <State, Action>(
  el: Element,
  name: string,
  value: DOMStyleAttribute<State, Action>,
  acc: Acc<State>
): Acc<State> => {
  name = name.toLowerCase()

  let set = setOneStyle

  if (typeof value === 'function') {
    const f = (state: State) => set(el, name, (value as UnwrappedDerivedValue<State, Action>)(state))
    acc.push(f)
  } else {
    set(el, name, value)
  }
  return acc
}
