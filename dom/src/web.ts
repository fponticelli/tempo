
import { DOMChild } from './template'
import { DOMAttribute, DOMEventHandler } from './value'
import { el, DOMElement } from './element'
import { elNS } from './element_ns'
import { CSSAttributes, CSSProperties } from './css_properties'
import { MoodAttributes } from './mood_attributes'

export interface HTMLTableElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function table<State, Action>(
    attributes: HTMLTableElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTableElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('table', attributes, ...children)
  }
}

export interface SVGFEFuncAElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feFuncA<State, Action>(
    attributes: SVGFEFuncAElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEFuncAElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feFuncA', attributes, ...children)
  }
}

export interface SVGFETileElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feTile<State, Action>(
    attributes: SVGFETileElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFETileElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feTile', attributes, ...children)
  }
}

export interface SVGFEBlendElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feBlend<State, Action>(
    attributes: SVGFEBlendElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEBlendElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feBlend', attributes, ...children)
  }
}

export interface HTMLTimeElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dateTime?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function time<State, Action>(
    attributes: HTMLTimeElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTimeElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('time', attributes, ...children)
  }
}

export interface SVGGElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function g<State, Action>(
    attributes: SVGGElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGGElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'g', attributes, ...children)
  }
}

export interface SVGFEPointLightElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function fePointLight<State, Action>(
    attributes: SVGFEPointLightElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEPointLightElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'fePointLight', attributes, ...children)
  }
}

export interface HTMLBaseElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  href?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  target?: DOMAttribute<State, string>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function base<State, Action>(
    attributes: HTMLBaseElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLBaseElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('base', attributes, ...children)
  }
}

export interface SVGLineElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function line<State, Action>(
    attributes: SVGLineElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGLineElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'line', attributes, ...children)
  }
}

export interface HTMLParagraphElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function p<State, Action>(
    attributes: HTMLParagraphElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLParagraphElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('p', attributes, ...children)
  }
}

export interface HTMLOListElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  reversed?: DOMAttribute<State, boolean>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  start?: DOMAttribute<State, number>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  type?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function ol<State, Action>(
    attributes: HTMLOListElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLOListElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('ol', attributes, ...children)
  }
}

export interface SVGFEMorphologyElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feMorphology<State, Action>(
    attributes: SVGFEMorphologyElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEMorphologyElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feMorphology', attributes, ...children)
  }
}

export interface SVGPatternElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function pattern<State, Action>(
    attributes: SVGPatternElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGPatternElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'pattern', attributes, ...children)
  }
}

export interface SVGViewElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  zoomAndPan?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function view<State, Action>(
    attributes: SVGViewElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGViewElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'view', attributes, ...children)
  }
}

export interface HTMLLinkElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  as?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  crossOrigin?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  href?: DOMAttribute<State, string>
  hreflang?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  imageSizes?: DOMAttribute<State, string>
  imageSrcset?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  integrity?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  media?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  referrerPolicy?: DOMAttribute<State, string>
  rel?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  type?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function link<State, Action>(
    attributes: HTMLLinkElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLLinkElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('link', attributes, ...children)
  }
}

export interface HTMLFontElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function font<State, Action>(
    attributes: HTMLFontElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLFontElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('font', attributes, ...children)
  }
}

export interface HTMLOptionElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  defaultSelected?: DOMAttribute<State, boolean>
  dir?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  label?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  selected?: DOMAttribute<State, boolean>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  text?: DOMAttribute<State, string>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  value?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function option<State, Action>(
    attributes: HTMLOptionElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLOptionElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('option', attributes, ...children)
  }
}

export interface HTMLMapElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function map<State, Action>(
    attributes: HTMLMapElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLMapElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('map', attributes, ...children)
  }
}

export interface HTMLMenuElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function menu<State, Action>(
    attributes: HTMLMenuElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLMenuElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('menu', attributes, ...children)
  }
}

export interface HTMLTemplateElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function template<State, Action>(
    attributes: HTMLTemplateElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTemplateElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('template', attributes, ...children)
  }
}

export interface SVGFETurbulenceElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feTurbulence<State, Action>(
    attributes: SVGFETurbulenceElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFETurbulenceElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feTurbulence', attributes, ...children)
  }
}

export interface SVGFESpotLightElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feSpotLight<State, Action>(
    attributes: SVGFESpotLightElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFESpotLightElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feSpotLight', attributes, ...children)
  }
}

export interface HTMLImageElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  alt?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  crossOrigin?: DOMAttribute<State, string>
  decoding?: DOMAttribute<State, 'async' | 'sync' | 'auto'>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  height?: DOMAttribute<State, number>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  isMap?: DOMAttribute<State, boolean>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  referrerPolicy?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  sizes?: DOMAttribute<State, string>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  srcset?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  useMap?: DOMAttribute<State, string>
  width?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function img<State, Action>(
    attributes: HTMLImageElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLImageElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('img', attributes, ...children)
  }
}

export interface HTMLScriptElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  async?: DOMAttribute<State, boolean>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  crossOrigin?: DOMAttribute<State, string>
  defer?: DOMAttribute<State, boolean>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  integrity?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  noModule?: DOMAttribute<State, boolean>
  nonce?: DOMAttribute<State, string>
  referrerPolicy?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  text?: DOMAttribute<State, string>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  type?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function script<State, Action>(
    attributes: HTMLScriptElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLScriptElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('script', attributes, ...children)
  }
}

export interface HTMLTableRowElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function tr<State, Action>(
    attributes: HTMLTableRowElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTableRowElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('tr', attributes, ...children)
  }
}

