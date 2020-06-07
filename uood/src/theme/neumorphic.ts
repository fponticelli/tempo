import { Theme } from '../theme'
import {
  Padding,
  Radius,
  Length,
  Border,
  Transition,
  Shadow,
  Background,
  Size,
  ColorStop,
  GradientAngle
} from 'tempo-ui/lib/ui_attributes'
import { ofRGB } from 'tempo-colors/lib/rgb'
import { ofRGBA } from 'tempo-colors/lib/rgba'
import { range } from 'tempo-std/lib/arrays'

export interface ThemeOptions<State> {}

export function make<State>(options: ThemeOptions<State> = {}): Theme<State> {
  let mul = 1
  let multiplier = 2
  let steps = 4
  const lightShadowColor = ofRGBA(255, 255, 255, 255 * 0.3)
  const darkShadowColor = ofRGBA(0, 0, 0, 255 * 0.1)
  const topShadows = range(steps, _ => {
    const shadow = Shadow.drop({
      x: -mul,
      y: -mul,
      blur: mul * 1.5,
      color: lightShadowColor
    })
    mul *= multiplier
    return shadow
  })
  mul = 1
  const bottomShadows = range(steps, _ => {
    const shadow = Shadow.drop({
      x: mul,
      y: mul,
      blur: mul * 1.5,
      color: darkShadowColor
    })
    mul *= multiplier
    return shadow
  })

  mul = 1
  multiplier = 1.6
  const hoverTopShadows = range(steps, _ => {
    const shadow = Shadow.inset({
      x: -mul,
      y: -mul,
      blur: mul * 1.5,
      color: lightShadowColor
    })
    mul *= multiplier
    return shadow
  })
  mul = 1
  const hoverBottomShadows = range(steps, _ => {
    const shadow = Shadow.inset({
      x: mul,
      y: mul,
      blur: mul * 1.5,
      color: darkShadowColor
    })
    mul *= multiplier
    return shadow
  })
  const normalShadows = [...topShadows, ...bottomShadows]
  const focusShadows = [
    ...topShadows,
    Shadow.inset({
      x: 2,
      y: 2,
      blur: 2,
      color: darkShadowColor
    }),
    Shadow.inset({
      x: -2,
      y: -2,
      blur: 2,
      color: lightShadowColor
    }),
    ...bottomShadows
  ]
  const hoverShadows = [
    ...topShadows,
    ...bottomShadows,
    ...hoverTopShadows,
    ...hoverBottomShadows
  ]
  const activeShadows = [...hoverTopShadows, ...hoverBottomShadows]

  const padding = {
    big: Padding.all(36),
    medium: Padding.all(24)
  }
  const spacing = {
    big: 36,
    medium: 24
  }
  const card = {
    background: Background.linearGradient(
      [ColorStop.hsla(0, 0, 1, 0.2), ColorStop.hsla(0, 0, 0, 0.01)],
      GradientAngle.degrees(-60)
    )
  }
  const stage = {
    background: Background.rgb(237, 239, 243)
  }

  const textFieldShadows = [
    Shadow.drop({
      spread: 1,
      color: darkShadowColor
    }),
    Shadow.drop({ spread: 3, color: ofRGBA(255, 255, 255, 0.5 * 255) }),
    Shadow.drop({ spread: 3, blur: 3, color: ofRGBA(0, 0, 0, 0.15 * 255) }),
    ...activeShadows
  ]

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
      borderRadius: Radius.all(Length.px(24)),
      shadow: Shadow.multi(...normalShadows)
    },
    button: {
      fontSize: 20,
      fontFamily: 'Poppins, sans-serif',
      background: Background.rgba(0, 0, 0, 0),
      border: Border.none,
      padding: Padding.each(0, 40),
      height: Size.fixed(40),
      width: Size.min(80),
      borderRadius: Radius.all(Length.px(40)),
      textColor: ofRGB(0x6d, 0x75, 0x87),
      // textTransform: 'capitalize',
      transition: Transition.make('shadow', '0.25s', 'ease'),
      shadow: Shadow.multi(...normalShadows),
      hoverStyle: {
        background: Background.none,
        shadow: Shadow.multi(...hoverShadows)
      },
      focusedStyle: {
        shadow: Shadow.multi(...focusShadows),
        background: Background.none
      },
      activeStyle: {
        shadow: Shadow.multi(...activeShadows)
      },
      disabledStyle: {
        textColor: ofRGBA(0, 0, 0, 255 * 0.2),
        background: Background.rgba(0, 0, 0, 255 * 0.05),
        shadow: Shadow.multi(...activeShadows)
      }
    },
    textField: {
      background: Background.rgba(255, 255, 255, 0.4 * 255),
      border: Border.none, // Border.all(3, ofRGBA(255, 255, 255, 255 * 0.4)),
      borderRadius: Radius.all(Length.px(10)),
      padding: Padding.each(0, 14),
      height: Size.fixed(40),
      shadow: Shadow.multi(...textFieldShadows),
      focusedStyle: {
        shadow: Shadow.multi(...normalShadows, ...textFieldShadows)
      },
      disabledStyle: {
        shadow: Shadow.multi(...textFieldShadows),
        background: Background.rgba(0, 0, 0, 255 * 0.04)
      }
    }
  }
}

export const theme = make<any>()
