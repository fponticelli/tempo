import { nav, ul, li, a, p } from 'tempo-dom/lib/html'
import { mapState } from 'tempo-dom/lib/map'
import { forEach } from 'tempo-dom/lib/for_each'
import { State } from './state'
import { when } from 'tempo-dom/lib/when'

const mapModuleToToc = (state: State) => {
  const mod = state.module
  return mod.docEntities
    .map(e => ({
      ...e,
      path: `#/api/${state.project}/${mod.path.substr(0, mod.path.length - 3)}.html#${e.name}`
    }))
}

export const moduleToc = nav<State, unknown>(
  {},
  mapState(
    { map: mapModuleToToc },
    when(
      { condition: s => s.length > 5 },
      p(
        { attrs: { class: 'title is-6' } },
        'Table of Contents'
      ),
      ul(
        { attrs: { class: 'module-toc-list' } },
        forEach(
          {},
          li(
            { attrs: {} },
            a(
              { attrs: { href: s => s.path, class: 'is-family-monospace' } },
              s => s.name
            )
          )
        )
      )
    )
  )
)
