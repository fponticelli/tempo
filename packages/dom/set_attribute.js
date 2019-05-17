"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var css_properties_1 = require("./css_properties");
exports.setOneStyle = function (el, name, value) {
    var anyStyle = el.style;
    if (value == null) {
        anyStyle[name] = null;
    }
    else {
        var s = String(value);
        if (s !== anyStyle[name]) {
            anyStyle[name] = String(value);
        }
    }
};
exports.setEvent = function (dispatch) {
    return function (el, name, value) {
        var anyEl = el;
        if (value == null) {
            anyEl[name] = null;
        }
        else {
            anyEl[name] = function (e) {
                var r = value(e);
                if (r != null)
                    dispatch(r);
            };
        }
    };
};
exports.setAttribute = function (el, name, value) {
    if (value == null) {
        el.removeAttribute(name);
    }
    else {
        var s = String(value);
        if (s !== el.getAttribute(name)) {
            el.setAttribute(name, s);
        }
    }
};
exports.setProperty = function (el, name, value) {
    var anyEl = el;
    if (value == null) {
        anyEl[name] = null;
    }
    else if (anyEl[name] !== value) {
        anyEl[name] = value;
    }
};
exports.setStyleAttribute = function (el, name, value) {
    var html = el;
    if (value == null) {
        html.removeAttribute(name);
    }
    else {
        var s = Object.keys(value)
            .map(function (k) {
            var cssName = css_properties_1.cssMapper[k] || k;
            return cssName + ": " + value[k] + ";";
        })
            .join(' ');
        exports.setAttribute(el, name, (s.length && s) || null);
    }
};
exports.setBoolProperty = function (el, name, value) {
    var anyEl = el;
    if (value == null) {
        anyEl[name] = null;
    }
    else {
        var bool = Boolean(value);
        if (anyEl[name] !== bool) {
            anyEl[name] = bool;
        }
    }
};
exports.setEnumBoolAttribute = function (el, name, value) {
    exports.setAttribute(el, name, value === true ? 'true' : value === false ? 'false' : null);
};
exports.setBoolAttribute = function (el, name, value) {
    exports.setAttribute(el, name, value === true ? '' : null);
};
exports.setCommaSeparated = function (el, name, values) {
    exports.setAttribute(el, name, (values && values.length > 0 && values.join(', ')) || null);
};
exports.setSpaceSeparated = function (el, name, values) {
    exports.setAttribute(el, name, (values && values.length > 0 && values.join(' ')) || null);
};
//# sourceMappingURL=set_attribute.js.map