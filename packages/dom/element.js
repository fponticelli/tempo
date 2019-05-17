"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var node_view_1 = require("./node_view");
var value_1 = require("@mood/core/value");
var applyMood = function (el, attr) { return function (state) {
    var f = attr.resolve(state);
    /* istanbul ignore next */
    if (f != null) {
        f(el);
    }
}; };
var maybeApplyMood = function (el, attr) { return function (state) {
    if (attr != null) {
        applyMood(el, attr)(state);
    }
}; };
var DOMElement = /** @class */ (function () {
    function DOMElement(name, attributes, children) {
        this.name = name;
        this.attributes = attributes;
        this.children = children;
    }
    DOMElement.prototype.render = function (ctx, state) {
        var el = ctx.doc.createElement(this.name);
        var attributes = __assign({}, this.attributes);
        var afterRender = attributes.moodAfterRender && value_1.wrapLiteral(attributes.moodAfterRender);
        var beforeChange = attributes.moodBeforeChange && value_1.wrapLiteral(attributes.moodBeforeChange);
        var afterChange = attributes.moodAfterChange && value_1.wrapLiteral(attributes.moodAfterChange);
        var beforeDestroyf = attributes.moodBeforeDestroy;
        var beforeDestroy = beforeDestroyf && (function () { return beforeDestroyf(el); });
        delete attributes.moodAfterRender;
        delete attributes.moodBeforeChange;
        delete attributes.moodAfterChange;
        delete attributes.moodBeforeDestroy;
        var keys = Object.keys(attributes);
        var _a = keys.reduce(function (acc, key) {
            return utils_1.processAttribute(el, key, attributes[key], ctx.dispatch, acc);
        }, { statics: [], dynamics: [] }), statics = _a.statics, dynamics = _a.dynamics;
        // apply attributes
        statics.forEach(function (f) { return f(); });
        dynamics.forEach(function (f) { return f(state); });
        // TODO append before or after children
        ctx.append(el);
        // children
        var appendChild = function (n) { return el.appendChild(n); };
        var views = this.children.map(function (child) { return child.render(ctx.withAppend(appendChild).withParent(el), state); });
        maybeApplyMood(el, afterRender)(state);
        var dynamicChildren = utils_1.filterDynamics(views).map(function (child) { return function (state) { return child.change(state); }; });
        var allDynamics = dynamics.concat(dynamicChildren);
        if (beforeChange) {
            allDynamics.unshift(applyMood(el, beforeChange));
        }
        if (afterChange) {
            allDynamics.push(applyMood(el, afterChange));
        }
        if (allDynamics.length > 0) {
            return new node_view_1.DOMDynamicNodeView(el, views, function (state) { return allDynamics.forEach(function (f) { return f(state); }); }, beforeDestroy);
        }
        else {
            return new node_view_1.DOMStaticNodeView(el, views, beforeDestroy);
        }
    };
    return DOMElement;
}());
exports.DOMElement = DOMElement;
exports.el = function (name, attributes) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    return new DOMElement(name, attributes, children.map(utils_1.domChildToTemplate));
};
//# sourceMappingURL=element.js.map