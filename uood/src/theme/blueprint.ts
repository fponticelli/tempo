import { Theme } from '../theme'
import {
  Shadow,
  Background,
  Border,
  Radius,
  Length,
  GradientAngle,
  ColorStop,
  Transition,
  Padding,
  Size
} from 'tempo-ui/lib/ui_attributes'
import { ofRGBA } from 'tempo-colors/lib/rgba'
import { ofRGB } from 'tempo-colors/lib/rgb'

export interface ThemeOptions<State> {}

export function make<State>(options: ThemeOptions<State> = {}): Theme<State> {
  const basicInputShadow = [
    Shadow.inset({ spread: 1, color: ofRGBA(16, 22, 26, 255 * 0.15) }),
    Shadow.inset({ y: 1, blur: 1, color: ofRGBA(16, 22, 26, 255 * 0.2) })
  ]
  const selectedInputShadow = [
    Shadow.inset({ spread: 1, color: ofRGBA(16, 22, 26, 255 * 0.3) }),
    Shadow.inset({ y: 1, blur: 1, color: ofRGBA(16, 22, 26, 255 * 0.4) }),
    Shadow.drop({
      spread: 3,
      blur: 0,
      color: ofRGBA(20, 115, 230, 255 * 0.4)
    })
  ]
  return {
    button: {
      fontSize: 14,
      fontFamily:
        '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,Icons16,sans-serif',
      padding: Padding.each(0, 15),
      width: Size.min(30),
      height: Size.min(30),
      shadow: Shadow.multi(
        Shadow.inset({ spread: 1, color: ofRGBA(16, 22, 26, 51) }),
        Shadow.inset({ y: -1, color: ofRGBA(16, 22, 26, 25) })
      ),
      textColor: ofRGB(0x18, 0x20, 0x26),
      textTransform: 'none',
      background: Background.multi(
        Background.linearGradient(
          [ColorStop.hsla(0, 0, 1, 0.8), ColorStop.hsla(0, 0, 1, 0)],
          GradientAngle.degrees(180)
        ),
        Background.rgb(0xf5, 0xf8, 0xfa)
      ),
      border: Border.none,
      borderRadius: Radius.all(Length.px(3)),
      transition: Transition.make('background', '0.5s'),
      hoverStyle: {
        background: Background.multi(
          Background.linearGradient(
            [ColorStop.hsla(0, 0, 1, 0.8), ColorStop.hsla(0, 0, 1, 0)],
            GradientAngle.degrees(180)
          ),
          Background.rgb(0xeb, 0xf1, 0xf5)
        ),
        textColor: ofRGB(0x18, 0x20, 0x26)
      },
      activeStyle: {
        // inset 0 0 0 1px rgba(16,22,26,.2), inset 0 1px 2px rgba(16,22,26,.2)
        border: Border.none,
        background: Background.rgb(0xd8, 0xe1, 0xe8),
        shadow: Shadow.multi(
          Shadow.inset({ spread: 1, color: ofRGBA(16, 22, 26, 51) }),
          Shadow.inset({
            x: 0,
            y: 1,
            blur: 2,
            color: ofRGBA(16, 22, 26, 51)
          })
        ),
        textColor: ofRGB(0x18, 0x20, 0x26)
      },
      disabledStyle: {
        background: Background.rgba(206, 217, 224, 112),
        textColor: ofRGBA(92, 112, 128, 153),
        shadow: Shadow.none
      },
      focusedStyle: {
        shadow: Shadow.multi(
          Shadow.inset({ spread: 1, color: ofRGBA(16, 22, 26, 51) }),
          Shadow.inset({ y: -1, color: ofRGBA(16, 22, 26, 25) }),
          Shadow.drop({
            x: 0,
            y: 0,
            blur: 0,
            spread: 3,
            color: ofRGBA(255, 255, 255, 179)
          }),
          Shadow.drop({
            x: 0,
            y: 0,
            blur: 0,
            spread: 4,
            color: ofRGBA(50, 50, 255, 51)
          })
        )
      }
    },
    textField: {
      background: Background.rgb(255, 255, 255),
      border: Border.none,
      borderRadius: Radius.all(Length.px(3)),
      fontFamily: 'sans-serif',
      fontSize: 14,
      height: Size.min(32),
      padding: Padding.each(0, 10),
      textAlign: 'start',
      textColor: ofRGB(75, 75, 75),
      transition: Transition.make(['border', 'shadow'], '0.25s'),
      width: Size.min(48),
      shadow: Shadow.multi(...basicInputShadow),
      hoverStyle: {
        shadow: Shadow.multi(...selectedInputShadow),
        border: Border.none
      },

      focusedStyle: {
        shadow: Shadow.multi(...selectedInputShadow),
        border: Border.none
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
    }
  }
}

export const theme = make<any>()
