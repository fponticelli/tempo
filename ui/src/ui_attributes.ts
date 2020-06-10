import { Color } from 'tempo-colors/lib/color'
import { ofHSL } from 'tempo-colors/lib/hsl'
import { ofRGB } from 'tempo-colors/lib/rgb'
import { ofHSLA } from 'tempo-colors/lib/hsla'
import { ofRGBA } from 'tempo-colors/lib/rgba'
import { matchKind } from 'tempo-std/lib/match'

export type Orientation = 'row' | 'col'

export type GradientAngle =
  | { kind: 'GradientAngleTop' }
  | { kind: 'GradientAngleTopLeft' }
  | { kind: 'GradientAngleTopRight' }
  | { kind: 'GradientAngleBottom' }
  | { kind: 'GradientAngleBottomLeft' }
  | { kind: 'GradientAngleBottomRight' }
  | { kind: 'GradientAngleLeft' }
  | { kind: 'GradientAngleRight' }
  | { kind: 'GradientAngleDegrees'; value: number }

export const GradientAngle = {
  top: { kind: 'GradientAngleTop' } as GradientAngle,
  topLeft: { kind: 'GradientAngleTopLeft' } as GradientAngle,
  topRight: { kind: 'GradientAngleTopRight' } as GradientAngle,
  bottom: { kind: 'GradientAngleBottom' } as GradientAngle,
  bottomLeft: { kind: 'GradientAngleBottomLeft' } as GradientAngle,
  bottomRight: { kind: 'GradientAngleBottomRight' } as GradientAngle,
  left: { kind: 'GradientAngleLeft' } as GradientAngle,
  right: { kind: 'GradientAngleRight' } as GradientAngle,
  degrees: (value: number): GradientAngle => ({
    kind: 'GradientAngleDegrees',
    value
  })
}

export type ColorStop = {
  kind: 'ColorStop'
  color: Color
  length?: Length | [Length, Length]
}

export const ColorStop = {
  color: (color: Color, length?: Length | [Length, Length]): ColorStop => ({
    kind: 'ColorStop',
    color,
    length
  }),
  hsl: (
    h: number,
    s: number,
    l: number,
    length?: Length | [Length, Length]
  ): ColorStop => ColorStop.color(ofHSL(h, s, l), length),
  hsla: (
    h: number,
    s: number,
    l: number,
    a: number,
    length?: Length | [Length, Length]
  ): ColorStop => ColorStop.color(ofHSLA(h, s, l, a), length),
  rgb: (
    r: number,
    g: number,
    b: number,
    length?: Length | [Length, Length]
  ): ColorStop => ColorStop.color(ofRGB(r, g, b), length),
  rgba: (
    r: number,
    g: number,
    b: number,
    a: number,
    length?: Length | [Length, Length]
  ): ColorStop => ColorStop.color(ofRGBA(r, g, b, a), length)
}

export type Background =
  | { kind: 'BackgroundColor'; color: Color }
  | {
      kind: 'BackgroundLinearGradient'
      angle?: GradientAngle
      stops: (ColorStop | Color)[]
    }
  | {
      kind: 'BackgroundRepeatingLinearGradient'
      angle?: GradientAngle
      stops: (ColorStop | Color)[]
    }
  | {
      kind: 'BackgroundMulti'
      backgrounds: Background[]
    }
  | {
      kind: 'BackgroundNone'
    }
  | {
      kind: 'BackgroundTransparent'
    }
