"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var DOMElementsView = /** @class */ (function () {
    function DOMElementsView(ref, ctx, children) {
        this.ref = ref;
        this.ctx = ctx;
        this.children = children;
        this.kind = 'dynamic';
        this.childrenView = [];
    }
    DOMElementsView.prototype.destroy = function () {
        utils_1.removeNode(this.ref);
        this.childrenView.forEach(function (e) { return e.forEach(function (c) { return c.destroy(); }); });
    };
    DOMElementsView.prototype.change = function (state) {
        var _this = this;
        var stateLength = state.length;
        var viewLength = this.childrenView.length;
        if (stateLength > viewLength) {
            var _loop_1 = function (i) {
                var val = state[i];
                utils_1.filterDynamics(this_1.childrenView[i]).forEach(function (child) { return child.change(val); });
            };
            var this_1 = this;
            for (var i = 0; i < viewLength; i++) {
                _loop_1(i);
            }
            var _loop_2 = function (i) {
                var val = state[i];
                this_2.childrenView.push(this_2.children.map(function (el) { return el.render(_this.ctx, val); }));
            };
            var this_2 = this;
            for (var i = viewLength; i < stateLength; i++) {
                _loop_2(i);
            }
        }
        else {
            var _loop_3 = function (i) {
                var val = state[i];
                utils_1.filterDynamics(this_3.childrenView[i]).forEach(function (child) { return child.change(val); });
            };
            var this_3 = this;
            for (var i = 0; i < stateLength; i++) {
                _loop_3(i);
            }
            for (var i = stateLength; i < viewLength; i++) {
                this.childrenView[i].forEach(function (child) { return child.destroy(); });
            }
            this.childrenView = this.childrenView.slice(0, stateLength);
        }
    };
    return DOMElementsView;
}());
exports.DOMElementsView = DOMElementsView;
var DOMElementsTemplate = /** @class */ (function () {
    function DOMElementsTemplate(opts, children) {
        this.opts = opts;
        this.children = children;
    }
    DOMElementsTemplate.prototype.render = function (ctx, state) {
        var ref = ctx.doc.createComment(this.opts.refId || 'md:repeat');
        ctx.append(ref);
        var view = new DOMElementsView(ref, ctx.withAppend(utils_1.insertBefore(ref)), this.children);
        view.change(state);
        return view;
    };
    return DOMElementsTemplate;
}());
exports.DOMElementsTemplate = DOMElementsTemplate;
exports.elements = function (opts) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new DOMElementsTemplate(opts, children.map(utils_1.domChildToTemplate));
};
//# sourceMappingURL=elements.js.map