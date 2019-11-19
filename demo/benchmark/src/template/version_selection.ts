import { div, dl, h1, dt, dd, input, label, a } from '@tempo/dom/lib/html'
import { forEach } from '@tempo/dom/lib/for_each'
import { Action } from '../action'
import { mapState } from '@tempo/dom/lib/map'

export const versionSelection = div<Record<string, boolean>, Action>(
  {},
  h1({}, 'Versions'),
  a({ attrs: { href: '#' }, events: { click: () => Action.toggleAllVersions() } }, 'toggle all'),
  dl(
    {},
    mapState(
      { map: rec => Object.keys(rec).map(id => ({ id, selected: rec[id] })) },
      forEach<{ id: string; selected: boolean }[], Action>(
        {},
        dt(
          {},
          label({ attrs: { for: s => `version_${s.id}` } }, s => s.id)
        ),
        dd(
          {},
          input({
            attrs: {
              id: s => `version_${s.id}`,
              type: 'checkbox',
              checked: s => s.selected
            },
            events: {
              change: (s, e, el) => Action.toggleVersion(s.id, el.checked)
            }
          })
        )
      )
    )
  )
)
