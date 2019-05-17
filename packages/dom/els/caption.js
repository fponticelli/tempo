"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("../element");
function caption(attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return element_1.el.apply(void 0, ['caption', attributes].concat(children));
}
exports.caption = caption;
//# sourceMappingURL=caption.js.map