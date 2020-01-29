// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"pwth":[function(require,module,exports) {
"use strict";
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.nothing = undefined;
exports.just = function (value) { return value; };
exports.isNothing = function (maybe) { return maybe == null; };
exports.isJust = function (maybe) { return maybe != null; };

},{}],"LAOm":[function(require,module,exports) {
"use strict";
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var maybe_1 = require("./maybe");
exports.map = function (f, arr) {
    var length = arr.length;
    var buff = new Array(length);
    for (var i = 0; i < length; i++) {
        buff[i] = f(arr[i]);
    }
    return buff;
};
exports.flatMap = function (f, arr) {
    var buff = new Array();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        buff.push.apply(buff, f(el));
    }
    return buff;
};
exports.head = function (arr) { return arr.length > 0 ? arr[0] : maybe_1.nothing; };
exports.tail = function (arr) { return arr.slice(1); };
exports.equals = function (predicate, a, b) {
    if (a.length !== b.length)
        return false;
    else {
        for (var i = 0; i < a.length; i++) {
            if (!predicate(a[i], b[i]))
                return false;
        }
        return true;
    }
};
exports.isEmpty = function (arr) { return arr.length === 0; };
exports.hasValues = function (arr) { return arr.length > 0; };
exports.filter = function (predicate, arr) {
    var buff = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var a = arr_2[_i];
        if (predicate(a))
            buff.push(a);
    }
    return buff;
};
exports.flatten = function (arr) {
    var _a;
    return (_a = []).concat.apply(_a, arr);
};
exports.foldLeft = function (f, arr, b) {
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var a = arr_3[_i];
        b = f(b, a);
    }
    return b;
};
exports.all = function (predicate, arr) {
    for (var _i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
        var a = arr_4[_i];
        if (!predicate(a)) {
            return false;
        }
    }
    return true;
};
exports.any = function (predicate, arr) {
    for (var _i = 0, arr_5 = arr; _i < arr_5.length; _i++) {
        var a = arr_5[_i];
        if (predicate(a)) {
            return true;
        }
    }
    return false;
};
exports.each = function (f, arr) {
    for (var _i = 0, arr_6 = arr; _i < arr_6.length; _i++) {
        var a = arr_6[_i];
        f(a);
    }
};
exports.concat = function () {
    var _a;
    var arrs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrs[_i] = arguments[_i];
    }
    return (_a = []).concat.apply(_a, arrs);
};
exports.sort = function (compare, arr) {
    return arr.slice().sort(compare);
};
exports.range = function (length, f) {
    var buff = new Array(length);
    for (var i = 0; i < length; i++)
        buff[i] = f(i);
    return buff;
};
exports.numbersRange = function (length, startAt) {
    if (startAt === void 0) { startAt = 0; }
    return exports.range(length, function (i) { return startAt + i; });
};
exports.fill = function (length, value) { return exports.range(length, function () { return value; }); };

},{"./maybe":"pwth"}],"BEVE":[function(require,module,exports) {
"use strict";
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = require("tempo-std/lib/arrays");
function setOneStyle(el, name, value) {
    var anyStyle = el.style;
    if (value == null) {
        anyStyle[name] = null;
    }
    else {
        anyStyle[name] = value;
    }
}
exports.setOneStyle = setOneStyle;
function setAttribute(el, name, value) {
    if (value == null) {
        el.removeAttribute(name);
    }
    else {
        el.setAttribute(name, value);
    }
}
exports.setAttribute = setAttribute;
function setProperty(el, name, value) {
    var anyEl = el;
    if (value == null) {
        anyEl[name] = null;
    }
    else {
        anyEl[name] = value;
    }
}
exports.setProperty = setProperty;
function setStyleAttribute(el, name, value) {
    var html = el;
    if (value == null) {
        html.removeAttribute(name);
    }
    else if (typeof value === 'string') {
        setAttribute(el, name, value);
    }
    else {
        var s = arrays_1.map(function (k) { return k + ": " + value[k] + ";"; }, Object.keys(value)).join(' ');
        setAttribute(el, name, (s.length && s) || null);
    }
}
exports.setStyleAttribute = setStyleAttribute;
function setBoolProperty(el, name, value) {
    var anyEl = el;
    if (value == null) {
        anyEl[name] = null;
    }
    else {
        var bool = value === true || value === 'true';
        anyEl[name] = bool;
    }
}
exports.setBoolProperty = setBoolProperty;
function setEnumBoolAttribute(el, name, value) {
    setAttribute(el, name, value === true || value === 'true'
        ? 'true'
        : value === false
            ? 'false'
            : null);
}
exports.setEnumBoolAttribute = setEnumBoolAttribute;
function setBoolAttribute(el, name, value) {
    setAttribute(el, name, value === true || value === 'true' ? '' : null);
}
exports.setBoolAttribute = setBoolAttribute;
function setCommaSeparated(el, name, values) {
    if (Array.isArray(values))
        setAttribute(el, name, values.join(', ') || null);
    else
        setAttribute(el, name, (values && String(values)) || null);
}
exports.setCommaSeparated = setCommaSeparated;
function setSpaceSeparated(el, name, values) {
    if (Array.isArray(values))
        setAttribute(el, name, values.join(' ') || null);
    else
        setAttribute(el, name, (values && String(values)) || null);
}
exports.setSpaceSeparated = setSpaceSeparated;

},{"tempo-std/lib/arrays":"LAOm"}],"UKQ2":[function(require,module,exports) {
"use strict";
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* istanbul ignore file */
var set_attribute_1 = require("./utils/set_attribute");
exports.attributeNameMap = {
    acceptcharset: 'accept-charset',
    asattr: 'as',
    classname: 'class',
    httpequiv: 'http-equiv',
    htmlfor: 'for'
};
exports.htmlAttributeMap = {
    'accept-charset': set_attribute_1.setSpaceSeparated,
    class: set_attribute_1.setSpaceSeparated,
    acceptcharset: set_attribute_1.setSpaceSeparated,
    async: set_attribute_1.setBoolAttribute,
    autofocus: set_attribute_1.setBoolAttribute,
    autoplay: set_attribute_1.setBoolAttribute,
    checked: set_attribute_1.setBoolProperty,
    contenteditable: set_attribute_1.setEnumBoolAttribute,
    controls: set_attribute_1.setBoolAttribute,
    default: set_attribute_1.setBoolAttribute,
    defer: set_attribute_1.setBoolAttribute,
    disabled: set_attribute_1.setBoolAttribute,
    draggable: set_attribute_1.setEnumBoolAttribute,
    formnovalidate: set_attribute_1.setBoolAttribute,
    headers: set_attribute_1.setSpaceSeparated,
    hidden: set_attribute_1.setBoolAttribute,
    ismap: set_attribute_1.setBoolAttribute,
    itemscope: set_attribute_1.setBoolAttribute,
    loop: set_attribute_1.setBoolAttribute,
    multiple: set_attribute_1.setBoolProperty,
    muted: set_attribute_1.setBoolProperty,
    nomodule: set_attribute_1.setBoolAttribute,
    novalidate: set_attribute_1.setBoolAttribute,
    open: set_attribute_1.setBoolAttribute,
    ping: set_attribute_1.setSpaceSeparated,
    playsinline: set_attribute_1.setBoolAttribute,
    readonly: set_attribute_1.setBoolAttribute,
    rel: set_attribute_1.setSpaceSeparated,
    required: set_attribute_1.setBoolAttribute,
    reversed: set_attribute_1.setBoolAttribute,
    selected: set_attribute_1.setBoolProperty,
    sizes: set_attribute_1.setCommaSeparated,
    srcset: set_attribute_1.setCommaSeparated,
    style: set_attribute_1.setStyleAttribute,
    typemustmatch: set_attribute_1.setBoolAttribute,
    value: set_attribute_1.setProperty
};

},{"./utils/set_attribute":"BEVE"}],"GqEk":[function(require,module,exports) {
"use strict";
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("./utils/dom");
var DOMDerivedTextTemplate = /** @class */ (function () {
    function DOMDerivedTextTemplate(makeContent) {
        this.makeContent = makeContent;
    }
    DOMDerivedTextTemplate.prototype.render = function (ctx, state) {
        var makeContent = this.makeContent;
        var content = makeContent(state) || '';
        var node = ctx.doc.createTextNode(content);
        ctx.append(node);
        return {
            change: function (state) {
                var newContent = makeContent(state) || '';
                if (newContent !== content) {
                    node.nodeValue = newContent;
                    if (newContent.length < 5000)
                        content = newContent;
                }
            },
            destroy: function () {
                dom_1.removeNode(node);
            },
            request: function (_) { }
        };
    };
    return DOMDerivedTextTemplate;
}());
exports.DOMDerivedTextTemplate = DOMDerivedTextTemplate;
var DOMLiteralTextTemplate = /** @class */ (function () {
    function DOMLiteralTextTemplate(content) {
        this.content = content;
    }
    DOMLiteralTextTemplate.prototype.render = function (ctx, _) {
        var node = ctx.doc.createTextNode(this.content);
        ctx.append(node);
        return {
            change: function (_) { },
            destroy: function () {
                dom_1.removeNode(node);
            },
            request: function (_) { }
        };
    };
    return DOMLiteralTextTemplate;
}());
exports.DOMLiteralTextTemplate = DOMLiteralTextTemplate;
exports.text = function (content) {
    if (typeof content === 'function') {
        return new DOMDerivedTextTemplate(content);
    }
    else {
        return new DOMLiteralTextTemplate(content || '');
    }
};

},{"./utils/dom":"TnZD"}],"TnZD":[function(require,module,exports) {
"use strict";
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var dom_attributes_mapper_1 = require("../dom_attributes_mapper");
var set_attribute_1 = require("./set_attribute");
var text_1 = require("../text");
function removeNode(node) {
    var el = node;
    if (el && el.onblur) {
        el.onblur = null;
    }
    if (!node || node.ownerDocument === undefined)
        return;
    if (node.parentElement) {
        node.parentElement.removeChild(node);
    }
}
exports.removeNode = removeNode;
function insertFBefore(ref) {
    return function (node) {
        if (ref.parentElement != null) {
            ref.parentElement.insertBefore(node, ref);
        }
    };
}
exports.insertFBefore = insertFBefore;
function domChildToTemplate(dom) {
    if (typeof dom === 'string' ||
        typeof dom === 'function' ||
        typeof dom === 'undefined')
        return text_1.text(dom);
    else
        return dom;
}
exports.domChildToTemplate = domChildToTemplate;
function processAttribute(el, name, value, acc) {
    var set = dom_attributes_mapper_1.htmlAttributeMap[name] || set_attribute_1.setAttribute;
    if (typeof value === 'function') {
        // state in inputs can incorrectly map to state
        if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
            var f = function (state) {
                var newValue = value(state);
                set(el, name, newValue);
            };
            acc.push(f);
        }
        else {
            var oldValue_1 = undefined;
            var f = function (state) {
                var newValue = value(state);
                if (newValue !== oldValue_1) {
                    set(el, name, newValue);
                    if (String(newValue).length < 50000) {
                        oldValue_1 = newValue;
                    }
                }
            };
            acc.push(f);
        }
    }
    else {
        set(el, name, value);
    }
    return acc;
}
exports.processAttribute = processAttribute;
function processEvent(el, name, value, dispatch, acc) {
    var localState;
    var anyEl = el;
    anyEl[name] = function (ev) {
        var r = value(localState, ev, el);
        if (typeof r !== 'undefined') {
            dispatch(r);
        }
    };
    var f = function (state) {
        localState = state;
    };
    acc.push(f);
    return acc;
}
exports.processEvent = processEvent;
function processStyle(el, name, value, acc) {
    if (typeof value === 'function') {
        var oldValue_2;
        var f = function (state) {
            var newValue = value(state);
            if (newValue !== oldValue_2) {
                set_attribute_1.setOneStyle(el, name, newValue);
                oldValue_2 = newValue;
            }
        };
        acc.push(f);
    }
    else {
        set_attribute_1.setOneStyle(el, name, value);
    }
    return acc;
}
exports.processStyle = processStyle;
exports.containerSize = function (el) {
    var prev = [];
    for (var i = 0; i < el.children.length; i++) {
        var child = el.children[i];
        prev[i] = child.style.display;
        child.style.display = 'none';
    }
    var size = {
        width: el.offsetWidth,
        height: el.offsetHeight
    };
    for (var i = 0; i < el.children.length; i++) {
        var child = el.children[i];
        child.style.display = prev[i];
    }
    return size;
};

},{"../dom_attributes_mapper":"UKQ2","./set_attribute":"BEVE","../text":"GqEk"}],"bbLX":[function(require,module,exports) {
"use strict";
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("./utils/dom");
var arrays_1 = require("tempo-std/lib/arrays");
var dom_attributes_mapper_1 = require("./dom_attributes_mapper");
var applyChange = function (change, el, ctx) { return function (state, value) {
    return change(state, el, ctx, value);
}; };
var applyAfterRender = function (attr, el, ctx, state) {
    if (typeof attr !== undefined) {
        return attr(state, el, ctx);
    }
    else {
        return undefined;
    }
};
var DOMElement = /** @class */ (function () {
    function DOMElement(createElement, attrs, events, styles, afterrender, beforechange, afterchange, beforedestroy, respond, children) {
        this.createElement = createElement;
        this.attrs = attrs;
        this.events = events;
        this.styles = styles;
        this.afterrender = afterrender;
        this.beforechange = beforechange;
        this.afterchange = afterchange;
        this.beforedestroy = beforedestroy;
        this.respond = respond;
        this.children = children;
    }
    DOMElement.prototype.render = function (ctx, state) {
        var _this = this;
        var el = this.createElement(ctx.doc);
        var value = undefined;
        var allChanges = [];
        for (var _i = 0, _a = this.attrs; _i < _a.length; _i++) {
            var o = _a[_i];
            dom_1.processAttribute(el, o.name, o.value, allChanges);
        }
        for (var _b = 0, _c = this.events; _b < _c.length; _b++) {
            var o = _c[_b];
            dom_1.processEvent(el, o.name, o.value, ctx.dispatch, allChanges);
        }
        for (var _d = 0, _e = this.styles; _d < _e.length; _d++) {
            var o = _e[_d];
            dom_1.processStyle(el, o.name, o.value, allChanges);
        }
        for (var _f = 0, allChanges_1 = allChanges; _f < allChanges_1.length; _f++) {
            var change = allChanges_1[_f];
            change(state);
        }
        // children
        var appendChild = function (n) { return el.appendChild(n); };
        var newCtx = ctx.withAppend(appendChild).withParent(el);
        var views = arrays_1.map(function (child) { return child.render(newCtx, state); }, this.children);
        ctx.append(el);
        if (this.afterrender) {
            value = applyAfterRender(this.afterrender, el, ctx, state);
        }
        var viewChanges = arrays_1.map(function (child) { return function (state) { return child.change(state); }; }, views);
        allChanges.push.apply(allChanges, viewChanges);
        if (this.beforechange) {
            var change_1 = applyChange(this.beforechange, el, ctx);
            var update = function (state) { value = change_1(state, value); };
            allChanges.unshift(update);
        }
        if (this.afterchange) {
            var change_2 = applyChange(this.afterchange, el, ctx);
            var update = function (state) { value = change_2(state, value); };
            allChanges.push(update);
        }
        var beforedestroyf = this.beforedestroy && (function () { return _this.beforedestroy(el, ctx, value); });
        var respond = this.respond;
        return {
            change: function (state) {
                for (var _i = 0, allChanges_2 = allChanges; _i < allChanges_2.length; _i++) {
                    var change = allChanges_2[_i];
                    change(state);
                }
            },
            destroy: function () {
                if (beforedestroyf)
                    beforedestroyf();
                dom_1.removeNode(el);
                for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                    var view = views_1[_i];
                    view.destroy();
                }
            },
            request: function (query) {
                if (respond) {
                    value = respond(query, el, ctx, value);
                }
                for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
                    var view = views_2[_i];
                    view.request(query);
                }
            }
        };
    };
    return DOMElement;
}());
exports.DOMElement = DOMElement;
function extractAttrs(attrs) {
    return arrays_1.map(function (attName) {
        var name = attName.toLowerCase();
        name = dom_attributes_mapper_1.attributeNameMap[name] || name;
        return {
            name: name,
            value: attrs[attName]
        };
    }, Object.keys(attrs || {}));
}
function extractEvents(attrs) {
    return arrays_1.map(function (eventName) {
        var name = "on" + eventName.toLowerCase();
        return {
            name: name,
            value: attrs[eventName]
        };
    }, Object.keys(attrs || {}));
}
function extractStyles(attrs) {
    return arrays_1.map(function (name) { return ({
        name: name,
        value: attrs[name]
    }); }, Object.keys(attrs || {}));
}
var makeCreateElement = function (name) { return function (doc) { return doc.createElement(name); }; };
exports.el = function (name, attributes) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    return new DOMElement(makeCreateElement(name), extractAttrs(attributes.attrs), extractEvents(attributes.events), extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, arrays_1.map(dom_1.domChildToTemplate, children));
};
exports.el2 = function (name) { return function (attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new DOMElement(makeCreateElement(name), extractAttrs(attributes.attrs), extractEvents(attributes.events), extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, arrays_1.map(dom_1.domChildToTemplate, children));
}; };
exports.defaultNamespaces = {
    'svg': 'http://www.w3.org/2000/svg'
};
var makeCreateElementNS = function (namespace, name) {
    return function (doc) { return doc.createElementNS(namespace, name); };
};
exports.elNS = function (ns, name, attributes) {
    var children = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        children[_i - 3] = arguments[_i];
    }
    var namespace = exports.defaultNamespaces[ns] || ns;
    return new DOMElement(makeCreateElementNS(namespace, name), extractAttrs(attributes.attrs), extractEvents(attributes.events), extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, arrays_1.map(dom_1.domChildToTemplate, children));
};
exports.elNS2 = function (namespace, name) { return function (attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new DOMElement(makeCreateElementNS(namespace, name), extractAttrs(attributes.attrs), extractEvents(attributes.events), extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, arrays_1.map(dom_1.domChildToTemplate, children));
}; };

},{"./utils/dom":"TnZD","tempo-std/lib/arrays":"LAOm","./dom_attributes_mapper":"UKQ2"}],"zQMt":[function(require,module,exports) {
"use strict";
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("./element");
exports.a = element_1.el2('a');
exports.abbr = element_1.el2('abbr');
exports.address = element_1.el2('address');
exports.applet = element_1.el2('applet');
exports.area = element_1.el2('area');
exports.article = element_1.el2('article');
exports.aside = element_1.el2('aside');
exports.audio = element_1.el2('audio');
exports.b = element_1.el2('b');
exports.base = element_1.el2('base');
exports.basefont = element_1.el2('basefont');
exports.bdi = element_1.el2('bdi');
exports.bdo = element_1.el2('bdo');
exports.blockquote = element_1.el2('blockquote');
exports.body = element_1.el2('body');
exports.br = element_1.el2('br');
exports.button = element_1.el2('button');
exports.canvas = element_1.el2('canvas');
exports.caption = element_1.el2('caption');
exports.cite = element_1.el2('cite');
exports.code = element_1.el2('code');
exports.col = element_1.el2('col');
exports.colgroup = element_1.el2('colgroup');
exports.data = element_1.el2('data');
exports.datalist = element_1.el2('datalist');
exports.dd = element_1.el2('dd');
exports.del = element_1.el2('del');
exports.details = element_1.el2('details');
exports.dfn = element_1.el2('dfn');
exports.dialog = element_1.el2('dialog');
exports.dir = element_1.el2('dir');
exports.div = element_1.el2('div');
exports.dl = element_1.el2('dl');
exports.dt = element_1.el2('dt');
exports.em = element_1.el2('em');
exports.embed = element_1.el2('embed');
exports.fieldset = element_1.el2('fieldset');
exports.figcaption = element_1.el2('figcaption');
exports.figure = element_1.el2('figure');
exports.font = element_1.el2('font');
exports.footer = element_1.el2('footer');
exports.form = element_1.el2('form');
exports.frame = element_1.el2('frame');
exports.frameset = element_1.el2('frameset');
exports.h1 = element_1.el2('h1');
exports.h2 = element_1.el2('h2');
exports.h3 = element_1.el2('h3');
exports.h4 = element_1.el2('h4');
exports.h5 = element_1.el2('h5');
exports.h6 = element_1.el2('h6');
exports.head = element_1.el2('head');
exports.header = element_1.el2('header');
exports.hgroup = element_1.el2('hgroup');
exports.hr = element_1.el2('hr');
exports.html = element_1.el2('html');
exports.i = element_1.el2('i');
exports.iframe = element_1.el2('iframe');
exports.img = element_1.el2('img');
exports.input = element_1.el2('input');
exports.ins = element_1.el2('ins');
exports.kbd = element_1.el2('kbd');
exports.label = element_1.el2('label');
exports.legend = element_1.el2('legend');
exports.li = element_1.el2('li');
exports.link = element_1.el2('link');
exports.listing = element_1.el2('listing');
exports.main = element_1.el2('main');
exports.map = element_1.el2('map');
exports.mark = element_1.el2('mark');
exports.marquee = element_1.el2('marquee');
exports.menu = element_1.el2('menu');
exports.meta = element_1.el2('meta');
exports.meter = element_1.el2('meter');
exports.nav = element_1.el2('nav');
exports.noscript = element_1.el2('noscript');
exports.object = element_1.el2('object');
exports.ol = element_1.el2('ol');
exports.optgroup = element_1.el2('optgroup');
exports.option = element_1.el2('option');
exports.output = element_1.el2('output');
exports.p = element_1.el2('p');
exports.param = element_1.el2('param');
exports.picture = element_1.el2('picture');
exports.pre = element_1.el2('pre');
exports.progress = element_1.el2('progress');
exports.q = element_1.el2('q');
exports.rp = element_1.el2('rp');
exports.rt = element_1.el2('rt');
exports.ruby = element_1.el2('ruby');
exports.s = element_1.el2('s');
exports.samp = element_1.el2('samp');
exports.script = element_1.el2('script');
exports.section = element_1.el2('section');
exports.select = element_1.el2('select');
exports.slot = element_1.el2('slot');
exports.small = element_1.el2('small');
exports.source = element_1.el2('source');
exports.span = element_1.el2('span');
exports.strong = element_1.el2('strong');
exports.style = element_1.el2('style');
exports.sub = element_1.el2('sub');
exports.summary = element_1.el2('summary');
exports.sup = element_1.el2('sup');
exports.table = element_1.el2('table');
exports.tbody = element_1.el2('tbody');
exports.td = element_1.el2('td');
exports.template = element_1.el2('template');
exports.textarea = element_1.el2('textarea');
exports.tfoot = element_1.el2('tfoot');
exports.th = element_1.el2('th');
exports.thead = element_1.el2('thead');
exports.time = element_1.el2('time');
exports.title = element_1.el2('title');
exports.tr = element_1.el2('tr');
exports.track = element_1.el2('track');
exports.u = element_1.el2('u');
exports.ul = element_1.el2('ul');
exports.varEl = element_1.el2('var');
exports.video = element_1.el2('video');
exports.wbr = element_1.el2('wbr');
exports.xmp = element_1.el2('xmp');

},{"./element":"bbLX"}],"UU8h":[function(require,module,exports) {
"use strict";
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("./utils/dom");
var arrays_1 = require("tempo-std/lib/arrays");
var DOMUntilTemplate = /** @class */ (function () {
    function DOMUntilTemplate(options, children) {
        this.options = options;
        this.children = children;
    }
    DOMUntilTemplate.prototype.render = function (ctx, state) {
        var children = this.children;
        var _a = this.options, refId = _a.refId, repeatUntil = _a.repeatUntil;
        var _b = ctx.withAppendToReference(refId), newCtx = _b.ctx, ref = _b.ref;
        var childrenViews = [];
        var view = {
            change: function (state) {
                var currentLength = childrenViews.length;
                var index = 0;
                var _loop_1 = function () {
                    var value = repeatUntil(state, index);
                    if (typeof value === 'undefined')
                        return "break";
                    if (index < currentLength) {
                        // replace existing
                        var filteredViews = childrenViews[index];
                        for (var _i = 0, filteredViews_1 = filteredViews; _i < filteredViews_1.length; _i++) {
                            var view_1 = filteredViews_1[_i];
                            view_1.change(value);
                        }
                    }
                    else {
                        // add node
                        childrenViews.push(arrays_1.map(function (el) { return el.render(newCtx, value); }, children));
                    }
                    index++;
                };
                while (true) {
                    var state_1 = _loop_1();
                    if (state_1 === "break")
                        break;
                }
                var i = index;
                // remove extra nodes
                while (i < currentLength) {
                    for (var _i = 0, _a = childrenViews[i]; _i < _a.length; _i++) {
                        var c = _a[_i];
                        c.destroy();
                    }
                    i++;
                }
                childrenViews = childrenViews.slice(0, index);
            },
            destroy: function () {
                dom_1.removeNode(ref);
                for (var _i = 0, childrenViews_1 = childrenViews; _i < childrenViews_1.length; _i++) {
                    var childViews = childrenViews_1[_i];
                    for (var _a = 0, childViews_1 = childViews; _a < childViews_1.length; _a++) {
                        var view_2 = childViews_1[_a];
                        view_2.destroy();
                    }
                }
                childrenViews = [];
            },
            request: function (query) {
                for (var _i = 0, childrenViews_2 = childrenViews; _i < childrenViews_2.length; _i++) {
                    var childViews = childrenViews_2[_i];
                    for (var _a = 0, childViews_2 = childViews; _a < childViews_2.length; _a++) {
                        var view_3 = childViews_2[_a];
                        view_3.request(query);
                    }
                }
            }
        };
        view.change(state);
        return view;
    };
    return DOMUntilTemplate;
}());
exports.DOMUntilTemplate = DOMUntilTemplate;
exports.until = function (options) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new DOMUntilTemplate(options, arrays_1.map(dom_1.domChildToTemplate, children));
};

},{"./utils/dom":"TnZD","tempo-std/lib/arrays":"LAOm"}],"kxUV":[function(require,module,exports) {
"use strict";
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var until_1 = require("./until");
exports.forEach = function (options) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return until_1.until.apply(void 0, __spreadArrays([{
            refId: options.refId || 't:for_each',
            repeatUntil: function (state, index) { return state[index]; }
        }], children));
};

},{"./until":"UU8h"}],"dozB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("tempo-dom/lib/html");

