"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore next */
var value_1 = require("@mood/core/value");
exports.lifecycle = function (f) {
    return value_1.derived(f);
};
exports.handler = function (f) { return value_1.derived(f); };
exports.stateHandler = function (f) {
    return value_1.derived(function (s) { return function (_) { return f(s); }; });
};
//# sourceMappingURL=value.js.map