import { DOMAttribute } from './value'

export interface DOMAttributes<State, Action> {
  accesskey?: DOMAttribute<State, string>
  alt?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'>
  autofocus?: DOMAttribute<State, boolean>
  autoplay?: DOMAttribute<State, boolean>
  cite?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contenteditable?: DOMAttribute<State, boolean>
  controls?: DOMAttribute<State, boolean>
  coords?: DOMAttribute<State, string>
  crossorigin?: DOMAttribute<State, 'anonymous' | 'use-credentials'>
  datetime?: DOMAttribute<State, string | string>
  dir?: DOMAttribute<State, 'ltr' | 'rtl' | 'auto'>
  disabled?: DOMAttribute<State, boolean>
  download?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  form?: DOMAttribute<State, string>
  formaction?: DOMAttribute<State, string>
  formenctype?: DOMAttribute<State, 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'>
  formmethod?: DOMAttribute<State, 'post' | 'get'>
  formnovalidate?: DOMAttribute<State, boolean>
  formtarget?: DOMAttribute<State, '_self' | '_blank' | '_parent' | '_top' | string>
  height?: DOMAttribute<State, number>
  hidden?: DOMAttribute<State, boolean>
  href?: DOMAttribute<State, string>
  hreflang?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  inputmode?: DOMAttribute<State, 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'>
  is?: DOMAttribute<State, string>
  itemid?: DOMAttribute<State, string>
  itemprop?: DOMAttribute<State, string>
  itemref?: DOMAttribute<State, string>
  itemscope?: DOMAttribute<State, boolean>
  itemtype?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  loop?: DOMAttribute<State, boolean>
  muted?: DOMAttribute<State, boolean>
  name?: DOMAttribute<State, string>
  ping?: DOMAttribute<State, string[]>
  preload?: DOMAttribute<State, '' | 'none' | 'metadata' | 'auto'>
  rel?: DOMAttribute<State, string[]>
  shape?: DOMAttribute<State, string>
  span?: DOMAttribute<State, number>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  style?: DOMAttribute<State, string>
  tabindex?: DOMAttribute<State, number>
  target?: DOMAttribute<State, '_self' | '_blank' | '_parent' | '_top' | string>
  title?: DOMAttribute<State, string>
  type?: DOMAttribute<State, 'submit' | 'reset' | 'button' | string>
  value?: DOMAttribute<State, string>
  width?: DOMAttribute<State, number>
}
