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
import { inline } from 'tempo-ui/lib/ui'
import {
  Padding,
  Size,
  Radius,
  Length,
  Background,
  Border
} from 'tempo-ui/lib/ui_attributes'
import { ofRGB } from 'tempo-colors/lib/rgb'

export type ButtonVariant =
  | { kind: 'ButtonCTA' }
  | { kind: 'ButtonOverBackground'; quiet: Boolean }
  | { kind: 'ButtonPrimary'; quiet: Boolean }
  | { kind: 'ButtonSecondary'; quiet: Boolean }
  | { kind: 'ButtonWarning'; quiet: Boolean }

export const Variant = {
  cta: { kind: 'ButtonCTA' } as ButtonVariant,
  overBackground: (quiet: Boolean): ButtonVariant => ({
    kind: 'ButtonOverBackground',
    quiet
  }),
  primary: (quiet: Boolean): ButtonVariant => ({
    kind: 'ButtonPrimary',
    quiet
  }),
  secondary: (quiet: Boolean): ButtonVariant => ({
    kind: 'ButtonSecondary',
    quiet
  }),
  warning: (quiet: Boolean): ButtonVariant => ({ kind: 'ButtonWarning', quiet })
}

export function button<State, Action, Query = unknown, T = unknown>(attrs: {
  label: Attribute<State, string>
  variant?: Attribute<State, ButtonVariant>
  // icon: Attribute<State, Icon>
  disabled?: Attribute<State, Boolean>

  // focus
  // padding width = height / 2
  // min width = height * 2.25 (min doesn't apply for quiet)
  // centered text
  // RTL has icon mirrored
  // triggers on space or enter
}) {
  return inline<State, Action, Query, T>(
    {
      elementName: 'button',
      padding: Padding.each(9 - 2, 16), // padding - border
      width: Size.min(32 * 2.25),
      height: Size.min(32),
      borderRadius: Radius.all(Length.px(16)),
      background: Background.rgba(0, 0, 0, 0),
      border: Border.all(2, ofRGB(75, 75, 75), 'solid'),
      fontSize: 14,
      textColor: ofRGB(75, 75, 75),
      hover: {
        background: Background.rgba(75, 75, 75, 1),
        textColor: ofRGB(255, 255, 255)
      },
      active: {
        border: Border.all(2, ofRGB(44, 44, 44), 'solid'),
        background: Background.rgba(44, 44, 44, 1),
        textColor: ofRGB(255, 255, 255)
      }
      // text align center
      // font size
      // rounded corners
      // hover
      // border
      // activex
      // margins
      // variant
      // disabled
      // bg color
    },
    attrs.label
  )
}
