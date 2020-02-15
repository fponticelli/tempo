import { div } from 'tempo-dom/lib/html'

export const loader = div<any, any>(
  { attrs: { class: 'loader' } },
  div(
    { attrs: { class: 'title has-text-grey-light is-size-5 loading' } },
    'Loading ...'
  )
)
