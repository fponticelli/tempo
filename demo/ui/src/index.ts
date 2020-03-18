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

import { Tempo } from 'tempo-dom/lib/tempo'
import { el } from 'tempo-ui/lib/layout'
import { resetStyles } from 'tempo-ui/lib/reset'
import { fill, shrink, bgColor, paddingAll } from 'tempo-ui/lib/property_types'
import { Store } from 'tempo-store/lib/store'
import { ofRGB } from 'tempo-colors/lib/rgb'

const state = 0

type Action = 'increment'

const reducer = (state: number, action: Action): number => {
  switch (action) {
    case 'increment':
      return state + 1
    default:
      throw `this should never happen`
  }
}

const store = Store.ofState({ state, reducer })

const template = el<number, Action>(
  {
    width: shrink,
    height: fill,
    background: bgColor(ofRGB(240, 240, 240)),
    padding: paddingAll(10)
  },
  'Some Text Here'
)
// div<number, Action>(
//   {},
//   button<number, Action>(
//     { label: (v: number) => `clicked: ${v}` }
//   ),
//   button<number, Action>(
//     { label: (v: number) => `other button clicked: ${v}` }
//   )
// )

resetStyles()

Tempo.render({ store, template })
