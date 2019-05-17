"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var WrappedValueBase = /** @class */ (function () {
    function WrappedValueBase() {
    }
    return WrappedValueBase;
}());
var WrappedLiteralValue = /** @class */ (function (_super) {
    __extends(WrappedLiteralValue, _super);
    function WrappedLiteralValue(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.kind = 'literal';
        return _this;
    }
    WrappedLiteralValue.prototype.resolve = function (_) {
        return this.value;
    };
    return WrappedLiteralValue;
}(WrappedValueBase));
exports.WrappedLiteralValue = WrappedLiteralValue;
var WrappedDerivedValue = /** @class */ (function (_super) {
    __extends(WrappedDerivedValue, _super);
    function WrappedDerivedValue(map) {
        var _this = _super.call(this) || this;
        _this.map = map;
        _this.kind = 'derived';
        return _this;
    }
    WrappedDerivedValue.prototype.resolve = function (state) {
        return this.map(state);
    };
    return WrappedDerivedValue;
}(WrappedValueBase));
exports.WrappedDerivedValue = WrappedDerivedValue;
exports.derived = function (map) {
    return new WrappedDerivedValue(map);
};
exports.literal = function (value) {
    return new WrappedLiteralValue(value);
};
exports.wrapLiteral = function (value) {
    if (value.kind === 'derived') {
        return value;
    }
    else {
        return exports.literal(value);
    }
};
//# sourceMappingURL=value.js.map