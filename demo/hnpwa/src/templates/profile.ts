import { section, table, tr, td, b } from '@tempo/dom/lib/html'
import { Profile, User } from '../state'
import { Action } from '../action'
import { mapState } from '@tempo/dom/lib/map'
import { when } from '@tempo/dom/lib/when'
import { unsafeHtml } from '@tempo/dom/lib/unsafe_html'
import { sanitize } from 'dompurify'

export const profileTemplate = section<Profile, Action>(
  { attrs: { className: 'user-view' } },
  mapState(
    { map: profile => profile.user },
    table<User, Action>(
      {},
      tr(
        {},
        td({}, 'user:'),
        td(
          {},
          b({}, user => user.id)
        )
      ),
      tr(
        {},
        td({}, 'created:'),
        td({}, user => user.created)
      ),
      tr(
        {},
        td({}, 'karma:'),
        td({}, user => String(user.karma))
      ),
      when(
        { condition: user => !!user.about },
        tr({}, td({}, 'about:'), td({}, unsafeHtml({ content: user => user.about, transform: sanitize })))
      )
    )
  )
)
