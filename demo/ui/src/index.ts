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
import { input } from 'tempo-dom/lib/html'
import { button } from 'uood/lib/button'
import { container, block } from 'tempo-ui/lib/ui'
import { resetStyles } from 'tempo-ui/lib/reset'
import { Store } from 'tempo-store/lib/store'
import {
  Background,
  Padding,
  Transition,
  Size
} from 'tempo-ui/lib/ui_attributes'

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
      whenHover: {
        background: Background.hsl(20, 0.9, 0.6)
      },
      whenActive: {
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
      background: Background.hsl(60, 0.8, 0.8),
      transition: Transition.make('background', '1s'),
      padding: p => Padding.all(p.padding),
      whenActive: {
        background: Background.hsl(30, 0.3, 0.9)
      }
    },
    input({
      attrs: {
        value: p => String(p.padding)
      },
      events: {
        input: (_s, _e, e) => ({
          kind: 'ChangePadding',
          value: Number(e.value)
        })
      }
    }),
    block(
      {},
      button({
        label: 'Click Me!'
      }),
      button({
        label: 'Disabled Button',
        disabled: (s: State) => s.padding >= 10 // true
      })
    )
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
      whenHover: {
        padding: p => Padding.each(p.padding)
      },
      whenActive: {
        padding: p => Padding.each(p.padding * 2),
        background: p => Background.hsl(120 + p.padding, 0.8, 0.8)
      }
    },
    'C'
  )
)

resetStyles()

Tempo.render({ store, template })
