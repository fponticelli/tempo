
import { DOMChild } from '../dom_child'
import { DOMValue } from '../dom_value'
import { el } from '../dom_element'

export interface ArticleAttributes<State> {
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
}

export const article = <State, Action>(attributes: ArticleAttributes<State>, ...children: DOMChild<State, Action>[]) => {
  return el<State, Action>('article', attributes, children)
}
