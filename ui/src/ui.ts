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
  BorderRadius,
  Size,
  Length,
  Border,
  BorderStyle
} from './ui_attributes'
import { matchKind } from 'tempo-std/lib/match'
import { toCSS3, Color } from 'tempo-colors/lib/color'

export interface ElProperties {
  elementName?: string
}

export interface ElContainerProperties<State> {
  orientation?: Attribute<State, Orientation>
}

export interface ElBlockProperties<State> {
  background?: Attribute<State, Background>
  border?: Attribute<State, Border>
  borderRadius?: Attribute<State, BorderRadius>
  padding?: Attribute<State, Padding>
  transition?: Attribute<State, Transition>
  width?: Attribute<State, Size>
  height?: Attribute<State, Size>
}

export interface ElTextProperties<State> {
  fontSize?: Attribute<State, number>
  textColor?: Attribute<State, Color>
}

export interface ElMouseProperties<State> {
  hover?: ElBlockProperties<State> & ElTextProperties<State>
  active?: ElBlockProperties<State> & ElTextProperties<State>
  focusWithin?: ElBlockProperties<State> & ElTextProperties<State>
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

function lengthToString(length: Length) {
  return matchKind(length, {
    Percent: l => `${l.value}%`,
    Px: l => `${l.value}px`
  })
}

function borderOneToString(width: number, style: BorderStyle, color: Color) {
  return `${width}px ${style} ${toCSS3(color)}`
}

function borderToString(b: Border): string {
  return matchKind(b, {
    BorderAll: b => borderOneToString(b.all.width, b.all.style, b.all.color),
    BorderEach: b =>
      [
        borderOneToString(b.top.width, b.top.style, b.top.color),
        borderOneToString(b.right.width, b.right.style, b.right.color),
        borderOneToString(b.bottom.width, b.bottom.style, b.bottom.color),
        borderOneToString(b.left.width, b.left.style, b.left.color)
      ].join(', ')
  })
}

function borderRadiusToString(b: BorderRadius): string {
  return matchKind(b, {
    BorderRadiusAll: b => {
      const v = [lengthToString(b.all.first)]
      if (typeof b.all.second !== 'undefined')
        v.push(lengthToString(b.all.second))
      return v.join(' / ')
    },
    BorderRadiusEach: b => {
      const { tl, tr, br, bl } = b
      const v = [
        lengthToString(tl.first) +
          ' ' +
          lengthToString(tr.first) +
          ' ' +
          lengthToString(br.first) +
          ' ' +
          lengthToString(bl.first)
      ]
      if (
        typeof (tl.second ?? tr.second ?? br.second ?? bl.second) !==
        'undefined'
      ) {
        const tls = tl.second ?? tl.first
        const trs = tr.second ?? tr.first
        const bls = bl.second ?? bl.first
        const brs = br.second ?? br.first
        v.push(
          lengthToString(tls) +
            ' ' +
            lengthToString(trs) +
            ' ' +
            lengthToString(brs) +
            ' ' +
            lengthToString(bls)
        )
      }
      return v.join(' / ')
    }
  })
}

function oneTransitionToString(t: OneTransition) {
  const buff = [String(t.target)]
  if (typeof t.duration !== 'undefined') buff.push(t.duration)
  if (typeof t.timingFunction !== 'undefined') buff.push(t.timingFunction)
  if (typeof t.delay !== 'undefined') buff.push(t.delay)
  return buff.join(' ')
}

function applyBlockProps<State>(
  prefix: string,
  pseudo: string,
  v: {
    [K in keyof ElBlockProperties<State>]: ValueOfAttribute<
      ElBlockProperties<State>[K]
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
      SizeFixed: s => (styles[`${prefix}w`] = `${s.value}px`),
      SizeMin: s => (styles[`${prefix}w-mi`] = `${s.value}px`),
      SizeMax: s => (styles[`${prefix}w-ma`] = `${s.value}px`)
    })
  }

  if (typeof v.height !== 'undefined') {
    properties.push(features.height(prefix, pseudo))
    matchKind(v.height, {
      SizeFill: s => (styles[`${prefix}f`] = String(s.ratio)),
      SizeFixed: s => (styles[`${prefix}h`] = `${s.value}px`),
      SizeMin: s => (styles[`${prefix}h-mi`] = `${s.value}px`),
      SizeMax: s => (styles[`${prefix}h-ma`] = `${s.value}px`)
    })
  }

  if (typeof v.border !== 'undefined') {
    properties.push(features.border(prefix, pseudo))
    styles[`${prefix}b`] = borderToString(v.border)
  }

  if (typeof v.borderRadius !== 'undefined') {
    properties.push(features.borderRadius(prefix, pseudo))
    styles[`${prefix}br`] = borderRadiusToString(v.borderRadius)
  }
}

function applyTextProps<State>(
  prefix: string,
  pseudo: string,
  v: {
    [K in keyof ElTextProperties<State>]: ValueOfAttribute<
      ElTextProperties<State>[K]
    >
  },
  properties: ClassDescription[],
  styles: Record<string, string>
) {
  if (typeof v.fontSize !== 'undefined') {
    properties.push(features.fontSize(prefix, pseudo))
    styles[`${prefix}fs`] = `${v.fontSize}px`
  }
  if (typeof v.textColor !== 'undefined') {
    properties.push(features.textColor(prefix, pseudo))
    styles[`${prefix}tc`] = toCSS3(v.textColor)
  }
}

function applyMouseProps<State>(
  state: State,
  v: {
    [K in keyof ElMouseProperties<State>]: ValueOfAttribute<
      ElMouseProperties<State>[K]
    >
  },
  properties: ClassDescription[],
  styles: Record<string, string>
) {
  if (typeof v.hover !== 'undefined') {
    resolveAttribute(
      mapAttributes(v.hover, x => {
        applyBlockProps('H', ':hover', x, properties, styles)
        applyTextProps('H', ':hover', x, properties, styles)
      })
    )(state)
  }

  if (typeof v.active !== 'undefined') {
    resolveAttribute(
      mapAttributes(v.active, x =>
        applyBlockProps('A', ':active', x, properties, styles)
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
        applyBlockProps('FW', ':focus-within', x, properties, styles)
      )
    )(state)
  }
}

export function container<State, Action, Query = unknown, TScope = unknown>(
  props: ElProperties &
    ElBlockProperties<State> &
    ElTextProperties<State> &
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

        applyBlockProps('', '', v, properties, styles)
        applyTextProps('', '', v, properties, styles)
        applyMouseProps(state, v, properties, styles)

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

export function block<State, Action, Query = unknown, TScope = unknown>(
  props: ElProperties &
    ElBlockProperties<State> &
    ElTextProperties<State> &
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
        const properties = [] as ClassDescription[]
        const styles: Record<string, string> = {}

        applyBlockProps('', '', v, properties, styles)
        applyTextProps('', '', v, properties, styles)
        applyMouseProps(state, v, properties, styles)

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

export function inline<State, Action, Query = unknown, TScope = unknown>(
  props: ElProperties &
    ElBlockProperties<State> &
    ElTextProperties<State> &
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
        const properties = [features.inline]
        const styles: Record<string, string> = {}

        applyBlockProps('', '', v, properties, styles)
        applyTextProps('', '', v, properties, styles)
        applyMouseProps(state, v, properties, styles)

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
