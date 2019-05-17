"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DOMAdapterView = /** @class */ (function () {
    function DOMAdapterView(mergeStates, child) {
        this.mergeStates = mergeStates;
        this.child = child;
        this.kind = 'dynamic';
    }
    DOMAdapterView.prototype.destroy = function () {
        this.child.destroy();
    };
    DOMAdapterView.prototype.change = function (outerState) {
        var newState = this.mergeStates(outerState, this.child.state);
        if (newState == null)
            return;
        this.child.change(newState);
    };
    return DOMAdapterView;
}());
exports.DOMAdapterView = DOMAdapterView;
var DOMAdapter = /** @class */ (function () {
    function DOMAdapter(mergeStates, propagate, child) {
        this.mergeStates = mergeStates;
        this.propagate = propagate;
        this.child = child;
    }
    DOMAdapter.prototype.render = function (ctx, outerState) {
        var _this = this;
        var mergedState = (this.mergeStates && this.mergeStates(outerState, this.child.state)) || this.child.state;
        var viewChild = this.child.render(ctx.withDispatch(function (action) {
            _this.propagate(action, viewChild.state, outerState, viewChild.dispatch, ctx.dispatch);
        }), mergedState);
        var view = new DOMAdapterView(this.mergeStates, viewChild);
        return view;
    };
    return DOMAdapter;
}());
exports.DOMAdapter = DOMAdapter;
exports.adapter = function (opts, child) {
    return new DOMAdapter(opts.mergeStates || (function (_u, _d) { return undefined; }), 
    /* istanbul ignore next */
    opts.propagate ||
        (function (_m, _d, _u, _f1, _f2) { return undefined; }), child);
};
//# sourceMappingURL=adapter.js.map