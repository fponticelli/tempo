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
})({"dDaf":[function(require,module,exports) {
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
exports.setBoolProperty = exports.setProperty = exports.setNumberProperty = exports.setAttribute = void 0;
function setAttribute(el, name, value) {
    if (value == null || value === '') {
        el.removeAttribute(name);
    }
    else {
        el.setAttribute(name, value);
    }
}
exports.setAttribute = setAttribute;
function setNumberProperty(el, name, value) {
    var anyEl = el;
    if (value == null) {
        anyEl[name] = null;
    }
    else {
        anyEl[name] = Number(value);
    }
}
exports.setNumberProperty = setNumberProperty;
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
function setBoolProperty(el, name, value) {
    var anyEl = el;
    if (value == null) {
        anyEl[name] = null;
    }
    else {
        anyEl[name] = value === name;
    }
}
exports.setBoolProperty = setBoolProperty;

},{}],"b01c":[function(require,module,exports) {
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
exports.htmlAttributeMap = exports.attributeNameMap = void 0;
var set_attribute_1 = require("./set_attribute");
exports.attributeNameMap = {
    acceptcharset: 'accept-charset',
    acceptCharset: 'accept-charset',
    asattr: 'as',
    asAttr: 'as',
    classname: 'class',
    className: 'class',
    httpequiv: 'http-equiv',
    httpEquiv: 'http-equiv',
    htmlfor: 'for',
    htmlFor: 'for'
};
exports.htmlAttributeMap = {
    // html
    checked: set_attribute_1.setBoolProperty,
    multiple: set_attribute_1.setBoolProperty,
    muted: set_attribute_1.setBoolProperty,
    selected: set_attribute_1.setBoolProperty,
    value: set_attribute_1.setProperty,
    // svg
    useCurrentView: set_attribute_1.setBoolProperty,
    currentView: set_attribute_1.setProperty,
    currentScale: set_attribute_1.setNumberProperty
    // 'accept-charset': setSpaceSeparated,
    // acceptcharset: setSpaceSeparated,
    // async: setBoolAttribute,
    // autofocus: setBoolAttribute,
    // autoplay: setBoolAttribute,
    // class: setSpaceSeparated,
    // contenteditable: setEnumBoolAttribute,
    // controls: setBoolAttribute,
    // default: setBoolAttribute,
    // defer: setBoolAttribute,
    // disabled: setBoolAttribute,
    // draggable: setEnumBoolAttribute,
    // formnovalidate: setBoolAttribute,
    // headers: setSpaceSeparated,
    // hidden: setBoolAttribute,
    // ismap: setBoolAttribute,
    // itemscope: setBoolAttribute,
    // loop: setBoolAttribute,
    // nomodule: setBoolAttribute,
    // novalidate: setBoolAttribute,
    // open: setBoolAttribute,
    // ping: setSpaceSeparated,
    // playsinline: setBoolAttribute,
    // readonly: setBoolAttribute,
    // rel: setSpaceSeparated,
    // required: setBoolAttribute,
    // reversed: setBoolAttribute,
    // sizes: setCommaSeparated,
    // srcset: setCommaSeparated,
    // style: setStyleAttribute,
    // typemustmatch: setBoolAttribute,
};

},{"./set_attribute":"dDaf"}],"lbKn":[function(require,module,exports) {
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
exports.setElStyle = exports.setElAttribute = exports.makeCreateElementNS = exports.makeCreateElement = exports.insertFBefore = exports.removeNode = void 0;
var attributes_mapper_1 = require("./attributes_mapper");
var set_attribute_1 = require("./set_attribute");
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
function makeCreateElement(name) {
    return function (doc) { return doc.createElement(name); };
}
exports.makeCreateElement = makeCreateElement;
function makeCreateElementNS(namespace, name) {
    return function (doc) { return doc.createElementNS(namespace, name); }; // TODO
}
exports.makeCreateElementNS = makeCreateElementNS;
function setElAttribute(el, name, value) {
    if (attributes_mapper_1.htmlAttributeMap[name] !== undefined) {
        attributes_mapper_1.htmlAttributeMap[name](el, name, value);
    }
    else {
        set_attribute_1.setAttribute(el, name, value);
    }
    // let set = attributeMap[name] || setAttribute
    // set(el, name, value)
}
exports.setElAttribute = setElAttribute;
function setElStyle(el, name, value) {
    if (value == null) {
        el.style.removeProperty(name);
    }
    else {
        el.style.setProperty(name, value);
    }
}
exports.setElStyle = setElStyle;

},{"./attributes_mapper":"b01c","./set_attribute":"dDaf"}],"H1te":[function(require,module,exports) {
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
exports.text = void 0;
var dom_1 = require("./dom");
var DerivedTextTemplate = /** @class */ (function () {
    function DerivedTextTemplate(makeContent) {
        this.makeContent = makeContent;
    }
    DerivedTextTemplate.prototype.render = function (ctx, state) {
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
    return DerivedTextTemplate;
}());
var LiteralTextTemplate = /** @class */ (function () {
    function LiteralTextTemplate(content) {
        this.content = content;
    }
    LiteralTextTemplate.prototype.render = function (ctx, _) {
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
    return LiteralTextTemplate;
}());
function text(content) {
    if (typeof content === 'function') {
        return new DerivedTextTemplate(content);
    }
    else {
        return new LiteralTextTemplate(content || '');
    }
}
exports.text = text;

},{"./dom":"lbKn"}],"g3Xg":[function(require,module,exports) {
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
exports.merge = exports.removeFields = exports.keys = void 0;
function keys(object) {
    return Object.keys(object);
}
exports.keys = keys;
function removeFields(ob) {
    var fields = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fields[_i - 1] = arguments[_i];
    }
    return keys(ob).reduce(function (acc, key) {
        if (fields.indexOf(key) < 0)
            acc[key] = ob[key];
        return acc;
    }, {});
}
exports.removeFields = removeFields;
function merge(a, b) {
    return Object.assign({}, a, b);
}
exports.merge = merge;

},{}],"nFed":[function(require,module,exports) {
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
exports.resolveAttribute = exports.attributeToHandler = exports.mapAttributes = exports.mapAttributeOrElse = exports.mapAttribute = exports.applyAttributes = void 0;
var objects_1 = require("tempo-std/lib/objects");
function applyAttributes(attrA, attrB, apply) {
    if (attrA === undefined)
        return undefined;
    if (attrB === undefined)
        return undefined;
    if (typeof attrA === 'function' && typeof attrB === 'function') {
        return function (state) {
            var resA = attrA(state);
            var resB = attrB(state);
            if (resA !== undefined && resB !== undefined)
                return apply(resA, resB);
            else
                return undefined;
        };
    }
    else if (typeof attrA === 'function') {
        return function (state) {
            var resA = attrA(state);
            if (resA !== undefined)
                return apply(resA, attrB);
            else
                return undefined;
        };
    }
    else if (typeof attrB === 'function') {
        return function (state) {
            var resB = attrB(state);
            if (resB !== undefined)
                return apply(attrA, resB);
            else
                return undefined;
        };
    }
    else {
        return apply(attrA, attrB);
    }
}
exports.applyAttributes = applyAttributes;
function mapAttribute(attr, map) {
    if (attr === undefined) {
        return undefined;
    }
    else if (typeof attr === 'function') {
        return function (state) {
            var res = attr(state);
            if (res !== undefined)
                return map(res);
            else
                return undefined;
        };
    }
    else {
        return map(attr);
    }
}
exports.mapAttribute = mapAttribute;
function mapAttributeOrElse(attr, map, alt) {
    if (attr === undefined) {
        return alt;
    }
    else if (typeof attr === 'function') {
        return function (state) {
            var res = attr(state);
            if (res !== undefined)
                return map(res);
            else
                return alt;
        };
    }
    else {
        return map(attr);
    }
}
exports.mapAttributeOrElse = mapAttributeOrElse;
function mapAttributes(attributes, map) {
    var ks = objects_1.keys(attributes);
    var isDynamic = ks.some(function (k) { return typeof attributes[k] === 'function'; });
    if (isDynamic) {
        return function (state) {
            var o = ks.reduce(function (acc, k) {
                acc[k] = resolveAttribute(attributes[k])(state);
                return acc;
            }, {});
            return map(o);
        };
    }
    else {
        return map(attributes);
    }
}
exports.mapAttributes = mapAttributes;
function attributeToHandler(attr, handler) {
    if (attr === undefined || handler === undefined) {
        return function () {
            return undefined;
        };
    }
    else if (typeof attr === 'function') {
        return function (state, event, element) {
            var res = attr(state);
            if (res !== undefined)
                return handler(res, event, element);
            else
                return undefined;
        };
    }
    else {
        return function (_, event, element) {
            return handler(attr, event, element);
        };
    }
}
exports.attributeToHandler = attributeToHandler;
function resolveAttribute(attr) {
    if (typeof attr === 'function') {
        return attr;
    }
    else {
        return function (_) { return attr; };
    }
}
exports.resolveAttribute = resolveAttribute;

},{"tempo-std/lib/objects":"g3Xg"}],"pwth":[function(require,module,exports) {
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
exports.isJust = exports.isNothing = exports.just = exports.nothing = void 0;
exports.nothing = undefined;
function just(value) {
    return value;
}
exports.just = just;
function isNothing(maybe) {
    return maybe == null;
}
exports.isNothing = isNothing;
function isJust(maybe) {
    return maybe != null;
}
exports.isJust = isJust;

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
exports.ofIterableIterator = exports.remove = exports.distinctByPredicate = exports.distinctPrimitive = exports.fill = exports.numbersRange = exports.range = exports.sort = exports.makeCompare = exports.concat = exports.each = exports.any = exports.all = exports.foldLeft = exports.flatten = exports.filter = exports.hasValues = exports.isEmpty = exports.makeEquals = exports.equals = exports.tail = exports.head = exports.flatMap = exports.map = void 0;
/**
 * Utility functions to manipulate `Array` values.
 */
var maybe_1 = require("./maybe");
var objects_1 = require("./objects");
function map(arr, f) {
    var length = arr.length;
    var buff = new Array(length);
    for (var i = 0; i < length; i++) {
        buff[i] = f(arr[i]);
    }
    return buff;
}
exports.map = map;
function flatMap(arr, f) {
    var buff = new Array();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        buff.push.apply(buff, f(el));
    }
    return buff;
}
exports.flatMap = flatMap;
function head(arr) {
    return arr.length > 0 ? arr[0] : maybe_1.nothing;
}
exports.head = head;
function tail(arr) {
    return arr.slice(1);
}
exports.tail = tail;
function equals(a, b, predicate) {
    if (a.length !== b.length)
        return false;
    else {
        for (var i = 0; i < a.length; i++) {
            if (!predicate(a[i], b[i]))
                return false;
        }
        return true;
    }
}
exports.equals = equals;
function makeEquals(predicate) {
    return function (a, b) {
        return equals(a, b, predicate);
    };
}
exports.makeEquals = makeEquals;
function isEmpty(arr) {
    return arr.length === 0;
}
exports.isEmpty = isEmpty;
function hasValues(arr) {
    return arr.length > 0;
}
exports.hasValues = hasValues;
function filter(arr, predicate) {
    var buff = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var a = arr_2[_i];
        if (predicate(a))
            buff.push(a);
    }
    return buff;
}
exports.filter = filter;
function flatten(arr) {
    var _a;
    return (_a = []).concat.apply(_a, arr);
}
exports.flatten = flatten;
function foldLeft(arr, f, b) {
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var a = arr_3[_i];
        b = f(b, a);
    }
    return b;
}
exports.foldLeft = foldLeft;
function all(arr, predicate) {
    for (var _i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
        var a = arr_4[_i];
        if (!predicate(a)) {
            return false;
        }
    }
    return true;
}
exports.all = all;
function any(arr, predicate) {
    for (var _i = 0, arr_5 = arr; _i < arr_5.length; _i++) {
        var a = arr_5[_i];
        if (predicate(a)) {
            return true;
        }
    }
    return false;
}
exports.any = any;
function each(arr, f) {
    for (var _i = 0, arr_6 = arr; _i < arr_6.length; _i++) {
        var a = arr_6[_i];
        f(a);
    }
}
exports.each = each;
function concat() {
    var _a;
    var arrs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrs[_i] = arguments[_i];
    }
    return (_a = []).concat.apply(_a, arrs);
}
exports.concat = concat;
function makeCompare(comparef, shorterFirst) {
    if (shorterFirst === void 0) { shorterFirst = true; }
    return function (a, b) {
        if (a.length < b.length) {
            return -1 * (shorterFirst ? 1 : -1);
        }
        else if (a.length > b.length) {
            return 1 * (shorterFirst ? 1 : -1);
        }
        for (var i = 0; i < a.length; i++) {
            var ord = comparef(a[i], b[i]);
            if (ord !== 0)
                return ord;
        }
        return 0;
    };
}
exports.makeCompare = makeCompare;
function sort(compare, arr) {
    return arr.slice().sort(compare);
}
exports.sort = sort;
function range(length, f) {
    var buff = new Array(length);
    for (var i = 0; i < length; i++)
        buff[i] = f(i);
    return buff;
}
exports.range = range;
function numbersRange(length, startAt) {
    if (startAt === void 0) { startAt = 0; }
    return range(length, function (i) { return startAt + i; });
}
exports.numbersRange = numbersRange;
function fill(length, value) {
    return range(length, function () { return value; });
}
exports.fill = fill;
function distinctPrimitive(values) {
    return Array.from(new Set(values));
}
exports.distinctPrimitive = distinctPrimitive;
function distinctByPredicate(values, predicate) {
    var map = {};
    values.forEach(function (v) {
        map[predicate(v)] = v;
    });
    return objects_1.keys(map).map(function (k) { return map[k]; });
}
exports.distinctByPredicate = distinctByPredicate;
function remove(arr, item, predicate) {
    var index;
    if (predicate !== undefined) {
        index = arr.findIndex(predicate);
    }
    else {
        index = arr.indexOf(item);
    }
    if (index < 0) {
        return false;
    }
    else {
        arr.splice(index, 1);
        return true;
    }
}
exports.remove = remove;
function ofIterableIterator(it) {
    var buff = [];
    for (var r = it.next(); !r.done; r = it.next()) {
        buff.push(r.value);
    }
    return buff;
}
exports.ofIterableIterator = ofIterableIterator;

},{"./maybe":"pwth","./objects":"g3Xg"}],"yiha":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMBuilder = exports.toggleToString = exports.booleanToString = exports.stylesToString = exports.lostOrRecordToCommaSeparated = exports.listOrRecordToSpaceSeparated = exports.numberPairsListToString = exports.numbersListToString = exports.listOrRecordToString = exports.extractDerived = exports.extractLiterals = exports.childOrBuilderToTemplate = void 0;
var text_1 = require("./text");
var objects_1 = require("tempo-std/lib/objects");
function childOrBuilderToTemplate(src) {
    if (src === undefined) {
        return text_1.text('');
    }
    else if (typeof src.build === 'function') {
        return src.build();
    }
    else if (typeof src === 'string' || typeof src === 'function') {
        return text_1.text(src);
    }
    else {
        return src;
    }
}
exports.childOrBuilderToTemplate = childOrBuilderToTemplate;
function extractLiterals(record) {
    return objects_1.keys(record).reduce(function (list, name) {
        if (typeof record[name] === 'string') {
            list.push({ name: name, value: record[name] });
        }
        return list;
    }, []);
}
exports.extractLiterals = extractLiterals;
function extractDerived(record) {
    return objects_1.keys(record).reduce(function (list, name) {
        if (typeof record[name] === 'function') {
            list.push({
                name: name,
                resolve: record[name]
            });
        }
        return list;
    }, []);
}
exports.extractDerived = extractDerived;
function listOrRecordToString(src, separator) {
    if (typeof src === 'string') {
        return src;
    }
    else if (src == null) {
        return undefined;
    }
    else if (Array.isArray(src)) {
        return src.join(separator);
    }
    else {
        return objects_1.keys(src)
            .reduce(function (list, key) {
            if (src[key])
                list.push(key);
            return list;
        }, [])
            .join(separator);
    }
}
exports.listOrRecordToString = listOrRecordToString;
function numbersListToString(src) {
    src = Array.isArray(src) ? src : [src];
    return src.join(' ');
}
exports.numbersListToString = numbersListToString;
function numberPairsListToString(src) {
    return src.map(function (_a) {
        var a = _a[0], b = _a[1];
        return a + "," + b;
    }).join(' ');
}
exports.numberPairsListToString = numberPairsListToString;
function listOrRecordToSpaceSeparated(src) {
    return listOrRecordToString(src, ' ');
}
exports.listOrRecordToSpaceSeparated = listOrRecordToSpaceSeparated;
function lostOrRecordToCommaSeparated(src) {
    return listOrRecordToString(src, ', ');
}
exports.lostOrRecordToCommaSeparated = lostOrRecordToCommaSeparated;
function stylesToString(src) {
    if (typeof src === 'string') {
        return src;
    }
    else {
        return objects_1.keys(src)
            .reduce(function (list, key) {
            if (src[key])
                list.push(key + ": " + src[key] + ";");
            return list;
        }, [])
            .join(' ');
    }
}
exports.stylesToString = stylesToString;
function booleanToString(src) {
    return "" + src;
}
exports.booleanToString = booleanToString;
function toggleToString(name) {
    return function (src) { return (src ? name : ''); };
}
exports.toggleToString = toggleToString;
var DOMBuilder = /** @class */ (function () {
    function DOMBuilder() {
        this._children = [];
        // transform
    }
    // children
    DOMBuilder.prototype.Append = function (el) {
        this._children.push(childOrBuilderToTemplate(el));
        return this;
    };
    DOMBuilder.prototype.AppendMany = function () {
        var _a;
        var els = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            els[_i] = arguments[_i];
        }
        (_a = this._children).push.apply(_a, els.map(childOrBuilderToTemplate));
        return this;
    };
    return DOMBuilder;
}());
exports.DOMBuilder = DOMBuilder;

},{"./text":"H1te","tempo-std/lib/objects":"g3Xg"}],"w1ev":[function(require,module,exports) {
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
exports.deepEqual = exports.strictEqual = void 0;
function strictEqual(a, b) {
    return a === b || (a !== a && b !== b);
}
exports.strictEqual = strictEqual;
function deepEqual(a, b) {
    if (strictEqual(a, b))
        return true;
    if (a == null || b == null)
        return false;
    var aIsArr = Array.isArray(a);
    var bIsArr = Array.isArray(b);
    if (aIsArr !== bIsArr)
        return false;
    if (aIsArr) {
        var aArr = a;
        var bArr = b;
        var aLength = aArr.length;
        if (aLength !== bArr.length)
            return false;
        for (var i = 0; i < aLength; i++) {
            if (!deepEqual(aArr[i], bArr[i]))
                return false;
        }
        return true;
    }
    var aIsDate = a instanceof Date;
    var bIsDate = b instanceof Date;
    if (aIsDate !== bIsDate)
        return false;
    if (aIsDate) {
        var aDate = a;
        var bDate = b;
        return +aDate === +bDate;
    }
    var aIsSet = a instanceof Set;
    var bIsSet = b instanceof Set;
    if (aIsSet !== bIsSet)
        return false;
    if (aIsSet) {
        var aSet = a;
        var bSet = b;
        if (aSet.size !== bSet.size)
            return false;
        var it_1 = aSet.keys();
        while (true) {
            var curr = it_1.next();
            if (curr.done)
                break;
            if (!bSet.has(curr.value))
                return false;
        }
        return true;
    }
    var aIsMap = a instanceof Map;
    var bIsMap = b instanceof Map;
    if (aIsMap !== bIsMap)
        return false;
    if (aIsMap) {
        var aMap = a;
        var bMap = b;
        var aMapLength = aMap.size;
        if (aMapLength !== bMap.size)
            return false;
        var it_2 = aMap.keys();
        while (true) {
            var curr = it_2.next();
            if (curr.done)
                break;
            if (!deepEqual(aMap.get(curr.value), bMap.get(curr.value)))
                return false;
        }
        return true;
    }
    var aIsObj = typeof a === 'object';
    var bIsObj = typeof b === 'object';
    if (aIsObj !== bIsObj)
        return false;
    if (aIsObj) {
        var aObj = a;
        var bObj = b;
        var aFields = Object.keys(aObj);
        var bFields = Object.keys(bObj);
        var aLength = aFields.length;
        if (aLength !== bFields.length)
            return false;
        for (var i = 0; i < aLength; i++) {
            var field = aFields[i];
            if (!bObj.hasOwnProperty(field))
                return false;
            if (!deepEqual(aObj[field], bObj[field]))
                return false;
        }
        return true;
    }
    return false;
}
exports.deepEqual = deepEqual;

},{}],"eDHy":[function(require,module,exports) {
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
exports.ComponentTemplate = void 0;
var arrays_1 = require("tempo-std/lib/arrays");
var dom_builder_1 = require("./dom_builder");
var equals_1 = require("tempo-std/lib/equals");
var ComponentTemplate = /** @class */ (function () {
    function ComponentTemplate(delayed, reducer, equal, children) {
        this.delayed = delayed;
        this.reducer = reducer;
        this.equal = equal;
        this.children = children.map(dom_builder_1.childOrBuilderToTemplate);
    }
    ComponentTemplate.prototype.render = function (ctx, state) {
        var _this = this;
        var _a;
        var equals = (_a = this.equal) !== null && _a !== void 0 ? _a : equals_1.strictEqual;
        var update;
        if (this.delayed) {
            var shouldRender_1 = true;
            update = function (state) {
                view.state = state;
                if (shouldRender_1) {
                    shouldRender_1 = false;
                    setTimeout(function () {
                        view.change(view.state);
                        shouldRender_1 = true;
                    });
                }
            };
        }
        else {
            update = function (state) {
                view.state = state;
                view.change(state);
            };
        }
        var innerDispatch = function (action) {
            var newState = _this.reducer(view.state, action);
            if (!equals(newState, view.state)) {
                // view.state = newState
                update(newState);
            }
            ctx.dispatch(action);
        };
        var newCtx = ctx.withDispatch(innerDispatch);
        var views = arrays_1.map(this.children, function (child) { return child.render(newCtx, state); });
        var view = {
            change: function (state) {
                view.state = state;
                for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                    var view_1 = views_1[_i];
                    view_1.change(state);
                }
            },
            destroy: function () {
                for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
                    var view_2 = views_2[_i];
                    view_2.destroy();
                }
            },
            request: function (query) {
                for (var _i = 0, views_3 = views; _i < views_3.length; _i++) {
                    var view_3 = views_3[_i];
                    view_3.request(query);
                }
            },
            state: state,
            dispatch: function (action) {
                innerDispatch(action);
            }
        };
        return view;
    };
    return ComponentTemplate;
}());
exports.ComponentTemplate = ComponentTemplate;

},{"tempo-std/lib/arrays":"LAOm","./dom_builder":"yiha","tempo-std/lib/equals":"w1ev"}],"uV5V":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.focusElement = exports.makeEmptyLifecycle = exports.compose = void 0;
function compose(a, b) {
    return function (state, element, ctx) {
        var al = a(state, element, ctx);
        var bl = b(state, element, ctx);
        return {
            beforeChange: function (state) {
                al.beforeChange(state);
                bl.beforeChange(state);
            },
            afterChange: function (state) {
                al.afterChange(state);
                bl.afterChange(state);
            },
            beforeDestroy: function () {
                al.beforeDestroy();
                bl.beforeDestroy();
            }
        };
    };
}
exports.compose = compose;
function makeEmptyLifecycle(state, element, ctx) {
    return {
        beforeChange: function (state) { },
        afterChange: function (state) { },
        beforeDestroy: function () { }
    };
}
exports.makeEmptyLifecycle = makeEmptyLifecycle;
function focusElement(state, element, ctx) {
    ;
    element.focus(); // TODO
    return {
        beforeChange: function (state) { },
        afterChange: function (state) { },
        beforeDestroy: function () { }
    };
}
exports.focusElement = focusElement;

},{}],"X9Ob":[function(require,module,exports) {
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
exports.DOMElement = void 0;
var dom_1 = require("./dom");
var arrays_1 = require("tempo-std/lib/arrays");
var DOMElement = /** @class */ (function () {
    function DOMElement(createElement, literalAttrs, derivedAttrs, literalStyles, derivedStyles, handlers, makeLifecycle, respond, children) {
        this.createElement = createElement;
        this.literalAttrs = literalAttrs;
        this.derivedAttrs = derivedAttrs;
        this.literalStyles = literalStyles;
        this.derivedStyles = derivedStyles;
        this.handlers = handlers;
        this.makeLifecycle = makeLifecycle;
        this.respond = respond;
        this.children = children;
    }
    DOMElement.prototype.render = function (ctx, state) {
        var _this = this;
        var respond = this.respond;
        var localState = state;
        var el = this.createElement(ctx.doc);
        for (var _i = 0, _a = this.literalAttrs; _i < _a.length; _i++) {
            var att = _a[_i];
            dom_1.setElAttribute(el, att.name, att.value);
        }
        for (var _b = 0, _c = this.derivedAttrs; _b < _c.length; _b++) {
            var att = _c[_b];
            dom_1.setElAttribute(el, att.name, att.resolve(localState));
        }
        for (var _d = 0, _e = this.literalStyles; _d < _e.length; _d++) {
            var stl = _e[_d];
            dom_1.setElStyle(el, stl.name, stl.value);
        }
        for (var _f = 0, _g = this.derivedStyles; _f < _g.length; _f++) {
            var stl = _g[_f];
            dom_1.setElStyle(el, stl.name, stl.resolve(localState));
        }
        var _loop_1 = function (handler) {
            el.addEventListener(handler.name, function (event) {
                var action = handler.callback(localState, event, el);
                if (action !== undefined) {
                    ctx.dispatch(action);
                }
            }, false);
        };
        for (var _h = 0, _j = this.handlers; _h < _j.length; _h++) {
            var handler = _j[_h];
            _loop_1(handler);
        }
        // children
        var appendChild = function (n) { return el.appendChild(n); };
        var newCtx = ctx.withAppend(appendChild);
        var views = arrays_1.map(this.children, function (child) { return child.render(newCtx, localState); });
        ctx.append(el);
        var lifecycle = this.makeLifecycle(localState, el, ctx);
        return {
            change: function (state) {
                localState = state;
                lifecycle.beforeChange(localState);
                for (var _i = 0, _a = _this.derivedAttrs; _i < _a.length; _i++) {
                    var att = _a[_i];
                    dom_1.setElAttribute(el, att.name, att.resolve(localState));
                }
                for (var _b = 0, _c = _this.derivedStyles; _b < _c.length; _b++) {
                    var stl = _c[_b];
                    dom_1.setElStyle(el, stl.name, stl.resolve(localState));
                }
                for (var _d = 0, views_1 = views; _d < views_1.length; _d++) {
                    var view = views_1[_d];
                    view.change(localState);
                }
                lifecycle.afterChange(localState);
            },
            destroy: function () {
                lifecycle.beforeDestroy();
                dom_1.removeNode(el);
                for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
                    var view = views_2[_i];
                    view.destroy();
                }
            },
            request: function (query) {
                respond(query, el, ctx);
                for (var _i = 0, views_3 = views; _i < views_3.length; _i++) {
                    var view = views_3[_i];
                    view.request(query);
                }
            }
        };
    };
    return DOMElement;
}());
exports.DOMElement = DOMElement;

},{"./dom":"lbKn","tempo-std/lib/arrays":"LAOm"}],"kpTJ":[function(require,module,exports) {
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
exports.MapStateTemplate = void 0;
var dom_1 = require("./dom");
var arrays_1 = require("tempo-std/lib/arrays");
var value_1 = require("../value");
var dom_builder_1 = require("./dom_builder");
// import { strictEqual } from 'tempo-std/lib/equals'
var MapStateTemplate = /** @class */ (function () {
    function MapStateTemplate(map, orElse, equals, children) {
        this.map = map;
        this.orElse = orElse;
        this.equals = equals;
        this.children = children.map(dom_builder_1.childOrBuilderToTemplate);
    }
    MapStateTemplate.prototype.render = function (ctx, state) {
        var _a = this, children = _a.children, map = _a.map, orElse = _a.orElse;
        // const equals = this.equals ?? strictEqual
        var views = [];
        var _b = ctx.withAppendToReference(), newCtx = _b.ctx, ref = _b.ref;
        var current = undefined;
        var next = value_1.resolveAttribute(map)(state);
        if (next === undefined) {
            views = [orElse.render(newCtx, state)];
        }
        else {
            current = next;
            views = arrays_1.map(children, function (c) { return c.render(newCtx, next); });
        }
        function destroy() {
            for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                var view = views_1[_i];
                view.destroy();
            }
        }
        return {
            change: function (state) {
                var next = value_1.resolveAttribute(map)(state);
                if (next !== undefined) {
                    if (current === undefined) {
                        destroy();
                        current = next;
                        views = arrays_1.map(children, function (c) { return c.render(newCtx, next); });
                    }
                    else {
                        // if (!equals(current, next)) { // TODO remporarely removed
                        current = next;
                        for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
                            var view = views_2[_i];
                            view.change(next);
                        }
                    }
                }
                else {
                    if (current !== undefined) {
                        current = undefined;
                        destroy();
                        views = [orElse.render(newCtx, state)];
                    }
                    else {
                        for (var _a = 0, views_3 = views; _a < views_3.length; _a++) {
                            var view = views_3[_a];
                            view.change(state);
                        }
                    }
                }
            },
            destroy: function () {
                destroy();
                dom_1.removeNode(ref);
            },
            request: function (query) {
                for (var _i = 0, views_4 = views; _i < views_4.length; _i++) {
                    var view = views_4[_i];
                    view.request(query);
                }
            }
        };
    };
    return MapStateTemplate;
}());
exports.MapStateTemplate = MapStateTemplate;

},{"./dom":"lbKn","tempo-std/lib/arrays":"LAOm","../value":"nFed","./dom_builder":"yiha"}],"aQMP":[function(require,module,exports) {
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
exports.FragmentTemplate = void 0;
var arrays_1 = require("tempo-std/lib/arrays");
var dom_builder_1 = require("./dom_builder");
var FragmentTemplate = /** @class */ (function () {
    function FragmentTemplate(children) {
        this.children = children.map(dom_builder_1.childOrBuilderToTemplate);
    }
    FragmentTemplate.prototype.render = function (ctx, state) {
        var views = arrays_1.map(this.children, function (child) { return child.render(ctx, state); });
        return {
            change: function (state) {
                for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                    var view = views_1[_i];
                    view.change(state);
                }
            },
            destroy: function () {
                for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
                    var view = views_2[_i];
                    view.destroy();
                }
            },
            request: function (query) {
                for (var _i = 0, views_3 = views; _i < views_3.length; _i++) {
                    var view = views_3[_i];
                    view.request(query);
                }
            }
        };
    };
    return FragmentTemplate;
}());
exports.FragmentTemplate = FragmentTemplate;

},{"tempo-std/lib/arrays":"LAOm","./dom_builder":"yiha"}],"KxWc":[function(require,module,exports) {
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
exports.MapActionTemplate = void 0;
var arrays_1 = require("tempo-std/lib/arrays");
var dom_builder_1 = require("./dom_builder");
var MapActionTemplate = /** @class */ (function () {
    function MapActionTemplate(map, children) {
        this.map = map;
        this.children = children.map(dom_builder_1.childOrBuilderToTemplate);
    }
    MapActionTemplate.prototype.render = function (ctx, state) {
        var _a = this, children = _a.children, map = _a.map;
        var newCtx = ctx.conditionalMapAction(map);
        var views = arrays_1.map(children, function (c) { return c.render(newCtx, state); });
        return {
            change: function (state) {
                for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                    var view = views_1[_i];
                    view.change(state);
                }
            },
            destroy: function () {
                for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
                    var view = views_2[_i];
                    view.destroy();
                }
            },
            request: function (query) {
                for (var _i = 0, views_3 = views; _i < views_3.length; _i++) {
                    var view = views_3[_i];
                    view.request(query);
                }
            }
        };
    };
    return MapActionTemplate;
}());
exports.MapActionTemplate = MapActionTemplate;

},{"tempo-std/lib/arrays":"LAOm","./dom_builder":"yiha"}],"wbDd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapQueryTemplate = void 0;
var arrays_1 = require("tempo-std/lib/arrays");
var dom_builder_1 = require("./dom_builder");
var MapQueryTemplate = /** @class */ (function () {
    function MapQueryTemplate(map, children) {
        this.map = map;
        this.children = children.map(dom_builder_1.childOrBuilderToTemplate);
    }
    MapQueryTemplate.prototype.render = function (ctx, state) {
        var _a = this, children = _a.children, map = _a.map;
        var views = arrays_1.map(children, function (c) { return c.render(ctx, state); });
        return {
            change: function (state) {
                for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                    var view = views_1[_i];
                    view.change(state);
                }
            },
            destroy: function () {
                for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
                    var view = views_2[_i];
                    view.destroy();
                }
            },
            request: function (query) {
                var innerQuery = map(query);
                if (innerQuery !== undefined) {
                    views.forEach(function (view) { return view.request(innerQuery); });
                }
            }
        };
    };
    return MapQueryTemplate;
}());
exports.MapQueryTemplate = MapQueryTemplate;

},{"tempo-std/lib/arrays":"LAOm","./dom_builder":"yiha"}],"Ttvv":[function(require,module,exports) {
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
exports.UntilTemplate = void 0;
var dom_1 = require("./dom");
var arrays_1 = require("tempo-std/lib/arrays");
var value_1 = require("../value");
var dom_builder_1 = require("./dom_builder");
var UntilTemplate = /** @class */ (function () {
    function UntilTemplate(next, children) {
        this.next = next;
        this.children = children.map(dom_builder_1.childOrBuilderToTemplate);
    }
    UntilTemplate.prototype.render = function (ctx, state) {
        var children = this.children;
        var next = this.next;
        var _a = ctx.withAppendToReference(), newCtx = _a.ctx, ref = _a.ref;
        var childrenViews = [];
        // TODO, when next is a static literal it can be optimized to only render once
        var view = {
            change: function (state) {
                var currentLength = childrenViews.length;
                var index = 0;
                var _loop_1 = function () {
                    var value = value_1.resolveAttribute(next)({ state: state, index: index });
                    if (value === undefined)
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
                        childrenViews.push(arrays_1.map(children, function (el) { return el.render(newCtx, value); }));
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
    return UntilTemplate;
}());
exports.UntilTemplate = UntilTemplate;

},{"./dom":"lbKn","tempo-std/lib/arrays":"LAOm","../value":"nFed","./dom_builder":"yiha"}],"LSkL":[function(require,module,exports) {
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
exports.SimpleComponentTemplate = void 0;
var arrays_1 = require("tempo-std/lib/arrays");
var dom_builder_1 = require("./dom_builder");
var SimpleComponentTemplate = /** @class */ (function () {
    function SimpleComponentTemplate(delayed, children) {
        this.delayed = delayed;
        this.children = children.map(dom_builder_1.childOrBuilderToTemplate);
    }
    SimpleComponentTemplate.prototype.render = function (ctx, state) {
        var update;
        if (this.delayed) {
            var shouldRender_1 = true;
            update = function (state) {
                if (shouldRender_1) {
                    shouldRender_1 = false;
                    setTimeout(function () {
                        view.change(state);
                        shouldRender_1 = true;
                    });
                }
            };
        }
        else {
            update = function (state) {
                view.change(state);
            };
        }
        var newCtx = ctx.withInterceptDispatch(update);
        var views = arrays_1.map(this.children, function (child) { return child.render(newCtx, state); });
        var view = {
            change: function (state) {
                for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                    var view_1 = views_1[_i];
                    view_1.change(state);
                }
            },
            destroy: function () {
                for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
                    var view_2 = views_2[_i];
                    view_2.destroy();
                }
            },
            request: function (query) {
                for (var _i = 0, views_3 = views; _i < views_3.length; _i++) {
                    var view_3 = views_3[_i];
                    view_3.request(query);
                }
            }
        };
        return view;
    };
    return SimpleComponentTemplate;
}());
exports.SimpleComponentTemplate = SimpleComponentTemplate;

},{"tempo-std/lib/arrays":"LAOm","./dom_builder":"yiha"}],"koeo":[function(require,module,exports) {
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
exports.PortalTemplate = void 0;
var arrays_1 = require("tempo-std/lib/arrays");
var dom_builder_1 = require("./dom_builder");
var PortalTemplate = /** @class */ (function () {
    function PortalTemplate(append, children) {
        this.append = append;
        this.children = children.map(dom_builder_1.childOrBuilderToTemplate);
    }
    PortalTemplate.prototype.render = function (ctx, state) {
        var _this = this;
        var append = function (node) { return _this.append(ctx.doc, node); };
        var newCtx = ctx.withAppend(append);
        var views = arrays_1.map(this.children, function (child) { return child.render(newCtx, state); });
        return {
            change: function (state) {
                for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
                    var view = views_1[_i];
                    view.change(state);
                }
            },
            destroy: function () {
                for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
                    var view = views_2[_i];
                    view.destroy();
                }
            },
            request: function (query) {
                for (var _i = 0, views_3 = views; _i < views_3.length; _i++) {
                    var view = views_3[_i];
                    view.request(query);
                }
            }
        };
    };
    return PortalTemplate;
}());
exports.PortalTemplate = PortalTemplate;

},{"tempo-std/lib/arrays":"LAOm","./dom_builder":"yiha"}],"hzRP":[function(require,module,exports) {
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
exports.LazyTemplate = void 0;
var dom_builder_1 = require("./dom_builder");
var LazyTemplate = /** @class */ (function () {
    function LazyTemplate(f) {
        this.f = f;
    }
    LazyTemplate.prototype.render = function (ctx, state) {
        if (this.template === undefined) {
            this.template = dom_builder_1.childOrBuilderToTemplate(this.f());
        }
        return this.template.render(ctx, state);
    };
    return LazyTemplate;
}());
exports.LazyTemplate = LazyTemplate;

},{"./dom_builder":"yiha"}],"ZVXL":[function(require,module,exports) {
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
exports.MatchBoolTemplate = void 0;
var dom_1 = require("./dom");
var value_1 = require("../value");
var dom_builder_1 = require("./dom_builder");
var MatchBoolTemplate = /** @class */ (function () {
    function MatchBoolTemplate(condition, trueTemplate, falseTemplate) {
        this.condition = condition;
        this.trueTemplate = dom_builder_1.childOrBuilderToTemplate(trueTemplate);
        this.falseTemplate = dom_builder_1.childOrBuilderToTemplate(falseTemplate);
    }
    MatchBoolTemplate.prototype.render = function (ctx, state) {
        var _a = ctx.withAppendToReference(), newCtx = _a.ctx, ref = _a.ref;
        var _b = this, trueTemplate = _b.trueTemplate, falseTemplate = _b.falseTemplate;
        var condition = value_1.resolveAttribute(this.condition);
        var lastEvaluation = condition(state);
        var view = lastEvaluation
            ? trueTemplate.render(newCtx, state)
            : falseTemplate.render(newCtx, state);
        return {
            change: function (state) {
                var newEvaluation = condition(state);
                if (newEvaluation === lastEvaluation) {
                    view.change(state);
                }
                else {
                    view.destroy();
                    lastEvaluation = newEvaluation;
                    view = newEvaluation
                        ? trueTemplate.render(newCtx, state)
                        : falseTemplate.render(newCtx, state);
                }
            },
            destroy: function () {
                dom_1.removeNode(ref);
                view.destroy();
            },
            request: function (query) {
                view.request(query);
            }
        };
    };
    return MatchBoolTemplate;
}());
exports.MatchBoolTemplate = MatchBoolTemplate;

},{"./dom":"lbKn","../value":"nFed","./dom_builder":"yiha"}],"fYSr":[function(require,module,exports) {
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
exports.HoldStateTemplate = void 0;
var dom_builder_1 = require("./dom_builder");
var html_1 = require("../html");
var HoldStateTemplate = /** @class */ (function () {
    function HoldStateTemplate(holdf, builder) {
        this.holdf = holdf;
        this.builder = builder;
    }
    HoldStateTemplate.prototype.render = function (ctx, state) {
        var _this = this;
        var localState = state;
        if (this.template === undefined) {
            this.template = dom_builder_1.childOrBuilderToTemplate(this.holdf(function (merge, init) {
                init(_this.builder);
                return html_1.MapState(function (b) { return merge(localState, b); }, function ($) { return $.Append(_this.builder); });
            }));
        }
        var view = this.template.render(ctx, localState);
        return {
            change: function (state) {
                localState = state;
                view.change(localState);
            },
            request: function (query) {
                view.request(query);
            },
            destroy: function () {
                view.destroy;
            }
        };
    };
    return HoldStateTemplate;
}());
exports.HoldStateTemplate = HoldStateTemplate;

},{"./dom_builder":"yiha","../html":"zQMt"}],"kWOh":[function(require,module,exports) {
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
exports.AdapterTemplate = void 0;
var value_1 = require("../value");
var AdapterTemplate = /** @class */ (function () {
    function AdapterTemplate(bootstrapState, mergeStates, propagate, child) {
        this.bootstrapState = bootstrapState;
        this.mergeStates = mergeStates;
        this.propagate = propagate;
        this.child = child;
    }
    AdapterTemplate.prototype.render = function (ctx, outerState) {
        var _this = this;
        var _a;
        var innerState = this.bootstrapState(outerState);
        innerState = (_a = value_1.resolveAttribute(this.mergeStates)({
            outerState: outerState,
            innerState: innerState
        })) !== null && _a !== void 0 ? _a : innerState;
        var newCtx = ctx.withDispatch(function (action) {
            return dispatchPropagate(viewComponent.state, action);
        });
        var viewComponent = this.child.render(newCtx, innerState);
        var dispatchPropagate = function (innerState, action) {
            _this.propagate({
                action: action,
                innerState: innerState,
                outerState: outerState,
                dispatchInner: function (action) { return viewComponent.dispatch(action); },
                dispatchOuter: function (action) { return ctx.dispatch(action); }
            });
        };
        return {
            change: function (outerState) {
                var newState = value_1.resolveAttribute(_this.mergeStates)({
                    outerState: outerState,
                    innerState: viewComponent.state
                });
                if (newState !== undefined) {
                    viewComponent.change(newState);
                }
            },
            destroy: function () {
                viewComponent.destroy();
            },
            request: function (query) {
                viewComponent.request(query);
            }
        };
    };
    return AdapterTemplate;
}());
exports.AdapterTemplate = AdapterTemplate;

},{"../value":"nFed"}],"bl4t":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVGRectElementBuilder = exports.SVGViewElementBuilder = exports.SVGUseElementBuilder = exports.SVGTSpanElementBuilder = exports.SVGTitleElementBuilder = exports.SVGTextPathElementBuilder = exports.SVGTextElementBuilder = exports.SVGSymbolElementBuilder = exports.SVGSwitchElementBuilder = exports.SVGSVGElementBuilder = exports.SVGStyleElementBuilder = exports.SVGStopElementBuilder = exports.SVGScriptElementBuilder = exports.SVGRadialGradientElementBuilder = exports.SVGPolylineElementBuilder = exports.SVGPolygonElementBuilder = exports.SVGPatternElementBuilder = exports.SVGPathElementBuilder = exports.SVGMetadataElementBuilder = exports.SVGMaskElementBuilder = exports.SVGMarkerElementBuilder = exports.SVGLinearGradientElementBuilder = exports.SVGLineElementBuilder = exports.SVGImageElementBuilder = exports.SVGGElementBuilder = exports.SVGForeignObjectElementBuilder = exports.SVGFilterElementBuilder = exports.SVGFETurbulenceElementBuilder = exports.SVGFETileElementBuilder = exports.SVGFESpotLightElementBuilder = exports.SVGFESpecularLightingElementBuilder = exports.SVGFEPointLightElementBuilder = exports.SVGFEOffsetElementBuilder = exports.SVGFEMorphologyElementBuilder = exports.SVGFEMergeNodeElementBuilder = exports.SVGFEMergeElementBuilder = exports.SVGFEImageElementBuilder = exports.SVGFEGaussianBlurElementBuilder = exports.SVGFEFuncRElementBuilder = exports.SVGFEFuncGElementBuilder = exports.SVGFEFuncBElementBuilder = exports.SVGFEFuncAElementBuilder = exports.SVGFEFloodElementBuilder = exports.SVGFEDistantLightElementBuilder = exports.SVGFEDisplacementMapElementBuilder = exports.SVGFEDiffuseLightingElementBuilder = exports.SVGFEConvolveMatrixElementBuilder = exports.SVGFeCompositeElementBuilder = exports.SVGFEComponentTransferElementBuilder = exports.SVGFEColorMatrixElementBuilder = exports.SVGFEBlendElementBuilder = exports.SVGEllipseElementBuilder = exports.SVGCircleElementBuilder = exports.SVGAnchorElementBuilder = exports.UntilSVGBuilder = exports.SimpleComponentSVGBuilder = exports.PortalSVGBuilder = exports.MapStateSVGBuilder = exports.MapQuerySVGBuilder = exports.MapActionSVGBuilder = exports.FragmentSVGBuilder = exports.ComponentSVGBuilder = exports.SVGGraphicsElementBuilder = exports.SVGElementBuilder = exports.svgEl = exports.BaseSVGBuilder = exports.SVG_NS = void 0;
var hold_state_1 = require("./hold_state");
var dom_builder_1 = require("./dom_builder");
var value_1 = require("../value");
var lifecycle_1 = require("../lifecycle");
var dom_1 = require("./dom");
var objects_1 = require("tempo-std/lib/objects");
var element_1 = require("./element");
var fragment_1 = require("./fragment");
var adapter_1 = require("./adapter");
var component_1 = require("./component");
var map_action_1 = require("./map_action");
var map_query_1 = require("./map_query");
var map_state_1 = require("./map_state");
var portal_1 = require("./portal");
var simple_component_1 = require("./simple_component");
var until_1 = require("./until");
var match_bool_template_1 = require("./match_bool_template");
var lazy_1 = require("./lazy");
var text_1 = require("./text");
exports.SVG_NS = 'http://www.w3.org/2000/svg';
var BaseSVGBuilder = /** @class */ (function (_super) {
    __extends(BaseSVGBuilder, _super);
    function BaseSVGBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseSVGBuilder.prototype.SvgEl = function (init) {
        if (init === void 0) { init = function () { }; }
        var builder = svgEl(name);
        init(builder);
        this._children.push(builder.build());
        return this;
    };
    // transform
    BaseSVGBuilder.prototype.Adapter = function (props) {
        return this.Append(new adapter_1.AdapterTemplate(props.bootstrapState, props.mergeStates, props.propagate || (function () { return undefined; }), props.child));
    };
    BaseSVGBuilder.prototype.Component = function (reducer, init) {
        var builder = new ComponentSVGBuilder(reducer);
        init(builder);
        return this.Append(builder.build());
    };
    BaseSVGBuilder.prototype.LocalAdapter = function (props) {
        return this.Append(new adapter_1.AdapterTemplate(function (state) { return state; }, function (_a) {
            var outerState = _a.outerState;
            return outerState;
        }, props.propagate || (function () { return undefined; }), props.child));
    };
    BaseSVGBuilder.prototype.HoldState = function (holdf) {
        return this.Append(new hold_state_1.HoldStateTemplate(holdf, new FragmentSVGBuilder()));
    };
    BaseSVGBuilder.prototype.MapState = function (map, init) {
        var builder = new MapStateSVGBuilder(map);
        init(builder);
        return this.Append(builder.build());
    };
    BaseSVGBuilder.prototype.MapField = function (field, init) {
        return this.MapState(function (v) { return v[field]; }, init);
    };
    BaseSVGBuilder.prototype.MapStateAndKeep = function (map, init) {
        var builder = new MapStateSVGBuilder(function (state) {
            var inner = value_1.resolveAttribute(map)(state);
            if (inner !== undefined) {
                return [inner, state];
            }
            else {
                return undefined;
            }
        });
        init(builder);
        return this.Append(builder.build());
    };
    BaseSVGBuilder.prototype.MapAction = function (map, init) {
        var builder = new MapActionSVGBuilder(map);
        init(builder);
        return this.Append(builder.build());
    };
    BaseSVGBuilder.prototype.MapQuery = function (map, init) {
        var builder = new MapQuerySVGBuilder(map);
        init(builder);
        return this.Append(builder.build());
    };
    BaseSVGBuilder.prototype.MatchBool = function (props) {
        return this.Append(new match_bool_template_1.MatchBoolTemplate(props.condition, props.true, props.false));
    };
    BaseSVGBuilder.prototype.Lazy = function (lazyf) {
        return this.Append(new lazy_1.LazyTemplate(lazyf));
    };
    BaseSVGBuilder.prototype.ForEach = function (init) {
        return this.Until(function (_a) {
            var state = _a.state, index = _a.index;
            return state[index];
        }, init);
    };
    BaseSVGBuilder.prototype.Fragment = function (init) {
        var builder = new FragmentSVGBuilder();
        init(builder);
        return this.Append(builder.build());
    };
    BaseSVGBuilder.prototype.Iterate = function (map, init) {
        return this.MapState(function (outer) {
            var items = value_1.resolveAttribute(map)(outer);
            return items !== undefined ? [items, outer] : undefined;
        }, function ($) {
            $.Until(function (_a) {
                var _b = _a.state, items = _b[0], state = _b[1], index = _a.index;
                return items[index] && [items[index], state, index];
            }, init);
        });
    };
    BaseSVGBuilder.prototype.Portal = function (appendChild, init) {
        var builder = new PortalSVGBuilder(appendChild);
        init(builder);
        return this.Append(builder.build());
    };
    BaseSVGBuilder.prototype.PortalWithSelector = function (selector, init) {
        return this.Portal(function (doc, node) {
            var el = doc.querySelector(selector);
            if (!el) {
                throw new Error("selector doesn't match any element: \"" + selector + "\"");
            }
            el.appendChild(node);
        }, init);
    };
    BaseSVGBuilder.prototype.HeadPortal = function (init) {
        return this.Portal(function (doc, node) { return doc.head.appendChild(node); }, init);
    };
    BaseSVGBuilder.prototype.BodyPortal = function (init) {
        return this.Portal(function (doc, node) { return doc.body.appendChild(node); }, init);
    };
    // SimpleComponent(
    //   init: (builder: SimpleComponentBuilder<State, Query>) => void
    // ) {
    //   const builder = new SimpleComponentBuilder<State, Query>()
    //   init(builder)
    //   return this.append(builder.build())
    // }
    BaseSVGBuilder.prototype.Unless = function (condition, init) {
        return this.When(function (s) { return !condition(s); }, init);
    };
    BaseSVGBuilder.prototype.Until = function (next, init) {
        var builder = new UntilSVGBuilder(next);
        init(builder);
        return this.Append(builder.build());
    };
    BaseSVGBuilder.prototype.When = function (condition, init) {
        var builder = new MapStateSVGBuilder(function (s) {
            if (condition(s)) {
                return s;
            }
            else {
                return undefined;
            }
        });
        init(builder);
        return this.Append(builder.build());
    };
    // derived children
    BaseSVGBuilder.prototype.A = function (init) {
        return initBuilder(new SVGAnchorElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.CIRCLE = function (init) {
        return initBuilder(new SVGCircleElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.CLIP_PATH = function (init) {
        return initBuilder(new SVGElementBuilder('clipPath'), init, this);
    };
    BaseSVGBuilder.prototype.DEFS = function (init) {
        return initBuilder(new SVGElementBuilder('defs'), init, this);
    };
    BaseSVGBuilder.prototype.DESC = function (init) {
        return initBuilder(new SVGElementBuilder('desc'), init, this);
    };
    BaseSVGBuilder.prototype.ELLIPSE = function (init) {
        return initBuilder(new SVGEllipseElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_BLEND = function (init) {
        return initBuilder(new SVGFEBlendElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_COLOR_MATRIX = function (init) {
        return initBuilder(new SVGFEColorMatrixElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_COMPONENT_TRANSFER = function (init) {
        return initBuilder(new SVGFEComponentTransferElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_COMPOSITE = function (init) {
        return initBuilder(new SVGFeCompositeElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_CONVOLVE_MATRIX = function (init) {
        return initBuilder(new SVGFEConvolveMatrixElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_DIFFUSE_LIGHTING = function (init) {
        return initBuilder(new SVGFEDiffuseLightingElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_DISPLACEMENT_MAP = function (init) {
        return initBuilder(new SVGFEDisplacementMapElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_DISTANT_LIGHT = function (init) {
        return initBuilder(new SVGFEDistantLightElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_FLOOD = function (init) {
        return initBuilder(new SVGFEFloodElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_FUNC_A = function (init) {
        return initBuilder(new SVGFEFuncAElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_FUNC_B = function (init) {
        return initBuilder(new SVGFEFuncBElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_FUNC_G = function (init) {
        return initBuilder(new SVGFEFuncGElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_FUNC_R = function (init) {
        return initBuilder(new SVGFEFuncRElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_GAUSSIAN_BLUR = function (init) {
        return initBuilder(new SVGFEGaussianBlurElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_IMAGE = function (init) {
        return initBuilder(new SVGFEImageElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_MERGE = function (init) {
        return initBuilder(new SVGFEMergeElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_MERGE_NODE = function (init) {
        return initBuilder(new SVGFEMergeNodeElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_MORPHOLOGY = function (init) {
        return initBuilder(new SVGFEMorphologyElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_OFFSET = function (init) {
        return initBuilder(new SVGFEOffsetElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_POINT_LIGHT = function (init) {
        return initBuilder(new SVGFEPointLightElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_SPECULAR_LIGHTING = function (init) {
        return initBuilder(new SVGFESpecularLightingElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_SPOTLIGHT = function (init) {
        return initBuilder(new SVGFESpotLightElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_TILE = function (init) {
        return initBuilder(new SVGFETileElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FE_TURBULENCE = function (init) {
        return initBuilder(new SVGFETurbulenceElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FILTER = function (init) {
        return initBuilder(new SVGFilterElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.FOREIGN_OBJECT = function (init) {
        return initBuilder(new SVGForeignObjectElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.G = function (init) {
        return initBuilder(new SVGGElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.IMAGE = function (init) {
        return initBuilder(new SVGImageElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.LINE = function (init) {
        return initBuilder(new SVGLineElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.LINEAR_GRADIENT = function (init) {
        return initBuilder(new SVGLinearGradientElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.MARKER = function (init) {
        return initBuilder(new SVGMarkerElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.MASK = function (init) {
        return initBuilder(new SVGMaskElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.METADATA = function (init) {
        return initBuilder(new SVGMetadataElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.PATH = function (init) {
        return initBuilder(new SVGPathElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.PATTERN = function (init) {
        return initBuilder(new SVGPatternElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.POLYGON = function (init) {
        return initBuilder(new SVGPolygonElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.POLYLINE = function (init) {
        return initBuilder(new SVGPolylineElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.RADIALGRADIENT = function (init) {
        return initBuilder(new SVGRadialGradientElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.RECT = function (init) {
        return initBuilder(new SVGRectElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.SCRIPT = function (init) {
        return initBuilder(new SVGScriptElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.STOP = function (init) {
        return initBuilder(new SVGStopElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.STYLE = function (init) {
        return initBuilder(new SVGStyleElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.SVG = function (init) {
        return initBuilder(new SVGSVGElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.SWITCH = function (init) {
        return initBuilder(new SVGSwitchElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.SYMBOL = function (init) {
        return initBuilder(new SVGSymbolElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.TEXT = function (init) {
        return initBuilder(new SVGTextElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.TEXT_PATH = function (init) {
        return initBuilder(new SVGTextPathElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.TITLE = function (init) {
        return initBuilder(new SVGTitleElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.TSPAN = function (init) {
        return initBuilder(new SVGTSpanElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.USE = function (init) {
        return initBuilder(new SVGUseElementBuilder(), init, this);
    };
    BaseSVGBuilder.prototype.VIEW = function (init) {
        return initBuilder(new SVGViewElementBuilder(), init, this);
    };
    return BaseSVGBuilder;
}(dom_builder_1.DOMBuilder));
exports.BaseSVGBuilder = BaseSVGBuilder;
// dom generic
function svgEl(tagName) {
    return new SVGElementBuilder(tagName);
}
exports.svgEl = svgEl;
var SVGElementBuilder = /** @class */ (function (_super) {
    __extends(SVGElementBuilder, _super);
    function SVGElementBuilder(tagName) {
        var _this = _super.call(this) || this;
        _this.tagName = tagName;
        _this._attributes = {};
        _this._styles = {};
        _this._handlers = {};
        return _this;
    }
    SVGElementBuilder.prototype.build = function () {
        var _this = this;
        var _a, _b;
        return new element_1.DOMElement(dom_1.makeCreateElementNS(exports.SVG_NS, this.tagName), dom_builder_1.extractLiterals(this._attributes), dom_builder_1.extractDerived(this._attributes), dom_builder_1.extractLiterals(this._styles), dom_builder_1.extractDerived(this._styles), objects_1.keys(this._handlers).map(function (name) { return ({
            name: name,
            callback: _this._handlers[name]
        }); }), (_a = this._lifecycle) !== null && _a !== void 0 ? _a : lifecycle_1.makeEmptyLifecycle, (_b = this._respond) !== null && _b !== void 0 ? _b : (function (query, el, ctx) { }), // TODO better typing required
        this._children);
    };
    // attributes, styles and handlers
    SVGElementBuilder.prototype.attr = function (name, value) {
        if (value != null) {
            this._attributes[name] = value;
        }
        return this;
    };
    SVGElementBuilder.prototype.style = function (name, value) {
        if (value != null) {
            this._styles[name] = value;
        }
        return this;
    };
    SVGElementBuilder.prototype.handle = function (name, callback) {
        if (callback != null) {
            this._handlers[name] = callback;
        }
        return this;
    };
    SVGElementBuilder.prototype.Lifecycle = function (makeLifecycle) {
        this._lifecycle = makeLifecycle;
        return this;
    };
    SVGElementBuilder.prototype.Respond = function (response) {
        this._respond = response;
        return this;
    };
    // attribute shortcuts
    SVGElementBuilder.prototype.aria = function (name, value) {
        return this.attr("aria-" + name, value);
    };
    SVGElementBuilder.prototype.class = function (value) {
        return this.attr('class', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    SVGElementBuilder.prototype.data = function (name, value) {
        return this.attr("data-" + name, value);
    };
    SVGElementBuilder.prototype.id = function (value) {
        return this.attr('id', value);
    };
    SVGElementBuilder.prototype.lang = function (value) {
        return this.attr('lang', value);
    };
    SVGElementBuilder.prototype.styles = function (value) {
        return this.attr('style', value_1.mapAttribute(value, dom_builder_1.stylesToString));
    };
    SVGElementBuilder.prototype.systemLanguage = function (value) {
        return this.attr('systemLanguage', value);
    };
    SVGElementBuilder.prototype.tabIndex = function (value) {
        return this.attr('tabindex', value_1.mapAttribute(value, String));
    };
    // presentation attributes // TODO
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/clip-path
    SVGElementBuilder.prototype.alignmentBaseline = function (value) {
        return this.attr('alignment-baseline', value);
    };
    SVGElementBuilder.prototype.baselineShift = function (value) {
        return this.attr('baseline-shift', value);
    };
    SVGElementBuilder.prototype.clipPath = function (value) {
        return this.attr('clip-path', value);
    };
    SVGElementBuilder.prototype.clipRule = function (value) {
        return this.attr('clip-rule', value);
    };
    SVGElementBuilder.prototype.color = function (value) {
        return this.attr('color', value);
    };
    SVGElementBuilder.prototype.colorInterpolation = function (value) {
        return this.attr('color-interpolation', value);
    };
    SVGElementBuilder.prototype.colorInterpolationFilters = function (value) {
        return this.attr('color-interpolation-filters', value);
    };
    SVGElementBuilder.prototype.cursor = function (value) {
        return this.attr('cursor', value);
    };
    SVGElementBuilder.prototype.direction = function (value) {
        return this.attr('direction', value);
    };
    SVGElementBuilder.prototype.display = function (value) {
        return this.attr('display', value);
    };
    SVGElementBuilder.prototype.dominantBaseline = function (value) {
        return this.attr('dominant-baseline', value);
    };
    SVGElementBuilder.prototype.fill = function (value) {
        return this.attr('fill', value);
    };
    SVGElementBuilder.prototype.fillOpacity = function (value) {
        return this.attr('fill-opacity', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.fillRule = function (value) {
        return this.attr('fill-rule', value);
    };
    SVGElementBuilder.prototype.filter = function (value) {
        return this.attr('filter', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    SVGElementBuilder.prototype.floodColor = function (value) {
        return this.attr('flood-color', value);
    };
    SVGElementBuilder.prototype.floodOpacity = function (value) {
        return this.attr('flood-opacity', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.fontFamily = function (value) {
        return this.attr('font-family', value);
    };
    SVGElementBuilder.prototype.fontSize = function (value) {
        return this.attr('font-size', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.fontSizeAdjust = function (value) {
        return this.attr('font-size-adjust', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.fontStretch = function (value) {
        return this.attr('font-stretch', value);
    };
    SVGElementBuilder.prototype.fontStyle = function (value) {
        return this.attr('font-style', value);
    };
    SVGElementBuilder.prototype.fontVariant = function (value) {
        return this.attr('font-variant', value);
    };
    SVGElementBuilder.prototype.fontWeight = function (value) {
        return this.attr('font-weight', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.imageRendering = function (value) {
        return this.attr('image-rendering', value);
    };
    SVGElementBuilder.prototype.letterSpacing = function (value) {
        return this.attr('letter-spacing', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.lightingColor = function (value) {
        return this.attr('lighting-color', value);
    };
    SVGElementBuilder.prototype.markerEnd = function (value) {
        return this.attr('marker-end', value);
    };
    SVGElementBuilder.prototype.markerMid = function (value) {
        return this.attr('marker-mid', value);
    };
    SVGElementBuilder.prototype.markerStart = function (value) {
        return this.attr('marker-start', value);
    };
    SVGElementBuilder.prototype.mask = function (value) {
        return this.attr('mask', value);
    };
    SVGElementBuilder.prototype.opacity = function (value) {
        return this.attr('opacity', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.overflow = function (value) {
        return this.attr('overflow', value);
    };
    SVGElementBuilder.prototype.pointerEvents = function (value) {
        return this.attr('pointer-events', value);
    };
    SVGElementBuilder.prototype.shapeRendering = function (value) {
        return this.attr('shape-rendering', value);
    };
    SVGElementBuilder.prototype.stopColor = function (value) {
        return this.attr('stop-color', value);
    };
    SVGElementBuilder.prototype.stopOpacity = function (value) {
        return this.attr('stop-opacity', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.stroke = function (value) {
        return this.attr('stroke', value);
    };
    SVGElementBuilder.prototype.strokeDashArray = function (value) {
        return this.attr('stroke-dasharray', value);
    };
    SVGElementBuilder.prototype.strokeDashoffset = function (value) {
        return this.attr('stroke-dashoffset', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.strokeLineCap = function (value) {
        return this.attr('stroke-linecap', value);
    };
    SVGElementBuilder.prototype.strokeLineJoin = function (value) {
        return this.attr('stroke-linejoin', value);
    };
    SVGElementBuilder.prototype.strokeMiterLimit = function (value) {
        return this.attr('stroke-miterlimit', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.strokeOpacity = function (value) {
        return this.attr('stroke-opacity', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.strokeWidth = function (value) {
        return this.attr('stroke-width', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.textAnchor = function (value) {
        return this.attr('text-anchor', value);
    };
    SVGElementBuilder.prototype.textDecoration = function (value) {
        return this.attr('text-decoration', value);
    };
    SVGElementBuilder.prototype.textRendering = function (value) {
        return this.attr('text-rendering', value);
    };
    SVGElementBuilder.prototype.transform = function (value) {
        return this.attr('transform', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    SVGElementBuilder.prototype.unicodeBidi = function (value) {
        return this.attr('unicode-bidi', value);
    };
    SVGElementBuilder.prototype.vectorEffect = function (value) {
        return this.attr('vector-effect', value);
    };
    SVGElementBuilder.prototype.visibility = function (value) {
        return this.attr('visibility', value);
    };
    SVGElementBuilder.prototype.wordSpacing = function (value) {
        return this.attr('word-spacing', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.writingMode = function (value) {
        return this.attr('writing-mode', value);
    };
    // aria
    SVGElementBuilder.prototype.ariaActiveDescendant = function (value) {
        return this.attr('aria-activedescendant', value);
    };
    SVGElementBuilder.prototype.ariaAtomic = function (value) {
        return this.attr('aria-atomic', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaAutocomplete = function (value) {
        return this.attr('aria-autocomplete', value);
    };
    SVGElementBuilder.prototype.ariaBusy = function (value) {
        return this.attr('aria-busy', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaChecked = function (value) {
        return this.attr('aria-checked', value_1.mapAttribute(value, function (v) {
            return v === true ? 'true' : v === false ? 'false' : v;
        }));
    };
    SVGElementBuilder.prototype.ariaColCount = function (value) {
        return this.attr('aria-colcount', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaColIndex = function (value) {
        return this.attr('aria-colindex', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaColSpan = function (value) {
        return this.attr('aria-colspan', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaControls = function (value) {
        return this.attr('aria-controls', value);
    };
    SVGElementBuilder.prototype.ariaCurrent = function (value) {
        return this.attr('aria-current', value_1.mapAttribute(value, function (v) {
            return v === true ? 'true' : v === false ? 'false' : v;
        }));
    };
    SVGElementBuilder.prototype.ariaDescribedBy = function (value) {
        return this.attr('aria-describedby', value);
    };
    SVGElementBuilder.prototype.ariaDetails = function (value) {
        return this.attr('aria-details', value);
    };
    SVGElementBuilder.prototype.ariaDisabled = function (value) {
        return this.attr('aria-disabled', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaDropEffect = function (value) {
        return this.attr('aria-dropeffect', value);
    };
    SVGElementBuilder.prototype.ariaErrorMessage = function (value) {
        return this.attr('aria-errormessage', value_1.mapAttribute(value, function (v) {
            return v === true ? 'true' : v === false ? 'false' : v;
        }));
    };
    SVGElementBuilder.prototype.ariaExpanded = function (value) {
        return this.attr('aria-expanded', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaFlowTo = function (value) {
        return this.attr('aria-flowto', value);
    };
    SVGElementBuilder.prototype.ariaGrabbed = function (value) {
        return this.attr('aria-grabbed', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaHasPopup = function (value) {
        return this.attr('aria-haspopup', value_1.mapAttribute(value, function (v) {
            return v === true ? 'true' : v === false ? 'false' : v;
        }));
    };
    SVGElementBuilder.prototype.ariaHidden = function (value) {
        return this.attr('aria-hidden', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaInvalid = function (value) {
        return this.attr('aria-invalid', value);
    };
    SVGElementBuilder.prototype.ariaKeyShortcuts = function (value) {
        return this.attr('aria-keyshortcuts', value);
    };
    SVGElementBuilder.prototype.ariaLabel = function (value) {
        return this.attr('aria-label', value);
    };
    SVGElementBuilder.prototype.ariaLabelledBy = function (value) {
        return this.attr('aria-labelledby', value);
    };
    SVGElementBuilder.prototype.ariaLevel = function (value) {
        return this.attr('aria-level', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaLive = function (value) {
        return this.attr('aria-live', value);
    };
    SVGElementBuilder.prototype.ariaModal = function (value) {
        return this.attr('aria-modal', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaMultiLine = function (value) {
        return this.attr('aria-multiline', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaMultiSelectable = function (value) {
        return this.attr('aria-multiselectable', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaOrientation = function (value) {
        return this.attr('aria-orientation', value);
    };
    SVGElementBuilder.prototype.ariaOwns = function (value) {
        return this.attr('aria-owns', value);
    };
    SVGElementBuilder.prototype.ariaPlaceHolder = function (value) {
        return this.attr('aria-placeholder', value);
    };
    SVGElementBuilder.prototype.ariaPointSet = function (value) {
        return this.attr('aria-pointset', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaPosInSet = function (value) {
        return this.attr('aria-posinset', value);
    };
    SVGElementBuilder.prototype.ariaPressed = function (value) {
        return this.attr('aria-pressed', value_1.mapAttribute(value, function (v) {
            return v === true ? 'true' : v === false ? 'false' : v;
        }));
    };
    SVGElementBuilder.prototype.ariaReadonly = function (value) {
        return this.attr('aria-readonly', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaRequired = function (value) {
        return this.attr('aria-required', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaRelevant = function (value) {
        return this.attr('aria-relevant', value);
    };
    SVGElementBuilder.prototype.ariaRoleDescription = function (value) {
        return this.attr('aria-roledescription', value);
    };
    SVGElementBuilder.prototype.ariaRowCount = function (value) {
        return this.attr('aria-rowcount', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaRowIndex = function (value) {
        return this.attr('aria-rowindex', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaRowSpan = function (value) {
        return this.attr('aria-rowspan', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaSelected = function (value) {
        return this.attr('aria-selected', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    SVGElementBuilder.prototype.ariaSetSize = function (value) {
        return this.attr('aria-setsize', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaSort = function (value) {
        return this.attr('aria-sort', value);
    };
    SVGElementBuilder.prototype.ariaValueMax = function (value) {
        return this.attr('aria-valuemax', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaValueMin = function (value) {
        return this.attr('aria-valuemin', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaValueNow = function (value) {
        return this.attr('aria-valuenow', value_1.mapAttribute(value, String));
    };
    SVGElementBuilder.prototype.ariaValueText = function (value) {
        return this.attr('aria-valuetext', value);
    };
    // event shortcuts
    SVGElementBuilder.prototype.onAbort = function (handler) {
        return this.handle('abort', handler);
    };
    SVGElementBuilder.prototype.onAutoComplete = function (handler) {
        return this.handle('autocomplete', handler);
    };
    SVGElementBuilder.prototype.onAutoCompleteError = function (handler) {
        return this.handle('autocompleteerror', handler);
    };
    SVGElementBuilder.prototype.onBlur = function (handler) {
        return this.handle('blur', handler);
    };
    SVGElementBuilder.prototype.onCancel = function (handler) {
        return this.handle('cancel', handler);
    };
    SVGElementBuilder.prototype.onChange = function (handler) {
        return this.handle('change', handler);
    };
    SVGElementBuilder.prototype.onClick = function (handler) {
        return this.handle('click', handler);
    };
    SVGElementBuilder.prototype.onCompositionEnd = function (handler) {
        return this.handle('compositionend', handler);
    };
    SVGElementBuilder.prototype.onCompositionStart = function (handler) {
        return this.handle('compositionstart', handler);
    };
    SVGElementBuilder.prototype.onCompositionUpdate = function (handler) {
        return this.handle('compositionupdate', handler);
    };
    SVGElementBuilder.prototype.onContextMenu = function (handler) {
        return this.handle('contextmenu', handler);
    };
    SVGElementBuilder.prototype.onDblClick = function (handler) {
        return this.handle('dblclick', handler);
    };
    SVGElementBuilder.prototype.onDrag = function (handler) {
        return this.handle('drag', handler);
    };
    SVGElementBuilder.prototype.onDragEnd = function (handler) {
        return this.handle('dragend', handler);
    };
    SVGElementBuilder.prototype.onDragEnter = function (handler) {
        return this.handle('dragenter', handler);
    };
    SVGElementBuilder.prototype.onDragExit = function (handler) {
        return this.handle('dragexit', handler);
    };
    SVGElementBuilder.prototype.onDragLeave = function (handler) {
        return this.handle('dragleave', handler);
    };
    SVGElementBuilder.prototype.onDragOver = function (handler) {
        return this.handle('dragover', handler);
    };
    SVGElementBuilder.prototype.onDragStart = function (handler) {
        return this.handle('dragstart', handler);
    };
    SVGElementBuilder.prototype.onDrop = function (handler) {
        return this.handle('drop', handler);
    };
    SVGElementBuilder.prototype.onError = function (handler) {
        return this.handle('error', handler);
    };
    SVGElementBuilder.prototype.onFocus = function (handler) {
        return this.handle('focus', handler);
    };
    SVGElementBuilder.prototype.onFocusIn = function (handler) {
        return this.handle('focusin', handler);
    };
    SVGElementBuilder.prototype.onFocusOut = function (handler) {
        return this.handle('focusout', handler);
    };
    SVGElementBuilder.prototype.onInput = function (handler) {
        return this.handle('input', handler);
    };
    SVGElementBuilder.prototype.onInvalid = function (handler) {
        return this.handle('invalid', handler);
    };
    SVGElementBuilder.prototype.onKeyDown = function (handler) {
        return this.handle('keydown', handler);
    };
    SVGElementBuilder.prototype.onKeyUp = function (handler) {
        return this.handle('keyup', handler);
    };
    SVGElementBuilder.prototype.onLoad = function (handler) {
        return this.handle('load', handler);
    };
    SVGElementBuilder.prototype.onMouseDown = function (handler) {
        return this.handle('mousedown', handler);
    };
    SVGElementBuilder.prototype.onMouseEnter = function (handler) {
        return this.handle('mouseenter', handler);
    };
    SVGElementBuilder.prototype.onMouseLeave = function (handler) {
        return this.handle('mouseleave', handler);
    };
    SVGElementBuilder.prototype.onMouseMove = function (handler) {
        return this.handle('mousemove', handler);
    };
    SVGElementBuilder.prototype.onMouseOut = function (handler) {
        return this.handle('mouseout', handler);
    };
    SVGElementBuilder.prototype.onMouseOver = function (handler) {
        return this.handle('mouseover', handler);
    };
    SVGElementBuilder.prototype.onMouseUp = function (handler) {
        return this.handle('mouseup', handler);
    };
    SVGElementBuilder.prototype.onReset = function (handler) {
        return this.handle('reset', handler);
    };
    SVGElementBuilder.prototype.onScroll = function (handler) {
        return this.handle('scroll', handler);
    };
    SVGElementBuilder.prototype.onSelect = function (handler) {
        return this.handle('select', handler);
    };
    SVGElementBuilder.prototype.onShow = function (handler) {
        return this.handle('show', handler);
    };
    SVGElementBuilder.prototype.onSubmit = function (handler) {
        return this.handle('submit', handler);
    };
    SVGElementBuilder.prototype.onTouchCancel = function (handler) {
        return this.handle('touchcancel', handler);
    };
    SVGElementBuilder.prototype.onTouchEnd = function (handler) {
        return this.handle('touchend', handler);
    };
    SVGElementBuilder.prototype.onTouchMove = function (handler) {
        return this.handle('touchmove', handler);
    };
    SVGElementBuilder.prototype.onTouchStart = function (handler) {
        return this.handle('touchstart', handler);
    };
    SVGElementBuilder.prototype.onWheel = function (handler) {
        return this.handle('wheel', handler);
    };
    return SVGElementBuilder;
}(BaseSVGBuilder));
exports.SVGElementBuilder = SVGElementBuilder;
var SVGGraphicsElementBuilder = /** @class */ (function (_super) {
    __extends(SVGGraphicsElementBuilder, _super);
    function SVGGraphicsElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SVGGraphicsElementBuilder;
}(SVGElementBuilder));
exports.SVGGraphicsElementBuilder = SVGGraphicsElementBuilder;
var ComponentSVGBuilder = /** @class */ (function (_super) {
    __extends(ComponentSVGBuilder, _super);
    function ComponentSVGBuilder(reducer) {
        var _this = _super.call(this) || this;
        _this.reducer = reducer;
        _this._delayed = false;
        return _this;
    }
    ComponentSVGBuilder.prototype.Equals = function (equals) {
        if (equals !== undefined) {
            this._equals = equals;
        }
        return this;
    };
    ComponentSVGBuilder.prototype.Delayed = function (delayed) {
        if (delayed !== undefined) {
            this._delayed = delayed;
        }
        return this;
    };
    ComponentSVGBuilder.prototype.build = function () {
        return new component_1.ComponentTemplate(this._delayed, this.reducer, this._equals, this._children);
    };
    return ComponentSVGBuilder;
}(BaseSVGBuilder));
exports.ComponentSVGBuilder = ComponentSVGBuilder;
var FragmentSVGBuilder = /** @class */ (function (_super) {
    __extends(FragmentSVGBuilder, _super);
    function FragmentSVGBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FragmentSVGBuilder.prototype.build = function () {
        return new fragment_1.FragmentTemplate(this._children);
    };
    return FragmentSVGBuilder;
}(BaseSVGBuilder));
exports.FragmentSVGBuilder = FragmentSVGBuilder;
var MapActionSVGBuilder = /** @class */ (function (_super) {
    __extends(MapActionSVGBuilder, _super);
    function MapActionSVGBuilder(map) {
        var _this = _super.call(this) || this;
        _this.map = map;
        return _this;
    }
    MapActionSVGBuilder.prototype.build = function () {
        return new map_action_1.MapActionTemplate(this.map, this._children);
    };
    return MapActionSVGBuilder;
}(BaseSVGBuilder));
exports.MapActionSVGBuilder = MapActionSVGBuilder;
var MapQuerySVGBuilder = /** @class */ (function (_super) {
    __extends(MapQuerySVGBuilder, _super);
    function MapQuerySVGBuilder(map) {
        var _this = _super.call(this) || this;
        _this.map = map;
        return _this;
    }
    MapQuerySVGBuilder.prototype.build = function () {
        return new map_query_1.MapQueryTemplate(this.map, this._children);
    };
    return MapQuerySVGBuilder;
}(BaseSVGBuilder));
exports.MapQuerySVGBuilder = MapQuerySVGBuilder;
var MapStateSVGBuilder = /** @class */ (function (_super) {
    __extends(MapStateSVGBuilder, _super);
    function MapStateSVGBuilder(map) {
        var _this = _super.call(this) || this;
        _this.map = map;
        return _this;
    }
    MapStateSVGBuilder.prototype.Equals = function (equals) {
        if (equals !== undefined) {
            this._equals = equals;
        }
        return this;
    };
    MapStateSVGBuilder.prototype.OrElse = function (init) {
        this._orElse = new FragmentSVGBuilder();
        init(this._orElse);
        return this;
    };
    MapStateSVGBuilder.prototype.build = function () {
        var _a;
        return new map_state_1.MapStateTemplate(this.map, (_a = (this._orElse && this._orElse.build())) !== null && _a !== void 0 ? _a : text_1.text(''), this._equals, this._children);
    };
    return MapStateSVGBuilder;
}(BaseSVGBuilder));
exports.MapStateSVGBuilder = MapStateSVGBuilder;
var PortalSVGBuilder = /** @class */ (function (_super) {
    __extends(PortalSVGBuilder, _super);
    function PortalSVGBuilder(appendChild) {
        var _this = _super.call(this) || this;
        _this.appendChild = appendChild;
        return _this;
    }
    PortalSVGBuilder.prototype.build = function () {
        return new portal_1.PortalTemplate(this.appendChild, this._children);
    };
    return PortalSVGBuilder;
}(BaseSVGBuilder));
exports.PortalSVGBuilder = PortalSVGBuilder;
var SimpleComponentSVGBuilder = /** @class */ (function (_super) {
    __extends(SimpleComponentSVGBuilder, _super);
    function SimpleComponentSVGBuilder() {
        var _this = _super.call(this) || this;
        _this._delayed = false;
        return _this;
    }
    SimpleComponentSVGBuilder.prototype.Delayed = function (delayed) {
        if (delayed !== undefined) {
            this._delayed = delayed;
        }
        return this;
    };
    SimpleComponentSVGBuilder.prototype.build = function () {
        return new simple_component_1.SimpleComponentTemplate(this._delayed, this._children);
    };
    return SimpleComponentSVGBuilder;
}(BaseSVGBuilder));
exports.SimpleComponentSVGBuilder = SimpleComponentSVGBuilder;
var UntilSVGBuilder = /** @class */ (function (_super) {
    __extends(UntilSVGBuilder, _super);
    function UntilSVGBuilder(next) {
        var _this = _super.call(this) || this;
        _this.next = next;
        return _this;
    }
    UntilSVGBuilder.prototype.build = function () {
        return new until_1.UntilTemplate(this.next, this._children);
    };
    return UntilSVGBuilder;
}(BaseSVGBuilder));
exports.UntilSVGBuilder = UntilSVGBuilder;
function initBuilder(builder, init, parent) {
    init && init(builder);
    return parent.Append(builder.build());
}
var SVGAnchorElementBuilder = /** @class */ (function (_super) {
    __extends(SVGAnchorElementBuilder, _super);
    function SVGAnchorElementBuilder() {
        return _super.call(this, 'a') || this;
    }
    // download(filename: Attribute<State, string>): this {
    //   return this.attr('download', filename)
    // }
    SVGAnchorElementBuilder.prototype.href = function (url) {
        return this.attr('href', url);
    };
    SVGAnchorElementBuilder.prototype.hreflang = function (lang) {
        return this.attr('hreflang', lang);
    };
    // ping(url: Attribute<State, ListValue<string>>): this {
    //   return this.attr('ping', mapAttribute(url, spaceSeparatedToString))
    // }
    // rel(value: Attribute<State, ListValue<string>>): this {
    //   return this.attr('rel', mapAttribute(value, spaceSeparatedToString))
    // }
    SVGAnchorElementBuilder.prototype.target = function (name) {
        return this.attr('target', name);
    };
    SVGAnchorElementBuilder.prototype.type = function (name) {
        return this.attr('type', name);
    };
    return SVGAnchorElementBuilder;
}(SVGElementBuilder));
exports.SVGAnchorElementBuilder = SVGAnchorElementBuilder;
var SVGCircleElementBuilder = /** @class */ (function (_super) {
    __extends(SVGCircleElementBuilder, _super);
    function SVGCircleElementBuilder() {
        return _super.call(this, 'circle') || this;
    }
    SVGCircleElementBuilder.prototype.cx = function (value) {
        return this.attr('cx', value_1.mapAttribute(value, String));
    };
    SVGCircleElementBuilder.prototype.cy = function (value) {
        return this.attr('cy', value_1.mapAttribute(value, String));
    };
    SVGCircleElementBuilder.prototype.r = function (value) {
        return this.attr('r', value_1.mapAttribute(value, String));
    };
    SVGCircleElementBuilder.prototype.pathLength = function (value) {
        return this.attr('pathLength', value_1.mapAttribute(value, String));
    };
    return SVGCircleElementBuilder;
}(SVGElementBuilder));
exports.SVGCircleElementBuilder = SVGCircleElementBuilder;
var SVGEllipseElementBuilder = /** @class */ (function (_super) {
    __extends(SVGEllipseElementBuilder, _super);
    function SVGEllipseElementBuilder() {
        return _super.call(this, 'ellipse') || this;
    }
    SVGEllipseElementBuilder.prototype.cx = function (value) {
        return this.attr('cx', value_1.mapAttribute(value, String));
    };
    SVGEllipseElementBuilder.prototype.cy = function (value) {
        return this.attr('cy', value_1.mapAttribute(value, String));
    };
    SVGEllipseElementBuilder.prototype.rx = function (value) {
        return this.attr('rx', value_1.mapAttribute(value, String));
    };
    SVGEllipseElementBuilder.prototype.ry = function (value) {
        return this.attr('ry', value_1.mapAttribute(value, String));
    };
    SVGEllipseElementBuilder.prototype.pathLength = function (value) {
        return this.attr('pathLength', value_1.mapAttribute(value, String));
    };
    return SVGEllipseElementBuilder;
}(SVGElementBuilder));
exports.SVGEllipseElementBuilder = SVGEllipseElementBuilder;
var SVGFEBlendElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEBlendElementBuilder, _super);
    function SVGFEBlendElementBuilder() {
        return _super.call(this, 'feBlend') || this;
    }
    SVGFEBlendElementBuilder.prototype.in1 = function (value) {
        return this.attr('in1', value);
    };
    SVGFEBlendElementBuilder.prototype.in2 = function (value) {
        return this.attr('in2', value);
    };
    SVGFEBlendElementBuilder.prototype.mode = function (value) {
        return this.attr('mode', value);
    };
    return SVGFEBlendElementBuilder;
}(SVGElementBuilder));
exports.SVGFEBlendElementBuilder = SVGFEBlendElementBuilder;
var SVGFEColorMatrixElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEColorMatrixElementBuilder, _super);
    function SVGFEColorMatrixElementBuilder() {
        return _super.call(this, 'feColorMatrix') || this;
    }
    SVGFEColorMatrixElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    SVGFEColorMatrixElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    SVGFEColorMatrixElementBuilder.prototype.values = function (value) {
        return this.attr('mode', value_1.mapAttribute(value, function (v) { return (Array.isArray(v) ? v.join(' ') : String(v)); }));
    };
    return SVGFEColorMatrixElementBuilder;
}(SVGElementBuilder));
exports.SVGFEColorMatrixElementBuilder = SVGFEColorMatrixElementBuilder;
var SVGFEComponentTransferElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEComponentTransferElementBuilder, _super);
    function SVGFEComponentTransferElementBuilder() {
        return _super.call(this, 'feComponentTransfer') || this;
    }
    SVGFEComponentTransferElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    return SVGFEComponentTransferElementBuilder;
}(SVGElementBuilder));
exports.SVGFEComponentTransferElementBuilder = SVGFEComponentTransferElementBuilder;
var SVGFeCompositeElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFeCompositeElementBuilder, _super);
    function SVGFeCompositeElementBuilder() {
        return _super.call(this, 'feComposite') || this;
    }
    SVGFeCompositeElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    SVGFeCompositeElementBuilder.prototype.in2 = function (value) {
        return this.attr('in2', value);
    };
    SVGFeCompositeElementBuilder.prototype.operator = function (value) {
        return this.attr('operator', value);
    };
    SVGFeCompositeElementBuilder.prototype.k1 = function (value) {
        return this.attr('k1', value_1.mapAttribute(value, String));
    };
    SVGFeCompositeElementBuilder.prototype.k2 = function (value) {
        return this.attr('k2', value_1.mapAttribute(value, String));
    };
    SVGFeCompositeElementBuilder.prototype.k3 = function (value) {
        return this.attr('k3', value_1.mapAttribute(value, String));
    };
    SVGFeCompositeElementBuilder.prototype.k4 = function (value) {
        return this.attr('k4', value_1.mapAttribute(value, String));
    };
    return SVGFeCompositeElementBuilder;
}(SVGElementBuilder));
exports.SVGFeCompositeElementBuilder = SVGFeCompositeElementBuilder;
var SVGFEConvolveMatrixElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEConvolveMatrixElementBuilder, _super);
    function SVGFEConvolveMatrixElementBuilder() {
        return _super.call(this, 'feConvolveMatrix') || this;
    }
    SVGFEConvolveMatrixElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    SVGFEConvolveMatrixElementBuilder.prototype.order = function (value) {
        return this.attr('order', value_1.mapAttribute(value, String));
    };
    SVGFEConvolveMatrixElementBuilder.prototype.kernelMatrix = function (value) {
        return this.attr('kernelMatrix', value_1.mapAttribute(value, dom_builder_1.numbersListToString));
    };
    SVGFEConvolveMatrixElementBuilder.prototype.divisor = function (value) {
        return this.attr('divisor', value_1.mapAttribute(value, String));
    };
    SVGFEConvolveMatrixElementBuilder.prototype.bias = function (value) {
        return this.attr('bias', value_1.mapAttribute(value, String));
    };
    SVGFEConvolveMatrixElementBuilder.prototype.targetX = function (value) {
        return this.attr('targetX', value_1.mapAttribute(value, String));
    };
    SVGFEConvolveMatrixElementBuilder.prototype.targetY = function (value) {
        return this.attr('targetY', value_1.mapAttribute(value, String));
    };
    SVGFEConvolveMatrixElementBuilder.prototype.edgeMode = function (value) {
        return this.attr('edgeMode', value);
    };
    SVGFEConvolveMatrixElementBuilder.prototype.preserveAlpha = function (value) {
        return this.attr('preserveAlpha', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    return SVGFEConvolveMatrixElementBuilder;
}(SVGElementBuilder));
exports.SVGFEConvolveMatrixElementBuilder = SVGFEConvolveMatrixElementBuilder;
var SVGFEDiffuseLightingElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEDiffuseLightingElementBuilder, _super);
    function SVGFEDiffuseLightingElementBuilder() {
        return _super.call(this, 'feDiffuseLighting') || this;
    }
    SVGFEDiffuseLightingElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    SVGFEDiffuseLightingElementBuilder.prototype.surfaceScale = function (value) {
        return this.attr('surfaceScale', value_1.mapAttribute(value, String));
    };
    SVGFEDiffuseLightingElementBuilder.prototype.diffuseConstant = function (value) {
        return this.attr('diffuseConstant', value_1.mapAttribute(value, String));
    };
    return SVGFEDiffuseLightingElementBuilder;
}(SVGElementBuilder));
exports.SVGFEDiffuseLightingElementBuilder = SVGFEDiffuseLightingElementBuilder;
var SVGFEDisplacementMapElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEDisplacementMapElementBuilder, _super);
    function SVGFEDisplacementMapElementBuilder() {
        return _super.call(this, 'feDisplacementMap') || this;
    }
    SVGFEDisplacementMapElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    SVGFEDisplacementMapElementBuilder.prototype.in2 = function (value) {
        return this.attr('in2', value);
    };
    SVGFEDisplacementMapElementBuilder.prototype.scale = function (value) {
        return this.attr('scale', value_1.mapAttribute(value, String));
    };
    SVGFEDisplacementMapElementBuilder.prototype.xChannelSelector = function (value) {
        return this.attr('xChannelSelector', value);
    };
    SVGFEDisplacementMapElementBuilder.prototype.yChannelSelector = function (value) {
        return this.attr('yChannelSelector', value);
    };
    return SVGFEDisplacementMapElementBuilder;
}(SVGElementBuilder));
exports.SVGFEDisplacementMapElementBuilder = SVGFEDisplacementMapElementBuilder;
var SVGFEDistantLightElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEDistantLightElementBuilder, _super);
    function SVGFEDistantLightElementBuilder() {
        return _super.call(this, 'feDistantLight') || this;
    }
    SVGFEDistantLightElementBuilder.prototype.azimuth = function (value) {
        return this.attr('azimuth', value_1.mapAttribute(value, String));
    };
    SVGFEDistantLightElementBuilder.prototype.elevation = function (value) {
        return this.attr('elevation', value_1.mapAttribute(value, String));
    };
    return SVGFEDistantLightElementBuilder;
}(SVGElementBuilder));
exports.SVGFEDistantLightElementBuilder = SVGFEDistantLightElementBuilder;
var SVGFEFloodElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEFloodElementBuilder, _super);
    function SVGFEFloodElementBuilder() {
        return _super.call(this, 'feFlood') || this;
    }
    SVGFEFloodElementBuilder.prototype.floodColor = function (value) {
        return this.attr('flood-color', value);
    };
    SVGFEFloodElementBuilder.prototype.floodOpacity = function (value) {
        return this.attr('flood-opacity', value_1.mapAttribute(value, String));
    };
    return SVGFEFloodElementBuilder;
}(SVGElementBuilder));
exports.SVGFEFloodElementBuilder = SVGFEFloodElementBuilder;
var SVGFEFuncAElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEFuncAElementBuilder, _super);
    function SVGFEFuncAElementBuilder() {
        return _super.call(this, 'feFuncA') || this;
    }
    return SVGFEFuncAElementBuilder;
}(SVGElementBuilder));
exports.SVGFEFuncAElementBuilder = SVGFEFuncAElementBuilder;
var SVGFEFuncBElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEFuncBElementBuilder, _super);
    function SVGFEFuncBElementBuilder() {
        return _super.call(this, 'feFuncB') || this;
    }
    return SVGFEFuncBElementBuilder;
}(SVGElementBuilder));
exports.SVGFEFuncBElementBuilder = SVGFEFuncBElementBuilder;
var SVGFEFuncGElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEFuncGElementBuilder, _super);
    function SVGFEFuncGElementBuilder() {
        return _super.call(this, 'feFuncG') || this;
    }
    return SVGFEFuncGElementBuilder;
}(SVGElementBuilder));
exports.SVGFEFuncGElementBuilder = SVGFEFuncGElementBuilder;
var SVGFEFuncRElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEFuncRElementBuilder, _super);
    function SVGFEFuncRElementBuilder() {
        return _super.call(this, 'feFuncR') || this;
    }
    return SVGFEFuncRElementBuilder;
}(SVGElementBuilder));
exports.SVGFEFuncRElementBuilder = SVGFEFuncRElementBuilder;
var SVGFEGaussianBlurElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEGaussianBlurElementBuilder, _super);
    function SVGFEGaussianBlurElementBuilder() {
        return _super.call(this, 'feGaussianBlur') || this;
    }
    SVGFEGaussianBlurElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    SVGFEGaussianBlurElementBuilder.prototype.stdDeviation = function (value) {
        return this.attr('stdDeviation', value_1.mapAttribute(value, String));
    };
    SVGFEGaussianBlurElementBuilder.prototype.edgeMode = function (value) {
        return this.attr('edgeMode', value);
    };
    return SVGFEGaussianBlurElementBuilder;
}(SVGElementBuilder));
exports.SVGFEGaussianBlurElementBuilder = SVGFEGaussianBlurElementBuilder;
var SVGFEImageElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEImageElementBuilder, _super);
    function SVGFEImageElementBuilder() {
        return _super.call(this, 'feImage') || this;
    }
    SVGFEImageElementBuilder.prototype.preserveAspectRatio = function (value) {
        return this.attr('preserveAspectRatio', value);
    };
    SVGFEImageElementBuilder.prototype.href = function (value) {
        return this.attr('href', value);
    };
    return SVGFEImageElementBuilder;
}(SVGElementBuilder));
exports.SVGFEImageElementBuilder = SVGFEImageElementBuilder;
var SVGFEMergeElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEMergeElementBuilder, _super);
    function SVGFEMergeElementBuilder() {
        return _super.call(this, 'feMerge') || this;
    }
    return SVGFEMergeElementBuilder;
}(SVGElementBuilder));
exports.SVGFEMergeElementBuilder = SVGFEMergeElementBuilder;
var SVGFEMergeNodeElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEMergeNodeElementBuilder, _super);
    function SVGFEMergeNodeElementBuilder() {
        return _super.call(this, 'feMergeNode') || this;
    }
    SVGFEMergeNodeElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    return SVGFEMergeNodeElementBuilder;
}(SVGElementBuilder));
exports.SVGFEMergeNodeElementBuilder = SVGFEMergeNodeElementBuilder;
var SVGFEMorphologyElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEMorphologyElementBuilder, _super);
    function SVGFEMorphologyElementBuilder() {
        return _super.call(this, 'feMorphology') || this;
    }
    SVGFEMorphologyElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    SVGFEMorphologyElementBuilder.prototype.operator = function (value) {
        return this.attr('operator', value);
    };
    SVGFEMorphologyElementBuilder.prototype.radius = function (value) {
        return this.attr('radius', value_1.mapAttribute(value, String));
    };
    return SVGFEMorphologyElementBuilder;
}(SVGElementBuilder));
exports.SVGFEMorphologyElementBuilder = SVGFEMorphologyElementBuilder;
var SVGFEOffsetElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEOffsetElementBuilder, _super);
    function SVGFEOffsetElementBuilder() {
        return _super.call(this, 'feOffset') || this;
    }
    SVGFEOffsetElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    SVGFEOffsetElementBuilder.prototype.dx = function (value) {
        return this.attr('dx', value_1.mapAttribute(value, String));
    };
    SVGFEOffsetElementBuilder.prototype.dy = function (value) {
        return this.attr('dy', value_1.mapAttribute(value, String));
    };
    return SVGFEOffsetElementBuilder;
}(SVGElementBuilder));
exports.SVGFEOffsetElementBuilder = SVGFEOffsetElementBuilder;
var SVGFEPointLightElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFEPointLightElementBuilder, _super);
    function SVGFEPointLightElementBuilder() {
        return _super.call(this, 'fePointLight') || this;
    }
    SVGFEPointLightElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGFEPointLightElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGFEPointLightElementBuilder.prototype.z = function (value) {
        return this.attr('z', value_1.mapAttribute(value, String));
    };
    return SVGFEPointLightElementBuilder;
}(SVGElementBuilder));
exports.SVGFEPointLightElementBuilder = SVGFEPointLightElementBuilder;
var SVGFESpecularLightingElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFESpecularLightingElementBuilder, _super);
    function SVGFESpecularLightingElementBuilder() {
        return _super.call(this, 'feSpecularLighting') || this;
    }
    SVGFESpecularLightingElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    SVGFESpecularLightingElementBuilder.prototype.surfaceScale = function (value) {
        return this.attr('surfaceScale', value_1.mapAttribute(value, String));
    };
    SVGFESpecularLightingElementBuilder.prototype.specularConstant = function (value) {
        return this.attr('specularConstant', value_1.mapAttribute(value, String));
    };
    SVGFESpecularLightingElementBuilder.prototype.specularExponent = function (value) {
        return this.attr('specularExponent', value_1.mapAttribute(value, String));
    };
    return SVGFESpecularLightingElementBuilder;
}(SVGElementBuilder));
exports.SVGFESpecularLightingElementBuilder = SVGFESpecularLightingElementBuilder;
var SVGFESpotLightElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFESpotLightElementBuilder, _super);
    function SVGFESpotLightElementBuilder() {
        return _super.call(this, 'feSpotLight') || this;
    }
    SVGFESpotLightElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGFESpotLightElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGFESpotLightElementBuilder.prototype.z = function (value) {
        return this.attr('z', value_1.mapAttribute(value, String));
    };
    SVGFESpotLightElementBuilder.prototype.pointsAtX = function (value) {
        return this.attr('pointsAtX', value_1.mapAttribute(value, String));
    };
    SVGFESpotLightElementBuilder.prototype.pointsAtY = function (value) {
        return this.attr('pointsAtY', value_1.mapAttribute(value, String));
    };
    SVGFESpotLightElementBuilder.prototype.pointsAtZ = function (value) {
        return this.attr('pointsAtZ', value_1.mapAttribute(value, String));
    };
    SVGFESpotLightElementBuilder.prototype.specularComponent = function (value) {
        return this.attr('specularComponent', value_1.mapAttribute(value, String));
    };
    SVGFESpotLightElementBuilder.prototype.limitingConeAngle = function (value) {
        return this.attr('limitingConeAngle', value_1.mapAttribute(value, String));
    };
    return SVGFESpotLightElementBuilder;
}(SVGElementBuilder));
exports.SVGFESpotLightElementBuilder = SVGFESpotLightElementBuilder;
var SVGFETileElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFETileElementBuilder, _super);
    function SVGFETileElementBuilder() {
        return _super.call(this, 'feTile') || this;
    }
    SVGFETileElementBuilder.prototype.in = function (value) {
        return this.attr('in', value);
    };
    return SVGFETileElementBuilder;
}(SVGElementBuilder));
exports.SVGFETileElementBuilder = SVGFETileElementBuilder;
var SVGFETurbulenceElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFETurbulenceElementBuilder, _super);
    function SVGFETurbulenceElementBuilder() {
        return _super.call(this, 'feTurbulence') || this;
    }
    SVGFETurbulenceElementBuilder.prototype.baseFrequency = function (value) {
        return this.attr('baseFrequency', value_1.mapAttribute(value, String));
    };
    SVGFETurbulenceElementBuilder.prototype.numOctaves = function (value) {
        return this.attr('numOctaves', value_1.mapAttribute(value, String));
    };
    SVGFETurbulenceElementBuilder.prototype.seed = function (value) {
        return this.attr('seed', value_1.mapAttribute(value, String));
    };
    SVGFETurbulenceElementBuilder.prototype.stitchTiles = function (value) {
        return this.attr('stitchTiles', value);
    };
    SVGFETurbulenceElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    return SVGFETurbulenceElementBuilder;
}(SVGElementBuilder));
exports.SVGFETurbulenceElementBuilder = SVGFETurbulenceElementBuilder;
var SVGFilterElementBuilder = /** @class */ (function (_super) {
    __extends(SVGFilterElementBuilder, _super);
    function SVGFilterElementBuilder() {
        return _super.call(this, 'filter') || this;
    }
    SVGFilterElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGFilterElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGFilterElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    SVGFilterElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    SVGFilterElementBuilder.prototype.filterUnits = function (value) {
        return this.attr('filterUnits', value);
    };
    SVGFilterElementBuilder.prototype.primitiveUnits = function (value) {
        return this.attr('primitiveUnits', value);
    };
    SVGFilterElementBuilder.prototype.href = function (value) {
        return this.attr('href', value);
    };
    return SVGFilterElementBuilder;
}(SVGElementBuilder));
exports.SVGFilterElementBuilder = SVGFilterElementBuilder;
var SVGForeignObjectElementBuilder = /** @class */ (function (_super) {
    __extends(SVGForeignObjectElementBuilder, _super);
    function SVGForeignObjectElementBuilder() {
        return _super.call(this, 'foreignObject') || this;
    }
    SVGForeignObjectElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGForeignObjectElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGForeignObjectElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    SVGForeignObjectElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return SVGForeignObjectElementBuilder;
}(SVGElementBuilder));
exports.SVGForeignObjectElementBuilder = SVGForeignObjectElementBuilder;
var SVGGElementBuilder = /** @class */ (function (_super) {
    __extends(SVGGElementBuilder, _super);
    function SVGGElementBuilder() {
        return _super.call(this, 'g') || this;
    }
    return SVGGElementBuilder;
}(SVGElementBuilder));
exports.SVGGElementBuilder = SVGGElementBuilder;
var SVGImageElementBuilder = /** @class */ (function (_super) {
    __extends(SVGImageElementBuilder, _super);
    function SVGImageElementBuilder() {
        return _super.call(this, 'image') || this;
    }
    SVGImageElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGImageElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGImageElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    SVGImageElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    SVGImageElementBuilder.prototype.href = function (value) {
        return this.attr('href', value);
    };
    SVGImageElementBuilder.prototype.preserveAspectRatio = function (value) {
        return this.attr('preserveAspectRatio', value);
    };
    return SVGImageElementBuilder;
}(SVGElementBuilder));
exports.SVGImageElementBuilder = SVGImageElementBuilder;
var SVGLineElementBuilder = /** @class */ (function (_super) {
    __extends(SVGLineElementBuilder, _super);
    function SVGLineElementBuilder() {
        return _super.call(this, 'line') || this;
    }
    SVGLineElementBuilder.prototype.x1 = function (value) {
        return this.attr('x1', value_1.mapAttribute(value, String));
    };
    SVGLineElementBuilder.prototype.y1 = function (value) {
        return this.attr('y1', value_1.mapAttribute(value, String));
    };
    SVGLineElementBuilder.prototype.x2 = function (value) {
        return this.attr('x2', value_1.mapAttribute(value, String));
    };
    SVGLineElementBuilder.prototype.y2 = function (value) {
        return this.attr('y2', value_1.mapAttribute(value, String));
    };
    SVGLineElementBuilder.prototype.pathLength = function (value) {
        return this.attr('pathLength', value_1.mapAttribute(value, String));
    };
    return SVGLineElementBuilder;
}(SVGElementBuilder));
exports.SVGLineElementBuilder = SVGLineElementBuilder;
var SVGLinearGradientElementBuilder = /** @class */ (function (_super) {
    __extends(SVGLinearGradientElementBuilder, _super);
    function SVGLinearGradientElementBuilder() {
        return _super.call(this, 'linearGradient') || this;
    }
    SVGLinearGradientElementBuilder.prototype.gradientUnits = function (value) {
        return this.attr('gradientUnits', value);
    };
    SVGLinearGradientElementBuilder.prototype.gradientTransform = function (value) {
        return this.attr('gradientTransform', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    SVGLinearGradientElementBuilder.prototype.href = function (value) {
        return this.attr('href', value);
    };
    SVGLinearGradientElementBuilder.prototype.spreadMethod = function (value) {
        return this.attr('spreadMethod', value);
    };
    SVGLinearGradientElementBuilder.prototype.x1 = function (value) {
        return this.attr('x1', value_1.mapAttribute(value, String));
    };
    SVGLinearGradientElementBuilder.prototype.y1 = function (value) {
        return this.attr('y1', value_1.mapAttribute(value, String));
    };
    SVGLinearGradientElementBuilder.prototype.x2 = function (value) {
        return this.attr('x2', value_1.mapAttribute(value, String));
    };
    SVGLinearGradientElementBuilder.prototype.y2 = function (value) {
        return this.attr('y2', value_1.mapAttribute(value, String));
    };
    return SVGLinearGradientElementBuilder;
}(SVGElementBuilder));
exports.SVGLinearGradientElementBuilder = SVGLinearGradientElementBuilder;
var SVGMarkerElementBuilder = /** @class */ (function (_super) {
    __extends(SVGMarkerElementBuilder, _super);
    function SVGMarkerElementBuilder() {
        return _super.call(this, 'marker') || this;
    }
    SVGMarkerElementBuilder.prototype.markerHeight = function (value) {
        return this.attr('markerHeight', value_1.mapAttribute(value, String));
    };
    SVGMarkerElementBuilder.prototype.markerUnits = function (value) {
        return this.attr('markerUnits', value);
    };
    SVGMarkerElementBuilder.prototype.markerWidth = function (value) {
        return this.attr('markerWidth', value_1.mapAttribute(value, String));
    };
    SVGMarkerElementBuilder.prototype.orient = function (value) {
        return this.attr('orient', value);
    };
    SVGMarkerElementBuilder.prototype.preserveAspectRatio = function (value) {
        return this.attr('preserveAspectRatio', value);
    };
    SVGMarkerElementBuilder.prototype.refX = function (value) {
        return this.attr('refX', value);
    };
    SVGMarkerElementBuilder.prototype.refY = function (value) {
        return this.attr('refY', value);
    };
    SVGMarkerElementBuilder.prototype.viewBox = function (value) {
        return this.attr('viewBox', value_1.mapAttribute(value, dom_builder_1.numbersListToString));
    };
    return SVGMarkerElementBuilder;
}(SVGElementBuilder));
exports.SVGMarkerElementBuilder = SVGMarkerElementBuilder;
var SVGMaskElementBuilder = /** @class */ (function (_super) {
    __extends(SVGMaskElementBuilder, _super);
    function SVGMaskElementBuilder() {
        return _super.call(this, 'mask') || this;
    }
    SVGMaskElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    SVGMaskElementBuilder.prototype.maskContentUnits = function (value) {
        return this.attr('maskContentUnits', value);
    };
    SVGMaskElementBuilder.prototype.maskUnits = function (value) {
        return this.attr('maskUnits', value);
    };
    SVGMaskElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGMaskElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGMaskElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return SVGMaskElementBuilder;
}(SVGElementBuilder));
exports.SVGMaskElementBuilder = SVGMaskElementBuilder;
var SVGMetadataElementBuilder = /** @class */ (function (_super) {
    __extends(SVGMetadataElementBuilder, _super);
    function SVGMetadataElementBuilder() {
        return _super.call(this, 'metadata') || this;
    }
    return SVGMetadataElementBuilder;
}(SVGElementBuilder));
exports.SVGMetadataElementBuilder = SVGMetadataElementBuilder;
var SVGPathElementBuilder = /** @class */ (function (_super) {
    __extends(SVGPathElementBuilder, _super);
    function SVGPathElementBuilder() {
        return _super.call(this, 'path') || this;
    }
    SVGPathElementBuilder.prototype.d = function (value) {
        return this.attr('d', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    SVGPathElementBuilder.prototype.pathLength = function (value) {
        return this.attr('pathLength', value_1.mapAttribute(value, String));
    };
    return SVGPathElementBuilder;
}(SVGElementBuilder));
exports.SVGPathElementBuilder = SVGPathElementBuilder;
var SVGPatternElementBuilder = /** @class */ (function (_super) {
    __extends(SVGPatternElementBuilder, _super);
    function SVGPatternElementBuilder() {
        return _super.call(this, 'pattern') || this;
    }
    SVGPatternElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    SVGPatternElementBuilder.prototype.href = function (value) {
        return this.attr('href', value);
    };
    SVGPatternElementBuilder.prototype.patternContentUnits = function (value) {
        return this.attr('patternContentUnits', value);
    };
    SVGPatternElementBuilder.prototype.patternTransform = function (value) {
        return this.attr('patternTransform', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    SVGPatternElementBuilder.prototype.patternUnits = function (value) {
        return this.attr('patternUnits', value);
    };
    SVGPatternElementBuilder.prototype.preserveAspectRatio = function (value) {
        return this.attr('preserveAspectRatio', value);
    };
    SVGPatternElementBuilder.prototype.viewBox = function (value) {
        return this.attr('viewBox', value_1.mapAttribute(value, dom_builder_1.numbersListToString));
    };
    SVGPatternElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGPatternElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGPatternElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return SVGPatternElementBuilder;
}(SVGElementBuilder));
exports.SVGPatternElementBuilder = SVGPatternElementBuilder;
var SVGPolygonElementBuilder = /** @class */ (function (_super) {
    __extends(SVGPolygonElementBuilder, _super);
    function SVGPolygonElementBuilder() {
        return _super.call(this, 'polygon') || this;
    }
    SVGPolygonElementBuilder.prototype.points = function (value) {
        return this.attr('points', value_1.mapAttribute(value, dom_builder_1.numberPairsListToString));
    };
    SVGPolygonElementBuilder.prototype.pathLength = function (value) {
        return this.attr('pathLength', value_1.mapAttribute(value, String));
    };
    return SVGPolygonElementBuilder;
}(SVGElementBuilder));
exports.SVGPolygonElementBuilder = SVGPolygonElementBuilder;
var SVGPolylineElementBuilder = /** @class */ (function (_super) {
    __extends(SVGPolylineElementBuilder, _super);
    function SVGPolylineElementBuilder() {
        return _super.call(this, 'polyline') || this;
    }
    SVGPolylineElementBuilder.prototype.points = function (value) {
        return this.attr('points', value_1.mapAttribute(value, dom_builder_1.numberPairsListToString));
    };
    SVGPolylineElementBuilder.prototype.pathLength = function (value) {
        return this.attr('pathLength', value_1.mapAttribute(value, String));
    };
    return SVGPolylineElementBuilder;
}(SVGElementBuilder));
exports.SVGPolylineElementBuilder = SVGPolylineElementBuilder;
var SVGRadialGradientElementBuilder = /** @class */ (function (_super) {
    __extends(SVGRadialGradientElementBuilder, _super);
    function SVGRadialGradientElementBuilder() {
        return _super.call(this, 'radialGradient') || this;
    }
    SVGRadialGradientElementBuilder.prototype.cx = function (value) {
        return this.attr('cx', value_1.mapAttribute(value, String));
    };
    SVGRadialGradientElementBuilder.prototype.cy = function (value) {
        return this.attr('cy', value_1.mapAttribute(value, String));
    };
    SVGRadialGradientElementBuilder.prototype.fr = function (value) {
        return this.attr('fr', value_1.mapAttribute(value, String));
    };
    SVGRadialGradientElementBuilder.prototype.fx = function (value) {
        return this.attr('fx', value_1.mapAttribute(value, String));
    };
    SVGRadialGradientElementBuilder.prototype.fy = function (value) {
        return this.attr('fy', value_1.mapAttribute(value, String));
    };
    SVGRadialGradientElementBuilder.prototype.gradientUnits = function (value) {
        return this.attr('gradientUnits', value);
    };
    SVGRadialGradientElementBuilder.prototype.gradientTransform = function (value) {
        return this.attr('gradientTransform', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    SVGRadialGradientElementBuilder.prototype.href = function (url) {
        return this.attr('href', url);
    };
    SVGRadialGradientElementBuilder.prototype.r = function (value) {
        return this.attr('r', value_1.mapAttribute(value, String));
    };
    SVGRadialGradientElementBuilder.prototype.spreadMethod = function (value) {
        return this.attr('spreadMethod', value);
    };
    return SVGRadialGradientElementBuilder;
}(SVGElementBuilder));
exports.SVGRadialGradientElementBuilder = SVGRadialGradientElementBuilder;
var SVGScriptElementBuilder = /** @class */ (function (_super) {
    __extends(SVGScriptElementBuilder, _super);
    function SVGScriptElementBuilder() {
        return _super.call(this, 'script') || this;
    }
    SVGScriptElementBuilder.prototype.crossorigin = function (value) {
        return this.attr('crossorigin', value);
    };
    SVGScriptElementBuilder.prototype.href = function (url) {
        return this.attr('href', url);
    };
    SVGScriptElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    return SVGScriptElementBuilder;
}(SVGElementBuilder));
exports.SVGScriptElementBuilder = SVGScriptElementBuilder;
var SVGStopElementBuilder = /** @class */ (function (_super) {
    __extends(SVGStopElementBuilder, _super);
    function SVGStopElementBuilder() {
        return _super.call(this, 'stop') || this;
    }
    SVGStopElementBuilder.prototype.offset = function (value) {
        return this.attr('offset', value_1.mapAttribute(value, String));
    };
    SVGStopElementBuilder.prototype.stopColor = function (value) {
        return this.attr('stop-color', value);
    };
    SVGStopElementBuilder.prototype.stopOpacity = function (value) {
        return this.attr('stop-opacity', value_1.mapAttribute(value, String));
    };
    return SVGStopElementBuilder;
}(SVGElementBuilder));
exports.SVGStopElementBuilder = SVGStopElementBuilder;
var SVGStyleElementBuilder = /** @class */ (function (_super) {
    __extends(SVGStyleElementBuilder, _super);
    function SVGStyleElementBuilder() {
        return _super.call(this, 'style') || this;
    }
    SVGStyleElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    SVGStyleElementBuilder.prototype.media = function (value) {
        return this.attr('media', value);
    };
    SVGStyleElementBuilder.prototype.title = function (value) {
        return this.attr('title', value);
    };
    return SVGStyleElementBuilder;
}(SVGElementBuilder));
exports.SVGStyleElementBuilder = SVGStyleElementBuilder;
var SVGSVGElementBuilder = /** @class */ (function (_super) {
    __extends(SVGSVGElementBuilder, _super);
    function SVGSVGElementBuilder() {
        return _super.call(this, 'svg') || this;
    }
    SVGSVGElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    SVGSVGElementBuilder.prototype.preserveAspectRatio = function (value) {
        return this.attr('preserveAspectRatio', value);
    };
    SVGSVGElementBuilder.prototype.viewBox = function (value) {
        return this.attr('viewBox', value_1.mapAttribute(value, dom_builder_1.numbersListToString));
    };
    SVGSVGElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    SVGSVGElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGSVGElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    return SVGSVGElementBuilder;
}(SVGGraphicsElementBuilder));
exports.SVGSVGElementBuilder = SVGSVGElementBuilder;
var SVGSwitchElementBuilder = /** @class */ (function (_super) {
    __extends(SVGSwitchElementBuilder, _super);
    function SVGSwitchElementBuilder() {
        return _super.call(this, 'switch') || this;
    }
    return SVGSwitchElementBuilder;
}(SVGElementBuilder));
exports.SVGSwitchElementBuilder = SVGSwitchElementBuilder;
var SVGSymbolElementBuilder = /** @class */ (function (_super) {
    __extends(SVGSymbolElementBuilder, _super);
    function SVGSymbolElementBuilder() {
        return _super.call(this, 'symbol') || this;
    }
    return SVGSymbolElementBuilder;
}(SVGElementBuilder));
exports.SVGSymbolElementBuilder = SVGSymbolElementBuilder;
var SVGTextElementBuilder = /** @class */ (function (_super) {
    __extends(SVGTextElementBuilder, _super);
    function SVGTextElementBuilder() {
        return _super.call(this, 'text') || this;
    }
    SVGTextElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGTextElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGTextElementBuilder.prototype.dx = function (value) {
        return this.attr('dx', value_1.mapAttribute(value, String));
    };
    SVGTextElementBuilder.prototype.dy = function (value) {
        return this.attr('dy', value_1.mapAttribute(value, String));
    };
    SVGTextElementBuilder.prototype.rotate = function (value) {
        return this.attr('rotate', value_1.mapAttribute(value, dom_builder_1.numbersListToString));
    };
    SVGTextElementBuilder.prototype.lengthAdjust = function (value) {
        return this.attr('lengthAdjust', value);
    };
    SVGTextElementBuilder.prototype.textLength = function (value) {
        return this.attr('textLength', value_1.mapAttribute(value, String));
    };
    SVGTextElementBuilder.prototype.text = function (value) {
        this._children.push(text_1.text(value));
        return this;
    };
    return SVGTextElementBuilder;
}(SVGElementBuilder));
exports.SVGTextElementBuilder = SVGTextElementBuilder;
var SVGTextPathElementBuilder = /** @class */ (function (_super) {
    __extends(SVGTextPathElementBuilder, _super);
    function SVGTextPathElementBuilder() {
        return _super.call(this, 'textPath') || this;
    }
    SVGTextPathElementBuilder.prototype.href = function (url) {
        return this.attr('href', url);
    };
    SVGTextPathElementBuilder.prototype.lengthAdjust = function (value) {
        return this.attr('lengthAdjust', value);
    };
    SVGTextPathElementBuilder.prototype.method = function (value) {
        return this.attr('method', value);
    };
    SVGTextPathElementBuilder.prototype.path = function (value) {
        return this.attr('path', value);
    };
    SVGTextPathElementBuilder.prototype.side = function (value) {
        return this.attr('side', value);
    };
    SVGTextPathElementBuilder.prototype.spacing = function (value) {
        return this.attr('spacing', value);
    };
    SVGTextPathElementBuilder.prototype.start = function (value) {
        return this.attr('start', value_1.mapAttribute(value, String));
    };
    SVGTextPathElementBuilder.prototype.offset = function (value) {
        return this.attr('offset', value_1.mapAttribute(value, String));
    };
    SVGTextPathElementBuilder.prototype.text = function (value) {
        this._children.push(text_1.text(value));
        return this;
    };
    SVGTextPathElementBuilder.prototype.textLength = function (value) {
        return this.attr('textLength', value_1.mapAttribute(value, String));
    };
    return SVGTextPathElementBuilder;
}(SVGElementBuilder));
exports.SVGTextPathElementBuilder = SVGTextPathElementBuilder;
var SVGTitleElementBuilder = /** @class */ (function (_super) {
    __extends(SVGTitleElementBuilder, _super);
    function SVGTitleElementBuilder() {
        return _super.call(this, 'title') || this;
    }
    return SVGTitleElementBuilder;
}(SVGElementBuilder));
exports.SVGTitleElementBuilder = SVGTitleElementBuilder;
var SVGTSpanElementBuilder = /** @class */ (function (_super) {
    __extends(SVGTSpanElementBuilder, _super);
    function SVGTSpanElementBuilder() {
        return _super.call(this, 'tSpan') || this;
    }
    SVGTSpanElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGTSpanElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGTSpanElementBuilder.prototype.dx = function (value) {
        return this.attr('dx', value_1.mapAttribute(value, String));
    };
    SVGTSpanElementBuilder.prototype.dy = function (value) {
        return this.attr('dy', value_1.mapAttribute(value, String));
    };
    SVGTSpanElementBuilder.prototype.rotate = function (value) {
        return this.attr('rotate', value_1.mapAttribute(value, dom_builder_1.numbersListToString));
    };
    SVGTSpanElementBuilder.prototype.lengthAdjust = function (value) {
        return this.attr('lengthAdjust', value);
    };
    SVGTSpanElementBuilder.prototype.textLength = function (value) {
        return this.attr('textLength', value_1.mapAttribute(value, String));
    };
    SVGTSpanElementBuilder.prototype.text = function (value) {
        this._children.push(text_1.text(value));
        return this;
    };
    return SVGTSpanElementBuilder;
}(SVGElementBuilder));
exports.SVGTSpanElementBuilder = SVGTSpanElementBuilder;
var SVGUseElementBuilder = /** @class */ (function (_super) {
    __extends(SVGUseElementBuilder, _super);
    function SVGUseElementBuilder() {
        return _super.call(this, 'use') || this;
    }
    SVGUseElementBuilder.prototype.href = function (value) {
        return this.attr('href', value);
    };
    SVGUseElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGUseElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGUseElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    SVGUseElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return SVGUseElementBuilder;
}(SVGElementBuilder));
exports.SVGUseElementBuilder = SVGUseElementBuilder;
var SVGViewElementBuilder = /** @class */ (function (_super) {
    __extends(SVGViewElementBuilder, _super);
    function SVGViewElementBuilder() {
        return _super.call(this, 'view') || this;
    }
    return SVGViewElementBuilder;
}(SVGElementBuilder));
exports.SVGViewElementBuilder = SVGViewElementBuilder;
var SVGRectElementBuilder = /** @class */ (function (_super) {
    __extends(SVGRectElementBuilder, _super);
    function SVGRectElementBuilder() {
        return _super.call(this, 'rect') || this;
    }
    SVGRectElementBuilder.prototype.x = function (value) {
        return this.attr('x', value_1.mapAttribute(value, String));
    };
    SVGRectElementBuilder.prototype.y = function (value) {
        return this.attr('y', value_1.mapAttribute(value, String));
    };
    SVGRectElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    SVGRectElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    SVGRectElementBuilder.prototype.rx = function (value) {
        return this.attr('rx', value_1.mapAttribute(value, String));
    };
    SVGRectElementBuilder.prototype.ry = function (value) {
        return this.attr('ry', value_1.mapAttribute(value, String));
    };
    SVGRectElementBuilder.prototype.pathLength = function (value) {
        return this.attr('pathLength', value_1.mapAttribute(value, String));
    };
    return SVGRectElementBuilder;
}(SVGElementBuilder));
exports.SVGRectElementBuilder = SVGRectElementBuilder;

},{"./hold_state":"fYSr","./dom_builder":"yiha","../value":"nFed","../lifecycle":"uV5V","./dom":"lbKn","tempo-std/lib/objects":"g3Xg","./element":"X9Ob","./fragment":"aQMP","./adapter":"kWOh","./component":"eDHy","./map_action":"KxWc","./map_query":"wbDd","./map_state":"kpTJ","./portal":"koeo","./simple_component":"LSkL","./until":"Ttvv","./match_bool_template":"ZVXL","./lazy":"hzRP","./text":"H1te"}],"YmhL":[function(require,module,exports) {
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
exports.CaptureStateTemplate = void 0;
var html_builder_1 = require("./html_builder");
var CaptureStateTemplate = /** @class */ (function () {
    function CaptureStateTemplate(capture) {
        this.capture = capture;
    }
    CaptureStateTemplate.prototype.render = function (ctx, state) {
        var localState = state;
        var builder = new html_builder_1.FragmentHTMLBuilder();
        var hook = function () { return localState; };
        this.capture(hook, builder);
        var template = builder.build();
        var view = template.render(ctx, localState);
        return {
            change: function (state) {
                localState = state;
                view.change(localState);
            },
            request: function (query) {
                view.request(query);
            },
            destroy: function () {
                view.destroy();
            }
        };
    };
    return CaptureStateTemplate;
}());
exports.CaptureStateTemplate = CaptureStateTemplate;

},{"./html_builder":"eyJE"}],"eyJE":[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UntilHTMLBuilder = exports.SimpleComponentHTMLBuilder = exports.PortalHTMLBuilder = exports.MapStateHTMLBuilder = exports.MapQueryHTMLBuilder = exports.MapActionHTMLBuilder = exports.FragmentHTMLBuilder = exports.ComponentHTMLBuilder = exports.HTMLVideoElementBuilder = exports.HTMLTrackElementBuilder = exports.HTMLTimeElementBuilder = exports.HTMLTextAreaElementBuilder = exports.HTMLTableHeaderCellElementBuilder = exports.HTMLTableDataCellElementBuilder = exports.HTMLTableColElementBuilder = exports.HTMLStyleElementBuilder = exports.HTMLSourceElementBuilder = exports.HTMLSlotElementBuilder = exports.HTMLSelectElementBuilder = exports.HTMLScriptElementBuilder = exports.HTMLQuoteElementBuilder = exports.HTMLProgressElementBuilder = exports.HTMLPictureElementBuilder = exports.HTMLParamElementBuilder = exports.HTMLOutputElementBuilder = exports.HTMLOptionElementBuilder = exports.HTMLOptGroupElementBuilder = exports.HTMLOListElementBuilder = exports.HTMLObjectElementBuilder = exports.HTMLModElementBuilder = exports.HTMLMeterElementBuilder = exports.HTMLMetaElementBuilder = exports.HTMLMapElementBuilder = exports.HTMLLinkElementBuilder = exports.HTMLLIElementBuilder = exports.HTMLLabelElementBuilder = exports.HTMLInputUrlElementBuilder = exports.InputTextElementBuilder = exports.HTMLInputTelElementBuilder = exports.HTMLInputSubmitElementBuilder = exports.HTMLInputSearchElementBuilder = exports.HTMLInputPasswordElementBuilder = exports.HTMLInputNumberElementBuilder = exports.HTMLInputImageElementBuilder = exports.HTMLInputFileElementBuilder = exports.HTMLInputEmailElementBuilder = exports.HTMLInputDateElementBuilder = exports.HTMLInputCheckedElementBuilder = exports.HTMLInputElementBuilder = exports.HTMLImageElementBuilder = exports.HTMLIFrameElementBuilder = exports.HTMLHtmlElementBuilder = exports.HTMLFormElementBuilder = exports.HTMLFieldSetElementBuilder = exports.HTMLEmbedElementBuilder = exports.HTMLDialogElementBuilder = exports.HTMLDetailsElementBuilder = exports.HTMLDataElementBuilder = exports.HTMLCanvasElementBuilder = exports.HTMLButtonElementBuilder = exports.HTMLBaseElementBuilder = exports.HTMLAudioElementBuilder = exports.HTMLAreaElementBuilder = exports.HTMLAnchorElementBuilder = exports.HTMLMediaElementBuilder = exports.HTMLElementBuilder = exports.El = exports.BaseHTMLBuilder = void 0;
var dom_1 = require("./dom");
var text_1 = require("./text");
var value_1 = require("../value");
var component_1 = require("./component");
var objects_1 = require("tempo-std/lib/objects");
var lifecycle_1 = require("../lifecycle");
var element_1 = require("./element");
var map_state_1 = require("./map_state");
var fragment_1 = require("./fragment");
var map_action_1 = require("./map_action");
var map_query_1 = require("./map_query");
var until_1 = require("./until");
var simple_component_1 = require("./simple_component");
var portal_1 = require("./portal");
var lazy_1 = require("./lazy");
var match_bool_template_1 = require("./match_bool_template");
var hold_state_1 = require("./hold_state");
var dom_builder_1 = require("./dom_builder");
var adapter_1 = require("./adapter");
var svg_builder_1 = require("./svg_builder");
var capture_state_1 = require("./capture_state");
var BaseHTMLBuilder = /** @class */ (function (_super) {
    __extends(BaseHTMLBuilder, _super);
    function BaseHTMLBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseHTMLBuilder.prototype.El = function (init) {
        if (init === void 0) { init = function () { }; }
        var builder = El(name);
        init(builder);
        this._children.push(builder.build());
        return this;
    };
    BaseHTMLBuilder.prototype.text = function (value) {
        this._children.push(text_1.text(value));
        return this;
    };
    // transform
    BaseHTMLBuilder.prototype.Adapter = function (props) {
        return this.Append(new adapter_1.AdapterTemplate(props.bootstrapState, props.mergeStates, props.propagate || (function () { return undefined; }), props.child));
    };
    BaseHTMLBuilder.prototype.Component = function (reducer, init) {
        var builder = new ComponentHTMLBuilder(reducer);
        init(builder);
        return this.Append(builder.build());
    };
    BaseHTMLBuilder.prototype.LocalAdapter = function (props) {
        return this.Append(new adapter_1.AdapterTemplate(function (state) { return state; }, function (_a) {
            var outerState = _a.outerState;
            return outerState;
        }, props.propagate || (function () { return undefined; }), props.child));
    };
    BaseHTMLBuilder.prototype.CaptureState = function (capture) {
        return this.Append(new capture_state_1.CaptureStateTemplate(capture));
    };
    BaseHTMLBuilder.prototype.ReleaseState = function (hook, merge, init) {
        var builder = new FragmentHTMLBuilder();
        init(builder);
        return this.MapState(function (b) { return merge(hook(), b); }, function ($) { return $.Append(builder); });
    };
    BaseHTMLBuilder.prototype.HoldState = function (holdf) {
        return this.Append(new hold_state_1.HoldStateTemplate(holdf, new FragmentHTMLBuilder()));
    };
    BaseHTMLBuilder.prototype.MapState = function (map, init) {
        var builder = new MapStateHTMLBuilder(map);
        init(builder);
        return this.Append(builder.build());
    };
    BaseHTMLBuilder.prototype.MapField = function (field, init) {
        return this.MapState(function (v) { return v[field]; }, init);
    };
    BaseHTMLBuilder.prototype.MapStateAndKeep = function (map, init) {
        var builder = new MapStateHTMLBuilder(function (state) {
            var inner = value_1.resolveAttribute(map)(state);
            if (inner !== undefined) {
                return [inner, state];
            }
            else {
                return undefined;
            }
        });
        init(builder);
        return this.Append(builder.build());
    };
    BaseHTMLBuilder.prototype.MapAction = function (map, init) {
        var builder = new MapActionHTMLBuilder(map);
        init(builder);
        return this.Append(builder.build());
    };
    BaseHTMLBuilder.prototype.MapQuery = function (map, init) {
        var builder = new MapQueryHTMLBuilder(map);
        init(builder);
        return this.Append(builder.build());
    };
    BaseHTMLBuilder.prototype.MatchBool = function (props) {
        return this.Append(new match_bool_template_1.MatchBoolTemplate(props.condition, props.true, props.false));
    };
    BaseHTMLBuilder.prototype.Lazy = function (lazyf) {
        return this.Append(new lazy_1.LazyTemplate(lazyf));
    };
    BaseHTMLBuilder.prototype.ForEach = function (init) {
        return this.Until(function (_a) {
            var state = _a.state, index = _a.index;
            return state[index];
        }, init);
    };
    BaseHTMLBuilder.prototype.Fragment = function (init) {
        var builder = new FragmentHTMLBuilder();
        init(builder);
        return this.Append(builder.build());
    };
    BaseHTMLBuilder.prototype.Iterate = function (map, init) {
        return this.MapState(function (outer) {
            var items = value_1.resolveAttribute(map)(outer);
            return items !== undefined ? [items, outer] : undefined;
        }, function ($) {
            $.Until(function (_a) {
                var _b = _a.state, items = _b[0], state = _b[1], index = _a.index;
                return items[index] && [items[index], state, index];
            }, init);
        });
    };
    BaseHTMLBuilder.prototype.Portal = function (appendChild, init) {
        var builder = new PortalHTMLBuilder(appendChild);
        init(builder);
        return this.Append(builder.build());
    };
    BaseHTMLBuilder.prototype.PortalWithSelector = function (selector, init) {
        return this.Portal(function (doc, node) {
            var el = doc.querySelector(selector);
            if (!el) {
                throw new Error("selector doesn't match any element: \"" + selector + "\"");
            }
            el.appendChild(node);
        }, init);
    };
    BaseHTMLBuilder.prototype.HeadPortal = function (init) {
        return this.Portal(function (doc, node) { return doc.head.appendChild(node); }, init);
    };
    BaseHTMLBuilder.prototype.BodyPortal = function (init) {
        return this.Portal(function (doc, node) { return doc.body.appendChild(node); }, init);
    };
    // SimpleComponent(
    //   init: (builder: SimpleComponentBuilder<State, Query>) => void
    // ) {
    //   const builder = new SimpleComponentBuilder<State, Query>()
    //   init(builder)
    //   return this.append(builder.build())
    // }
    BaseHTMLBuilder.prototype.Unless = function (condition, init) {
        return this.When(function (s) { return !condition(s); }, init);
    };
    BaseHTMLBuilder.prototype.Until = function (next, init) {
        var builder = new UntilHTMLBuilder(next);
        init(builder);
        return this.Append(builder.build());
    };
    BaseHTMLBuilder.prototype.When = function (condition, init) {
        var builder = new MapStateHTMLBuilder(function (s) {
            if (condition(s)) {
                return s;
            }
            else {
                return undefined;
            }
        });
        init(builder);
        return this.Append(builder.build());
    };
    // derived children
    BaseHTMLBuilder.prototype.A = function (init) {
        return initBuilder(new HTMLAnchorElementBuilder('a'), init, this);
    };
    BaseHTMLBuilder.prototype.ABBR = function (init) {
        return initBuilder(new HTMLElementBuilder('abbr'), init, this);
    };
    BaseHTMLBuilder.prototype.ADDRESS = function (init) {
        return initBuilder(new HTMLElementBuilder('address'), init, this);
    };
    BaseHTMLBuilder.prototype.AREA = function (init) {
        return initBuilder(new HTMLAreaElementBuilder('area'), init, this);
    };
    BaseHTMLBuilder.prototype.ARTICLE = function (init) {
        return initBuilder(new HTMLElementBuilder('article'), init, this);
    };
    BaseHTMLBuilder.prototype.ASIDE = function (init) {
        return initBuilder(new HTMLElementBuilder('aside'), init, this);
    };
    BaseHTMLBuilder.prototype.AUDIO = function (init) {
        return initBuilder(new HTMLAudioElementBuilder('audio'), init, this);
    };
    BaseHTMLBuilder.prototype.B = function (init) {
        return initBuilder(new HTMLElementBuilder('b'), init, this);
    };
    BaseHTMLBuilder.prototype.BASE = function (init) {
        return initBuilder(new HTMLBaseElementBuilder('base'), init, this);
    };
    BaseHTMLBuilder.prototype.BDI = function (init) {
        return initBuilder(new HTMLElementBuilder('bdi'), init, this);
    };
    BaseHTMLBuilder.prototype.BDO = function (init) {
        return initBuilder(new HTMLElementBuilder('bdo'), init, this);
    };
    BaseHTMLBuilder.prototype.BLOCKQUOTE = function (init) {
        return initBuilder(new HTMLQuoteElementBuilder('blockquote'), init, this);
    };
    BaseHTMLBuilder.prototype.BODY = function (init) {
        return initBuilder(new HTMLElementBuilder('body'), init, this);
    };
    BaseHTMLBuilder.prototype.BR = function (init) {
        return initBuilder(new HTMLElementBuilder('br'), init, this);
    };
    BaseHTMLBuilder.prototype.BUTTON = function (init) {
        return initBuilder(new HTMLButtonElementBuilder('button'), init, this);
    };
    BaseHTMLBuilder.prototype.CANVAS = function (init) {
        return initBuilder(new HTMLCanvasElementBuilder('canvas'), init, this);
    };
    BaseHTMLBuilder.prototype.CAPTION = function (init) {
        return initBuilder(new HTMLElementBuilder('caption'), init, this);
    };
    BaseHTMLBuilder.prototype.CITE = function (init) {
        return initBuilder(new HTMLQuoteElementBuilder('cite'), init, this);
    };
    BaseHTMLBuilder.prototype.CODE = function (init) {
        return initBuilder(new HTMLElementBuilder('code'), init, this);
    };
    BaseHTMLBuilder.prototype.COL = function (init) {
        return initBuilder(new HTMLTableColElementBuilder('col'), init, this);
    };
    BaseHTMLBuilder.prototype.COLGROUP = function (init) {
        return initBuilder(new HTMLTableColElementBuilder('colgroup'), init, this);
    };
    BaseHTMLBuilder.prototype.DATA = function (init) {
        return initBuilder(new HTMLDataElementBuilder('data'), init, this);
    };
    BaseHTMLBuilder.prototype.DATALIST = function (init) {
        return initBuilder(new HTMLElementBuilder('datalist'), init, this);
    };
    BaseHTMLBuilder.prototype.DD = function (init) {
        return initBuilder(new HTMLElementBuilder('dd'), init, this);
    };
    BaseHTMLBuilder.prototype.DEL = function (init) {
        return initBuilder(new HTMLModElementBuilder('del'), init, this);
    };
    BaseHTMLBuilder.prototype.DETAILS = function (init) {
        return initBuilder(new HTMLDetailsElementBuilder('details'), init, this);
    };
    BaseHTMLBuilder.prototype.DFN = function (init) {
        return initBuilder(new HTMLElementBuilder('dfn'), init, this);
    };
    BaseHTMLBuilder.prototype.DIALOG = function (init) {
        return initBuilder(new HTMLDialogElementBuilder('dialog'), init, this);
    };
    BaseHTMLBuilder.prototype.DIV = function (init) {
        return initBuilder(new HTMLElementBuilder('div'), init, this);
    };
    BaseHTMLBuilder.prototype.DL = function (init) {
        return initBuilder(new HTMLElementBuilder('dl'), init, this);
    };
    BaseHTMLBuilder.prototype.DT = function (init) {
        return initBuilder(new HTMLElementBuilder('dt'), init, this);
    };
    BaseHTMLBuilder.prototype.EM = function (init) {
        return initBuilder(new HTMLElementBuilder('em'), init, this);
    };
    BaseHTMLBuilder.prototype.EMBED = function (init) {
        return initBuilder(new HTMLEmbedElementBuilder('embed'), init, this);
    };
    BaseHTMLBuilder.prototype.FIELDSET = function (init) {
        return initBuilder(new HTMLFieldSetElementBuilder('fieldset'), init, this);
    };
    BaseHTMLBuilder.prototype.FIG_CAPTION = function (init) {
        return initBuilder(new HTMLElementBuilder('figcaption'), init, this);
    };
    BaseHTMLBuilder.prototype.FIGURE = function (init) {
        return initBuilder(new HTMLElementBuilder('figure'), init, this);
    };
    BaseHTMLBuilder.prototype.FOOTER = function (init) {
        return initBuilder(new HTMLElementBuilder('footer'), init, this);
    };
    BaseHTMLBuilder.prototype.FORM = function (init) {
        return initBuilder(new HTMLFormElementBuilder('form'), init, this);
    };
    BaseHTMLBuilder.prototype.H1 = function (init) {
        return initBuilder(new HTMLElementBuilder('h1'), init, this);
    };
    BaseHTMLBuilder.prototype.H2 = function (init) {
        return initBuilder(new HTMLElementBuilder('h2'), init, this);
    };
    BaseHTMLBuilder.prototype.H3 = function (init) {
        return initBuilder(new HTMLElementBuilder('h3'), init, this);
    };
    BaseHTMLBuilder.prototype.H4 = function (init) {
        return initBuilder(new HTMLElementBuilder('h4'), init, this);
    };
    BaseHTMLBuilder.prototype.H5 = function (init) {
        return initBuilder(new HTMLElementBuilder('h5'), init, this);
    };
    BaseHTMLBuilder.prototype.H6 = function (init) {
        return initBuilder(new HTMLElementBuilder('h6'), init, this);
    };
    BaseHTMLBuilder.prototype.HEAD = function (init) {
        return initBuilder(new HTMLElementBuilder('head'), init, this);
    };
    BaseHTMLBuilder.prototype.HEADER = function (init) {
        return initBuilder(new HTMLElementBuilder('header'), init, this);
    };
    BaseHTMLBuilder.prototype.HGROUP = function (init) {
        return initBuilder(new HTMLElementBuilder('hgroup'), init, this);
    };
    BaseHTMLBuilder.prototype.HR = function (init) {
        return initBuilder(new HTMLElementBuilder('hr'), init, this);
    };
    BaseHTMLBuilder.prototype.HTML = function (init) {
        return initBuilder(new HTMLHtmlElementBuilder('html'), init, this);
    };
    BaseHTMLBuilder.prototype.I = function (init) {
        return initBuilder(new HTMLElementBuilder('i'), init, this);
    };
    BaseHTMLBuilder.prototype.IFRAME = function (init) {
        return initBuilder(new HTMLIFrameElementBuilder('iframe'), init, this);
    };
    BaseHTMLBuilder.prototype.IMG = function (init) {
        return initBuilder(new HTMLImageElementBuilder('img'), init, this);
    };
    BaseHTMLBuilder.prototype.INPUT = function (init) {
        return initBuilder(new HTMLInputElementBuilder('input'), init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_BUTTON = function (init) {
        var builder = new HTMLInputElementBuilder('input');
        builder.type('button');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_CHECKBOX = function (init) {
        var builder = new HTMLInputCheckedElementBuilder('input');
        builder.type('checkbox');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_COLOR = function (init) {
        var builder = new HTMLInputElementBuilder('input');
        builder.type('color');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_DATE = function (init) {
        var builder = new HTMLInputDateElementBuilder('input');
        builder.type('date');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_DATETIME_LOCAL = function (init) {
        var builder = new HTMLInputDateElementBuilder('input');
        builder.type('datetime-local');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_EMAIL = function (init) {
        var builder = new HTMLInputEmailElementBuilder('input');
        builder.type('email');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_FILE = function (init) {
        var builder = new HTMLInputFileElementBuilder('input');
        builder.type('file');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_HIDDEN = function (init) {
        var builder = new HTMLInputElementBuilder('input');
        builder.type('hidden');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_IMAGE = function (init) {
        var builder = new HTMLInputImageElementBuilder('input');
        builder.type('image');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_MONTH = function (init) {
        var builder = new HTMLInputDateElementBuilder('input');
        builder.type('month');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_NUMBER = function (init) {
        var builder = new HTMLInputNumberElementBuilder('input');
        builder.type('number');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_PASSWORD = function (init) {
        var builder = new HTMLInputPasswordElementBuilder('input');
        builder.type('password');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_RADIO = function (init) {
        var builder = new HTMLInputCheckedElementBuilder('input');
        builder.type('radio');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_RANGE = function (init) {
        var builder = new HTMLInputNumberElementBuilder('input');
        builder.type('range');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_RESET = function (init) {
        var builder = new HTMLInputElementBuilder('input');
        builder.type('reset');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_SEARCH = function (init) {
        var builder = new HTMLInputSearchElementBuilder('input');
        builder.type('search');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_SUBMIT = function (init) {
        var builder = new HTMLInputSubmitElementBuilder('input');
        builder.type('submit');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_TEL = function (init) {
        var builder = new HTMLInputTelElementBuilder('input');
        builder.type('tel');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_TEXT = function (init) {
        var builder = new InputTextElementBuilder('input');
        builder.type('text');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_TIME = function (init) {
        var builder = new HTMLInputDateElementBuilder('input');
        builder.type('time');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_URL = function (init) {
        var builder = new HTMLInputUrlElementBuilder('input');
        builder.type('url');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INPUT_WEEK = function (init) {
        var builder = new HTMLInputDateElementBuilder('input');
        builder.type('week');
        return initBuilder(builder, init, this);
    };
    BaseHTMLBuilder.prototype.INS = function (init) {
        return initBuilder(new HTMLModElementBuilder('ins'), init, this);
    };
    BaseHTMLBuilder.prototype.KBD = function (init) {
        return initBuilder(new HTMLElementBuilder('kbd'), init, this);
    };
    BaseHTMLBuilder.prototype.LABEL = function (init) {
        return initBuilder(new HTMLLabelElementBuilder('label'), init, this);
    };
    BaseHTMLBuilder.prototype.LEGEND = function (init) {
        return initBuilder(new HTMLElementBuilder('legend'), init, this);
    };
    BaseHTMLBuilder.prototype.LI = function (init) {
        return initBuilder(new HTMLLIElementBuilder('li'), init, this);
    };
    BaseHTMLBuilder.prototype.LINK = function (init) {
        return initBuilder(new HTMLLinkElementBuilder('link'), init, this);
    };
    BaseHTMLBuilder.prototype.MAIN = function (init) {
        return initBuilder(new HTMLElementBuilder('main'), init, this);
    };
    BaseHTMLBuilder.prototype.MAP = function (init) {
        return initBuilder(new HTMLMapElementBuilder('map'), init, this);
    };
    BaseHTMLBuilder.prototype.MARK = function (init) {
        return initBuilder(new HTMLElementBuilder('mark'), init, this);
    };
    BaseHTMLBuilder.prototype.META = function (init) {
        return initBuilder(new HTMLMetaElementBuilder('meta'), init, this);
    };
    BaseHTMLBuilder.prototype.METER = function (init) {
        return initBuilder(new HTMLMeterElementBuilder('meter'), init, this);
    };
    BaseHTMLBuilder.prototype.NAV = function (init) {
        return initBuilder(new HTMLElementBuilder('nav'), init, this);
    };
    BaseHTMLBuilder.prototype.NOSCRIPT = function (init) {
        return initBuilder(new HTMLElementBuilder('noscript'), init, this);
    };
    BaseHTMLBuilder.prototype.OBJECT = function (init) {
        return initBuilder(new HTMLObjectElementBuilder('object'), init, this);
    };
    BaseHTMLBuilder.prototype.OL = function (init) {
        return initBuilder(new HTMLOListElementBuilder('ol'), init, this);
    };
    BaseHTMLBuilder.prototype.OPTGROUP = function (init) {
        return initBuilder(new HTMLOptGroupElementBuilder('optgroup'), init, this);
    };
    BaseHTMLBuilder.prototype.OPTION = function (init) {
        return initBuilder(new HTMLOptionElementBuilder('option'), init, this);
    };
    BaseHTMLBuilder.prototype.OUTPUT = function (init) {
        return initBuilder(new HTMLOutputElementBuilder('output'), init, this);
    };
    BaseHTMLBuilder.prototype.P = function (init) {
        return initBuilder(new HTMLElementBuilder('p'), init, this);
    };
    BaseHTMLBuilder.prototype.PARAM = function (init) {
        return initBuilder(new HTMLParamElementBuilder('param'), init, this);
    };
    BaseHTMLBuilder.prototype.PICTURE = function (init) {
        return initBuilder(new HTMLPictureElementBuilder('picture'), init, this);
    };
    BaseHTMLBuilder.prototype.PRE = function (init) {
        return initBuilder(new HTMLElementBuilder('pre'), init, this);
    };
    BaseHTMLBuilder.prototype.PROGRESS = function (init) {
        return initBuilder(new HTMLProgressElementBuilder('progress'), init, this);
    };
    BaseHTMLBuilder.prototype.Q = function (init) {
        return initBuilder(new HTMLQuoteElementBuilder('q'), init, this);
    };
    BaseHTMLBuilder.prototype.RP = function (init) {
        return initBuilder(new HTMLElementBuilder('rp'), init, this);
    };
    BaseHTMLBuilder.prototype.RT = function (init) {
        return initBuilder(new HTMLElementBuilder('rt'), init, this);
    };
    BaseHTMLBuilder.prototype.RUBY = function (init) {
        return initBuilder(new HTMLElementBuilder('ruby'), init, this);
    };
    BaseHTMLBuilder.prototype.S = function (init) {
        return initBuilder(new HTMLElementBuilder('s'), init, this);
    };
    BaseHTMLBuilder.prototype.SAMP = function (init) {
        return initBuilder(new HTMLElementBuilder('samp'), init, this);
    };
    BaseHTMLBuilder.prototype.SCRIPT = function (init) {
        return initBuilder(new HTMLScriptElementBuilder('script'), init, this);
    };
    BaseHTMLBuilder.prototype.SECTION = function (init) {
        return initBuilder(new HTMLElementBuilder('section'), init, this);
    };
    BaseHTMLBuilder.prototype.SELECT = function (init) {
        return initBuilder(new HTMLSelectElementBuilder('select'), init, this);
    };
    BaseHTMLBuilder.prototype.SLOT = function (init) {
        return initBuilder(new HTMLSlotElementBuilder('slot'), init, this);
    };
    BaseHTMLBuilder.prototype.SMALL = function (init) {
        return initBuilder(new HTMLElementBuilder('small'), init, this);
    };
    BaseHTMLBuilder.prototype.SOURCE = function (init) {
        return initBuilder(new HTMLSourceElementBuilder('source'), init, this);
    };
    BaseHTMLBuilder.prototype.SPAN = function (init) {
        return initBuilder(new HTMLElementBuilder('span'), init, this);
    };
    BaseHTMLBuilder.prototype.STRONG = function (init) {
        return initBuilder(new HTMLElementBuilder('strong'), init, this);
    };
    BaseHTMLBuilder.prototype.STYLE = function (init) {
        return initBuilder(new HTMLStyleElementBuilder('style'), init, this);
    };
    BaseHTMLBuilder.prototype.SUB = function (init) {
        return initBuilder(new HTMLElementBuilder('sub'), init, this);
    };
    BaseHTMLBuilder.prototype.SUMMARY = function (init) {
        return initBuilder(new HTMLElementBuilder('summary'), init, this);
    };
    BaseHTMLBuilder.prototype.SUP = function (init) {
        return initBuilder(new HTMLElementBuilder('sup'), init, this);
    };
    BaseHTMLBuilder.prototype.SVG = function (init) {
        return initBuilder(new svg_builder_1.SVGSVGElementBuilder(), init, this);
    };
    BaseHTMLBuilder.prototype.TABLE = function (init) {
        return initBuilder(new HTMLElementBuilder('table'), init, this);
    };
    BaseHTMLBuilder.prototype.TBODY = function (init) {
        return initBuilder(new HTMLElementBuilder('tbody'), init, this);
    };
    BaseHTMLBuilder.prototype.TD = function (init) {
        return initBuilder(new HTMLTableDataCellElementBuilder('td'), init, this);
    };
    BaseHTMLBuilder.prototype.TEMPLATE = function (init) {
        return initBuilder(new HTMLElementBuilder('template'), init, this);
    };
    BaseHTMLBuilder.prototype.TEXTAREA = function (init) {
        return initBuilder(new HTMLTextAreaElementBuilder('textarea'), init, this);
    };
    BaseHTMLBuilder.prototype.TFOOT = function (init) {
        return initBuilder(new HTMLElementBuilder('tfoot'), init, this);
    };
    BaseHTMLBuilder.prototype.TH = function (init) {
        return initBuilder(new HTMLTableHeaderCellElementBuilder('th'), init, this);
    };
    BaseHTMLBuilder.prototype.THEAD = function (init) {
        return initBuilder(new HTMLElementBuilder('thead'), init, this);
    };
    BaseHTMLBuilder.prototype.TIME = function (init) {
        return initBuilder(new HTMLTimeElementBuilder('time'), init, this);
    };
    BaseHTMLBuilder.prototype.TITLE = function (init) {
        return initBuilder(new HTMLElementBuilder('title'), init, this);
    };
    BaseHTMLBuilder.prototype.TR = function (init) {
        return initBuilder(new HTMLElementBuilder('tr'), init, this);
    };
    BaseHTMLBuilder.prototype.TRACK = function (init) {
        return initBuilder(new HTMLTrackElementBuilder('track'), init, this);
    };
    BaseHTMLBuilder.prototype.U = function (init) {
        return initBuilder(new HTMLElementBuilder('u'), init, this);
    };
    BaseHTMLBuilder.prototype.UL = function (init) {
        return initBuilder(new HTMLElementBuilder('ul'), init, this);
    };
    BaseHTMLBuilder.prototype.VAR = function (init) {
        return initBuilder(new HTMLElementBuilder('var'), init, this);
    };
    BaseHTMLBuilder.prototype.VIDEO = function (init) {
        return initBuilder(new HTMLVideoElementBuilder('video'), init, this);
    };
    BaseHTMLBuilder.prototype.WBR = function (init) {
        return initBuilder(new HTMLElementBuilder('wbr'), init, this);
    };
    return BaseHTMLBuilder;
}(dom_builder_1.DOMBuilder));
exports.BaseHTMLBuilder = BaseHTMLBuilder;
// dom generic
function El(tagName) {
    if (tagName === void 0) { tagName = 'div'; }
    return new HTMLElementBuilder(tagName);
}
exports.El = El;
var HTMLElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLElementBuilder, _super);
    function HTMLElementBuilder(tagName) {
        var _this = _super.call(this) || this;
        _this.tagName = tagName;
        _this._attributes = {};
        _this._styles = {};
        _this._handlers = {};
        return _this;
    }
    HTMLElementBuilder.prototype.build = function () {
        var _this = this;
        var _a, _b;
        return new element_1.DOMElement(dom_1.makeCreateElement(this.tagName), dom_builder_1.extractLiterals(this._attributes), dom_builder_1.extractDerived(this._attributes), dom_builder_1.extractLiterals(this._styles), dom_builder_1.extractDerived(this._styles), objects_1.keys(this._handlers).map(function (name) { return ({
            name: name,
            callback: _this._handlers[name]
        }); }), (_a = this._lifecycle) !== null && _a !== void 0 ? _a : lifecycle_1.makeEmptyLifecycle, (_b = this._respond) !== null && _b !== void 0 ? _b : (function (query, el, ctx) { }), // TODO better typing needed
        this._children);
    };
    // attributes, styles and handlers
    HTMLElementBuilder.prototype.attr = function (name, value) {
        if (value != null) {
            this._attributes[name] = value;
        }
        return this;
    };
    HTMLElementBuilder.prototype.style = function (name, value) {
        if (value != null) {
            this._styles[name] = value;
        }
        return this;
    };
    HTMLElementBuilder.prototype.handle = function (name, callback) {
        if (callback != null) {
            this._handlers[name] = callback;
        }
        return this;
    };
    HTMLElementBuilder.prototype.Lifecycle = function (makeLifecycle) {
        this._lifecycle = makeLifecycle;
        return this;
    };
    HTMLElementBuilder.prototype.Respond = function (response) {
        this._respond = response;
        return this;
    };
    // attribute shortcuts
    HTMLElementBuilder.prototype.accessKey = function (value) {
        return this.attr('accesskey', value);
    };
    HTMLElementBuilder.prototype.aria = function (name, value) {
        return this.attr("aria-" + name, value);
    };
    HTMLElementBuilder.prototype.class = function (value) {
        return this.attr('class', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    HTMLElementBuilder.prototype.contentEditable = function (value) {
        return this.attr('contenteditable', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.data = function (name, value) {
        return this.attr("data-" + name, value);
    };
    HTMLElementBuilder.prototype.dir = function (value) {
        return this.attr('role', value);
    };
    HTMLElementBuilder.prototype.draggable = function (value) {
        return this.attr('draggable', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.hidden = function (value) {
        return this.attr('hidden', value_1.mapAttribute(value, dom_builder_1.toggleToString('hidden')));
    };
    HTMLElementBuilder.prototype.id = function (value) {
        return this.attr('id', value);
    };
    HTMLElementBuilder.prototype.inputMode = function (value) {
        return this.attr('inputmode', value);
    };
    HTMLElementBuilder.prototype.is = function (value) {
        return this.attr('is', value);
    };
    HTMLElementBuilder.prototype.itemId = function (value) {
        return this.attr('itemid', value);
    };
    HTMLElementBuilder.prototype.itemProp = function (value) {
        return this.attr('itemprop', value);
    };
    HTMLElementBuilder.prototype.itemRef = function (value) {
        return this.attr('itemref', value);
    };
    HTMLElementBuilder.prototype.itemScope = function (value) {
        return this.attr('itemscope', value);
    };
    HTMLElementBuilder.prototype.itemType = function (value) {
        return this.attr('itemtype', value);
    };
    HTMLElementBuilder.prototype.lang = function (value) {
        return this.attr('lang', value);
    };
    HTMLElementBuilder.prototype.part = function (value) {
        return this.attr('part', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    HTMLElementBuilder.prototype.role = function (value) {
        return this.attr('role', value);
    };
    HTMLElementBuilder.prototype.slot = function (value) {
        return this.attr('slot', value);
    };
    HTMLElementBuilder.prototype.spellCheck = function (value) {
        return this.attr('spellcheck', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.styles = function (value) {
        return this.attr('style', value_1.mapAttribute(value, dom_builder_1.stylesToString));
    };
    HTMLElementBuilder.prototype.tabIndex = function (value) {
        return this.attr('tabindex', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.title = function (value) {
        return this.attr('title', value);
    };
    // aria
    HTMLElementBuilder.prototype.ariaActiveDescendant = function (value) {
        return this.attr('aria-activedescendant', value);
    };
    HTMLElementBuilder.prototype.ariaAtomic = function (value) {
        return this.attr('aria-atomic', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaAutocomplete = function (value) {
        return this.attr('aria-autocomplete', value);
    };
    HTMLElementBuilder.prototype.ariaBusy = function (value) {
        return this.attr('aria-busy', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaChecked = function (value) {
        return this.attr('aria-checked', value_1.mapAttribute(value, function (v) {
            return v === true ? 'true' : v === false ? 'false' : v;
        }));
    };
    HTMLElementBuilder.prototype.ariaColCount = function (value) {
        return this.attr('aria-colcount', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaColIndex = function (value) {
        return this.attr('aria-colindex', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaColSpan = function (value) {
        return this.attr('aria-colspan', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaControls = function (value) {
        return this.attr('aria-controls', value);
    };
    HTMLElementBuilder.prototype.ariaCurrent = function (value) {
        return this.attr('aria-current', value_1.mapAttribute(value, function (v) {
            return v === true ? 'true' : v === false ? 'false' : v;
        }));
    };
    HTMLElementBuilder.prototype.ariaDescribedBy = function (value) {
        return this.attr('aria-describedby', value);
    };
    HTMLElementBuilder.prototype.ariaDetails = function (value) {
        return this.attr('aria-details', value);
    };
    HTMLElementBuilder.prototype.ariaDisabled = function (value) {
        return this.attr('aria-disabled', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaDropEffect = function (value) {
        return this.attr('aria-dropeffect', value);
    };
    HTMLElementBuilder.prototype.ariaErrorMessage = function (value) {
        return this.attr('aria-errormessage', value_1.mapAttribute(value, function (v) {
            return v === true ? 'true' : v === false ? 'false' : v;
        }));
    };
    HTMLElementBuilder.prototype.ariaExpanded = function (value) {
        return this.attr('aria-expanded', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaFlowTo = function (value) {
        return this.attr('aria-flowto', value);
    };
    HTMLElementBuilder.prototype.ariaGrabbed = function (value) {
        return this.attr('aria-grabbed', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaHasPopup = function (value) {
        return this.attr('aria-haspopup', value_1.mapAttribute(value, function (v) {
            return v === true ? 'true' : v === false ? 'false' : v;
        }));
    };
    HTMLElementBuilder.prototype.ariaHidden = function (value) {
        return this.attr('aria-hidden', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaInvalid = function (value) {
        return this.attr('aria-invalid', value);
    };
    HTMLElementBuilder.prototype.ariaKeyShortcuts = function (value) {
        return this.attr('aria-keyshortcuts', value);
    };
    HTMLElementBuilder.prototype.ariaLabel = function (value) {
        return this.attr('aria-label', value);
    };
    HTMLElementBuilder.prototype.ariaLabelledBy = function (value) {
        return this.attr('aria-labelledby', value);
    };
    HTMLElementBuilder.prototype.ariaLevel = function (value) {
        return this.attr('aria-level', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaLive = function (value) {
        return this.attr('aria-live', value);
    };
    HTMLElementBuilder.prototype.ariaModal = function (value) {
        return this.attr('aria-modal', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaMultiLine = function (value) {
        return this.attr('aria-multiline', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaMultiSelectable = function (value) {
        return this.attr('aria-multiselectable', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaOrientation = function (value) {
        return this.attr('aria-orientation', value);
    };
    HTMLElementBuilder.prototype.ariaOwns = function (value) {
        return this.attr('aria-owns', value);
    };
    HTMLElementBuilder.prototype.ariaPlaceHolder = function (value) {
        return this.attr('aria-placeholder', value);
    };
    HTMLElementBuilder.prototype.ariaPointSet = function (value) {
        return this.attr('aria-pointset', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaPosInSet = function (value) {
        return this.attr('aria-posinset', value);
    };
    HTMLElementBuilder.prototype.ariaPressed = function (value) {
        return this.attr('aria-pressed', value_1.mapAttribute(value, function (v) {
            return v === true ? 'true' : v === false ? 'false' : v;
        }));
    };
    HTMLElementBuilder.prototype.ariaReadonly = function (value) {
        return this.attr('aria-readonly', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaRequired = function (value) {
        return this.attr('aria-required', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaRelevant = function (value) {
        return this.attr('aria-relevant', value);
    };
    HTMLElementBuilder.prototype.ariaRoleDescription = function (value) {
        return this.attr('aria-roledescription', value);
    };
    HTMLElementBuilder.prototype.ariaRowCount = function (value) {
        return this.attr('aria-rowcount', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaRowIndex = function (value) {
        return this.attr('aria-rowindex', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaRowSpan = function (value) {
        return this.attr('aria-rowspan', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaSelected = function (value) {
        return this.attr('aria-selected', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLElementBuilder.prototype.ariaSetSize = function (value) {
        return this.attr('aria-setsize', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaSort = function (value) {
        return this.attr('aria-sort', value);
    };
    HTMLElementBuilder.prototype.ariaValueMax = function (value) {
        return this.attr('aria-valuemax', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaValueMin = function (value) {
        return this.attr('aria-valuemin', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaValueNow = function (value) {
        return this.attr('aria-valuenow', value_1.mapAttribute(value, String));
    };
    HTMLElementBuilder.prototype.ariaValueText = function (value) {
        return this.attr('aria-valuetext', value);
    };
    // event shortcuts
    HTMLElementBuilder.prototype.onAbort = function (handler) {
        return this.handle('abort', handler);
    };
    HTMLElementBuilder.prototype.onAutoComplete = function (handler) {
        return this.handle('autocomplete', handler);
    };
    HTMLElementBuilder.prototype.onAutoCompleteError = function (handler) {
        return this.handle('autocompleteerror', handler);
    };
    HTMLElementBuilder.prototype.onBlur = function (handler) {
        return this.handle('blur', handler);
    };
    HTMLElementBuilder.prototype.onCancel = function (handler) {
        return this.handle('cancel', handler);
    };
    HTMLElementBuilder.prototype.onChange = function (handler) {
        return this.handle('change', handler);
    };
    HTMLElementBuilder.prototype.onClick = function (handler) {
        return this.handle('click', handler);
    };
    HTMLElementBuilder.prototype.onCompositionEnd = function (handler) {
        return this.handle('compositionend', handler);
    };
    HTMLElementBuilder.prototype.onCompositionStart = function (handler) {
        return this.handle('compositionstart', handler);
    };
    HTMLElementBuilder.prototype.onCompositionUpdate = function (handler) {
        return this.handle('compositionupdate', handler);
    };
    HTMLElementBuilder.prototype.onContextMenu = function (handler) {
        return this.handle('contextmenu', handler);
    };
    HTMLElementBuilder.prototype.onDblClick = function (handler) {
        return this.handle('dblclick', handler);
    };
    HTMLElementBuilder.prototype.onDrag = function (handler) {
        return this.handle('drag', handler);
    };
    HTMLElementBuilder.prototype.onDragEnd = function (handler) {
        return this.handle('dragend', handler);
    };
    HTMLElementBuilder.prototype.onDragEnter = function (handler) {
        return this.handle('dragenter', handler);
    };
    HTMLElementBuilder.prototype.onDragExit = function (handler) {
        return this.handle('dragexit', handler);
    };
    HTMLElementBuilder.prototype.onDragLeave = function (handler) {
        return this.handle('dragleave', handler);
    };
    HTMLElementBuilder.prototype.onDragOver = function (handler) {
        return this.handle('dragover', handler);
    };
    HTMLElementBuilder.prototype.onDragStart = function (handler) {
        return this.handle('dragstart', handler);
    };
    HTMLElementBuilder.prototype.onDrop = function (handler) {
        return this.handle('drop', handler);
    };
    HTMLElementBuilder.prototype.onError = function (handler) {
        return this.handle('error', handler);
    };
    HTMLElementBuilder.prototype.onFocus = function (handler) {
        return this.handle('focus', handler);
    };
    HTMLElementBuilder.prototype.onFocusIn = function (handler) {
        return this.handle('focusin', handler);
    };
    HTMLElementBuilder.prototype.onFocusOut = function (handler) {
        return this.handle('focusout', handler);
    };
    HTMLElementBuilder.prototype.onInput = function (handler) {
        return this.handle('input', handler);
    };
    HTMLElementBuilder.prototype.onInvalid = function (handler) {
        return this.handle('invalid', handler);
    };
    HTMLElementBuilder.prototype.onKeyDown = function (handler) {
        return this.handle('keydown', handler);
    };
    HTMLElementBuilder.prototype.onKeyUp = function (handler) {
        return this.handle('keyup', handler);
    };
    HTMLElementBuilder.prototype.onLoad = function (handler) {
        return this.handle('load', handler);
    };
    HTMLElementBuilder.prototype.onMouseDown = function (handler) {
        return this.handle('mousedown', handler);
    };
    HTMLElementBuilder.prototype.onMouseEnter = function (handler) {
        return this.handle('mouseenter', handler);
    };
    HTMLElementBuilder.prototype.onMouseLeave = function (handler) {
        return this.handle('mouseleave', handler);
    };
    HTMLElementBuilder.prototype.onMouseMove = function (handler) {
        return this.handle('mousemove', handler);
    };
    HTMLElementBuilder.prototype.onMouseOut = function (handler) {
        return this.handle('mouseout', handler);
    };
    HTMLElementBuilder.prototype.onMouseOver = function (handler) {
        return this.handle('mouseover', handler);
    };
    HTMLElementBuilder.prototype.onMouseUp = function (handler) {
        return this.handle('mouseup', handler);
    };
    HTMLElementBuilder.prototype.onReset = function (handler) {
        return this.handle('reset', handler);
    };
    HTMLElementBuilder.prototype.onScroll = function (handler) {
        return this.handle('scroll', handler);
    };
    HTMLElementBuilder.prototype.onSelect = function (handler) {
        return this.handle('select', handler);
    };
    HTMLElementBuilder.prototype.onShow = function (handler) {
        return this.handle('show', handler);
    };
    HTMLElementBuilder.prototype.onSubmit = function (handler) {
        return this.handle('submit', handler);
    };
    HTMLElementBuilder.prototype.onTouchCancel = function (handler) {
        return this.handle('touchcancel', handler);
    };
    HTMLElementBuilder.prototype.onTouchEnd = function (handler) {
        return this.handle('touchend', handler);
    };
    HTMLElementBuilder.prototype.onTouchMove = function (handler) {
        return this.handle('touchmove', handler);
    };
    HTMLElementBuilder.prototype.onTouchStart = function (handler) {
        return this.handle('touchstart', handler);
    };
    HTMLElementBuilder.prototype.onWheel = function (handler) {
        return this.handle('wheel', handler);
    };
    return HTMLElementBuilder;
}(BaseHTMLBuilder));
exports.HTMLElementBuilder = HTMLElementBuilder;
function initBuilder(builder, init, parent) {
    init && init(builder);
    return parent.Append(builder.build());
}
var HTMLMediaElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLMediaElementBuilder, _super);
    function HTMLMediaElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLMediaElementBuilder.prototype.autoPlay = function (value) {
        return this.attr('autoplay', value_1.mapAttribute(value, dom_builder_1.toggleToString('autoplay')));
    };
    HTMLMediaElementBuilder.prototype.controls = function (value) {
        return this.attr('controls', value_1.mapAttribute(value, dom_builder_1.toggleToString('controls')));
    };
    HTMLMediaElementBuilder.prototype.crossOrigin = function (value) {
        return this.attr('crossorigin', value);
    };
    HTMLMediaElementBuilder.prototype.loop = function (value) {
        return this.attr('loop', value_1.mapAttribute(value, dom_builder_1.toggleToString('loop')));
    };
    HTMLMediaElementBuilder.prototype.muted = function (value) {
        return this.attr('muted', value_1.mapAttribute(value, dom_builder_1.toggleToString('muted')));
    };
    HTMLMediaElementBuilder.prototype.preload = function (value) {
        return this.attr('preload', value);
    };
    HTMLMediaElementBuilder.prototype.src = function (value) {
        return this.attr('src', value);
    };
    HTMLMediaElementBuilder.prototype.onAbortMedia = function (handler) {
        return this.handle('abort', handler);
    };
    HTMLMediaElementBuilder.prototype.onCanPlay = function (handler) {
        return this.handle('canplay', handler);
    };
    HTMLMediaElementBuilder.prototype.onCanPlayThrough = function (handler) {
        return this.handle('canplaythrough', handler);
    };
    HTMLMediaElementBuilder.prototype.onComplete = function (handler) {
        return this.handle('complete', handler);
    };
    HTMLMediaElementBuilder.prototype.onDurationChange = function (handler) {
        return this.handle('durationchange', handler);
    };
    HTMLMediaElementBuilder.prototype.onEmptied = function (handler) {
        return this.handle('emptied', handler);
    };
    HTMLMediaElementBuilder.prototype.onEnded = function (handler) {
        return this.handle('ended', handler);
    };
    HTMLMediaElementBuilder.prototype.onLoadedData = function (handler) {
        return this.handle('loadeddata', handler);
    };
    HTMLMediaElementBuilder.prototype.onLoadedMetadata = function (handler) {
        return this.handle('loadedmetadata', handler);
    };
    HTMLMediaElementBuilder.prototype.onPause = function (handler) {
        return this.handle('pause', handler);
    };
    HTMLMediaElementBuilder.prototype.onPlay = function (handler) {
        return this.handle('play', handler);
    };
    HTMLMediaElementBuilder.prototype.onPlaying = function (handler) {
        return this.handle('playing', handler);
    };
    HTMLMediaElementBuilder.prototype.onSeeked = function (handler) {
        return this.handle('seeked', handler);
    };
    HTMLMediaElementBuilder.prototype.onSeeking = function (handler) {
        return this.handle('seeking', handler);
    };
    HTMLMediaElementBuilder.prototype.onStalled = function (handler) {
        return this.handle('stalled', handler);
    };
    HTMLMediaElementBuilder.prototype.onSuspend = function (handler) {
        return this.handle('suspend', handler);
    };
    HTMLMediaElementBuilder.prototype.onTimeUpdate = function (handler) {
        return this.handle('timeupdate', handler);
    };
    HTMLMediaElementBuilder.prototype.onVolumeChange = function (handler) {
        return this.handle('volumechange', handler);
    };
    HTMLMediaElementBuilder.prototype.onWaiting = function (handler) {
        return this.handle('waiting', handler);
    };
    return HTMLMediaElementBuilder;
}(HTMLElementBuilder));
exports.HTMLMediaElementBuilder = HTMLMediaElementBuilder;
var HTMLAnchorElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLAnchorElementBuilder, _super);
    function HTMLAnchorElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLAnchorElementBuilder.prototype.download = function (filename) {
        return this.attr('download', filename);
    };
    HTMLAnchorElementBuilder.prototype.href = function (url) {
        return this.attr('href', url);
    };
    HTMLAnchorElementBuilder.prototype.hreflang = function (lang) {
        return this.attr('hreflang', lang);
    };
    HTMLAnchorElementBuilder.prototype.ping = function (url) {
        return this.attr('ping', value_1.mapAttribute(url, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    HTMLAnchorElementBuilder.prototype.rel = function (value) {
        return this.attr('rel', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    HTMLAnchorElementBuilder.prototype.target = function (name) {
        return this.attr('target', name);
    };
    HTMLAnchorElementBuilder.prototype.type = function (name) {
        return this.attr('type', name);
    };
    return HTMLAnchorElementBuilder;
}(HTMLElementBuilder));
exports.HTMLAnchorElementBuilder = HTMLAnchorElementBuilder;
var HTMLAreaElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLAreaElementBuilder, _super);
    function HTMLAreaElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLAreaElementBuilder.prototype.alt = function (name) {
        return this.attr('alt', name);
    };
    HTMLAreaElementBuilder.prototype.coords = function (name) {
        return this.attr('coords', name);
    };
    HTMLAreaElementBuilder.prototype.download = function (name) {
        return this.attr('download', name);
    };
    HTMLAreaElementBuilder.prototype.href = function (name) {
        return this.attr('href', name);
    };
    HTMLAreaElementBuilder.prototype.hreflang = function (name) {
        return this.attr('hreflang', name);
    };
    HTMLAreaElementBuilder.prototype.ping = function (name) {
        return this.attr('ping', name);
    };
    HTMLAreaElementBuilder.prototype.rel = function (name) {
        return this.attr('rel', name);
    };
    HTMLAreaElementBuilder.prototype.shape = function (name) {
        return this.attr('shape', name);
    };
    HTMLAreaElementBuilder.prototype.target = function (name) {
        return this.attr('target', name);
    };
    return HTMLAreaElementBuilder;
}(HTMLElementBuilder));
exports.HTMLAreaElementBuilder = HTMLAreaElementBuilder;
var HTMLAudioElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLAudioElementBuilder, _super);
    function HTMLAudioElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HTMLAudioElementBuilder;
}(HTMLMediaElementBuilder));
exports.HTMLAudioElementBuilder = HTMLAudioElementBuilder;
var HTMLBaseElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLBaseElementBuilder, _super);
    function HTMLBaseElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLBaseElementBuilder.prototype.href = function (name) {
        return this.attr('href', name);
    };
    HTMLBaseElementBuilder.prototype.target = function (name) {
        return this.attr('target', name);
    };
    return HTMLBaseElementBuilder;
}(HTMLElementBuilder));
exports.HTMLBaseElementBuilder = HTMLBaseElementBuilder;
var HTMLButtonElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLButtonElementBuilder, _super);
    function HTMLButtonElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLButtonElementBuilder.prototype.autofocus = function (value) {
        return this.attr('autofocus', value_1.mapAttribute(value, dom_builder_1.toggleToString('autofocus')));
    };
    HTMLButtonElementBuilder.prototype.disabled = function (value) {
        return this.attr('disabled', value_1.mapAttribute(value, dom_builder_1.toggleToString('disabled')));
    };
    HTMLButtonElementBuilder.prototype.form = function (value) {
        return this.attr('form', value);
    };
    HTMLButtonElementBuilder.prototype.formAction = function (value) {
        return this.attr('formaction', value);
    };
    HTMLButtonElementBuilder.prototype.formEncType = function (value) {
        return this.attr('formenctype', value);
    };
    HTMLButtonElementBuilder.prototype.formMethod = function (value) {
        return this.attr('formmethod', value);
    };
    HTMLButtonElementBuilder.prototype.formNoValidate = function (value) {
        return this.attr('formnovalidate', value_1.mapAttribute(value, dom_builder_1.toggleToString('formnovalidate')));
    };
    HTMLButtonElementBuilder.prototype.formTarget = function (value) {
        return this.attr('formtarget', value);
    };
    HTMLButtonElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    HTMLButtonElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    HTMLButtonElementBuilder.prototype.value = function (value) {
        return this.attr('value', value);
    };
    return HTMLButtonElementBuilder;
}(HTMLElementBuilder));
exports.HTMLButtonElementBuilder = HTMLButtonElementBuilder;
var HTMLCanvasElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLCanvasElementBuilder, _super);
    function HTMLCanvasElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLCanvasElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    HTMLCanvasElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return HTMLCanvasElementBuilder;
}(HTMLElementBuilder));
exports.HTMLCanvasElementBuilder = HTMLCanvasElementBuilder;
var HTMLDataElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLDataElementBuilder, _super);
    function HTMLDataElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLDataElementBuilder.prototype.value = function (value) {
        return this.attr('value', value);
    };
    return HTMLDataElementBuilder;
}(HTMLElementBuilder));
exports.HTMLDataElementBuilder = HTMLDataElementBuilder;
var HTMLDetailsElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLDetailsElementBuilder, _super);
    function HTMLDetailsElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLDetailsElementBuilder.prototype.open = function (value) {
        return this.attr('open', value_1.mapAttribute(value, dom_builder_1.toggleToString('open')));
    };
    return HTMLDetailsElementBuilder;
}(HTMLElementBuilder));
exports.HTMLDetailsElementBuilder = HTMLDetailsElementBuilder;
var HTMLDialogElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLDialogElementBuilder, _super);
    function HTMLDialogElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLDialogElementBuilder.prototype.open = function (value) {
        return this.attr('open', value_1.mapAttribute(value, dom_builder_1.toggleToString('open')));
    };
    return HTMLDialogElementBuilder;
}(HTMLElementBuilder));
exports.HTMLDialogElementBuilder = HTMLDialogElementBuilder;
var HTMLEmbedElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLEmbedElementBuilder, _super);
    function HTMLEmbedElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLEmbedElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    HTMLEmbedElementBuilder.prototype.src = function (value) {
        return this.attr('src', value);
    };
    HTMLEmbedElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    HTMLEmbedElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return HTMLEmbedElementBuilder;
}(HTMLElementBuilder));
exports.HTMLEmbedElementBuilder = HTMLEmbedElementBuilder;
var HTMLFieldSetElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLFieldSetElementBuilder, _super);
    function HTMLFieldSetElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLFieldSetElementBuilder.prototype.disabled = function (value) {
        return this.attr('disabled', value_1.mapAttribute(value, dom_builder_1.toggleToString('disabled')));
    };
    HTMLFieldSetElementBuilder.prototype.form = function (value) {
        return this.attr('form', value);
    };
    HTMLFieldSetElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    return HTMLFieldSetElementBuilder;
}(HTMLElementBuilder));
exports.HTMLFieldSetElementBuilder = HTMLFieldSetElementBuilder;
var HTMLFormElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLFormElementBuilder, _super);
    function HTMLFormElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLFormElementBuilder.prototype.acceptCharset = function (value) {
        return this.attr('accept-charset', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    HTMLFormElementBuilder.prototype.action = function (value) {
        return this.attr('action', value);
    };
    HTMLFormElementBuilder.prototype.autoComplete = function (value) {
        return this.attr('autocomplete', value);
    };
    HTMLFormElementBuilder.prototype.encType = function (value) {
        return this.attr('enctype', value);
    };
    HTMLFormElementBuilder.prototype.method = function (value) {
        return this.attr('method', value);
    };
    HTMLFormElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    HTMLFormElementBuilder.prototype.noValidate = function (value) {
        return this.attr('novalidate', value_1.mapAttribute(value, dom_builder_1.toggleToString('novalidate')));
    };
    HTMLFormElementBuilder.prototype.rel = function (value) {
        return this.attr('rel', value);
    };
    HTMLFormElementBuilder.prototype.target = function (value) {
        return this.attr('target', value);
    };
    return HTMLFormElementBuilder;
}(HTMLElementBuilder));
exports.HTMLFormElementBuilder = HTMLFormElementBuilder;
var HTMLHtmlElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLHtmlElementBuilder, _super);
    function HTMLHtmlElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLHtmlElementBuilder.prototype.xmlns = function (value) {
        return this.attr('xmlns', value);
    };
    return HTMLHtmlElementBuilder;
}(HTMLElementBuilder));
exports.HTMLHtmlElementBuilder = HTMLHtmlElementBuilder;
var HTMLIFrameElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLIFrameElementBuilder, _super);
    function HTMLIFrameElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLIFrameElementBuilder.prototype.allow = function (value) {
        return this.attr('allow', value);
    };
    HTMLIFrameElementBuilder.prototype.allowfullscreen = function (value) {
        return this.attr('allowfullscreen', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLIFrameElementBuilder.prototype.allowpaymentrequest = function (value) {
        return this.attr('allowpaymentrequest', value_1.mapAttribute(value, dom_builder_1.booleanToString));
    };
    HTMLIFrameElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    HTMLIFrameElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    HTMLIFrameElementBuilder.prototype.referrerpolicy = function (value) {
        return this.attr('referrerpolicy', value);
    };
    HTMLIFrameElementBuilder.prototype.sandbox = function (value) {
        return this.attr('sandbox', value);
    };
    HTMLIFrameElementBuilder.prototype.src = function (value) {
        return this.attr('src', value);
    };
    HTMLIFrameElementBuilder.prototype.srcdoc = function (value) {
        return this.attr('srcdoc', value);
    };
    HTMLIFrameElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return HTMLIFrameElementBuilder;
}(HTMLElementBuilder));
exports.HTMLIFrameElementBuilder = HTMLIFrameElementBuilder;
var HTMLImageElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLImageElementBuilder, _super);
    function HTMLImageElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLImageElementBuilder.prototype.alt = function (value) {
        return this.attr('alt', value);
    };
    HTMLImageElementBuilder.prototype.crossOrigin = function (value) {
        return this.attr('crossorigin', value);
    };
    HTMLImageElementBuilder.prototype.decoding = function (value) {
        return this.attr('decoding', value);
    };
    HTMLImageElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    HTMLImageElementBuilder.prototype.ismap = function (value) {
        return this.attr('ismap', value_1.mapAttribute(value, dom_builder_1.toggleToString('ismap')));
    };
    HTMLImageElementBuilder.prototype.loading = function (value) {
        return this.attr('loading', value);
    };
    HTMLImageElementBuilder.prototype.sizes = function (value) {
        return this.attr('sizes', value_1.mapAttribute(value, dom_builder_1.lostOrRecordToCommaSeparated));
    };
    HTMLImageElementBuilder.prototype.src = function (value) {
        return this.attr('src', value);
    };
    HTMLImageElementBuilder.prototype.srcset = function (value) {
        return this.attr('srcset', value_1.mapAttribute(value, dom_builder_1.lostOrRecordToCommaSeparated));
    };
    HTMLImageElementBuilder.prototype.usemap = function (value) {
        return this.attr('usemap', value);
    };
    HTMLImageElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return HTMLImageElementBuilder;
}(HTMLElementBuilder));
exports.HTMLImageElementBuilder = HTMLImageElementBuilder;
var HTMLInputElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputElementBuilder, _super);
    function HTMLInputElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    HTMLInputElementBuilder.prototype.autoComplete = function (value) {
        return this.attr('autocomplete', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    HTMLInputElementBuilder.prototype.autoFocus = function (value) {
        return this.attr('autofocus', value_1.mapAttribute(value, dom_builder_1.toggleToString('disabled')));
    };
    HTMLInputElementBuilder.prototype.disabled = function (value) {
        return this.attr('disabled', value_1.mapAttribute(value, dom_builder_1.toggleToString('disabled')));
    };
    HTMLInputElementBuilder.prototype.form = function (value) {
        return this.attr('form', value);
    };
    HTMLInputElementBuilder.prototype.list = function (value) {
        return this.attr('list', value);
    };
    HTMLInputElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    HTMLInputElementBuilder.prototype.readonly = function (value) {
        return this.attr('readonly', value_1.mapAttribute(value, dom_builder_1.toggleToString('readonly')));
    };
    HTMLInputElementBuilder.prototype.required = function (value) {
        return this.attr('required', value_1.mapAttribute(value, dom_builder_1.toggleToString('required')));
    };
    HTMLInputElementBuilder.prototype.value = function (value) {
        return this.attr('value', value);
    };
    return HTMLInputElementBuilder;
}(HTMLElementBuilder));
exports.HTMLInputElementBuilder = HTMLInputElementBuilder;
var HTMLInputCheckedElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputCheckedElementBuilder, _super);
    function HTMLInputCheckedElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputCheckedElementBuilder.prototype.checked = function (value) {
        return this.attr('checked', value_1.mapAttribute(value, dom_builder_1.toggleToString('checked')));
    };
    return HTMLInputCheckedElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputCheckedElementBuilder = HTMLInputCheckedElementBuilder;
var HTMLInputDateElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputDateElementBuilder, _super);
    function HTMLInputDateElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputDateElementBuilder.prototype.max = function (value) {
        return this.attr('max', value);
    };
    HTMLInputDateElementBuilder.prototype.min = function (value) {
        return this.attr('min', value);
    };
    HTMLInputDateElementBuilder.prototype.step = function (value) {
        return this.attr('step', value_1.mapAttribute(value, String));
    };
    return HTMLInputDateElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputDateElementBuilder = HTMLInputDateElementBuilder;
var HTMLInputEmailElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputEmailElementBuilder, _super);
    function HTMLInputEmailElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputEmailElementBuilder.prototype.multiple = function (value) {
        return this.attr('multiple', value_1.mapAttribute(value, dom_builder_1.toggleToString('multiple')));
    };
    HTMLInputEmailElementBuilder.prototype.size = function (value) {
        return this.attr('size', value_1.mapAttribute(value, String));
    };
    return HTMLInputEmailElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputEmailElementBuilder = HTMLInputEmailElementBuilder;
var HTMLInputFileElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputFileElementBuilder, _super);
    function HTMLInputFileElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputFileElementBuilder.prototype.accept = function (value) {
        return this.attr('accept', value_1.mapAttribute(value, dom_builder_1.lostOrRecordToCommaSeparated));
    };
    HTMLInputFileElementBuilder.prototype.capture = function (value) {
        return this.attr('capture', value);
    };
    HTMLInputFileElementBuilder.prototype.multiple = function (value) {
        return this.attr('multiple', value_1.mapAttribute(value, dom_builder_1.toggleToString('multiple')));
    };
    return HTMLInputFileElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputFileElementBuilder = HTMLInputFileElementBuilder;
var HTMLInputImageElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputImageElementBuilder, _super);
    function HTMLInputImageElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputImageElementBuilder.prototype.alt = function (value) {
        return this.attr('alt', value);
    };
    HTMLInputImageElementBuilder.prototype.formAction = function (value) {
        return this.attr('formaction', value);
    };
    HTMLInputImageElementBuilder.prototype.formEncType = function (value) {
        return this.attr('formenctype', value);
    };
    HTMLInputImageElementBuilder.prototype.formMethod = function (value) {
        return this.attr('formmethod', value);
    };
    HTMLInputImageElementBuilder.prototype.formValidate = function (value) {
        return this.attr('formvalidate', value);
    };
    HTMLInputImageElementBuilder.prototype.formTarget = function (value) {
        return this.attr('formtarget', value);
    };
    HTMLInputImageElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    HTMLInputImageElementBuilder.prototype.src = function (value) {
        return this.attr('src', value);
    };
    HTMLInputImageElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return HTMLInputImageElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputImageElementBuilder = HTMLInputImageElementBuilder;
var HTMLInputNumberElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputNumberElementBuilder, _super);
    function HTMLInputNumberElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputNumberElementBuilder.prototype.max = function (value) {
        return this.attr('max', value_1.mapAttribute(value, String));
    };
    HTMLInputNumberElementBuilder.prototype.min = function (value) {
        return this.attr('min', value_1.mapAttribute(value, String));
    };
    HTMLInputNumberElementBuilder.prototype.step = function (value) {
        return this.attr('step', value_1.mapAttribute(value, String));
    };
    HTMLInputNumberElementBuilder.prototype.value = function (value) {
        return this.attr('value', value_1.mapAttribute(value, String));
    };
    return HTMLInputNumberElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputNumberElementBuilder = HTMLInputNumberElementBuilder;
var HTMLInputPasswordElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputPasswordElementBuilder, _super);
    function HTMLInputPasswordElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputPasswordElementBuilder.prototype.maxlength = function (value) {
        return this.attr('maxlength', value_1.mapAttribute(value, String));
    };
    HTMLInputPasswordElementBuilder.prototype.minlength = function (value) {
        return this.attr('minlength', value_1.mapAttribute(value, String));
    };
    HTMLInputPasswordElementBuilder.prototype.pattern = function (value) {
        return this.attr('pattern', value);
    };
    HTMLInputPasswordElementBuilder.prototype.placeholder = function (value) {
        return this.attr('placeholder', value);
    };
    HTMLInputPasswordElementBuilder.prototype.size = function (value) {
        return this.attr('size', value_1.mapAttribute(value, String));
    };
    return HTMLInputPasswordElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputPasswordElementBuilder = HTMLInputPasswordElementBuilder;
var HTMLInputSearchElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputSearchElementBuilder, _super);
    function HTMLInputSearchElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputSearchElementBuilder.prototype.dirname = function (value) {
        return this.attr('dirname', value);
    };
    HTMLInputSearchElementBuilder.prototype.maxlength = function (value) {
        return this.attr('maxlength', value_1.mapAttribute(value, String));
    };
    HTMLInputSearchElementBuilder.prototype.minlength = function (value) {
        return this.attr('minlength', value_1.mapAttribute(value, String));
    };
    HTMLInputSearchElementBuilder.prototype.placeholder = function (value) {
        return this.attr('placeholder', value);
    };
    return HTMLInputSearchElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputSearchElementBuilder = HTMLInputSearchElementBuilder;
var HTMLInputSubmitElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputSubmitElementBuilder, _super);
    function HTMLInputSubmitElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputSubmitElementBuilder.prototype.formAction = function (value) {
        return this.attr('formaction', value);
    };
    HTMLInputSubmitElementBuilder.prototype.formEncType = function (value) {
        return this.attr('formenctype', value);
    };
    HTMLInputSubmitElementBuilder.prototype.formMethod = function (value) {
        return this.attr('formmethod', value);
    };
    HTMLInputSubmitElementBuilder.prototype.formValidate = function (value) {
        return this.attr('formvalidate', value_1.mapAttribute(value, dom_builder_1.toggleToString('formvalidate')));
    };
    HTMLInputSubmitElementBuilder.prototype.formTarget = function (value) {
        return this.attr('formtarget', value);
    };
    return HTMLInputSubmitElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputSubmitElementBuilder = HTMLInputSubmitElementBuilder;
var HTMLInputTelElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputTelElementBuilder, _super);
    function HTMLInputTelElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputTelElementBuilder.prototype.maxlength = function (value) {
        return this.attr('maxlength', value_1.mapAttribute(value, String));
    };
    HTMLInputTelElementBuilder.prototype.minlength = function (value) {
        return this.attr('minlength', value_1.mapAttribute(value, String));
    };
    HTMLInputTelElementBuilder.prototype.pattern = function (value) {
        return this.attr('pattern', value);
    };
    HTMLInputTelElementBuilder.prototype.placeholder = function (value) {
        return this.attr('placeholder', value);
    };
    HTMLInputTelElementBuilder.prototype.size = function (value) {
        return this.attr('size', value_1.mapAttribute(value, String));
    };
    return HTMLInputTelElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputTelElementBuilder = HTMLInputTelElementBuilder;
var InputTextElementBuilder = /** @class */ (function (_super) {
    __extends(InputTextElementBuilder, _super);
    function InputTextElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTextElementBuilder.prototype.dirname = function (value) {
        return this.attr('dirname', value);
    };
    InputTextElementBuilder.prototype.maxlength = function (value) {
        return this.attr('maxlength', value_1.mapAttribute(value, String));
    };
    InputTextElementBuilder.prototype.minlength = function (value) {
        return this.attr('minlength', value_1.mapAttribute(value, String));
    };
    InputTextElementBuilder.prototype.pattern = function (value) {
        return this.attr('pattern', value);
    };
    InputTextElementBuilder.prototype.placeholder = function (value) {
        return this.attr('placeholder', value);
    };
    InputTextElementBuilder.prototype.size = function (value) {
        return this.attr('size', value_1.mapAttribute(value, String));
    };
    return InputTextElementBuilder;
}(HTMLInputElementBuilder));
exports.InputTextElementBuilder = InputTextElementBuilder;
var HTMLInputUrlElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLInputUrlElementBuilder, _super);
    function HTMLInputUrlElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLInputUrlElementBuilder.prototype.maxlength = function (value) {
        return this.attr('maxlength', value_1.mapAttribute(value, String));
    };
    HTMLInputUrlElementBuilder.prototype.minlength = function (value) {
        return this.attr('minlength', value_1.mapAttribute(value, String));
    };
    HTMLInputUrlElementBuilder.prototype.placeholder = function (value) {
        return this.attr('placeholder', value);
    };
    return HTMLInputUrlElementBuilder;
}(HTMLInputElementBuilder));
exports.HTMLInputUrlElementBuilder = HTMLInputUrlElementBuilder;
var HTMLLabelElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLLabelElementBuilder, _super);
    function HTMLLabelElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLLabelElementBuilder.prototype.for = function (value) {
        return this.attr('for', value);
    };
    return HTMLLabelElementBuilder;
}(HTMLElementBuilder));
exports.HTMLLabelElementBuilder = HTMLLabelElementBuilder;
var HTMLLIElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLLIElementBuilder, _super);
    function HTMLLIElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLLIElementBuilder.prototype.value = function (value) {
        return this.attr('value', value);
    };
    return HTMLLIElementBuilder;
}(HTMLElementBuilder));
exports.HTMLLIElementBuilder = HTMLLIElementBuilder;
var HTMLLinkElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLLinkElementBuilder, _super);
    function HTMLLinkElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLLinkElementBuilder.prototype.as = function (value) {
        return this.attr('as', value);
    };
    HTMLLinkElementBuilder.prototype.crossOrigin = function (value) {
        return this.attr('crossorigin', value);
    };
    HTMLLinkElementBuilder.prototype.disabled = function (value) {
        return this.attr('disabled', value_1.mapAttribute(value, dom_builder_1.toggleToString('disabled')));
    };
    HTMLLinkElementBuilder.prototype.href = function (value) {
        return this.attr('href', value);
    };
    HTMLLinkElementBuilder.prototype.hreflang = function (value) {
        return this.attr('hreflang', value);
    };
    HTMLLinkElementBuilder.prototype.media = function (value) {
        return this.attr('media', value);
    };
    HTMLLinkElementBuilder.prototype.rel = function (value) {
        return this.attr('rel', value);
    };
    HTMLLinkElementBuilder.prototype.sizes = function (value) {
        return this.attr('sizes', value_1.mapAttribute(value, dom_builder_1.lostOrRecordToCommaSeparated));
    };
    HTMLLinkElementBuilder.prototype.title = function (value) {
        return this.attr('title', value);
    };
    HTMLLinkElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    return HTMLLinkElementBuilder;
}(HTMLElementBuilder));
exports.HTMLLinkElementBuilder = HTMLLinkElementBuilder;
var HTMLMapElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLMapElementBuilder, _super);
    function HTMLMapElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLMapElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    return HTMLMapElementBuilder;
}(HTMLElementBuilder));
exports.HTMLMapElementBuilder = HTMLMapElementBuilder;
var HTMLMetaElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLMetaElementBuilder, _super);
    function HTMLMetaElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLMetaElementBuilder.prototype.charset = function (value) {
        return this.attr('charset', value);
    };
    HTMLMetaElementBuilder.prototype.content = function (value) {
        return this.attr('content', value);
    };
    HTMLMetaElementBuilder.prototype.httpEquiv = function (value) {
        return this.attr('http-equiv', value);
    };
    HTMLMetaElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    return HTMLMetaElementBuilder;
}(HTMLElementBuilder));
exports.HTMLMetaElementBuilder = HTMLMetaElementBuilder;
var HTMLMeterElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLMeterElementBuilder, _super);
    function HTMLMeterElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLMeterElementBuilder.prototype.form = function (value) {
        return this.attr('step', value);
    };
    HTMLMeterElementBuilder.prototype.high = function (value) {
        return this.attr('high', value_1.mapAttribute(value, String));
    };
    HTMLMeterElementBuilder.prototype.low = function (value) {
        return this.attr('low', value_1.mapAttribute(value, String));
    };
    HTMLMeterElementBuilder.prototype.max = function (value) {
        return this.attr('max', value_1.mapAttribute(value, String));
    };
    HTMLMeterElementBuilder.prototype.min = function (value) {
        return this.attr('min', value_1.mapAttribute(value, String));
    };
    HTMLMeterElementBuilder.prototype.optimum = function (value) {
        return this.attr('optimum', value_1.mapAttribute(value, String));
    };
    HTMLMeterElementBuilder.prototype.value = function (value) {
        return this.attr('value', value_1.mapAttribute(value, String));
    };
    return HTMLMeterElementBuilder;
}(HTMLElementBuilder));
exports.HTMLMeterElementBuilder = HTMLMeterElementBuilder;
var HTMLModElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLModElementBuilder, _super);
    function HTMLModElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLModElementBuilder.prototype.cite = function (value) {
        return this.attr('cite', value);
    };
    HTMLModElementBuilder.prototype.dateTime = function (value) {
        return this.attr('datetime', value);
    };
    return HTMLModElementBuilder;
}(HTMLElementBuilder));
exports.HTMLModElementBuilder = HTMLModElementBuilder;
var HTMLObjectElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLObjectElementBuilder, _super);
    function HTMLObjectElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLObjectElementBuilder.prototype.data = function (value) {
        return this.attr('data', value);
    };
    HTMLObjectElementBuilder.prototype.form = function (value) {
        return this.attr('form', value);
    };
    HTMLObjectElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    HTMLObjectElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    HTMLObjectElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    HTMLObjectElementBuilder.prototype.typemustmatch = function (value) {
        return this.attr('typemustmatch', value);
    };
    HTMLObjectElementBuilder.prototype.usemap = function (value) {
        return this.attr('usemap', value);
    };
    HTMLObjectElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return HTMLObjectElementBuilder;
}(HTMLElementBuilder));
exports.HTMLObjectElementBuilder = HTMLObjectElementBuilder;
var HTMLOListElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLOListElementBuilder, _super);
    function HTMLOListElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLOListElementBuilder.prototype.reversed = function (value) {
        return this.attr('reversed', value_1.mapAttribute(value, dom_builder_1.toggleToString('reversed')));
    };
    HTMLOListElementBuilder.prototype.start = function (value) {
        return this.attr('start', value_1.mapAttribute(value, String));
    };
    HTMLOListElementBuilder.prototype.type = function (value) {
        return this.attr('type', value_1.mapAttribute(value, String));
    };
    return HTMLOListElementBuilder;
}(HTMLElementBuilder));
exports.HTMLOListElementBuilder = HTMLOListElementBuilder;
var HTMLOptGroupElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLOptGroupElementBuilder, _super);
    function HTMLOptGroupElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLOptGroupElementBuilder.prototype.disabled = function (value) {
        return this.attr('disabled', value_1.mapAttribute(value, dom_builder_1.toggleToString('disabled')));
    };
    HTMLOptGroupElementBuilder.prototype.label = function (value) {
        return this.attr('label', value);
    };
    return HTMLOptGroupElementBuilder;
}(HTMLElementBuilder));
exports.HTMLOptGroupElementBuilder = HTMLOptGroupElementBuilder;
var HTMLOptionElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLOptionElementBuilder, _super);
    function HTMLOptionElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLOptionElementBuilder.prototype.disabled = function (value) {
        return this.attr('disabled', value_1.mapAttribute(value, dom_builder_1.toggleToString('disabled')));
    };
    HTMLOptionElementBuilder.prototype.label = function (value) {
        return this.attr('label', value);
    };
    HTMLOptionElementBuilder.prototype.selected = function (value) {
        return this.attr('selected', value_1.mapAttribute(value, dom_builder_1.toggleToString('selected')));
    };
    HTMLOptionElementBuilder.prototype.value = function (value) {
        return this.attr('value', value);
    };
    return HTMLOptionElementBuilder;
}(HTMLElementBuilder));
exports.HTMLOptionElementBuilder = HTMLOptionElementBuilder;
var HTMLOutputElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLOutputElementBuilder, _super);
    function HTMLOutputElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLOutputElementBuilder.prototype.for = function (value) {
        return this.attr('for', value);
    };
    HTMLOutputElementBuilder.prototype.form = function (value) {
        return this.attr('form', value);
    };
    HTMLOutputElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    return HTMLOutputElementBuilder;
}(HTMLElementBuilder));
exports.HTMLOutputElementBuilder = HTMLOutputElementBuilder;
var HTMLParamElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLParamElementBuilder, _super);
    function HTMLParamElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLParamElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    HTMLParamElementBuilder.prototype.value = function (value) {
        return this.attr('value', value);
    };
    return HTMLParamElementBuilder;
}(HTMLElementBuilder));
exports.HTMLParamElementBuilder = HTMLParamElementBuilder;
var HTMLPictureElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLPictureElementBuilder, _super);
    function HTMLPictureElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HTMLPictureElementBuilder;
}(HTMLElementBuilder));
exports.HTMLPictureElementBuilder = HTMLPictureElementBuilder;
var HTMLProgressElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLProgressElementBuilder, _super);
    function HTMLProgressElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLProgressElementBuilder.prototype.max = function (value) {
        return this.attr('max', value_1.mapAttribute(value, String));
    };
    HTMLProgressElementBuilder.prototype.value = function (value) {
        return this.attr('value', value_1.mapAttribute(value, String));
    };
    HTMLProgressElementBuilder.prototype.onLoadEnd = function (handler) {
        return this.handle('loaddnd', handler);
    };
    HTMLProgressElementBuilder.prototype.onLoadStart = function (handler) {
        return this.handle('loadstart', handler);
    };
    HTMLProgressElementBuilder.prototype.onProgress = function (handler) {
        return this.handle('progress', handler);
    };
    HTMLProgressElementBuilder.prototype.onRateChange = function (handler) {
        return this.handle('ratechange', handler);
    };
    return HTMLProgressElementBuilder;
}(HTMLElementBuilder));
exports.HTMLProgressElementBuilder = HTMLProgressElementBuilder;
var HTMLQuoteElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLQuoteElementBuilder, _super);
    function HTMLQuoteElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLQuoteElementBuilder.prototype.cite = function (value) {
        return this.attr('cite', value);
    };
    return HTMLQuoteElementBuilder;
}(HTMLElementBuilder));
exports.HTMLQuoteElementBuilder = HTMLQuoteElementBuilder;
var HTMLScriptElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLScriptElementBuilder, _super);
    function HTMLScriptElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLScriptElementBuilder.prototype.async = function (value) {
        return this.attr('async', value_1.mapAttribute(value, dom_builder_1.toggleToString('async')));
    };
    HTMLScriptElementBuilder.prototype.crossOrigin = function (value) {
        return this.attr('crossorigin', value);
    };
    HTMLScriptElementBuilder.prototype.defer = function (value) {
        return this.attr('defer', value_1.mapAttribute(value, dom_builder_1.toggleToString('defer')));
    };
    HTMLScriptElementBuilder.prototype.integrity = function (value) {
        return this.attr('integrity', value);
    };
    HTMLScriptElementBuilder.prototype.nomodule = function (value) {
        return this.attr('nomodule', value_1.mapAttribute(value, dom_builder_1.toggleToString('nomodule')));
    };
    HTMLScriptElementBuilder.prototype.nonce = function (value) {
        return this.attr('nonce', value);
    };
    HTMLScriptElementBuilder.prototype.referrerpolicy = function (value) {
        return this.attr('referrerpolicy', value);
    };
    HTMLScriptElementBuilder.prototype.src = function (value) {
        return this.attr('src', value);
    };
    HTMLScriptElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    return HTMLScriptElementBuilder;
}(HTMLElementBuilder));
exports.HTMLScriptElementBuilder = HTMLScriptElementBuilder;
var HTMLSelectElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLSelectElementBuilder, _super);
    function HTMLSelectElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLSelectElementBuilder.prototype.autoComplete = function (value) {
        return this.attr('autocomplete', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    HTMLSelectElementBuilder.prototype.autoFocus = function (value) {
        return this.attr('autofocus', value_1.mapAttribute(value, dom_builder_1.toggleToString('disabled')));
    };
    HTMLSelectElementBuilder.prototype.disabled = function (value) {
        return this.attr('disabled', value_1.mapAttribute(value, dom_builder_1.toggleToString('disabled')));
    };
    HTMLSelectElementBuilder.prototype.form = function (value) {
        return this.attr('form', value);
    };
    HTMLSelectElementBuilder.prototype.multiple = function (value) {
        return this.attr('multiple', value_1.mapAttribute(value, dom_builder_1.toggleToString('multiple')));
    };
    HTMLSelectElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    HTMLSelectElementBuilder.prototype.required = function (value) {
        return this.attr('required', value_1.mapAttribute(value, dom_builder_1.toggleToString('required')));
    };
    HTMLSelectElementBuilder.prototype.size = function (value) {
        return this.attr('size', value_1.mapAttribute(value, String));
    };
    return HTMLSelectElementBuilder;
}(HTMLElementBuilder));
exports.HTMLSelectElementBuilder = HTMLSelectElementBuilder;
var HTMLSlotElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLSlotElementBuilder, _super);
    function HTMLSlotElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLSlotElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    HTMLSlotElementBuilder.prototype.onSlotChange = function (handler) {
        return this.handle('slotchange', handler);
    };
    return HTMLSlotElementBuilder;
}(HTMLElementBuilder));
exports.HTMLSlotElementBuilder = HTMLSlotElementBuilder;
var HTMLSourceElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLSourceElementBuilder, _super);
    function HTMLSourceElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLSourceElementBuilder.prototype.media = function (value) {
        return this.attr('media', value);
    };
    HTMLSourceElementBuilder.prototype.sizes = function (value) {
        return this.attr('sizes', value_1.mapAttribute(value, dom_builder_1.lostOrRecordToCommaSeparated));
    };
    HTMLSourceElementBuilder.prototype.src = function (value) {
        return this.attr('src', value);
    };
    HTMLSourceElementBuilder.prototype.srcset = function (value) {
        return this.attr('srcset', value);
    };
    HTMLSourceElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    return HTMLSourceElementBuilder;
}(HTMLElementBuilder));
exports.HTMLSourceElementBuilder = HTMLSourceElementBuilder;
var HTMLStyleElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLStyleElementBuilder, _super);
    function HTMLStyleElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLStyleElementBuilder.prototype.type = function (value) {
        return this.attr('type', value);
    };
    HTMLStyleElementBuilder.prototype.media = function (value) {
        return this.attr('media', value);
    };
    HTMLStyleElementBuilder.prototype.nonce = function (value) {
        return this.attr('nonce', value);
    };
    HTMLStyleElementBuilder.prototype.title = function (value) {
        return this.attr('title', value);
    };
    return HTMLStyleElementBuilder;
}(HTMLElementBuilder));
exports.HTMLStyleElementBuilder = HTMLStyleElementBuilder;
var HTMLTableColElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLTableColElementBuilder, _super);
    function HTMLTableColElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLTableColElementBuilder.prototype.span = function (value) {
        return this.attr('span', value_1.mapAttribute(value, String));
    };
    return HTMLTableColElementBuilder;
}(HTMLElementBuilder));
exports.HTMLTableColElementBuilder = HTMLTableColElementBuilder;
var HTMLTableDataCellElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLTableDataCellElementBuilder, _super);
    function HTMLTableDataCellElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLTableDataCellElementBuilder.prototype.colSpan = function (value) {
        return this.attr('colspan', value_1.mapAttribute(value, String));
    };
    HTMLTableDataCellElementBuilder.prototype.headers = function (value) {
        return this.attr('headers', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    HTMLTableDataCellElementBuilder.prototype.rowSpan = function (value) {
        return this.attr('rowspan', value_1.mapAttribute(value, String));
    };
    return HTMLTableDataCellElementBuilder;
}(HTMLElementBuilder));
exports.HTMLTableDataCellElementBuilder = HTMLTableDataCellElementBuilder;
var HTMLTableHeaderCellElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLTableHeaderCellElementBuilder, _super);
    function HTMLTableHeaderCellElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLTableHeaderCellElementBuilder.prototype.abbr = function (value) {
        return this.attr('abbr', value_1.mapAttribute(value, String));
    };
    HTMLTableHeaderCellElementBuilder.prototype.colSpan = function (value) {
        return this.attr('colspan', value_1.mapAttribute(value, String));
    };
    HTMLTableHeaderCellElementBuilder.prototype.headers = function (value) {
        return this.attr('headers', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    HTMLTableHeaderCellElementBuilder.prototype.rowSpan = function (value) {
        return this.attr('rowspan', value_1.mapAttribute(value, String));
    };
    HTMLTableHeaderCellElementBuilder.prototype.scope = function (value) {
        return this.attr('scope', value);
    };
    return HTMLTableHeaderCellElementBuilder;
}(HTMLElementBuilder));
exports.HTMLTableHeaderCellElementBuilder = HTMLTableHeaderCellElementBuilder;
var HTMLTextAreaElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLTextAreaElementBuilder, _super);
    function HTMLTextAreaElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLTextAreaElementBuilder.prototype.autoComplete = function (value) {
        return this.attr('autocomplete', value_1.mapAttribute(value, dom_builder_1.listOrRecordToSpaceSeparated));
    };
    HTMLTextAreaElementBuilder.prototype.autoFocus = function (value) {
        return this.attr('autofocus', value_1.mapAttribute(value, dom_builder_1.toggleToString('autofocus')));
    };
    HTMLTextAreaElementBuilder.prototype.cols = function (value) {
        return this.attr('cols', value_1.mapAttribute(value, String));
    };
    HTMLTextAreaElementBuilder.prototype.disabled = function (value) {
        return this.attr('disabled', value_1.mapAttribute(value, dom_builder_1.toggleToString('disabled')));
    };
    HTMLTextAreaElementBuilder.prototype.form = function (value) {
        return this.attr('form', value);
    };
    HTMLTextAreaElementBuilder.prototype.maxlength = function (value) {
        return this.attr('maxlength', value_1.mapAttribute(value, String));
    };
    HTMLTextAreaElementBuilder.prototype.minlength = function (value) {
        return this.attr('minlength', value_1.mapAttribute(value, String));
    };
    HTMLTextAreaElementBuilder.prototype.name = function (value) {
        return this.attr('name', value);
    };
    HTMLTextAreaElementBuilder.prototype.placeholder = function (value) {
        return this.attr('placeholder', value);
    };
    HTMLTextAreaElementBuilder.prototype.readonly = function (value) {
        return this.attr('readonly', value_1.mapAttribute(value, dom_builder_1.toggleToString('readonly')));
    };
    HTMLTextAreaElementBuilder.prototype.required = function (value) {
        return this.attr('required', value_1.mapAttribute(value, dom_builder_1.toggleToString('required')));
    };
    HTMLTextAreaElementBuilder.prototype.rows = function (value) {
        return this.attr('rows', value_1.mapAttribute(value, String));
    };
    HTMLTextAreaElementBuilder.prototype.spellCheck = function (value) {
        return this.attr('spellcheck', value_1.mapAttribute(value, String));
    };
    HTMLTextAreaElementBuilder.prototype.wrap = function (value) {
        return this.attr('wrap', value_1.mapAttribute(value, String));
    };
    return HTMLTextAreaElementBuilder;
}(HTMLElementBuilder));
exports.HTMLTextAreaElementBuilder = HTMLTextAreaElementBuilder;
var HTMLTimeElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLTimeElementBuilder, _super);
    function HTMLTimeElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLTimeElementBuilder.prototype.dateTime = function (value) {
        return this.attr('datetime', value);
    };
    return HTMLTimeElementBuilder;
}(HTMLElementBuilder));
exports.HTMLTimeElementBuilder = HTMLTimeElementBuilder;
var HTMLTrackElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLTrackElementBuilder, _super);
    function HTMLTrackElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLTrackElementBuilder.prototype.default = function (value) {
        return this.attr('default', value_1.mapAttribute(value, dom_builder_1.toggleToString('default')));
    };
    HTMLTrackElementBuilder.prototype.kind = function (value) {
        return this.attr('kind', value);
    };
    HTMLTrackElementBuilder.prototype.label = function (value) {
        return this.attr('label', value);
    };
    HTMLTrackElementBuilder.prototype.src = function (value) {
        return this.attr('src', value);
    };
    HTMLTrackElementBuilder.prototype.srclang = function (value) {
        return this.attr('srclang', value);
    };
    HTMLTrackElementBuilder.prototype.onCueChange = function (handler) {
        return this.handle('cuechange', handler);
    };
    return HTMLTrackElementBuilder;
}(HTMLElementBuilder));
exports.HTMLTrackElementBuilder = HTMLTrackElementBuilder;
var HTMLVideoElementBuilder = /** @class */ (function (_super) {
    __extends(HTMLVideoElementBuilder, _super);
    function HTMLVideoElementBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLVideoElementBuilder.prototype.height = function (value) {
        return this.attr('height', value_1.mapAttribute(value, String));
    };
    HTMLVideoElementBuilder.prototype.playsInline = function (value) {
        return this.attr('playsinline', value_1.mapAttribute(value, dom_builder_1.toggleToString('playsinline')));
    };
    HTMLVideoElementBuilder.prototype.poster = function (value) {
        return this.attr('poster', value);
    };
    HTMLVideoElementBuilder.prototype.width = function (value) {
        return this.attr('width', value_1.mapAttribute(value, String));
    };
    return HTMLVideoElementBuilder;
}(HTMLMediaElementBuilder));
exports.HTMLVideoElementBuilder = HTMLVideoElementBuilder;
// transforms
var ComponentHTMLBuilder = /** @class */ (function (_super) {
    __extends(ComponentHTMLBuilder, _super);
    function ComponentHTMLBuilder(reducer) {
        var _this = _super.call(this) || this;
        _this.reducer = reducer;
        _this._delayed = false;
        return _this;
    }
    ComponentHTMLBuilder.prototype.Equals = function (equals) {
        if (equals !== undefined) {
            this._equals = equals;
        }
        return this;
    };
    ComponentHTMLBuilder.prototype.Delayed = function (delayed) {
        if (delayed !== undefined) {
            this._delayed = delayed;
        }
        return this;
    };
    ComponentHTMLBuilder.prototype.build = function () {
        return new component_1.ComponentTemplate(this._delayed, this.reducer, this._equals, this._children);
    };
    return ComponentHTMLBuilder;
}(BaseHTMLBuilder));
exports.ComponentHTMLBuilder = ComponentHTMLBuilder;
var FragmentHTMLBuilder = /** @class */ (function (_super) {
    __extends(FragmentHTMLBuilder, _super);
    function FragmentHTMLBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FragmentHTMLBuilder.prototype.build = function () {
        return new fragment_1.FragmentTemplate(this._children);
    };
    return FragmentHTMLBuilder;
}(BaseHTMLBuilder));
exports.FragmentHTMLBuilder = FragmentHTMLBuilder;
var MapActionHTMLBuilder = /** @class */ (function (_super) {
    __extends(MapActionHTMLBuilder, _super);
    function MapActionHTMLBuilder(map) {
        var _this = _super.call(this) || this;
        _this.map = map;
        return _this;
    }
    MapActionHTMLBuilder.prototype.build = function () {
        return new map_action_1.MapActionTemplate(this.map, this._children);
    };
    return MapActionHTMLBuilder;
}(BaseHTMLBuilder));
exports.MapActionHTMLBuilder = MapActionHTMLBuilder;
var MapQueryHTMLBuilder = /** @class */ (function (_super) {
    __extends(MapQueryHTMLBuilder, _super);
    function MapQueryHTMLBuilder(map) {
        var _this = _super.call(this) || this;
        _this.map = map;
        return _this;
    }
    MapQueryHTMLBuilder.prototype.build = function () {
        return new map_query_1.MapQueryTemplate(this.map, this._children);
    };
    return MapQueryHTMLBuilder;
}(BaseHTMLBuilder));
exports.MapQueryHTMLBuilder = MapQueryHTMLBuilder;
var MapStateHTMLBuilder = /** @class */ (function (_super) {
    __extends(MapStateHTMLBuilder, _super);
    function MapStateHTMLBuilder(map) {
        var _this = _super.call(this) || this;
        _this.map = map;
        return _this;
    }
    MapStateHTMLBuilder.prototype.OrElse = function (init) {
        this._orElse = new FragmentHTMLBuilder();
        init(this._orElse);
        return this;
    };
    MapStateHTMLBuilder.prototype.Equals = function (equals) {
        if (equals !== undefined) {
            this._equals = equals;
        }
        return this;
    };
    MapStateHTMLBuilder.prototype.build = function () {
        var _a;
        return new map_state_1.MapStateTemplate(this.map, (_a = (this._orElse && this._orElse.build())) !== null && _a !== void 0 ? _a : text_1.text(''), this._equals, this._children);
    };
    return MapStateHTMLBuilder;
}(BaseHTMLBuilder));
exports.MapStateHTMLBuilder = MapStateHTMLBuilder;
var PortalHTMLBuilder = /** @class */ (function (_super) {
    __extends(PortalHTMLBuilder, _super);
    function PortalHTMLBuilder(appendChild) {
        var _this = _super.call(this) || this;
        _this.appendChild = appendChild;
        return _this;
    }
    PortalHTMLBuilder.prototype.build = function () {
        return new portal_1.PortalTemplate(this.appendChild, this._children);
    };
    return PortalHTMLBuilder;
}(BaseHTMLBuilder));
exports.PortalHTMLBuilder = PortalHTMLBuilder;
var SimpleComponentHTMLBuilder = /** @class */ (function (_super) {
    __extends(SimpleComponentHTMLBuilder, _super);
    function SimpleComponentHTMLBuilder() {
        var _this = _super.call(this) || this;
        _this._delayed = false;
        return _this;
    }
    SimpleComponentHTMLBuilder.prototype.Delayed = function (delayed) {
        if (delayed !== undefined) {
            this._delayed = delayed;
        }
        return this;
    };
    SimpleComponentHTMLBuilder.prototype.build = function () {
        return new simple_component_1.SimpleComponentTemplate(this._delayed, this._children);
    };
    return SimpleComponentHTMLBuilder;
}(BaseHTMLBuilder));
exports.SimpleComponentHTMLBuilder = SimpleComponentHTMLBuilder;
var UntilHTMLBuilder = /** @class */ (function (_super) {
    __extends(UntilHTMLBuilder, _super);
    function UntilHTMLBuilder(next) {
        var _this = _super.call(this) || this;
        _this.next = next;
        return _this;
    }
    UntilHTMLBuilder.prototype.build = function () {
        return new until_1.UntilTemplate(this.next, this._children);
    };
    return UntilHTMLBuilder;
}(BaseHTMLBuilder));
exports.UntilHTMLBuilder = UntilHTMLBuilder;

},{"./dom":"lbKn","./text":"H1te","../value":"nFed","./component":"eDHy","tempo-std/lib/objects":"g3Xg","../lifecycle":"uV5V","./element":"X9Ob","./map_state":"kpTJ","./fragment":"aQMP","./map_action":"KxWc","./map_query":"wbDd","./until":"Ttvv","./simple_component":"LSkL","./portal":"koeo","./lazy":"hzRP","./match_bool_template":"ZVXL","./hold_state":"fYSr","./dom_builder":"yiha","./adapter":"kWOh","./svg_builder":"bl4t","./capture_state":"YmhL"}],"HSRy":[function(require,module,exports) {
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
exports.MatchTemplate = void 0;
var dom_1 = require("./dom");
var dom_builder_1 = require("./dom_builder");
var objects_1 = require("tempo-std/lib/objects");
var MatchTemplate = /** @class */ (function () {
    function MatchTemplate(path, matcher) {
        this.path = path;
        this.matcher = objects_1.keys(matcher).reduce(function (acc, key) {
            acc[key] = dom_builder_1.childOrBuilderToTemplate(matcher[key]);
            return acc;
        }, {});
    }
    MatchTemplate.prototype.render = function (ctx, state) {
        var _a = ctx.withAppendToReference(), newCtx = _a.ctx, ref = _a.ref;
        var _b = this, path = _b.path, matcher = _b.matcher;
        var key = this.path.reduce(function (acc, key) { return acc[key]; }, state);
        var view = matcher[key].render(newCtx, state);
        return {
            change: function (state) {
                var newKey = path.reduce(function (acc, key) { return acc[key]; }, state);
                if (newKey === key) {
                    view.change(state);
                }
                else {
                    view.destroy();
                    key = newKey;
                    view = matcher[newKey].render(newCtx, state);
                }
            },
            destroy: function () {
                dom_1.removeNode(ref);
                view.destroy();
            },
            request: function (query) {
                view.request(query);
            }
        };
    };
    return MatchTemplate;
}());
exports.MatchTemplate = MatchTemplate;

},{"./dom":"lbKn","./dom_builder":"yiha","tempo-std/lib/objects":"g3Xg"}],"oCpq":[function(require,module,exports) {
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
exports.MatchValueTemplate = void 0;
var dom_1 = require("./dom");
var dom_builder_1 = require("./dom_builder");
var objects_1 = require("tempo-std/lib/objects");
var MatchValueTemplate = /** @class */ (function () {
    function MatchValueTemplate(path, matcher, orElse) {
        this.path = path;
        this.matcher = objects_1.keys(matcher).reduce(function (acc, key) {
            acc[key] = dom_builder_1.childOrBuilderToTemplate(matcher[key]);
            return acc;
        }, {});
        this.orElse = dom_builder_1.childOrBuilderToTemplate(orElse);
    }
    MatchValueTemplate.prototype.render = function (ctx, state) {
        var _this = this;
        var _a = this, matcher = _a.matcher, orElse = _a.orElse;
        var _b = ctx.withAppendToReference(), newCtx = _b.ctx, ref = _b.ref;
        var oldKey = this.path.reduce(function (acc, key) { return acc[key]; }, state);
        var template = this.matcher[oldKey] || this.orElse;
        var view = template.render(newCtx, state);
        return {
            change: function (state) {
                var newKey = _this.path.reduce(function (acc, key) { return acc[key]; }, state);
                if (newKey === oldKey) {
                    view.change(state);
                }
                else {
                    view.destroy();
                    oldKey = newKey;
                    var template_1 = matcher[newKey] || orElse;
                    view = template_1.render(newCtx, state);
                }
            },
            destroy: function () {
                dom_1.removeNode(ref);
                view.destroy();
            },
            request: function (query) {
                view.request(query);
            }
        };
    };
    return MatchValueTemplate;
}());
exports.MatchValueTemplate = MatchValueTemplate;

},{"./dom":"lbKn","./dom_builder":"yiha","tempo-std/lib/objects":"g3Xg"}],"aXl4":[function(require,module,exports) {
"use strict";
/*
Copyright 2020 Google LLC
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
exports.When = exports.Until = exports.Unless = exports.SimpleComponent = exports.BodyPortal = exports.HeadPortal = exports.PortalWithSelector = exports.Portal = exports.ForEach = exports.Fragment = exports.Lazy = exports.MatchAsyncResult = exports.MatchAsync = exports.MatchResult = exports.MatchMaybe = exports.MatchOption = exports.MatchValue = exports.MatchBool = exports.MatchKind = exports.Match = exports.MapQuery = exports.MapAction = exports.MapStateAndKeep = exports.MapField = exports.MapState = exports.Iterate = exports.HoldState = exports.ReleaseState = exports.CaptureState = exports.Component = exports.LocalAdapter = exports.Adapter = exports.WBR = exports.VIDEO = exports.VAR = exports.UL = exports.U = exports.TRACK = exports.TR = exports.TITLE = exports.TIME = exports.THEAD = exports.TH = exports.TFOOT = exports.TEXTAREA = exports.TEMPLATE = exports.TD = exports.TBODY = exports.TABLE = exports.SUP = exports.SUMMARY = exports.SUB = exports.STYLE = exports.STRONG = exports.SPAN = exports.SOURCE = exports.SMALL = exports.SLOT = exports.SELECT = exports.SECTION = exports.SCRIPT = exports.SAMP = exports.S = exports.RUBY = exports.RT = exports.RP = exports.Q = exports.PROGRESS = exports.PRE = exports.PICTURE = exports.PARAM = exports.P = exports.OUTPUT = exports.OPTION = exports.OPTGROUP = exports.OL = exports.OBJECT = exports.NOSCRIPT = exports.NAV = exports.METER = exports.META = exports.MARK = exports.MAP = exports.MAIN = exports.LINK = exports.LI = exports.LEGEND = exports.LABEL = exports.KBD = exports.INS = exports.INPUT = exports.IMG = exports.IFRAME = exports.I = exports.HTML = exports.HR = exports.HGROUP = exports.HEADER = exports.HEAD = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.FORM = exports.FOOTER = exports.FIGURE = exports.FIGCAPTION = exports.FIELDSET = exports.EMBED = exports.EM = exports.DT = exports.DL = exports.DIV = exports.DIALOG = exports.DFN = exports.DETAILS = exports.DEL = exports.DD = exports.DATALIST = exports.DATA = exports.COLGROUP = exports.COL = exports.CODE = exports.CITE = exports.CAPTION = exports.CANVAS = exports.BUTTON = exports.BR = exports.BODY = exports.BLOCKQUOTE = exports.BDO = exports.BDI = exports.BASE = exports.B = exports.AUDIO = exports.ASIDE = exports.ARTICLE = exports.AREA = exports.ADDRESS = exports.ABBR = exports.A = exports.El = void 0;
var html_builder_1 = require("./html_builder");
Object.defineProperty(exports, "El", { enumerable: true, get: function () { return html_builder_1.El; } });
var value_1 = require("../value");
var adapter_1 = require("./adapter");
var match_template_1 = require("./match_template");
var match_bool_template_1 = require("./match_bool_template");
var match_value_template_1 = require("./match_value_template");
var lazy_1 = require("./lazy");
var hold_state_1 = require("./hold_state");
var capture_state_1 = require("./capture_state");
// dom specific
function A(init) {
    var builder = new html_builder_1.HTMLAnchorElementBuilder('a');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.A = A;
function ABBR(init) {
    var builder = new html_builder_1.HTMLElementBuilder('abbr');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.ABBR = ABBR;
function ADDRESS(init) {
    var builder = new html_builder_1.HTMLElementBuilder('address');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.ADDRESS = ADDRESS;
function AREA(init) {
    var builder = new html_builder_1.HTMLAreaElementBuilder('area');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.AREA = AREA;
function ARTICLE(init) {
    var builder = new html_builder_1.HTMLElementBuilder('article');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.ARTICLE = ARTICLE;
function ASIDE(init) {
    var builder = new html_builder_1.HTMLElementBuilder('aside');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.ASIDE = ASIDE;
function AUDIO(init) {
    var builder = new html_builder_1.HTMLAudioElementBuilder('audio');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.AUDIO = AUDIO;
function B(init) {
    var builder = new html_builder_1.HTMLElementBuilder('b');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.B = B;
function BASE(init) {
    var builder = new html_builder_1.HTMLBaseElementBuilder('base');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.BASE = BASE;
function BDI(init) {
    var builder = new html_builder_1.HTMLElementBuilder('bdi');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.BDI = BDI;
function BDO(init) {
    var builder = new html_builder_1.HTMLElementBuilder('bdo');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.BDO = BDO;
function BLOCKQUOTE(init) {
    var builder = new html_builder_1.HTMLQuoteElementBuilder('blockquote');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.BLOCKQUOTE = BLOCKQUOTE;
function BODY(init) {
    var builder = new html_builder_1.HTMLElementBuilder('body');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.BODY = BODY;
function BR(init) {
    var builder = new html_builder_1.HTMLElementBuilder('br');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.BR = BR;
function BUTTON(init) {
    var builder = new html_builder_1.HTMLButtonElementBuilder('button');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.BUTTON = BUTTON;
function CANVAS(init) {
    var builder = new html_builder_1.HTMLCanvasElementBuilder('canvas');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.CANVAS = CANVAS;
function CAPTION(init) {
    var builder = new html_builder_1.HTMLElementBuilder('caption');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.CAPTION = CAPTION;
function CITE(init) {
    var builder = new html_builder_1.HTMLQuoteElementBuilder('cite');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.CITE = CITE;
function CODE(init) {
    var builder = new html_builder_1.HTMLElementBuilder('code');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.CODE = CODE;
function COL(init) {
    var builder = new html_builder_1.HTMLTableColElementBuilder('col');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.COL = COL;
function COLGROUP(init) {
    var builder = new html_builder_1.HTMLTableColElementBuilder('colgroup');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.COLGROUP = COLGROUP;
function DATA(init) {
    var builder = new html_builder_1.HTMLDataElementBuilder('data');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.DATA = DATA;
function DATALIST(init) {
    var builder = new html_builder_1.HTMLElementBuilder('datalist');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.DATALIST = DATALIST;
function DD(init) {
    var builder = new html_builder_1.HTMLElementBuilder('dd');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.DD = DD;
function DEL(init) {
    var builder = new html_builder_1.HTMLModElementBuilder('del');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.DEL = DEL;
function DETAILS(init) {
    var builder = new html_builder_1.HTMLDetailsElementBuilder('details');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.DETAILS = DETAILS;
function DFN(init) {
    var builder = new html_builder_1.HTMLElementBuilder('dfn');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.DFN = DFN;
function DIALOG(init) {
    var builder = new html_builder_1.HTMLDialogElementBuilder('dialog');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.DIALOG = DIALOG;
function DIV(init) {
    var builder = new html_builder_1.HTMLElementBuilder('div');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.DIV = DIV;
function DL(init) {
    var builder = new html_builder_1.HTMLElementBuilder('dl');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.DL = DL;
function DT(init) {
    var builder = new html_builder_1.HTMLElementBuilder('dt');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.DT = DT;
function EM(init) {
    var builder = new html_builder_1.HTMLElementBuilder('em');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.EM = EM;
function EMBED(init) {
    var builder = new html_builder_1.HTMLEmbedElementBuilder('embed');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.EMBED = EMBED;
function FIELDSET(init) {
    var builder = new html_builder_1.HTMLFieldSetElementBuilder('fieldset');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.FIELDSET = FIELDSET;
function FIGCAPTION(init) {
    var builder = new html_builder_1.HTMLElementBuilder('figcaption');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.FIGCAPTION = FIGCAPTION;
function FIGURE(init) {
    var builder = new html_builder_1.HTMLElementBuilder('figure');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.FIGURE = FIGURE;
function FOOTER(init) {
    var builder = new html_builder_1.HTMLElementBuilder('footer');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.FOOTER = FOOTER;
function FORM(init) {
    var builder = new html_builder_1.HTMLFormElementBuilder('form');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.FORM = FORM;
function H1(init) {
    var builder = new html_builder_1.HTMLElementBuilder('h1');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.H1 = H1;
function H2(init) {
    var builder = new html_builder_1.HTMLElementBuilder('h2');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.H2 = H2;
function H3(init) {
    var builder = new html_builder_1.HTMLElementBuilder('h3');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.H3 = H3;
function H4(init) {
    var builder = new html_builder_1.HTMLElementBuilder('h4');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.H4 = H4;
function H5(init) {
    var builder = new html_builder_1.HTMLElementBuilder('h5');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.H5 = H5;
function H6(init) {
    var builder = new html_builder_1.HTMLElementBuilder('h6');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.H6 = H6;
function HEAD(init) {
    var builder = new html_builder_1.HTMLElementBuilder('head');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.HEAD = HEAD;
function HEADER(init) {
    var builder = new html_builder_1.HTMLElementBuilder('header');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.HEADER = HEADER;
function HGROUP(init) {
    var builder = new html_builder_1.HTMLElementBuilder('hgroup');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.HGROUP = HGROUP;
function HR(init) {
    var builder = new html_builder_1.HTMLElementBuilder('hr');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.HR = HR;
function HTML(init) {
    var builder = new html_builder_1.HTMLHtmlElementBuilder('html');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.HTML = HTML;
function I(init) {
    var builder = new html_builder_1.HTMLElementBuilder('i');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.I = I;
function IFRAME(init) {
    var builder = new html_builder_1.HTMLIFrameElementBuilder('iframe');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.IFRAME = IFRAME;
function IMG(init) {
    var builder = new html_builder_1.HTMLImageElementBuilder('img');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.IMG = IMG;
function INPUT(init) {
    var builder = new html_builder_1.HTMLInputElementBuilder('input');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.INPUT = INPUT;
function INS(init) {
    var builder = new html_builder_1.HTMLModElementBuilder('ins');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.INS = INS;
function KBD(init) {
    var builder = new html_builder_1.HTMLElementBuilder('kbd');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.KBD = KBD;
function LABEL(init) {
    var builder = new html_builder_1.HTMLLabelElementBuilder('label');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.LABEL = LABEL;
function LEGEND(init) {
    var builder = new html_builder_1.HTMLElementBuilder('legend');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.LEGEND = LEGEND;
function LI(init) {
    var builder = new html_builder_1.HTMLLIElementBuilder('li');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.LI = LI;
function LINK(init) {
    var builder = new html_builder_1.HTMLLinkElementBuilder('link');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.LINK = LINK;
function MAIN(init) {
    var builder = new html_builder_1.HTMLElementBuilder('main');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.MAIN = MAIN;
function MAP(init) {
    var builder = new html_builder_1.HTMLMapElementBuilder('map');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.MAP = MAP;
function MARK(init) {
    var builder = new html_builder_1.HTMLElementBuilder('mark');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.MARK = MARK;
function META(init) {
    var builder = new html_builder_1.HTMLMetaElementBuilder('meta');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.META = META;
function METER(init) {
    var builder = new html_builder_1.HTMLMeterElementBuilder('meter');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.METER = METER;
function NAV(init) {
    var builder = new html_builder_1.HTMLElementBuilder('nav');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.NAV = NAV;
function NOSCRIPT(init) {
    var builder = new html_builder_1.HTMLElementBuilder('noscript');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.NOSCRIPT = NOSCRIPT;
function OBJECT(init) {
    var builder = new html_builder_1.HTMLObjectElementBuilder('object');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.OBJECT = OBJECT;
function OL(init) {
    var builder = new html_builder_1.HTMLOListElementBuilder('ol');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.OL = OL;
function OPTGROUP(init) {
    var builder = new html_builder_1.HTMLOptGroupElementBuilder('optgroup');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.OPTGROUP = OPTGROUP;
function OPTION(init) {
    var builder = new html_builder_1.HTMLOptionElementBuilder('option');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.OPTION = OPTION;
function OUTPUT(init) {
    var builder = new html_builder_1.HTMLOutputElementBuilder('output');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.OUTPUT = OUTPUT;
function P(init) {
    var builder = new html_builder_1.HTMLElementBuilder('p');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.P = P;
function PARAM(init) {
    var builder = new html_builder_1.HTMLParamElementBuilder('param');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.PARAM = PARAM;
function PICTURE(init) {
    var builder = new html_builder_1.HTMLPictureElementBuilder('picture');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.PICTURE = PICTURE;
function PRE(init) {
    var builder = new html_builder_1.HTMLElementBuilder('pre');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.PRE = PRE;
function PROGRESS(init) {
    var builder = new html_builder_1.HTMLProgressElementBuilder('progress');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.PROGRESS = PROGRESS;
function Q(init) {
    var builder = new html_builder_1.HTMLQuoteElementBuilder('q');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.Q = Q;
function RP(init) {
    var builder = new html_builder_1.HTMLElementBuilder('rp');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.RP = RP;
function RT(init) {
    var builder = new html_builder_1.HTMLElementBuilder('rt');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.RT = RT;
function RUBY(init) {
    var builder = new html_builder_1.HTMLElementBuilder('ruby');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.RUBY = RUBY;
function S(init) {
    var builder = new html_builder_1.HTMLElementBuilder('s');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.S = S;
function SAMP(init) {
    var builder = new html_builder_1.HTMLElementBuilder('samp');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SAMP = SAMP;
function SCRIPT(init) {
    var builder = new html_builder_1.HTMLScriptElementBuilder('script');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SCRIPT = SCRIPT;
function SECTION(init) {
    var builder = new html_builder_1.HTMLElementBuilder('section');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SECTION = SECTION;
function SELECT(init) {
    var builder = new html_builder_1.HTMLSelectElementBuilder('select');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SELECT = SELECT;
function SLOT(init) {
    var builder = new html_builder_1.HTMLSlotElementBuilder('slot');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SLOT = SLOT;
function SMALL(init) {
    var builder = new html_builder_1.HTMLElementBuilder('small');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SMALL = SMALL;
function SOURCE(init) {
    var builder = new html_builder_1.HTMLSourceElementBuilder('source');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SOURCE = SOURCE;
function SPAN(init) {
    var builder = new html_builder_1.HTMLElementBuilder('span');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SPAN = SPAN;
function STRONG(init) {
    var builder = new html_builder_1.HTMLElementBuilder('strong');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.STRONG = STRONG;
function STYLE(init) {
    var builder = new html_builder_1.HTMLStyleElementBuilder('style');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.STYLE = STYLE;
function SUB(init) {
    var builder = new html_builder_1.HTMLElementBuilder('sub');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SUB = SUB;
function SUMMARY(init) {
    var builder = new html_builder_1.HTMLElementBuilder('summary');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SUMMARY = SUMMARY;
function SUP(init) {
    var builder = new html_builder_1.HTMLElementBuilder('sup');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.SUP = SUP;
function TABLE(init) {
    var builder = new html_builder_1.HTMLElementBuilder('table');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TABLE = TABLE;
function TBODY(init) {
    var builder = new html_builder_1.HTMLElementBuilder('tbody');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TBODY = TBODY;
function TD(init) {
    var builder = new html_builder_1.HTMLTableDataCellElementBuilder('td');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TD = TD;
function TEMPLATE(init) {
    var builder = new html_builder_1.HTMLElementBuilder('template');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TEMPLATE = TEMPLATE;
function TEXTAREA(init) {
    var builder = new html_builder_1.HTMLTextAreaElementBuilder('textarea');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TEXTAREA = TEXTAREA;
function TFOOT(init) {
    var builder = new html_builder_1.HTMLElementBuilder('tfoot');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TFOOT = TFOOT;
function TH(init) {
    var builder = new html_builder_1.HTMLTableHeaderCellElementBuilder('th');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TH = TH;
function THEAD(init) {
    var builder = new html_builder_1.HTMLElementBuilder('thead');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.THEAD = THEAD;
function TIME(init) {
    var builder = new html_builder_1.HTMLTimeElementBuilder('time');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TIME = TIME;
function TITLE(init) {
    var builder = new html_builder_1.HTMLElementBuilder('title');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TITLE = TITLE;
function TR(init) {
    var builder = new html_builder_1.HTMLElementBuilder('tr');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TR = TR;
function TRACK(init) {
    var builder = new html_builder_1.HTMLTrackElementBuilder('track');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.TRACK = TRACK;
function U(init) {
    var builder = new html_builder_1.HTMLElementBuilder('u');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.U = U;
function UL(init) {
    var builder = new html_builder_1.HTMLElementBuilder('ul');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.UL = UL;
function VAR(init) {
    var builder = new html_builder_1.HTMLElementBuilder('varEl');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.VAR = VAR;
function VIDEO(init) {
    var builder = new html_builder_1.HTMLVideoElementBuilder('video');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.VIDEO = VIDEO;
function WBR(init) {
    var builder = new html_builder_1.HTMLElementBuilder('wbr');
    if (init !== undefined)
        init(builder);
    return builder;
}
exports.WBR = WBR;
function Adapter(props) {
    return new adapter_1.AdapterTemplate(props.bootstrapState, props.mergeStates, props.propagate || (function () { return undefined; }), props.child);
}
exports.Adapter = Adapter;
function LocalAdapter(props) {
    return new adapter_1.AdapterTemplate(function (state) { return state; }, function (_a) {
        var outerState = _a.outerState;
        return outerState;
    }, props.propagate || (function () { return undefined; }), props.child);
}
exports.LocalAdapter = LocalAdapter;
function Component(reducer, init) {
    var builder = new html_builder_1.ComponentHTMLBuilder(reducer);
    init(builder);
    return builder;
}
exports.Component = Component;
function CaptureState(capture) {
    return new capture_state_1.CaptureStateTemplate(capture);
}
exports.CaptureState = CaptureState;
function ReleaseState(hook, merge, init) {
    var builder = new html_builder_1.FragmentHTMLBuilder();
    init(builder);
    return MapState(function (b) { return merge(hook(), b); }, function ($) { return $.Append(builder); });
}
exports.ReleaseState = ReleaseState;
function HoldState(holdf) {
    var builder = new html_builder_1.FragmentHTMLBuilder();
    return new hold_state_1.HoldStateTemplate(holdf, builder);
}
exports.HoldState = HoldState;
function Iterate(map, init) {
    return MapState(function (outer) {
        var items = value_1.resolveAttribute(map)(outer);
        return items !== undefined ? [items, outer] : undefined;
    }, function (n) {
        n.Until(function (_a) {
            var _b = _a.state, items = _b[0], state = _b[1], index = _a.index;
            return items[index] && [items[index], state, index];
        }, init);
    });
}
exports.Iterate = Iterate;
function MapState(map, init) {
    var builder = new html_builder_1.MapStateHTMLBuilder(map);
    init(builder);
    return builder;
}
exports.MapState = MapState;
function MapField(field, init) {
    return MapState(function (v) { return v[field]; }, init);
}
exports.MapField = MapField;
function MapStateAndKeep(map, init) {
    return MapState(function (state) {
        var inner = value_1.resolveAttribute(map)(state);
        if (inner !== undefined) {
            return [inner, state];
        }
        else {
            return undefined;
        }
    }, init);
}
exports.MapStateAndKeep = MapStateAndKeep;
function MapAction(map, init) {
    var builder = new html_builder_1.MapActionHTMLBuilder(map);
    init(builder);
    return builder;
}
exports.MapAction = MapAction;
function MapQuery(map, init) {
    var builder = new html_builder_1.MapQueryHTMLBuilder(map);
    init(builder);
    return builder;
}
exports.MapQuery = MapQuery;
function Match(props) {
    return new match_template_1.MatchTemplate(props.path, props.matcher);
}
exports.Match = Match;
function MatchKind(matcher) {
    return Match({
        path: ['kind'],
        matcher: matcher
    });
}
exports.MatchKind = MatchKind;
function MatchBool(props) {
    return new match_bool_template_1.MatchBoolTemplate(props.condition, props.true, props.false);
}
exports.MatchBool = MatchBool;
function MatchValue(props) {
    return new match_value_template_1.MatchValueTemplate(props.path, props.matcher, props.orElse);
}
exports.MatchValue = MatchValue;
function MatchOption(props) {
    return MatchKind({
        Some: MapField('value', function (n) { return n.Append(props.Some); }),
        None: MapState(function () { return null; }, function (n) { return n.Append(props.None); })
    });
}
exports.MatchOption = MatchOption;
function MatchMaybe(props) {
    return new match_bool_template_1.MatchBoolTemplate(function (v) { return v !== undefined; }, MapState(function (opt) { return opt; }, function (n) { return n.Append(props.Just); }), props.Nothing);
}
exports.MatchMaybe = MatchMaybe;
function MatchResult(props) {
    return MatchKind({
        Success: MapField('value', function (n) { return n.Append(props.Success); }),
        Failure: MapField('error', function (n) { return n.Append(props.Failure); })
    });
}
exports.MatchResult = MatchResult;
function MatchAsync(props) {
    return MatchKind({
        Outcome: MapField('value', function (n) { return n.Append(props.Outcome); }),
        Loading: MapField('progress', function (n) { return n.Append(props.Loading); }),
        NotAsked: MapState(function () { return null; }, function (n) { return n.Append(props.NotAsked); })
    });
}
exports.MatchAsync = MatchAsync;
function MatchAsyncResult(props) {
    return MatchKind({
        Failure: MapField('error', function ($) { return $.Append(props.Failure); }),
        Success: MapField('value', function ($) { return $.Append(props.Success); }),
        Loading: MapField('progress', function ($) { return $.Append(props.Loading); }),
        NotAsked: MapState(function () { return null; }, function (n) { return n.Append(props.NotAsked); })
    });
}
exports.MatchAsyncResult = MatchAsyncResult;
function Lazy(lazyf) {
    return new lazy_1.LazyTemplate(lazyf);
}
exports.Lazy = Lazy;
function Fragment(init) {
    var builder = new html_builder_1.FragmentHTMLBuilder();
    init(builder);
    return builder;
}
exports.Fragment = Fragment;
function ForEach(init) {
    return Until(function (_a) {
        var state = _a.state, index = _a.index;
        return state[index];
    }, init);
}
exports.ForEach = ForEach;
function Portal(appendChild, init) {
    var builder = new html_builder_1.PortalHTMLBuilder(appendChild);
    init(builder);
    return builder;
}
exports.Portal = Portal;
function PortalWithSelector(selector, init) {
    return Portal(function (doc, node) {
        var el = doc.querySelector(selector);
        if (!el) {
            throw new Error("selector doesn't match any element: \"" + selector + "\"");
        }
        el.appendChild(node);
    }, init);
}
exports.PortalWithSelector = PortalWithSelector;
function HeadPortal(init) {
    return Portal(function (doc, node) { return doc.head.appendChild(node); }, init);
}
exports.HeadPortal = HeadPortal;
function BodyPortal(init) {
    return Portal(function (doc, node) { return doc.body.appendChild(node); }, init);
}
exports.BodyPortal = BodyPortal;
function SimpleComponent(init) {
    var builder = new html_builder_1.SimpleComponentHTMLBuilder();
    init(builder);
    return builder;
}
exports.SimpleComponent = SimpleComponent;
function Unless(condition, init) {
    return When(function (s) { return !condition(s); }, init);
}
exports.Unless = Unless;
function Until(next, init) {
    var builder = new html_builder_1.UntilHTMLBuilder(next);
    init(builder);
    return builder;
}
exports.Until = Until;
function When(condition, init) {
    var builder = new html_builder_1.MapStateHTMLBuilder(function (s) {
        if (condition(s)) {
            return s;
        }
        else {
            return undefined;
        }
    });
    init(builder);
    return builder;
}
exports.When = When;

},{"./html_builder":"eyJE","../value":"nFed","./adapter":"kWOh","./match_template":"HSRy","./match_bool_template":"ZVXL","./match_value_template":"oCpq","./lazy":"hzRP","./hold_state":"fYSr","./capture_state":"YmhL"}],"zQMt":[function(require,module,exports) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./impl/html"), exports);

},{"./impl/html":"aXl4"}],"dozB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.list = void 0;

var html_1 = require("tempo-dom/lib/html");

exports.list = html_1.UL(function ($) {
  return $.ForEach(function ($) {
    return $.LI(function ($) {
      return $.class(String).text(String);
    });
  });
}).build();
},{"tempo-dom/lib/html":"zQMt"}],"JKII":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deep = void 0;

var html_1 = require("tempo-dom/lib/html");

exports.deep = html_1.DIV(function ($) {
  return $.id(function (s) {
    return s.id;
  }).DIV(function ($) {
    return $.H1(function ($) {
      return $.text('Welcome ').text(function (s) {
        return s.name;
      });
    }).ADDRESS(function ($) {
      return $.DIV(function ($) {
        return $.text('Address: ');
      }).DIV(function ($) {
        return $.text(function (s) {
          return s.address.line1;
        });
      }).DIV(function ($) {
        return $.text(function (s) {
          return s.address.line2;
        });
      });
    }).ARTICLE(function ($) {
      return $.text(function (s) {
        return s.paragraph;
      });
    });
  });
}).build();
},{"tempo-dom/lib/html":"zQMt"}],"OJrv":[function(require,module,exports) {
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
exports.DOMContext = void 0;
var dom_1 = require("./impl/dom");
var DOMContext = /** @class */ (function () {
    function DOMContext(doc, append, dispatch) {
        this.doc = doc;
        this.append = append;
        this.dispatch = dispatch;
    }
    DOMContext.fromElement = function (element, dispatch) {
        return new DOMContext(element.ownerDocument || (window && window.document), function (node) { return element.appendChild(node); }, dispatch);
    };
    DOMContext.prototype.mapAction = function (f) {
        var _this = this;
        return new DOMContext(this.doc, this.append, function (action) { return _this.dispatch(f(action)); });
    };
    DOMContext.prototype.conditionalMapAction = function (f) {
        var _this = this;
        return new DOMContext(this.doc, this.append, function (action) {
            var newAction = f(action);
            if (newAction !== undefined) {
                _this.dispatch(newAction);
            }
        });
    };
    DOMContext.prototype.withAppendToReference = function () {
        var ref = this.doc.createTextNode('');
        this.append(ref);
        return {
            ctx: this.withAppend(dom_1.insertFBefore(ref)),
            ref: ref
        };
    };
    DOMContext.prototype.withAppend = function (append) {
        return new DOMContext(this.doc, append, this.dispatch);
    };
    DOMContext.prototype.withDispatch = function (dispatch) {
        return new DOMContext(this.doc, this.append, dispatch);
    };
    DOMContext.prototype.withInterceptDispatch = function (dispatch) {
        var _this = this;
        return new DOMContext(this.doc, this.append, function (action) {
            dispatch(action);
            _this.dispatch(action);
        });
    };
    return DOMContext;
}());
exports.DOMContext = DOMContext;

},{"./impl/dom":"lbKn"}],"izmn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attribute = void 0;

var html_1 = require("tempo-dom/lib/html");

exports.attribute = html_1.DIV(function ($) {
  return $.id(function (s) {
    return s.id;
  }).class(function (s) {
    return s.className;
  }).title(function (s) {
    return s.title;
  }).text('content');
}).build();
},{"tempo-dom/lib/html":"zQMt"}],"qnhq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = void 0;

var html_1 = require("tempo-dom/lib/html");

exports.style = html_1.DIV(function ($) {
  return $.style('background-color', function (s) {
    return s.backgroundColor;
  }).style('color', function (s) {
    return s.color;
  }).style('border', function (s) {
    return s.border;
  }).text('content');
}).build();
},{"tempo-dom/lib/html":"zQMt"}],"jpZy":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.event = void 0;

var html_1 = require("tempo-dom/lib/html");

exports.event = html_1.BUTTON(function ($) {
  return $.onClick(function (s) {
    return s;
  }).text('click me');
}).build();
},{"tempo-dom/lib/html":"zQMt"}],"YbU7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.property = void 0;

var html_1 = require("tempo-dom/lib/html");

exports.property = html_1.INPUT(function ($) {
  return $.value(function (s) {
    return s.value;
  }).disabled(function (s) {
    return s.disabled;
  });
}).build();
},{"tempo-dom/lib/html":"zQMt"}],"ZCfc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAndTriggerEvents = exports.updateStyles = exports.updateProperty = exports.updateAttributes = exports.renderDeepAndUpdate = exports.renderListElementsAndDestroy = exports.renderListAndUpdate = exports.renderListElements = void 0;

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