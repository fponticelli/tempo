import { DOMValue } from './dom_value'

export interface DOMAttributes<State> {
  accesskey?: DOMValue<State, string>
  alt?: DOMValue<State, string>
  autocapitalize?: DOMValue<State, 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'>
  autofocus?: DOMValue<State, boolean>
  autoplay?: DOMValue<State, boolean>
  cite?: DOMValue<State, string>
  className?: DOMValue<State, string>
  contenteditable?: DOMValue<State, boolean>
  controls?: DOMValue<State, boolean>
  coords?: DOMValue<State, string>
  crossorigin?: DOMValue<State, 'anonymous' | 'use-credentials'>
  datetime?: DOMValue<State, string | string>
  dir?: DOMValue<State, 'ltr' | 'rtl' | 'auto'>
  disabled?: DOMValue<State, boolean>
  download?: DOMValue<State, string>
  draggable?: DOMValue<State, boolean>
  form?: DOMValue<State, string>
  formaction?: DOMValue<State, string>
  formenctype?: DOMValue<State, 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'>
  formmethod?: DOMValue<State, 'post' | 'get'>
  formnovalidate?: DOMValue<State, boolean>
  formtarget?: DOMValue<State, '_self' | '_blank' | '_parent' | '_top' | string>
  height?: DOMValue<State, number>
  hidden?: DOMValue<State, boolean>
  href?: DOMValue<State, string>
  hreflang?: DOMValue<State, string>
  id?: DOMValue<State, string>
  inputmode?: DOMValue<State, 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'>
  is?: DOMValue<State, string>
  itemid?: DOMValue<State, string>
  itemprop?: DOMValue<State, string>
  itemref?: DOMValue<State, string>
  itemscope?: DOMValue<State, boolean>
  itemtype?: DOMValue<State, string>
  lang?: DOMValue<State, string>
  loop?: DOMValue<State, boolean>
  muted?: DOMValue<State, boolean>
  name?: DOMValue<State, string>
  ping?: DOMValue<State, string[]>
  preload?: DOMValue<State, '' | 'none' | 'metadata' | 'auto'>
  rel?: DOMValue<State, string[]>
  shape?: DOMValue<State, string>
  spellcheck?: DOMValue<State, boolean>
  src?: DOMValue<State, string>
  // style?: DOMValue<State, DOMStyles>
  tabindex?: DOMValue<State, number>
  target?: DOMValue<State, '_self' | '_blank' | '_parent' | '_top' | string>
  title?: DOMValue<State, string>
  type?: DOMValue<State, 'submit' | 'reset' | 'button' | string>
  value?: DOMValue<State, string>
  width?: DOMValue<State, number>
}
