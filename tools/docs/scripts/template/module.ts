import { Fragment } from 'tempo-dom/lib/html'
import { entityTemplate } from './entity_template'
import { baseDoc } from './base_doc'
import { moduleToc } from './module_toc'
import { State } from './state'

const getUrl = (project: string, module: string) => {
  return `https://github.com/fponticelli/tempo/edit/master/${project}/src/${module}`
}

export const module = Fragment<State, unknown, unknown>($ =>
  $.DIV($ =>
    $.class('top-right').A($ =>
      $.href(s => getUrl(s.project, s.module.path)).text('✏️ edit me')
    )
  )
    .H1($ => $.text(m => `module '${m.module.title}'`))
    .MapField('module', $ => $.Append(baseDoc))
    .Append(moduleToc)
    .MapState(
      s =>
        s.module.docEntities.map(e => ({
          module: s.module.path,
          project: s.project,
          ...e
        })),
      $ => $.ForEach($ => $.Append(entityTemplate))
    )
)
