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

import { Props, Attribute, resolveAttribute } from './value'
import { el } from './element'
import { DOMChild } from './template'
import { DOMContext } from './context'
import { map } from 'tempo-std/lib/arrays'

export interface Rule {
  cls: string | undefined
  selector: string
  definitions: () => string[]
}

export interface ElWithClassRulesProps<T, State, Action, Query, El extends Element, TScope>
  extends Props<State, Action, Query, El, TScope> {
  el: string
  values: Attribute<State, T[]>
  makeRules: (value: T) => Rule[]
}

const allSelectors = new Set<string>()
let styleEl: HTMLStyleElement

function ensureStyleElement(doc: Document) {
  if (typeof styleEl === 'undefined') {
    styleEl = doc.createElement('style')
    styleEl.textContent = '\n'
    doc.head.appendChild(styleEl)
  }
}

// function makeStyleDefinition<T>(
//   value: T | undefined,
//   cls: string,
//   makeRules: (v: T) => Rule[]
// ): Rule[] {
//   if (typeof value !== 'undefined' && !allSelectors.has(cls)) {
//     allSelectors.add(cls)
//     return makeRules(value)
//   } else {
//     return []
//   }
// }

function renderRule(rule: Rule) {
  return `${rule.selector} {\n  ${rule.definitions().join('\n  ')}\n}`
}

function applyClasses<T>(
  values: T[],
  makeRules: (value: T) => Rule[],
  el: Element
) {
  // const { classes, rules } = values.reduce(
  //   (acc: { classes: string[], rules: Rule[] }, curr) => {
  //     const rule = makeRules(curr)
  //     acc.classes.push(cls)

  //     const rules = makeStyleDefinition(curr, cls, makeRules)
  //     if (rules.length > 0)
  //       acc.rules.push(...rules)

  //     return acc
  //   },
  //   { classes: [], rules: [] } as { classes: string[], rules: Rule[] }
  // )
  const rules = values.reduce(
    (acc, curr) => {
      acc.push(...makeRules(curr))
      return acc
    },
    [] as Rule[]
  )

  const rulesToApply = rules.filter(rule => !allSelectors.has(rule.selector))

  if (rulesToApply.length > 0) {
    rulesToApply.forEach(rule => allSelectors.add(rule.selector))
    styleEl.textContent += map(rulesToApply, renderRule).join('\n') + '\n'
  }

  const classes = rules.filter(rule => typeof rule.cls !== 'undefined').map(rule => rule.cls!)

  if (classes.length > 0) {
    if (el.className)
      classes.unshift(el.className)
    el.className = classes.join(' ')
  }
}

export function classStyledElement<T, State, Action, Query, El extends Element, TScope>(
  props: ElWithClassRulesProps<T, State, Action, Query, El, TScope>,
  ...children: DOMChild<State, Action>[]
) {
  const { values, makeRules } = props
  if (typeof props?.attrs?.class === 'undefined' && typeof props?.attrs?.className === 'undefined') {
    if (typeof props.attrs === 'undefined') {
      props.attrs = { class: '' }
    } else {
      props.attrs.class = ''
    }
  }

  const afterrender = (
    state: State,
    el: El,
    ctx: DOMContext<Action>
  ): TScope | undefined => {
    ensureStyleElement(ctx.doc)

    const derived = resolveAttribute(values)(state) || []
    applyClasses(derived, makeRules, el)

    if (props.afterrender) {
      return props.afterrender(state, el, ctx)
    } else {
      return undefined
    }
  }

  const afterchange = (
    state: State,
    el: El,
    ctx: DOMContext<Action>,
    scopeValue: TScope | undefined
  ): TScope | undefined => {
    const derived = resolveAttribute(values)(state) || []
    applyClasses(derived, makeRules, el)

    if (props.afterchange) {
      return props.afterchange(state, el, ctx, scopeValue)
    } else {
      return undefined
    }
  }

  return el(
    props.el,
    {
      ...props,
      afterrender,
      afterchange
    },
    ...children
  )
}
