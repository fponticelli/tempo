/* istanbul ignore file */
import {
  setBoolAttribute,
  setCommaSeparated,
  setEnumBoolAttribute,
  setSpaceSeparated,
  setStyleAttribute,
  setBoolProperty,
  setProperty
} from './set_attribute'

export const attributeNameMap: Record<string, string> = {
  acceptCharset: 'accept-charset',
  asAttr: 'as',
  className: 'class',
  contentEditable: 'contenteditable',
  httpEquiv: 'http-equiv'
}

export const attributeMap: Record<string, (el: Element, name: string, value: any) => void> = {
  acceptCharset: setSpaceSeparated,
  async: setBoolAttribute,
  autofocus: setBoolAttribute,
  autoplay: setBoolAttribute,
  checked: setBoolProperty,
  contentEditable: setEnumBoolAttribute,
  controls: setBoolAttribute,
  default: setBoolAttribute,
  defer: setBoolAttribute,
  disabled: setBoolAttribute,
  draggable: setEnumBoolAttribute,
  formnovalidate: setBoolAttribute,
  headers: setSpaceSeparated,
  hidden: setBoolAttribute,
  ismap: setBoolAttribute,
  itemscope: setBoolAttribute,
  loop: setBoolAttribute,
  multiple: setBoolProperty,
  muted: setBoolProperty,
  nomodule: setBoolAttribute,
  novalidate: setBoolAttribute,
  open: setBoolAttribute,
  ping: setSpaceSeparated,
  playsinline: setBoolAttribute,
  readonly: setBoolAttribute,
  rel: setSpaceSeparated,
  required: setBoolAttribute,
  reversed: setBoolAttribute,
  selected: setBoolProperty,
  sizes: setCommaSeparated,
  srcset: setCommaSeparated,
  style: setStyleAttribute,
  typemustmatch: setBoolAttribute,
  value: setProperty
}
