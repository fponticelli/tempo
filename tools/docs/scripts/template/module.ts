import { h1, div, a } from 'tempo-dom/lib/html'
import { mapState, mapField } from 'tempo-dom/lib/map'
import { forEach } from 'tempo-dom/lib/for_each'
import { entityTemplate } from './entity_template'
import { baseDoc } from './base_doc'
import { moduleToc } from './module_toc'
import { State } from './state'
import { fragment } from 'tempo-dom/lib/fragment'

const getUrl = (project: string, module: string) => {
  return `https://github.com/fponticelli/tempo/edit/master/${project}/src/${module}`
}

export const module = fragment<State, unknown>(
  div(
    { attrs: { class: 'top-right' } },
    a(
      { attrs: { href: s => getUrl(s.project, s.module.path) } },
      '✏️ edit me'
    )
  ),
  h1(
    {},
    m => `module '${m.module.title}'`
  ),
  mapField(
    { field: 'module' },
    baseDoc
  ),
  moduleToc,
  mapState(
    { map: s => s.module.docEntities.map(e => ({ module: s.module.path, project: s.project, ...e })) },
    forEach(
      {},
      entityTemplate
    )
  )
)
