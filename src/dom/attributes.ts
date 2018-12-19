import { DOMAttribute, DOMEventHandler, DOMStyles } from './value'

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
  style?: DOMAttribute<State, DOMStyles>
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
}
