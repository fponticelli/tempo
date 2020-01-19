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

import { UnwrappedValue } from 'tempo-core/lib/value'
import { keys } from 'tempo-std/lib/objects'
import { replace } from 'tempo-std/lib/strings'
import { DOMTemplate } from './template'
import { DOMContext } from './context'
import { DOMAttribute } from './value'
import { headPortal } from './portal'
import { el } from './element'
import { text } from './text'
import { View } from 'tempo-core/lib/view'

const extractName = (sym: symbol) => {
  const a = sym.toString().substring(7)
  return a.substr(0, a.length - 1)
}

export const importRule = Symbol('import')
export const charset = Symbol('charset')
export const namespace = Symbol('namespace')

export const atRules: (
  typeof importRule |
  typeof charset |
  typeof namespace
)[] = [importRule, charset, namespace]

export const media = Symbol('media')
export const supports = Symbol('supports')
export const page = Symbol('page')
export const fontFace = Symbol('font-face')
export const keyframes = Symbol('keyframes')
export const counterStyle = Symbol('counter-style')
export const fontFeatureValues = Symbol('font-feature-values')
export const swash = Symbol('swash')
export const ornaments = Symbol('ornaments')
export const annotation = Symbol('annotation')
export const stylistic = Symbol('stylistic')
export const styleset = Symbol('styleset')
export const characterVariant = Symbol('character-variant')

export const nestedAtRules: (
  typeof media |
  typeof supports |
  typeof page |
  typeof fontFace |
  typeof keyframes |
  typeof counterStyle |
  typeof fontFeatureValues |
  typeof swash |
  typeof ornaments |
  typeof annotation |
  typeof stylistic |
  typeof styleset |
  typeof characterVariant
)[] = [
  media,
  supports,
  page,
  fontFace,
  keyframes,
  counterStyle,
  fontFeatureValues,
  swash,
  ornaments,
  annotation,
  stylistic,
  styleset,
  characterVariant
]

export type StyleDeclarations<State> = {
  [K in keyof CSSStyleDeclaration]?: K extends number ? never : DOMAttribute<State, CSSStyleDeclaration[K]>
}

export interface MediaQuery<State> {
  [query: string]: StyleDefinitions<State>
}

export interface MediaQueries<State> {
  [importRule]?: UnwrappedValue<State, string>[]
  [charset]?: UnwrappedValue<State, string>[]
  [namespace]?: UnwrappedValue<State, string>[]

  [media]?: MediaQuery<State>
  [supports]?: MediaQuery<State>
  [page]?: MediaQuery<State>
  [fontFace]?: MediaQuery<State>
  [keyframes]?: MediaQuery<State>
  [counterStyle]?: MediaQuery<State>
  [fontFeatureValues]?: MediaQuery<State>
  [swash]?: MediaQuery<State>
  [ornaments]?: MediaQuery<State>
  [annotation]?: MediaQuery<State>
  [stylistic]?: MediaQuery<State>
  [styleset]?: MediaQuery<State>
  [characterVariant]?: MediaQuery<State>
}

export type StyleDefinitions<State> =
  & Record<string, StyleDeclarations<State>>
  & MediaQueries<State>

type Acc<State> = {
  literal: string[]
  derived: ((state: State) => string)[]
}

const processRules = <State>(rules: StyleDefinitions<State>): Acc<State> => {
  return keys(rules).reduce(
    (acc: Acc<State>, selector: keyof StyleDefinitions<State>) => {
      const rule = rules[selector] as Record<string, any>
      const all = keys(rule).reduce(
        (acc: Acc<State>, property: any) => {
          const declaration = rule[property] as ((state: State) => string) | string
          if (typeof declaration === 'function') {
            return {
              derived: [...acc.derived, (state: State) => {
                const s = declaration(state)
                return s ? `  ${property}: ${s};` : `  /* ${property} */`
              }],
              literal: acc.literal
            }
          } else {
            const s = declaration
            return {
              derived: acc.derived,
              literal: [...acc.literal, s ? `  ${property}: ${s};` : `  /* ${property} */`]
            }
            return acc
          }
        },
        {
          literal: [],
          derived: []
        } as Acc<State>
      )
      return {
        literal: all.literal.length > 0 ?
          [...acc.literal, `${selector as string} {\n${all.literal.join('\n')}\n}\n`] :
          all.literal,
        derived: all.derived.length > 0 ?
          [...acc.derived, (state: State) =>
            `${selector as string} {\n${all.derived.map(f => f(state)).join('\n')}\n}\n`] :
          all.derived
      }
    },
    {
      literal: [],
      derived: []
    } as Acc<State>
  )
}

