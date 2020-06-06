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
  toHex as nToHex,
  interpolate as nInterpolate
} from 'tempo-std/lib/numbers'
import { Option, none, some } from 'tempo-std/lib/option'
import { RGBX, ofRGBX } from './rgbx'
import { ofRGBA } from './rgba'

export interface RGB {
  kind: 'RGB'
  value: number
}

export type Type = RGB

export const white = makeUnsafe(0xffffff)
export const black = makeUnsafe(0x000000)

function makeUnsafe(value: number): RGB {
  return { kind: 'RGB', value }
}
export function ofRGB(r: number, g: number, b: number): RGB {
  r = clamp(Math.trunc(r), 0, 255)
  g = clamp(Math.trunc(g), 0, 255)
  b = clamp(Math.trunc(b), 0, 255)
  return makeUnsafe(((r & 0xff) << 16) | ((g & 0xff) << 8) | ((b & 0xff) << 0))
}

export function ofHex(hex: number) {
  return makeUnsafe(clamp(hex, black.value, white.value))
}

export function parseHex(hex: string): Option<RGB> {
  if (hex.startsWith('#')) hex.substring(1)
  if (hex.startsWith('0x')) hex.substring(2)
  if (hex.length !== 6) return none
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)
  return some(ofRGB(r, g, b))
}

export function red(rgb: RGB) {
  return (rgb.value >> 16) & 0xff
}
export function green(rgb: RGB) {
  return (rgb.value >> 8) & 0xff
}
export function blue(rgb: RGB) {
  return rgb.value & 0xff
}

export function equals(a: RGB, b: RGB) {
  return a.value === b.value
}

export function darker(rgb: RGB, t: number) {
  return interpolate(rgb, black, t)
}

export function lighter(rgb: RGB, t: number) {
  return interpolate(rgb, white, t)
}

export function interpolate(a: RGB, b: RGB, t: number) {
  return ofRGB(
    nInterpolate(red(a), red(b), t),
    nInterpolate(green(a), green(b), t),
    nInterpolate(blue(a), blue(b), t)
  )
}

export function withRed(rgb: RGB, red: number) {
  return ofRGB(red, green(rgb), blue(rgb))
}
export function withGreen(rgb: RGB, green: number) {
  return ofRGB(red(rgb), green, blue(rgb))
}
export function withBlue(rgb: RGB, blue: number) {
  return ofRGB(red(rgb), green(rgb), blue)
}
export function withAlpha(rgb: RGB, alpha: number) {
  return ofRGBA(red(rgb), green(rgb), blue(rgb), alpha)
}

export function min(a: RGB, b: RGB) {
  return ofRGB(
    Math.min(red(a), red(b)),
    Math.min(green(a), green(b)),
    Math.min(blue(a), blue(b))
  )
}

export function max(a: RGB, b: RGB) {
  return ofRGB(
    Math.max(red(a), red(b)),
    Math.max(green(a), green(b)),
    Math.max(blue(a), blue(b))
  )
}

export function toCSS3(rgb: RGB) {
  return `rgb(${red(rgb)},${green(rgb)},${blue(rgb)})`
}

export function toHex(rgb: RGB, prefix = '#') {
  return (
    prefix + nToHex(red(rgb), 2) + nToHex(green(rgb), 2) + nToHex(blue(rgb), 2)
  )
}

export function toRGBX(rgb: RGB): RGBX {
  return ofRGBX(red(rgb) / 255, green(rgb) / 255, blue(rgb) / 255)
}
