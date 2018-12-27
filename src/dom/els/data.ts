/* istanbul ignore file */
import { DOMChild } from '../template'
import { DOMAttribute, DOMEventHandler } from '../value'
import { DOMElement } from '../element'
import { CSSAttributes, CSSProperties } from '../css_properties'
import { el } from '../element'

export interface DataAttributes<State, Action> {
  accesskey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, boolean>
  dir?: DOMAttribute<State, 'ltr' | 'rtl' | 'auto'>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputmode?: DOMAttribute<State, 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'>
  is?: DOMAttribute<State, string>
  itemid?: DOMAttribute<State, string>
  itemprop?: DOMAttribute<State, string>
  itemref?: DOMAttribute<State, string>
  itemscope?: DOMAttribute<State, boolean>
  itemtype?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, 'default' | 'true' | 'false'>
  style?: DOMAttribute<State, CSSProperties>
  tabindex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  value?: DOMAttribute<State, string>
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

export function data<State, Action>(
  attributes: DataAttributes<State, Action> & CSSAttributes<State>,
  ...children: DOMChild<State, Action>[]
): DOMElement<State, Action> {
  return el<State, Action>('data', attributes, ...children)
}
