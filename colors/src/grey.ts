import { interpolate as nInterpolate, normalize } from 'tempo-std/lib/numbers'
import { RGBX, ofRGBX } from './rgbx'

export interface Grey {
  kind: 'Grey'
  value: number
}

export type Type = Grey

export const white = makeUnsafe(1)
export const black = makeUnsafe(0)

function makeUnsafe(value: number): Grey {
  return { kind: 'Grey', value }
}
export function ofGrey(value: number): Grey {
  return { kind: 'Grey', value: normalize(value) }
}

export function equals(a: Grey, b: Grey) {
  return a.value === b.value
}

export function darker(g: Grey, t: number) {
  return interpolate(g, black, t)
}

export function lighter(g: Grey, t: number) {
  return interpolate(g, white, t)
}

export function interpolate(a: Grey, b: Grey, t: number) {
  return ofGrey(nInterpolate(a.value, b.value, t))
}

export function min(a: Grey, b: Grey) {
  return ofGrey(Math.min(a.value, b.value))
}

export function max(a: Grey, b: Grey) {
  return ofGrey(Math.max(a.value, b.value))
}

export function toRGBX(g: Grey): RGBX {
  return ofRGBX(g.value, g.value, g.value) // TODO this doesn't seem symmetrical to RGBX.toGrey
}

export function toString(g: Grey) {
  const v = g.value * 100
  return `grey(${v}%)`
}
