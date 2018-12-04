
import { DOMValue } from './dom_value'

export interface DOMAttributes<State> {
  accesskey?: DOMValue<State, string>
  alt?: DOMValue<State, string>
  autocapitalize?: DOMValue<State, 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'>
  className?: DOMValue<State, string>
  contenteditable?: DOMValue<State, boolean>
  coords?: DOMValue<State, string>
  download?: DOMValue<State, string>
  dir?: DOMValue<State, 'ltr' | 'rtl' | 'auto'>
  draggable?: DOMValue<State, boolean>
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
  ping?: DOMValue<State, string[]>
  rel?: DOMValue<State, string[]>
  shape?: DOMValue<State, string>
  spellcheck?: DOMValue<State, boolean>
  target?: DOMValue<State, '_self' | '_blank' | '_parent' | '_top' | string>
  style?: DOMValue<State, DOMStyles>
  tabindex?: DOMValue<State, number>
  title?: DOMValue<State, string>
  type?: DOMValue<State, string>
}
