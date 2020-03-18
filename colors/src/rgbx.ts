import {
  clamp,
  interpolate as nInterpolate,
  EPSILON,
  nearEquals as nNearEquals,
  roundTo as nRoundTo
} from 'tempo-std/lib/numbers'
import { ofRGB, RGB } from './rgb'
import { ofHSL, HSL } from './hsl'
import { ofGrey, Grey } from './grey'
import { ofRGBAX } from './rgbax'

export interface RGBX {
  kind: 'RGBX'
  channels: [number, number, number]
}

export type Type = RGBX

export const white = ofRGBX(1, 1, 1)
export const black = ofRGBX(0, 0, 0)

export function ofRGBX(r: number, g: number, b: number): RGBX {
  r = clamp(r, 0, 1)
  g = clamp(g, 0, 1)
  b = clamp(b, 0, 1)
  return { kind: 'RGBX', channels: [r, g, b] }
}

export function red(rgbx: RGBX) {
  return rgbx.channels[0]
}
export function green(rgbx: RGBX) {
  return rgbx.channels[1]
}
export function blue(rgbx: RGBX) {
  return rgbx.channels[2]
}

export function equals(a: RGBX, b: RGBX) {
  return red(a) === red(b) && green(a) === green(b) && blue(a) === blue(b)
}

export function nearEquals(a: RGBX, b: RGBX, tolerance = EPSILON) {
  return nNearEquals(red(a), red(b), tolerance) &&
         nNearEquals(green(a), green(b), tolerance) &&
         nNearEquals(blue(a), blue(b), tolerance)
}

export function darker(rgbx: RGBX, t: number) {
  return interpolate(rgbx, black, t)
}

export function lighter(rgbx: RGBX, t: number) {
  return interpolate(rgbx, white, t)
}

export function interpolate(a: RGBX, b: RGBX, t: number) {
  return ofRGBX(
    nInterpolate(red(a), red(b), t),
    nInterpolate(green(a), green(b), t),
    nInterpolate(blue(a), blue(b), t)
  )
}

export function withRed(rgbx: RGBX, red: number) {
  return ofRGBX(red, green(rgbx), blue(rgbx))
}
export function withGreen(rgbx: RGBX, green: number) {
  return ofRGBX(red(rgbx), green, blue(rgbx))
}
export function withBlue(rgbx: RGBX, blue: number) {
  return ofRGBX(red(rgbx), green(rgbx), blue)
}
export function withAlpha(rgbx: RGBX, alpha: number) {
  return ofRGBAX(red(rgbx), green(rgbx), blue(rgbx), alpha)
}

export function min(a: RGBX, b: RGBX) {
  return ofRGBX(
    Math.min(red(a), red(b)),
    Math.min(green(a), green(b)),
    Math.min(blue(a), blue(b))
  )
}

export function max(a: RGBX, b: RGBX) {
  return ofRGBX(
    Math.max(red(a), red(b)),
    Math.max(green(a), green(b)),
    Math.max(blue(a), blue(b))
  )
}

export function roundTo(rgbx: RGBX, decimals: number) {
  return ofRGBX(
    nRoundTo(red(rgbx), decimals),
    nRoundTo(green(rgbx), decimals),
    nRoundTo(blue(rgbx), decimals)
  )
}

export function toCSS3(rgbx: RGBX) {
  return `rgbx(${red(rgbx) * 100}%,${green(rgbx) * 100}%,${blue(rgbx) * 100}%)`
}

export function toRGB(rgbx: RGBX): RGB {
  return ofRGB(red(rgbx) * 255, green(rgbx) * 255, blue(rgbx) * 255) // normalization happens in ofRGB
}

export enum GreyMode {
  Standard = 'Standard',
  Perceived = 'Perceived',
  PerceivedAccurate = 'PerceivedAccurate'
}

export function toGrey(rgbx: RGBX, mode = GreyMode.Standard): Grey {
  switch (mode) {
    case GreyMode.Standard:
      return ofGrey(red(rgbx) * 0.2126 + green(rgbx) * 0.7152 + blue(rgbx) * 0.0722)
    case GreyMode.Perceived:
      return ofGrey(red(rgbx) * 0.299 + green(rgbx) * 0.587 + blue(rgbx) * 0.114)
    case GreyMode.PerceivedAccurate:
      return ofGrey(
        Math.pow(red(rgbx), 2) * 0.241 +
        Math.pow(green(rgbx), 2) * 0.691 +
        Math.pow(blue(rgbx), 2) * 0.068
      )
  }
}

export function toHSL(rgbx: RGBX): HSL {
  const redf = red(rgbx),
    greenf = green(rgbx),
    bluef = blue(rgbx)
  const min = Math.min(redf, greenf, bluef),
    max = Math.max(redf, greenf, bluef),
    delta = max - min
  let h,
    s,
    l = (max + min) / 2
  if (delta == 0.0) {
    s = h = 0.0
  } else {
    s = l < 0.5 ? delta / (max + min) : delta / (2 - max - min)
    if (redf == max) h = (greenf - bluef) / delta + (greenf < bluef ? 6 : 0)
    else if (greenf == max) h = (bluef - redf) / delta + 2
    else h = (redf - greenf) / delta + 4
    h *= 60
  }
  return ofHSL(h, s, l)
}