export interface HTMLFrameElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function frame<State, Action>(
    attributes: HTMLFrameElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLFrameElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('frame', attributes, ...children)
  }
}

export interface SVGEllipseElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function ellipse<State, Action>(
    attributes: SVGEllipseElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGEllipseElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'ellipse', attributes, ...children)
  }
}

export interface SVGTextElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function text<State, Action>(
    attributes: SVGTextElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGTextElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'text', attributes, ...children)
  }
}

export interface HTMLIFrameElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  allow?: DOMAttribute<State, string>
  allowFullscreen?: DOMAttribute<State, boolean>
  allowPaymentRequest?: DOMAttribute<State, boolean>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  height?: DOMAttribute<State, string>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  referrerPolicy?: DOMAttribute<State, ReferrerPolicy>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  srcdoc?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  width?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function iframe<State, Action>(
    attributes: HTMLIFrameElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLIFrameElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('iframe', attributes, ...children)
  }
}

export interface HTMLBodyElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  bgProperties?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onafterprint?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onbeforeprint?: DOMEventHandler<State, Event, Action>
  onbeforeunload?: DOMEventHandler<State, BeforeUnloadEvent, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  onhashchange?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onlanguagechange?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmessage?: DOMEventHandler<State, Event, Action>
  onmessageerror?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onoffline?: DOMEventHandler<State, Event, Action>
  ononline?: DOMEventHandler<State, Event, Action>
  onpagehide?: DOMEventHandler<State, Event, Action>
  onpageshow?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onpopstate?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onrejectionhandled?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onstorage?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onunhandledrejection?: DOMEventHandler<State, Event, Action>
  onunload?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function body<State, Action>(
    attributes: HTMLBodyElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLBodyElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('body', attributes, ...children)
  }
}

export interface SVGFilterElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function filter<State, Action>(
    attributes: SVGFilterElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFilterElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'filter', attributes, ...children)
  }
}

export interface SVGImageElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function image<State, Action>(
    attributes: SVGImageElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGImageElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'image', attributes, ...children)
  }
}

export interface HTMLCanvasElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  height?: DOMAttribute<State, number>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  width?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function canvas<State, Action>(
    attributes: HTMLCanvasElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLCanvasElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('canvas', attributes, ...children)
  }
}

export interface HTMLTitleElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  text?: DOMAttribute<State, string>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function title<State, Action>(
    attributes: HTMLTitleElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTitleElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('title', attributes, ...children)
  }
}

export interface HTMLStyleElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  media?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function style<State, Action>(
    attributes: HTMLStyleElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLStyleElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('style', attributes, ...children)
  }
}

export interface HTMLTableCellElementAttributes<State, Action> {
  abbr?: DOMAttribute<State, string>
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  colSpan?: DOMAttribute<State, number>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  headers?: DOMAttribute<State, string>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  rowSpan?: DOMAttribute<State, number>
  scope?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export interface HTMLTextAreaElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  autocomplete?: DOMAttribute<State, string>
  autofocus?: DOMAttribute<State, boolean>
  className?: DOMAttribute<State, string>
  cols?: DOMAttribute<State, number>
  contentEditable?: DOMAttribute<State, string>
  defaultValue?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  dirName?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  maxLength?: DOMAttribute<State, number>
  minLength?: DOMAttribute<State, number>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  placeholder?: DOMAttribute<State, string>
  readOnly?: DOMAttribute<State, boolean>
  required?: DOMAttribute<State, boolean>
  rows?: DOMAttribute<State, number>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  selectionDirection?: DOMAttribute<State, string>
  selectionEnd?: DOMAttribute<State, number>
  selectionStart?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  value?: DOMAttribute<State, string>
  wrap?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function textarea<State, Action>(
    attributes: HTMLTextAreaElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTextAreaElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('textarea', attributes, ...children)
  }
}

export interface HTMLModElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  cite?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dateTime?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function del<State, Action>(
    attributes: HTMLModElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLModElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('del', attributes, ...children)
  }
}

export module html {
    export function ins<State, Action>(
    attributes: HTMLModElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLModElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('ins', attributes, ...children)
  }
}

export interface SVGUseElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function use<State, Action>(
    attributes: SVGUseElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGUseElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'use', attributes, ...children)
  }
}

export interface HTMLTableColElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  span?: DOMAttribute<State, number>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function col<State, Action>(
    attributes: HTMLTableColElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTableColElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('col', attributes, ...children)
  }
}

export module html {
    export function colgroup<State, Action>(
    attributes: HTMLTableColElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTableColElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('colgroup', attributes, ...children)
  }
}

export interface SVGFEFuncBElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feFuncB<State, Action>(
    attributes: SVGFEFuncBElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEFuncBElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feFuncB', attributes, ...children)
  }
}

export interface HTMLUListElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function ul<State, Action>(
    attributes: HTMLUListElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLUListElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('ul', attributes, ...children)
  }
}

export interface HTMLDivElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function div<State, Action>(
    attributes: HTMLDivElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLDivElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('div', attributes, ...children)
  }
}

export interface SVGFEColorMatrixElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feColorMatrix<State, Action>(
    attributes: SVGFEColorMatrixElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEColorMatrixElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feColorMatrix', attributes, ...children)
  }
}

export interface SVGForeignObjectElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function foreignObject<State, Action>(
    attributes: SVGForeignObjectElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGForeignObjectElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'foreignObject', attributes, ...children)
  }
}

export interface HTMLBRElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function br<State, Action>(
    attributes: HTMLBRElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLBRElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('br', attributes, ...children)
  }
}

export interface HTMLProgressElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  max?: DOMAttribute<State, number>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  value?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function progress<State, Action>(
    attributes: HTMLProgressElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLProgressElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('progress', attributes, ...children)
  }
}

