"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_view_1 = require("./node_view");
var renderLiteral = function (ctx, value) {
    var node = ctx.doc.createTextNode(value || '');
    var view = new node_view_1.DOMStaticNodeView(node, []);
    ctx.append(node);
    return view;
};
var renderFunction = function (ctx, state, map) {
    var node = ctx.doc.createTextNode(map(state) || '');
    var f = function (state) {
        var newContent = map(state) || '';
        // TODO, is this optimization worth it?
        if (node.textContent !== newContent)
            node.textContent = newContent;
    };
    var view = new node_view_1.DOMDynamicNodeView(node, [], f);
    ctx.append(node);
    return view;
};
var DOMText = /** @class */ (function () {
    function DOMText(content) {
        this.content = content;
    }
    DOMText.prototype.render = function (ctx, state) {
        if (typeof this.content === 'function') {
            return renderFunction(ctx, state, this.content);
        }
        else {
            return renderLiteral(ctx, this.content);
        }
    };
    return DOMText;
}());
exports.DOMText = DOMText;
exports.text = function (content) { return new DOMText(content); };
//# sourceMappingURL=text.js.map