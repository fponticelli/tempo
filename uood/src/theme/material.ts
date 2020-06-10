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
    big: 24,
    medium: 16
  }
  const card = {
    background: Background.rgb(255, 255, 255)
  }
  const stage = {
    background: Background.rgb(250, 250, 250)
  }
  const textFieldBorders = Border.each(
    Border.none,
    Border.none,
    Border.make(),
    Border.none
  )
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
      transition: Transition.none,
      borderRadius: Radius.all(Length.px(4)),
      width: Size.fixed(344),
      shadow: Shadow.multi(
        Shadow.drop({
          x: 0,
          y: 2,
          blur: 1,
          spread: -1,
          color: ofRGBA(0, 0, 0, 51)
        }),
        Shadow.drop({
          x: 0,
          y: 1,
          blur: 1,
          spread: 0,
          color: ofRGBA(0, 0, 0, 36)
        }),
        Shadow.drop({
          x: 0,
          y: 1,
          blur: 3,
          spread: 0,
          color: ofRGBA(0, 0, 0, 31)
        })
      )
    },
    button: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 14,
      textTransform: 'uppercase',
      padding: Padding.each(0, 16), // padding - border
      width: Size.min(64),
      height: Size.fixed(36),
      shadow: Shadow.multi(
        Shadow.drop({
          x: 0,
          y: 3,
          blur: 1,
          spread: -2,
          color: ofRGBA(0, 0, 0, 51)
        }),
        Shadow.drop({
          x: 0,
          y: 2,
          blur: 2,
          spread: 0,
          color: ofRGBA(0, 0, 0, 36)
        }),
        Shadow.drop({
          x: 0,
          y: 1,
          blur: 5,
          spread: 0,
          color: ofRGBA(0, 0, 0, 31)
        })
      ),
      textColor: ofRGB(255, 255, 255),
      background: Background.rgb(98, 0, 238),
      border: Border.none,
      borderRadius: Radius.all(Length.px(4)),
      transition: Transition.make(['background', 'shadow'], '0.5s'),
      hoverStyle: {
        background: Background.rgb(0x6e, 0x15, 0xef),
        textColor: ofRGB(255, 255, 255),
        shadow: Shadow.multi(
          Shadow.drop({
            x: 0,
            y: 2,
            blur: 4,
            spread: -1,
            color: ofRGBA(0, 0, 0, 51)
          }),
          Shadow.drop({
            x: 0,
            y: 4,
            blur: 5,
            spread: 0,
            color: ofRGBA(0, 0, 0, 36)
          }),
          Shadow.drop({
            x: 0,
            y: 1,
            blur: 10,
            spread: 0,
            color: ofRGBA(0, 0, 0, 31)
          })
        )
      },
      activeStyle: {
        textColor: ofRGB(255, 255, 255),
        border: Border.none,
        background: Background.rgb(0x94, 0x52, 0xf3),
        shadow: Shadow.multi(
          Shadow.drop({
            x: 0,
            y: 5,
            blur: 5,
            spread: -3,
            color: ofRGBA(0, 0, 0, 51)
          }),
          Shadow.drop({
            x: 0,
            y: 8,
            blur: 10,
            spread: 1,
            color: ofRGBA(0, 0, 0, 36)
          }),
          Shadow.drop({
            x: 0,
            y: 3,
            blur: 14,
            spread: 2,
            color: ofRGBA(0, 0, 0, 31)
          })
        )
      },
      disabledStyle: {
        background: Background.rgba(0, 0, 0, 31),
        textColor: ofRGBA(0, 0, 0, 94),
        shadow: Shadow.none
      },
      focusedStyle: {
        shadow: Shadow.multi(
          Shadow.drop({
            x: 0,
            y: 0,
            blur: 0,
            spread: 1,
            color: ofRGBA(255, 255, 255, 204)
          }),
          Shadow.drop({
            x: 0,
            y: 0,
            blur: 0,
            spread: 4,
            color: ofRGBA(50, 50, 255, 51)
          }),
          Shadow.drop({
            x: 0,
            y: 3,
            blur: 1,
            spread: -2,
            color: ofRGBA(0, 0, 0, 51)
          }),
          Shadow.drop({
            x: 0,
            y: 2,
            blur: 2,
            spread: 0,
            color: ofRGBA(0, 0, 0, 36)
          }),
          Shadow.drop({
            x: 0,
            y: 1,
            blur: 5,
            spread: 0,
            color: ofRGBA(0, 0, 0, 31)
          })
        )
      }
    },
    textField: {
      background: Background.rgb(245, 245, 245),
      border: textFieldBorders,
      borderRadius: Radius.none,
      fontFamily: 'sans-serif',
      fontSize: 16,
      height: Size.fixed(56),
      padding: Padding.each(0, 16),
      textAlign: 'start',
      textColor: ofRGB(75, 75, 75),
      transition: Transition.make(['border', 'shadow'], '0.25s'),
      width: Size.min(48),
      // shadow: Shadow.multi(...basicInputShadow),
      hoverStyle: {
        // shadow: Shadow.multi(...selectedInputShadow),
        background: Background.rgb(0xec, 0xec, 0xec),
        border: textFieldBorders
      },

      focusedStyle: {
        // shadow: Shadow.multi(...selectedInputShadow),
        border: textFieldBorders
      },
      disabledStyle: {
        background: Background.rgb(234, 234, 234),
        border: Border.all(2, ofRGB(234, 234, 234)),
        textColor: ofRGB(179, 179, 179)
      },
      placeholderStyle: {
        textColor: ofRGBA(0, 0, 0, 255 * 0.6)
      }
    }
  }
}

export const theme = make<any>()
