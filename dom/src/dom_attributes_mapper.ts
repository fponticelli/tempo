/*
Copyright 2018 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* istanbul ignore file */
import {
  setBoolAttribute,
  setCommaSeparated,
  setEnumBoolAttribute,
  setSpaceSeparated,
  setStyleAttribute,
  setBoolProperty,
  setProperty
} from './utils/set_attribute'

export const htmlAttributeNameMap: Record<string, string> = {
  acceptcharset: 'accept-charset',
  asattr: 'as',
  classname: 'class',
  httpequiv: 'http-equiv',
  htmlfor: 'for'
}

export const htmlAttributeMap: Record<string, (el: Element, name: string, value: any) => void> = {
  'accept-charset': setSpaceSeparated,
  class: setSpaceSeparated,
  acceptcharset: setSpaceSeparated,
  async: setBoolAttribute,
  autofocus: setBoolAttribute,
  autoplay: setBoolAttribute,
  checked: setBoolProperty,
  contenteditable: setEnumBoolAttribute,
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
