"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fragment_1 = require("./fragment");
var utils_1 = require("./utils");
var DOMPortal = /** @class */ (function () {
    function DOMPortal(getParent, append, children) {
        this.getParent = getParent;
        this.append = append;
        this.children = children;
    }
    DOMPortal.prototype.render = function (ctx, state) {
        var _this = this;
        var doc = ctx.doc;
        var append = function (node) { return _this.append(doc, node); };
        var parent = this.getParent(doc);
        var viewChildren = this.children.map(function (child) {
            var newCtx = ctx.withAppend(append).withParent(parent);
            return child.render(newCtx, state);
        });
        return fragment_1.fragmentView(viewChildren);
    };
    return DOMPortal;
}());
exports.DOMPortal = DOMPortal;
exports.portal = function (opts) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new DOMPortal(opts.getParent, opts.append, children.map(utils_1.domChildToTemplate));
};
exports.portalWithSelector = function (opts) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return exports.portal.apply(void 0, [{
            getParent: function (doc) {
                var el = doc.querySelector(opts.selector);
                if (!el) {
                    throw new Error("selector doesn't match any element: \"" + opts.selector + "\"");
                }
                return el;
            },
            append: function (doc, node) {
                // Parent should always be available given the guarantee from `getParent`.
                // If parent has been removed from unsafe manipulation of the dom, an exception will occurr.
                var parent = doc.querySelector(opts.selector);
                parent.appendChild(node);
            }
        }].concat(children));
};
exports.headPortal = function () {
    var children = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        children[_i] = arguments[_i];
    }
    return new DOMPortal(function (doc) { return doc.head; }, function (doc, node) { return doc.head.appendChild(node); }, children.map(utils_1.domChildToTemplate));
};
exports.bodyPortal = function () {
    var children = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        children[_i] = arguments[_i];
    }
    return new DOMPortal(function (doc) { return doc.body; }, function (doc, node) { return doc.body.appendChild(node); }, children.map(utils_1.domChildToTemplate));
};
//# sourceMappingURL=portal.js.map