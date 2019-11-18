import { div, h1, address, article } from '@mood/dom/lib/html'

export interface Deep {
  id: string
  name: string
  address: {
    line1: string
    line2: string
  }
  paragraph: string
}

export const deep = div<Deep, unknown>(
  { attrs: { id: s => s.id } },
  div(
    {},
    h1({}, 'Welcome ', s => s.name),
    address(
      {},
      div({}, 'Address:'),
      div({}, s => s.address.line1),
      div({}, s => s.address.line2)
    ),
    article({}, s => s.paragraph)
  )
)
