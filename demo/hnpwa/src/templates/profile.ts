/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { section, table, tr, td, b } from 'tempo-dom/lib/html'
import { Profile, User } from '../state'
import { Action } from '../action'
import { mapState } from 'tempo-dom/lib/map'
import { when } from 'tempo-dom/lib/when'
import { unsafeHtml } from 'tempo-dom/lib/unsafe_html'

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
        tr(
          {},
          td({}, 'about:'),
          td(
            {},
            unsafeHtml({}, user => user.about)
          )
        )
      )
    )
  )
)
