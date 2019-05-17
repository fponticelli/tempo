"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("../element");
function i(attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return element_1.el.apply(void 0, ['i', attributes].concat(children));
}
exports.i = i;
//# sourceMappingURL=i.js.map