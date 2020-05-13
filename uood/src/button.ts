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
import { control } from 'tempo-ui/lib/ui'
import {
  Padding,
  Size,
  Radius,
  Length,
  Background,
  Border,
  Cursor,
  Transition,
  Shadow
} from 'tempo-ui/lib/ui_attributes'
import { ofRGB } from 'tempo-colors/lib/rgb'
import { ofHSLA } from 'tempo-colors/lib/hsla'
import { Theme } from './theme'

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
  const theme = attrs.theme?.button
  return control<State, Action, Query, T>(
    {
      elementName: 'button',
      padding: theme?.padding ?? Padding.each(9 - 2, 16), // padding - border
      width: theme?.width ?? Size.min(32 * 2.25),
      height: theme?.height ?? Size.min(32),
      borderRadius: theme?.borderRadius ?? Radius.all(Length.px(16)),
      background: theme?.background ?? Background.rgba(0, 0, 0, 0),
      border: theme?.border ?? Border.all(2, ofRGB(75, 75, 75), 'solid'),
      fontSize: theme?.fontSize ?? 14,
      textColor: theme?.textColor ?? ofRGB(75, 75, 75),
      cursor: Cursor.pointer,
      textAlign: theme?.textAlign ?? 'center',
      shadow: theme?.shadow,
      transition:
        theme?.transition ??
        Transition.make(['background', 'text-color', 'shadow'], '0.25s'),
      focusedStyle: {
        shadow: Shadow.drop({
          color: ofHSLA(0, 0, 0.2, 0.125),
          spreadRadius: 4,
          blurRadius: 2
        })
      },
      hoverStyle: {
        background: Background.rgba(75, 75, 75, 1),
        textColor: ofRGB(255, 255, 255)
      },
      activeStyle: {
        border: Border.all(2, ofRGB(44, 44, 44), 'solid'),
        background: Background.rgba(44, 44, 44, 1),
        textColor: ofRGB(255, 255, 255)
      },
      disabledStyle: {
        background: Background.rgb(234, 234, 234),
        border: Border.all(2, ofRGB(234, 234, 234)),
        textColor: ofRGB(179, 179, 179),
        cursor: 'auto'
      },
      disabled: attrs.disabled,
      events: {
        click:
          attrs.onPress &&
          ((state: State, ev: MouseEvent, el: Element) => {
            return attrs.onPress!(state)
          })
      }
      // variant
    },
    attrs.label
  )
}
