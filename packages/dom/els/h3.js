"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("../element");
function h3(attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return element_1.el.apply(void 0, ['h3', attributes].concat(children));
}
exports.h3 = h3;
//# sourceMappingURL=h3.js.map