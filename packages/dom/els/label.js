"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("../element");
function label(attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return element_1.el.apply(void 0, ['label', attributes].concat(children));
}
exports.label = label;
//# sourceMappingURL=label.js.map