export interface HTMLHeadElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function head<State, Action>(
    attributes: HTMLHeadElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLHeadElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('head', attributes, ...children)
  }
}

export interface SVGTextPathElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function textPath<State, Action>(
    attributes: SVGTextPathElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGTextPathElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'textPath', attributes, ...children)
  }
}

export interface HTMLObjectElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  data?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  height?: DOMAttribute<State, string>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  type?: DOMAttribute<State, string>
  useMap?: DOMAttribute<State, string>
  width?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function object<State, Action>(
    attributes: HTMLObjectElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLObjectElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('object', attributes, ...children)
  }
}

export interface HTMLEmbedElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  height?: DOMAttribute<State, string>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  type?: DOMAttribute<State, string>
  width?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function embed<State, Action>(
    attributes: HTMLEmbedElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLEmbedElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('embed', attributes, ...children)
  }
}

export interface SVGFECompositeElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feComposite<State, Action>(
    attributes: SVGFECompositeElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFECompositeElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feComposite', attributes, ...children)
  }
}

export interface SVGSymbolElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function symbol<State, Action>(
    attributes: SVGSymbolElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGSymbolElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'symbol', attributes, ...children)
  }
}

export interface HTMLVideoElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  autoplay?: DOMAttribute<State, boolean>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  controls?: DOMAttribute<State, boolean>
  crossOrigin?: DOMAttribute<State, string>
  currentTime?: DOMAttribute<State, number>
  defaultMuted?: DOMAttribute<State, boolean>
  defaultPlaybackRate?: DOMAttribute<State, number>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  height?: DOMAttribute<State, number>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  loop?: DOMAttribute<State, boolean>
  msAudioCategory?: DOMAttribute<State, string>
  msAudioDeviceType?: DOMAttribute<State, string>
  msHorizontalMirror?: DOMAttribute<State, boolean>
  msPlayToDisabled?: DOMAttribute<State, boolean>
  msPlayToPreferredSourceUri?: DOMAttribute<State, string>
  msPlayToPrimary?: DOMAttribute<State, boolean>
  msRealTime?: DOMAttribute<State, boolean>
  msStereo3DPackingMode?: DOMAttribute<State, string>
  msStereo3DRenderMode?: DOMAttribute<State, string>
  msZoom?: DOMAttribute<State, boolean>
  muted?: DOMAttribute<State, boolean>
  nonce?: DOMAttribute<State, string>
  playbackRate?: DOMAttribute<State, number>
  poster?: DOMAttribute<State, string>
  preload?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  srcObject?: DOMAttribute<State, MediaStream | MediaSource | Blob>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  volume?: DOMAttribute<State, number>
  width?: DOMAttribute<State, number>
  onMSVideoFormatChanged?: DOMEventHandler<State, Event, Action>
  onMSVideoFrameStepCompleted?: DOMEventHandler<State, Event, Action>
  onMSVideoOptimalLayoutChanged?: DOMEventHandler<State, Event, Action>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onencrypted?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwaitingforkey?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function video<State, Action>(
    attributes: HTMLVideoElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLVideoElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('video', attributes, ...children)
  }
}

export interface SVGFEDiffuseLightingElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feDiffuseLighting<State, Action>(
    attributes: SVGFEDiffuseLightingElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEDiffuseLightingElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feDiffuseLighting', attributes, ...children)
  }
}

export interface SVGFEComponentTransferElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feComponentTransfer<State, Action>(
    attributes: SVGFEComponentTransferElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEComponentTransferElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feComponentTransfer', attributes, ...children)
  }
}

export interface SVGFEFloodElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feFlood<State, Action>(
    attributes: SVGFEFloodElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEFloodElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feFlood', attributes, ...children)
  }
}

export interface SVGFEMergeNodeElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feMergeNode<State, Action>(
    attributes: SVGFEMergeNodeElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEMergeNodeElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feMergeNode', attributes, ...children)
  }
}

export interface HTMLPictureElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function picture<State, Action>(
    attributes: HTMLPictureElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLPictureElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('picture', attributes, ...children)
  }
}

export interface SVGMarkerElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function marker<State, Action>(
    attributes: SVGMarkerElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGMarkerElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'marker', attributes, ...children)
  }
}

export interface HTMLMeterElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  high?: DOMAttribute<State, number>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  low?: DOMAttribute<State, number>
  max?: DOMAttribute<State, number>
  min?: DOMAttribute<State, number>
  nonce?: DOMAttribute<State, string>
  optimum?: DOMAttribute<State, number>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  value?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function meter<State, Action>(
    attributes: HTMLMeterElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLMeterElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('meter', attributes, ...children)
  }
}

export interface SVGFEMergeElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feMerge<State, Action>(
    attributes: SVGFEMergeElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEMergeElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feMerge', attributes, ...children)
  }
}

export interface SVGFESpecularLightingElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feSpecularLighting<State, Action>(
    attributes: SVGFESpecularLightingElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFESpecularLightingElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feSpecularLighting', attributes, ...children)
  }
}

export interface SVGDescElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function desc<State, Action>(
    attributes: SVGDescElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGDescElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'desc', attributes, ...children)
  }
}

export interface SVGClipPathElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function clipPath<State, Action>(
    attributes: SVGClipPathElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGClipPathElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'clipPath', attributes, ...children)
  }
}

export interface HTMLAppletElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function applet<State, Action>(
    attributes: HTMLAppletElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLAppletElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('applet', attributes, ...children)
  }
}

