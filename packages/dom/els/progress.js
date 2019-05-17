"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("../element");
function progress(attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return element_1.el.apply(void 0, ['progress', attributes].concat(children));
}
exports.progress = progress;
//# sourceMappingURL=progress.js.map