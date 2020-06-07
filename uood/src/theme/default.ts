import { Theme } from '../theme'
import {
  Shadow,
  Background,
  Border,
  Radius,
  Length,
  Transition,
  Padding,
  Size
} from 'tempo-ui/lib/ui_attributes'
import { ofRGBA } from 'tempo-colors/lib/rgba'
import { ofRGB } from 'tempo-colors/lib/rgb'

export interface ThemeOptions<State> {}

export function make<State>(options: ThemeOptions<State> = {}): Theme<State> {
  const padding = {
    big: Padding.all(24),
    medium: Padding.all(16)
  }
  const spacing = {
    big: 10,
    medium: 8
  }
  const stage = {
    background: Background.rgb(248, 248, 248)
  }
  const card = {
    background: Background.rgb(255, 255, 255)
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
      transition: Transition.none
      // border: Border.all(1, ofRGB(220, 220, 220))
    },
    button: {
      fontSize: 14,
      fontFamily: 'sans-serif',
      padding: Padding.each(0, 15),
      width: Size.min(30),
      height: Size.fixed(30),
      textColor: ofRGB(0x18, 0x20, 0x26),
      textTransform: 'none',
      background: Background.rgb(0xf5, 0xf8, 0xfa),
      border: Border.none,
      borderRadius: Radius.all(Length.px(3)),
      hoverStyle: {
        background: Background.rgb(0xeb, 0xf1, 0xf5)
      },
      activeStyle: {
        border: Border.none,
        background: Background.rgb(0xd8, 0xe1, 0xe8),
        textColor: ofRGB(0x18, 0x20, 0x26)
      },
      disabledStyle: {
        background: Background.rgba(206, 217, 224, 112),
        textColor: ofRGBA(92, 112, 128, 153),
        shadow: Shadow.none
      },
      focusedStyle: {}
    },
    textField: {
      background: Background.rgb(255, 255, 255),
      border: Border.all(1, ofRGB(220, 220, 220)),
      fontFamily: 'sans-serif',
      fontSize: 14,
      height: Size.fixed(32),
      padding: Padding.each(0, 10),
      textAlign: 'start',
      textColor: ofRGB(75, 75, 75),
      transition: Transition.make(['border', 'shadow'], '0.25s'),
      width: Size.min(48),
      hoverStyle: {
        border: Border.all(1, ofRGB(210, 210, 210))
      },
      focusedStyle: {
        border: Border.all(1, ofRGB(200, 200, 200))
      },
      disabledStyle: {
        background: Background.rgb(234, 234, 234),
        border: Border.all(1, ofRGB(220, 220, 220)),
        textColor: ofRGB(179, 179, 179)
      },
      placeholderStyle: {
        textColor: ofRGB(112, 112, 112),
        fontStyle: 'italic'
      }
    }
  }
}

export const theme = make<any>()