"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var DOMWhenView = /** @class */ (function () {
    function DOMWhenView(condition, ctx, dispatch, removeNode, children) {
        this.condition = condition;
        this.ctx = ctx;
        this.dispatch = dispatch;
        this.removeNode = removeNode;
        this.children = children;
        this.kind = 'dynamic';
    }
    DOMWhenView.prototype.change = function (value) {
        var _this = this;
        if (this.condition(value)) {
            if (this.views == null) {
                // it has never been rendered before
                this.views = this.children.map(function (c) { return c.render(_this.ctx, value); });
                this.dynamics = utils_1.filterDynamics(this.views);
            }
            else {
                this.dynamics.forEach(function (d) { return d.change(value); });
            }
        }
        else {
            this.destroyViews();
        }
    };
    DOMWhenView.prototype.destroy = function () {
        this.destroyViews();
        this.removeNode();
    };
    DOMWhenView.prototype.destroyViews = function () {
        if (this.views != null) {
            this.views.forEach(function (v) { return v.destroy(); });
            this.views = undefined;
            this.dynamics = undefined;
        }
    };
    return DOMWhenView;
}());
exports.DOMWhenView = DOMWhenView;
var DOMWhen = /** @class */ (function () {
    function DOMWhen(opts, children) {
        this.opts = opts;
        this.children = children;
    }
    DOMWhen.prototype.render = function (ctx, state) {
        var ref = ctx.doc.createComment(this.opts.refId || 'md:when');
        ctx.append(ref);
        var parent = ref.parentElement;
        var view = new DOMWhenView(this.opts.condition, ctx.withAppend(function (node) { return parent.insertBefore(node, ref); }), ctx.dispatch, function () { return utils_1.removeNode(ref); }, this.children.map(utils_1.domChildToTemplate));
        view.change(state);
        return view;
    };
    return DOMWhen;
}());
exports.DOMWhen = DOMWhen;
exports.when = function (opts) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new DOMWhen(opts, children);
};
exports.unless = function (opts) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new DOMWhen({
        condition: function (v) { return !opts.condition(v); },
        refId: opts.refId || 'md:unless'
    }, children);
};
//# sourceMappingURL=when.js.map