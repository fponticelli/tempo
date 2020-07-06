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

import { SECTION } from 'tempo-dom/lib/html'
import { Profile } from '../state'
import { Action } from '../action'
import { unsafeHtml } from 'tempo-dom/lib/lifecycle/unsafe_html'

export const profileTemplate = SECTION<Profile, Action, unknown>($ =>
  $.class('user-view').MapState(
    profile => profile.user,
    $ =>
      $.TABLE($ =>
        $.TR($ =>
          $.TD($ => $.text('user:')).TD($ => $.B($ => $.text(user => user.id)))
        )
          .TR($ =>
            $.TD($ => $.text('created:')).TD($ => $.text(user => user.created))
          )
          .TR($ =>
            $.TD($ => $.text('karma:')).TD($ =>
              $.text(user => String(user.karma))
            )
          )
          .When(
            user => user.about !== undefined,
            $ =>
              $.TR($ =>
                $.TD($ => $.text('about:')).TD($ =>
                  $.Lifecycle(unsafeHtml(user => user.about))
                )
              )
          )
      )
  )
)
