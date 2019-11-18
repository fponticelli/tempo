import { ul, li } from '@mood/dom/lib/html'
import { forEach } from '@mood/dom/lib/for_each'

export const list = ul<number[], unknown>(
  {},
  forEach(
    {},
    li(
      { attrs: { className: String } },
      String
    )
  )
)