export interface HTMLSelectElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  autocomplete?: DOMAttribute<State, string>
  autofocus?: DOMAttribute<State, boolean>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  length?: DOMAttribute<State, number>
  multiple?: DOMAttribute<State, boolean>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  required?: DOMAttribute<State, boolean>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  selectedIndex?: DOMAttribute<State, number>
  size?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  value?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function select<State, Action>(
    attributes: HTMLSelectElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLSelectElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('select', attributes, ...children)
  }
}

export interface HTMLMetaElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  content?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  httpEquiv?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function meta<State, Action>(
    attributes: HTMLMetaElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLMetaElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('meta', attributes, ...children)
  }
}

export interface SVGScriptElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  type?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function script<State, Action>(
    attributes: SVGScriptElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGScriptElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'script', attributes, ...children)
  }
}

export interface SVGFEDistantLightElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feDistantLight<State, Action>(
    attributes: SVGFEDistantLightElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEDistantLightElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feDistantLight', attributes, ...children)
  }
}

export interface SVGTitleElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function title<State, Action>(
    attributes: SVGTitleElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGTitleElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'title', attributes, ...children)
  }
}

export interface HTMLTableCaptionElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function caption<State, Action>(
    attributes: HTMLTableCaptionElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTableCaptionElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('caption', attributes, ...children)
  }
}

export interface SVGFEConvolveMatrixElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feConvolveMatrix<State, Action>(
    attributes: SVGFEConvolveMatrixElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEConvolveMatrixElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feConvolveMatrix', attributes, ...children)
  }
}

export interface SVGFEFuncGElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feFuncG<State, Action>(
    attributes: SVGFEFuncGElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEFuncGElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feFuncG', attributes, ...children)
  }
}

export interface HTMLAreaElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  alt?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  coords?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  download?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hash?: DOMAttribute<State, string>
  hidden?: DOMAttribute<State, boolean>
  host?: DOMAttribute<State, string>
  hostname?: DOMAttribute<State, string>
  href?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  password?: DOMAttribute<State, string>
  pathname?: DOMAttribute<State, string>
  ping?: DOMAttribute<State, string>
  port?: DOMAttribute<State, string>
  protocol?: DOMAttribute<State, string>
  referrerPolicy?: DOMAttribute<State, string>
  rel?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  search?: DOMAttribute<State, string>
  shape?: DOMAttribute<State, string>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  target?: DOMAttribute<State, string>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  username?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function area<State, Action>(
    attributes: HTMLAreaElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLAreaElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('area', attributes, ...children)
  }
}

export interface HTMLButtonElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  autofocus?: DOMAttribute<State, boolean>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  draggable?: DOMAttribute<State, boolean>
  formAction?: DOMAttribute<State, string>
  formEnctype?: DOMAttribute<State, string>
  formMethod?: DOMAttribute<State, string>
  formNoValidate?: DOMAttribute<State, boolean>
  formTarget?: DOMAttribute<State, string>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  type?: DOMAttribute<State, string>
  value?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function button<State, Action>(
    attributes: HTMLButtonElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLButtonElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('button', attributes, ...children)
  }
}

export interface HTMLSourceElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  media?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  sizes?: DOMAttribute<State, string>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  srcset?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  type?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function source<State, Action>(
    attributes: HTMLSourceElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLSourceElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('source', attributes, ...children)
  }
}

export interface HTMLHtmlElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function html<State, Action>(
    attributes: HTMLHtmlElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLHtmlElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('html', attributes, ...children)
  }
}

export interface HTMLQuoteElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  cite?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function blockquote<State, Action>(
    attributes: HTMLQuoteElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLQuoteElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('blockquote', attributes, ...children)
  }
}

export module html {
    export function q<State, Action>(
    attributes: HTMLQuoteElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLQuoteElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('q', attributes, ...children)
  }
}

export interface SVGDefsElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function defs<State, Action>(
    attributes: SVGDefsElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGDefsElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'defs', attributes, ...children)
  }
}

export interface HTMLDListElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function dl<State, Action>(
    attributes: HTMLDListElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLDListElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('dl', attributes, ...children)
  }
}

export interface SVGAElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function a<State, Action>(
    attributes: SVGAElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGAElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'a', attributes, ...children)
  }
}

export interface HTMLFrameSetElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onafterprint?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onbeforeprint?: DOMEventHandler<State, Event, Action>
  onbeforeunload?: DOMEventHandler<State, BeforeUnloadEvent, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  onhashchange?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onlanguagechange?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmessage?: DOMEventHandler<State, Event, Action>
  onmessageerror?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onoffline?: DOMEventHandler<State, Event, Action>
  ononline?: DOMEventHandler<State, Event, Action>
  onpagehide?: DOMEventHandler<State, Event, Action>
  onpageshow?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onpopstate?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onrejectionhandled?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onstorage?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onunhandledrejection?: DOMEventHandler<State, Event, Action>
  onunload?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function frameset<State, Action>(
    attributes: HTMLFrameSetElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLFrameSetElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('frameset', attributes, ...children)
  }
}

export interface SVGSVGElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  currentScale?: DOMAttribute<State, number>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  zoomAndPan?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onunload?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
  onzoom?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function svg<State, Action>(
    attributes: SVGSVGElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGSVGElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'svg', attributes, ...children)
  }
}

export interface HTMLLabelElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  htmlFor?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function label<State, Action>(
    attributes: HTMLLabelElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLLabelElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('label', attributes, ...children)
  }
}

export interface HTMLDirectoryElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function dir<State, Action>(
    attributes: HTMLDirectoryElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLDirectoryElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('dir', attributes, ...children)
  }
}

export interface HTMLLegendElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function legend<State, Action>(
    attributes: HTMLLegendElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLLegendElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('legend', attributes, ...children)
  }
}

export interface SVGTSpanElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function tspan<State, Action>(
    attributes: SVGTSpanElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGTSpanElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'tspan', attributes, ...children)
  }
}

