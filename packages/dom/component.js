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
var fragment_1 = require("./fragment");
var utils_1 = require("./utils");
var DOMComponentView = /** @class */ (function (_super) {
    __extends(DOMComponentView, _super);
    /* istanbul ignore next */
    function DOMComponentView(state, dispatch, children, dynamics) {
        var _this = _super.call(this, children, function (state) {
            _this.state = state;
            dynamics.forEach(function (child) { return child.change(state); });
        }) || this;
        _this.state = state;
        _this.dispatch = dispatch;
        return _this;
    }
    return DOMComponentView;
}(fragment_1.DOMDynamicFragmentView));
exports.DOMComponentView = DOMComponentView;
var DOMComponent = /** @class */ (function () {
    function DOMComponent(state, update, children) {
        this.state = state;
        this.update = update;
        this.children = children;
    }
    DOMComponent.prototype.render = function (ctx, state) {
        var update = this.update;
        function innerDispatch(action) {
            view.state = update(view.state, action, innerDispatch);
            view.change(view.state);
            ctx.dispatch(action);
        }
        var newCtx = ctx.withDispatch(innerDispatch);
        var viewChildren = this.children.map(function (child) { return child.render(newCtx, state); });
        var dynamics = utils_1.filterDynamics(viewChildren);
        var view = new DOMComponentView(state, innerDispatch, viewChildren, dynamics);
        return view;
    };
    return DOMComponent;
}());
exports.DOMComponent = DOMComponent;
exports.component = function (attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new DOMComponent(attributes.state, attributes.update, children.map(utils_1.domChildToTemplate));
};
//# sourceMappingURL=component.js.map