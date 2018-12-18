import { DOMAttribute } from './value'

export interface DOMAttributes<State, Action> {
  acceptCharset?: DOMAttribute<State, string[] | string[]>
  accesskey?: DOMAttribute<State, string>
  action?: DOMAttribute<State, string>
  alt?: DOMAttribute<State, string>
  as_?: DOMAttribute<State, string>
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
  autofocus?: DOMAttribute<State, boolean | boolean>
  autoplay?: DOMAttribute<State, boolean>
  behavior?: DOMAttribute<State, 'scroll' | 'slide' | 'alternate'>
  challenge?: DOMAttribute<State, string>
  charset?: DOMAttribute<State, string>
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
  datetime?: DOMAttribute<State, string | string>
  decoding?: DOMAttribute<State, 'sync' | 'async' | 'auto'>
  default?: DOMAttribute<State, boolean>
  defer?: DOMAttribute<State, boolean>
  dir?: DOMAttribute<State, 'ltr' | 'rtl' | 'auto'>
  direction?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean | boolean>
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
  sizes?: DOMAttribute<State, string[] | string[]>
  span?: DOMAttribute<State, number>
  spellcheck?: DOMAttribute<State, boolean | 'default' | 'true' | 'false'>
  src?: DOMAttribute<State, string>
  srcdoc?: DOMAttribute<State, string>
  srclang?: DOMAttribute<State, string>
  srcset?: DOMAttribute<State, string[]>
  start?: DOMAttribute<State, number>
  style?: DOMAttribute<State, string>
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
    | string
    | string
    | string
  >
  typemustmatch?: DOMAttribute<State, boolean>
  usemap?: DOMAttribute<State, string>
  value?: DOMAttribute<State, number | string>
  width?: DOMAttribute<State, number>
  wrap?: DOMAttribute<State, 'hard' | 'soft' | 'off'>
  xmlns?: DOMAttribute<State, string>
}
