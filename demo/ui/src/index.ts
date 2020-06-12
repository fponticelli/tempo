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

import { keys } from 'tempo-std/lib/objects'
import { Tempo } from 'tempo-dom/lib/tempo'
import { when } from 'tempo-dom/lib/when'
import { img, table, tr, td, input, label } from 'tempo-dom/lib/html'
import { button } from 'uood/lib/button'
import { textField } from 'uood/lib/text_field'
import { container, block } from 'tempo-ui/lib/ui'
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
import { simpleComponent } from 'tempo-dom/lib/simple_component'

// import { Uood } from 'uood/lib/uood'
// Uood.setDefaultTheme(skeumorphic)

const themes: Record<string, Theme<any> | undefined> = {
  default: undefined,
  blueprint: blueprint,
  material: material,
  neumorphic: neumorphic,
  skeumorphic: skeumorphic,
  spectrum: spectrum
}

type State = {
  card: {
    hasThumbnail: boolean
    hasMedia: boolean
    hasTitle: boolean
    hasSubhead: boolean
    hasContext: boolean
    hasFooter: boolean
    hasContent: boolean
  }
  themes: string[]
}

const thumbnailImage =
  'https://avatars0.githubusercontent.com/u/163915?s=460&u=908306ca5898a8b6a4750c5d791f40d719428058&v=4'
const mediaImage =
  'https://4.img-dpreview.com/files/p/TS940x940~forums/60469637/309d0410bbd04e9382369328f611e07f'

const stored = localStorage.getItem('ui-explorer')
const state: State = stored
  ? JSON.parse(stored)
  : {
      card: {
        hasThumbnail: true,
        hasTitle: true,
        hasSubhead: true,
        hasContext: true,
        hasFooter: true,
        hasContent: true,
        hasMedia: true
      },
      themes: [
        'default',
        'blueprint',
        'material',
        'neumorphic',
        'skeumorphic',
        'spectrum'
      ]
    }

const displayComponents = (name: string, theme: undefined | Theme<any>) =>
  stage<State, State>(
    { theme },
    card({
      header: {
        title: when<State, State>(
          {
            condition: s => s.card.hasTitle
          },
          name
        ),
        context: when<State, State>(
          { condition: s => s.card.hasContext },
          'C' // TODO
        ),
        subhead: when<State, State>(
          { condition: s => s.card.hasSubhead },
          'A nifty subtitle'
        ),
        thumbnail: when<State, State>(
          {
            condition: s => s.card.hasThumbnail
          },
          img({
            styles: { width: '100%' },
            attrs: { src: thumbnailImage }
          })
        )
      },
      media: {
        content: when<State, State>(
          {
            condition: s => s.card.hasMedia
          },
          img({
            styles: { width: '100%' },
            attrs: { src: mediaImage }
          })
        )
      },
      footer: when<State, State>(
        { condition: s => s.card.hasFooter },
        'A smart footer text.'
      ),
      content: when<State, State>(
        {
          condition: s => s.card.hasContent
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
      ),
      theme
    })
  )

function flipCardValue(field: keyof State['card']) {
  return (s: State): State => {
    return {
      ...s,
      card: {
        ...s.card,
        [field]: !s.card[field]
      }
    }
  }
}
function setCardValue(field: keyof State['card'], value: boolean) {
  return (s: State): State => {
    return {
      ...s,
      card: {
        ...s.card,
        [field]: value
      }
    }
  }
}

function fieldSetValue(s: State, ...fields: (keyof State['card'])[]) {
  for (const field of fields) {
    if (s.card[field]) {
      return true
    }
  }
  return false
}

let multiControlCounter = 0
function multiControlRow(
  textLabel: string,
  ...fields: (keyof State['card'])[]
) {
  multiControlCounter++
  return tr<State, State>(
    {},
    td(
      { styles: { padding: '5px' } },
      label({ attrs: { for: `mc${multiControlCounter}` } }, textLabel)
    ),
    td(
      { styles: { padding: '5px' } },
      input({
        attrs: {
          id: `mc${multiControlCounter}`,
          type: 'checkbox',
          checked: s => fieldSetValue(s, ...fields)
        },
        events: {
          change: s => {
            return fields.reduce((acc, field) => {
              const setTo = !fieldSetValue(s, ...fields)
              return setCardValue(field, setTo)(acc)
            }, s)
          }
        }
      })
    )
  )
}

function controlRow(textLabel: string, field: keyof State['card']) {
  return tr<State, State>(
    {},
    td(
      { styles: { padding: '5px' } },
      label({ attrs: { for: field } }, textLabel)
    ),
    td(
      { styles: { padding: '5px' } },
      input({
        attrs: {
          id: field,
          type: 'checkbox',
          checked: s => s.card[field]
        },
        events: {
          change: flipCardValue(field)
        }
      })
    )
  )
}

const controls = table<State, State>(
  {
    styles: {
      width: '160px'
    }
  },
  tr({}, td({ attrs: { colspan: 2 } }, 'themes')),
  ...keys(themes).map(name => {
    return tr<State, State>(
      {},
      td({}, label({ attrs: { for: `theme${name}` } }, name)),
      td(
        {},
        input<State, State>({
          attrs: {
            id: `theme${name}`,
            type: 'checkbox',
            checked: s => s.themes.indexOf(name) >= 0
          },
          events: {
            change: (s: State, ev, el): State => {
              const pos = s.themes.indexOf(name)
              if (el.checked) {
                return { ...s, themes: s.themes.concat([name]) }
              } else {
                return {
                  ...s,
                  themes: s.themes.slice(0, pos).concat(s.themes.slice(pos + 1))
                }
              }
            }
          }
        })
      )
    )
  }),
  tr({}, td({ attrs: { colspan: 2 } }, 'card elements')),
  multiControlRow(
    'header',
    'hasThumbnail',
    'hasTitle',
    'hasSubhead',
    'hasContext'
  ),
  tr(
    {},
    td(
      { attrs: { colspan: 2 }, styles: { padding: '0 0 0 5px' } },
      table(
        { styles: { width: '100%' } },
        controlRow('thumbnail', 'hasThumbnail'),
        controlRow('title', 'hasTitle'),
        controlRow('subtitle', 'hasSubhead'),
        controlRow('context', 'hasContext')
      )
    )
  ),
  controlRow('media', 'hasMedia'),
  controlRow('content', 'hasContent'),
  controlRow('footer', 'hasFooter')
)

const component = simpleComponent(
  {},
  container<State, State>(
    {
      orientation: 'row',
      height: Size.fill(),
      width: Size.fill()
    },
    block({ width: Size.fixed(160) }, controls),
    ...keys(themes).map(name => {
      return when(
        { condition: s => s.themes.indexOf(name) >= 0 },
        displayComponents(name, themes[name])
      )
    })
  )
)

resetStyles()

const view = Tempo.renderSimple({ state, component })
view.onChange = (state: State) => {
  localStorage.setItem('ui-explorer', JSON.stringify(state))
}
