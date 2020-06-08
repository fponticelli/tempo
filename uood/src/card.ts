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

import { container } from 'tempo-ui/lib/ui'
import { Theme } from './theme'
import { Uood } from './uood'
import { DOMChild } from 'tempo-dom/lib/template'
import { subStyle } from './button'
import { Attribute } from 'tempo-dom/lib/value'
import { Size, Distribution, Orientation } from 'tempo-ui/lib/ui_attributes'

export function card<State, Action, Query = unknown, T = unknown>(
  props: {
    theme?: Theme<State>
    header?: DOMChild<State, Action, Query> | DOMChild<State, Action, Query>[]
    height?: Attribute<State, Size>
    width?: Attribute<State, Size>
    alignament?: Attribute<State, Distribution>
    orientation?: Attribute<State, Orientation>
    distribution?: Attribute<State, Distribution>
  },
  ...children: DOMChild<State, Action, Query>[]
) {
  const card = props.theme?.card
  const dCard = Uood.theme?.card
  const { hoverStyle } = card ?? {}
  const { hoverStyle: dHoverStyle } = dCard ?? {}
  return container<State, Action, Query, T>(
    {
      elementName: 'div',
      alignament: props.alignament ?? 'center',
      background: card?.background ?? dCard?.background,
      border: card?.border ?? dCard?.border,
      borderRadius: card?.borderRadius ?? dCard?.borderRadius,
      distribution: props.distribution ?? 'center',
      height: props.height ?? card?.height ?? dCard?.height,
      hoverStyle: subStyle(hoverStyle, card, dHoverStyle),
      orientation: props.orientation ?? 'col',
      padding: card?.padding ?? dCard?.padding,
      shadow: card?.shadow ?? dCard?.shadow,
      spacing: card?.spacing ?? dCard?.spacing,
      transition: card?.transition ?? dCard?.transition,
      width: props.width ?? card?.width ?? dCard?.width
    },
    ...children
  )
}
