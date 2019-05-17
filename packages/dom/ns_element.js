"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var node_view_1 = require("./node_view");
var DOMNSElement = /** @class */ (function () {
    function DOMNSElement(ns, name, attributes, children) {
        this.ns = ns;
        this.name = name;
        this.attributes = attributes;
        this.children = children;
    }
    DOMNSElement.prototype.render = function (ctx, state) {
        var _this = this;
        var attributes = this.attributes;
        var el = ctx.doc.createElementNS(this.ns, this.name);
        var keys = Object.keys(this.attributes);
        var _a = keys.reduce(function (acc, key) {
            return utils_1.processAttribute(el, key, _this.attributes[key], ctx.dispatch, acc);
        }, { statics: [], dynamics: [] }), statics = _a.statics, dynamics = _a.dynamics;
        // apply attributes attributes
        statics.forEach(function (f) { return f(); });
        dynamics.forEach(function (f) { return f(state); });
        // TODO append before or after children
        ctx.append(el);
        // children
        var appendChild = function (n) { return el.appendChild(n); };
        var viewChildren = this.children.map(function (child) { return child.render(ctx.withAppend(appendChild).withParent(el), state); });
        var dynamicChildren = utils_1.filterDynamics(viewChildren).map(function (child) { return function (state) { return child.change(state); }; });
        var allDynamics = dynamics.concat(dynamicChildren);
        if (allDynamics.length > 0) {
            return new node_view_1.DOMDynamicNodeView(el, viewChildren, function (state) { return allDynamics.forEach(function (f) { return f(state); }); });
        }
        else {
            return new node_view_1.DOMStaticNodeView(el, viewChildren);
        }
    };
    return DOMNSElement;
}());
exports.DOMNSElement = DOMNSElement;
//# sourceMappingURL=ns_element.js.map