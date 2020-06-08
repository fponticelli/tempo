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
import { button } from 'uood/lib/button'
import { textField } from 'uood/lib/text_field'
import { container } from 'tempo-ui/lib/ui'
import { resetStyles } from 'tempo-ui/lib/reset'
import { Size } from 'tempo-ui/lib/ui_attributes'
import { Theme } from 'uood/lib/theme'
import { card } from 'uood/lib/card'
import { stage } from 'uood/lib/stage'
import { theme as blueprint } from 'uood/lib/theme/blueprint'
import { theme as material } from 'uood/lib/theme/material'
import { theme as neumorphic } from 'uood/lib/theme/neumorphic'
import { theme as skeumorphic } from 'uood/lib/theme/skeumorphic'
import { theme as spectrum } from 'uood/lib/theme/spectrum'

// import { Uood } from 'uood/lib/uood'
// Uood.setDefaultTheme(skeumorphic)

type Action = {}
type State = {}

const reducer = (state: State, action: Action): State => state

const state: State = {}

const controls = (name: string, theme?: Theme<State>) =>
  stage<State, Action>(
    { theme },
    card(
      {
        theme,
        header: name
      },
      textField({
        theme,
        value: '',
        placeholder: 'placeholder ...'
      }),
      textField({
        theme,
        disabled: true,
        value: '',
        placeholder: 'placeholder ...'
      }),
      button({
        theme,
        label: 'add'
        // onPress: (s: State) => ({ kind: 'ChangePadding', value: s.padding + 1 })
      }),
      button({
        theme,
        disabled: true,
        label: 'remove'
      })
    )
  )

const template = container<State, Action>(
  {
    orientation: 'row',
    height: Size.fill(),
    width: Size.fill()
  },
  controls('default', undefined),
  controls('spectrum', spectrum),
  controls('blueprint', blueprint),
  controls('material', material),
  controls('neumorphic', neumorphic),
  controls('skeumorphic', skeumorphic)
)

resetStyles()

Tempo.render({ state, reducer, template })
