import { Theme } from '../theme'
import {
  Padding,
  Radius,
  Length,
  Border,
  Transition,
  Shadow,
  Background,
  Size
} from 'tempo-ui/lib/ui_attributes'
import { ofRGB } from 'tempo-colors/lib/rgb'
import { ofRGBA } from 'tempo-colors/lib/rgba'
import { range } from 'tempo-std/lib/arrays'

export interface ThemeOptions<State> {}

export function make<State>(options: ThemeOptions<State> = {}): Theme<State> {
  let mul = 1
  let multiplier = 2
  let steps = 3
  const topShadows = range(steps, _ => {
    const shadow = Shadow.drop({
      x: -mul,
      y: -mul,
      blur: mul * 1.5,
      color: ofRGBA(255, 255, 255, 255 * 1)
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
      color: ofRGBA(55, 84, 170, 255 * 0.15)
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
      color: ofRGBA(255, 255, 255, 255 * 1)
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
      color: ofRGBA(55, 84, 170, 255 * 0.15)
    })
    mul *= multiplier
    return shadow
  })
  const normalShadows = [...topShadows, ...bottomShadows]
  const focusShadows = [
    ...topShadows,
    Shadow.inset({
      x: 0,
      y: 0,
      blur: 0,
      spread: 2,
      color: ofRGBA(255, 255, 255, 255 * 0.4)
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
  // const pressedShadows = [baseShadow, ...innerShadows, ...outerPressedShadows]
  return {
    button: {
      fontSize: 20,
      fontFamily: 'Poppins, sans-serif',
      border: Border.none,
      padding: Padding.each(0, 40),
      height: Size.min(40),
      width: Size.min(80),
      borderRadius: Radius.all(Length.px(40)),
      textColor: ofRGB(0x6d, 0x75, 0x87),
      textTransform: 'capitalize',
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
        shadow: Shadow.multi(
          ...activeShadows
          // Shadow.inset({
          //   x: 8,
          //   y: 8,
          //   blur: 12,
          //   color: ofRGBA(55, 84, 170, 255 * 0.1)
          // }),
          // Shadow.inset({
          //   x: -8,
          //   y: -8,
          //   blur: 12,
          //   color: ofRGBA(255, 255, 255, 255 * 0.2)
          // }),
          // Shadow.drop({
          //   x: 0,
          //   y: 0,
          //   blur: 4,
          //   color: ofRGBA(255, 255, 255, 255 * 0.2)
          // })
        )
      }
    }
  }
}

export const theme = make<any>()
