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

import { Attribute, ValueOfAttribute, Props } from 'tempo-dom/lib/value'
import { Padding, Length, Background, fill } from '../property_types'
import { keys } from 'tempo-std/lib/objects'
import { toHex } from 'tempo-std/lib/numbers'
import { matchKind } from 'tempo-std/lib/match'
import { Rule } from 'dom/lib/class_styled_element'
import { toRGB, getAlpha, toCSS3 } from 'tempo-colors/lib/color'
import { red, green, blue } from 'tempo-colors/lib/rgb'

export interface ElStyleProperties<State> {
  background?: Attribute<State, Background>
  height?: Attribute<State, Length>
  padding?: Attribute<State, Padding>
  width?: Attribute<State, Length>
}

export interface PropertyRecord<T extends Record<string, Attribute<any, any>>> {
  kind: keyof T
  value: ValueOfAttribute<T[keyof T]>
}

function paddingRules(padding: Padding): Rule[] {
  return matchKind(
    padding,
    {
      PaddingAll: p => {
        const cls = `pa${p.value}`
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [`padding: ${p.value}px;`]
        }]
      },
      PaddingHV: p => {
        const cls = `phv${p.v}-${p.h}`
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [`padding: ${p.v}px ${p.h}px;`]
        }]
      },
      PaddingEach: p => {
        const cls = `pe${p.top}-${p.right}-${p.bottom}-${p.left}`
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [
            `padding: ${p.top}px ${p.right}px ${p.bottom}px ${p.left}px;`
          ]
        }]
      }
    }
  )
}

function widthRules(length: Length): Rule[] {
  return matchKind(
    length,
    {
      LengthFill: _ => {
        const cls = 'wf'
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => ['width: 100%;']
        }]
      },
      LengthMax: l => {
        const inner = widthRules(l.length)[0]
        const cls = `wmx${l.length}-${inner.cls}`
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [`max-width: ${l.max}px; ${widthRules(l.length)};`]
        }]
      },
      LengthMin: l => {
        const inner = widthRules(l.length)[0]
        const cls = `wmi${l.length}-${inner.cls}`
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [`min-width: ${l.min}px; ${widthRules(l.length)};`]
        }]
      },
      LengthFillPortion: l => {
        if (l.portion === 1) {
          return widthRules(fill)
        } else {
          const cls = `wlfp${l.portion}`
          const selector = `.${cls}`
          return [{
            cls, selector,
            definitions: () => [``]
          }, {
            cls: undefined, selector: `.r > .${cls}`,
            definitions: () => [`flex-grow: ${l.portion * 10000}px;`]
          }]
        }
      },
      LengthPx: l => {
        const cls = `wpx${l.value}`
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [`width: ${l.value}px;`]
        }]
      },
      LengthShrink: _ => {
        const cls = 'ws'
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [`width: auto;`] // TODO or `max-content` / `min-content` ?
        }]
      }
    }
  )
}

function heightRules(length: Length): Rule[] {
  return matchKind(
    length,
    {
      LengthFill: l => {
        const cls = 'hf'
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => ['height: 100%;']
        }]
      },
      LengthMax: l => {
        const cls = 'hmx'
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [
            `max-height: ${l.max}px; ${widthRules(l.length)};`]
          }
        ]
      },
      LengthMin: l => {
        const cls = 'hmi'
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [
            `min-height: ${l.min}px; ${widthRules(l.length)};`]
          }
        ]
      },
      LengthFillPortion: l => {
        if (l.portion === 1) {
          return widthRules(fill)
        } else {
          const cls = `hlfp${l.portion}`
          const selector = `.${cls}`
          return [{
            cls, selector,
            definitions: () => [``]
          }, {
            cls: undefined, selector: `.r > .${cls}`,
            definitions: () => [`flex-grow: ${l.portion * 10000}px;`]
          }]
        }
      },
      LengthPx: l => {
        const cls = 'hpx'
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [`height: ${l.value}px;`]
        }]
      },
      LengthShrink: l => {
        const cls = 'hs'
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [`height: auto;`]
        }]
      }
    }
  )
}

function backgroundRules(b: Background): Rule[] {
  return matchKind(
    b,
    {
      BackgroundColor: bg => {
        const color = toRGB(bg.color)
        const r = toHex(red(color), 2)
        const g = toHex(green(color), 2)
        const b = toHex(blue(color), 2)
        const alpha = getAlpha(bg.color)
        const a = alpha === 1 ? '' : toHex(Math.round(alpha * 255), 2)
        const cls = `b${r}${g}${b}${a}`
        const selector = `.${cls}`
        return [{
          cls, selector,
          definitions: () => [`background-color: ${toCSS3(bg.color)};`]
        }]
      }
    }
  )
}

const elMappingRules = {
  background: backgroundRules,
  padding: paddingRules,
  width: widthRules,
  height: heightRules
} as Record<keyof ElStyleProperties<any>, (arg: any) => Rule[]> // TODO type better

export function makeElRules(
  prop: PropertyRecord<ElStyleProperties<any>>
): Rule[] {
  return elMappingRules[prop.kind](prop.value)
}

export function extractLifeCycle<State, Action, Query, El extends Element, T>(
  props: Props<State, Action, Query, El, T>
) {
  return {
    afterrender: props.afterrender,
    beforechange: props.beforechange,
    afterchange: props.afterchange,
    beforedestroy: props.beforedestroy,
    respond: props.respond
  }
}

export const elStyleProperties = keys(elMappingRules)
