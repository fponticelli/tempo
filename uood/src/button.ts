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

import { Attribute } from 'tempo-dom/lib/value'
import { control, inline } from 'tempo-ui/lib/ui'
import { Cursor } from 'tempo-ui/lib/ui_attributes'
import { Theme, SubStyle } from './theme'
import { Uood } from './uood'

export type ButtonVariant =
  | { kind: 'ButtonCTA' }
  | { kind: 'ButtonOverBackground'; quiet: boolean }
  | { kind: 'ButtonPrimary'; quiet: boolean }
  | { kind: 'ButtonSecondary'; quiet: boolean }
  | { kind: 'ButtonWarning'; quiet: boolean }

export const Variant = {
  cta: { kind: 'ButtonCTA' } as ButtonVariant,
  overBackground: (quiet: boolean): ButtonVariant => ({
    kind: 'ButtonOverBackground',
    quiet
  }),
  primary: (quiet: boolean): ButtonVariant => ({
    kind: 'ButtonPrimary',
    quiet
  }),
  secondary: (quiet: boolean): ButtonVariant => ({
    kind: 'ButtonSecondary',
    quiet
  }),
  warning: (quiet: boolean): ButtonVariant => ({ kind: 'ButtonWarning', quiet })
}

export function applyKeys<T extends {}>(
  keys: (keyof T)[],
  ...ts: (T | undefined)[]
): T {
  const t = {} as T
  for (const k of keys) {
    for (const c of ts) {
      if (typeof c !== 'undefined' && typeof c[k] !== 'undefined') {
        t[k] = c[k]
        break
      }
    }
  }
  return t
}

export function subStyle<State>(
  t1: SubStyle<State> | undefined,
  t2: SubStyle<State> | undefined,
  t3: SubStyle<State> | undefined
): SubStyle<State> {
  return applyKeys(['background', 'border', 'shadow', 'textColor'], t1, t2, t3)
}

export function button<State, Action, Query = unknown, T = unknown>(attrs: {
  theme?: Theme<State>
  label: Attribute<State, string>
  variant?: Attribute<State, ButtonVariant>
  // icon: Attribute<State, Icon>
  // RTL has icon mirrored
  disabled?: Attribute<State, boolean>
  onPress?: undefined | ((state: State) => Action)
  // padding width = height / 2
  // min width = height * 2.25 (min doesn't apply for quiet)
}) {
  const button = attrs.theme?.button
  const dButton = Uood.theme?.button
  const { focusedStyle, hoverStyle, activeStyle, disabledStyle } = button ?? {}
  const {
    focusedStyle: dFocusedStyle,
    hoverStyle: dHoverStyle,
    activeStyle: dActiveStyle,
    disabledStyle: dDisabledStyle
  } = dButton ?? {}
  return control<State, Action, Query, T>(
    {
      elementName: 'button',
      cursor: Cursor.pointer,
      disabled: attrs.disabled,
      userSelect: 'none',
      textTransform: button?.textTransform ?? dButton?.textTransform,
      fontFamily: button?.fontFamily ?? dButton?.fontFamily,
      fontWeight: button?.fontWeight ?? dButton?.fontWeight,
      padding: button?.padding ?? dButton?.padding,
      width: button?.width ?? dButton?.width,
      height: button?.height ?? dButton?.height,
      borderRadius: button?.borderRadius ?? dButton?.borderRadius,
      background: button?.background ?? dButton?.background,
      border: button?.border ?? dButton?.border,
      fontSize: button?.fontSize ?? dButton?.fontSize,
      textColor: button?.textColor ?? dButton?.textColor,
      textAlign: button?.textAlign ?? dButton?.textAlign,
      shadow: button?.shadow ?? dButton?.shadow,
      transition: button?.transition ?? dButton?.transition,
      focusedStyle: subStyle(focusedStyle, button, dFocusedStyle),
      hoverStyle: subStyle(hoverStyle, button, dHoverStyle),
      activeStyle: subStyle(activeStyle, button, dActiveStyle),
      disabledStyle: {
        cursor: 'auto',
        ...subStyle(disabledStyle, button, dDisabledStyle)
      },
      events: {
        click:
          attrs.onPress &&
          ((state: State, ev: MouseEvent, el: Element) => {
            return attrs.onPress!(state)
          })
      }
      // variant
    },
    inline(
      {
        elementName: 'span'
      },
      attrs.label
    )
  )
}