import { matchKind } from 'tempo-std/lib/match'
import * as Grey from './grey'
import * as HSL from './hsl'
import * as HSLA from './hsla'
import * as RGB from './rgb'
import * as RGBA from './rgba'
import * as RGBAX from './rgbax'
import * as RGBX from './rgbx'

export type Color =
  | Grey.Type
  | HSL.Type
  | HSLA.Type
  | RGB.Type
  | RGBA.Type
  | RGBAX.Type
  | RGBX.Type

export function hasAlpha(color: Color): boolean {
  return matchKind(
    color,
    {
      Grey:  _ => false,
      HSL:   _ => false,
      HSLA:  _ => true,
      RGB:   _ => false,
      RGBA:  _ => true,
      RGBAX: _ => true,
      RGBX:  _ => false
    }
  )
}

export function getAlpha(color: Color): number {
  return matchKind(
    color,
    {
      Grey:  _ => 1,
      HSL:   _ => 1,
      HSLA:  c => HSLA.alpha(c),
      RGB:   _ => 1,
      RGBA:  c => RGBA.alpha(c) / 255,
      RGBAX: c => RGBAX.alpha(c),
      RGBX:  _ => 1
    }
  )
}

export function isFullyOpaque(color: Color): boolean {
  return getAlpha(color) === 1
}

export function toGrey(color: Color, mode = RGBX.GreyMode.Standard): Grey.Type {
  return matchKind(
    color,
    {
      Grey:  c => c,
      HSL:   c => RGBX.toGrey(HSL.toRGBX(c), mode),
      HSLA:  c => RGBX.toGrey(HSLA.toRGBX(c), mode),
      RGB:   c => RGBX.toGrey(RGB.toRGBX(c), mode),
      RGBA:  c => RGBX.toGrey(RGBA.toRGBX(c), mode),
      RGBAX: c => RGBX.toGrey(RGBAX.toRGBX(c), mode),
      RGBX:  c => RGBX.toGrey(c, mode)
    }
  )
}

export function toHSL(color: Color): HSL.Type {
  return matchKind(
    color,
    {
      Grey:  c => RGBX.toHSL(Grey.toRGBX(c)),
      HSL:   c => c,
      HSLA:  c => HSLA.toHSL(c),
      RGB:   c => RGBX.toHSL(RGB.toRGBX(c)),
      RGBA:  c => RGBX.toHSL(RGBA.toRGBX(c)),
      RGBAX: c => RGBX.toHSL(RGBAX.toRGBX(c)),
      RGBX:  c => RGBX.toHSL(c)
    }
  )
}

export function toHSLA(color: Color, altAlpha = 1): HSLA.Type {
  return matchKind(
    color,
    {
      Grey:  c => RGBAX.toHSLA(RGBX.withAlpha(Grey.toRGBX(c), altAlpha)),
      HSL:   c => HSL.withAlpha(c, altAlpha),
      HSLA:  c => c,
      RGB:   c => RGBAX.toHSLA(RGBX.withAlpha(RGB.toRGBX(c), altAlpha)),
      RGBA:  c => RGBAX.toHSLA(RGBA.toRGBAX(c)),
      RGBAX: c => RGBAX.toHSLA(c),
      RGBX:  c => RGBAX.toHSLA(RGBX.withAlpha(c, altAlpha))
    }
  )
}

export function toRGB(color: Color): RGB.Type {
  return matchKind(
    color,
    {
      Grey:  c => RGBX.toRGB(Grey.toRGBX(c)),
      HSL:   c => RGBX.toRGB(HSL.toRGBX(c)),
      HSLA:  c => RGBX.toRGB(HSLA.toRGBX(c)),
      RGB:   c => c,
      RGBA:  c => RGBX.toRGB(RGBA.toRGBX(c)),
      RGBAX: c => RGBAX.toRGB(c),
      RGBX:  c => RGBX.toRGB(c)
    }
  )
}

export function toRGBA(color: Color, altAlpha = 1): RGBA.Type {
  return matchKind(
    color,
    {
      Grey:  c => RGBAX.toRGBA(RGBX.withAlpha(Grey.toRGBX(c), altAlpha)),
      HSL:   c => RGBAX.toRGBA(HSLA.toRGBAX(HSL.withAlpha(c, altAlpha))),
      HSLA:  c => RGBAX.toRGBA(HSLA.toRGBAX(c)),
      RGB:   c => RGBAX.toRGBA(RGBX.withAlpha(RGB.toRGBX(c), altAlpha)),
      RGBA:  c => RGBAX.toRGBA(RGBA.toRGBAX(c)),
      RGBAX: c => RGBAX.toRGBA(c),
      RGBX:  c => RGBAX.toRGBA(RGBX.withAlpha(c, altAlpha))
    }
  )
}

export function toRGBAX(color: Color, altAlpha = 1): RGBAX.Type {
  return matchKind(
    color,
    {
    Grey:  c => RGBX.withAlpha(Grey.toRGBX(c), altAlpha),
    HSL:   c => HSLA.toRGBAX(HSL.withAlpha(c, altAlpha)),
    HSLA:  c => HSLA.toRGBAX(c),
    RGB:   c => RGBX.withAlpha(RGB.toRGBX(c), altAlpha),
    RGBA:  c => RGBA.toRGBAX(c),
    RGBAX: c => c,
    RGBX:  c => RGBX.withAlpha(c, altAlpha)
    }
  )
}

export function toRGBX(color: Color): RGBX.Type {
  return matchKind(
    color,
    {
      Grey:  c => Grey.toRGBX(c),
      HSL:   c => HSL.toRGBX(c),
      HSLA:  c => HSLA.toRGBX(c),
      RGB:   c => RGB.toRGBX(c),
      RGBA:  c => RGBA.toRGBX(c),
      RGBAX: c => RGBAX.toRGBX(c),
      RGBX:  c => c
    }
  )
}

export function toCSS3(color: Color): string {
  return matchKind(
    color,
    {
      Grey:  c => RGBX.toCSS3(Grey.toRGBX(c)),
      HSL:   c => HSL.toCSS3(c),
      HSLA:  c => HSLA.toCSS3(c),
      RGB:   c => RGB.toCSS3(c),
      RGBA:  c => RGBA.toCSS3(c),
      RGBAX: c => RGBAX.toCSS3(c),
      RGBX:  c => RGBX.toCSS3(c)
    }
  )
}
