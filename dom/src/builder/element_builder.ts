import { BaseBuilder } from './base_builder'
import { DerivedOrLiteralValue, DerivedValue } from 'tempo-core/lib/value'
import { EventHandler, mapAttribute, EventHandlerTE } from '../value'
import { DOMElement2 } from '../impl/element'
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

export type AriaRole =
  | 'alert'
  | 'alertdialog'
  | 'application'
  | 'article'
  | 'banner'
  | 'button'
  | 'checkbox'
  | 'cell'
  | 'columnheader'
  | 'combobox'
  | 'complementary'
  | 'contentinfo'
  | 'definition'
  | 'dialog'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'form'
  | 'grid'
  | 'gridcell'
  | 'group'
  | 'heading'
  | 'img'
  | 'link'
  | 'list'
  | 'listbox'
  | 'listitem'
  | 'log'
  | 'main'
  | 'marquee'
  | 'math'
  | 'menu'
  | 'menubar'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'navigation'
  | 'none'
  | 'note'
  | 'option'
  | 'presentation'
  | 'progressbar'
  | 'radio'
  | 'radiogroup'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'scrollbar'
  | 'search'
  | 'searchbox'
  | 'separator'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'table'
  | 'tablist'
  | 'tabpanel'
  | 'term'
  | 'textbox'
  | 'timer'
  | 'toolbar'
  | 'tooltip'
  | 'tree'
  | 'treegrid'
  | 'treeitem'

