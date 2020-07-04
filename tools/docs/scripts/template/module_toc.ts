import { nav } from 'tempo-dom/lib/html'
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

export const moduleToc = nav<State, unknown, unknown>($ =>
  $.mapState(mapModuleToToc, $ =>
    $.when(
      s => s.length > 5,
      $ =>
        $.p($ => $.class('title is-6').text('Table of Contents')).ul($ =>
          $.class('module-toc-list').forEach($ =>
            $.li($ =>
              $.a($ =>
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
