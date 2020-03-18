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

import { Color } from 'tempo-colors/lib/color'

// PADDING

export type Padding =
  | { kind: 'PaddingAll', value: number }
  | { kind: 'PaddingHV', h: number, v: number }
  | { kind: 'PaddingEach', top: number, right: number, bottom: number, left: number }

export function paddingAll(value: number): Padding {
  return { kind: 'PaddingAll', value }
}
export function paddingHV(h: number, v: number): Padding {
  return { kind: 'PaddingHV', h, v }
}
export function paddingEach(
  top: number,
  right: number = top,
  bottom: number = top,
  left: number = right
): Padding {
  return { kind: 'PaddingEach', top, right, bottom, left }
}

// LENGTH

export type Length =
  | { kind: 'LengthPx', value: number }
  | { kind: 'LengthShrink' }
  | { kind: 'LengthFill' }
  | { kind: 'LengthFillPortion', portion: number }
  | { kind: 'LengthMax', max: number, length: Length }
  | { kind: 'LengthMin', min: number, length: Length }

export function px(value: number): Length {
  return { kind: 'LengthPx', value }
}
export const shrink: Length = { kind: 'LengthShrink' }
export const fill: Length = { kind: 'LengthFill' }
export function fillPortion(portion: number): Length {
  return { kind: 'LengthFillPortion', portion }
}
export function maxLength(max: number, length: Length): Length {
  return { kind: 'LengthMax', max, length }
}
export function minLength(min: number, length: Length): Length {
  return { kind: 'LengthMin', min, length }
}

// BACKGROUND

export type Background =
  | { kind: 'BackgroundColor', color: Color }

export function bgColor(color: Color): Background {
  return { kind: 'BackgroundColor', color }
}