export const Background = {
  none: { kind: 'BackgroundNone' } as Background,
  color: (color: Color): Background => ({ kind: 'BackgroundColor', color }),
  hsl: (h: number, s: number, l: number): Background =>
    Background.color(ofHSL(h, s, l)),
  hsla: (h: number, s: number, l: number, a: number): Background =>
    Background.color(ofHSLA(h, s, l, a)),
  rgb: (r: number, g: number = r, b: number = r): Background =>
    Background.color(ofRGB(r, g, b)),
  rgba: (r: number, g: number, b: number, a: number): Background =>
    Background.color(ofRGBA(r, g, b, a)),
  linearGradient: (
    stops: (ColorStop | Color)[],
    angle?: GradientAngle
  ): Background => ({
    kind: 'BackgroundLinearGradient',
    stops,
    angle
  }),
  repeatingLinearGradient: (
    stops: (ColorStop | Color)[],
    angle?: GradientAngle
  ): Background => ({
    kind: 'BackgroundRepeatingLinearGradient',
    stops,
    angle
  }),
  multi: (...backgrounds: Background[]): Background => ({
    kind: 'BackgroundMulti',
    backgrounds
  }),
  transparent: { kind: 'BackgroundTransparent' } as Background
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

export type TransitionTarget =
  | 'background'
  | 'padding'
  | 'text-color'
  | 'shadow'
  | 'text-shadow'
  | 'border'
export interface OneTransition {
  kind: 'Transition'
  targets: TransitionTarget[]
  duration?: string
  timingFunction?: string
  delay?: string
}
export type Transition =
  | OneTransition
  | { kind: 'MultiTransition'; transitions: OneTransition[] }
  | { kind: 'NoTransition' }

export const Transition = {
  make: (
    target: TransitionTarget | TransitionTarget[],
    duration?: string,
    timingFunction?: string,
    delay?: string
  ): OneTransition => ({
    kind: 'Transition',
    targets: typeof target === 'string' ? [target] : target,
    duration,
    timingFunction,
    delay
  }),
  multi: (...transitions: OneTransition[]): Transition => ({
    kind: 'MultiTransition',
    transitions
  }),
  none: { kind: 'NoTransition' } as Transition
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
  | { kind: 'SizeBetween'; min: number; max: number }
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
  }),
  between: (min: number, max: number): Size => ({
    kind: 'SizeBetween',
    min,
    max
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
  kind: 'BorderProperty'
  width: number
  color: Color
  style: BorderStyle
}

export type Border =
  | { kind: 'BorderNone' }
  | { kind: 'BorderAll'; all: BorderProperties }
  | {
      kind: 'BorderEach'
      top: BorderProperties | { kind: 'BorderNone' }
      right: BorderProperties | { kind: 'BorderNone' }
      bottom: BorderProperties | { kind: 'BorderNone' }
      left: BorderProperties | { kind: 'BorderNone' }
    }

export const Border = {
  none: { kind: 'BorderNone' } as const,
  make: (
    width: number = 1,
    color: Color = ofRGB(0, 0, 0),
    style: BorderStyle = 'solid'
  ): BorderProperties => ({
    kind: 'BorderProperty',
    width,
    color,
    style
  }),
  all: (
    width: number = 1,
    color: Color = ofRGB(0, 0, 0),
    style: BorderStyle = 'solid'
  ): Border => ({
    kind: 'BorderAll',
    all: {
      kind: 'BorderProperty',
      width,
      color,
      style
    }
  }),
  each: (
    top: BorderProperties | { kind: 'BorderNone' },
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
  | { kind: 'BorderRadiusNone' }
  | { kind: 'BorderRadiusAll'; all: BorderRadiusProperties }
  | {
      kind: 'BorderRadiusEach'
      tl: BorderRadiusProperties
      tr: BorderRadiusProperties
      br: BorderRadiusProperties
      bl: BorderRadiusProperties
    }

export const Radius = {
  none: { kind: 'BorderRadiusNone' } as BorderRadius,
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

export type PredefinedCursors =
  | 'cursor'
  | 'alias'
  | 'all-scroll'
  | 'auto'
  | 'ew-resize'
  | 'nesw-resize'
  | 'ns-resize'
  | 'nwse-resize'
  | 'cell'
  | 'col-resize'
  | 'context-menu'
  | 'copy'
  | 'crosshair'
  | 'default'
  | 'grab'
  | 'grabbing'
  | 'help'
  | 'move'
  | 'no-drop'
  | 'none'
  | 'not-allowed'
  | 'pointer'
  | 'progress'
  | 'row-resize'
  | 'text'
  | 'n-resize'
  | 'e-resize'
  | 's-resize'
  | 'w-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'vertical-text'
  | 'wait'
  | 'zoom-in'
  | 'zoom-out'

export type Cursor =
  | {
      kind: 'CustomCursor'
      url: string
      x?: number
      y?: number
    }
  | PredefinedCursors

export const Cursor = {
  custom: (url: string, x = 0, y = 0): Cursor => ({
    kind: 'CustomCursor',
    url,
    x,
    y
  }),
  cursor: 'cursor' as Cursor,
  alias: 'alias' as Cursor,
  allScroll: 'all-scroll' as Cursor,
  auto: 'auto' as Cursor,
  ewResize: 'ew-resize' as Cursor,
  neswResize: 'nesw-resize' as Cursor,
  nsResize: 'ns-resize' as Cursor,
  nwseResize: 'nwse-resize' as Cursor,
  cell: 'cell' as Cursor,
  colResize: 'col-resize' as Cursor,
  contextMenu: 'context-menu' as Cursor,
  copy: 'copy' as Cursor,
  crosshair: 'crosshair' as Cursor,
  default: 'default' as Cursor,
  grab: 'grab' as Cursor,
  grabbing: 'grabbing' as Cursor,
  help: 'help' as Cursor,
  move: 'move' as Cursor,
  noDrop: 'no-drop' as Cursor,
  none: 'none' as Cursor,
  notAllowed: 'not-allowed' as Cursor,
  pointer: 'pointer' as Cursor,
  progress: 'progress' as Cursor,
  rowResize: 'row-resize' as Cursor,
  text: 'text' as Cursor,
  nResize: 'n-resize' as Cursor,
  eResize: 'e-resize' as Cursor,
  sResize: 's-resize' as Cursor,
  wResize: 'w-resize' as Cursor,
  neResize: 'ne-resize' as Cursor,
  nwResize: 'nw-resize' as Cursor,
  seResize: 'se-resize' as Cursor,
  swResize: 'sw-resize' as Cursor,
  verticalText: 'vertical-text' as Cursor,
  wait: 'wait' as Cursor,
  zoomIn: 'zoom-in' as Cursor,
  zoomOut: 'zoom-out' as Cursor
}

export type Distribution =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export const Distribution = {
  start: 'flex-start',
  flexend: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  spaceBetween: 'space-between',
  spaceAround: 'space-around',
  spaceEvenly: 'space-evenly'
} as const

export interface NoShadow {
  kind: 'NoShadow'
}
export interface DropShadow {
  kind: 'DropShadow'
  x: number
  y: number
  blur?: number
  spread?: number
  color: Color
}

export interface InsetShadow {
  kind: 'InsetShadow'
  x: number
  y: number
  blur?: number
  spread?: number
  color: Color
}

export type Shadow =
  | NoShadow
  | DropShadow
  | InsetShadow
  | { kind: 'MultiShadow'; shadows: (DropShadow | InsetShadow)[] }

export const Shadow = {
  none: { kind: 'NoShadow' } as Shadow,
  swap: (shadows: (InsetShadow | DropShadow)[]): (DropShadow | InsetShadow)[] =>
    shadows.map(s =>
      matchKind(s, {
        DropShadow: s => Shadow.inset({ ...s }),
        InsetShadow: s => Shadow.drop({ ...s })
      })
    ),
  drop: ({
    x,
    y,
    blur,
    spread,
    color
  }: {
    x?: number
    y?: number
    blur?: number
    spread?: number
    color: Color
  }): DropShadow => ({
    kind: 'DropShadow',
    x: x ?? 0,
    y: y ?? 0,
    blur,
    spread,
    color
  }),
  inset: ({
    x,
    y,
    blur,
    spread,
    color
  }: {
    x?: number
    y?: number
    blur?: number
    spread?: number
    color: Color
  }): InsetShadow => {
    return {
      kind: 'InsetShadow',
      x: x ?? 0,
      y: y ?? 0,
      blur,
      spread,
      color
    }
  },
  multi: (...shadows: (DropShadow | InsetShadow)[]): Shadow => ({
    kind: 'MultiShadow',
    shadows
  })
}

export interface OneTextShadow {
  kind: 'OneTextShadow'
  x: number
  y: number
  blur?: number
  color: Color
}

export type TextShadow =
  | OneTextShadow
  | { kind: 'MultiTextShadow'; shadows: OneTextShadow[] }

export const TextShadow = {
  drop: ({
    x,
    y,
    blur,
    color
  }: {
    x?: number
    y?: number
    blur?: number
    color: Color
  }): TextShadow => ({
    kind: 'OneTextShadow',
    x: x ?? 0,
    y: y ?? 0,
    blur,
    color
  }),
  multi: (...shadows: OneTextShadow[]): TextShadow => ({
    kind: 'MultiTextShadow',
    shadows
  })
}

export type FontStyle = 'italic' | 'oblique'

export type FontWeight =
  | 'bold'
  | 'lighter'
  | 'bolder'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900

export const FontWeight = {
  bold: 'bold',
  lighter: 'lighter',
  bolder: 'bolder',
  w100: 100,
  w200: 200,
  w300: 300,
  w400: 400,
  w500: 500,
  w600: 600,
  w700: 700,
  w800: 800,
  w900: 900
}

export type TextAlign = 'start' | 'center' | 'end' | 'justify'

export type TextTransform = 'capitalize' | 'uppercase' | 'lowercase' | 'none'

export type UserSelect = 'auto' | 'text' | 'all' | 'none'

export const UserSelect = {
  auto: 'auto',
  text: 'text',
  all: 'all',
  none: 'none'
}

// TODO
// - [ ] overflowHorizontal
// - [ ] overflowVertical
// - [ ] textDirection
// - [ ] fontVariantLigatures
// - [ ] fontVariantNumeric
// - [ ] tabSize
// - [ ] whiteSpace
// - [ ] textOverflow
// - [ ] textDecoration
// - [ ] wordBreak
// - [ ] writingMode
