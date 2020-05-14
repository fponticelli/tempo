import { Theme } from '../theme'
import {
  Shadow,
  Background,
  Border,
  Radius,
  Length,
  Transition
} from 'tempo-ui/lib/ui_attributes'
import { ofRGBA } from 'tempo-colors/lib/rgba'
import { ofRGB } from 'tempo-colors/lib/rgb'

export interface ThemeOptions<State> {}

export function make<State>(options: ThemeOptions<State> = {}): Theme<State> {
  return {
    button: {
      shadow: Shadow.multi(
        Shadow.drop({
          offsetX: 0,
          offsetY: 3,
          blurRadius: 1,
          spreadRadius: -2,
          color: ofRGBA(0, 0, 0, 51)
        }),
        Shadow.drop({
          offsetX: 0,
          offsetY: 2,
          blurRadius: 2,
          spreadRadius: 0,
          color: ofRGBA(0, 0, 0, 36)
        }),
        Shadow.drop({
          offsetX: 0,
          offsetY: 1,
          blurRadius: 5,
          spreadRadius: 0,
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
            offsetX: 0,
            offsetY: 2,
            blurRadius: 4,
            spreadRadius: -1,
            color: ofRGBA(0, 0, 0, 51)
          }),
          Shadow.drop({
            offsetX: 0,
            offsetY: 4,
            blurRadius: 5,
            spreadRadius: 0,
            color: ofRGBA(0, 0, 0, 36)
          }),
          Shadow.drop({
            offsetX: 0,
            offsetY: 1,
            blurRadius: 10,
            spreadRadius: 0,
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
            offsetX: 0,
            offsetY: 5,
            blurRadius: 5,
            spreadRadius: -3,
            color: ofRGBA(0, 0, 0, 51)
          }),
          Shadow.drop({
            offsetX: 0,
            offsetY: 8,
            blurRadius: 10,
            spreadRadius: 1,
            color: ofRGBA(0, 0, 0, 36)
          }),
          Shadow.drop({
            offsetX: 0,
            offsetY: 3,
            blurRadius: 14,
            spreadRadius: 2,
            color: ofRGBA(0, 0, 0, 31)
          })
        )
      },
      disabledStyle: {
        background: Background.rgba(206, 217, 224, 112),
        textColor: ofRGBA(92, 112, 128, 153),
        shadow: Shadow.none
      },
      focusedStyle: {
        shadow: Shadow.multi(
          Shadow.drop({
            offsetX: 0,
            offsetY: 0,
            blurRadius: 0,
            spreadRadius: 1,
            color: ofRGBA(255, 255, 255, 204)
          }),
          Shadow.drop({
            offsetX: 0,
            offsetY: 0,
            blurRadius: 0,
            spreadRadius: 4,
            color: ofRGBA(50, 50, 255, 51)
          }),
          Shadow.drop({
            offsetX: 0,
            offsetY: 3,
            blurRadius: 1,
            spreadRadius: -2,
            color: ofRGBA(0, 0, 0, 51)
          }),
          Shadow.drop({
            offsetX: 0,
            offsetY: 2,
            blurRadius: 2,
            spreadRadius: 0,
            color: ofRGBA(0, 0, 0, 36)
          }),
          Shadow.drop({
            offsetX: 0,
            offsetY: 1,
            blurRadius: 5,
            spreadRadius: 0,
            color: ofRGBA(0, 0, 0, 31)
          })
        )
      }
    }
  }
}

export const theme = make<any>()
