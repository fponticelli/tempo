import { fragment } from 'tempo-dom/lib/html'
import { entityTemplate } from './entity_template'
import { baseDoc } from './base_doc'
import { moduleToc } from './module_toc'
import { State } from './state'

const getUrl = (project: string, module: string) => {
  return `https://github.com/fponticelli/tempo/edit/master/${project}/src/${module}`
}

export const module = fragment<State, unknown, unknown>($ =>
  $.div($ =>
    $.class('top-right').a($ =>
      $.href(s => getUrl(s.project, s.module.path)).text('✏️ edit me')
    )
  )
    .h1($ => $.text(m => `module '${m.module.title}'`))
    .mapField('module', $ => $.append(baseDoc))
    .append(moduleToc)
    .mapState(
      s =>
        s.module.docEntities.map(e => ({
          module: s.module.path,
          project: s.project,
          ...e
        })),
      $ => $.forEach($ => $.append(entityTemplate))
    )
)
