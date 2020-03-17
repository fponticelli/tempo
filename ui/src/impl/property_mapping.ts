import { Attribute, ValueOfAttribute } from 'tempo-dom/lib/value'
import { Padding, Length } from '../property_types'
import { keys } from 'tempo-std/lib/objects'
import { Rule } from 'dom/lib/class_styled_element'

export interface ElStyleProperties<State> {
  padding?: Attribute<State, Padding>
  width?: Attribute<State, Length>
  height?: Attribute<State, Length>
}

export interface PropertyRecord<K extends keyof ElStyleProperties<unknown> = keyof ElStyleProperties<unknown>> {
  kind: K
  value: ValueOfAttribute<ElStyleProperties<unknown>[K]>
}

function paddingRules(p: Padding): Rule[] {
  switch (p.kind) {
    case 'PaddingAll':
      const cls1 = `pa-${p.value}`
      const selector1 = `.${cls1}`
      return [{
        cls: cls1, selector: selector1,
        definitions: () => [`padding: ${p.value}px;`]
      }]
    case 'PaddingHV':
      const cls2 = `phv-${p.v}-${p.h}`
      const selector2 = `.${cls2}`
      return [{
        cls: cls2, selector: selector2,
        definitions: () => [`padding: ${p.v}px ${p.h}px;`]
      }]
    case 'PaddingEach':
      const cls3 = `pe-${p.top}-${p.right}-${p.bottom}-${p.left}`
      const selector3 = `.${cls3}`
      return [{
        cls: cls3, selector: selector3,
        definitions: () => [`padding: ${p.top}px ${p.right}px ${p.bottom}px ${p.left}px;`]
      }]
    default:
      throw `Invalid padding '${p}'`
  }
}

function widthRules(l: Length): Rule[] {
  switch (l.kind) {
    case 'LengthFill':
      const cls1 = 'wf'
      const selector1 = `.${cls1}`
      return [{
        cls: cls1, selector: selector1,
        definitions: () => ['width: 100%;']
      }]
    case 'LengthMax':
      const cls2 = 'wmx'
      const selector2 = `.${cls2}`
      return [{
        cls: cls2, selector: selector2,
        definitions: () => [`max-width: ${l.max}px; ${widthRules(l.length)};`]
      }]
    case 'LengthMin':
      const cls3 = 'wmi'
      const selector3 = `.${cls3}`
      return [{
        cls: cls3, selector: selector3,
        definitions: () => [`min-width: ${l.min}px; ${widthRules(l.length)};`]
      }]
    case 'LengthPx':
      const cls4 = 'wpx'
      const selector4 = `.${cls4}`
      return [{
        cls: cls4, selector: selector4,
        definitions: () => [`width: ${l.value}px;`]
      }]
    case 'LengthShrink':
      const cls5 = 'ws'
      const selector5 = `.${cls5}`
      return [{
        cls: cls5, selector: selector5,
        definitions: () => [`width: auto;`] // TODO or `max-content` / `min-content` ?
      }]
    default:
      throw `Invalid width length '${l}'`
  }
}

function heightRules(l: Length): Rule[] {
  switch (l.kind) {
    case 'LengthFill':
      const cls1 = 'hf'
      const selector1 = `.${cls1}`
      return [{
        cls: cls1, selector: selector1,
        definitions: () => ['height: 100%;']
      }]
    case 'LengthMax':
      const cls2 = 'hmx'
      const selector2 = `.${cls2}`
      return [{
        cls: cls2, selector: selector2,
        definitions: () => [`max-height: ${l.max}px; ${widthRules(l.length)};`]
      }]
    case 'LengthMin':
      const cls3 = 'hmi'
      const selector3 = `.${cls3}`
      return [{
        cls: cls3, selector: selector3,
        definitions: () => [`min-height: ${l.min}px; ${widthRules(l.length)};`]
      }]
    case 'LengthPx':
      const cls4 = 'hpx'
      const selector4 = `.${cls4}`
      return [{
        cls: cls4, selector: selector4,
        definitions: () => [`height: ${l.value}px;`]
      }]
    case 'LengthShrink':
      const cls5 = 'hs'
      const selector5 = `.${cls5}`
      return [{
        cls: cls5, selector: selector5,
        definitions: () => [`height: auto;`]
      }]
    default:
      throw `Invalid height length '${l}'`
  }
}

const mappingRules = {
  padding: paddingRules,
  width: widthRules,
  height: heightRules
} as Record<keyof ElStyleProperties<any>, (arg: any) => Rule[]> // TODO type better

export function makeRules(prop: PropertyRecord): Rule[] {
  return mappingRules[prop.kind](prop.value)
}

export const styleProperties = keys(mappingRules)
