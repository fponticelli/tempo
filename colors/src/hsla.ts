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
  EPSILON,
  nearEquals as nNearEquals,
  nearEqualAngles,
  interpolateAngleWidest
} from 'tempo-std/lib/numbers'
import { RGBX, withAlpha as rgbxWithAlpha } from './rgbx'
import { RGBAX } from './rgbax'
import { HSL, ofHSL, toRGBX as hslToRGBX } from './hsl'

export interface HSLA {
  kind: 'HSLA'
  channels: [number, number, number, number]
}

export type Type = HSLA

export function ofHSLA(h: number, s: number, l: number, a: number): HSLA {
  h = clamp(h, 0, 360)
  s = clamp(s, 0, 1)
  l = clamp(l, 0, 1)
  a = clamp(l, 0, 1)
  return { kind: 'HSLA', channels: [h, s, l, a] }
}

export function hue(hsla: HSLA) {
  return hsla.channels[0]
}
export function saturation(hsla: HSLA) {
  return hsla.channels[1]
}
export function lightness(hsla: HSLA) {
  return hsla.channels[2]
}
export function alpha(hsla: HSLA) {
  return hsla.channels[3]
}

export function equals(a: HSLA, b: HSLA) {
  return (
    hue(a) === hue(b) &&
    saturation(a) === saturation(b) &&
    lightness(a) === lightness(b) &&
    alpha(a) === alpha(b)
  )
}

export function nearEquals(a: HSLA, b: HSLA, tolerance = EPSILON): boolean {
  return (
    nearEqualAngles(hue(a), hue(b), tolerance) &&
    nNearEquals(saturation(a), saturation(b), tolerance) &&
    nNearEquals(lightness(a), lightness(b), tolerance) &&
    nNearEquals(alpha(a), alpha(b), tolerance)
  )
}

export function darker(hsla: HSLA, t: number) {
  return ofHSLA(hue(hsla), saturation(hsla), nInterpolate(lightness(hsla), 0, t), alpha(hsla))
}

export function lighter(hsla: HSLA, t: number) {
  return ofHSLA(hue(hsla), saturation(hsla), nInterpolate(lightness(hsla), 1, t), alpha(hsla))
}

export function rotate(hsla: HSLA, rotation: number) {
  return ofHSLA(hue(hsla) + rotation, saturation(hsla), lightness(hsla), alpha(hsla))
}

export function analogous(hsla: HSLA, spread = 30.0) {
  return [rotate(hsla, -spread), rotate(hsla, spread)]
}

export function complement(hsla: HSLA) {
  return rotate(hsla, 180)
}

export function interpolate(a: HSLA, b: HSLA, t: number) {
  return ofHSLA(
    interpolateAngle(hue(a), hue(b), t, 360),
    nInterpolate(saturation(a), saturation(b), t),
    nInterpolate(lightness(a), lightness(b), t),
    nInterpolate(alpha(a), alpha(b), t)
  )
}

export function interpolateWidest(a: HSLA, b: HSLA, t: number) {
  return ofHSLA(
    interpolateAngleWidest(hue(a), hue(b), t, 360),
    nInterpolate(saturation(a), saturation(b), t),
    nInterpolate(lightness(a), lightness(b), t),
    nInterpolate(alpha(a), alpha(b), t)
  )
}

export function split(hsla: HSLA, spread = 144.0) {
  return [rotate(hsla, -spread), rotate(hsla, spread)]
}

export function square(hsla: HSLA) {
  return tetrad(hsla, 90)
}

export function tetrad(hsla: HSLA, angle: number) {
  return [
    rotate(hsla, 0),
    rotate(hsla, angle),
    rotate(hsla, 180),
    rotate(hsla, 180 + angle)
  ]
}

export function triad(hsla: HSLA) {
  return [rotate(hsla, -120), rotate(hsla, 0), rotate(hsla, 120)]
}

export function withHue(hsla: HSLA, hue: number) {
  return ofHSLA(hue, saturation(hsla), lightness(hsla), alpha(hsla))
}
export function withSaturation(hsla: HSLA, saturation: number) {
  return ofHSLA(hue(hsla), saturation, lightness(hsla), alpha(hsla))
}
export function withLightness(hsla: HSLA, lightness: number) {
  return ofHSLA(hue(hsla), saturation(hsla), lightness, alpha(hsla))
}
export function withAlpha(hsla: HSLA, alpha: number) {
  return ofHSLA(hue(hsla), saturation(hsla), lightness(hsla), alpha)
}

export function min(a: HSLA, b: HSLA) {
  return ofHSLA(
    Math.min(hue(a), hue(b)),
    Math.min(saturation(a), saturation(b)),
    Math.min(lightness(a), lightness(b)),
    Math.min(alpha(a), alpha(b))
  )
}

export function max(a: HSLA, b: HSLA) {
  return ofHSLA(
    Math.max(hue(a), hue(b)),
    Math.max(saturation(a), saturation(b)),
    Math.max(lightness(a), lightness(b)),
    Math.max(alpha(a), alpha(b))
  )
}

export function toCSS3(hsla: HSLA) {
  return `hsl(${hue(hsla)},${saturation(hsla) * 100}%,${lightness(hsla) * 100}%,${alpha(hsla)})`
}

export function toHSL(hsla: HSLA): HSL {
  return ofHSL(hue(hsla), saturation(hsla), lightness(hsla))
}

export function toRGBX(hsla: HSLA): RGBX {
  return hslToRGBX(toHSL(hsla))
}

export function toRGBAX(hsla: HSLA): RGBAX {
  return rgbxWithAlpha(toRGBX(hsla), alpha(hsla))
}
