/* istanbul ignore file */
import { DOMAttribute, DOMEventHandler } from './value'

import { CSSProperties } from './css_properties'

export interface DOMAttributes<State, Action> {
  acceptCharset?: DOMAttribute<State, string[] | string[]>
  accesskey?: DOMAttribute<State, string>
  action?: DOMAttribute<State, string>
  alt?: DOMAttribute<State, string>
  asAttr?: DOMAttribute<State, string>
  async?: DOMAttribute<State, boolean>
  autocapitalize?: DOMAttribute<State, 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'>
  autocomplete?: DOMAttribute<
    State,
    | 'off'
    | 'on'
    | 'name'
    | 'honorific-prefix'
    | 'given-name'
    | 'additional-name'
    | 'family-name'
    | 'honorific-suffix'
    | 'nickname'
    | 'email'
    | 'username'
    | 'new-password'
    | 'current-password'
    | 'organization-title'
    | 'organization'
    | 'street-address'
    | 'address-line1'
    | 'address-line2'
    | 'address-line3'
    | 'address-level1'
    | 'address-level2'
    | 'address-level3'
    | 'address-level4'
    | 'country'
    | 'country-name'
    | 'postal-code'
    | 'cc-name'
    | 'cc-given-name'
    | 'cc-additional-name'
    | 'cc-family-name'
    | 'cc-number'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-csc'
    | 'cc-type'
    | 'transaction-currency'
    | 'transaction-amount'
    | 'langiage'
    | 'bday'
    | 'bday-day'
    | 'bday-month'
    | 'bday-year'
    | 'sex'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-area-code'
    | 'tel-local'
    | 'tel-extension'
    | 'impp'
    | 'url'
    | 'photo'
  >
  autofocus?: DOMAttribute<State, boolean>
  autoplay?: DOMAttribute<State, boolean>
  behavior?: DOMAttribute<State, 'scroll' | 'slide' | 'alternate'>
  challenge?: DOMAttribute<State, string>
  charset?: DOMAttribute<State, string>
  checked?: DOMAttribute<State, boolean>
  cite?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  cols?: DOMAttribute<State, string>
  colspan?: DOMAttribute<State, number>
  content?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, boolean>
  controls?: DOMAttribute<State, boolean>
  coords?: DOMAttribute<State, string>
  crossorigin?: DOMAttribute<State, 'anonymous' | 'use-credentials'>
  data?: DOMAttribute<State, string>
  datetime?: DOMAttribute<State, string>
  decoding?: DOMAttribute<State, 'sync' | 'async' | 'auto'>
  default?: DOMAttribute<State, boolean>
  defer?: DOMAttribute<State, boolean>
  dir?: DOMAttribute<State, 'ltr' | 'rtl' | 'auto'>
  direction?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  download?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  enctype?: DOMAttribute<State, 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'>
  for?: DOMAttribute<State, string>
  form?: DOMAttribute<State, string>
  formaction?: DOMAttribute<State, string>
  formenctype?: DOMAttribute<State, 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'>
  formmethod?: DOMAttribute<State, 'post' | 'get'>
  formnovalidate?: DOMAttribute<State, boolean>
  formtarget?: DOMAttribute<State, '_self' | '_blank' | '_parent' | '_top' | string>
  headers?: DOMAttribute<State, string[]>
  height?: DOMAttribute<State, number>
  hidden?: DOMAttribute<State, boolean>
  high?: DOMAttribute<State, number>
  href?: DOMAttribute<State, string>
  hreflang?: DOMAttribute<State, string>
  httpEquiv?: DOMAttribute<State, 'content-security-policy' | 'refresh' | 'set-cookie'>
  id?: DOMAttribute<State, string>
  inputmode?: DOMAttribute<State, 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'>
  integrity?: DOMAttribute<State, string>
  is?: DOMAttribute<State, string>
  ismap?: DOMAttribute<State, boolean>
  itemid?: DOMAttribute<State, string>
  itemprop?: DOMAttribute<State, string>
  itemref?: DOMAttribute<State, string>
  itemscope?: DOMAttribute<State, boolean>
  itemtype?: DOMAttribute<State, string>
  keytype?: DOMAttribute<State, string>
  kind?: DOMAttribute<State, 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata'>
  label?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  list?: DOMAttribute<State, string>
  loop?: DOMAttribute<State, boolean>
  low?: DOMAttribute<State, number>
  max?: DOMAttribute<State, number>
  maxlength?: DOMAttribute<State, number>
  media?: DOMAttribute<State, string>
  method?: DOMAttribute<State, 'post' | 'get' | 'dialog'>
  min?: DOMAttribute<State, number>
  minlength?: DOMAttribute<State, number>
  multiple?: DOMAttribute<State, boolean>
  muted?: DOMAttribute<State, boolean>
  name?: DOMAttribute<
    State,
    | 'application-name'
    | 'author'
    | 'description'
    | 'generator'
    | 'keywords'
    | 'referrer'
    | 'creator'
    | 'googlebot'
    | 'robots'
    | 'publisher'
    | 'slurp'
    | 'viewport'
    | string
  >
  nomodule?: DOMAttribute<State, boolean>
  nonce?: DOMAttribute<State, string>
  novalidate?: DOMAttribute<State, boolean>
  open?: DOMAttribute<State, boolean>
  optimum?: DOMAttribute<State, number>
  ping?: DOMAttribute<State, string[]>
  placeholder?: DOMAttribute<State, string>
  playsinline?: DOMAttribute<State, boolean>
  poster?: DOMAttribute<State, string>
  preload?: DOMAttribute<State, '' | 'none' | 'metadata' | 'auto'>
  prompt?: DOMAttribute<State, string>
  readonly?: DOMAttribute<State, boolean>
  rel?: DOMAttribute<State, string[]>
  required?: DOMAttribute<State, boolean>
  reversed?: DOMAttribute<State, boolean>
  rows?: DOMAttribute<State, string>
  rowspan?: DOMAttribute<State, number>
  sandbox?: DOMAttribute<
    State,
    | 'allow-forms'
    | 'allow-modals'
    | 'allow-orientation-lock'
    | 'allow-pointer-lock'
    | 'allow-popups'
    | 'allow-popups-to-escape-sandbox'
    | 'allow-presentation'
    | 'allow-same-origin'
    | 'allow-scripts'
    | 'allow-top-navigation'
    | 'allow-top-navigation-by-user-activation'
  >
  scope?: DOMAttribute<State, 'row' | 'col' | 'rowgroup' | 'colgroup' | 'auto'>
  scrollamount?: DOMAttribute<State, number>
  scrolldelay?: DOMAttribute<State, number>
  selected?: DOMAttribute<State, boolean>
  shape?: DOMAttribute<State, string>
  size?: DOMAttribute<State, number>
  sizes?: DOMAttribute<State, string[]>
  span?: DOMAttribute<State, number>
  spellcheck?: DOMAttribute<State, 'default' | 'true' | 'false'>
  src?: DOMAttribute<State, string>
  srcdoc?: DOMAttribute<State, string>
  srclang?: DOMAttribute<State, string>
  srcset?: DOMAttribute<State, string[]>
  start?: DOMAttribute<State, number>
  style?: DOMAttribute<State, CSSProperties>
  tabindex?: DOMAttribute<State, number>
  target?: DOMAttribute<State, '_self' | '_blank' | '_parent' | '_top' | string>
  text?: DOMAttribute<State, string>
  title?: DOMAttribute<State, string>
  truespeed?: DOMAttribute<State, number>
  type?: DOMAttribute<
    State,
    | 'submit'
    | 'reset'
    | 'button'
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'toolbar'
    | string
  >
  typemustmatch?: DOMAttribute<State, boolean>
  usemap?: DOMAttribute<State, string>
  value?: DOMAttribute<State, number | string>
  width?: DOMAttribute<State, number>
  wrap?: DOMAttribute<State, 'hard' | 'soft' | 'off'>
  xmlns?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, UIEvent | Event, Action>
  onafterprint?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, AnimationEvent, Action>
  onanimationiteration?: DOMEventHandler<State, AnimationEvent, Action>
  onanimationstart?: DOMEventHandler<State, AnimationEvent, Action>
  onautocomplete?: DOMEventHandler<State, Event, Action>
  onautocompleteerror?: DOMEventHandler<State, Event, Action>
  onbeforeprint?: DOMEventHandler<State, Event, Action>
  onbeforeunload?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, FocusEvent, Action>
  oncompositionend?: DOMEventHandler<State, CompositionEvent, Action>
  oncompositionstart?: DOMEventHandler<State, CompositionEvent, Action>
  oncompositionupdate?: DOMEventHandler<State, CompositionEvent, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, MouseEvent, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, ClipboardEvent, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, ClipboardEvent, Action>
  ondblclick?: DOMEventHandler<State, MouseEvent, Action>
  ondrag?: DOMEventHandler<State, DragEvent, Action>
  ondragend?: DOMEventHandler<State, DragEvent, Action>
  ondragenter?: DOMEventHandler<State, DragEvent, Action>
  ondragexit?: DOMEventHandler<State, DragEvent, Action>
  ondragleave?: DOMEventHandler<State, DragEvent, Action>
  ondragover?: DOMEventHandler<State, DragEvent, Action>
  ondragstart?: DOMEventHandler<State, DragEvent, Action>
  ondrop?: DOMEventHandler<State, DragEvent, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, UIEvent | Event, Action>
  onfocus?: DOMEventHandler<State, FocusEvent, Action>
  onfocusin?: DOMEventHandler<State, FocusEvent, Action>
  onfocusout?: DOMEventHandler<State, FocusEvent, Action>
  onhashchange?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, KeyboardEvent, Action>
  onkeypress?: DOMEventHandler<State, KeyboardEvent, Action>
  onkeyup?: DOMEventHandler<State, KeyboardEvent, Action>
  onload?: DOMEventHandler<State, UIEvent, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onmessage?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, MouseEvent, Action>
  onmouseenter?: DOMEventHandler<State, MouseEvent, Action>
  onmouseleave?: DOMEventHandler<State, MouseEvent, Action>
  onmousemove?: DOMEventHandler<State, MouseEvent, Action>
  onmouseout?: DOMEventHandler<State, MouseEvent, Action>
  onmouseover?: DOMEventHandler<State, MouseEvent, Action>
  onmouseup?: DOMEventHandler<State, MouseEvent, Action>
  onmousewheel?: DOMEventHandler<State, MouseEvent, Action>
  onoffline?: DOMEventHandler<State, Event, Action>
  ononline?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, ClipboardEvent, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpopstate?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onredo?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, UIEvent, Action>
  onscroll?: DOMEventHandler<State, UIEvent, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, UIEvent | Event, Action>
  onshow?: DOMEventHandler<State, Event, Action>
  onsort?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onstorage?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, TouchEvent, Action>
  ontouchend?: DOMEventHandler<State, TouchEvent, Action>
  ontouchmove?: DOMEventHandler<State, TouchEvent, Action>
  ontouchstart?: DOMEventHandler<State, TouchEvent, Action>
  ontransitionend?: DOMEventHandler<State, AnimationEvent, Action>
  onundo?: DOMEventHandler<State, Event, Action>
  onunload?: DOMEventHandler<State, UIEvent | Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, WheelEvent, Action>
  $additiveSymbols?: DOMAttribute<State, string>
  $alignContent?: DOMAttribute<State, string>
  $alignItems?: DOMAttribute<State, string>
  $alignSelf?: DOMAttribute<State, string>
  $all?: DOMAttribute<State, string>
  $animation?: DOMAttribute<State, string>
  $animationDelay?: DOMAttribute<State, string>
  $animationDirection?: DOMAttribute<State, string>
  $animationDuration?: DOMAttribute<State, string>
  $animationFillMode?: DOMAttribute<State, string>
  $animationIterationCount?: DOMAttribute<State, string>
  $animationName?: DOMAttribute<State, string>
  $animationPlayState?: DOMAttribute<State, string>
  $animationTimingFunction?: DOMAttribute<State, string>
  $backfaceVisibility?: DOMAttribute<State, string>
  $background?: DOMAttribute<State, string>
  $backgroundAttachment?: DOMAttribute<State, string>
  $backgroundBlendMode?: DOMAttribute<State, string>
  $backgroundClip?: DOMAttribute<State, string>
  $backgroundColor?: DOMAttribute<State, string>
  $backgroundImage?: DOMAttribute<State, string>
  $backgroundOrigin?: DOMAttribute<State, string>
  $backgroundPosition?: DOMAttribute<State, string>
  $backgroundRepeat?: DOMAttribute<State, string>
  $backgroundSize?: DOMAttribute<State, string>
  $blockSize?: DOMAttribute<State, string>
  $border?: DOMAttribute<State, string>
  $borderBlock?: DOMAttribute<State, string>
  $borderBlockColor?: DOMAttribute<State, string>
  $borderBlockEnd?: DOMAttribute<State, string>
  $borderBlockEndColor?: DOMAttribute<State, string>
  $borderBlockEndStyle?: DOMAttribute<State, string>
  $borderBlockEndWidth?: DOMAttribute<State, string>
  $borderBlockStart?: DOMAttribute<State, string>
  $borderBlockStartColor?: DOMAttribute<State, string>
  $borderBlockStartStyle?: DOMAttribute<State, string>
  $borderBlockStartWidth?: DOMAttribute<State, string>
  $borderBlockStyle?: DOMAttribute<State, string>
  $borderBlockWidth?: DOMAttribute<State, string>
  $borderBottom?: DOMAttribute<State, string>
  $borderBottomColor?: DOMAttribute<State, string>
  $borderBottomLeftRadius?: DOMAttribute<State, string>
  $borderBottomRightRadius?: DOMAttribute<State, string>
  $borderBottomStyle?: DOMAttribute<State, string>
  $borderBottomWidth?: DOMAttribute<State, string>
  $borderCollapse?: DOMAttribute<State, string>
  $borderColor?: DOMAttribute<State, string>
  $borderEndEndRadius?: DOMAttribute<State, string>
  $borderEndStartRadius?: DOMAttribute<State, string>
  $borderImage?: DOMAttribute<State, string>
  $borderImageOutset?: DOMAttribute<State, string>
  $borderImageRepeat?: DOMAttribute<State, string>
  $borderImageSlice?: DOMAttribute<State, string>
  $borderImageSource?: DOMAttribute<State, string>
  $borderImageWidth?: DOMAttribute<State, string>
  $borderInline?: DOMAttribute<State, string>
  $borderInlineColor?: DOMAttribute<State, string>
  $borderInlineEnd?: DOMAttribute<State, string>
  $borderInlineEndColor?: DOMAttribute<State, string>
  $borderInlineEndStyle?: DOMAttribute<State, string>
  $borderInlineEndWidth?: DOMAttribute<State, string>
  $borderInlineStart?: DOMAttribute<State, string>
  $borderInlineStartColor?: DOMAttribute<State, string>
  $borderInlineStartStyle?: DOMAttribute<State, string>
  $borderInlineStartWidth?: DOMAttribute<State, string>
  $borderInlineStyle?: DOMAttribute<State, string>
  $borderInlineWidth?: DOMAttribute<State, string>
  $borderLeft?: DOMAttribute<State, string>
  $borderLeftColor?: DOMAttribute<State, string>
  $borderLeftStyle?: DOMAttribute<State, string>
  $borderLeftWidth?: DOMAttribute<State, string>
  $borderRadius?: DOMAttribute<State, string>
  $borderRight?: DOMAttribute<State, string>
  $borderRightColor?: DOMAttribute<State, string>
  $borderRightStyle?: DOMAttribute<State, string>
  $borderRightWidth?: DOMAttribute<State, string>
  $borderSpacing?: DOMAttribute<State, string>
  $borderStartEndRadius?: DOMAttribute<State, string>
  $borderStartStartRadius?: DOMAttribute<State, string>
  $borderStyle?: DOMAttribute<State, string>
  $borderTop?: DOMAttribute<State, string>
  $borderTopColor?: DOMAttribute<State, string>
  $borderTopLeftRadius?: DOMAttribute<State, string>
  $borderTopRightRadius?: DOMAttribute<State, string>
  $borderTopStyle?: DOMAttribute<State, string>
  $borderTopWidth?: DOMAttribute<State, string>
  $borderWidth?: DOMAttribute<State, string>
  $bottom?: DOMAttribute<State, string>
  $boxDecorationBreak?: DOMAttribute<State, string>
  $boxShadow?: DOMAttribute<State, string>
  $boxSizing?: DOMAttribute<State, string>
  $breakAfter?: DOMAttribute<State, string>
  $breakBefore?: DOMAttribute<State, string>
  $breakInside?: DOMAttribute<State, string>
  $captionSide?: DOMAttribute<State, string>
  $caretColor?: DOMAttribute<State, string>
  $clear?: DOMAttribute<State, string>
  $clip?: DOMAttribute<State, string>
  $clipPath?: DOMAttribute<State, string>
  $color?: DOMAttribute<State, string>
  $colorAdjust?: DOMAttribute<State, string>
  $columnCount?: DOMAttribute<State, string>
  $columnFill?: DOMAttribute<State, string>
  $columnGap?: DOMAttribute<State, string>
  $columnRule?: DOMAttribute<State, string>
  $columnRuleColor?: DOMAttribute<State, string>
  $columnRuleStyle?: DOMAttribute<State, string>
  $columnRuleWidth?: DOMAttribute<State, string>
  $columnSpan?: DOMAttribute<State, string>
  $columnWidth?: DOMAttribute<State, string>
  $columns?: DOMAttribute<State, string>
  $content?: DOMAttribute<State, string>
  $counterIncrement?: DOMAttribute<State, string>
  $counterReset?: DOMAttribute<State, string>
  $cursor?: DOMAttribute<State, string>
  $direction?: DOMAttribute<State, string>
  $display?: DOMAttribute<State, string>
  $emptyCells?: DOMAttribute<State, string>
  $fallback?: DOMAttribute<State, string>
  $filter?: DOMAttribute<State, string>
  $flex?: DOMAttribute<State, string>
  $flexBasis?: DOMAttribute<State, string>
  $flexDirection?: DOMAttribute<State, string>
  $flexFlow?: DOMAttribute<State, string>
  $flexGrow?: DOMAttribute<State, string>
  $flexShrink?: DOMAttribute<State, string>
  $flexWrap?: DOMAttribute<State, string>
  $float?: DOMAttribute<State, string>
  $font?: DOMAttribute<State, string>
  $fontFamily?: DOMAttribute<State, string>
  $fontFeatureSettings?: DOMAttribute<State, string>
  $fontKerning?: DOMAttribute<State, string>
  $fontLanguageOverride?: DOMAttribute<State, string>
  $fontOpticalSizing?: DOMAttribute<State, string>
  $fontSize?: DOMAttribute<State, string>
  $fontSizeAdjust?: DOMAttribute<State, string>
  $fontStretch?: DOMAttribute<State, string>
  $fontStyle?: DOMAttribute<State, string>
  $fontSynthesis?: DOMAttribute<State, string>
  $fontVariant?: DOMAttribute<State, string>
  $fontVariantAlternates?: DOMAttribute<State, string>
  $fontVariantCaps?: DOMAttribute<State, string>
  $fontVariantEastAsian?: DOMAttribute<State, string>
  $fontVariantLigatures?: DOMAttribute<State, string>
  $fontVariantNumeric?: DOMAttribute<State, string>
  $fontVariantPosition?: DOMAttribute<State, string>
  $fontVariationSettings?: DOMAttribute<State, string>
  $fontWeight?: DOMAttribute<State, string>
  $gap?: DOMAttribute<State, string>
  $grid?: DOMAttribute<State, string>
  $gridArea?: DOMAttribute<State, string>
  $gridAutoColumns?: DOMAttribute<State, string>
  $gridAutoFlow?: DOMAttribute<State, string>
  $gridAutoRows?: DOMAttribute<State, string>
  $gridColumn?: DOMAttribute<State, string>
  $gridColumnEnd?: DOMAttribute<State, string>
  $gridColumnStart?: DOMAttribute<State, string>
  $gridRow?: DOMAttribute<State, string>
  $gridRowEnd?: DOMAttribute<State, string>
  $gridRowStart?: DOMAttribute<State, string>
  $gridTemplate?: DOMAttribute<State, string>
  $gridTemplateAreas?: DOMAttribute<State, string>
  $gridTemplateColumns?: DOMAttribute<State, string>
  $gridTemplateRows?: DOMAttribute<State, string>
  $hangingPunctuation?: DOMAttribute<State, string>
  $height?: DOMAttribute<State, string>
  $hyphens?: DOMAttribute<State, string>
  $imageOrientation?: DOMAttribute<State, string>
  $imageRendering?: DOMAttribute<State, string>
  $inlineSize?: DOMAttribute<State, string>
  $inset?: DOMAttribute<State, string>
  $insetBlock?: DOMAttribute<State, string>
  $insetBlockEnd?: DOMAttribute<State, string>
  $insetBlockStart?: DOMAttribute<State, string>
  $insetInline?: DOMAttribute<State, string>
  $insetInlineEnd?: DOMAttribute<State, string>
  $insetInlineStart?: DOMAttribute<State, string>
  $isolation?: DOMAttribute<State, string>
  $justifyContent?: DOMAttribute<State, string>
  $justifyItems?: DOMAttribute<State, string>
  $justifySelf?: DOMAttribute<State, string>
  $left?: DOMAttribute<State, string>
  $letterSpacing?: DOMAttribute<State, string>
  $lineBreak?: DOMAttribute<State, string>
  $lineHeight?: DOMAttribute<State, string>
  $listStyle?: DOMAttribute<State, string>
  $listStyleImage?: DOMAttribute<State, string>
  $listStylePosition?: DOMAttribute<State, string>
  $listStyleType?: DOMAttribute<State, string>
  $margin?: DOMAttribute<State, string>
  $marginBlock?: DOMAttribute<State, string>
  $marginBlockEnd?: DOMAttribute<State, string>
  $marginBlockStart?: DOMAttribute<State, string>
  $marginBottom?: DOMAttribute<State, string>
  $marginInline?: DOMAttribute<State, string>
  $marginInlineEnd?: DOMAttribute<State, string>
  $marginInlineStart?: DOMAttribute<State, string>
  $marginLeft?: DOMAttribute<State, string>
  $marginRight?: DOMAttribute<State, string>
  $marginTop?: DOMAttribute<State, string>
  $mask?: DOMAttribute<State, string>
  $maskClip?: DOMAttribute<State, string>
  $maskComposite?: DOMAttribute<State, string>
  $maskImage?: DOMAttribute<State, string>
  $maskMode?: DOMAttribute<State, string>
  $maskOrigin?: DOMAttribute<State, string>
  $maskPosition?: DOMAttribute<State, string>
  $maskRepeat?: DOMAttribute<State, string>
  $maskSize?: DOMAttribute<State, string>
  $maskType?: DOMAttribute<State, string>
  $maxHeight?: DOMAttribute<State, string>
  $maxWidth?: DOMAttribute<State, string>
  $maxZoom?: DOMAttribute<State, string>
  $minBlockSize?: DOMAttribute<State, string>
  $minHeight?: DOMAttribute<State, string>
  $minInlineSize?: DOMAttribute<State, string>
  $minWidth?: DOMAttribute<State, string>
  $minZoom?: DOMAttribute<State, string>
  $mixBlendMode?: DOMAttribute<State, string>
  $negative?: DOMAttribute<State, string>
  $objectFit?: DOMAttribute<State, string>
  $objectPosition?: DOMAttribute<State, string>
  $opacity?: DOMAttribute<State, string>
  $order?: DOMAttribute<State, string>
  $orientation?: DOMAttribute<State, string>
  $orphans?: DOMAttribute<State, string>
  $outline?: DOMAttribute<State, string>
  $outlineColor?: DOMAttribute<State, string>
  $outlineOffset?: DOMAttribute<State, string>
  $outlineStyle?: DOMAttribute<State, string>
  $outlineWidth?: DOMAttribute<State, string>
  $overflow?: DOMAttribute<State, string>
  $overflowWrap?: DOMAttribute<State, string>
  $overflowX?: DOMAttribute<State, string>
  $overflowY?: DOMAttribute<State, string>
  $pad?: DOMAttribute<State, string>
  $padding?: DOMAttribute<State, string>
  $paddingBlock?: DOMAttribute<State, string>
  $paddingBlockEnd?: DOMAttribute<State, string>
  $paddingBlockStart?: DOMAttribute<State, string>
  $paddingBottom?: DOMAttribute<State, string>
  $paddingInline?: DOMAttribute<State, string>
  $paddingInlineEnd?: DOMAttribute<State, string>
  $paddingInlineStart?: DOMAttribute<State, string>
  $paddingLeft?: DOMAttribute<State, string>
  $paddingRight?: DOMAttribute<State, string>
  $paddingTop?: DOMAttribute<State, string>
  $pageBreakAfter?: DOMAttribute<State, string>
  $pageBreakBefore?: DOMAttribute<State, string>
  $pageBreakInside?: DOMAttribute<State, string>
  $perspective?: DOMAttribute<State, string>
  $perspectiveOrigin?: DOMAttribute<State, string>
  $placeContent?: DOMAttribute<State, string>
  $placeItems?: DOMAttribute<State, string>
  $pointerEvents?: DOMAttribute<State, string>
  $position?: DOMAttribute<State, string>
  $prefix?: DOMAttribute<State, string>
  $quotes?: DOMAttribute<State, string>
  $range?: DOMAttribute<State, string>
  $resize?: DOMAttribute<State, string>
  $revert?: DOMAttribute<State, string>
  $right?: DOMAttribute<State, string>
  $rotate?: DOMAttribute<State, string>
  $rowGap?: DOMAttribute<State, string>
  $scale?: DOMAttribute<State, string>
  $scrollBehavior?: DOMAttribute<State, string>
  $scrollMargin?: DOMAttribute<State, string>
  $scrollMarginBlock?: DOMAttribute<State, string>
  $scrollMarginBlockEnd?: DOMAttribute<State, string>
  $scrollMarginBlockStart?: DOMAttribute<State, string>
  $scrollMarginBottom?: DOMAttribute<State, string>
  $scrollMarginInline?: DOMAttribute<State, string>
  $scrollMarginInlineEnd?: DOMAttribute<State, string>
  $scrollMarginInlineStart?: DOMAttribute<State, string>
  $scrollMarginLeft?: DOMAttribute<State, string>
  $scrollMarginRight?: DOMAttribute<State, string>
  $scrollMarginTop?: DOMAttribute<State, string>
  $scrollPadding?: DOMAttribute<State, string>
  $scrollPaddingBlock?: DOMAttribute<State, string>
  $scrollPaddingBlockEnd?: DOMAttribute<State, string>
  $scrollPaddingBlockStart?: DOMAttribute<State, string>
  $scrollPaddingBottom?: DOMAttribute<State, string>
  $scrollPaddingInline?: DOMAttribute<State, string>
  $scrollPaddingInlineEnd?: DOMAttribute<State, string>
  $scrollPaddingInlineStart?: DOMAttribute<State, string>
  $scrollPaddingLeft?: DOMAttribute<State, string>
  $scrollPaddingRight?: DOMAttribute<State, string>
  $scrollPaddingTop?: DOMAttribute<State, string>
  $scrollSnapAlign?: DOMAttribute<State, string>
  $scrollSnapStop?: DOMAttribute<State, string>
  $scrollSnapType?: DOMAttribute<State, string>
  $scrollbarColor?: DOMAttribute<State, string>
  $scrollbarWidth?: DOMAttribute<State, string>
  $shapeImageThreshold?: DOMAttribute<State, string>
  $shapeMargin?: DOMAttribute<State, string>
  $shapeOutside?: DOMAttribute<State, string>
  $speakAs?: DOMAttribute<State, string>
  $src?: DOMAttribute<State, string>
  $suffix?: DOMAttribute<State, string>
  $symbols?: DOMAttribute<State, string>
  $system?: DOMAttribute<State, string>
  $tabSize?: DOMAttribute<State, string>
  $tableLayout?: DOMAttribute<State, string>
  $textAlign?: DOMAttribute<State, string>
  $textAlignLast?: DOMAttribute<State, string>
  $textCombineUpright?: DOMAttribute<State, string>
  $textDecoration?: DOMAttribute<State, string>
  $textDecorationColor?: DOMAttribute<State, string>
  $textDecorationLine?: DOMAttribute<State, string>
  $textDecorationStyle?: DOMAttribute<State, string>
  $textEmphasis?: DOMAttribute<State, string>
  $textEmphasisColor?: DOMAttribute<State, string>
  $textEmphasisPosition?: DOMAttribute<State, string>
  $textEmphasisStyle?: DOMAttribute<State, string>
  $textIndent?: DOMAttribute<State, string>
  $textJustify?: DOMAttribute<State, string>
  $textOrientation?: DOMAttribute<State, string>
  $textOverflow?: DOMAttribute<State, string>
  $textRendering?: DOMAttribute<State, string>
  $textShadow?: DOMAttribute<State, string>
  $textTransform?: DOMAttribute<State, string>
  $textUnderlinePosition?: DOMAttribute<State, string>
  $top?: DOMAttribute<State, string>
  $touchAction?: DOMAttribute<State, string>
  $transform?: DOMAttribute<State, string>
  $transformBox?: DOMAttribute<State, string>
  $transformOrigin?: DOMAttribute<State, string>
  $transformStyle?: DOMAttribute<State, string>
  $transition?: DOMAttribute<State, string>
  $transitionDelay?: DOMAttribute<State, string>
  $transitionDuration?: DOMAttribute<State, string>
  $transitionProperty?: DOMAttribute<State, string>
  $transitionTimingFunction?: DOMAttribute<State, string>
  $translate?: DOMAttribute<State, string>
  $unicodeBidi?: DOMAttribute<State, string>
  $unicodeRange?: DOMAttribute<State, string>
  $unset?: DOMAttribute<State, string>
  $userZoom?: DOMAttribute<State, string>
  $verticalAlign?: DOMAttribute<State, string>
  $visibility?: DOMAttribute<State, string>
  $whiteSpace?: DOMAttribute<State, string>
  $widows?: DOMAttribute<State, string>
  $width?: DOMAttribute<State, string>
  $willChange?: DOMAttribute<State, string>
  $wordBreak?: DOMAttribute<State, string>
  $wordSpacing?: DOMAttribute<State, string>
  $wordWrap?: DOMAttribute<State, string>
  $writingMode?: DOMAttribute<State, string>
  $zIndex?: DOMAttribute<State, string>
  $zoom?: DOMAttribute<State, string>
}