export function spaceSeparatedToString(
  src: string | string[] | Record<string, boolean>
) {
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
    return this.attr('class', mapAttribute(value, spaceSeparatedToString))
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
    return this.attr('part', mapAttribute(value, spaceSeparatedToString))
  }
  role(value: DerivedOrLiteralValue<State, AriaRole | undefined>) {
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

  // aria
  ariaActiveDescendant(
    value: DerivedOrLiteralValue<State, string | undefined>
  ) {
    return this.attr('aria-activedescendant', value)
  }
  ariaAtomic(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('aria-atomic', mapAttribute(value, booleanToString))
  }
  ariaAutocomplete(
    value: DerivedOrLiteralValue<
      State,
      'inline' | 'list' | 'both' | 'none' | undefined
    >
  ) {
    return this.attr('aria-autocomplete', value)
  }
  ariaBusy(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('aria-busy', mapAttribute(value, booleanToString))
  }
  ariaChecked(
    value: DerivedOrLiteralValue<
      State,
      'true' | 'false' | 'mixed' | true | false | undefined
    >
  ) {
    return this.attr(
      'aria-checked',
      mapAttribute(value, v =>
        v === true ? 'true' : v === false ? 'false' : v
      )
    )
  }
  ariaColCount(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-colcount', mapAttribute(value, String))
  }
  ariaColIndex(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-colindex', mapAttribute(value, String))
  }
  ariaColSpan(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-colspan', mapAttribute(value, String))
  }
  ariaControls(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-controls', value)
  }
  ariaCurrent(
    value: DerivedOrLiteralValue<
      State,
      | 'page'
      | 'step'
      | 'location'
      | 'date'
      | 'time'
      | 'true'
      | 'false'
      | true
      | false
      | undefined
    >
  ) {
    return this.attr(
      'aria-current',
      mapAttribute(value, v =>
        v === true ? 'true' : v === false ? 'false' : v
      )
    )
  }
  ariaDescribedBy(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-describedby', value)
  }
  ariaDetails(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-details', value)
  }
  ariaDisabled(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('aria-disabled', mapAttribute(value, booleanToString))
  }
  ariaDropEffect(
    value: DerivedOrLiteralValue<
      State,
      'copy' | 'execute' | 'link' | 'move' | 'none' | 'popup' | undefined
    >
  ) {
    return this.attr('aria-dropeffect', value)
  }
  ariaErrorMessage(
    value: DerivedOrLiteralValue<
      State,
      'grammar' | 'false' | false | 'spelling' | 'true' | true | undefined
    >
  ) {
    return this.attr(
      'aria-errormessage',
      mapAttribute(value, v =>
        v === true ? 'true' : v === false ? 'false' : v
      )
    )
  }
  ariaExpanded(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('aria-expanded', mapAttribute(value, booleanToString))
  }
  ariaFlowTo(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-flowto', value)
  }
  ariaGrabbed(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('aria-grabbed', mapAttribute(value, booleanToString))
  }
  ariaHasPopup(
    value: DerivedOrLiteralValue<
      State,
      | 'true'
      | 'false'
      | 'menu'
      | 'listbox'
      | 'tree'
      | 'grid'
      | 'dialog'
      | true
      | false
      | undefined
    >
  ) {
    return this.attr(
      'aria-haspopup',
      mapAttribute(value, v =>
        v === true ? 'true' : v === false ? 'false' : v
      )
    )
  }
  ariaHidden(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-hidden', value)
  }
  ariaInvalid(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-invalid', value)
  }
  ariaKeyShortcuts(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-keyshortcuts', value)
  }
  ariaLabel(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-label', value)
  }
  ariaLabelledBy(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-labelledby', value)
  }
  ariaLevel(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-level', mapAttribute(value, String))
  }
  ariaLive(
    value: DerivedOrLiteralValue<
      State,
      'assertive' | 'off' | 'polite' | undefined
    >
  ) {
    return this.attr('aria-live', value)
  }
  ariaModal(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('aria-modal', mapAttribute(value, booleanToString))
  }
  ariaMultiLine(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('aria-multiline', mapAttribute(value, booleanToString))
  }
  ariaMultiSelectable(
    value: DerivedOrLiteralValue<State, boolean | undefined>
  ) {
    return this.attr(
      'aria-multiselectable',
      mapAttribute(value, booleanToString)
    )
  }
  ariaOrientation(
    value: DerivedOrLiteralValue<State, 'horizontal' | 'vertical' | undefined>
  ) {
    return this.attr('aria-orientation', value)
  }
  ariaOwns(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-owns', value)
  }
  ariaPlaceHolder(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-placeholder', value)
  }
  ariaPointSet(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-pointset', mapAttribute(value, String))
  }
  ariaPosInSet(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-posinset', value)
  }
  ariaPressed(
    value: DerivedOrLiteralValue<
      State,
      'true' | 'false' | 'mixed' | true | false | undefined
    >
  ) {
    return this.attr(
      'aria-pressed',
      mapAttribute(value, v =>
        v === true ? 'true' : v === false ? 'false' : v
      )
    )
  }
  ariaReadonly(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('aria-readonly', mapAttribute(value, booleanToString))
  }
  ariaRequired(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('aria-required', mapAttribute(value, booleanToString))
  }
  ariaRelevant(
    value: DerivedOrLiteralValue<
      State,
      'addition' | 'additions text' | 'all' | 'removals' | 'text' | undefined
    >
  ) {
    return this.attr('aria-relevant', value)
  }
  ariaRoleDescription(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-roledescription', value)
  }
  ariaRowCount(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-rowcount', mapAttribute(value, String))
  }
  ariaRowIndex(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-rowindex', mapAttribute(value, String))
  }
  ariaRowSpan(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-rowspan', mapAttribute(value, String))
  }
  ariaSelected(value: DerivedOrLiteralValue<State, boolean | undefined>) {
    return this.attr('aria-selected', mapAttribute(value, booleanToString))
  }
  ariaSetSize(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-setsize', mapAttribute(value, String))
  }
  ariaSort(
    value: DerivedOrLiteralValue<
      State,
      'ascending' | 'descending' | 'none' | 'other' | undefined
    >
  ) {
    return this.attr('aria-sort', value)
  }
  ariaValueMax(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-valuemax', mapAttribute(value, String))
  }
  ariaValueMin(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-valuemin', mapAttribute(value, String))
  }
  ariaValueNow(value: DerivedOrLiteralValue<State, number | undefined>) {
    return this.attr('aria-valuenow', mapAttribute(value, String))
  }
  ariaValueText(value: DerivedOrLiteralValue<State, string | undefined>) {
    return this.attr('aria-valuetext', value)
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
