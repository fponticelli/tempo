"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DOMContext = /** @class */ (function () {
    function DOMContext(doc, append, parent, dispatch) {
        this.doc = doc;
        this.append = append;
        this.parent = parent;
        this.dispatch = dispatch;
    }
    DOMContext.fromElement = function (element, dispatch) {
        return new DOMContext(
        /* istanbul ignore next */
        element.ownerDocument || (window && window.document), function (node) { return element.appendChild(node); }, element, dispatch);
    };
    DOMContext.prototype.mapAction = function (f) {
        var _this = this;
        return new DOMContext(this.doc, this.append, this.parent, function (action) {
            return _this.dispatch(f(action));
        });
    };
    DOMContext.prototype.conditionalMapAction = function (f) {
        var _this = this;
        return new DOMContext(this.doc, this.append, this.parent, function (action) {
            var newAction = f(action);
            if (newAction !== undefined)
                _this.dispatch(newAction);
        });
    };
    DOMContext.prototype.withAppend = function (append) {
        return new DOMContext(this.doc, append, this.parent, this.dispatch);
    };
    DOMContext.prototype.withParent = function (parent) {
        return new DOMContext(this.doc, this.append, parent, this.dispatch);
    };
    DOMContext.prototype.withDispatch = function (dispatch) {
        return new DOMContext(this.doc, this.append, this.parent, dispatch);
    };
    return DOMContext;
}());
exports.DOMContext = DOMContext;
//# sourceMappingURL=context.js.map