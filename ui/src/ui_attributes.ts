import { Color } from 'tempo-colors/lib/color'
import { ofHSL } from 'tempo-colors/lib/hsl'
import { ofRGB } from 'tempo-colors/lib/rgb'
import { ofHSLA } from 'tempo-colors/lib/hsla'
import { ofRGBA } from 'tempo-colors/lib/rgba'

export type Orientation = 'row' | 'col'

export type Background = { kind: 'BackgroundColor'; color: Color }
export const Background = {
  color: (color: Color): Background => ({ kind: 'BackgroundColor', color }),
  hsl: (h: number, s: number, l: number): Background =>
    Background.color(ofHSL(h, s, l)),
  hsla: (h: number, s: number, l: number, a: number): Background =>
    Background.color(ofHSLA(h, s, l, a)),
  rgb: (r: number, g: number, b: number): Background =>
    Background.color(ofRGB(r, g, b)),
  rgba: (r: number, g: number, b: number, a: number): Background =>
    Background.color(ofRGBA(r, g, b, a))
}

export type Padding =
  | { kind: 'PaddingAll'; value: number }
  | {
      kind: 'PaddingEach'
      top: number
      right: number
      bottom: number
      left: number
    }
export const Padding = {
  all: (value: number): Padding => ({ kind: 'PaddingAll', value }),
  each: (top: number, right = top, bottom = top, left = right): Padding => ({
    kind: 'PaddingEach',
    top,
    right,
    bottom,
    left
  })
}

export type TransitionTarget = 'background' | 'padding'
export interface OneTransition {
  kind: 'Transition'
  target: TransitionTarget
  duration?: string
  timingFunction?: string
  delay?: string
}
export type Transition =
  | OneTransition
  | { kind: 'MultiTransition'; transitions: OneTransition[] }

export const Transition = {
  make: (
    target: TransitionTarget,
    duration?: string,
    timingFunction?: string,
    delay?: string
  ): OneTransition => ({
    kind: 'Transition',
    target,
    duration,
    timingFunction,
    delay
  }),
  multi: (...transitions: OneTransition[]): Transition => ({
    kind: 'MultiTransition',
    transitions
  })
}

export type Size =
  | {
      kind: 'SizePX'
      value: number
    }
  | {
      kind: 'SizeFill'
      ratio: number
    }
export const Size = {
  px: (value: number): Size => ({
    kind: 'SizePX',
    value
  }),
  fill: (ratio = 1): Size => ({
    kind: 'SizeFill',
    ratio
  })
}

export type BorderStyle =
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

export interface BorderProperties {
  width: number
  color: Color
  style: BorderStyle
}

export type Border =
  | { kind: 'BorderAll'; all: BorderProperties }
  | {
      kind: 'BorderEach'
      top: BorderProperties
      right: BorderProperties
      bottom: BorderProperties
      left: BorderProperties
    }
