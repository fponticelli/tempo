import { BaseBuilder } from './base_builder'
import { DerivedOrLiteralValue, DerivedValue } from 'tempo-core/lib/value'
import { EventHandler, mapAttribute, EventHandlerTE } from '../value'
import { DOMElement2 } from '../element'
import { makeCreateElement } from '../impl/apply_element'
import { makeEmptyLifecycle } from '../lifecycle'
import { keys } from 'tempo-std/lib/objects'
import { DOMContext } from '../context'
import { IBuilder } from './ibuilder'

function extractLiterals<State>(
  record: Record<string, DerivedOrLiteralValue<State, string | undefined>>
) {
  return keys(record).reduce((list, name) => {
    if (typeof record[name] === 'string') {
      list.push({ name, value: record[name] as string })
    }
    return list
  }, [] as { name: string; value: string }[])
}

function extractDerived<State>(
  record: Record<string, DerivedOrLiteralValue<State, string | undefined>>
) {
  return keys(record).reduce((list, name) => {
    if (typeof record[name] === 'function') {
      list.push({
        name,
        resolve: record[name] as DerivedValue<State, string | undefined>
      })
    }
    return list
  }, [] as { name: string; resolve: DerivedValue<State, string | undefined> }[])
}

function classToString(src: string | string[] | Record<string, boolean>) {
  if (typeof src === 'string') {
    return src
  } else if (Array.isArray(src)) {
    return src.join(' ')
  } else {
    return keys(src)
      .reduce((list, key) => {
        if (src[key]) list.push(key)
        return list
      }, [] as string[])
      .join(' ')
  }
}

function stylesToString(src: string | Record<string, string | undefined>) {
  if (typeof src === 'string') {
    return src
  } else {
    return keys(src)
      .reduce((list, key) => {
        if (src[key]) list.push(`${key}: ${src[key]};`)
        return list
      }, [] as string[])
      .join(' ')
  }
}

function booleanToString(src: boolean) {
  return `${src}`
}

function toggleToString(name: string) {
  return (src: boolean) => name
}

