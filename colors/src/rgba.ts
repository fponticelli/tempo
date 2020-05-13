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
import { RGBAX, ofRGBAX } from './rgbax'
import { ofRGBX, RGBX } from './rgbx'

export interface RGBA {
  kind: 'RGBA'
  value: number
}

export type Type = RGBA

function makeUnsafe(value: number): RGBA {
  return { kind: 'RGBA', value }
}
export function ofRGBA(r: number, g: number, b: number, a: number): RGBA {
  r = clamp(Math.trunc(r), 0, 255)
  g = clamp(Math.trunc(g), 0, 255)
  b = clamp(Math.trunc(b), 0, 255)
  a = clamp(Math.trunc(a), 0, 255)
  return makeUnsafe(
    ((r & 0xff) << 24) |
      ((g & 0xff) << 16) |
      ((b & 0xff) << 8) |
      ((a & 0xff) << 0)
  )
}

export function ofHex(hex: number) {
  return makeUnsafe(clamp(hex, 0x00000000, 0xffffffff))
}

export function parseHex(hex: string): Option<RGBA> {
  if (hex.startsWith('#')) hex.substring(1)
  if (hex.startsWith('0x')) hex.substring(2)
  if (hex.length !== 8) return none
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)
  const a = Number.parseInt(hex.substring(6, 8), 16)
  return some(ofRGBA(r, g, b, a))
}

export function red(rgba: RGBA) {
  return (rgba.value >> 24) & 0xff
}
export function green(rgba: RGBA) {
  return (rgba.value >> 16) & 0xff
}
export function blue(rgba: RGBA) {
  return (rgba.value >> 8) & 0xff
}
export function alpha(rgba: RGBA) {
  return rgba.value & 0xff
}

export function equals(a: RGBA, b: RGBA) {
  return a.value === b.value
}

export function darker(rgba: RGBA, t: number) {
  return interpolate(rgba, ofRGBA(0, 0, 0, alpha(rgba)), t)
}

export function lighter(rgba: RGBA, t: number) {
  return interpolate(rgba, ofRGBA(255, 255, 255, alpha(rgba)), t)
}

export function interpolate(a: RGBA, b: RGBA, t: number) {
  return ofRGBA(
    nInterpolate(red(a), red(b), t),
    nInterpolate(green(a), green(b), t),
    nInterpolate(blue(a), blue(b), t),
    nInterpolate(alpha(a), alpha(b), t)
  )
}

export function withRed(rgba: RGBA, red: number) {
  return ofRGBA(red, green(rgba), blue(rgba), alpha(rgba))
}
export function withGreen(rgba: RGBA, green: number) {
  return ofRGBA(red(rgba), green, blue(rgba), alpha(rgba))
}
export function withBlue(rgba: RGBA, blue: number) {
  return ofRGBA(red(rgba), green(rgba), blue, alpha(rgba))
}
export function withAlpha(rgba: RGBA, alpha: number) {
  return ofRGBA(red(rgba), green(rgba), blue(rgba), alpha)
}

export function min(a: RGBA, b: RGBA) {
  return ofRGBA(
    Math.min(red(a), red(b)),
    Math.min(green(a), green(b)),
    Math.min(blue(a), blue(b)),
    Math.min(alpha(a), alpha(b))
  )
}

export function max(a: RGBA, b: RGBA) {
  return ofRGBA(
    Math.max(red(a), red(b)),
    Math.max(green(a), green(b)),
    Math.max(blue(a), blue(b)),
    Math.max(alpha(a), alpha(b))
  )
}

export function toCSS3(rgba: RGBA) {
  return `rgb(${red(rgba)},${green(rgba)},${blue(rgba)},${alpha(rgba)})`
}

export function toHex(rgba: RGBA, prefix = '#') {
  return (
    prefix +
    nToHex(red(rgba), 2) +
    nToHex(green(rgba), 2) +
    nToHex(blue(rgba), 2) +
    nToHex(alpha(rgba), 2)
  )
}

export function toRGBX(rgba: RGBA): RGBX {
  return ofRGBX(red(rgba) / 255, green(rgba) / 255, blue(rgba) / 255)
}

export function toRGBAX(rgba: RGBA): RGBAX {
  return ofRGBAX(
    red(rgba) / 255,
    green(rgba) / 255,
    blue(rgba) / 255,
    alpha(rgba) / 255
  )
}
