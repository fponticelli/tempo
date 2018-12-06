/* istanbul ignore next */
import { setBoolAttribute, setCommaSeparated, setEnumBoolAttribute } from './set_attribute'

/* istanbul ignore next */
export const attributeNameMap: Record<string, string> = {}

/* istanbul ignore next */
export const attributeMap: Record<string, (el: Element, name: string, value: any) => void> = {
  autofocus: setBoolAttribute,
  autoplay: setBoolAttribute,
  contenteditable: setEnumBoolAttribute,
  controls: setBoolAttribute,
  disabled: setBoolAttribute,
  draggable: setEnumBoolAttribute,
  formnovalidate: setBoolAttribute,
  hidden: setBoolAttribute,
  itemscope: setBoolAttribute,
  loop: setBoolAttribute,
  muted: setBoolAttribute,
  ping: setCommaSeparated,
  rel: setCommaSeparated,
  spellcheck: setEnumBoolAttribute
}
