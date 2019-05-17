"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var attributes_mapper_1 = require("./attributes_mapper");
var set_attribute_1 = require("./set_attribute");
var text_1 = require("./text");
exports.removeNode = function (node) {
    var el = node;
    if (el && el.onblur) {
        el.onblur = null;
    }
    if (node && node.parentElement) {
        node.parentElement.removeChild(node);
    }
};
exports.insertBefore = function (ref) { return function (node) {
    if (ref.parentElement != null) {
        ref.parentElement.insertBefore(node, ref);
    }
}; };
exports.filterDynamics = function (children) {
    return children.filter(function (child) { return child.kind === 'dynamic'; }).map(function (child) { return child; });
};
exports.domChildToTemplate = function (dom) {
    if (typeof dom === 'string' || typeof dom === 'function')
        return text_1.text(dom);
    else
        return dom;
};
exports.processAttribute = function (el, name, value, dispatch, acc) {
    name = attributes_mapper_1.attributeNameMap[name] || name;
    var set;
    var isEvent = name.startsWith('on');
    if (isEvent) {
        // events
        name = name.toLowerCase();
        set = set_attribute_1.setEvent(dispatch);
    }
    else if (name.startsWith('$')) {
        // pseudo-styles
        name = name.substring(1);
        set = set_attribute_1.setOneStyle;
    }
    else {
        // other attributes/properties
        set = attributes_mapper_1.attributeMap[name] || set_attribute_1.setAttribute;
    }
    var anyValue = value;
    if (anyValue && anyValue.kind && anyValue.kind === 'derived') {
        var derived_1 = anyValue;
        var f = function (state) { return set(el, name, derived_1.resolve(state)); };
        return {
            dynamics: acc.dynamics.concat([f]),
            statics: acc.statics
        };
    }
    else if (!isEvent && typeof value === 'function') {
        var f = function (state) { return set(el, name, value(state)); };
        return {
            dynamics: acc.dynamics.concat([f]),
            statics: acc.statics
        };
    }
    else {
        var f = function () { return set(el, name, value); };
        return {
            dynamics: acc.dynamics,
            statics: acc.statics.concat([f])
        };
    }
};
//# sourceMappingURL=utils.js.map