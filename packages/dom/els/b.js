"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("../element");
function b(attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return element_1.el.apply(void 0, ['b', attributes].concat(children));
}
exports.b = b;
//# sourceMappingURL=b.js.map