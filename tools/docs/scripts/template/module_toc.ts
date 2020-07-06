import { NAV } from 'tempo-dom/lib/html'
import { State } from './state'

const mapModuleToToc = (state: State) => {
  const mod = state.module
  return mod.docEntities.map(e => ({
    ...e,
    path: `#/api/${state.project}/${mod.path.substr(
      0,
      mod.path.length - 3
    )}.html#${e.name}`
  }))
}

export const moduleToc = NAV<State, unknown, unknown>($ =>
  $.MapState(mapModuleToToc, $ =>
    $.When(
      s => s.length > 5,
      $ =>
        $.P($ => $.class('title is-6').text('Table of Contents')).UL($ =>
          $.class('module-toc-list').ForEach($ =>
            $.LI($ =>
              $.A($ =>
                $.href(s => s.path)
                  .class('is-family-monospace')
                  .text(s => s.name)
              )
            )
          )
        )
    )
  )
)
