/* istanbul ignore next */
import {
  setBoolAttribute,
  setCommaSeparated,
  setSpaceSeparated,
  setNumberAttribute,
  setEnumBoolAttribute
} from './set_attribute'

/* istanbul ignore next */
export const attributeNameMap: Record<string, string> = {
  acceptCharset: 'accept-charset',
  as_: 'as',
  httpEquiv: 'http-equiv'
}

/* istanbul ignore next */
export const attributeMap: Record<string, (el: Element, name: string, value: any) => void> = {
  async: setBoolAttribute,
  autoplay: setBoolAttribute,
  contentEditable: setEnumBoolAttribute,
  controls: setBoolAttribute,
  default: setBoolAttribute,
  defer: setBoolAttribute,
  draggable: setEnumBoolAttribute,
  formnovalidate: setBoolAttribute,
  headers: setSpaceSeparated,
  hidden: setBoolAttribute,
  high: setNumberAttribute,
  ismap: setBoolAttribute,
  itemscope: setBoolAttribute,
  loop: setBoolAttribute,
  low: setNumberAttribute,
  max: setNumberAttribute,
  min: setNumberAttribute,
  multiple: setBoolAttribute,
  muted: setBoolAttribute,
  nomodule: setBoolAttribute,
  novalidate: setBoolAttribute,
  open: setBoolAttribute,
  optimum: setNumberAttribute,
  ping: setSpaceSeparated,
  playsinline: setBoolAttribute,
  readonly: setBoolAttribute,
  rel: setSpaceSeparated,
  required: setBoolAttribute,
  reversed: setBoolAttribute,
  scrollamount: setNumberAttribute,
  scrolldelay: setNumberAttribute,
  selected: setBoolAttribute,
  srcset: setCommaSeparated,
  truespeed: setNumberAttribute,
  typemustmatch: setBoolAttribute
}
