
import { DOMChild } from '../dom_child'
import { DOMValue } from '../dom_value'
import { el } from '../dom_element'

export interface AAttributes<State> {
  accesskey?: DOMValue<State, string>
  autocapitalize?: DOMValue<State, 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'>
  className?: DOMValue<State, string>
  contenteditable?: DOMValue<State, boolean>
  dir?: DOMValue<State, 'ltr' | 'rtl' | 'auto'>
  draggable?: DOMValue<State, boolean>
  hidden?: DOMValue<State, boolean>
  id?: DOMValue<State, string>
  inputmode?: DOMValue<State, 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'>
  is?: DOMValue<State, string>
  itemid?: DOMValue<State, string>
  itemprop?: DOMValue<State, string>
  itemref?: DOMValue<State, string>
  itemscope?: DOMValue<State, boolean>
  itemtype?: DOMValue<State, string>
  lang?: DOMValue<State, string>
  spellcheck?: DOMValue<State, boolean>
  style?: DOMValue<State, DOMStyles>
  tabindex?: DOMValue<State, number>
  title?: DOMValue<State, string>
  download?: DOMValue<State, string>
  href?: DOMValue<State, string>
  hreflang?: DOMValue<State, string>
  ping?: DOMValue<State, string[]>
  rel?: DOMValue<State, string[]>
  target?: DOMValue<State, '_self' | '_blank' | '_parent' | '_top' | string>
  type?: DOMValue<State, string>
}

export const a = <State, Action>(attributes: AAttributes<State>, ...children: DOMChild<State, Action>[]) => {
  return el<State, Action>('a', attributes, children)
}
