"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = require("./context");
exports.Mood = {
    render: function (options) {
        var el = options.el, component = options.component, observe = options.observe;
        /* istanbul ignore next */
        var doc = options.document || document;
        var dispatch = observe == null ? function (_) { } : function (action) { return observe(view.state, action); };
        var append = function (node) { return el.appendChild(node); };
        var view = component.render(new context_1.DOMContext(doc, append, el, dispatch), component.state);
        return view;
    }
};
//# sourceMappingURL=mood.js.map