const processNestedAtRule = <State>
    (nestedAtRule: string, queries: MediaQuery<State>) => {
  return keys(queries).reduce(
    (acc: Acc<State>, query: string | number) => {
      const definitions = queries[query]
      const r = processDefinitions(definitions)
      return {
        literal: [`@${nestedAtRule} ${query} {\n${r.literal.map(v => `  ${v.split('\n').join('\n  ')}`).join('\n')}\n}`],
        derived:
          r.derived.map(f => {
            return (state: State) => {
              const values = r.derived.map(f => '  ' + f(state).split('\n').join('\n  '))
              return `@${nestedAtRule} ${query} {\n${values.join('\n')}\n}`
            }
          })
      }
    },
    {
      literal: [],
      derived: []
    } as Acc<State>
  )
}

const processOneAtRule = <State>(prefix: string, rule: UnwrappedValue<State, string>) => {
  if (typeof rule === 'function') {
    return {
      literal: [],
      derived: [(state: State) => `\n@${prefix} ${rule(state)};\n`]
    } as Acc<State>
  } else {
    return {
      literal: [`@${prefix} ${rule};`],
      derived: []
    } as Acc<State>
  }
}

const processtAtRule = <State>(prefix: string, rules: UnwrappedValue<State, string>[]) => {
  return rules.reduce(
    (acc, curr) => {
      const res = processOneAtRule(prefix, curr)
      return {
        literal: [...acc.literal, ...res.literal],
        derived: [...acc.derived, ...res.derived]
      }
    },
    {
      literal: [],
      derived: []
    } as Acc<State>
  )
}

const processDefinitions =
    <State>(definitions: StyleDefinitions<State>): Acc<State> => {
  let literal = [] as string[]
  let derived =  [] as ((state: State) => string)[]

  for (let i = 0; i < atRules.length; i++) {
    const sym = atRules[i]
    if (definitions[sym]) {
      const queries = processtAtRule(extractName(sym), definitions[sym]!)
      literal = [...literal, ...queries.literal]
      derived = [...derived, ...queries.derived]
    }
  }

  for (let i = 0; i < nestedAtRules.length; i++) {
    const sym = nestedAtRules[i]
    if (definitions[sym]) {
      const queries = processNestedAtRule(extractName(sym), definitions[sym]!)
      literal = [...literal, ...queries.literal]
      derived = [...derived, ...queries.derived]
    }
  }

  const rules = processRules(definitions)
  literal = [...literal, ...rules.literal]
  derived = [...derived, ...rules.derived]
  return { literal, derived }
}

let counter = 0
type CacheItem = {
  hits: number
  view: View<unknown, unknown>
  content: string
}
const cacheByName = new Map<string, CacheItem>()
const cacheByContent = new Map<string, string>()

export const resetCache = () => {
  counter = 0
  cacheByName.clear()
  cacheByContent.clear()
}

function make<State, Action, Query>(
  update: boolean,
  ctx: DOMContext<Action>,
  type: 'lit' | 'der',
  state: State,
  originalContent: string | undefined
) {
  let name: string | undefined
  if (originalContent) {
    name = cacheByContent.get(originalContent)
    if (typeof name !== 'undefined') {
      const item = cacheByName.get(name)!
      if (!update) item.hits++
    } else {
      name = '' + (++counter)
      const content = replace(originalContent, ':scope', `[data-tescope-${type}=${name}]`)
      const template = headPortal<State, Action, Query>(el('style', { attrs: { [`data-tedef-${type}`]: name } }, text(content)))
      const view = template.render(ctx, state)
      cacheByName.set(name, { hits: 1, view, content: originalContent })
      cacheByContent.set(originalContent, name)
    }
    ctx.parent.setAttribute(`data-tescope-${type}`, name)
  }
  return name
}

export class ScopedStyles<State, Action, Query> implements DOMTemplate<State, Action, Query> {
  constructor (
    readonly literal: string[],
    readonly derived: ((state: State) => string)[]
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const { literal, derived } = this
    const literalName = make(false, ctx, 'lit', state, literal.length > 0 ? ('\n' + literal.join('\n')) : undefined)

    const makeDerived = (state: State, update: boolean) =>
      make(update, ctx, 'der', state, derived.length > 0 ? ('\n' + derived.map(f => f(state)).join('\n')) : undefined)
    let derivedName = makeDerived(state, false)

    let destroy = (name: string | undefined) => {
      if (typeof name !== 'undefined') {
        const item = cacheByName.get(name)
        if (typeof item !== 'undefined') {
          item.hits--
          if (item.hits === 0) {
            item.view.destroy()
            cacheByContent.delete(item.content)
            cacheByName.delete(name)
          }
        }
      }
    }

    return {
      change: (state: State) => {
        const newName = makeDerived(state, true)
        if (newName !== derivedName) {
          destroy(derivedName)
        }
        derivedName = newName
      },
      request: (query: Query) => {}, // do nothing
      destroy: () => {
        destroy(literalName)
        destroy(derivedName)
      }
    }
  }
}

export const scopedStyles = <State, Action, Query>(
  definitions: StyleDefinitions<State>
) => {
  const { literal, derived } = processDefinitions(definitions)
  return new ScopedStyles<State, Action, Query>(literal, derived)
}
