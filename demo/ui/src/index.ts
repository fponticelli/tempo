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
import {
  Background,
  Padding,
  Transition,
  Size
} from 'tempo-ui/lib/ui_attributes'
import { Theme } from 'uood/lib/theme'
import { theme as blueprint } from 'uood/lib/theme/blueprint'
import { theme as material } from 'uood/lib/theme/material'

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
      value: p => String(p.padding),
      placeholder: 'placeholder ...'
      // events: {
      //   input: (_s, _e, e) => ({
      //     kind: 'ChangePadding',
      //     value: Number(e.value)
      //   })
      // }
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
    orientation: 'row',
    height: Size.fill(),
    width: Size.fill()
  },
  container(
    {
      padding: p => Padding.each(p.padding, 20),
      background: Background.hsl(-10, 0.9, 0.95),
      transition: Transition.make('background', '2s'),
      hoverStyle: {
        background: Background.hsl(20, 0.9, 0.6)
      },
      activeStyle: {
        transition: Transition.make('background', '0.5s'),
        background: Background.hsl(30, 0.3, 0.9)
      },
      width: Size.fixed(50)
    },
    'A'
  ),
  container(
    {
      orientation: 'col',
      padding: Padding.all(10),
      spacing: 10,
      background: Background.rgb(245, 245, 245)
    },
    ...controls(undefined)
  ),
  container(
    {
      orientation: 'col',
      padding: Padding.all(10),
      spacing: 10,
      background: Background.rgb(245, 245, 245)
    },
    ...controls(blueprint)
  ),
  container(
    {
      orientation: 'col',
      padding: Padding.all(10),
      spacing: 10,
      background: Background.rgb(245, 245, 245)
    },
    ...controls(material)
  ),
  container(
    {
      width: Size.fill(),
      transition: Transition.multi(
        Transition.make('padding', '1s'),
        Transition.make('background', '0.5s')
      ),
      background: Background.hsl(120, 0.8, 0.8),
      padding: Padding.each(0),
      hoverStyle: {
        padding: p => Padding.each(p.padding)
      },
      activeStyle: {
        padding: p => Padding.each(p.padding * 2),
        background: p => Background.hsl(120 + p.padding, 0.8, 0.8)
      }
    },
    'C'
  )
)

resetStyles()

Tempo.render({ store, template })
