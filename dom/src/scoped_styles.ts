import { UnwrappedValue } from 'tempo-core/lib/value'
import { keys } from 'tempo-core/lib/util/objects'
import { DOMTemplate } from './template'
import { DOMContext } from './context'
import { DOMAttribute } from './value'
import { headPortal } from './portal'
import { style } from './html'
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

export const scope = Symbol('scope')

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
  & StyleDeclarations<State>
  & MediaQueries<State>
  & { [scope]: string }

type Acc<State> = {
  statics: string[]
  dynamics: ((state: State) => string)[]
}

const makeDynamicScope = (scope: string) => `t-${scope}-dynamic`
const makeStaticScope = (scope: string) => `t-${scope}-static`

const processRules = <State>(rules: StyleDefinitions<State>, staticScopeName: string, dynamicScopeName: string): Acc<State> => {
  return keys(rules).reduce(
    (acc: Acc<State>, selector: keyof StyleDefinitions<State>) => {
      const rule = rules[selector]
      const all = Object.keys(rule).reduce(
        (acc: Acc<State>, prop: string) => {
          const declaration = rule[prop] as DOMValue<State, any>
          if (typeof declaration === 'function') {
            const property = ruleMap[prop] || prop
            return {
              dynamics: [...acc.dynamics, (state: State) => {
                const s = toString(declaration(state))
                return s ? `  ${property}: ${s};` : `  /* ${property} */`
              }],
              statics: acc.statics
            }
          } else {
            const s = toString(declaration)
            const property = ruleMap[prop] || prop
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
          [...acc.statics, `${replaceAll(selector, ':scope', `[${staticScopeName}]`)} {\n${all.statics.join('\n')}\n}\n`] :
          all.statics,
        dynamics: all.dynamics.length > 0 ?
          [...acc.dynamics, (state: State) =>
            `${replaceAll(selector, ':scope', `[${dynamicScopeName}]`)} {\n${all.dynamics.map(f => f(state)).join('\n')}\n}\n`] :
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
    (nestedAtRule: string, queries: CSSMediaQuery<State>, staticScopeName: string, dynamicScopeName: string) => {
  return Object.keys(queries).reduce(
    (acc, query: string) => {
      const definitions = queries[query]
      const r = processDefinitions(definitions, staticScopeName, dynamicScopeName)
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

const processOneAtRule = <State>(prefix: string, rule: DOMValue<State, string>) => {
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

const processtAtRule = <State>(prefix: string, rules: DOMValue<State, string>[]) => {
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
    <State>(definitions: StyleDefinitions<State>, staticScopeName: string, dynamicScopeName: string): Acc<State> => {
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
      const queries = processNestedAtRule(extractName(sym), definitions[sym]!, staticScopeName, dynamicScopeName)
      statics = [...statics, ...queries.statics]
      dynamics = [...dynamics, ...queries.dynamics]
    }
  }

  const rules = processRules(definitions, staticScopeName, dynamicScopeName)
  statics = [...statics, ...rules.statics]
  dynamics = [...dynamics, ...rules.dynamics]
  return { statics, dynamics }
}

export class ScopedStyles<State, Action, Query> implements DOMTemplate<State, Action, Query> {
  constructor (readonly definitions: StyleDefinitions<State>) {}
  render(ctx: DOMContext<Action>, state: State) {
    const dynamicScope = makeDynamicScope(this.definitions[scope])
    const staticScope = makeStaticScope(this.definitions[scope])
    const { statics, dynamics } = processDefinitions(this.definitions, staticScope, dynamicScope)

    const styles = [] as DOMTemplate<State, Action, Query>[]
    if (statics.length > 0) {
      styles.push(el('style', {}, text(statics.join('\n'))))
    }
    if (dynamics.length > 0) {
      styles.push(el('style', {}, text(state => dynamics.map(f => f(state)).join('\n'))))
    }
    return headPortal(...styles).render(ctx, state)
  }
}

export const scopedStyles = <State, Action, Query>(
  definitions: StyleDefinitions<State>
) => new ScopedStyles<State, Action, Query>(definitions)
