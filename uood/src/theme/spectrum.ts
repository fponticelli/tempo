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
  return {
    button: {
      padding: Padding.each(9 - 2, 16), // padding - border
      width: Size.min(32 * 2.25),
      height: Size.min(32),
      borderRadius: Radius.all(Length.px(16)),
      background: Background.rgba(0, 0, 0, 0),
      border: Border.all(2, ofRGB(75, 75, 75), 'solid'),
      fontSize: 14,
      textColor: ofRGB(75, 75, 75),
      cursor: Cursor.pointer,
      textAlign: 'center',
      // shadow,
      transition: Transition.make(
        ['background', 'text-color', 'shadow'],
        '0.25s'
      ),
      focusedStyle: {
        shadow: Shadow.drop({
          color: ofHSLA(0, 0, 0.2, 0.125),
          spreadRadius: 4,
          blurRadius: 2
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
    }
  }
}

export const theme = make<any>()
