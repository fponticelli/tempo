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

import { matchKind } from 'tempo-std/lib/match'
import { Tempo } from 'tempo-dom/lib/tempo'
import { button } from 'uood/lib/button'
import { textField } from 'uood/lib/text_field'
import { container, block } from 'tempo-ui/lib/ui'
import { resetStyles } from 'tempo-ui/lib/reset'
import { Store } from 'tempo-store/lib/store'
import { Background, Padding, Size } from 'tempo-ui/lib/ui_attributes'
import { Theme } from 'uood/lib/theme'
import { theme as blueprint } from 'uood/lib/theme/blueprint'
import { theme as material } from 'uood/lib/theme/material'
import { theme as neumorphic } from 'uood/lib/theme/neumorphic'
import { theme as skeumorphic } from 'uood/lib/theme/skeumorphic'
import { theme as spectrum } from 'uood/lib/theme/spectrum'

// import { Uood } from 'uood/lib/uood'
// Uood.setDefaultTheme(skeumorphic)

type Action = {
  kind: 'ChangePadding'
  value: number
}
type State = {
  padding: number
}

const reducer = (state: State, action: Action): State =>
  matchKind(action, {
    ChangePadding: p => ({ ...state, padding: p.value })
  })

const state: State = {
  padding: 10
}

const store = Store.ofState({ state, reducer })

const controls = (theme?: Theme<State>) => [
  block<State, Action>(
    {},
    textField({
      theme,
      value: p => String(p.padding),
      placeholder: 'placeholder ...'
    }),
    textField({
      theme,
      disabled: true,
      value: '',
      placeholder: 'placeholder ...'
    })
  ),
  block<State, Action>(
    {
      spacing: 10
    },
    button({
      theme,
      label: 'add',
      onPress: (s: State) => ({ kind: 'ChangePadding', value: s.padding + 1 })
    }),
    button({
      theme,
      label: 'remove',
      onPress: (s: State) => ({
        kind: 'ChangePadding',
        value: s.padding - 1
      }),
      disabled: (s: State) => s.padding < 10 // true
    })
  )
]

const template = container<State, Action>(
  {
    orientation: 'col',
    spacing: 20,
    height: Size.fill(),
    width: Size.fill()
  },
  container(
    {
      orientation: 'col',
      padding: Padding.all(20),
      spacing: 20,
      background: Background.rgb(245, 245, 245)
    },
    ...controls(undefined)
  ),
  container(
    {
      orientation: 'col',
      padding: Padding.all(20),
      spacing: 20,
      background: Background.rgb(245, 245, 245)
    },
    ...controls(spectrum)
  ),
  container(
    {
      orientation: 'col',
      padding: Padding.all(20),
      spacing: 20,
      background: Background.rgb(255, 255, 255)
    },
    ...controls(blueprint)
  ),
  container(
    {
      orientation: 'col',
      padding: Padding.all(20),
      spacing: 20,
      background: Background.rgb(255, 255, 255)
    },
    ...controls(material)
  ),
  container(
    {
      orientation: 'col',
      padding: Padding.all(20),
      spacing: 20,
      // #E4EBF5
      background: Background.rgb(0xe4, 0xeb, 0xf5)
      // background: Background.rgb(0xeb, 0xec, 0xf0)
    },
    ...controls(neumorphic)
  ),
  container(
    {
      orientation: 'col',
      padding: Padding.all(20),
      spacing: 20,
      // #E4EBF5
      background: Background.rgb(0xf2)
      // background: Background.rgb(0xeb, 0xec, 0xf0)
    },
    ...controls(skeumorphic)
  )
)

resetStyles()

Tempo.render({ store, template })
