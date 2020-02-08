import { h3 } from 'tempo-dom/lib/html'

export const title = h3<{ name: string }, unknown> (
  { attrs: { id: s => s.name, class: 'is-family-monospace has-text-grey-dark' } },
  s => s.name
)
