import { Theme } from '../theme'
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

export interface ThemeOptions<State> {}

export function make<State>(options: ThemeOptions<State> = {}): Theme<State> {
  const padding = {
    big: Padding.each(32, 40),
    medium: Padding.each(20, 24)
  }

  const spacing = {
    big: 24,
    medium: 14
  }
  const card = {
    background: Background.rgb(255, 255, 255),
    border: Border.all(1, ofRGB(234, 234, 234), 'solid'),
    borderHover: Border.all(1, ofRGB(202, 202, 202), 'solid'),
    borderRadius: Radius.all(Length.px(4))
  }
  const stage = {
    background: Background.rgb(245, 245, 245)
  }
  return {
    stage: {
      padding: padding.big,
      spacing: spacing.big,
      background: stage.background
    },
    card: {
      padding: padding.medium,
      spacing: spacing.medium,
      background: card.background,
      border: card.border,
      borderRadius: card.borderRadius,
      width: Size.fixed(240),
      transition: Transition.make(['border'], '0.25s'),
      hoverStyle: {
        border: card.borderHover
      }
    },
    button: {
      textTransform: 'none',
      shadow: Shadow.none,
      padding: Padding.each(0, 16), // padding - border
      width: Size.min(32 * 2.25),
      height: Size.fixed(32),
      borderRadius: Radius.all(Length.px(16)),
      background: Background.rgba(0, 0, 0, 0),
      border: Border.all(2, ofRGB(75, 75, 75), 'solid'),
      fontSize: 14,
      textColor: ofRGB(75, 75, 75),
      cursor: Cursor.pointer,
      textAlign: 'center',
      transition: Transition.make(
        ['background', 'text-color', 'shadow'],
        '0.25s'
      ),
      focusedStyle: {
        shadow: Shadow.drop({
          color: ofHSLA(0, 0, 0.2, 0.125),
          spread: 4,
          blur: 2
        })
      },
      hoverStyle: {
        background: Background.rgba(75, 75, 75, 255),
        textColor: ofRGB(255, 255, 255)
      },
      activeStyle: {
        border: Border.all(2, ofRGB(44, 44, 44), 'solid'),
        background: Background.rgba(44, 44, 44, 255),
        textColor: ofRGB(255, 255, 255)
      },
      disabledStyle: {
        background: Background.rgb(234, 234, 234),
        border: Border.all(2, ofRGB(234, 234, 234)),
        textColor: ofRGB(179, 179, 179)
      }
    },
    textField: {
      background: Background.rgb(255, 255, 255),
      border: Border.all(1, ofRGB(225, 225, 225), 'solid'),
      borderRadius: Radius.all(Length.px(4)),
      fontFamily: 'sans-serif',
      fontSize: 14,
      fontWeight: 400,
      height: Size.fixed(32),
      padding: Padding.each(0, 12),
      textAlign: 'start',
      textColor: ofRGB(75, 75, 75),
      transition: Transition.make(['border', 'shadow'], '0.25s'),
      width: Size.min(48),
      shadow: Shadow.none,
      hoverStyle: {
        shadow: Shadow.none,
        border: Border.all(1, ofRGB(20, 115, 230))
      },
      focusedStyle: {
        shadow: Shadow.none,
        border: Border.all(1, ofRGB(20, 115, 230))
      },
      disabledStyle: {
        background: Background.rgb(234, 234, 234),
        border: Border.all(2, ofRGB(234, 234, 234)),
        textColor: ofRGB(179, 179, 179)
      },
      placeholderStyle: {
        textColor: ofRGB(112, 112, 112),
        fontStyle: 'italic'
      }
    },
    headline: (level: 1 | 2 | 3 | 4 | 5 | 6) => {
      switch (level) {
        case 1:
          return {
            fontSize: 24,
            lineHeight: 30
          }
        case 2:
          return {
            fontSize: 22,
            lineHeight: 28
          }
        case 3:
          return {
            fontSize: 20,
            lineHeight: 26
          }
        case 4:
          return {
            fontSize: 18,
            lineHeight: 24
          }
        case 5:
          return {
            fontSize: 16,
            lineHeight: 22
          }
        case 6:
          return {
            fontSize: 14,
            lineHeight: 20
          }
      }
    }
  }
}

export const theme = make<any>()
