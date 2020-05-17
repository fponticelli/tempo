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

export function textField<State, Action, Query = unknown, T = unknown>(attrs: {
  value: Attribute<State, string>
  placeholder?: Attribute<State, string>
  variant?: Attribute<State, ButtonVariant>
  // icon: Attribute<State, Icon>
  // RTL has icon mirrored
  disabled?: Attribute<State, boolean>
  onPress?: undefined | ((state: State) => Action)
}) {
  return control<State, Action, Query, T>({
    elementName: 'input',
    padding: Padding.each(9 - 2, 12), // padding - border
    width: Size.min(48),
    height: Size.min(32),
    borderRadius: Radius.all(Length.px(4)),
    background: Background.rgb(255, 255, 255),
    border: Border.all(1, ofRGB(225, 225, 225), 'solid'),
    fontSize: 14,
    textColor: ofRGB(75, 75, 75),
    cursor: Cursor.text,
    textAlign: 'start',
    transition: Transition.make(['border', 'shadow'], '0.25s'),
    placeholder: attrs.placeholder,
    placeholderStyle: {
      textColor: ofRGB(112, 112, 112),
      fontStyle: 'italic'
    },
    focusedStyle: {
      shadow: Shadow.drop({
        color: ofHSLA(0, 0, 0.2, 0.125),
        spread: 4,
        blur: 2
      }),
      border: Border.all(1, ofRGB(20, 115, 230))
    },
    hoverStyle: {
      textColor: ofRGB(75, 75, 75)
    },
    disabledStyle: {
      background: Background.rgb(234, 234, 234),
      border: Border.all(2, ofRGB(234, 234, 234)),
      textColor: ofRGB(179, 179, 179),
      cursor: 'auto'
    },
    disabled: attrs.disabled,
    value: attrs.value,
    events: {
      click:
        attrs.onPress &&
        ((state: State, ev: MouseEvent, el: Element) => {
          return attrs.onPress!(state)
        })
    }
    // variant
  })
}
