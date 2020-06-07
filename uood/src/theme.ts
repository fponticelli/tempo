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
import { ElTextProperties } from 'tempo-ui/lib/ui'

export interface SubStyle<State> {
  border?: Attribute<State, Border>
  background?: Attribute<State, Background>
  textColor?: Attribute<State, Color>
  shadow?: Attribute<State, Shadow>
}

export interface Theme<State> {
  card?: {
    background?: Attribute<State, Background>
    border?: Attribute<State, Border>
    borderRadius?: Attribute<State, BorderRadius>
    height?: Attribute<State, Size>
    padding?: Attribute<State, Padding>
    spacing?: Attribute<State, number>
    shadow?: Attribute<State, Shadow>
    width?: Attribute<State, Size>
    transition?: Attribute<State, Transition>
    hoverStyle?: SubStyle<State>
  }
  stage?: {
    background?: Attribute<State, Background>
    border?: Attribute<State, Border>
    borderRadius?: Attribute<State, BorderRadius>
    height?: Attribute<State, Size>
    padding?: Attribute<State, Padding>
    spacing?: Attribute<State, number>
    shadow?: Attribute<State, Shadow>
    width?: Attribute<State, Size>
  }
  button?: {
    background?: Attribute<State, Background>
    border?: Attribute<State, Border>
    borderRadius?: Attribute<State, BorderRadius>
    cursor?: Attribute<State, Cursor>
    fontFamily?: Attribute<State, string>
    fontSize?: Attribute<State, number>
    fontWeight?: Attribute<State, FontWeight>
    height?: Attribute<State, Size>
    padding?: Attribute<State, Padding>
    shadow?: Attribute<State, Shadow>
    textAlign?: Attribute<State, TextAlign>
    textColor?: Attribute<State, Color>
    textTransform?: Attribute<State, TextTransform>
    transition?: Attribute<State, Transition>
    width?: Attribute<State, Size>

    activeStyle?: SubStyle<State>
    disabledStyle?: SubStyle<State>
    focusedStyle?: SubStyle<State>
    hoverStyle?: SubStyle<State>
  }
  textField?: {
    background?: Attribute<State, Background>
    border?: Attribute<State, Border>
    borderRadius?: Attribute<State, BorderRadius>
    fontFamily?: Attribute<State, string>
    fontSize?: Attribute<State, number>
    fontWeight?: Attribute<State, FontWeight>
    height?: Attribute<State, Size>
    padding?: Attribute<State, Padding>
    shadow?: Attribute<State, Shadow>
    textAlign?: Attribute<State, TextAlign>
    textColor?: Attribute<State, Color>
    textTransform?: Attribute<State, TextTransform>
    transition?: Attribute<State, Transition>
    width?: Attribute<State, Size>

    disabledStyle?: SubStyle<State>
    focusedStyle?: SubStyle<State>
    hoverStyle?: SubStyle<State>
    placeholderStyle?: ElTextProperties<State>
  }
}
