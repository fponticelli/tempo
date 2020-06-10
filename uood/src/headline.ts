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

import { block } from 'tempo-ui/lib/ui'
import { Theme } from './theme'
import { Uood } from './uood'
import { DOMChild } from 'tempo-dom/lib/template'

export function headline<State, Action, Query = unknown, T = unknown>(
  props: {
    level: 1 | 2 | 3 | 4 | 5 | 6
    theme?: Theme<State>
  },
  ...children: DOMChild<State, Action, Query>[]
) {
  const level = props.level
  const headline = props.theme?.headline && props.theme?.headline(level)
  const dHeadline = Uood.theme?.headline && Uood.theme?.headline(level)
  console.log(headline, dHeadline)
  return block<State, Action, Query, T>(
    {
      elementName: `h${level}`,
      padding: headline?.padding ?? dHeadline?.padding,
      borderRadius: headline?.borderRadius ?? dHeadline?.borderRadius,
      background: headline?.background ?? dHeadline?.background,
      spacing: headline?.spacing ?? dHeadline?.spacing,
      border: headline?.border ?? dHeadline?.border,
      shadow: headline?.shadow ?? dHeadline?.shadow,

      textTransform: headline?.textTransform ?? dHeadline?.textTransform,
      fontFamily: headline?.fontFamily ?? dHeadline?.fontFamily,
      fontWeight: headline?.fontWeight ?? dHeadline?.fontWeight,
      fontSize: headline?.fontSize ?? dHeadline?.fontSize,
      textColor: headline?.textColor ?? dHeadline?.textColor,
      textAlign: headline?.textAlign ?? dHeadline?.textAlign,
      textShadow: headline?.textShadow ?? dHeadline?.textShadow,
      lineHeight: headline?.lineHeight ?? dHeadline?.lineHeight,
      transition: headline?.transition ?? dHeadline?.transition
      // hoverStyle: subStyle(hoverStyle, headline, dHoverStyle)
    },
    ...children
  )
}
