import { description, todos, examples, tags } from './base_doc'
import { title } from './title'
import { signature } from './signature'
import { DocEntity } from '../parse/doc_entity'
import { a, p, pre } from 'tempo-dom/lib/html'
import { highlight } from '../utils/highlight'

const getUrl = (project: string, module: string, line: number) => {
  return `https://github.com/fponticelli/tempo/blob/master/${project}/src/${module}#L${line}`
}

const getModule = (project: string, module: string) => {
  return `${project}/src/${module}`
}

const getImport = (name: string, project: string, module: string) => {
  return `import { ${name} } from 'tempo-${project}/lib/${module}'`
}

export const signatures = fragment<
  DocEntity & { project: string; module: string },
  unknown
>(
  mapField<DocEntity, 'signatures', unknown>(
    'signatures',
    forEach({}, signature)
  ),
  p(
    { attrs: { class: 'defined-in' } },
    'defined in ',
    a(
      { attrs: { href: s => getUrl(s.project, s.module, s.line) } },
      s => getModule(s.project, s.module),
      ' at line ',
      s => String(s.line)
    )
  ),
  pre(
    { attrs: { class: 'import-code ts language-ts' } },
    unsafeHtml({}, s => highlight(getImport(s.name, s.project, s.module)))
  )
)

export const entityTemplate = fragment<
  DocEntity & { project: string; module: string },
  unknown
>(title, tags, description, todos, signatures, examples)
