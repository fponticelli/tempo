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
  let multiplier = 1.8
  const steps = 5
  const baseShadow = Shadow.drop({
    x: 0,
    y: 0,
    blur: 1,
    spread: 1,
    color: ofRGBA(0, 0, 0, 255 * 0.1)
  })
  const innerShadows = range(steps, _ => {
    const shadow = Shadow.inset({
      x: 0,
      y: mul,
      blur: mul,
      color: ofRGBA(255, 255, 255, 255 * 0.2)
    })
    mul *= multiplier * 2
    return shadow
  })
  mul = 1
  const outerShadows = range(steps, _ => {
    const shadow = Shadow.drop({
      x: 0,
      y: mul,
      blur: mul,
      color: ofRGBA(0, 0, 0, 255 * 0.1)
    })
    mul *= multiplier * 0.8
    return shadow
  })
  mul = 1
  const outerHoverShadows = range(steps, _ => {
    const shadow = Shadow.drop({
      x: 0,
      y: mul,
      blur: mul,
      color: ofRGBA(0, 0, 0, 255 * 0.12)
    })
    mul *= multiplier
    return shadow
  })
  mul = 1
  const outerPressedShadows = range(steps, _ => {
    const shadow = Shadow.drop({
      x: 0,
      y: mul,
      blur: mul,
      color: ofRGBA(0, 0, 0, 255 * 0.1)
    })
    mul *= multiplier * 0.6
    return shadow
  })
  const normalShadows = [baseShadow, ...innerShadows, ...outerShadows]
  const hoverShadows = [baseShadow, ...innerShadows, ...outerHoverShadows]
  const pressedShadows = [baseShadow, ...innerShadows, ...outerPressedShadows]
  return {
    button: {
      fontSize: 13,
      fontFamily: 'sans-serif',
      fontWeight: 400,
      background: Background.rgba(0, 0, 0, 255 * 0.05),
      border: Border.none,
      padding: Padding.each(0, 8),
      borderRadius: Radius.all(Length.px(6)),
      textColor: ofRGB(0x6d, 0x75, 0x87),
      textTransform: 'capitalize',
      transition: Transition.make('shadow', '0.25s', 'ease'),
      shadow: Shadow.multi(...normalShadows),
      width: Size.min(28),
      height: Size.min(28),
      hoverStyle: {
        background: Background.none,
        shadow: Shadow.multi(...hoverShadows)
      },
      focusedStyle: {
        shadow: Shadow.multi(...hoverShadows),
        background: Background.none
      },
      disabledStyle: {
        textColor: ofRGBA(0, 0, 0, 255 * 0.2),
        background: Background.rgba(0, 0, 0, 255 * 0.05),
        shadow: Shadow.multi(
          Shadow.inset({
            x: 8,
            y: 8,
            blur: 12,
            color: ofRGBA(55, 84, 170, 255 * 0.1)
          }),
          Shadow.inset({
            x: -8,
            y: -8,
            blur: 12,
            color: ofRGBA(255, 255, 255, 255 * 0.2)
          }),
          Shadow.drop({
            x: 0,
            y: 0,
            blur: 4,
            color: ofRGBA(255, 255, 255, 255 * 0.2)
          })
        )
      },
      activeStyle: {
        shadow: Shadow.multi(...pressedShadows)
      }
      // disabledStyle: {
      //   background: Background.rgb(234, 234, 234),
      //   border: Border.all(2, ofRGB(234, 234, 234)),
      //   textColor: ofRGB(179, 179, 179)
      // }
    }
  }
}

export const theme = make<any>()
