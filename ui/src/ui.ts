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

import { DOMChild } from 'tempo-dom/lib/template'
import { DOMContext } from 'tempo-dom/lib/context'
import { el } from './ui_element'
import {
  Attribute,
  mapAttributes,
  EventHandler,
  ValueOfAttribute,
  resolveAttribute
} from 'tempo-dom/lib/value'
import { features, RuleDescription, ClassDescription } from './features'
import {
  Orientation,
  Background,
  Padding,
  Transition,
  OneTransition,
  Size
} from './ui_attributes'
import { matchKind } from 'tempo-std/lib/match'
import { toCSS3 } from 'tempo-colors/lib/color'

export interface ElContainerProperties<State> {
  elementName?: string
  orientation?: Attribute<State, Orientation>
}

export interface ElStyleProperties<State> {
  background?: Attribute<State, Background>
  padding?: Attribute<State, Padding>
  transition?: Attribute<State, Transition>
  width?: Attribute<State, Size>
  height?: Attribute<State, Size>
}

export interface ElMouseProperties<State> {
  hover?: ElStyleProperties<State>
  active?: ElStyleProperties<State>
  focusWithin?: ElStyleProperties<State>
}

export interface ElLifecycleProperties<State, Action, Query, TScope> {
  events?: Record<string, EventHandler<State, Action, any, Element>>
  afterrender?: (
    state: State,
    el: Element,
    ctx: DOMContext<Action>
  ) => TScope | undefined
  beforechange?: (
    state: State,
    el: Element,
    ctx: DOMContext<Action>,
    value: TScope | undefined
  ) => TScope | undefined
  afterchange?: (
    state: State,
    el: Element,
    ctx: DOMContext<Action>,
    value: TScope | undefined
  ) => TScope | undefined
  beforedestroy?: (
    el: Element,
    ctx: DOMContext<Action>,
    value: TScope | undefined
  ) => void
  respond?: (
    query: Query,
    el: Element,
    ctx: DOMContext<Action>,
    value: TScope | undefined
  ) => TScope | undefined
}

let styleEl: HTMLElement | undefined
let appliedToStyle = new Set()

function includeStyle(doc: Document, cls: string, descs: RuleDescription[]) {
  if (typeof styleEl === 'undefined') {
    styleEl = doc.createElement('style')
    styleEl.textContent += '\n'
    doc.head.appendChild(styleEl)
  }
  if (!appliedToStyle.has(cls)) {
    appliedToStyle.add(cls)
    const rules = descs
      .map(
        desc => `${desc.selector} {
  ${desc.rules.join(';\n  ')};
}`
      )
      .join('\n')
    styleEl.textContent += rules + '\n'
  }
}

function oneTransitionToString(t: OneTransition) {
  const buff = [String(t.target)]
  if (typeof t.duration !== 'undefined') buff.push(t.duration)
  if (typeof t.timingFunction !== 'undefined') buff.push(t.timingFunction)
  if (typeof t.delay !== 'undefined') buff.push(t.delay)
  return buff.join(' ')
}

function applyStyleProps<State>(
  prefix: string,
  pseudo: string,
  v: {
    [K in keyof ElStyleProperties<State>]: ValueOfAttribute<
      ElStyleProperties<State>[K]
    >
  },
  properties: ClassDescription[],
  styles: Record<string, string>
) {
  if (typeof v.background !== 'undefined') {
    properties.push(features.background(prefix, pseudo))
    styles[`${prefix}bg`] = matchKind(v.background, {
      BackgroundColor: bg => toCSS3(bg.color)
    })
  }

  if (typeof v.padding !== 'undefined') {
    properties.push(features.padding(prefix, pseudo))
    matchKind(v.padding, {
      PaddingAll: pad => (styles.p = `${pad.value}px`),
      PaddingEach: pad => {
        styles[`${prefix}p-t`] = `${pad.top}px`
        styles[`${prefix}p-r`] = `${pad.right}px`
        styles[`${prefix}p-b`] = `${pad.bottom}px`
        styles[`${prefix}p-l`] = `${pad.left}px`
      }
    })
  }

  if (typeof v.transition !== 'undefined') {
    properties.push(features.transition(prefix, pseudo))
    matchKind(v.transition, {
      Transition: t => (styles[`${prefix}t`] = oneTransitionToString(t)),
      MultiTransition: t =>
        (styles[`${prefix}t`] = t.transitions
          .map(oneTransitionToString)
          .join(', '))
    })
  }

  if (typeof v.width !== 'undefined') {
    properties.push(features.width(prefix, pseudo))
    matchKind(v.width, {
      SizeFill: s => (styles[`${prefix}f`] = String(s.ratio)),
      SizePX: s => (styles[`${prefix}w`] = `${s.value}px`)
    })
  }

  if (typeof v.height !== 'undefined') {
    properties.push(features.height(prefix, pseudo))
    matchKind(v.height, {
      SizeFill: s => (styles[`${prefix}f`] = String(s.ratio)),
      SizePX: s => (styles[`${prefix}h`] = `${s.value}px`)
    })
  }
}

export function container<State, Action, Query = unknown, TScope = unknown>(
  props: ElStyleProperties<State> &
    ElLifecycleProperties<State, Action, Query, TScope> &
    ElContainerProperties<State> &
    ElMouseProperties<State>,
  ...children: DOMChild<State, Action, Query>[]
) {
  const elementName = props?.elementName ?? 'div'
  const lifecycle = {
    afterrender: props.afterrender,
    beforechange: props.beforechange,
    afterchange: props.afterchange,
    beforedestroy: props.beforedestroy,
    respond: props.respond
  }
  const attrsf = (doc: Document) => (state: State) => {
    return resolveAttribute(
      mapAttributes(props, v => {
        const properties = [features.orientation[v.orientation ?? 'row']]
        const styles: Record<string, string> = {}

        applyStyleProps('', '', v, properties, styles)

        if (typeof v.hover !== 'undefined') {
          resolveAttribute(
            mapAttributes(v.hover, x =>
              applyStyleProps('H', ':hover', x, properties, styles)
            )
          )(state)
        }

        if (typeof v.active !== 'undefined') {
          resolveAttribute(
            mapAttributes(v.active, x =>
              applyStyleProps('A', ':active', x, properties, styles)
            )
          )(state)
        }

        // if (typeof v.focus !== 'undefined') {
        //   resolveAttribute(mapAttributes(v.focus, x =>
        //     applyStyleProps('f-', ':focus', x, properties, styles)
        //   ))(state)
        // }

        if (typeof v.focusWithin !== 'undefined') {
          resolveAttribute(
            mapAttributes(v.focusWithin, x =>
              applyStyleProps('FW', ':focus-within', x, properties, styles)
            )
          )(state)
        }

        properties.forEach(prop => includeStyle(doc, prop.cls, prop.desc))
        const classes = properties.map(p => p.cls)

        return { classes, styles }
      })
    )(state)
  }
  return el(
    elementName,
    {
      ...lifecycle,
      attrsf,
      events: props.events,
      afterrender: props.afterrender,
      beforechange: props.beforechange,
      afterchange: props.afterchange,
      beforedestroy: props.beforedestroy,
      respond: props.respond
    },
    ...children
  )
}
