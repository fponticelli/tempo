import { Theme } from '../theme'
import {
  Shadow,
  Background,
  Border,
  Radius,
  Length,
  GradientAngle,
  ColorStop,
  Transition
} from 'tempo-ui/lib/ui_attributes'
import { ofRGBA } from 'tempo-colors/lib/rgba'
import { ofRGB } from 'tempo-colors/lib/rgb'

export interface ThemeOptions<State> {}

export function make<State>(options: ThemeOptions<State> = {}): Theme<State> {
  return {
    button: {
      shadow: Shadow.multi(
        Shadow.inset({ spreadRadius: 1, color: ofRGBA(16, 22, 26, 51) }),
        Shadow.inset({ offsetY: -1, color: ofRGBA(16, 22, 26, 25) })
      ),
      textColor: ofRGB(0x18, 0x20, 0x26),
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
          Shadow.inset({ spreadRadius: 1, color: ofRGBA(16, 22, 26, 51) }),
          Shadow.inset({
            offsetX: 0,
            offsetY: 1,
            blurRadius: 2,
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
          Shadow.inset({ spreadRadius: 1, color: ofRGBA(16, 22, 26, 51) }),
          Shadow.inset({ offsetY: -1, color: ofRGBA(16, 22, 26, 25) }),
          Shadow.drop({
            offsetX: 0,
            offsetY: 0,
            blurRadius: 0,
            spreadRadius: 3,
            color: ofRGBA(255, 255, 255, 179)
          }),
          Shadow.drop({
            offsetX: 0,
            offsetY: 0,
            blurRadius: 0,
            spreadRadius: 4,
            color: ofRGBA(50, 50, 255, 51)
          })
        )
      }
    }
  }
}

export const theme = make<any>()
