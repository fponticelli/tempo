import { H3 } from 'tempo-dom/lib/html'
import { replace } from 'tempo-std/lib/strings'

const mapName = (s: string) => {
  return replace(s, '_', ' ')
}

export const title = H3<{ name: string; kind: string }, unknown, unknown>($ =>
  $.id(s => s.name)
    .class('is-family-monospace has-text-grey-dark')
    .text(s => s.name)
    .SPAN($ =>
      $.class(
        'kind is-family-sans-serif has-text-grey-light is-size-6'
      ).text(s => mapName(s.kind))
    )
)
