import { article, h1, h2, div, a } from 'tempo-dom/lib/html'
import { mapState } from 'tempo-dom/lib/map'
import { when } from 'tempo-dom/lib/when'
import { forEach } from 'tempo-dom/lib/for_each'
import { DOMChild } from 'tempo-dom/lib/template'
import { typeAliasTemplate } from './type_alias_template'
import { exportTemplate } from './export_template'
import { functionTemplate } from './function_template'
import { variableTemplate } from './variable_template'
import { classTemplate } from './class_template'
import { baseDoc } from './base_doc'
import { moduleToc } from './module_toc'
import { State } from './state'
import { Interface } from '../parse/interface'
import { TypeAlias } from '../parse/type_alias'
import { compare } from 'tempo-std/lib/strings'

const getUrl = (project: string, module: string) => {
  return `https://github.com/fponticelli/tempo/edit/master/${project}/src/${module}`
}

export const list = <State extends any[]>(title: string, element: DOMChild<State[number], unknown>) => {
  return when<State, unknown>(
    { condition: state => state.length > 0 },
    h2({}, title),
    forEach(
      {},
      element
    )
  )
}

export const module = article<State, unknown>(
  {},
  div(
    { attrs: { class: 'is-pulled-right' } },
    a(
      { attrs: { href: s => getUrl(s.project, s.module.path) } },
      '✏️ edit this module'
    )
  ),
  h1(
    {},
    m => `module '${m.module.title}'`
  ),
  mapState(
    { map: s => s.module },
    baseDoc
  ),
  moduleToc,
  mapState(
    {
      map: s => {
        const a = [] as (Interface | TypeAlias)[]
        a.push(...s.module.typeAliases)
        a.push(...s.module.interfaces)
        return a.sort((a, b) => compare(a.name, b.name))
      }
    },
    list('types', typeAliasTemplate)
  ),
  mapState(
    { map: s => s.module.exports.map(e => ({ module: s.module.path, project: s.project, ...e })) },
    list('exports', exportTemplate)
  ),
  mapState(
    { map: s => s.module.functions.map(e => ({ module: s.module.path, project: s.project, ...e })) },
    list('functions', functionTemplate)
  ),
  mapState(
    { map: s => s.module.variables.map(e => ({ module: s.module.path, project: s.project, ...e })) },
    list('values', variableTemplate)
  ),
  mapState(
    { map: s => s.module.classes.map(e => ({ module: s.module.path, project: s.project, ...e })) },
    list('classes', classTemplate)
  )
)
