import { DOMChild } from 'tempo-dom/lib/template'
import { DOMContext } from 'tempo-dom/lib/context'
import { classStyledElement } from 'tempo-dom/lib/class_styled_element'
import { resolveAttribute, Attribute } from 'tempo-dom/lib/value'
import { PropertyRecord, elStyleProperties, ElStyleProperties, makeElRules, extractLifeCycle } from './impl/property_mapping'

export interface ElProperties<State, Action, Query, TScope> extends ElStyleProperties<State> {
  afterrender?:  (state: State, el: Element, ctx: DOMContext<Action>) => TScope | undefined
  beforechange?: (state: State, el: Element, ctx: DOMContext<Action>, value: TScope | undefined) => TScope | undefined
  afterchange?:  (state: State, el: Element, ctx: DOMContext<Action>, value: TScope | undefined) => TScope | undefined
  beforedestroy?: (el: Element, ctx: DOMContext<Action>, value: TScope | undefined) => void
  respond?: (query: Query, el: Element, ctx: DOMContext<Action>, value: TScope | undefined) => TScope | undefined
}

function valuesAttribute<State, Props extends Record<string, Attribute<State, any>>>(props: Props, styleProperties: (keyof Props)[]) {
  return (state: State): PropertyRecord<Props>[] => {
    const pairs = [] as PropertyRecord<Props>[]
    for (const key of styleProperties) {
      if (typeof props[key] !== undefined) {
        const value = resolveAttribute(props[key])(state)
        if (typeof value !== 'undefined') {
          pairs.push({ kind: key, value })
        }
      }
    }
    return pairs
  }
}

export function el<State, Action, Query = unknown, TScope = unknown>(
  props: ElProperties<State, Action, Query, TScope>,
  ...children: DOMChild<State, Action, Query>[]
) {
  return classStyledElement<PropertyRecord<ElStyleProperties<State>>, State, Action, Query, Element, TScope>(
    {
      ...extractLifeCycle(props),
      el: 'div',
      values: valuesAttribute<State, ElStyleProperties<State>>(props, elStyleProperties),
      makeRules: makeElRules
    },
    ...children
  )
}
