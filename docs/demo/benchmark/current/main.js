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
})({"UNaj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapArray = function (arr, f) {
    var length = arr.length;
    var buff = new Array(length);
    for (var i = 0; i < length; i++) {
        buff[i] = f(arr[i]);
    }
    return buff;
};

},{}],"AxMU":[function(require,module,exports) {
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
var map_1 = require("@tempo/core/lib/util/map");
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
        var s = map_1.mapArray(Object.keys(value), function (k) { return k + ": " + value[k] + ";"; }).join(' ');
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
    setAttribute(el, name, value === true || value === 'true' ? 'true' : value === false ? 'false' : null);
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

},{"@tempo/core/lib/util/map":"UNaj"}],"QBLY":[function(require,module,exports) {
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

},{"./utils/set_attribute":"AxMU"}],"TJFn":[function(require,module,exports) {
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = require("./utils/dom");
var DOMBaseNodeView = /** @class */ (function () {
    function DOMBaseNodeView(node, children, beforeDestroy) {
        this.node = node;
        this.children = children;
        this.beforeDestroy = beforeDestroy;
    }
    DOMBaseNodeView.prototype.destroy = function () {
        if (this.beforeDestroy)
            this.beforeDestroy();
        dom_1.removeNode(this.node);
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var c = _a[_i];
            c.destroy();
        }
    };
    return DOMBaseNodeView;
}());
exports.DOMBaseNodeView = DOMBaseNodeView;
var DOMStaticNodeView = /** @class */ (function (_super) {
    __extends(DOMStaticNodeView, _super);
    function DOMStaticNodeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.kind = 'static';
        return _this;
    }
    return DOMStaticNodeView;
}(DOMBaseNodeView));
exports.DOMStaticNodeView = DOMStaticNodeView;
var DOMDynamicNodeView = /** @class */ (function (_super) {
    __extends(DOMDynamicNodeView, _super);
    function DOMDynamicNodeView(node, children, change, beforeDestroy) {
        var _this = _super.call(this, node, children, beforeDestroy) || this;
        _this.node = node;
        _this.children = children;
        _this.change = change;
        _this.beforeDestroy = beforeDestroy;
        _this.kind = 'dynamic';
        return _this;
    }
    return DOMDynamicNodeView;
}(DOMBaseNodeView));
exports.DOMDynamicNodeView = DOMDynamicNodeView;

},{"./utils/dom":"KfbX"}],"jTie":[function(require,module,exports) {
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
        node.nodeValue = newContent;
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

},{"./node_view":"TJFn"}],"KfbX":[function(require,module,exports) {
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
function insertBefore(ref) {
    return function (node) {
        if (ref.parentElement != null) {
            ref.parentElement.insertBefore(node, ref);
        }
    };
}
exports.insertBefore = insertBefore;
function filterDynamics(children) {
    return children.filter(function (child) { return child.kind === 'dynamic'; });
}
exports.filterDynamics = filterDynamics;
function domChildToTemplate(dom) {
    if (typeof dom === 'string' || typeof dom === 'function')
        return text_1.text(dom);
    else
        return dom;
}
exports.domChildToTemplate = domChildToTemplate;
function processAttribute(el, name, value, acc) {
    var set = dom_attributes_mapper_1.htmlAttributeMap[name] || set_attribute_1.setAttribute;
    if (typeof value === 'function') {
        var f = function (state) { return set(el, name, value(state)); };
        acc.push(f);
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
        var f = function (state) { return set_attribute_1.setOneStyle(el, name, value(state)); };
        acc.push(f);
    }
    else {
        set_attribute_1.setOneStyle(el, name, value);
    }
    return acc;
}
exports.processStyle = processStyle;

},{"../dom_attributes_mapper":"QBLY","./set_attribute":"AxMU","../text":"jTie"}],"Mmj0":[function(require,module,exports) {
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
var node_view_1 = require("./node_view");
var map_1 = require("@tempo/core/lib/util/map");
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
    function DOMElement(createElement, attrs, events, styles, afterrender, beforechange, afterchange, beforedestroy, children) {
        this.createElement = createElement;
        this.attrs = attrs;
        this.events = events;
        this.styles = styles;
        this.afterrender = afterrender;
        this.beforechange = beforechange;
        this.afterchange = afterchange;
        this.beforedestroy = beforedestroy;
        this.children = children;
    }
    DOMElement.prototype.render = function (ctx, state) {
        var _this = this;
        var el = this.createElement(ctx.doc);
        var value = undefined;
        var allDynamics = [];
        for (var _i = 0, _a = this.attrs; _i < _a.length; _i++) {
            var o = _a[_i];
            dom_1.processAttribute(el, o.name, o.value, allDynamics);
        }
        for (var _b = 0, _c = this.events; _b < _c.length; _b++) {
            var o = _c[_b];
            dom_1.processEvent(el, o.name, o.value, ctx.dispatch, allDynamics);
        }
        for (var _d = 0, _e = this.styles; _d < _e.length; _d++) {
            var o = _e[_d];
            dom_1.processStyle(el, o.name, o.value, allDynamics);
        }
        for (var _f = 0, allDynamics_1 = allDynamics; _f < allDynamics_1.length; _f++) {
            var dy = allDynamics_1[_f];
            dy(state);
        }
        // children
        var appendChild = function (n) { return el.appendChild(n); };
        var newCtx = ctx.withAppend(appendChild).withParent(el);
        var views = map_1.mapArray(this.children, function (child) { return child.render(newCtx, state); });
        ctx.append(el);
        if (this.afterrender) {
            value = applyAfterRender(this.afterrender, el, ctx, state);
        }
        var dynamicChildren = map_1.mapArray(dom_1.filterDynamics(views), function (child) { return function (state) { return child.change(state); }; });
        allDynamics.push.apply(allDynamics, dynamicChildren);
        if (this.beforechange) {
            var change_1 = applyChange(this.beforechange, el, ctx);
            var update = function (state) { value = change_1(state, value); };
            allDynamics.unshift(update);
        }
        if (this.afterchange) {
            var change_2 = applyChange(this.afterchange, el, ctx);
            var update = function (state) { value = change_2(state, value); };
            allDynamics.push(update);
        }
        var beforedestroyf = this.beforedestroy && (function () { return _this.beforedestroy(el, ctx, value); });
        if (allDynamics.length > 0) {
            return new node_view_1.DOMDynamicNodeView(el, views, function (state) {
                for (var _i = 0, allDynamics_2 = allDynamics; _i < allDynamics_2.length; _i++) {
                    var f = allDynamics_2[_i];
                    f(state);
                }
            }, beforedestroyf);
        }
        else {
            return new node_view_1.DOMStaticNodeView(el, views, beforedestroyf);
        }
    };
    return DOMElement;
}());
exports.DOMElement = DOMElement;
function extractAttrs(attrs) {
    return map_1.mapArray(Object.keys(attrs || {}), function (attName) {
        var name = attName.toLowerCase();
        name = dom_attributes_mapper_1.attributeNameMap[name] || name;
        return {
            name: name,
            value: attrs[attName]
        };
    });
}
function extractEvents(attrs) {
    return map_1.mapArray(Object.keys(attrs || {}), function (eventName) {
        var name = "on" + eventName.toLowerCase();
        return {
            name: name,
            value: attrs[eventName]
        };
    });
}
function extractStyles(attrs) {
    return map_1.mapArray(Object.keys(attrs || {}), function (name) { return ({
        name: name,
        value: attrs[name]
    }); });
}
var makeCreateElement = function (name) { return function (doc) { return doc.createElement(name); }; };
exports.el = function (name, attributes) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    return new DOMElement(makeCreateElement(name), extractAttrs(attributes.attrs), extractEvents(attributes.events), extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, map_1.mapArray(children, dom_1.domChildToTemplate));
};
exports.el2 = function (name) { return function (attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new DOMElement(makeCreateElement(name), extractAttrs(attributes.attrs), extractEvents(attributes.events), extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, map_1.mapArray(children, dom_1.domChildToTemplate));
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
    return new DOMElement(makeCreateElementNS(namespace, name), extractAttrs(attributes.attrs), extractEvents(attributes.events), extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, map_1.mapArray(children, dom_1.domChildToTemplate));
};
exports.elNS2 = function (namespace, name) { return function (attributes) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new DOMElement(makeCreateElementNS(namespace, name), extractAttrs(attributes.attrs), extractEvents(attributes.events), extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, map_1.mapArray(children, dom_1.domChildToTemplate));
}; };

},{"./utils/dom":"KfbX","./node_view":"TJFn","@tempo/core/lib/util/map":"UNaj","./dom_attributes_mapper":"QBLY"}],"YzxN":[function(require,module,exports) {
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

},{"./element":"Mmj0"}],"hYCi":[function(require,module,exports) {
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
var map_1 = require("@tempo/core/lib/util/map");
var DOMUntilView = /** @class */ (function () {
    function DOMUntilView(ref, repeatUntil, ctx, children) {
        this.ref = ref;
        this.repeatUntil = repeatUntil;
        this.ctx = ctx;
        this.children = children;
        this.kind = 'dynamic';
        this.childrenView = [];
    }
    DOMUntilView.prototype.destroy = function () {
        dom_1.removeNode(this.ref);
        for (var _i = 0, _a = this.childrenView; _i < _a.length; _i++) {
            var c = _a[_i];
            for (var _b = 0, c_1 = c; _b < c_1.length; _b++) {
                var e = c_1[_b];
                e.destroy();
            }
        }
        this.childrenView = [];
    };
    DOMUntilView.prototype.change = function (state) {
        var _this = this;
        var currentViewLength = this.childrenView.length;
        var index = 0;
        var _loop_1 = function () {
            var value = this_1.repeatUntil(state, index);
            if (typeof value === 'undefined')
                return "break";
            if (index < currentViewLength) {
                // replace existing
                var filtered = dom_1.filterDynamics(this_1.childrenView[index]);
                for (var _i = 0, filtered_1 = filtered; _i < filtered_1.length; _i++) {
                    var v = filtered_1[_i];
                    v.change(value);
                }
            }
            else {
                // add node
                this_1.childrenView.push(map_1.mapArray(this_1.children, function (el) { return el.render(_this.ctx, value); }));
            }
            index++;
        };
        var this_1 = this;
        while (true) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
        var i = index;
        // remove extra nodes
        while (i < currentViewLength) {
            for (var _i = 0, _a = this.childrenView[i]; _i < _a.length; _i++) {
                var c = _a[_i];
                c.destroy();
            }
            i++;
        }
        this.childrenView = this.childrenView.slice(0, index);
    };
    return DOMUntilView;
}());
exports.DOMUntilView = DOMUntilView;
var DOMUntilTemplate = /** @class */ (function () {
    function DOMUntilTemplate(options, children) {
        this.options = options;
        this.children = children;
    }
    DOMUntilTemplate.prototype.render = function (ctx, state) {
        var ref = ctx.doc.createComment(this.options.refId || 't:until');
        ctx.append(ref);
        var view = new DOMUntilView(ref, this.options.repeatUntil, ctx.withAppend(dom_1.insertBefore(ref)), this.children);
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
    return new DOMUntilTemplate(options, map_1.mapArray(children, dom_1.domChildToTemplate));
};

},{"./utils/dom":"KfbX","@tempo/core/lib/util/map":"UNaj"}],"xmUo":[function(require,module,exports) {
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

},{"./until":"hYCi"}],"dozB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("@tempo/dom/lib/html");

var for_each_1 = require("@tempo/dom/lib/for_each");

exports.list = html_1.ul({}, for_each_1.forEach({}, html_1.li({
  attrs: {
    className: String
  }
}, String)));
},{"@tempo/dom/lib/html":"YzxN","@tempo/dom/lib/for_each":"xmUo"}],"JKII":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("@tempo/dom/lib/html");

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
},{"@tempo/dom/lib/html":"YzxN"}],"TsAd":[function(require,module,exports) {
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

},{}],"izmn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("@tempo/dom/lib/html");

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
},{"@tempo/dom/lib/html":"YzxN"}],"qnhq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("@tempo/dom/lib/html");

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
},{"@tempo/dom/lib/html":"YzxN"}],"jpZy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("@tempo/dom/lib/html");

exports.event = html_1.button({
  events: {
    click: function click(state) {
      return state;
    }
  }
}, 'click me');
},{"@tempo/dom/lib/html":"YzxN"}],"YbU7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var html_1 = require("@tempo/dom/lib/html");

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
},{"@tempo/dom/lib/html":"YzxN"}],"ZCfc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var list_1 = require("./template/list");

var deep_1 = require("./template/deep");

var context_1 = require("@tempo/dom/lib/context");

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
},{"./template/list":"dozB","./template/deep":"JKII","@tempo/dom/lib/context":"TsAd","./template/attribute":"izmn","./template/styles":"qnhq","./template/events":"jpZy","./template/property":"YbU7"}]},{},["ZCfc"], null)
//# sourceMappingURL=main.js.map