import { description, todos, examples, tags } from './base_doc'
import { title } from './title'
import { signature } from './signature'
import { DocEntity } from '../parse/doc_entity'
import { Fragment } from 'tempo-dom/lib/html'
import { highlight } from '../utils/highlight'
import { unsafeHtml } from 'tempo-dom/lib/lifecycle/unsafe_html'

const getUrl = (project: string, module: string, line: number) => {
  return `https://github.com/fponticelli/tempo/blob/master/${project}/src/${module}#L${line}`
}

const getModule = (project: string, module: string) => {
  return `${project}/src/${module}`
}

const getImport = (name: string, project: string, module: string) => {
  return `import { ${name} } from 'tempo-${project}/lib/${module}'`
}

export const signatures = Fragment<
  DocEntity & { project: string; module: string },
  unknown,
  unknown
>($ =>
  $.MapField('signatures', $ => $.ForEach($ => $.Append(signature)))
    .P($ =>
      $.class('defined-in')
        .text('defined in ')
        .A($ =>
          $.href(s => getUrl(s.project, s.module, s.line))
            .text(s => getModule(s.project, s.module))
            .text(' at line ')
            .text(s => String(s.line))
        )
    )
    .PRE($ =>
      $.class('import-code ts language-ts').Lifecycle(
        unsafeHtml(s => highlight(getImport(s.name, s.project, s.module)))
      )
    )
)

export const entityTemplate = Fragment<
  DocEntity & { project: string; module: string },
  unknown,
  unknown
>($ => $.AppendMany(title, tags, description, todos, signatures, examples))
