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

import { section } from 'tempo-dom/lib/html'
import { Profile } from '../state'
import { Action } from '../action'
import { unsafeHtml } from 'tempo-dom/lib/lifecycle/unsafe_html'

export const profileTemplate = section<Profile, Action, unknown>($ =>
  $.class('user-view').mapState(
    profile => profile.user,
    $ =>
      $.table($ =>
        $.tr($ =>
          $.td($ => $.text('user:')).td($ => $.b($ => $.text(user => user.id)))
        )
          .tr($ =>
            $.td($ => $.text('created:')).td($ => $.text(user => user.created))
          )
          .tr($ =>
            $.td($ => $.text('karma:')).td($ =>
              $.text(user => String(user.karma))
            )
          )
          .when(
            user => user.about !== undefined,
            $ =>
              $.tr($ =>
                $.td($ => $.text('about:')).td($ =>
                  $.lifecycle(unsafeHtml(user => user.about))
                )
              )
          )
      )
  )
)
