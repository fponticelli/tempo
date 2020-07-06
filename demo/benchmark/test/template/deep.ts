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

import { DIV } from 'tempo-dom/lib/html'

export interface Deep {
  id: string
  name: string
  address: {
    line1: string
    line2: string
  }
  paragraph: string
}

export const deep = DIV<Deep, unknown, unknown>($ =>
  $.id(s => s.id).DIV($ =>
    $.H1($ => $.text('Welcome ').text(s => s.name))
      .ADDRESS($ =>
        $.DIV($ => $.text('Address: '))
          .DIV($ => $.text(s => s.address.line1))
          .DIV($ => $.text(s => s.address.line2))
      )
      .ARTICLE($ => $.text(s => s.paragraph))
  )
).build()