export class ElementBuilder<State, Action, Query, El extends HTMLElement>
  extends BaseBuilder<State, Action, Query>
  implements IBuilder<State, Action, Query> {
  private _attributes: Record<
    string,
    DerivedOrLiteralValue<State, string | undefined>
  > = {}
  private _styles: Record<
    string,
    DerivedOrLiteralValue<State, string | undefined>
  > = {}
  private _handlers: Record<string, EventHandler<State, Action>> = {}

  constructor(public tagName: string = 'div') {
    super()
  }

  build(): DOMElement2<State, Action, Query> {
    return new DOMElement2<State, Action, Query>(
      makeCreateElement(this.tagName),
      extractLiterals(this._attributes),
      extractDerived(this._attributes),
      extractLiterals(this._styles),
      extractDerived(this._styles),
      keys(this._handlers).map(name => ({
        name,
        callback: this._handlers[name]
      })),
      makeEmptyLifecycle,
      (query: Query, el: HTMLElement, ctx: DOMContext<Action>) => {},
      this._children
    )
  }

  // attributes, styles and handlers
  attr(
    name: string,
    value: DerivedOrLiteralValue<State, string | undefined>
  ): this {
    this._attributes[name] = value
    return this
  }
  style(
    name: string,
    value: DerivedOrLiteralValue<State, string | undefined>
  ): this {
    this._styles[name] = value
    return this
  }
  handle(name: string, callback: EventHandler<State, Action>) {
    this._handlers[name] = callback
    return this
  }

  // attribute shortcuts
  accessKey(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('accesskey', value)
  }
  aria(name: string, value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr(`aria-${name}`, value)
  }
  class(
    value: DerivedOrLiteralValue<
      State,
      string | string[] | Record<string, boolean> | undefined
    >
  ) {
    return this.attr('class', mapAttribute(value, classToString))
  }
  contentEditable(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('contenteditable', mapAttribute(value, booleanToString))
  }
  data(name: string, value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr(`data-${name}`, value)
  }
  dir(value: DerivedOrLiteralValue<State, 'ltr' | 'rtl' | 'auto' | undefined>) {
    return this.attr('role', value)
  }
  draggable(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('draggable', mapAttribute(value, booleanToString))
  }
  hidden(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('hidden', mapAttribute(value, toggleToString('hidden')))
  }
  id(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('id', value)
  }
  inputMode(
    value: DerivedOrLiteralValue<
      State,
      | 'none'
      | 'text'
      | 'decimal'
      | 'numeric'
      | 'tel'
      | 'search'
      | 'email'
      | 'url'
      | undefined
    >
  ) {
    return this.attr('inputmode', value)
  }
  is(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('is', value)
  }
  itemId(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('itemid', value)
  }
  itemProp(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('itemprop', value)
  }
  itemRef(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('itemref', value)
  }
  itemScope(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('itemscope', value)
  }
  itemType(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('itemtype', value)
  }
  lang(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('lang', value)
  }
  part(
    value: DerivedOrLiteralValue<
      State,
      string | string[] | Record<string, boolean> | undefined
    >
  ) {
    return this.attr('part', mapAttribute(value, classToString))
  }
  role(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('role', value)
  }
  slot(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('slot', value)
  }
  spellCheck(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('spellcheck', mapAttribute(value, booleanToString))
  }
  styles(
    value:
      | DerivedOrLiteralValue<State, string | Record<string, string>>
      | undefined
  ) {
    return this.attr('style', mapAttribute(value, stylesToString))
  }
  tabIndex(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('tabindex', mapAttribute(value, String))
  }
  title(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('title', value)
  }

  // event shortcuts
  onAbort(handler: EventHandlerTE<State, Action, UIEvent, El>) {
    return this.handle('abort', handler as EventHandler<State, Action>)
  }
  onAutoComplete(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('autocomplete', handler as EventHandler<State, Action>)
  }
  onAutoCompleteError(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle(
      'autocompleteerror',
      handler as EventHandler<State, Action>
    )
  }
  onBlur(handler: EventHandlerTE<State, Action, FocusEvent, El>) {
    return this.handle('blur', handler as EventHandler<State, Action>)
  }
  onCancel(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('cancel', handler as EventHandler<State, Action>)
  }
  onChange(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('change', handler as EventHandler<State, Action>)
  }
  onClick(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('click', handler as EventHandler<State, Action>)
  }
  onCompositionEnd(
    handler: EventHandlerTE<State, Action, CompositionEvent, El>
  ) {
    return this.handle('compositionend', handler as EventHandler<State, Action>)
  }
  onCompositionStart(
    handler: EventHandlerTE<State, Action, CompositionEvent, El>
  ) {
    return this.handle(
      'compositionstart',
      handler as EventHandler<State, Action>
    )
  }
  onCompositionUpdate(
    handler: EventHandlerTE<State, Action, CompositionEvent, El>
  ) {
    return this.handle(
      'compositionupdate',
      handler as EventHandler<State, Action>
    )
  }
  onContextMenu(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('contextmenu', handler as EventHandler<State, Action>)
  }
  onDblClick(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('dblclick', handler as EventHandler<State, Action>)
  }
  onDrag(handler: EventHandlerTE<State, Action, DragEvent, El>) {
    return this.handle('drag', handler as EventHandler<State, Action>)
  }
  onDragEnd(handler: EventHandlerTE<State, Action, DragEvent, El>) {
    return this.handle('dragend', handler as EventHandler<State, Action>)
  }
  onDragEnter(handler: EventHandlerTE<State, Action, DragEvent, El>) {
    return this.handle('dragenter', handler as EventHandler<State, Action>)
  }
  onDragExit(handler: EventHandlerTE<State, Action, DragEvent, El>) {
    return this.handle('dragexit', handler as EventHandler<State, Action>)
  }
  onDragLeave(handler: EventHandlerTE<State, Action, DragEvent, El>) {
    return this.handle('dragleave', handler as EventHandler<State, Action>)
  }
  onDragOver(handler: EventHandlerTE<State, Action, DragEvent, El>) {
    return this.handle('dragover', handler as EventHandler<State, Action>)
  }
  onDragStart(handler: EventHandlerTE<State, Action, DragEvent, El>) {
    return this.handle('dragstart', handler as EventHandler<State, Action>)
  }
  onDrop(handler: EventHandlerTE<State, Action, DragEvent, El>) {
    return this.handle('drop', handler as EventHandler<State, Action>)
  }
  onError(handler: EventHandlerTE<State, Action, UIEvent, El>) {
    return this.handle('error', handler as EventHandler<State, Action>)
  }
  onFocus(handler: EventHandlerTE<State, Action, FocusEvent, El>) {
    return this.handle('focus', handler as EventHandler<State, Action>)
  }
  onFocusIn(handler: EventHandlerTE<State, Action, FocusEvent, El>) {
    return this.handle('focusin', handler as EventHandler<State, Action>)
  }
  onFocusOut(handler: EventHandlerTE<State, Action, FocusEvent, El>) {
    return this.handle('focusout', handler as EventHandler<State, Action>)
  }
  onInput(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('input', handler as EventHandler<State, Action>)
  }
  onInvalid(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('invalid', handler as EventHandler<State, Action>)
  }
  onKeyDown(handler: EventHandlerTE<State, Action, KeyboardEvent, El>) {
    return this.handle('keydown', handler as EventHandler<State, Action>)
  }
  onKeyUp(handler: EventHandlerTE<State, Action, KeyboardEvent, El>) {
    return this.handle('keyup', handler as EventHandler<State, Action>)
  }
  onLoad(handler: EventHandlerTE<State, Action, UIEvent, El>) {
    return this.handle('load', handler as EventHandler<State, Action>)
  }
  onMouseDown(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('mousedown', handler as EventHandler<State, Action>)
  }
  onMouseEnter(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('mouseenter', handler as EventHandler<State, Action>)
  }
  onMouseLeave(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('mouseleave', handler as EventHandler<State, Action>)
  }
  onMouseMove(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('mousemove', handler as EventHandler<State, Action>)
  }
  onMouseOut(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('mouseout', handler as EventHandler<State, Action>)
  }
  onMouseOver(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('mouseover', handler as EventHandler<State, Action>)
  }
  onMouseUp(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('mouseup', handler as EventHandler<State, Action>)
  }
  onReset(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('reset', handler as EventHandler<State, Action>)
  }
  onScroll(handler: EventHandlerTE<State, Action, UIEvent, El>) {
    return this.handle('scroll', handler as EventHandler<State, Action>)
  }
  onSelect(handler: EventHandlerTE<State, Action, UIEvent, El>) {
    return this.handle('select', handler as EventHandler<State, Action>)
  }
  onShow(handler: EventHandlerTE<State, Action, MouseEvent, El>) {
    return this.handle('show', handler as EventHandler<State, Action>)
  }
  onSubmit(handler: EventHandlerTE<State, Action, Event, El>) {
    return this.handle('submit', handler as EventHandler<State, Action>)
  }
  onTouchCancel(handler: EventHandlerTE<State, Action, TouchEvent, El>) {
    return this.handle('touchcancel', handler as EventHandler<State, Action>)
  }
  onTouchEnd(handler: EventHandlerTE<State, Action, TouchEvent, El>) {
    return this.handle('touchend', handler as EventHandler<State, Action>)
  }
  onTouchMove(handler: EventHandlerTE<State, Action, TouchEvent, El>) {
    return this.handle('touchmove', handler as EventHandler<State, Action>)
  }
  onTouchStart(handler: EventHandlerTE<State, Action, TouchEvent, El>) {
    return this.handle('touchstart', handler as EventHandler<State, Action>)
  }
  onWheel(handler: EventHandlerTE<State, Action, WheelEvent, El>) {
    return this.handle('wheel', handler as EventHandler<State, Action>)
  }
}
