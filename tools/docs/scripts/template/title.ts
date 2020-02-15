import { h3, span } from 'tempo-dom/lib/html'
import { replace } from 'tempo-std/lib/strings'

const mapName = (s: string) => {
  return replace(s, '_', ' ')
}

export const title = h3<{ name: string, kind: string }, unknown> (
  { attrs: { id: s => s.name, class: 'is-family-monospace has-text-grey-dark' } },
  s => s.name,
  span(
    { attrs: { class: 'kind is-family-sans-serif has-text-grey-light is-size-6' } },
    s => mapName(s.kind)
  )
)
