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
var DOMBaseNodeView = /** @class */ (function () {
    function DOMBaseNodeView(node, children, beforeDestroy) {
        this.node = node;
        this.children = children;
        this.beforeDestroy = beforeDestroy;
    }
    DOMBaseNodeView.prototype.destroy = function () {
        if (this.beforeDestroy)
            this.beforeDestroy();
        utils_1.removeNode(this.node);
        this.children.forEach(function (child) { return child.destroy(); });
    };
    return DOMBaseNodeView;
}());
exports.DOMBaseNodeView = DOMBaseNodeView;
var DOMStaticNodeView = /** @class */ (function (_super) {
    __extends(DOMStaticNodeView, _super);
    function DOMStaticNodeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = 'static';
        return _this;
    }
    return DOMStaticNodeView;
}(DOMBaseNodeView));
exports.DOMStaticNodeView = DOMStaticNodeView;
var DOMDynamicNodeView = /** @class */ (function (_super) {
    __extends(DOMDynamicNodeView, _super);
    function DOMDynamicNodeView(node, children, change, beforeDestroy) {
        var _this = _super.call(this, node, children, beforeDestroy) || this;
        _this.node = node;
        _this.children = children;
        _this.change = change;
        _this.beforeDestroy = beforeDestroy;
        _this.kind = 'dynamic';
        return _this;
    }
    return DOMDynamicNodeView;
}(DOMBaseNodeView));
exports.DOMDynamicNodeView = DOMDynamicNodeView;
// export const nodeView = <State>(node: Node, children: View<State>[]) => {
//   const dynamics = filterDynamics(children)
//   if (dynamics.length > 0) {
//     return new DOMDynamicNodeView(node, children, (state: State) => dynamics.forEach(child => child.change(state)))
//   } else {
//     return new DOMStaticNodeView(node, children)
//   }
// }
//# sourceMappingURL=node_view.js.map