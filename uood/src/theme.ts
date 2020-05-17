import {
  Padding,
  Size,
  TextAlign,
  BorderRadius,
  Background,
  Border,
  Cursor,
  Transition,
  Shadow,
  TextTransform,
  FontWeight
} from 'tempo-ui/lib/ui_attributes'
import { Attribute } from 'tempo-dom/lib/value'
import { Color } from 'tempo-colors/lib/color'

export interface SubStyle<State> {
  border?: Attribute<State, Border>
  background?: Attribute<State, Background>
  textColor?: Attribute<State, Color>
  shadow?: Attribute<State, Shadow>
}

export interface Theme<State> {
  button?: {
    fontFamily?: Attribute<State, string>
    fontWeight?: Attribute<State, FontWeight>
    textTransform?: Attribute<State, TextTransform>
    padding?: Attribute<State, Padding>
    width?: Attribute<State, Size>
    height?: Attribute<State, Size>
    borderRadius?: Attribute<State, BorderRadius>
    background?: Attribute<State, Background>
    border?: Attribute<State, Border>
    fontSize?: Attribute<State, number>
    textColor?: Attribute<State, Color>
    cursor?: Attribute<State, Cursor>
    shadow?: Attribute<State, Shadow>
    textAlign?: Attribute<State, TextAlign>
    transition?: Attribute<State, Transition>
    focusedStyle?: SubStyle<State>
    hoverStyle?: SubStyle<State>
    activeStyle?: SubStyle<State>
    disabledStyle?: SubStyle<State>
  }
}
