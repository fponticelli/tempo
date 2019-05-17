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
var utils_1 = require("./utils");
var DOMBaseFragmentView = /** @class */ (function () {
    function DOMBaseFragmentView(views) {
        this.views = views;
    }
    DOMBaseFragmentView.prototype.destroy = function () {
        this.views.forEach(function (view) { return view.destroy(); });
    };
    return DOMBaseFragmentView;
}());
exports.DOMBaseFragmentView = DOMBaseFragmentView;
var DOMStaticFragmentView = /** @class */ (function (_super) {
    __extends(DOMStaticFragmentView, _super);
    function DOMStaticFragmentView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = 'static';
        return _this;
    }
    return DOMStaticFragmentView;
}(DOMBaseFragmentView));
exports.DOMStaticFragmentView = DOMStaticFragmentView;
var DOMDynamicFragmentView = /** @class */ (function (_super) {
    __extends(DOMDynamicFragmentView, _super);
    function DOMDynamicFragmentView(views, change) {
        var _this = _super.call(this, views) || this;
        _this.change = change;
        _this.kind = 'dynamic';
        return _this;
    }
    return DOMDynamicFragmentView;
}(DOMBaseFragmentView));
exports.DOMDynamicFragmentView = DOMDynamicFragmentView;
exports.fragmentView = function (views) {
    var dynamics = utils_1.filterDynamics(views);
    if (dynamics.length > 0) {
        return new DOMDynamicFragmentView(views, function (state) { return dynamics.forEach(function (child) { return child.change(state); }); });
    }
    else {
        return new DOMStaticFragmentView(views);
    }
};
//# sourceMappingURL=fragment.js.map