export interface HTMLLIElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  value?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function li<State, Action>(
    attributes: HTMLLIElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLLIElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('li', attributes, ...children)
  }
}

export interface SVGFEImageElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feImage<State, Action>(
    attributes: SVGFEImageElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEImageElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feImage', attributes, ...children)
  }
}

export interface SVGStyleElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  media?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  type?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function style<State, Action>(
    attributes: SVGStyleElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGStyleElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'style', attributes, ...children)
  }
}

export interface SVGRadialGradientElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function radialGradient<State, Action>(
    attributes: SVGRadialGradientElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGRadialGradientElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'radialGradient', attributes, ...children)
  }
}

export interface HTMLTableSectionElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function tbody<State, Action>(
    attributes: HTMLTableSectionElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTableSectionElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('tbody', attributes, ...children)
  }
}

export module html {
    export function tfoot<State, Action>(
    attributes: HTMLTableSectionElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTableSectionElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('tfoot', attributes, ...children)
  }
}

export module html {
    export function thead<State, Action>(
    attributes: HTMLTableSectionElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTableSectionElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('thead', attributes, ...children)
  }
}

export interface HTMLInputElementAttributes<State, Action> {
  accept?: DOMAttribute<State, string>
  accessKey?: DOMAttribute<State, string>
  alt?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  autocomplete?: DOMAttribute<State, string>
  autofocus?: DOMAttribute<State, boolean>
  checked?: DOMAttribute<State, boolean>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  defaultChecked?: DOMAttribute<State, boolean>
  defaultValue?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  dirName?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  draggable?: DOMAttribute<State, boolean>
  files?: DOMAttribute<State, FileList | null>
  formAction?: DOMAttribute<State, string>
  formEnctype?: DOMAttribute<State, string>
  formMethod?: DOMAttribute<State, string>
  formNoValidate?: DOMAttribute<State, boolean>
  formTarget?: DOMAttribute<State, string>
  height?: DOMAttribute<State, number>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  indeterminate?: DOMAttribute<State, boolean>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  max?: DOMAttribute<State, string>
  maxLength?: DOMAttribute<State, number>
  min?: DOMAttribute<State, string>
  minLength?: DOMAttribute<State, number>
  multiple?: DOMAttribute<State, boolean>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  pattern?: DOMAttribute<State, string>
  placeholder?: DOMAttribute<State, string>
  readOnly?: DOMAttribute<State, boolean>
  required?: DOMAttribute<State, boolean>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  selectionDirection?: DOMAttribute<State, string>
  selectionEnd?: DOMAttribute<State, number>
  selectionStart?: DOMAttribute<State, number>
  size?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  step?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  type?: DOMAttribute<State, string>
  value?: DOMAttribute<State, string>
  valueAsDate?: DOMAttribute<State, Date | null>
  valueAsNumber?: DOMAttribute<State, number>
  width?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function input<State, Action>(
    attributes: HTMLInputElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLInputElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('input', attributes, ...children)
  }
}

export interface HTMLAnchorElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  download?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hash?: DOMAttribute<State, string>
  hidden?: DOMAttribute<State, boolean>
  host?: DOMAttribute<State, string>
  hostname?: DOMAttribute<State, string>
  href?: DOMAttribute<State, string>
  hreflang?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  password?: DOMAttribute<State, string>
  pathname?: DOMAttribute<State, string>
  ping?: DOMAttribute<State, string>
  port?: DOMAttribute<State, string>
  protocol?: DOMAttribute<State, string>
  referrerPolicy?: DOMAttribute<State, string>
  rel?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  search?: DOMAttribute<State, string>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  target?: DOMAttribute<State, string>
  text?: DOMAttribute<State, string>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  type?: DOMAttribute<State, string>
  username?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function a<State, Action>(
    attributes: HTMLAnchorElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLAnchorElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('a', attributes, ...children)
  }
}

export interface HTMLParamElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  value?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function param<State, Action>(
    attributes: HTMLParamElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLParamElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('param', attributes, ...children)
  }
}

export interface HTMLPreElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function pre<State, Action>(
    attributes: HTMLPreElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLPreElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('pre', attributes, ...children)
  }
}

export module html {
    export function listing<State, Action>(
    attributes: HTMLPreElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLPreElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('listing', attributes, ...children)
  }
}

export module html {
    export function xmp<State, Action>(
    attributes: HTMLPreElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLPreElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('xmp', attributes, ...children)
  }
}

export interface SVGMetadataElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function metadata<State, Action>(
    attributes: SVGMetadataElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGMetadataElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'metadata', attributes, ...children)
  }
}

export interface SVGPolygonElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function polygon<State, Action>(
    attributes: SVGPolygonElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGPolygonElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'polygon', attributes, ...children)
  }
}

export interface SVGFEGaussianBlurElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feGaussianBlur<State, Action>(
    attributes: SVGFEGaussianBlurElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEGaussianBlurElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feGaussianBlur', attributes, ...children)
  }
}

export interface SVGPathElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function path<State, Action>(
    attributes: SVGPathElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGPathElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'path', attributes, ...children)
  }
}

