"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("../element");
function del(attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return element_1.el.apply(void 0, ['del', attributes].concat(children));
}
exports.del = del;
//# sourceMappingURL=del.js.map