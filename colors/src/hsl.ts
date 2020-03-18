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
  interpolateAngle,
  wrapCircular,
  EPSILON,
  nearEquals as nNearEquals,
  nearEqualAngles,
  interpolateAngleWidest
} from 'tempo-std/lib/numbers'
import { ofRGBX, RGBX } from './rgbx'
import { ofHSLA } from './hsla'

export interface HSL {
  kind: 'HSL'
  channels: [number, number, number]
}

export type Type = HSL

// export const white = of(0xFFFFFF)
// export const black = of(0x000000)

export function ofHSL(h: number, s: number, l: number): HSL {
  h = clamp(h, 0, 360)
  s = clamp(s, 0, 1)
  l = clamp(l, 0, 1)
  return { kind: 'HSL', channels: [h, s, l] }
}

export function hue(hsl: HSL) {
  return hsl.channels[0]
}
export function saturation(hsl: HSL) {
  return hsl.channels[1]
}
export function lightness(hsl: HSL) {
  return hsl.channels[2]
}

export function equals(a: HSL, b: HSL) {
  return (
    hue(a) === hue(b) &&
    saturation(a) === saturation(b) &&
    lightness(a) === lightness(b)
  )
}

export function nearEquals(a: HSL, b: HSL, tolerance = EPSILON): boolean {
  return (
    nearEqualAngles(hue(a), hue(b), tolerance) &&
    nNearEquals(saturation(a), saturation(b), tolerance) &&
    nNearEquals(lightness(a), lightness(b), tolerance)
  )
}

export function darker(hsl: HSL, t: number) {
  return ofHSL(hue(hsl), saturation(hsl), nInterpolate(lightness(hsl), 0, t))
}

export function lighter(hsl: HSL, t: number) {
  return ofHSL(hue(hsl), saturation(hsl), nInterpolate(lightness(hsl), 1, t))
}

export function rotate(hsl: HSL, rotation: number) {
  return ofHSL(hue(hsl) + rotation, saturation(hsl), lightness(hsl))
}

export function analogous(hsl: HSL, spread = 30.0) {
  return [rotate(hsl, -spread), rotate(hsl, spread)]
}

export function complement(hsl: HSL) {
  return rotate(hsl, 180)
}

export function interpolate(a: HSL, b: HSL, t: number) {
  return ofHSL(
    interpolateAngle(hue(a), hue(b), t, 360),
    nInterpolate(saturation(a), saturation(b), t),
    nInterpolate(lightness(a), lightness(b), t)
  )
}

export function interpolateWidest(a: HSL, b: HSL, t: number) {
  return ofHSL(
    interpolateAngleWidest(hue(a), hue(b), t, 360),
    nInterpolate(saturation(a), saturation(b), t),
    nInterpolate(lightness(a), lightness(b), t)
  )
}

export function split(hsl: HSL, spread = 144.0) {
  return [rotate(hsl, -spread), rotate(hsl, spread)]
}

export function square(hsl: HSL) {
  return tetrad(hsl, 90)
}

export function tetrad(hsl: HSL, angle: number) {
  return [
    rotate(hsl, 0),
    rotate(hsl, angle),
    rotate(hsl, 180),
    rotate(hsl, 180 + angle)
  ]
}

export function triad(hsl: HSL) {
  return [rotate(hsl, -120), rotate(hsl, 0), rotate(hsl, 120)]
}

export function withHue(hsl: HSL, hue: number) {
  return ofHSL(hue, saturation(hsl), lightness(hsl))
}
export function withSaturation(hsl: HSL, saturation: number) {
  return ofHSL(hue(hsl), saturation, lightness(hsl))
}
export function withLightness(hsl: HSL, lightness: number) {
  return ofHSL(hue(hsl), saturation(hsl), lightness)
}
export function withAlpha(hsl: HSL, alpha: number) {
  return ofHSLA(hue(hsl), saturation(hsl), lightness(hsl), alpha)
}

export function min(a: HSL, b: HSL) {
  return ofHSL(
    Math.min(hue(a), hue(b)),
    Math.min(saturation(a), saturation(b)),
    Math.min(lightness(a), lightness(b))
  )
}

export function max(a: HSL, b: HSL) {
  return ofHSL(
    Math.max(hue(a), hue(b)),
    Math.max(saturation(a), saturation(b)),
    Math.max(lightness(a), lightness(b))
  )
}

export function toCSS3(hsl: HSL) {
  return `hsl(${hue(hsl)},${saturation(hsl) * 100}%,${lightness(hsl) * 100}%)`
}

export function toRGBX(hsl: HSL): RGBX {
  return ofRGBX(
    _c(hue(hsl) + 120, saturation(hsl), lightness(hsl)),
    _c(hue(hsl), saturation(hsl), lightness(hsl)),
    _c(hue(hsl) - 120, saturation(hsl), lightness(hsl))
  )
}

// Based on D3.js by Michael Bostock
function _c(d: number, s: number, l: number): number {
  const m2 = l <= 0.5 ? l * (1 + s) : l + s - l * s,
    m1 = 2 * l - m2

  d = wrapCircular(d, 360)
  if (d < 60) return m1 + ((m2 - m1) * d) / 60
  else if (d < 180) return m2
  else if (d < 240) return m1 + ((m2 - m1) * (240 - d)) / 60
  else return m1
}
