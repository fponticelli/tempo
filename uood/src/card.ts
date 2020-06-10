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

import { container, block } from 'tempo-ui/lib/ui'
import { Theme } from './theme'
import { Uood } from './uood'
import { DOMChild } from 'tempo-dom/lib/template'
import { when } from 'tempo-dom/lib/when'
import { subStyle } from './button'
import { Attribute, mapAttribute } from 'tempo-dom/lib/value'
import {
  Size,
  Distribution,
  Orientation,
  Overflow,
  Padding
} from 'tempo-ui/lib/ui_attributes'
import { headline } from './headline'

export type CardHeader<State, Action, Query> = {
  headerText?: DOMChild<State, Action, Query>
  subhead?: DOMChild<State, Action, Query>
  thumbnail?: DOMChild<State, Action, Query>
  context?: DOMChild<State, Action, Query>
}

export type CardMedia<State, Action, Query> = {
  location?: 'top' | 'center'
  content: DOMChild<State, Action, Query>
}

function childToArray<State, Action, Query>(
  c:
    | undefined
    | DOMChild<State, Action, Query>
    | DOMChild<State, Action, Query>[]
): DOMChild<State, Action, Query>[] {
  if (c === undefined) return []
  if (Array.isArray(c)) return c
  else return [c]
}

function wrap<State, Action, Query>(
  child:
    | undefined
    | DOMChild<State, Action, Query>
    | DOMChild<State, Action, Query>[],
  wrapper: (
    ...c: DOMChild<State, Action, Query>[]
  ) => DOMChild<State, Action, Query> = c => c
): DOMChild<State, Action, Query> {
  return when(
    {
      condition: mapAttribute(
        child,
        s => s !== undefined && (!Array.isArray(s) || s[0] !== undefined)
      )
    },
    wrapper(...childToArray(child))
  )
}

export function card<State, Action, Query = unknown, T = unknown>(
  props: {
    theme?: Theme<State>
    header?: CardHeader<State, Action, Query>
    footer?: DOMChild<State, Action, Query>
    media?: CardMedia<State, Action, Query>

    height?: Attribute<State, Size>
    width?: Attribute<State, Size>
    verticalDistribution?: Attribute<State, Distribution>
    orientation?: Attribute<State, Orientation>
    horizontalDistribution?: Attribute<State, Distribution>
  },
  ...children: DOMChild<State, Action, Query>[]
) {
  const card = props.theme?.card
  const dCard = Uood.theme?.card
  const { hoverStyle } = card ?? {}
  const { hoverStyle: dHoverStyle } = dCard ?? {}

  const blocks = []
  const mediaLocation =
    props.media?.location ??
    card?.mediaLocation ??
    dCard?.mediaLocation ??
    'center'

  if (props.media && mediaLocation === 'top') {
    blocks.push(props.media.content)
  }

  if (props.header !== undefined) {
    const left = []
    if (props.header?.thumbnail !== undefined) {
      left.push(
        wrap(props.header?.thumbnail, c =>
          block(
            {
              padding: Padding.each(0, 0, 0, 16)
            },
            c
          )
        )
      )
    }
    if (
      props.header?.headerText !== undefined ||
      props.header?.subhead !== undefined
    ) {
      const headerTitles = []
      if (props.header?.headerText !== undefined) {
        headerTitles.push(
          wrap(props.header?.headerText, c =>
            headline({ theme: props.theme, level: 3 }, c)
          )
        )
      }
      if (props.header?.subhead !== undefined) {
        headerTitles.push(
          wrap(props.header?.subhead, c =>
            headline({ theme: props.theme, level: 6 }, c)
          )
        )
      }
      left.push(
        container(
          {
            padding: Padding.each(16, 0, 16, 16), // TODO
            orientation: 'col'
            // verticalDistribution: 'center',
            // spacing: 16 // TODO
          },
          ...headerTitles
        )
      )
    }

    let right = []
    if (props.header?.context !== undefined) {
      right.push(
        wrap(props.header?.context, c =>
          block(
            {
              selfHorizontalDistribution: 'flex-end'
            },
            c
          )
        )
      )
    }
    if (left.length > 0 || right.length > 0) {
      blocks.push(
        container(
          {
            orientation: 'row',
            spacing: 16, // TODO
            verticalDistribution: 'center',
            horizontalDistribution: 'space-between'
            // padding: Padding.each(0, 0, 0, 16)
          },
          container(
            {
              orientation: 'row',
              // spacing: 16, // TODO
              verticalDistribution: 'center'
              // horizontalDistribution: 'flex-start'
            },
            ...left
          ),
          container(
            {
              orientation: 'row',
              padding: Padding.each(16, 16, 16, 0)
              // spacing: 10, // TODO
              // verticalDistribution: 'center',
              // horizontalDistribution: 'flex-end'
            },
            ...right
          )
        )
      )
    }
  }

  if (props.media && mediaLocation === 'center') {
    blocks.push(wrap(props.media.content, c => block({}, c)))
  }

  if (children.length > 0) {
    blocks.push(
      container(
        {
          width: Size.fill(),
          spacing: card?.spacing ?? dCard?.spacing,
          orientation: props.orientation ?? 'col',
          verticalDistribution: props.verticalDistribution ?? 'center',
          horizontalDistribution: props.horizontalDistribution ?? 'center',
          padding: card?.padding ?? dCard?.padding
        },
        ...children
      )
    )
  }

  if (props.footer !== undefined) {
    blocks.push(
      wrap(props.footer, c =>
        container(
          {
            padding: Padding.each(0, 16, 16, 16)
          },
          c
        )
      )
    )
  }

  return container<State, Action, Query, T>(
    {
      background: card?.background ?? dCard?.background,
      border: card?.border ?? dCard?.border,
      borderRadius: card?.borderRadius ?? dCard?.borderRadius,
      height: props.height ?? card?.height ?? dCard?.height,
      hoverStyle: subStyle(hoverStyle, card, dHoverStyle),
      orientation: props.orientation ?? 'col',
      shadow: card?.shadow ?? dCard?.shadow,
      transition: card?.transition ?? dCard?.transition,
      width: props.width ?? card?.width ?? dCard?.width,
      overflow: Overflow.make('hidden')
    },
    ...blocks
  )
}
