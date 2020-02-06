import { h3 } from 'tempo-dom/lib/html'

export const title = h3<{ name: string }, unknown> ({ attrs: { id: s => s.name } }, s => s.name)