export interface HTMLAudioElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  autoplay?: DOMAttribute<State, boolean>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  controls?: DOMAttribute<State, boolean>
  crossOrigin?: DOMAttribute<State, string>
  currentTime?: DOMAttribute<State, number>
  defaultMuted?: DOMAttribute<State, boolean>
  defaultPlaybackRate?: DOMAttribute<State, number>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  loop?: DOMAttribute<State, boolean>
  msAudioCategory?: DOMAttribute<State, string>
  msAudioDeviceType?: DOMAttribute<State, string>
  msPlayToDisabled?: DOMAttribute<State, boolean>
  msPlayToPreferredSourceUri?: DOMAttribute<State, string>
  msPlayToPrimary?: DOMAttribute<State, boolean>
  msRealTime?: DOMAttribute<State, boolean>
  muted?: DOMAttribute<State, boolean>
  nonce?: DOMAttribute<State, string>
  playbackRate?: DOMAttribute<State, number>
  preload?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  srcObject?: DOMAttribute<State, MediaStream | MediaSource | Blob>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  volume?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onencrypted?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwaitingforkey?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function audio<State, Action>(
    attributes: HTMLAudioElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLAudioElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('audio', attributes, ...children)
  }
}

export interface SVGCircleElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function circle<State, Action>(
    attributes: SVGCircleElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGCircleElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'circle', attributes, ...children)
  }
}

export interface HTMLBaseFontElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  color?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function basefont<State, Action>(
    attributes: HTMLBaseFontElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLBaseFontElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('basefont', attributes, ...children)
  }
}

export interface HTMLMarqueeElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function marquee<State, Action>(
    attributes: HTMLMarqueeElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLMarqueeElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('marquee', attributes, ...children)
  }
}

export interface SVGFEFuncRElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feFuncR<State, Action>(
    attributes: SVGFEFuncRElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEFuncRElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feFuncR', attributes, ...children)
  }
}

export interface SVGFEDisplacementMapElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feDisplacementMap<State, Action>(
    attributes: SVGFEDisplacementMapElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEDisplacementMapElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feDisplacementMap', attributes, ...children)
  }
}

export interface SVGLinearGradientElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function linearGradient<State, Action>(
    attributes: SVGLinearGradientElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGLinearGradientElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'linearGradient', attributes, ...children)
  }
}

export interface SVGRectElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function rect<State, Action>(
    attributes: SVGRectElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGRectElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'rect', attributes, ...children)
  }
}

export interface SVGPolylineElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function polyline<State, Action>(
    attributes: SVGPolylineElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGPolylineElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'polyline', attributes, ...children)
  }
}

export interface HTMLSpanElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function span<State, Action>(
    attributes: HTMLSpanElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLSpanElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('span', attributes, ...children)
  }
}

export interface HTMLHeadingElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function h1<State, Action>(
    attributes: HTMLHeadingElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLHeadingElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('h1', attributes, ...children)
  }
}

export module html {
    export function h2<State, Action>(
    attributes: HTMLHeadingElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLHeadingElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('h2', attributes, ...children)
  }
}

export module html {
    export function h3<State, Action>(
    attributes: HTMLHeadingElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLHeadingElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('h3', attributes, ...children)
  }
}

export module html {
    export function h4<State, Action>(
    attributes: HTMLHeadingElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLHeadingElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('h4', attributes, ...children)
  }
}

export module html {
    export function h5<State, Action>(
    attributes: HTMLHeadingElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLHeadingElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('h5', attributes, ...children)
  }
}

export module html {
    export function h6<State, Action>(
    attributes: HTMLHeadingElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLHeadingElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('h6', attributes, ...children)
  }
}

export interface SVGFEOffsetElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function feOffset<State, Action>(
    attributes: SVGFEOffsetElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGFEOffsetElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'feOffset', attributes, ...children)
  }
}

export interface HTMLFormElementAttributes<State, Action> {
  acceptCharset?: DOMAttribute<State, string>
  accessKey?: DOMAttribute<State, string>
  action?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  autocomplete?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  encoding?: DOMAttribute<State, string>
  enctype?: DOMAttribute<State, string>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  method?: DOMAttribute<State, string>
  name?: DOMAttribute<State, string>
  noValidate?: DOMAttribute<State, boolean>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  target?: DOMAttribute<State, string>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function form<State, Action>(
    attributes: HTMLFormElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLFormElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('form', attributes, ...children)
  }
}

export interface HTMLFieldSetElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function fieldset<State, Action>(
    attributes: HTMLFieldSetElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLFieldSetElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('fieldset', attributes, ...children)
  }
}

export interface HTMLElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function abbr<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('abbr', attributes, ...children)
  }
}

export module html {
    export function address<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('address', attributes, ...children)
  }
}

export module html {
    export function article<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('article', attributes, ...children)
  }
}

export module html {
    export function aside<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('aside', attributes, ...children)
  }
}

export module html {
    export function b<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('b', attributes, ...children)
  }
}

export module html {
    export function bdi<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('bdi', attributes, ...children)
  }
}

export module html {
    export function bdo<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('bdo', attributes, ...children)
  }
}

export module html {
    export function cite<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('cite', attributes, ...children)
  }
}

export module html {
    export function code<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('code', attributes, ...children)
  }
}

export module html {
    export function dd<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('dd', attributes, ...children)
  }
}

export module html {
    export function dfn<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('dfn', attributes, ...children)
  }
}

export module html {
    export function dt<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('dt', attributes, ...children)
  }
}

export module html {
    export function em<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('em', attributes, ...children)
  }
}

export module html {
    export function figcaption<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('figcaption', attributes, ...children)
  }
}

export module html {
    export function figure<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('figure', attributes, ...children)
  }
}

export module html {
    export function footer<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('footer', attributes, ...children)
  }
}

export module html {
    export function header<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('header', attributes, ...children)
  }
}

export module html {
    export function hgroup<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('hgroup', attributes, ...children)
  }
}

export module html {
    export function i<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('i', attributes, ...children)
  }
}

export module html {
    export function kbd<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('kbd', attributes, ...children)
  }
}

export module html {
    export function main<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('main', attributes, ...children)
  }
}

export module html {
    export function mark<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('mark', attributes, ...children)
  }
}