var for_each_1 = require("tempo-dom/lib/for_each");

exports.list = html_1.ul({}, for_each_1.forEach({}, html_1.li({
  attrs: {
    className: String
  }
}, String)));
},{"tempo-dom/lib/html":"zQMt","tempo-dom/lib/for_each":"kxUV"}],"JKII":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("tempo-dom/lib/html");

exports.deep = html_1.div({
  attrs: {
    id: function id(s) {
      return s.id;
    }
  }
}, html_1.div({}, html_1.h1({}, 'Welcome ', function (s) {
  return s.name;
}), html_1.address({}, html_1.div({}, 'Address:'), html_1.div({}, function (s) {
  return s.address.line1;
}), html_1.div({}, function (s) {
  return s.address.line2;
})), html_1.article({}, function (s) {
  return s.paragraph;
})));
},{"tempo-dom/lib/html":"zQMt"}],"Na9D":[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./dom"));
__export(require("./set_attribute"));

},{"./dom":"TnZD","./set_attribute":"BEVE"}],"OJrv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
/*
Copyright 2019 Google LLC
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    https://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
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
            if (typeof newAction !== 'undefined') {
                _this.dispatch(newAction);
            }
        });
    };
    DOMContext.prototype.withAppendToReference = function (refId) {
        var ref = this.doc.createComment(refId || 't:ref');
        this.append(ref);
        return {
            ctx: this.withAppend(utils_1.insertFBefore(ref)),
            ref: ref
        };
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

},{"./utils":"Na9D"}],"izmn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("tempo-dom/lib/html");

exports.attribute = html_1.div({
  attrs: {
    id: function id(s) {
      return s.id;
    },
    className: function className(s) {
      return s.className;
    },
    title: function title(s) {
      return s.title;
    }
  }
}, 'content');
},{"tempo-dom/lib/html":"zQMt"}],"qnhq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("tempo-dom/lib/html");

exports.style = html_1.div({
  styles: {
    backgroundColor: function backgroundColor(s) {
      return s.backgroundColor;
    },
    color: function color(s) {
      return s.color;
    },
    border: function border(s) {
      return s.border;
    }
  }
}, 'content');
},{"tempo-dom/lib/html":"zQMt"}],"jpZy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("tempo-dom/lib/html");

exports.event = html_1.button({
  events: {
    click: function click(state) {
      return state;
    }
  }
}, 'click me');
},{"tempo-dom/lib/html":"zQMt"}],"YbU7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("tempo-dom/lib/html");

exports.property = html_1.input({
  attrs: {
    value: function value(s) {
      return s.value;
    },
    disabled: function disabled(s) {
      return s.disabled;
    }
  }
});
},{"tempo-dom/lib/html":"zQMt"}],"ZCfc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var list_1 = require("./template/list");

var deep_1 = require("./template/deep");

var context_1 = require("tempo-dom/lib/context");

var attribute_1 = require("./template/attribute");

var styles_1 = require("./template/styles");

var events_1 = require("./template/events");

var property_1 = require("./template/property");

var ctx = context_1.DOMContext.fromElement(document.getElementById('test'), function () {});

exports.renderListElements = function (numbers) {
  list_1.list.render(ctx, numbers);
};

exports.renderListAndUpdate = function (numbers) {
  var view = list_1.list.render(ctx, []);

  for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var nums = numbers_1[_i];
    view.change(nums);
  }
};

exports.renderListElementsAndDestroy = function (numbers) {
  var view = list_1.list.render(ctx, numbers);
  view.destroy();
};

exports.renderDeepAndUpdate = function (values) {
  var view = deep_1.deep.render(ctx, values[0]);

  for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var v = values_1[_i];
    view.change(v);
  }
};

exports.updateAttributes = function (values) {
  var view = attribute_1.attribute.render(ctx, values[0]);

  for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
    var v = values_2[_i];
    view.change(v);
  }
};

exports.updateProperty = function (values) {
  var view = property_1.property.render(ctx, values[0]);

  for (var _i = 0, values_3 = values; _i < values_3.length; _i++) {
    var v = values_3[_i];
    view.change(v);
  }
};

exports.updateStyles = function (values) {
  var view = styles_1.style.render(ctx, values[0]);

  for (var _i = 0, values_4 = values; _i < values_4.length; _i++) {
    var v = values_4[_i];
    view.change(v);
  }
};

exports.updateAndTriggerEvents = function (values) {
  var view = events_1.event.render(ctx, values[0]);
  var el = document.getElementById('test').firstElementChild;

  for (var _i = 0, values_5 = values; _i < values_5.length; _i++) {
    var v = values_5[_i];
    el.click();
    view.change(v);
  }
};

var anyWin = window;
anyWin.__tests__ = {
  renderListElements: exports.renderListElements,
  renderListAndUpdate: exports.renderListAndUpdate,
  renderListElementsAndDestroy: exports.renderListElementsAndDestroy,
  renderDeepAndUpdate: exports.renderDeepAndUpdate,
  updateAttributes: exports.updateAttributes,
  updateStyles: exports.updateStyles,
  updateProperty: exports.updateProperty,
  updateAndTriggerEvents: exports.updateAndTriggerEvents
};
},{"./template/list":"dozB","./template/deep":"JKII","tempo-dom/lib/context":"OJrv","./template/attribute":"izmn","./template/styles":"qnhq","./template/events":"jpZy","./template/property":"YbU7"}]},{},["ZCfc"], null)
//# sourceMappingURL=main.js.map