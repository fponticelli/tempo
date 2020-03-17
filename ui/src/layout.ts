import { DOMChild } from 'tempo-dom/lib/template'
import { DOMContext } from 'tempo-dom/lib/context'
import { classStyledElement } from 'tempo-dom/lib/class_styled_element'
import { resolveAttribute } from 'tempo-dom/lib/value'
import { PropertyRecord, styleProperties, ElStyleProperties, makeRules } from './impl/property_mapping'

export interface ElProperties<State, Action, Query, TScope> extends ElStyleProperties<State> {
  afterrender?:  (state: State, el: Element, ctx: DOMContext<Action>) => TScope | undefined
  beforechange?: (state: State, el: Element, ctx: DOMContext<Action>, value: TScope | undefined) => TScope | undefined
  afterchange?:  (state: State, el: Element, ctx: DOMContext<Action>, value: TScope | undefined) => TScope | undefined
  beforedestroy?: (el: Element, ctx: DOMContext<Action>, value: TScope | undefined) => void
  respond?: (query: Query, el: Element, ctx: DOMContext<Action>, value: TScope | undefined) => TScope | undefined
}

export function el<State, Action, Query = unknown, TScope = unknown>(
  props: ElProperties<State, Action, Query, TScope>,
  ...children: DOMChild<State, Action, Query>[]
) {
  const lifecycle = {
    afterrender: props.afterrender,
    beforechange: props.beforechange,
    afterchange: props.afterchange,
    beforedestroy: props.beforedestroy,
    respond: props.respond
  }

  return classStyledElement<PropertyRecord, State, Action, Query, Element, TScope>(
    {
      ...lifecycle,
      el: 'div',
      styles: {
        'background-color': '#ccc' // TODO remove
      },
      values: (state: State): PropertyRecord[] => {
        const pairs = [] as PropertyRecord[]
        const propKeys = styleProperties
        for (const key of propKeys) {
          if (typeof props[key] !== undefined) {
            const value = resolveAttribute(props[key])(state)
            if (typeof value !== 'undefined') {
              pairs.push({ kind: key, value })
            }
          }
        }
        return pairs
      },
      makeRules
    },
    ...children
  )
}
