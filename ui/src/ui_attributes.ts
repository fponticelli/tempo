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
      kind: 'SizeFixed'
      value: number
    }
  | {
      kind: 'SizeFill'
      ratio: number
    }
  | {
      kind: 'SizeMin'
      value: number
    }
  | {
      kind: 'SizeMax'
      value: number
    }
export const Size = {
  fixed: (value: number): Size => ({
    kind: 'SizeFixed',
    value
  }),
  fill: (ratio = 1): Size => ({
    kind: 'SizeFill',
    ratio
  }),
  min: (value: number): Size => ({
    kind: 'SizeMin',
    value
  }),
  max: (value: number): Size => ({
    kind: 'SizeMax',
    value
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

export const Border = {
  all: (width: number, color: Color, style?: BorderStyle): Border => ({
    kind: 'BorderAll',
    all: {
      width,
      color,
      style: style ?? 'solid'
    }
  }),
  each: (
    top: BorderProperties,
    right = top,
    bottom = top,
    left = right
  ): Border => ({
    kind: 'BorderEach',
    top,
    right,
    bottom,
    left
  })
}

export type Length =
  | { kind: 'Px'; value: number }
  | { kind: 'Percent'; value: number }

export const Length = {
  px: (value: number): Length => ({ kind: 'Px', value }),
  percent: (value: number): Length => ({ kind: 'Percent', value })
}

export interface BorderRadiusProperties {
  first: Length
  second?: Length
}

export type BorderRadius =
  | { kind: 'BorderRadiusAll'; all: BorderRadiusProperties }
  | {
      kind: 'BorderRadiusEach'
      tl: BorderRadiusProperties
      tr: BorderRadiusProperties
      br: BorderRadiusProperties
      bl: BorderRadiusProperties
    }

export const Radius = {
  all: (first: Length, second?: Length): BorderRadius => ({
    kind: 'BorderRadiusAll',
    all: { first, second }
  }),
  each: (
    tl: BorderRadiusProperties,
    tr = tl,
    br = tl,
    bl = tr
  ): BorderRadius => ({
    kind: 'BorderRadiusEach',
    tl,
    tr,
    br,
    bl
  })
}
