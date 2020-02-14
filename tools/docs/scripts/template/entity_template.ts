import { fragment } from 'tempo-dom/lib/fragment'
import { description, todos, examples, tags } from './base_doc'
import { title } from './title'
import { signature } from './signature'
import { mapState } from 'tempo-dom/lib/map'
import { Entity } from '../parse/entity'
import { forEach } from 'tempo-dom/lib/for_each'
import { a, p, pre } from 'tempo-dom/lib/html'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'
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

export const signatures = fragment<Entity & { project: string, module: string }, unknown>(
  mapState<Entity, string[], unknown>(
    { map: s => s.signatures },
    forEach(
      {},
      signature
    )
  ),
  p(
    {},
    'defined in ',
    a(
      { attrs: { href: s => getUrl(s.project, s.module, s.line) } },
      s => getModule(s.project, s.module),
      ' at line ',
      s => String(s.line)
    ),
  ),
  pre(
    { attrs: { class: 'import-code ts language-ts' } },
    unsafeHtml({
      content: s => highlight(getImport(s.name, s.project, s.module))
    })
  )
)

export const entityTemplate = fragment<Entity & { project: string, module: string }, unknown>(
  title,
  tags,
  description,
  todos,
  signatures,
  examples,
)
