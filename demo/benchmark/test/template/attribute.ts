import { div } from '@tempo/dom/lib/html'

export interface TestAttributes {
  id: string
  className: string
  title: string
}

export const attribute = div<TestAttributes, unknown>(
  { attrs: { id: s => s.id, className: s => s.className, title: s => s.title } },
  'content'
)
