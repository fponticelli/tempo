/*
Copyright 2019 Google LLC
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

import {
  setBoolProperty,
  setNumberProperty,
  setProperty
} from './set_attribute'

export const attributeNameMap: Record<string, string> = {
  acceptcharset: 'accept-charset',
  acceptCharset: 'accept-charset',
  asattr: 'as',
  asAttr: 'as',
  classname: 'class',
  className: 'class',
  httpequiv: 'http-equiv',
  httpEquiv: 'http-equiv',
  htmlfor: 'for',
  htmlFor: 'for'
}

export const htmlAttributeMap: Record<
  string,
  (el: Element, name: string, value: any) => void
> = {
  // html
  checked: setBoolProperty,
  multiple: setBoolProperty,
  muted: setBoolProperty,
  selected: setBoolProperty,
  value: setProperty,

  // svg
  useCurrentView: setBoolProperty,
  currentView: setProperty,
  currentScale: setNumberProperty

  // 'accept-charset': setSpaceSeparated,
  // acceptcharset: setSpaceSeparated,
  // async: setBoolAttribute,
  // autofocus: setBoolAttribute,
  // autoplay: setBoolAttribute,
  // class: setSpaceSeparated,
  // contenteditable: setEnumBoolAttribute,
  // controls: setBoolAttribute,
  // default: setBoolAttribute,
  // defer: setBoolAttribute,
  // disabled: setBoolAttribute,
  // draggable: setEnumBoolAttribute,
  // formnovalidate: setBoolAttribute,
  // headers: setSpaceSeparated,
  // hidden: setBoolAttribute,
  // ismap: setBoolAttribute,
  // itemscope: setBoolAttribute,
  // loop: setBoolAttribute,
  // nomodule: setBoolAttribute,
  // novalidate: setBoolAttribute,
  // open: setBoolAttribute,
  // ping: setSpaceSeparated,
  // playsinline: setBoolAttribute,
  // readonly: setBoolAttribute,
  // rel: setSpaceSeparated,
  // required: setBoolAttribute,
  // reversed: setBoolAttribute,
  // sizes: setCommaSeparated,
  // srcset: setCommaSeparated,
  // style: setStyleAttribute,
  // typemustmatch: setBoolAttribute,
}