export module html {
    export function nav<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('nav', attributes, ...children)
  }
}

export module html {
    export function noscript<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('noscript', attributes, ...children)
  }
}

export module html {
    export function rp<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('rp', attributes, ...children)
  }
}

export module html {
    export function rt<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('rt', attributes, ...children)
  }
}

export module html {
    export function ruby<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('ruby', attributes, ...children)
  }
}

export module html {
    export function s<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('s', attributes, ...children)
  }
}

export module html {
    export function samp<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('samp', attributes, ...children)
  }
}

export module html {
    export function section<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('section', attributes, ...children)
  }
}

export module html {
    export function small<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('small', attributes, ...children)
  }
}

export module html {
    export function strong<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('strong', attributes, ...children)
  }
}

export module html {
    export function sub<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('sub', attributes, ...children)
  }
}

export module html {
    export function summary<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('summary', attributes, ...children)
  }
}

export module html {
    export function sup<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('sup', attributes, ...children)
  }
}

export module html {
    export function u<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('u', attributes, ...children)
  }
}

export module html {
    export function varEl<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('var', attributes, ...children)
  }
}

export module html {
    export function wbr<State, Action>(
    attributes: HTMLElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('wbr', attributes, ...children)
  }
}

export interface HTMLHRElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function hr<State, Action>(
    attributes: HTMLHRElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLHRElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('hr', attributes, ...children)
  }
}

export interface HTMLOptGroupElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  disabled?: DOMAttribute<State, boolean>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  label?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function optgroup<State, Action>(
    attributes: HTMLOptGroupElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLOptGroupElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('optgroup', attributes, ...children)
  }
}

export interface SVGSwitchElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function switchEl<State, Action>(
    attributes: SVGSwitchElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGSwitchElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'switch', attributes, ...children)
  }
}

export interface HTMLDataListElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function datalist<State, Action>(
    attributes: HTMLDataListElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLDataListElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('datalist', attributes, ...children)
  }
}

export interface SVGStopElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function stop<State, Action>(
    attributes: SVGStopElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGStopElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'stop', attributes, ...children)
  }
}

export interface HTMLTrackElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  default?: DOMAttribute<State, boolean>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  kind?: DOMAttribute<State, string>
  label?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  src?: DOMAttribute<State, string>
  srclang?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function track<State, Action>(
    attributes: HTMLTrackElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTrackElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('track', attributes, ...children)
  }
}

export interface HTMLOutputElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  defaultValue?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  value?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function output<State, Action>(
    attributes: HTMLOutputElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLOutputElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('output', attributes, ...children)
  }
}

export interface HTMLDataElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  value?: DOMAttribute<State, string>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function data<State, Action>(
    attributes: HTMLDataElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLDataElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('data', attributes, ...children)
  }
}

export interface SVGMaskElementAttributes<State, Action> {
  className?: DOMAttribute<State, string>
  id?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module svg {
    export function mask<State, Action>(
    attributes: SVGMaskElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, SVGMaskElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return elNS<State, Action>('svg', 'mask', attributes, ...children)
  }
}

export interface HTMLDetailsElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  open?: DOMAttribute<State, boolean>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function details<State, Action>(
    attributes: HTMLDetailsElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLDetailsElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('details', attributes, ...children)
  }
}

export interface HTMLDialogElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  open?: DOMAttribute<State, boolean>
  returnValue?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function dialog<State, Action>(
    attributes: HTMLDialogElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLDialogElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('dialog', attributes, ...children)
  }
}

export interface HTMLSlotElementAttributes<State, Action> {
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  name?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function slot<State, Action>(
    attributes: HTMLSlotElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLSlotElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('slot', attributes, ...children)
  }
}

export interface HTMLTableDataCellElementAttributes<State, Action> {
  abbr?: DOMAttribute<State, string>
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  colSpan?: DOMAttribute<State, number>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  headers?: DOMAttribute<State, string>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  rowSpan?: DOMAttribute<State, number>
  scope?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function td<State, Action>(
    attributes: HTMLTableDataCellElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTableDataCellElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('td', attributes, ...children)
  }
}

