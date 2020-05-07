import { Color } from 'tempo-colors/lib/color'
import { ofHSL } from 'tempo-colors/lib/hsl'
import { ofRGB } from 'tempo-colors/lib/rgb'
import { ofHSLA } from 'tempo-colors/lib/hsla'
import { ofRGBA } from 'tempo-colors/lib/rgba'

export type Orientation = 'row' | 'col'

export type Background = { kind: 'BackgroundColor'; color: Color }
export const Background = {
  color: (color: Color): Background => ({ kind: 'BackgroundColor', color }),
  hsl: (h: number, s: number, l: number): Background =>
    Background.color(ofHSL(h, s, l)),
  hsla: (h: number, s: number, l: number, a: number): Background =>
    Background.color(ofHSLA(h, s, l, a)),
  rgb: (r: number, g: number, b: number): Background =>
    Background.color(ofRGB(r, g, b)),
  rgba: (r: number, g: number, b: number, a: number): Background =>
    Background.color(ofRGBA(r, g, b, a))
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

export type TransitionTarget = 'background' | 'padding'
export interface OneTransition {
  kind: 'Transition'
  target: TransitionTarget
  duration?: string
  timingFunction?: string
  delay?: string
}
export type Transition =
  | OneTransition
  | { kind: 'MultiTransition'; transitions: OneTransition[] }

export const Transition = {
  make: (
    target: TransitionTarget,
    duration?: string,
    timingFunction?: string,
    delay?: string
  ): OneTransition => ({
    kind: 'Transition',
    target,
    duration,
    timingFunction,
    delay
  }),
  multi: (...transitions: OneTransition[]): Transition => ({
    kind: 'MultiTransition',
    transitions
  })
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
  width: number
  color: Color
  style: BorderStyle
}

export type Border =
  | { kind: 'BorderAll'; all: BorderProperties }
  | {
      kind: 'BorderEach'
      top: BorderProperties
      right: BorderProperties
      bottom: BorderProperties
      left: BorderProperties
    }

export const Border = {
  all: (width: number, color: Color, style?: BorderStyle): Border => ({
    kind: 'BorderAll',
    all: {
      width,
      color,
      style: style ?? 'solid'
    }
  }),
  each: (
    top: BorderProperties,
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
  | { kind: 'BorderRadiusAll'; all: BorderRadiusProperties }
  | {
      kind: 'BorderRadiusEach'
      tl: BorderRadiusProperties
      tr: BorderRadiusProperties
      br: BorderRadiusProperties
      bl: BorderRadiusProperties
    }

export const Radius = {
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
}

export interface DropShadow {
  kind: 'DropShadow'
  offsetX: number
  offsetY: number
  blurRadius?: number
  spreadRadius?: number
  color: Color
}

export interface InsetShadow {
  kind: 'InsetShadow'
  offsetX: number
  offsetY: number
  blurRadius?: number
  spreadRadius?: number
  color: Color
}

export type Shadow =
  | DropShadow
  | InsetShadow
  | { kind: 'MultiShadow'; shadows: (DropShadow | InsetShadow)[] }

export const Shadow = {
  drop: ({
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    color
  }: {
    offsetX: number
    offsetY: number
    blurRadius?: number
    spreadRadius?: number
    color: Color
  }): Shadow => ({
    kind: 'DropShadow',
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    color
  }),
  inset: ({
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    color
  }: {
    offsetX: number
    offsetY: number
    blurRadius?: number
    spreadRadius?: number
    color: Color
  }): Shadow => ({
    kind: 'InsetShadow',
    offsetX,
    offsetY,
    blurRadius,
    spreadRadius,
    color
  }),
  multi: (...shadows: (DropShadow | InsetShadow)[]): Shadow => ({
    kind: 'MultiShadow',
    shadows
  })
}

export interface OneTextShadow {
  kind: 'OneTextShadow'
  offsetX: number
  offsetY: number
  blurRadius?: number
  color: Color
}

export type TextShadow =
  | OneTextShadow
  | { kind: 'MultiTextShadow'; shadows: OneTextShadow[] }

export const TextShadow = {
  drop: ({
    offsetX,
    offsetY,
    blurRadius,
    color
  }: {
    offsetX: number
    offsetY: number
    blurRadius?: number
    color: Color
  }): TextShadow => ({
    kind: 'OneTextShadow',
    offsetX,
    offsetY,
    blurRadius,
    color
  }),
  multi: (...shadows: OneTextShadow[]): TextShadow => ({
    kind: 'MultiTextShadow',
    shadows
  })
}

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

// letterSpacing
// lineHeight
// textAlign
// wordSpacing

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
// - [ ] textTransform
// - [ ] wordBreak
// - [ ] writingMode
