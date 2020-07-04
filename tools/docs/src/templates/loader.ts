import { div } from 'tempo-dom/lib/html'

export const loader = div<any, any, unknown>($ =>
  $.class('loader').div($ =>
    $.class('title has-text-grey-light is-size-5 loading').text('Loading ...')
  )
)
