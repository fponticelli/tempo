import { nav, ul, li, a } from 'tempo-dom/lib/html'
import { mapState } from 'tempo-dom/lib/map'
import { compare } from 'tempo-std/lib/strings'
import { forEach } from 'tempo-dom/lib/for_each'
import { State } from './state'

const mapModuleToToc = (state: State) => {
  const mod = state.module
  const exports = mod.exports.map(e => ({ kind: 'export', name: e.name }))
  const functions = mod.functions.map(e => ({ kind: 'function', name: e.name }))
  const interfaces = mod.interfaces.map(e => ({ kind: 'interfaces', name: e.name }))
  const typeAliases = mod.typeAliases.map(e => ({ kind: 'type_alias', name: e.name }))
  const variables = mod.variables.map(e => ({ kind: 'variable', name: e.name }))
  return exports
    .concat(functions)
    .concat(interfaces)
    .concat(typeAliases)
    .concat(variables)
    .sort((a, b) => compare(a.name, b.name))
    .map(e => ({
      ...e,
      path: `#/api/${state.project}/${mod.path.substr(0, mod.path.length - 3)}.html#${e.name}`
    }))
}

export const moduleToc = nav<State, unknown>(
  {},
  mapState(
    { map: mapModuleToToc },
    ul(
      { attrs: { class: 'module-toc-list' } },
      forEach(
        {},
        li(
          { attrs: { class: 'is-size-7' } },
          a(
            { attrs: { href: s => s.path } },
            // span(
            //   { attrs: { class: s => `icon icon-${s.kind}` } }
            // ),
            // ' ',
            s => s.name
          )
        )
      )
    )
  )
)
