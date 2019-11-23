import { div } from '@tempo/dom/lib/html'

export interface TestStyles {
  backgroundColor: string
  color: string
  border: string
}

export const style = div<TestStyles, unknown>(
  { styles: { backgroundColor: s => s.backgroundColor, color: s => s.color, border: s => s.border } },
  'content'
)
