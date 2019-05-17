"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore file */
var set_attribute_1 = require("./set_attribute");
exports.attributeNameMap = {
    acceptCharset: 'accept-charset',
    asAttr: 'as',
    className: 'class',
    contentEditable: 'contenteditable',
    httpEquiv: 'http-equiv'
};
exports.attributeMap = {
    acceptCharset: set_attribute_1.setSpaceSeparated,
    async: set_attribute_1.setBoolAttribute,
    autofocus: set_attribute_1.setBoolAttribute,
    autoplay: set_attribute_1.setBoolAttribute,
    checked: set_attribute_1.setBoolProperty,
    contentEditable: set_attribute_1.setEnumBoolAttribute,
    controls: set_attribute_1.setBoolAttribute,
    default: set_attribute_1.setBoolAttribute,
    defer: set_attribute_1.setBoolAttribute,
    disabled: set_attribute_1.setBoolAttribute,
    draggable: set_attribute_1.setEnumBoolAttribute,
    formnovalidate: set_attribute_1.setBoolAttribute,
    headers: set_attribute_1.setSpaceSeparated,
    hidden: set_attribute_1.setBoolAttribute,
    ismap: set_attribute_1.setBoolAttribute,
    itemscope: set_attribute_1.setBoolAttribute,
    loop: set_attribute_1.setBoolAttribute,
    multiple: set_attribute_1.setBoolProperty,
    muted: set_attribute_1.setBoolProperty,
    nomodule: set_attribute_1.setBoolAttribute,
    novalidate: set_attribute_1.setBoolAttribute,
    open: set_attribute_1.setBoolAttribute,
    ping: set_attribute_1.setSpaceSeparated,
    playsinline: set_attribute_1.setBoolAttribute,
    readonly: set_attribute_1.setBoolAttribute,
    rel: set_attribute_1.setSpaceSeparated,
    required: set_attribute_1.setBoolAttribute,
    reversed: set_attribute_1.setBoolAttribute,
    selected: set_attribute_1.setBoolProperty,
    sizes: set_attribute_1.setCommaSeparated,
    srcset: set_attribute_1.setCommaSeparated,
    style: set_attribute_1.setStyleAttribute,
    typemustmatch: set_attribute_1.setBoolAttribute,
    value: set_attribute_1.setProperty
};
//# sourceMappingURL=attributes_mapper.js.map