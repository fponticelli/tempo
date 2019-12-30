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
import { keys } from 'tempo-core/lib/util/objects'
import { replaceAll } from 'tempo-core/lib/util/strings'
import { DOMTemplate } from './template'
import { DOMContext } from './context'
import { DOMAttribute } from './value'
import { headPortal } from './portal'
import { el } from './element'
import { text } from './text'

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
  statics: string[]
  dynamics: ((state: State) => string)[]
}

const processRules = <State>(rules: StyleDefinitions<State>, scopeName: string): Acc<State> => {
  return keys(rules).reduce(
    (acc: Acc<State>, selector: keyof StyleDefinitions<State>) => {
      const rule = rules[selector] as Record<string, any>
      const all = keys(rule).reduce(
        (acc: Acc<State>, property: any) => {
          const declaration = rule[property] as ((state: State) => string) | string
          if (typeof declaration === 'function') {
            return {
              dynamics: [...acc.dynamics, (state: State) => {
                const s = declaration(state)
                return s ? `  ${property}: ${s};` : `  /* ${property} */`
              }],
              statics: acc.statics
            }
          } else {
            const s = declaration
            return {
              dynamics: acc.dynamics,
              statics: [...acc.statics, s ? `  ${property}: ${s};` : `  /* ${property} */`]
            }
            return acc
          }
        },
        {
          statics: [],
          dynamics: []
        } as Acc<State>
      )
      return {
        statics: all.statics.length > 0 ?
          [...acc.statics, `${replaceAll(selector as string, ':scope', `[${scopeName}]`)} {\n${all.statics.join('\n')}\n}\n`] :
          all.statics,
        dynamics: all.dynamics.length > 0 ?
          [...acc.dynamics, (state: State) =>
            `${replaceAll(selector as string, ':scope', `[${scopeName}]`)} {\n${all.dynamics.map(f => f(state)).join('\n')}\n}\n`] :
          all.dynamics
      }
    },
    {
      statics: [],
      dynamics: []
    } as Acc<State>
  )
}

const processNestedAtRule = <State>
    (nestedAtRule: string, queries: MediaQuery<State>, scopeName: string) => {
  return keys(queries).reduce(
    (acc: Acc<State>, query: string | number) => {
      const definitions = queries[query]
      const r = processDefinitions(definitions, scopeName)
      return {
        statics: [`@${nestedAtRule} ${query} {\n${r.statics.map(v => `  ${v.split('\n').join('\n  ')}`).join('\n')}\n}`],
        dynamics:
          r.dynamics.map(f => {
            return (state: State) => {
              const values = r.dynamics.map(f => '  ' + f(state).split('\n').join('\n  '))
              return `@${nestedAtRule} ${query} {\n${values.join('\n')}\n}`
            }
          })
      }
    },
    {
      statics: [],
      dynamics: []
    } as Acc<State>
  )
}

const processOneAtRule = <State>(prefix: string, rule: UnwrappedValue<State, string>) => {
  if (typeof rule === 'function') {
    return {
      statics: [],
      dynamics: [(state: State) => `\n@${prefix} ${rule(state)};\n`]
    } as Acc<State>
  } else {
    return {
      statics: [`@${prefix} ${rule};`],
      dynamics: []
    } as Acc<State>
  }
}

const processtAtRule = <State>(prefix: string, rules: UnwrappedValue<State, string>[]) => {
  return rules.reduce(
    (acc, curr) => {
      const res = processOneAtRule(prefix, curr)
      return {
        statics: [...acc.statics, ...res.statics],
        dynamics: [...acc.dynamics, ...res.dynamics]
      }
    },
    {
      statics: [],
      dynamics: []
    } as Acc<State>
  )
}

const processDefinitions =
    <State>(definitions: StyleDefinitions<State>, scopeName: string): Acc<State> => {
  let statics = [] as string[]
  let dynamics =  [] as ((state: State) => string)[]

  for (let i = 0; i < atRules.length; i++) {
    const sym = atRules[i]
    if (definitions[sym]) {
      const queries = processtAtRule(extractName(sym), definitions[sym]!)
      statics = [...statics, ...queries.statics]
      dynamics = [...dynamics, ...queries.dynamics]
    }
  }

  for (let i = 0; i < nestedAtRules.length; i++) {
    const sym = nestedAtRules[i]
    if (definitions[sym]) {
      const queries = processNestedAtRule(extractName(sym), definitions[sym]!, scopeName)
      statics = [...statics, ...queries.statics]
      dynamics = [...dynamics, ...queries.dynamics]
    }
  }

  const rules = processRules(definitions, scopeName)
  statics = [...statics, ...rules.statics]
  dynamics = [...dynamics, ...rules.dynamics]
  return { statics, dynamics }
}

export class ScopedStyles<State, Action, Query> implements DOMTemplate<State, Action, Query> {
  constructor (
    readonly scopeName: string,
    readonly statics: string[],
    readonly dynamics: ((state: State) => string)[]
  ) {}
  render(ctx: DOMContext<Action>, state: State) {
    const styles = [] as DOMTemplate<State, Action, Query>[]
    if (this.statics.length > 0) {
      if (!ctx.doc.querySelector(`style[name=${this.scopeName}]`)) {
        styles.push(el('style', { attrs: { name: this.scopeName } }, text('\n'+this.statics.join('\n'))))
      }
    }
    if (this.dynamics.length > 0) {
      styles.push(el('style', {}, text(state => this.dynamics.map(f => '\n'+f(state)).join('\n'))))
    }

    ctx.parent.setAttribute(this.scopeName, '')
    return headPortal(...styles).render(ctx, state)
  }
}

export const scopedStyles = <State, Action, Query>(
  options: { scope: string },
  definitions: StyleDefinitions<State>
) => {
  const { statics, dynamics } = processDefinitions(definitions, options.scope)
  return new ScopedStyles<State, Action, Query>(options.scope, statics, dynamics)
}
