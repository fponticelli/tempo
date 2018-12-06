import { View, DynamicView } from '../core/view'
import { DOMValue, DOMValueFunction } from './dom_value'
import { attributeNameMap, attributeMap } from './attributes_mapper'
import { setEvent, setAttribute, setOneStyle } from './set_attribute'

export const removeNode = (node: Node) => {
  if (node && node.parentElement) {
    node.parentElement.removeChild(node)
  }
}

export const filterDynamics = <State>(children: View<State>[]): DynamicView<State>[] =>
  children.filter(child => child.kind === 'dynamic').map(child => child as DynamicView<State>)

export type Acc<State> = {
  statics: (() => void)[]
  dynamics: ((state: State) => void)[]
}

export const processAttribute = <State, Action>(
  el: HTMLElement,
  name: string,
  value: DOMValue<State, Action>,
  dispatch: (action: Action) => void,
  acc: Acc<State>
): Acc<State> => {
  name = attributeNameMap[name as keyof (typeof attributeNameMap)] || name

  let set: (el: HTMLElement, name: string, value: any) => void
  if (name.startsWith('on')) {
    // events
    set = setEvent(dispatch)
  } else if (name.startsWith('$')) {
    // pseudo-styles
    name = name.substring(1)
    set = setOneStyle
  } else {
    // other attributes/properties
    set = attributeMap[name] || setAttribute
  }

  if (typeof value === 'function') {
    const f = (state: State) => set(el, name, (value as DOMValueFunction<State, Action>)(state))
    return {
      dynamics: acc.dynamics.concat([f]),
      statics: acc.statics
    }
  } else {
    const f = () => set(el, name, value)
    return {
      dynamics: acc.dynamics,
      statics: acc.statics.concat([f])
    }
  }
}
