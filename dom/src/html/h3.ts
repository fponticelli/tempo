/* istanbul ignore file */
import { DOMChild } from '../template'
import { DOMAttribute, DOMEventHandler } from '../value'
import { DOMElement } from '../element'
import { HTMLCSSAttributes as CSSAttributes, HTMLCSSProperties as CSSProperties } from './common/html_css_properties'
import { HTMLMoodAttributes as MoodAttributes } from './common/html_mood_attributes'
import { el } from '../element'

export interface H3Attributes<State, Action> {
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
  onAbort?: DOMEventHandler<State, UIEvent | Event, Action>
  onAfterPrint?: DOMEventHandler<State, Event, Action>
  onAnimationEnd?: DOMEventHandler<State, AnimationEvent, Action>
  onAnimationIteration?: DOMEventHandler<State, AnimationEvent, Action>
  onAnimationStart?: DOMEventHandler<State, AnimationEvent, Action>
  onAutocomplete?: DOMEventHandler<State, Event, Action>
  onAutocompleteerror?: DOMEventHandler<State, Event, Action>
  onBeforePrint?: DOMEventHandler<State, Event, Action>
  onBeforeUnload?: DOMEventHandler<State, Event, Action>
  onBlur?: DOMEventHandler<State, FocusEvent, Action>
  onCompositionEnd?: DOMEventHandler<State, CompositionEvent, Action>
  onCompositionStart?: DOMEventHandler<State, CompositionEvent, Action>
  onCompositionUpdate?: DOMEventHandler<State, CompositionEvent, Action>
  onCancel?: DOMEventHandler<State, Event, Action>
  onCanPlay?: DOMEventHandler<State, Event, Action>
  onCanPlayThrough?: DOMEventHandler<State, Event, Action>
  onChange?: DOMEventHandler<State, Event, Action>
  onClick?: DOMEventHandler<State, MouseEvent, Action>
  onClose?: DOMEventHandler<State, Event, Action>
  onCopy?: DOMEventHandler<State, ClipboardEvent, Action>
  onContextMenu?: DOMEventHandler<State, Event, Action>
  onCueChange?: DOMEventHandler<State, Event, Action>
  onCut?: DOMEventHandler<State, ClipboardEvent, Action>
  onDblClick?: DOMEventHandler<State, MouseEvent, Action>
  onDrag?: DOMEventHandler<State, DragEvent, Action>
  onDragEnd?: DOMEventHandler<State, DragEvent, Action>
  onDragEnter?: DOMEventHandler<State, DragEvent, Action>
  onDragExit?: DOMEventHandler<State, DragEvent, Action>
  onDragLeave?: DOMEventHandler<State, DragEvent, Action>
  onDragOver?: DOMEventHandler<State, DragEvent, Action>
  onDragStart?: DOMEventHandler<State, DragEvent, Action>
  onDrop?: DOMEventHandler<State, DragEvent, Action>
  onDurationChange?: DOMEventHandler<State, Event, Action>
  onEmptied?: DOMEventHandler<State, Event, Action>
  onEnded?: DOMEventHandler<State, Event, Action>
  onError?: DOMEventHandler<State, UIEvent | Event, Action>
  onFocus?: DOMEventHandler<State, FocusEvent, Action>
  onFocusIn?: DOMEventHandler<State, FocusEvent, Action>
  onFocusOut?: DOMEventHandler<State, FocusEvent, Action>
  onHashChange?: DOMEventHandler<State, Event, Action>
  onInput?: DOMEventHandler<State, Event, Action>
  onInvalid?: DOMEventHandler<State, Event, Action>
  onKeyDown?: DOMEventHandler<State, KeyboardEvent, Action>
  onKeyPress?: DOMEventHandler<State, KeyboardEvent, Action>
  onKeyUp?: DOMEventHandler<State, KeyboardEvent, Action>
  onLoad?: DOMEventHandler<State, UIEvent, Action>
  onLoadeddata?: DOMEventHandler<State, Event, Action>
  onLoadedMetadata?: DOMEventHandler<State, Event, Action>
  onLoadStart?: DOMEventHandler<State, Event, Action>
  onMessage?: DOMEventHandler<State, Event, Action>
  onMouseDown?: DOMEventHandler<State, MouseEvent, Action>
  onMouseEnter?: DOMEventHandler<State, MouseEvent, Action>
  onMouseLeave?: DOMEventHandler<State, MouseEvent, Action>
  onMouseMove?: DOMEventHandler<State, MouseEvent, Action>
  onMouseOut?: DOMEventHandler<State, MouseEvent, Action>
  onMouseOver?: DOMEventHandler<State, MouseEvent, Action>
  onMouseUp?: DOMEventHandler<State, MouseEvent, Action>
  onMouseWheel?: DOMEventHandler<State, MouseEvent, Action>
  onOffline?: DOMEventHandler<State, Event, Action>
  onOnline?: DOMEventHandler<State, Event, Action>
  onPaste?: DOMEventHandler<State, ClipboardEvent, Action>
  onPause?: DOMEventHandler<State, Event, Action>
  onPlay?: DOMEventHandler<State, Event, Action>
  onPlaying?: DOMEventHandler<State, Event, Action>
  onPopstate?: DOMEventHandler<State, Event, Action>
  onProgress?: DOMEventHandler<State, Event, Action>
  onRateChange?: DOMEventHandler<State, Event, Action>
  onRedo?: DOMEventHandler<State, Event, Action>
  onReset?: DOMEventHandler<State, Event, Action>
  onResize?: DOMEventHandler<State, UIEvent, Action>
  onScroll?: DOMEventHandler<State, UIEvent, Action>
  onSeeked?: DOMEventHandler<State, Event, Action>
  onSeeking?: DOMEventHandler<State, Event, Action>
  onSelect?: DOMEventHandler<State, UIEvent | Event, Action>
  onShow?: DOMEventHandler<State, Event, Action>
  onSort?: DOMEventHandler<State, Event, Action>
  onStalled?: DOMEventHandler<State, Event, Action>
  onStorage?: DOMEventHandler<State, Event, Action>
  onSubmit?: DOMEventHandler<State, Event, Action>
  onSuspend?: DOMEventHandler<State, Event, Action>
  onTimeUpdate?: DOMEventHandler<State, Event, Action>
  onToggle?: DOMEventHandler<State, Event, Action>
  onTouchCancel?: DOMEventHandler<State, TouchEvent, Action>
  onTouchEnd?: DOMEventHandler<State, TouchEvent, Action>
  onTouchMove?: DOMEventHandler<State, TouchEvent, Action>
  onTouchStart?: DOMEventHandler<State, TouchEvent, Action>
  onTransitionEnd?: DOMEventHandler<State, AnimationEvent, Action>
  onUndo?: DOMEventHandler<State, Event, Action>
  onUnload?: DOMEventHandler<State, UIEvent | Event, Action>
  onVolumeChange?: DOMEventHandler<State, Event, Action>
  onWaiting?: DOMEventHandler<State, Event, Action>
  onWheel?: DOMEventHandler<State, WheelEvent, Action>
}

export function h3<State, Action>(
  attributes: H3Attributes<State, Action> & CSSAttributes<State> & MoodAttributes<State, HTMLHeadingElement>,
  ...children: DOMChild<State, Action>[]
): DOMElement<State, Action> {
  return el<State, Action>('h3', attributes, ...children)
}
