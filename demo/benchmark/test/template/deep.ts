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

import { div, h1, address, article } from 'tempo-dom/lib/html'

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
