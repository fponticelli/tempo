import { article, h1, h2 } from 'tempo-dom/lib/html'
import { Module } from '../parse/module'
import { mapState } from 'tempo-dom/lib/map'
import { when } from 'tempo-dom/lib/when'
import { forEach } from 'tempo-dom/lib/for_each'
import { DOMChild } from 'tempo-dom/lib/template'
import { interfaceTemplate } from './interface_template'
import { typeAliasTemplate } from './type_alias_template'
import { exportTemplate } from './export_template'
import { functionTemplate } from './function_template'
import { variableTemplate } from './variable_template'
import { classTemplate } from './class_template'
import { baseDoc } from './base_doc'

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

export const module = article<Module, unknown>(
  {},
  h1(
    {},
    m => `module '${m.title}'`
  ),
  baseDoc,
  mapState(
    { map: s => s.interfaces },
    list('interfaces', interfaceTemplate)
  ),
  mapState(
    { map: s => s.typeAliases },
    list('type aliases', typeAliasTemplate)
  ),
  mapState(
    { map: s => s.exports },
    list('exports', exportTemplate)
  ),
  mapState(
    { map: s => s.functions },
    list('functions', functionTemplate)
  ),
  mapState(
    { map: s => s.variables },
    list('variables', variableTemplate)
  ),
  mapState(
    { map: s => s.classes },
    list('classes', classTemplate)
  )
)
