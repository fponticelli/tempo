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
import { hiddenWhenEmpty } from 'tempo-dom/lib/hidden_when_empty'
import { when } from 'tempo-dom/lib/when'
import { subStyle } from './button'
import { Attribute, mapAttribute, mapAttributes } from 'tempo-dom/lib/value'
import {
  Size,
  Distribution,
  Orientation,
  Overflow,
  Padding,
  Radius,
  Background,
  Length
  // Padding
} from 'tempo-ui/lib/ui_attributes'
import { headline } from './headline'

export type CardHeader<State, Action, Query> = {
  title?: DOMChild<State, Action, Query>
  subhead?: DOMChild<State, Action, Query>
  thumbnail?: DOMChild<State, Action, Query>
  context?: DOMChild<State, Action, Query>
}

export type CardMedia<State, Action, Query> = {
  location?: 'top' | 'center'
  content: DOMChild<State, Action, Query>
}

// function childToArray<State, Action, Query>(
//   c:
//     | undefined
//     | DOMChild<State, Action, Query>
//     | DOMChild<State, Action, Query>[]
// ): DOMChild<State, Action, Query>[] {
//   if (c === undefined) return []
//   if (Array.isArray(c)) return c
//   else return [c]
// }

// function wrap<State, Action, Query>(
//   child: undefined | DOMChild<State, Action, Query>,
//   wrapper: (
//     c: DOMChild<State, Action, Query>
//   ) => DOMChild<State, Action, Query> = c => c
// ): DOMChild<State, Action, Query> {
//   return when(
//     {
//       condition: mapAttribute(child, s => {
//         console.log(s)
//         return s !== undefined
//       })
//     },
//     wrapper(child)
//   )
// }

export function card<State, Action, Query = unknown, T = unknown>(props: {
  theme?: Theme<State>
  header?: CardHeader<State, Action, Query>
  footer?: DOMChild<State, Action, Query>
  media?: CardMedia<State, Action, Query>
  content?: DOMChild<State, Action, Query>

  height?: Attribute<State, Size>
  width?: Attribute<State, Size>
  verticalDistribution?: Attribute<State, Distribution>
  orientation?: Attribute<State, Orientation>
  horizontalDistribution?: Attribute<State, Distribution>
}) {
  const card = props.theme?.card
  const dCard = Uood.theme?.card
  const { hoverStyle } = card ?? {}
  const { hoverStyle: dHoverStyle } = dCard ?? {}

  const topPadding = 16
  const bottomPadding = 16
  const horizontalPadding = 16
  const spacing = 12

  const blocks = [] as DOMChild<State, Action, Query>[]
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
        hiddenWhenEmpty(
          {},
          container(
            {
              width: Size.fixed(46),
              height: Size.fixed(46),
              borderRadius: Radius.all(Length.percent(50)),
              background: Background.hsla(0, 0, 0, 0.1),
              verticalDistribution: 'center',
              horizontalDistribution: 'center',
              overflow: Overflow.make('hidden')
            },
            props.header?.thumbnail
          )
        )
      )
    }
    if (
      props.header?.title !== undefined ||
      props.header?.subhead !== undefined
    ) {
      const headerTitles = []
      if (props.header?.title !== undefined) {
        headerTitles.push(
          hiddenWhenEmpty(
            {},
            headline({ theme: props.theme, level: 3 }, props.header?.title)
          )
        )
      }
      if (props.header?.subhead !== undefined) {
        headerTitles.push(
          hiddenWhenEmpty(
            {},
            headline({ theme: props.theme, level: 6 }, props.header?.subhead)
          )
        )
      }
      left.push(
        container(
          {
            // padding: Padding.each(16, 0, 16, 16), // TODO
            orientation: 'col'
            // verticalDistribution: 'center',
          },
          ...headerTitles
        )
      )
    }

    let right = []
    if (props.header?.context !== undefined) {
      right.push(
        hiddenWhenEmpty(
          {},
          block(
            {
              selfHorizontalDistribution: 'flex-end'
            },
            props.header?.context
          )
        )
      )
    }
    if (left.length > 0 || right.length > 0) {
      blocks.push(
        when(
          {
            condition: mapAttributes(
              {
                thumbnail: props.header.thumbnail,
                title: props.header.title,
                subhead: props.header.subhead,
                context: props.header.context
              },
              o => {
                return (
                  o.thumbnail !== undefined ||
                  o.title !== undefined ||
                  o.subhead !== undefined ||
                  o.context !== undefined
                )
              }
            )
          },
          container(
            {
              orientation: 'row',
              padding: Padding.each(0, horizontalPadding, 0, horizontalPadding), // or Padding.each(0, 16, 0, 16) when media is centered // TODO
              spacing, // 16 TODO
              verticalDistribution: 'center',
              horizontalDistribution: 'space-between'
              // padding: Padding.each(0, 0, 0, 16)
            },
            container(
              {
                orientation: 'row',
                // spacing: 16, // TODO
                verticalDistribution: 'center',
                spacing // 16 TODO
                // horizontalDistribution: 'flex-start'
              },
              ...left
            ),
            container(
              {
                orientation: 'row'
                // padding: Padding.each(16, 16, 16, 0)
                // spacing: 10, // TODO
                // verticalDistribution: 'center',
                // horizontalDistribution: 'flex-end'
              },
              ...right
            )
          )
        )
      )
    }
  }

  if (props.media && mediaLocation === 'center') {
    blocks.push(hiddenWhenEmpty({}, block({}, props.media.content)))
  }

  if (props.content !== undefined) {
    blocks.push(
      hiddenWhenEmpty(
        {},
        container(
          {
            width: Size.fill(),
            spacing: card?.spacing ?? dCard?.spacing,
            orientation: props.orientation ?? 'col',
            verticalDistribution: props.verticalDistribution ?? 'center',
            horizontalDistribution: props.horizontalDistribution ?? 'center',
            padding: Padding.each(0, horizontalPadding, 0, horizontalPadding)
            // padding: card?.padding ?? dCard?.padding
          },
          props.content
        )
      )
    )
  }

  if (props.footer !== undefined) {
    blocks.push(
      hiddenWhenEmpty(
        {},
        container(
          {
            // padding: Padding.each(0, 16, 16, 16)
          },
          props.footer
        )
      )
    )
  }

  return container<State, Action, Query, T>(
    {
      padding: mapAttribute(
        mapAttributes(
          {
            media: props.media,
            header: props.header,
            content: props.content,
            footer: props.footer
          },
          o => {
            return {
              showPaddingTop:
                o.media === undefined || mediaLocation === 'center',
              showPaddingBottom:
                o.media !== undefined &&
                o.content === undefined &&
                o.footer === undefined
            }
          }
        ),
        ({ showPaddingTop, showPaddingBottom }) =>
          Padding.each(
            showPaddingTop ? topPadding : 0,
            0,
            showPaddingBottom ? bottomPadding : 0,
            0
          )
      ),
      background: card?.background ?? dCard?.background,
      border: card?.border ?? dCard?.border,
      borderRadius: card?.borderRadius ?? dCard?.borderRadius,
      height: props.height ?? card?.height ?? dCard?.height,
      hoverStyle: subStyle(hoverStyle, card, dHoverStyle),
      orientation: props.orientation ?? 'col',
      shadow: card?.shadow ?? dCard?.shadow,
      transition: card?.transition ?? dCard?.transition,
      width: props.width ?? card?.width ?? dCard?.width,
      overflow: Overflow.make('hidden'),
      spacing
    },
    ...blocks
  )
}
