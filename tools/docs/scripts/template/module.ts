import { article, h1, h2 } from 'tempo-dom/lib/html'
import { mapState } from 'tempo-dom/lib/map'
import { when } from 'tempo-dom/lib/when'
import { forEach } from 'tempo-dom/lib/for_each'
import { DOMChild } from 'tempo-dom/lib/template'
// import { interfaceTemplate } from './interface_template'
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

export const list = <State extends any[], Inner>(title: string, element: DOMChild<State[number], unknown>) => {
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
  h1(
    {},
    m => `module '${m.module.title}'`
  ),
  mapState(
    { map: s => s.module },
    baseDoc
  ),
  moduleToc,
  // mapState(
  //   { map: s => s.module.interfaces },
  //   list('interfaces', interfaceTemplate)
  // ),
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
    { map: s => s.module.exports },
    list('exports', exportTemplate)
  ),
  mapState(
    { map: s => s.module.functions },
    list('functions', functionTemplate)
  ),
  mapState(
    { map: s => s.module.variables },
    list('values', variableTemplate)
  ),
  mapState(
    { map: s => s.module.classes },
    list('classes', classTemplate)
  )
)
