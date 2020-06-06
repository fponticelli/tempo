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
import { Cursor } from 'tempo-ui/lib/ui_attributes'
import { Theme } from './theme'
import { Uood } from './uood'
import { subStyle, applyKeys } from './button'

export function textField<State, Action, Query = unknown, T = unknown>(attrs: {
  theme?: Theme<State>
  value: Attribute<State, string>
  placeholder?: Attribute<State, string>
  // variant?: Attribute<State, ButtonVariant>
  // icon: Attribute<State, Icon>
  // RTL has icon mirrored
  disabled?: Attribute<State, boolean>
  // onPress?: undefined | ((state: State) => Action)
  // validation text (helper, error, warning)
}) {
  const textField = attrs.theme?.textField
  const dTextField = Uood.theme?.textField
  const { focusedStyle, hoverStyle, disabledStyle, placeholderStyle } =
    textField ?? {}
  const {
    focusedStyle: dFocusedStyle,
    hoverStyle: dHoverStyle,
    disabledStyle: dDisabledStyle,
    placeholderStyle: dPlaceholderStyle
  } = dTextField ?? {}
  return control<State, Action, Query, T>({
    elementName: 'input',
    background: textField?.background ?? dTextField?.background,
    border: textField?.border ?? dTextField?.border,
    borderRadius: textField?.borderRadius ?? dTextField?.borderRadius,
    cursor: Cursor.text,
    fontFamily: textField?.fontFamily ?? dTextField?.fontFamily,
    fontSize: textField?.fontSize ?? dTextField?.fontSize,
    fontWeight: textField?.fontWeight ?? dTextField?.fontWeight,
    height: textField?.height ?? dTextField?.height,
    padding: textField?.padding ?? dTextField?.padding,
    placeholder: attrs.placeholder,
    shadow: textField?.shadow ?? dTextField?.shadow,
    textAlign: textField?.textAlign ?? dTextField?.textAlign,
    textColor: textField?.textColor ?? dTextField?.textColor,
    textTransform: textField?.textTransform ?? dTextField?.textTransform,
    transition: textField?.transition ?? dTextField?.transition,
    width: textField?.width ?? dTextField?.width,
    placeholderStyle: applyKeys(
      [
        'fontFamily',
        'fontSize',
        'fontStyle',
        'fontWeight',
        'letterSpacing',
        'textColor',
        'textShadow',
        'textTransform',
        'wordSpacing'
      ],
      placeholderStyle,
      textField,
      dPlaceholderStyle
    ),
    focusedStyle: subStyle(focusedStyle, textField, dFocusedStyle),
    hoverStyle: subStyle(hoverStyle, textField, dHoverStyle),
    disabledStyle: {
      cursor: 'auto',
      ...subStyle(disabledStyle, textField, dDisabledStyle)
    },
    disabled: attrs.disabled,
    value: attrs.value
    // events: {
    //   click:
    //     attrs.onPress &&
    //     ((state: State, ev: MouseEvent, el: Element) => {
    //       return attrs.onPress!(state)
    //     })
    // }
    // variant
  })
}