export interface HTMLTableHeaderCellElementAttributes<State, Action> {
  abbr?: DOMAttribute<State, string>
  accessKey?: DOMAttribute<State, string>
  autocapitalize?: DOMAttribute<State, string>
  className?: DOMAttribute<State, string>
  colSpan?: DOMAttribute<State, number>
  contentEditable?: DOMAttribute<State, string>
  dir?: DOMAttribute<State, string>
  draggable?: DOMAttribute<State, boolean>
  headers?: DOMAttribute<State, string>
  hidden?: DOMAttribute<State, boolean>
  id?: DOMAttribute<State, string>
  inputMode?: DOMAttribute<State, string>
  lang?: DOMAttribute<State, string>
  nonce?: DOMAttribute<State, string>
  rowSpan?: DOMAttribute<State, number>
  scope?: DOMAttribute<State, string>
  scrollLeft?: DOMAttribute<State, number>
  scrollTop?: DOMAttribute<State, number>
  slot?: DOMAttribute<State, string>
  spellcheck?: DOMAttribute<State, boolean>
  style?: DOMAttribute<State, CSSProperties>
  tabIndex?: DOMAttribute<State, number>
  title?: DOMAttribute<State, string>
  translate?: DOMAttribute<State, boolean>
  onabort?: DOMEventHandler<State, Event, Action>
  onanimationcancel?: DOMEventHandler<State, Event, Action>
  onanimationend?: DOMEventHandler<State, Event, Action>
  onanimationiteration?: DOMEventHandler<State, Event, Action>
  onanimationstart?: DOMEventHandler<State, Event, Action>
  onauxclick?: DOMEventHandler<State, Event, Action>
  onblur?: DOMEventHandler<State, Event, Action>
  oncancel?: DOMEventHandler<State, Event, Action>
  oncanplay?: DOMEventHandler<State, Event, Action>
  oncanplaythrough?: DOMEventHandler<State, Event, Action>
  onchange?: DOMEventHandler<State, Event, Action>
  onclick?: DOMEventHandler<State, Event, Action>
  onclose?: DOMEventHandler<State, Event, Action>
  oncontextmenu?: DOMEventHandler<State, Event, Action>
  oncopy?: DOMEventHandler<State, Event, Action>
  oncuechange?: DOMEventHandler<State, Event, Action>
  oncut?: DOMEventHandler<State, Event, Action>
  ondblclick?: DOMEventHandler<State, Event, Action>
  ondrag?: DOMEventHandler<State, Event, Action>
  ondragend?: DOMEventHandler<State, Event, Action>
  ondragenter?: DOMEventHandler<State, Event, Action>
  ondragexit?: DOMEventHandler<State, Event, Action>
  ondragleave?: DOMEventHandler<State, Event, Action>
  ondragover?: DOMEventHandler<State, Event, Action>
  ondragstart?: DOMEventHandler<State, Event, Action>
  ondrop?: DOMEventHandler<State, Event, Action>
  ondurationchange?: DOMEventHandler<State, Event, Action>
  onemptied?: DOMEventHandler<State, Event, Action>
  onended?: DOMEventHandler<State, Event, Action>
  onerror?: DOMEventHandler<State, ErrorEvent, Action>
  onfocus?: DOMEventHandler<State, Event, Action>
  onfullscreenchange?: DOMEventHandler<State, Event, Action>
  onfullscreenerror?: DOMEventHandler<State, Event, Action>
  ongotpointercapture?: DOMEventHandler<State, Event, Action>
  oninput?: DOMEventHandler<State, Event, Action>
  oninvalid?: DOMEventHandler<State, Event, Action>
  onkeydown?: DOMEventHandler<State, Event, Action>
  onkeypress?: DOMEventHandler<State, Event, Action>
  onkeyup?: DOMEventHandler<State, Event, Action>
  onload?: DOMEventHandler<State, Event, Action>
  onloadeddata?: DOMEventHandler<State, Event, Action>
  onloadedmetadata?: DOMEventHandler<State, Event, Action>
  onloadend?: DOMEventHandler<State, Event, Action>
  onloadstart?: DOMEventHandler<State, Event, Action>
  onlostpointercapture?: DOMEventHandler<State, Event, Action>
  onmousedown?: DOMEventHandler<State, Event, Action>
  onmouseenter?: DOMEventHandler<State, Event, Action>
  onmouseleave?: DOMEventHandler<State, Event, Action>
  onmousemove?: DOMEventHandler<State, Event, Action>
  onmouseout?: DOMEventHandler<State, Event, Action>
  onmouseover?: DOMEventHandler<State, Event, Action>
  onmouseup?: DOMEventHandler<State, Event, Action>
  onpaste?: DOMEventHandler<State, Event, Action>
  onpause?: DOMEventHandler<State, Event, Action>
  onplay?: DOMEventHandler<State, Event, Action>
  onplaying?: DOMEventHandler<State, Event, Action>
  onpointercancel?: DOMEventHandler<State, Event, Action>
  onpointerdown?: DOMEventHandler<State, Event, Action>
  onpointerenter?: DOMEventHandler<State, Event, Action>
  onpointerleave?: DOMEventHandler<State, Event, Action>
  onpointermove?: DOMEventHandler<State, Event, Action>
  onpointerout?: DOMEventHandler<State, Event, Action>
  onpointerover?: DOMEventHandler<State, Event, Action>
  onpointerup?: DOMEventHandler<State, Event, Action>
  onprogress?: DOMEventHandler<State, Event, Action>
  onratechange?: DOMEventHandler<State, Event, Action>
  onreset?: DOMEventHandler<State, Event, Action>
  onresize?: DOMEventHandler<State, Event, Action>
  onscroll?: DOMEventHandler<State, Event, Action>
  onsecuritypolicyviolation?: DOMEventHandler<State, Event, Action>
  onseeked?: DOMEventHandler<State, Event, Action>
  onseeking?: DOMEventHandler<State, Event, Action>
  onselect?: DOMEventHandler<State, Event, Action>
  onselectionchange?: DOMEventHandler<State, Event, Action>
  onselectstart?: DOMEventHandler<State, Event, Action>
  onstalled?: DOMEventHandler<State, Event, Action>
  onsubmit?: DOMEventHandler<State, Event, Action>
  onsuspend?: DOMEventHandler<State, Event, Action>
  ontimeupdate?: DOMEventHandler<State, Event, Action>
  ontoggle?: DOMEventHandler<State, Event, Action>
  ontouchcancel?: DOMEventHandler<State, Event, Action>
  ontouchend?: DOMEventHandler<State, Event, Action>
  ontouchmove?: DOMEventHandler<State, Event, Action>
  ontouchstart?: DOMEventHandler<State, Event, Action>
  ontransitioncancel?: DOMEventHandler<State, Event, Action>
  ontransitionend?: DOMEventHandler<State, Event, Action>
  ontransitionrun?: DOMEventHandler<State, Event, Action>
  ontransitionstart?: DOMEventHandler<State, Event, Action>
  onvolumechange?: DOMEventHandler<State, Event, Action>
  onwaiting?: DOMEventHandler<State, Event, Action>
  onwheel?: DOMEventHandler<State, Event, Action>
}

export module html {
    export function th<State, Action>(
    attributes: HTMLTableHeaderCellElementAttributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLTableHeaderCellElement>,
    ...children: DOMChild<State, Action>[]
  ): DOMElement<State, Action> {
    return el<State, Action>('th', attributes, ...children)
  }
}