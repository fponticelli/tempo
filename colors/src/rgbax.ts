/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {
  clamp,
  interpolate as nInterpolate,
  EPSILON,
  nearEquals as nNearEquals,
  roundTo as nRoundTo
} from 'tempo-std/lib/numbers'
import { ofRGB, RGB } from './rgb'
import { RGBA, ofRGBA } from './rgba'
import { RGBX, ofRGBX, toHSL as rgbxToHSL } from './rgbx'
import { withAlpha as hslWithAlpha } from './hsl'
import { HSLA } from './hsla'

export interface RGBAX {
  kind: 'RGBAX'
  channels: [number, number, number, number]
}

export type Type = RGBAX

export const white = ofRGBAX(1, 1, 1, 1)
export const black = ofRGBAX(0, 0, 0, 1)

export function ofRGBAX(r: number, g: number, b: number, a: number): RGBAX {
  r = clamp(r, 0, 1)
  g = clamp(g, 0, 1)
  b = clamp(b, 0, 1)
  a = clamp(b, 0, 1)
  return { kind: 'RGBAX', channels: [r, g, b, a] }
}

export function red(rgbax: RGBAX) {
  return rgbax.channels[0]
}
export function green(rgbax: RGBAX) {
  return rgbax.channels[1]
}
export function blue(rgbax: RGBAX) {
  return rgbax.channels[2]
}
export function alpha(rgbax: RGBAX) {
  return rgbax.channels[3]
}

export function equals(a: RGBAX, b: RGBAX) {
  return red(a) === red(b) && green(a) === green(b) && blue(a) === blue(b) && alpha(a) === alpha(b)
}

export function nearEquals(a: RGBAX, b: RGBAX, tolerance = EPSILON) {
  return nNearEquals(red(a), red(b), tolerance) &&
         nNearEquals(green(a), green(b), tolerance) &&
         nNearEquals(blue(a), blue(b), tolerance) &&
         nNearEquals(alpha(a), alpha(b), tolerance)
}

export function darker(rgbax: RGBAX, t: number) {
  return interpolate(rgbax, withAlpha(black, alpha(rgbax)), t)
}

export function lighter(rgbax: RGBAX, t: number) {
  return interpolate(rgbax, withAlpha(white, alpha(rgbax)), t)
}

export function interpolate(a: RGBAX, b: RGBAX, t: number) {
  return ofRGBAX(
    nInterpolate(red(a), red(b), t),
    nInterpolate(green(a), green(b), t),
    nInterpolate(blue(a), blue(b), t),
    nInterpolate(alpha(a), alpha(b), t)
  )
}

export function withRed(rgbax: RGBAX, red: number) {
  return ofRGBAX(red, green(rgbax), blue(rgbax), alpha(rgbax))
}
export function withGreen(rgbax: RGBAX, green: number) {
  return ofRGBAX(red(rgbax), green, blue(rgbax), alpha(rgbax))
}
export function withBlue(rgbax: RGBAX, blue: number) {
  return ofRGBAX(red(rgbax), green(rgbax), blue, alpha(rgbax))
}
export function withAlpha(rgbax: RGBAX, alpha: number) {
  return ofRGBAX(red(rgbax), green(rgbax), blue(rgbax), alpha)
}

export function min(a: RGBAX, b: RGBAX) {
  return ofRGBAX(
    Math.min(red(a), red(b)),
    Math.min(green(a), green(b)),
    Math.min(blue(a), blue(b)),
    Math.min(alpha(a), alpha(b))
  )
}

export function max(a: RGBAX, b: RGBAX) {
  return ofRGBAX(
    Math.max(red(a), red(b)),
    Math.max(green(a), green(b)),
    Math.max(blue(a), blue(b)),
    Math.max(alpha(a), alpha(b))
  )
}

export function roundTo(rgbax: RGBAX, decimals: number) {
  return ofRGBAX(
    nRoundTo(red(rgbax), decimals),
    nRoundTo(green(rgbax), decimals),
    nRoundTo(blue(rgbax), decimals),
    nRoundTo(alpha(rgbax), decimals)
  )
}

export function toCSS3(rgbax: RGBAX) {
  return `rgb(${red(rgbax) * 100}%,${green(rgbax) * 100}%,${blue(rgbax) * 100}%,${alpha(rgbax)})`
}

export function toRGB(rgbax: RGBAX): RGB {
  return ofRGB(red(rgbax) * 255, green(rgbax) * 255, blue(rgbax) * 255) // normalization happens in ofRGB
}

export function toRGBX(rgbax: RGBAX): RGBX {
  return ofRGBX(red(rgbax), green(rgbax), blue(rgbax))
}

export function toRGBA(rgbax: RGBAX): RGBA {
  return ofRGBA(red(rgbax) * 255, green(rgbax) * 255, blue(rgbax) * 255, alpha(rgbax) * 255) // normalization happens in ofRGB
}

export function toHSLA(rgbax: RGBAX): HSLA {
  const hsl = rgbxToHSL(toRGBX(rgbax))
  return hslWithAlpha(hsl, alpha(rgbax))
}
