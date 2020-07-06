parcelRequire = (function (init) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;
  var modules = {};

  function localRequire(name, jumped) {
    if (name in modules) {
      return modules[name];
    }

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

  localRequire.register = function register(id, exports) {
    modules[id] = exports;
  };

  modules = init(localRequire);
  localRequire.modules = modules;
  return localRequire;
})(function (require) {
// ASSET: ../node_modules/tempo-dom/lib/impl/set_attribute.js
var $dDaf$exports = {};
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

Object.defineProperty($dDaf$exports, "__esModule", {
  value: true
});
var $dDaf$export$setBoolProperty = ($dDaf$export$setProperty = ($dDaf$export$setNumberProperty = ($dDaf$export$setAttribute = void 0, $dDaf$exports.setAttribute = $dDaf$export$setAttribute), $dDaf$exports.setNumberProperty = $dDaf$export$setNumberProperty), $dDaf$exports.setProperty = $dDaf$export$setProperty);
$dDaf$exports.setBoolProperty = $dDaf$export$setBoolProperty;

function $dDaf$var$setAttribute(el, name, value) {
  if (value == null) {
    el.removeAttribute(name);
  } else {
    el.setAttribute(name, value);
  }
}

var $dDaf$export$setAttribute = $dDaf$var$setAttribute;
$dDaf$exports.setAttribute = $dDaf$export$setAttribute;

function $dDaf$var$setNumberProperty(el, name, value) {
  var anyEl = el;

  if (value == null) {
    anyEl[name] = null;
  } else {
    anyEl[name] = Number(value);
  }
}

var $dDaf$export$setNumberProperty = $dDaf$var$setNumberProperty;
$dDaf$exports.setNumberProperty = $dDaf$export$setNumberProperty;

function $dDaf$var$setProperty(el, name, value) {
  var anyEl = el;

  if (value == null) {
    anyEl[name] = null;
  } else {
    anyEl[name] = value;
  }
}

var $dDaf$export$setProperty = $dDaf$var$setProperty;
$dDaf$exports.setProperty = $dDaf$export$setProperty;

function $dDaf$var$setBoolProperty(el, name, value) {
  var anyEl = el;

  if (value == null) {
    anyEl[name] = null;
  } else {
    anyEl[name] = value === name;
  }
}

$dDaf$export$setBoolProperty = $dDaf$var$setBoolProperty;
$dDaf$exports.setBoolProperty = $dDaf$export$setBoolProperty; //# sourceMappingURL=set_attribute.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/attributes_mapper.js
var $b01c$exports = {};
Object.defineProperty($b01c$exports, "__esModule", {
  value: true
});
var $b01c$export$htmlAttributeMap = ($b01c$export$attributeNameMap = void 0, $b01c$exports.attributeNameMap = $b01c$export$attributeNameMap);
$b01c$exports.htmlAttributeMap = $b01c$export$htmlAttributeMap;
var $b01c$export$attributeNameMap = {
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
$b01c$exports.attributeNameMap = $b01c$export$attributeNameMap;
$b01c$export$htmlAttributeMap = {
  // html
  checked: $dDaf$export$setBoolProperty,
  multiple: $dDaf$export$setBoolProperty,
  muted: $dDaf$export$setBoolProperty,
  selected: $dDaf$export$setBoolProperty,
  value: $dDaf$export$setProperty,
  // svg
  useCurrentView: $dDaf$export$setBoolProperty,
  currentView: $dDaf$export$setProperty,
  currentScale: $dDaf$export$setNumberProperty // 'accept-charset': setSpaceSeparated,
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
$b01c$exports.htmlAttributeMap = $b01c$export$htmlAttributeMap; //# sourceMappingURL=attributes_mapper.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/dom.js
var $lbKn$exports = {};
Object.defineProperty($lbKn$exports, "__esModule", {
  value: true
});
var $lbKn$export$setElStyle = ($lbKn$export$setElAttribute = ($lbKn$export$makeCreateElementNS = ($lbKn$export$makeCreateElement = ($lbKn$export$insertFBefore = ($lbKn$export$removeNode = void 0, $lbKn$exports.removeNode = $lbKn$export$removeNode), $lbKn$exports.insertFBefore = $lbKn$export$insertFBefore), $lbKn$exports.makeCreateElement = $lbKn$export$makeCreateElement), $lbKn$exports.makeCreateElementNS = $lbKn$export$makeCreateElementNS), $lbKn$exports.setElAttribute = $lbKn$export$setElAttribute);
$lbKn$exports.setElStyle = $lbKn$export$setElStyle;

function $lbKn$var$removeNode(node) {
  var el = node;

  if (el && el.onblur) {
    el.onblur = null;
  }

  if (!node || node.ownerDocument === undefined) return;

  if (node.parentElement) {
    node.parentElement.removeChild(node);
  }
}

var $lbKn$export$removeNode = $lbKn$var$removeNode;
$lbKn$exports.removeNode = $lbKn$export$removeNode;

function $lbKn$var$insertFBefore(ref) {
  return function (node) {
    if (ref.parentElement != null) {
      ref.parentElement.insertBefore(node, ref);
    }
  };
}

var $lbKn$export$insertFBefore = $lbKn$var$insertFBefore;
$lbKn$exports.insertFBefore = $lbKn$export$insertFBefore;

function $lbKn$var$makeCreateElement(name) {
  return function (doc) {
    return doc.createElement(name);
  };
}

var $lbKn$export$makeCreateElement = $lbKn$var$makeCreateElement;
$lbKn$exports.makeCreateElement = $lbKn$export$makeCreateElement;

function $lbKn$var$makeCreateElementNS(namespace, name) {
  return function (doc) {
    return doc.createElementNS(namespace, name);
  }; // TODO
}

var $lbKn$export$makeCreateElementNS = $lbKn$var$makeCreateElementNS;
$lbKn$exports.makeCreateElementNS = $lbKn$export$makeCreateElementNS;

function $lbKn$var$setElAttribute(el, name, value) {
  if ($b01c$export$htmlAttributeMap[name] !== undefined) {
    $b01c$export$htmlAttributeMap[name](el, name, value);
  } else {
    $dDaf$export$setAttribute(el, name, value);
  } // let set = attributeMap[name] || setAttribute
  // set(el, name, value)

}

var $lbKn$export$setElAttribute = $lbKn$var$setElAttribute;
$lbKn$exports.setElAttribute = $lbKn$export$setElAttribute;

function $lbKn$var$setElStyle(el, name, value) {
  if (value == null) {
    el.style.removeProperty(name);
  } else {
    el.style.setProperty(name, value);
  }
}

$lbKn$export$setElStyle = $lbKn$var$setElStyle;
$lbKn$exports.setElStyle = $lbKn$export$setElStyle; //# sourceMappingURL=dom.js.map

// ASSET: ../node_modules/tempo-dom/lib/context.js
var $OJrv$exports = {};
Object.defineProperty($OJrv$exports, "__esModule", {
  value: true
});
var $OJrv$export$DOMContext = void 0;
$OJrv$exports.DOMContext = $OJrv$export$DOMContext;

var $OJrv$var$DOMContext =
/** @class */
function () {
  function DOMContext(doc, append, dispatch) {
    this.doc = doc;
    this.append = append;
    this.dispatch = dispatch;
  }

  DOMContext.fromElement = function (element, dispatch) {
    return new DOMContext(element.ownerDocument || window && window.document, function (node) {
      return element.appendChild(node);
    }, dispatch);
  };

  DOMContext.prototype.mapAction = function (f) {
    var _this = this;

    return new DOMContext(this.doc, this.append, function (action) {
      return _this.dispatch(f(action));
    });
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
      ctx: this.withAppend($lbKn$export$insertFBefore(ref)),
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
      _this.dispatch(action);

      dispatch(action);
    });
  };

  return DOMContext;
}();

$OJrv$export$DOMContext = $OJrv$var$DOMContext;
$OJrv$exports.DOMContext = $OJrv$export$DOMContext; //# sourceMappingURL=context.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/text.js
var $H1te$exports = {};
Object.defineProperty($H1te$exports, "__esModule", {
  value: true
});
var $H1te$export$text = void 0;
$H1te$exports.text = $H1te$export$text;

var $H1te$var$DerivedTextTemplate =
/** @class */
function () {
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
          if (newContent.length < 5000) content = newContent;
        }
      },
      destroy: function () {
        $lbKn$export$removeNode(node);
      },
      request: function (_) {}
    };
  };

  return DerivedTextTemplate;
}();

var $H1te$var$LiteralTextTemplate =
/** @class */
function () {
  function LiteralTextTemplate(content) {
    this.content = content;
  }

  LiteralTextTemplate.prototype.render = function (ctx, _) {
    var node = ctx.doc.createTextNode(this.content);
    ctx.append(node);
    return {
      change: function (_) {},
      destroy: function () {
        $lbKn$export$removeNode(node);
      },
      request: function (_) {}
    };
  };

  return LiteralTextTemplate;
}();

function $H1te$var$text(content) {
  if (typeof content === 'function') {
    return new $H1te$var$DerivedTextTemplate(content);
  } else {
    return new $H1te$var$LiteralTextTemplate(content || '');
  }
}

$H1te$export$text = $H1te$var$text;
$H1te$exports.text = $H1te$export$text; //# sourceMappingURL=text.js.map

// ASSET: ../node_modules/tempo-dom/node_modules/tempo-std/lib/objects.js
var $g3Xg$exports = {};
Object.defineProperty($g3Xg$exports, "__esModule", {
  value: true
});
var $g3Xg$export$merge = ($g3Xg$export$removeFields = ($g3Xg$export$keys = void 0, $g3Xg$exports.keys = $g3Xg$export$keys), $g3Xg$exports.removeFields = $g3Xg$export$removeFields);
$g3Xg$exports.merge = $g3Xg$export$merge;

function $g3Xg$var$keys(object) {
  return Object.keys(object);
}

var $g3Xg$export$keys = $g3Xg$var$keys;
$g3Xg$exports.keys = $g3Xg$export$keys;

function $g3Xg$var$removeFields(ob) {
  var fields = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    fields[_i - 1] = arguments[_i];
  }

  return $g3Xg$var$keys(ob).reduce(function (acc, key) {
    if (fields.indexOf(key) < 0) acc[key] = ob[key];
    return acc;
  }, {});
}

var $g3Xg$export$removeFields = $g3Xg$var$removeFields;
$g3Xg$exports.removeFields = $g3Xg$export$removeFields;

function $g3Xg$var$merge(a, b) {
  return Object.assign({}, a, b);
}

$g3Xg$export$merge = $g3Xg$var$merge;
$g3Xg$exports.merge = $g3Xg$export$merge; //# sourceMappingURL=objects.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/dom_builder.js
var $yiha$exports = {};
Object.defineProperty($yiha$exports, "__esModule", {
  value: true
});
var $yiha$export$DOMBuilder = ($yiha$export$toggleToString = ($yiha$export$booleanToString = ($yiha$export$stylesToString = ($yiha$export$lostOrRecordToCommaSeparated = ($yiha$export$listOrRecordToSpaceSeparated = ($yiha$export$numberPairsListToString = ($yiha$export$numbersListToString = ($yiha$export$listOrRecordToString = ($yiha$export$extractDerived = ($yiha$export$extractLiterals = ($yiha$export$childOrBuilderToTemplate = void 0, $yiha$exports.childOrBuilderToTemplate = $yiha$export$childOrBuilderToTemplate), $yiha$exports.extractLiterals = $yiha$export$extractLiterals), $yiha$exports.extractDerived = $yiha$export$extractDerived), $yiha$exports.listOrRecordToString = $yiha$export$listOrRecordToString), $yiha$exports.numbersListToString = $yiha$export$numbersListToString), $yiha$exports.numberPairsListToString = $yiha$export$numberPairsListToString), $yiha$exports.listOrRecordToSpaceSeparated = $yiha$export$listOrRecordToSpaceSeparated), $yiha$exports.lostOrRecordToCommaSeparated = $yiha$export$lostOrRecordToCommaSeparated), $yiha$exports.stylesToString = $yiha$export$stylesToString), $yiha$exports.booleanToString = $yiha$export$booleanToString), $yiha$exports.toggleToString = $yiha$export$toggleToString);
$yiha$exports.DOMBuilder = $yiha$export$DOMBuilder;

function $yiha$var$childOrBuilderToTemplate(src) {
  if (src === undefined) {
    return $H1te$export$text('');
  } else if (typeof src.build === 'function') {
    return src.build();
  } else if (typeof src === 'string' || typeof src === 'function') {
    return $H1te$export$text(src);
  } else {
    return src;
  }
}

var $yiha$export$childOrBuilderToTemplate = $yiha$var$childOrBuilderToTemplate;
$yiha$exports.childOrBuilderToTemplate = $yiha$export$childOrBuilderToTemplate;

function $yiha$var$extractLiterals(record) {
  return $g3Xg$export$keys(record).reduce(function (list, name) {
    if (typeof record[name] === 'string') {
      list.push({
        name: name,
        value: record[name]
      });
    }

    return list;
  }, []);
}

var $yiha$export$extractLiterals = $yiha$var$extractLiterals;
$yiha$exports.extractLiterals = $yiha$export$extractLiterals;

function $yiha$var$extractDerived(record) {
  return $g3Xg$export$keys(record).reduce(function (list, name) {
    if (typeof record[name] === 'function') {
      list.push({
        name: name,
        resolve: record[name]
      });
    }

    return list;
  }, []);
}

var $yiha$export$extractDerived = $yiha$var$extractDerived;
$yiha$exports.extractDerived = $yiha$export$extractDerived;

function $yiha$var$listOrRecordToString(src, separator) {
  if (typeof src === 'string') {
    return src;
  } else if (src == null) {
    return undefined;
  } else if (Array.isArray(src)) {
    return src.join(separator);
  } else {
    return $g3Xg$export$keys(src).reduce(function (list, key) {
      if (src[key]) list.push(key);
      return list;
    }, []).join(separator);
  }
}

var $yiha$export$listOrRecordToString = $yiha$var$listOrRecordToString;
$yiha$exports.listOrRecordToString = $yiha$export$listOrRecordToString;

function $yiha$var$numbersListToString(src) {
  src = Array.isArray(src) ? src : [src];
  return src.join(' ');
}

var $yiha$export$numbersListToString = $yiha$var$numbersListToString;
$yiha$exports.numbersListToString = $yiha$export$numbersListToString;

function $yiha$var$numberPairsListToString(src) {
  return src.map(function (_a) {
    var a = _a[0],
        b = _a[1];
    return a + "," + b;
  }).join(' ');
}

var $yiha$export$numberPairsListToString = $yiha$var$numberPairsListToString;
$yiha$exports.numberPairsListToString = $yiha$export$numberPairsListToString;

function $yiha$var$listOrRecordToSpaceSeparated(src) {
  return $yiha$var$listOrRecordToString(src, ' ');
}

var $yiha$export$listOrRecordToSpaceSeparated = $yiha$var$listOrRecordToSpaceSeparated;
$yiha$exports.listOrRecordToSpaceSeparated = $yiha$export$listOrRecordToSpaceSeparated;

function $yiha$var$lostOrRecordToCommaSeparated(src) {
  return $yiha$var$listOrRecordToString(src, ', ');
}

var $yiha$export$lostOrRecordToCommaSeparated = $yiha$var$lostOrRecordToCommaSeparated;
$yiha$exports.lostOrRecordToCommaSeparated = $yiha$export$lostOrRecordToCommaSeparated;

function $yiha$var$stylesToString(src) {
  if (typeof src === 'string') {
    return src;
  } else {
    return $g3Xg$export$keys(src).reduce(function (list, key) {
      if (src[key]) list.push(key + ": " + src[key] + ";");
      return list;
    }, []).join(' ');
  }
}

var $yiha$export$stylesToString = $yiha$var$stylesToString;
$yiha$exports.stylesToString = $yiha$export$stylesToString;

function $yiha$var$booleanToString(src) {
  return "" + src;
}

var $yiha$export$booleanToString = $yiha$var$booleanToString;
$yiha$exports.booleanToString = $yiha$export$booleanToString;

function $yiha$var$toggleToString(name) {
  return function (src) {
    return src ? name : '';
  };
}

var $yiha$export$toggleToString = $yiha$var$toggleToString;
$yiha$exports.toggleToString = $yiha$export$toggleToString;

var $yiha$var$DOMBuilder =
/** @class */
function () {
  function DOMBuilder() {
    this._children = []; // transform
  } // children


  DOMBuilder.prototype.Append = function (el) {
    this._children.push($yiha$var$childOrBuilderToTemplate(el));

    return this;
  };

  DOMBuilder.prototype.AppendMany = function () {
    var _a;

    var els = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      els[_i] = arguments[_i];
    }

    (_a = this._children).push.apply(_a, els.map($yiha$var$childOrBuilderToTemplate));

    return this;
  };

  return DOMBuilder;
}();

$yiha$export$DOMBuilder = $yiha$var$DOMBuilder;
$yiha$exports.DOMBuilder = $yiha$export$DOMBuilder; //# sourceMappingURL=dom_builder.js.map

// ASSET: ../node_modules/tempo-dom/lib/value.js
var $nFed$exports = {};
Object.defineProperty($nFed$exports, "__esModule", {
  value: true
});
var $nFed$export$resolveAttribute = ($nFed$export$attributeToHandler = ($nFed$export$mapAttributes = ($nFed$export$mapAttributeOrElse = ($nFed$export$mapAttribute = ($nFed$export$applyAttributes = void 0, $nFed$exports.applyAttributes = $nFed$export$applyAttributes), $nFed$exports.mapAttribute = $nFed$export$mapAttribute), $nFed$exports.mapAttributeOrElse = $nFed$export$mapAttributeOrElse), $nFed$exports.mapAttributes = $nFed$export$mapAttributes), $nFed$exports.attributeToHandler = $nFed$export$attributeToHandler);
$nFed$exports.resolveAttribute = $nFed$export$resolveAttribute;

function $nFed$var$applyAttributes(attrA, attrB, apply) {
  if (attrA === undefined) return undefined;
  if (attrB === undefined) return undefined;

  if (typeof attrA === 'function' && typeof attrB === 'function') {
    return function (state) {
      var resA = attrA(state);
      var resB = attrB(state);
      if (resA !== undefined && resB !== undefined) return apply(resA, resB);else return undefined;
    };
  } else if (typeof attrA === 'function') {
    return function (state) {
      var resA = attrA(state);
      if (resA !== undefined) return apply(resA, attrB);else return undefined;
    };
  } else if (typeof attrB === 'function') {
    return function (state) {
      var resB = attrB(state);
      if (resB !== undefined) return apply(attrA, resB);else return undefined;
    };
  } else {
    return apply(attrA, attrB);
  }
}

var $nFed$export$applyAttributes = $nFed$var$applyAttributes;
$nFed$exports.applyAttributes = $nFed$export$applyAttributes;

function $nFed$var$mapAttribute(attr, map) {
  if (attr === undefined) {
    return undefined;
  } else if (typeof attr === 'function') {
    return function (state) {
      var res = attr(state);
      if (res !== undefined) return map(res);else return undefined;
    };
  } else {
    return map(attr);
  }
}

var $nFed$export$mapAttribute = $nFed$var$mapAttribute;
$nFed$exports.mapAttribute = $nFed$export$mapAttribute;

function $nFed$var$mapAttributeOrElse(attr, map, alt) {
  if (attr === undefined) {
    return alt;
  } else if (typeof attr === 'function') {
    return function (state) {
      var res = attr(state);
      if (res !== undefined) return map(res);else return alt;
    };
  } else {
    return map(attr);
  }
}

var $nFed$export$mapAttributeOrElse = $nFed$var$mapAttributeOrElse;
$nFed$exports.mapAttributeOrElse = $nFed$export$mapAttributeOrElse;

function $nFed$var$mapAttributes(attributes, map) {
  var ks = $g3Xg$export$keys(attributes);
  var isDynamic = ks.some(function (k) {
    return typeof attributes[k] === 'function';
  });

  if (isDynamic) {
    return function (state) {
      var o = ks.reduce(function (acc, k) {
        acc[k] = $nFed$var$resolveAttribute(attributes[k])(state);
        return acc;
      }, {});
      return map(o);
    };
  } else {
    return map(attributes);
  }
}

var $nFed$export$mapAttributes = $nFed$var$mapAttributes;
$nFed$exports.mapAttributes = $nFed$export$mapAttributes;

function $nFed$var$attributeToHandler(attr, handler) {
  if (attr === undefined || handler === undefined) {
    return function () {
      return undefined;
    };
  } else if (typeof attr === 'function') {
    return function (state, event, element) {
      var res = attr(state);
      if (res !== undefined) return handler(res, event, element);else return undefined;
    };
  } else {
    return function (_, event, element) {
      return handler(attr, event, element);
    };
  }
}

var $nFed$export$attributeToHandler = $nFed$var$attributeToHandler;
$nFed$exports.attributeToHandler = $nFed$export$attributeToHandler;

function $nFed$var$resolveAttribute(attr) {
  if (typeof attr === 'function') {
    return attr;
  } else {
    return function (_) {
      return attr;
    };
  }
}

$nFed$export$resolveAttribute = $nFed$var$resolveAttribute;
$nFed$exports.resolveAttribute = $nFed$export$resolveAttribute; //# sourceMappingURL=value.js.map

// ASSET: ../node_modules/tempo-dom/node_modules/tempo-store/lib/emitter.js
var $doSR$exports = {};
Object.defineProperty($doSR$exports, "__esModule", {
  value: true
});
var $doSR$export$nextFrame = ($doSR$export$debounce = ($doSR$export$Emitter = void 0, $doSR$exports.Emitter = $doSR$export$Emitter), $doSR$exports.debounce = $doSR$export$debounce);
$doSR$exports.nextFrame = $doSR$export$nextFrame;

var $doSR$var$Emitter =
/** @class */
function () {
  function Emitter() {
    this.listeners = [];
  }

  Emitter.ofOne = function () {
    return new Emitter();
  };

  Emitter.ofTwo = function () {
    return new Emitter();
  };

  Emitter.ofThree = function () {
    return new Emitter();
  };

  Emitter.ofFour = function () {
    return new Emitter();
  };

  Emitter.ofFive = function () {
    return new Emitter();
  };

  Emitter.ofSix = function () {
    return new Emitter();
  };

  Emitter.prototype.emit = function () {
    var value = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      value[_i] = arguments[_i];
    }

    for (var _a = 0, _b = this.listeners; _a < _b.length; _a++) {
      var l = _b[_a];
      l.apply(void 0, value);
    }
  };

  Emitter.prototype.on = function (listener) {
    this.listeners.push(listener);
  };

  Emitter.prototype.off = function (listener) {
    var index = this.listeners.indexOf(listener);
    if (index < 0) return false;
    this.listeners.splice(index, 1);
    return true;
  };

  Emitter.prototype.once = function (listener) {
    var _this = this;

    var wrapper = function () {
      var values = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }

      _this.off(wrapper);

      listener.apply(void 0, values);
    };

    this.on(wrapper);
  };

  return Emitter;
}();

var $doSR$export$Emitter = $doSR$var$Emitter;
$doSR$exports.Emitter = $doSR$export$Emitter;

function $doSR$var$debounce(delay) {
  return function (listener) {
    var running = false;
    var acc;
    return function () {
      var values = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }

      acc = values;
      if (running) return;
      running = true;
      setTimeout(function () {
        running = false;
        listener.apply(void 0, acc);
      }, delay);
    };
  };
}

var $doSR$export$debounce = $doSR$var$debounce;
$doSR$exports.debounce = $doSR$export$debounce;

function $doSR$var$nextFrame(listener) {
  var running = false;
  var acc;
  return function () {
    var values = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      values[_i] = arguments[_i];
    }

    acc = values;
    if (running) return;
    running = true;
    requestAnimationFrame(function () {
      running = false;
      listener.apply(void 0, acc);
    });
  };
}

$doSR$export$nextFrame = $doSR$var$nextFrame;
$doSR$exports.nextFrame = $doSR$export$nextFrame; //# sourceMappingURL=emitter.js.map

// ASSET: ../node_modules/tempo-dom/node_modules/tempo-store/node_modules/tempo-std/lib/equals.js
var $SHCY$exports = {};
Object.defineProperty($SHCY$exports, "__esModule", {
  value: true
});
var $SHCY$export$deepEqual = ($SHCY$export$strictEqual = void 0, $SHCY$exports.strictEqual = $SHCY$export$strictEqual);
$SHCY$exports.deepEqual = $SHCY$export$deepEqual;

function $SHCY$var$strictEqual(a, b) {
  return a === b || a !== a && b !== b;
}

var $SHCY$export$strictEqual = $SHCY$var$strictEqual;
$SHCY$exports.strictEqual = $SHCY$export$strictEqual;

function $SHCY$var$deepEqual(a, b) {
  if ($SHCY$var$strictEqual(a, b)) return true;
  if (a == null || b == null) return false;
  var aIsArr = Array.isArray(a);
  var bIsArr = Array.isArray(b);
  if (aIsArr !== bIsArr) return false;

  if (aIsArr) {
    var aArr = a;
    var bArr = b;
    var aLength = aArr.length;
    if (aLength !== bArr.length) return false;

    for (var i = 0; i < aLength; i++) {
      if (!$SHCY$var$deepEqual(aArr[i], bArr[i])) return false;
    }

    return true;
  }

  var aIsDate = a instanceof Date;
  var bIsDate = b instanceof Date;
  if (aIsDate !== bIsDate) return false;

  if (aIsDate) {
    var aDate = a;
    var bDate = b;
    return +aDate === +bDate;
  }

  var aIsSet = a instanceof Set;
  var bIsSet = b instanceof Set;
  if (aIsSet !== bIsSet) return false;

  if (aIsSet) {
    var aSet = a;
    var bSet = b;
    if (aSet.size !== bSet.size) return false;
    var it_1 = aSet.keys();

    while (true) {
      var curr = it_1.next();
      if (curr.done) break;
      if (!bSet.has(curr.value)) return false;
    }

    return true;
  }

  var aIsMap = a instanceof Map;
  var bIsMap = b instanceof Map;
  if (aIsMap !== bIsMap) return false;

  if (aIsMap) {
    var aMap = a;
    var bMap = b;
    var aMapLength = aMap.size;
    if (aMapLength !== bMap.size) return false;
    var it_2 = aMap.keys();

    while (true) {
      var curr = it_2.next();
      if (curr.done) break;
      if (!$SHCY$var$deepEqual(aMap.get(curr.value), bMap.get(curr.value))) return false;
    }

    return true;
  }

  var aIsObj = typeof a === 'object';
  var bIsObj = typeof b === 'object';
  if (aIsObj !== bIsObj) return false;

  if (aIsObj) {
    var aObj = a;
    var bObj = b;
    var aFields = Object.keys(aObj);
    var bFields = Object.keys(bObj);
    var aLength = aFields.length;
    if (aLength !== bFields.length) return false;

    for (var i = 0; i < aLength; i++) {
      var field = aFields[i];
      if (!bObj.hasOwnProperty(field)) return false;
      if (!$SHCY$var$deepEqual(aObj[field], bObj[field])) return false;
    }

    return true;
  }

  return false;
}

$SHCY$export$deepEqual = $SHCY$var$deepEqual;
$SHCY$exports.deepEqual = $SHCY$export$deepEqual; //# sourceMappingURL=equals.js.map

// ASSET: ../node_modules/tempo-dom/node_modules/tempo-store/lib/property.js
var $IHZt$exports = {};
Object.defineProperty($IHZt$exports, "__esModule", {
  value: true
});
var $IHZt$export$Property = void 0;
$IHZt$exports.Property = $IHZt$export$Property;

var $IHZt$var$Property =
/** @class */
function () {
  function Property(value, equal) {
    if (equal === void 0) {
      equal = $SHCY$export$strictEqual;
    }

    this.value = value;
    this.equal = equal;
    this.observable = this.emitter = $doSR$export$Emitter.ofOne();
  }

  Property.prototype.set = function (value) {
    if (this.equal(this.value, value)) {
      return false;
    }

    this.value = value;
    this.emit(this.value);
    return true;
  };

  Property.prototype.get = function () {
    return this.value;
  };

  Property.prototype.emit = function (value) {
    this.emitter.emit(value);
  };

  return Property;
}();

$IHZt$export$Property = $IHZt$var$Property;
$IHZt$exports.Property = $IHZt$export$Property; //# sourceMappingURL=property.js.map

// ASSET: ../node_modules/tempo-dom/node_modules/tempo-store/lib/store.js
var $KBwC$exports = {};
Object.defineProperty($KBwC$exports, "__esModule", {
  value: true
});
var $KBwC$export$Store = void 0;
$KBwC$exports.Store = $KBwC$export$Store;

var $KBwC$var$Store =
/** @class */
function () {
  function Store(property, reducer) {
    this.property = property;
    this.reducer = reducer;
    this.observable = this.emitter = $doSR$export$Emitter.ofFour();
  }

  Store.ofState = function (options) {
    return new Store(new $IHZt$export$Property(options.state, options.equal), options.reducer);
  };

  Store.prototype.process = function (action) {
    var curr = this.property.get();
    var value = this.reducer(curr, action);
    var result = this.property.set(value);
    this.emitter.emit(value, action, curr, result);
    return result;
  };

  Store.prototype.processMany = function () {
    var _this = this;

    var actions = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      actions[_i] = arguments[_i];
    }

    return actions.reduce(function (changed, action) {
      var newResult = _this.process(action);

      if (changed || newResult) return true;else return false;
    }, false);
  };

  return Store;
}();

$KBwC$export$Store = $KBwC$var$Store;
$KBwC$exports.Store = $KBwC$export$Store; //# sourceMappingURL=store.js.map

// ASSET: ../node_modules/tempo-dom/node_modules/tempo-std/lib/maybe.js
var $pwth$exports = {};
Object.defineProperty($pwth$exports, "__esModule", {
  value: true
});
var $pwth$export$isJust = ($pwth$export$isNothing = ($pwth$export$just = ($pwth$export$nothing = void 0, $pwth$exports.nothing = $pwth$export$nothing), $pwth$exports.just = $pwth$export$just), $pwth$exports.isNothing = $pwth$export$isNothing);
$pwth$exports.isJust = $pwth$export$isJust;
var $pwth$export$nothing = undefined;
$pwth$exports.nothing = $pwth$export$nothing;

function $pwth$var$just(value) {
  return value;
}

var $pwth$export$just = $pwth$var$just;
$pwth$exports.just = $pwth$export$just;

function $pwth$var$isNothing(maybe) {
  return maybe == null;
}

var $pwth$export$isNothing = $pwth$var$isNothing;
$pwth$exports.isNothing = $pwth$export$isNothing;

function $pwth$var$isJust(maybe) {
  return maybe != null;
}

$pwth$export$isJust = $pwth$var$isJust;
$pwth$exports.isJust = $pwth$export$isJust; //# sourceMappingURL=maybe.js.map

// ASSET: ../node_modules/tempo-dom/node_modules/tempo-std/lib/arrays.js
var $LAOm$exports = {};
Object.defineProperty($LAOm$exports, "__esModule", {
  value: true
});
var $LAOm$export$ofIterableIterator = ($LAOm$export$remove = ($LAOm$export$distinctByPredicate = ($LAOm$export$distinctPrimitive = ($LAOm$export$fill = ($LAOm$export$numbersRange = ($LAOm$export$range = ($LAOm$export$sort = ($LAOm$export$makeCompare = ($LAOm$export$concat = ($LAOm$export$each = ($LAOm$export$any = ($LAOm$export$all = ($LAOm$export$foldLeft = ($LAOm$export$flatten = ($LAOm$export$filter = ($LAOm$export$hasValues = ($LAOm$export$isEmpty = ($LAOm$export$makeEquals = ($LAOm$export$equals = ($LAOm$export$tail = ($LAOm$export$head = ($LAOm$export$flatMap = ($LAOm$export$map = void 0, $LAOm$exports.map = $LAOm$export$map), $LAOm$exports.flatMap = $LAOm$export$flatMap), $LAOm$exports.head = $LAOm$export$head), $LAOm$exports.tail = $LAOm$export$tail), $LAOm$exports.equals = $LAOm$export$equals), $LAOm$exports.makeEquals = $LAOm$export$makeEquals), $LAOm$exports.isEmpty = $LAOm$export$isEmpty), $LAOm$exports.hasValues = $LAOm$export$hasValues), $LAOm$exports.filter = $LAOm$export$filter), $LAOm$exports.flatten = $LAOm$export$flatten), $LAOm$exports.foldLeft = $LAOm$export$foldLeft), $LAOm$exports.all = $LAOm$export$all), $LAOm$exports.any = $LAOm$export$any), $LAOm$exports.each = $LAOm$export$each), $LAOm$exports.concat = $LAOm$export$concat), $LAOm$exports.makeCompare = $LAOm$export$makeCompare), $LAOm$exports.sort = $LAOm$export$sort), $LAOm$exports.range = $LAOm$export$range), $LAOm$exports.numbersRange = $LAOm$export$numbersRange), $LAOm$exports.fill = $LAOm$export$fill), $LAOm$exports.distinctPrimitive = $LAOm$export$distinctPrimitive), $LAOm$exports.distinctByPredicate = $LAOm$export$distinctByPredicate), $LAOm$exports.remove = $LAOm$export$remove);
$LAOm$exports.ofIterableIterator = $LAOm$export$ofIterableIterator;
/**
 * Utility functions to manipulate `Array` values.
 */

function $LAOm$var$map(arr, f) {
  var length = arr.length;
  var buff = new Array(length);

  for (var i = 0; i < length; i++) {
    buff[i] = f(arr[i]);
  }

  return buff;
}

var $LAOm$export$map = $LAOm$var$map;
$LAOm$exports.map = $LAOm$export$map;

function $LAOm$var$flatMap(arr, f) {
  var buff = new Array();

  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var el = arr_1[_i];
    buff.push.apply(buff, f(el));
  }

  return buff;
}

var $LAOm$export$flatMap = $LAOm$var$flatMap;
$LAOm$exports.flatMap = $LAOm$export$flatMap;

function $LAOm$var$head(arr) {
  return arr.length > 0 ? arr[0] : $pwth$export$nothing;
}

var $LAOm$export$head = $LAOm$var$head;
$LAOm$exports.head = $LAOm$export$head;

function $LAOm$var$tail(arr) {
  return arr.slice(1);
}

var $LAOm$export$tail = $LAOm$var$tail;
$LAOm$exports.tail = $LAOm$export$tail;

function $LAOm$var$equals(a, b, predicate) {
  if (a.length !== b.length) return false;else {
    for (var i = 0; i < a.length; i++) {
      if (!predicate(a[i], b[i])) return false;
    }

    return true;
  }
}

var $LAOm$export$equals = $LAOm$var$equals;
$LAOm$exports.equals = $LAOm$export$equals;

function $LAOm$var$makeEquals(predicate) {
  return function (a, b) {
    return $LAOm$var$equals(a, b, predicate);
  };
}

var $LAOm$export$makeEquals = $LAOm$var$makeEquals;
$LAOm$exports.makeEquals = $LAOm$export$makeEquals;

function $LAOm$var$isEmpty(arr) {
  return arr.length === 0;
}

var $LAOm$export$isEmpty = $LAOm$var$isEmpty;
$LAOm$exports.isEmpty = $LAOm$export$isEmpty;

function $LAOm$var$hasValues(arr) {
  return arr.length > 0;
}

var $LAOm$export$hasValues = $LAOm$var$hasValues;
$LAOm$exports.hasValues = $LAOm$export$hasValues;

function $LAOm$var$filter(arr, predicate) {
  var buff = [];

  for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
    var a = arr_2[_i];
    if (predicate(a)) buff.push(a);
  }

  return buff;
}

var $LAOm$export$filter = $LAOm$var$filter;
$LAOm$exports.filter = $LAOm$export$filter;

function $LAOm$var$flatten(arr) {
  var _a;

  return (_a = []).concat.apply(_a, arr);
}

var $LAOm$export$flatten = $LAOm$var$flatten;
$LAOm$exports.flatten = $LAOm$export$flatten;

function $LAOm$var$foldLeft(arr, f, b) {
  for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
    var a = arr_3[_i];
    b = f(b, a);
  }

  return b;
}

var $LAOm$export$foldLeft = $LAOm$var$foldLeft;
$LAOm$exports.foldLeft = $LAOm$export$foldLeft;

function $LAOm$var$all(arr, predicate) {
  for (var _i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
    var a = arr_4[_i];

    if (!predicate(a)) {
      return false;
    }
  }

  return true;
}

var $LAOm$export$all = $LAOm$var$all;
$LAOm$exports.all = $LAOm$export$all;

function $LAOm$var$any(arr, predicate) {
  for (var _i = 0, arr_5 = arr; _i < arr_5.length; _i++) {
    var a = arr_5[_i];

    if (predicate(a)) {
      return true;
    }
  }

  return false;
}

var $LAOm$export$any = $LAOm$var$any;
$LAOm$exports.any = $LAOm$export$any;

function $LAOm$var$each(arr, f) {
  for (var _i = 0, arr_6 = arr; _i < arr_6.length; _i++) {
    var a = arr_6[_i];
    f(a);
  }
}

var $LAOm$export$each = $LAOm$var$each;
$LAOm$exports.each = $LAOm$export$each;

function $LAOm$var$concat() {
  var _a;

  var arrs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    arrs[_i] = arguments[_i];
  }

  return (_a = []).concat.apply(_a, arrs);
}

var $LAOm$export$concat = $LAOm$var$concat;
$LAOm$exports.concat = $LAOm$export$concat;

function $LAOm$var$makeCompare(comparef, shorterFirst) {
  if (shorterFirst === void 0) {
    shorterFirst = true;
  }

  return function (a, b) {
    if (a.length < b.length) {
      return -1 * (shorterFirst ? 1 : -1);
    } else if (a.length > b.length) {
      return 1 * (shorterFirst ? 1 : -1);
    }

    for (var i = 0; i < a.length; i++) {
      var ord = comparef(a[i], b[i]);
      if (ord !== 0) return ord;
    }

    return 0;
  };
}

var $LAOm$export$makeCompare = $LAOm$var$makeCompare;
$LAOm$exports.makeCompare = $LAOm$export$makeCompare;

function $LAOm$var$sort(compare, arr) {
  return arr.slice().sort(compare);
}

var $LAOm$export$sort = $LAOm$var$sort;
$LAOm$exports.sort = $LAOm$export$sort;

function $LAOm$var$range(length, f) {
  var buff = new Array(length);

  for (var i = 0; i < length; i++) buff[i] = f(i);

  return buff;
}

var $LAOm$export$range = $LAOm$var$range;
$LAOm$exports.range = $LAOm$export$range;

function $LAOm$var$numbersRange(length, startAt) {
  if (startAt === void 0) {
    startAt = 0;
  }

  return $LAOm$var$range(length, function (i) {
    return startAt + i;
  });
}

var $LAOm$export$numbersRange = $LAOm$var$numbersRange;
$LAOm$exports.numbersRange = $LAOm$export$numbersRange;

function $LAOm$var$fill(length, value) {
  return $LAOm$var$range(length, function () {
    return value;
  });
}

var $LAOm$export$fill = $LAOm$var$fill;
$LAOm$exports.fill = $LAOm$export$fill;

function $LAOm$var$distinctPrimitive(values) {
  return Array.from(new Set(values));
}

var $LAOm$export$distinctPrimitive = $LAOm$var$distinctPrimitive;
$LAOm$exports.distinctPrimitive = $LAOm$export$distinctPrimitive;

function $LAOm$var$distinctByPredicate(values, predicate) {
  var map = {};
  values.forEach(function (v) {
    map[predicate(v)] = v;
  });
  return $g3Xg$export$keys(map).map(function (k) {
    return map[k];
  });
}

var $LAOm$export$distinctByPredicate = $LAOm$var$distinctByPredicate;
$LAOm$exports.distinctByPredicate = $LAOm$export$distinctByPredicate;

function $LAOm$var$remove(arr, item, predicate) {
  var index;

  if (predicate !== undefined) {
    index = arr.findIndex(predicate);
  } else {
    index = arr.indexOf(item);
  }

  if (index < 0) {
    return false;
  } else {
    arr.splice(index, 1);
    return true;
  }
}

var $LAOm$export$remove = $LAOm$var$remove;
$LAOm$exports.remove = $LAOm$export$remove;

function $LAOm$var$ofIterableIterator(it) {
  var buff = [];

  for (var r = it.next(); !r.done; r = it.next()) {
    buff.push(r.value);
  }

  return buff;
}

$LAOm$export$ofIterableIterator = $LAOm$var$ofIterableIterator;
$LAOm$exports.ofIterableIterator = $LAOm$export$ofIterableIterator; //# sourceMappingURL=arrays.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/component.js
var $eDHy$exports = {};
Object.defineProperty($eDHy$exports, "__esModule", {
  value: true
});
var $eDHy$export$ComponentTemplate = void 0;
$eDHy$exports.ComponentTemplate = $eDHy$export$ComponentTemplate;

var $eDHy$var$ComponentTemplate =
/** @class */
function () {
  function ComponentTemplate(delayed, reducer, equal, children) {
    this.delayed = delayed;
    this.reducer = reducer;
    this.equal = equal;
    this.children = children.map($yiha$export$childOrBuilderToTemplate);
  }

  ComponentTemplate.prototype.render = function (ctx, state) {
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
    } else {
      update = function (state) {
        view.change(state);
      };
    }

    var store = $KBwC$export$Store.ofState({
      state: state,
      reducer: this.reducer,
      equal: this.equal
    });
    var property = store.property;
    property.observable.on(update);

    var innerDispatch = function (action) {
      store.process(action);
    };

    var newCtx = ctx.withInterceptDispatch(innerDispatch);
    var views = $LAOm$export$map(this.children, function (child) {
      return child.render(newCtx, property.get());
    });
    var view = {
      change: function (state) {
        store.property.set(state);

        for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
          var view_1 = views_1[_i];
          view_1.change(state);
        }
      },
      destroy: function () {
        property.observable.off(update);

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
      store: store
    };
    property.set(state);
    return view;
  };

  return ComponentTemplate;
}();

$eDHy$export$ComponentTemplate = $eDHy$var$ComponentTemplate;
$eDHy$exports.ComponentTemplate = $eDHy$export$ComponentTemplate; //# sourceMappingURL=component.js.map

// ASSET: ../node_modules/tempo-dom/lib/lifecycle.js
var $uV5V$exports = {};
Object.defineProperty($uV5V$exports, "__esModule", {
  value: true
});
var $uV5V$export$focusElement = ($uV5V$export$makeEmptyLifecycle = ($uV5V$export$compose = void 0, $uV5V$exports.compose = $uV5V$export$compose), $uV5V$exports.makeEmptyLifecycle = $uV5V$export$makeEmptyLifecycle);
$uV5V$exports.focusElement = $uV5V$export$focusElement;

function $uV5V$var$compose(a, b) {
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

var $uV5V$export$compose = $uV5V$var$compose;
$uV5V$exports.compose = $uV5V$export$compose;

function $uV5V$var$makeEmptyLifecycle(state, element, ctx) {
  return {
    beforeChange: function (state) {},
    afterChange: function (state) {},
    beforeDestroy: function () {}
  };
}

var $uV5V$export$makeEmptyLifecycle = $uV5V$var$makeEmptyLifecycle;
$uV5V$exports.makeEmptyLifecycle = $uV5V$export$makeEmptyLifecycle;

function $uV5V$var$focusElement(state, element, ctx) {
  ;
  element.focus(); // TODO

  return {
    beforeChange: function (state) {},
    afterChange: function (state) {},
    beforeDestroy: function () {}
  };
}

$uV5V$export$focusElement = $uV5V$var$focusElement;
$uV5V$exports.focusElement = $uV5V$export$focusElement; //# sourceMappingURL=lifecycle.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/element.js
var $X9Ob$exports = {};
Object.defineProperty($X9Ob$exports, "__esModule", {
  value: true
});
var $X9Ob$export$DOMElement = void 0;
$X9Ob$exports.DOMElement = $X9Ob$export$DOMElement;

var $X9Ob$var$DOMElement = function () {
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
      $lbKn$export$setElAttribute(el, att.name, att.value);
    }

    for (var _b = 0, _c = this.derivedAttrs; _b < _c.length; _b++) {
      var att = _c[_b];
      $lbKn$export$setElAttribute(el, att.name, att.resolve(localState));
    }

    for (var _d = 0, _e = this.literalStyles; _d < _e.length; _d++) {
      var stl = _e[_d];
      $lbKn$export$setElStyle(el, stl.name, stl.value);
    }

    for (var _f = 0, _g = this.derivedStyles; _f < _g.length; _f++) {
      var stl = _g[_f];
      $lbKn$export$setElStyle(el, stl.name, stl.resolve(localState));
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
    } // children


    var appendChild = function (n) {
      return el.appendChild(n);
    };

    var newCtx = ctx.withAppend(appendChild);
    var views = $LAOm$export$map(this.children, function (child) {
      return child.render(newCtx, localState);
    });
    ctx.append(el);
    var lifecycle = this.makeLifecycle(localState, el, ctx);
    return {
      change: function (state) {
        localState = state;
        lifecycle.beforeChange(localState);

        for (var _i = 0, _a = _this.derivedAttrs; _i < _a.length; _i++) {
          var att = _a[_i];
          $lbKn$export$setElAttribute(el, att.name, att.resolve(localState));
        }

        for (var _b = 0, _c = _this.derivedStyles; _b < _c.length; _b++) {
          var stl = _c[_b];
          $lbKn$export$setElStyle(el, stl.name, stl.resolve(localState));
        }

        for (var _d = 0, views_1 = views; _d < views_1.length; _d++) {
          var view = views_1[_d];
          view.change(localState);
        }

        lifecycle.afterChange(localState);
      },
      destroy: function () {
        lifecycle.beforeDestroy();
        $lbKn$export$removeNode(el);

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
}();

$X9Ob$export$DOMElement = $X9Ob$var$DOMElement;
$X9Ob$exports.DOMElement = $X9Ob$export$DOMElement; //# sourceMappingURL=element.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/map_state.js
var $kpTJ$exports = {};
Object.defineProperty($kpTJ$exports, "__esModule", {
  value: true
});
var $kpTJ$export$MapStateTemplate = void 0;
$kpTJ$exports.MapStateTemplate = $kpTJ$export$MapStateTemplate;

var $kpTJ$var$MapStateTemplate =
/** @class */
function () {
  function MapStateTemplate(map, orElse, equals, children) {
    this.map = map;
    this.orElse = orElse;
    this.equals = equals;
    this.children = children.map($yiha$export$childOrBuilderToTemplate);
  }

  MapStateTemplate.prototype.render = function (ctx, state) {
    var _a = this,
        children = _a.children,
        map = _a.map,
        orElse = _a.orElse,
        equals = _a.equals;

    var views = [];

    var _b = ctx.withAppendToReference(),
        newCtx = _b.ctx,
        ref = _b.ref;

    var current = undefined;
    var next = $nFed$export$resolveAttribute(map)(state);

    if (next === undefined) {
      views = [orElse.render(newCtx, state)];
    } else {
      current = next;
      views = $LAOm$export$map(children, function (c) {
        return c.render(newCtx, next);
      });
    }

    function destroy() {
      for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
        var view = views_1[_i];
        view.destroy();
      }
    }

    return {
      change: function (state) {
        var next = $nFed$export$resolveAttribute(map)(state);

        if (next !== undefined) {
          if (current === undefined) {
            destroy();
            current = next;
            views = $LAOm$export$map(children, function (c) {
              return c.render(newCtx, next);
            });
          } else if (!equals(current, next)) {
            current = next;

            for (var _i = 0, views_2 = views; _i < views_2.length; _i++) {
              var view = views_2[_i];
              view.change(next);
            }
          }
        } else {
          if (current !== undefined) {
            current = undefined;
            destroy();
            views = [orElse.render(newCtx, state)];
          } else {
            for (var _a = 0, views_3 = views; _a < views_3.length; _a++) {
              var view = views_3[_a];
              view.change(state);
            }
          }
        }
      },
      destroy: function () {
        destroy();
        $lbKn$export$removeNode(ref);
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
}();

$kpTJ$export$MapStateTemplate = $kpTJ$var$MapStateTemplate;
$kpTJ$exports.MapStateTemplate = $kpTJ$export$MapStateTemplate; //# sourceMappingURL=map_state.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/fragment.js
var $aQMP$exports = {};
Object.defineProperty($aQMP$exports, "__esModule", {
  value: true
});
var $aQMP$export$FragmentTemplate = void 0;
$aQMP$exports.FragmentTemplate = $aQMP$export$FragmentTemplate;

var $aQMP$var$FragmentTemplate =
/** @class */
function () {
  function FragmentTemplate(children) {
    this.children = children.map($yiha$export$childOrBuilderToTemplate);
  }

  FragmentTemplate.prototype.render = function (ctx, state) {
    var views = $LAOm$export$map(this.children, function (child) {
      return child.render(ctx, state);
    });
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
}();

$aQMP$export$FragmentTemplate = $aQMP$var$FragmentTemplate;
$aQMP$exports.FragmentTemplate = $aQMP$export$FragmentTemplate; //# sourceMappingURL=fragment.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/map_action.js
var $KxWc$exports = {};
Object.defineProperty($KxWc$exports, "__esModule", {
  value: true
});
var $KxWc$export$MapActionTemplate = void 0;
$KxWc$exports.MapActionTemplate = $KxWc$export$MapActionTemplate;

var $KxWc$var$MapActionTemplate =
/** @class */
function () {
  function MapActionTemplate(map, children) {
    this.map = map;
    this.children = children.map($yiha$export$childOrBuilderToTemplate);
  }

  MapActionTemplate.prototype.render = function (ctx, state) {
    var _a = this,
        children = _a.children,
        map = _a.map;

    var newCtx = ctx.conditionalMapAction(map);
    var views = $LAOm$export$map(children, function (c) {
      return c.render(newCtx, state);
    });
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
}();

$KxWc$export$MapActionTemplate = $KxWc$var$MapActionTemplate;
$KxWc$exports.MapActionTemplate = $KxWc$export$MapActionTemplate; //# sourceMappingURL=map_action.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/map_query.js
var $wbDd$exports = {};
Object.defineProperty($wbDd$exports, "__esModule", {
  value: true
});
var $wbDd$export$MapQueryTemplate = void 0;
$wbDd$exports.MapQueryTemplate = $wbDd$export$MapQueryTemplate;

var $wbDd$var$MapQueryTemplate =
/** @class */
function () {
  function MapQueryTemplate(map, children) {
    this.map = map;
    this.children = children.map($yiha$export$childOrBuilderToTemplate);
  }

  MapQueryTemplate.prototype.render = function (ctx, state) {
    var _a = this,
        children = _a.children,
        map = _a.map;

    var views = $LAOm$export$map(children, function (c) {
      return c.render(ctx, state);
    });
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
          views.forEach(function (view) {
            return view.request(innerQuery);
          });
        }
      }
    };
  };

  return MapQueryTemplate;
}();

$wbDd$export$MapQueryTemplate = $wbDd$var$MapQueryTemplate;
$wbDd$exports.MapQueryTemplate = $wbDd$export$MapQueryTemplate; //# sourceMappingURL=map_query.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/until.js
var $Ttvv$exports = {};
Object.defineProperty($Ttvv$exports, "__esModule", {
  value: true
});
var $Ttvv$export$UntilTemplate = void 0;
$Ttvv$exports.UntilTemplate = $Ttvv$export$UntilTemplate;

var $Ttvv$var$UntilTemplate =
/** @class */
function () {
  function UntilTemplate(next, children) {
    this.next = next;
    this.children = children.map($yiha$export$childOrBuilderToTemplate);
  }

  UntilTemplate.prototype.render = function (ctx, state) {
    var children = this.children;
    var next = this.next;

    var _a = ctx.withAppendToReference(),
        newCtx = _a.ctx,
        ref = _a.ref;

    var childrenViews = []; // TODO, when next is a static literal it can be optimized to only render once

    var view = {
      change: function (state) {
        var currentLength = childrenViews.length;
        var index = 0;

        var _loop_1 = function () {
          var value = $nFed$export$resolveAttribute(next)({
            state: state,
            index: index
          });
          if (value === undefined) return "break";

          if (index < currentLength) {
            // replace existing
            var filteredViews = childrenViews[index];

            for (var _i = 0, filteredViews_1 = filteredViews; _i < filteredViews_1.length; _i++) {
              var view_1 = filteredViews_1[_i];
              view_1.change(value);
            }
          } else {
            // add node
            childrenViews.push($LAOm$export$map(children, function (el) {
              return el.render(newCtx, value);
            }));
          }

          index++;
        };

        while (true) {
          var state_1 = _loop_1();

          if (state_1 === "break") break;
        }

        var i = index; // remove extra nodes

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
        $lbKn$export$removeNode(ref);

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
}();

$Ttvv$export$UntilTemplate = $Ttvv$var$UntilTemplate;
$Ttvv$exports.UntilTemplate = $Ttvv$export$UntilTemplate; //# sourceMappingURL=until.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/simple_component.js
var $LSkL$exports = {};
Object.defineProperty($LSkL$exports, "__esModule", {
  value: true
});
var $LSkL$export$SimpleComponentTemplate = void 0;
$LSkL$exports.SimpleComponentTemplate = $LSkL$export$SimpleComponentTemplate;

var $LSkL$var$SimpleComponentTemplate =
/** @class */
function () {
  function SimpleComponentTemplate(delayed, children) {
    this.delayed = delayed;
    this.children = children.map($yiha$export$childOrBuilderToTemplate);
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
    } else {
      update = function (state) {
        view.change(state);
      };
    }

    var newCtx = ctx.withInterceptDispatch(update);
    var views = $LAOm$export$map(this.children, function (child) {
      return child.render(newCtx, state);
    });
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
}();

$LSkL$export$SimpleComponentTemplate = $LSkL$var$SimpleComponentTemplate;
$LSkL$exports.SimpleComponentTemplate = $LSkL$export$SimpleComponentTemplate; //# sourceMappingURL=simple_component.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/portal.js
var $koeo$exports = {};
Object.defineProperty($koeo$exports, "__esModule", {
  value: true
});
var $koeo$export$PortalTemplate = void 0;
$koeo$exports.PortalTemplate = $koeo$export$PortalTemplate;

var $koeo$var$PortalTemplate =
/** @class */
function () {
  function PortalTemplate(append, children) {
    this.append = append;
    this.children = children.map($yiha$export$childOrBuilderToTemplate);
  }

  PortalTemplate.prototype.render = function (ctx, state) {
    var _this = this;

    var append = function (node) {
      return _this.append(ctx.doc, node);
    };

    var newCtx = ctx.withAppend(append);
    var views = $LAOm$export$map(this.children, function (child) {
      return child.render(newCtx, state);
    });
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
}();

$koeo$export$PortalTemplate = $koeo$var$PortalTemplate;
$koeo$exports.PortalTemplate = $koeo$export$PortalTemplate; //# sourceMappingURL=portal.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/lazy.js
var $hzRP$exports = {};
Object.defineProperty($hzRP$exports, "__esModule", {
  value: true
});
var $hzRP$export$LazyTemplate = void 0;
$hzRP$exports.LazyTemplate = $hzRP$export$LazyTemplate;

var $hzRP$var$LazyTemplate =
/** @class */
function () {
  function LazyTemplate(f) {
    this.f = f;
  }

  LazyTemplate.prototype.render = function (ctx, state) {
    if (this.template === undefined) {
      this.template = $yiha$export$childOrBuilderToTemplate(this.f());
    }

    return this.template.render(ctx, state);
  };

  return LazyTemplate;
}();

$hzRP$export$LazyTemplate = $hzRP$var$LazyTemplate;
$hzRP$exports.LazyTemplate = $hzRP$export$LazyTemplate; //# sourceMappingURL=lazy.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/match_bool_template.js
var $ZVXL$exports = {};
Object.defineProperty($ZVXL$exports, "__esModule", {
  value: true
});
var $ZVXL$export$MatchBoolTemplate = void 0;
$ZVXL$exports.MatchBoolTemplate = $ZVXL$export$MatchBoolTemplate;

var $ZVXL$var$MatchBoolTemplate =
/** @class */
function () {
  function MatchBoolTemplate(condition, trueTemplate, falseTemplate) {
    this.condition = condition;
    this.trueTemplate = $yiha$export$childOrBuilderToTemplate(trueTemplate);
    this.falseTemplate = $yiha$export$childOrBuilderToTemplate(falseTemplate);
  }

  MatchBoolTemplate.prototype.render = function (ctx, state) {
    var _a = ctx.withAppendToReference(),
        newCtx = _a.ctx,
        ref = _a.ref;

    var _b = this,
        trueTemplate = _b.trueTemplate,
        falseTemplate = _b.falseTemplate;

    var condition = $nFed$export$resolveAttribute(this.condition);
    var lastEvaluation = condition(state);
    var view = lastEvaluation ? trueTemplate.render(newCtx, state) : falseTemplate.render(newCtx, state);
    return {
      change: function (state) {
        var newEvaluation = condition(state);

        if (newEvaluation === lastEvaluation) {
          view.change(state);
        } else {
          view.destroy();
          lastEvaluation = newEvaluation;
          view = newEvaluation ? trueTemplate.render(newCtx, state) : falseTemplate.render(newCtx, state);
        }
      },
      destroy: function () {
        $lbKn$export$removeNode(ref);
        view.destroy();
      },
      request: function (query) {
        view.request(query);
      }
    };
  };

  return MatchBoolTemplate;
}();

$ZVXL$export$MatchBoolTemplate = $ZVXL$var$MatchBoolTemplate;
$ZVXL$exports.MatchBoolTemplate = $ZVXL$export$MatchBoolTemplate; //# sourceMappingURL=match_bool_template.js.map

// ASSET: ../node_modules/tempo-dom/lib/html.js
var $zQMt$exports = {};
var $zQMt$var$__createBinding = $zQMt$exports && $zQMt$exports.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var $zQMt$var$__exportStar = $zQMt$exports && $zQMt$exports.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) $zQMt$var$__createBinding(exports, m, p);
};

Object.defineProperty($zQMt$exports, "__esModule", {
  value: true
});
$zQMt$var$__exportStar($aXl4$exports, $zQMt$exports); //# sourceMappingURL=html.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/hold_state.js
var $fYSr$exports = {};
Object.defineProperty($fYSr$exports, "__esModule", {
  value: true
});
var $fYSr$export$HoldStateTemplate = void 0;
$fYSr$exports.HoldStateTemplate = $fYSr$export$HoldStateTemplate;

var $fYSr$var$HoldStateTemplate =
/** @class */
function () {
  function HoldStateTemplate(holdf, builder) {
    var _this = this;

    this.holdf = holdf;
    this.template = $yiha$export$childOrBuilderToTemplate(this.holdf(function (merge, init) {
      // const builder = new FragmentBuilder<StateC, Action, Query>()
      init(builder);
      var innerTemplate = builder.build();
      return $zQMt$exports.MapState(function (b) {
        return merge(_this.localState, b);
      }, function ($) {
        return $.Append(innerTemplate);
      }).build();
    }));
  }

  HoldStateTemplate.prototype.render = function (ctx, state) {
    var self = this;
    self.localState = state;
    var view = this.template.render(ctx, self.localState);
    return {
      change: function (state) {
        self.localState = state;
        view.change(self.localState);
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
}();

$fYSr$export$HoldStateTemplate = $fYSr$var$HoldStateTemplate;
$fYSr$exports.HoldStateTemplate = $fYSr$export$HoldStateTemplate; //# sourceMappingURL=hold_state.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/adapter.js
var $kWOh$exports = {};
Object.defineProperty($kWOh$exports, "__esModule", {
  value: true
});
var $kWOh$export$AdapterTemplate = void 0;
$kWOh$exports.AdapterTemplate = $kWOh$export$AdapterTemplate;

var $kWOh$var$AdapterTemplate =
/** @class */
function () {
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
    var mergedState = (_a = $nFed$export$resolveAttribute(this.mergeStates)({
      outerState: outerState,
      innerState: innerState
    })) !== null && _a !== void 0 ? _a : innerState;
    var viewComponent = this.child.render(ctx.withDispatch(function () {
      /* COMPONENT IS DETACHED FROM CONTAINER AND DOESN'T PROPAGATE */
    }), mergedState);
    var store = viewComponent.store;

    this.dispatchPropagate = function (state, action) {
      _this.propagate({
        action: action,
        innerState: state,
        outerState: outerState,
        dispatchInner: function (action) {
          return store.process(action);
        },
        dispatchOuter: ctx.dispatch
      });
    };

    store.observable.on(this.dispatchPropagate);
    return {
      change: function (state) {
        var innerState = store.property.get();
        var newState = $nFed$export$resolveAttribute(_this.mergeStates)({
          outerState: state,
          innerState: innerState
        });
        if (newState !== undefined) viewComponent.change(newState);
      },
      destroy: function () {
        viewComponent.destroy();

        if (_this.dispatchPropagate !== undefined) {
          store.observable.off(_this.dispatchPropagate);
        }
      },
      request: function (query) {
        viewComponent.request(query);
      }
    };
  };

  return AdapterTemplate;
}();

$kWOh$export$AdapterTemplate = $kWOh$var$AdapterTemplate;
$kWOh$exports.AdapterTemplate = $kWOh$export$AdapterTemplate; //# sourceMappingURL=adapter.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/svg_builder.js
var $bl4t$exports = {};

var $bl4t$var$__extends = $bl4t$exports && $bl4t$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($bl4t$exports, "__esModule", {
  value: true
});
var $bl4t$export$SVGRectElementBuilder = ($bl4t$export$SVGViewElementBuilder = ($bl4t$export$SVGUseElementBuilder = ($bl4t$export$SVGTSpanElementBuilder = ($bl4t$export$SVGTitleElementBuilder = ($bl4t$export$SVGTextPathElementBuilder = ($bl4t$export$SVGTextElementBuilder = ($bl4t$export$SVGSymbolElementBuilder = ($bl4t$export$SVGSwitchElementBuilder = ($bl4t$export$SVGSVGElementBuilder = ($bl4t$export$SVGStyleElementBuilder = ($bl4t$export$SVGStopElementBuilder = ($bl4t$export$SVGScriptElementBuilder = ($bl4t$export$SVGRadialGradientElementBuilder = ($bl4t$export$SVGPolylineElementBuilder = ($bl4t$export$SVGPolygonElementBuilder = ($bl4t$export$SVGPatternElementBuilder = ($bl4t$export$SVGPathElementBuilder = ($bl4t$export$SVGMetadataElementBuilder = ($bl4t$export$SVGMaskElementBuilder = ($bl4t$export$SVGMarkerElementBuilder = ($bl4t$export$SVGLinearGradientElementBuilder = ($bl4t$export$SVGLineElementBuilder = ($bl4t$export$SVGImageElementBuilder = ($bl4t$export$SVGGElementBuilder = ($bl4t$export$SVGForeignObjectElementBuilder = ($bl4t$export$SVGFilterElementBuilder = ($bl4t$export$SVGFETurbulenceElementBuilder = ($bl4t$export$SVGFETileElementBuilder = ($bl4t$export$SVGFESpotLightElementBuilder = ($bl4t$export$SVGFESpecularLightingElementBuilder = ($bl4t$export$SVGFEPointLightElementBuilder = ($bl4t$export$SVGFEOffsetElementBuilder = ($bl4t$export$SVGFEMorphologyElementBuilder = ($bl4t$export$SVGFEMergeNodeElementBuilder = ($bl4t$export$SVGFEMergeElementBuilder = ($bl4t$export$SVGFEImageElementBuilder = ($bl4t$export$SVGFEGaussianBlurElementBuilder = ($bl4t$export$SVGFEFuncRElementBuilder = ($bl4t$export$SVGFEFuncGElementBuilder = ($bl4t$export$SVGFEFuncBElementBuilder = ($bl4t$export$SVGFEFuncAElementBuilder = ($bl4t$export$SVGFEFloodElementBuilder = ($bl4t$export$SVGFEDistantLightElementBuilder = ($bl4t$export$SVGFEDisplacementMapElementBuilder = ($bl4t$export$SVGFEDiffuseLightingElementBuilder = ($bl4t$export$SVGFEConvolveMatrixElementBuilder = ($bl4t$export$SVGFeCompositeElementBuilder = ($bl4t$export$SVGFEComponentTransferElementBuilder = ($bl4t$export$SVGFEColorMatrixElementBuilder = ($bl4t$export$SVGFEBlendElementBuilder = ($bl4t$export$SVGEllipseElementBuilder = ($bl4t$export$SVGCircleElementBuilder = ($bl4t$export$SVGAnchorElementBuilder = ($bl4t$export$UntilSVGBuilder = ($bl4t$export$SimpleComponentSVGBuilder = ($bl4t$export$PortalSVGBuilder = ($bl4t$export$MapStateSVGBuilder = ($bl4t$export$MapQuerySVGBuilder = ($bl4t$export$MapActionSVGBuilder = ($bl4t$export$FragmentSVGBuilder = ($bl4t$export$ComponentSVGBuilder = ($bl4t$export$SVGGraphicsElementBuilder = ($bl4t$export$SVGElementBuilder = ($bl4t$export$svgEl = ($bl4t$export$BaseSVGBuilder = ($bl4t$export$SVG_NS = void 0, $bl4t$exports.SVG_NS = $bl4t$export$SVG_NS), $bl4t$exports.BaseSVGBuilder = $bl4t$export$BaseSVGBuilder), $bl4t$exports.svgEl = $bl4t$export$svgEl), $bl4t$exports.SVGElementBuilder = $bl4t$export$SVGElementBuilder), $bl4t$exports.SVGGraphicsElementBuilder = $bl4t$export$SVGGraphicsElementBuilder), $bl4t$exports.ComponentSVGBuilder = $bl4t$export$ComponentSVGBuilder), $bl4t$exports.FragmentSVGBuilder = $bl4t$export$FragmentSVGBuilder), $bl4t$exports.MapActionSVGBuilder = $bl4t$export$MapActionSVGBuilder), $bl4t$exports.MapQuerySVGBuilder = $bl4t$export$MapQuerySVGBuilder), $bl4t$exports.MapStateSVGBuilder = $bl4t$export$MapStateSVGBuilder), $bl4t$exports.PortalSVGBuilder = $bl4t$export$PortalSVGBuilder), $bl4t$exports.SimpleComponentSVGBuilder = $bl4t$export$SimpleComponentSVGBuilder), $bl4t$exports.UntilSVGBuilder = $bl4t$export$UntilSVGBuilder), $bl4t$exports.SVGAnchorElementBuilder = $bl4t$export$SVGAnchorElementBuilder), $bl4t$exports.SVGCircleElementBuilder = $bl4t$export$SVGCircleElementBuilder), $bl4t$exports.SVGEllipseElementBuilder = $bl4t$export$SVGEllipseElementBuilder), $bl4t$exports.SVGFEBlendElementBuilder = $bl4t$export$SVGFEBlendElementBuilder), $bl4t$exports.SVGFEColorMatrixElementBuilder = $bl4t$export$SVGFEColorMatrixElementBuilder), $bl4t$exports.SVGFEComponentTransferElementBuilder = $bl4t$export$SVGFEComponentTransferElementBuilder), $bl4t$exports.SVGFeCompositeElementBuilder = $bl4t$export$SVGFeCompositeElementBuilder), $bl4t$exports.SVGFEConvolveMatrixElementBuilder = $bl4t$export$SVGFEConvolveMatrixElementBuilder), $bl4t$exports.SVGFEDiffuseLightingElementBuilder = $bl4t$export$SVGFEDiffuseLightingElementBuilder), $bl4t$exports.SVGFEDisplacementMapElementBuilder = $bl4t$export$SVGFEDisplacementMapElementBuilder), $bl4t$exports.SVGFEDistantLightElementBuilder = $bl4t$export$SVGFEDistantLightElementBuilder), $bl4t$exports.SVGFEFloodElementBuilder = $bl4t$export$SVGFEFloodElementBuilder), $bl4t$exports.SVGFEFuncAElementBuilder = $bl4t$export$SVGFEFuncAElementBuilder), $bl4t$exports.SVGFEFuncBElementBuilder = $bl4t$export$SVGFEFuncBElementBuilder), $bl4t$exports.SVGFEFuncGElementBuilder = $bl4t$export$SVGFEFuncGElementBuilder), $bl4t$exports.SVGFEFuncRElementBuilder = $bl4t$export$SVGFEFuncRElementBuilder), $bl4t$exports.SVGFEGaussianBlurElementBuilder = $bl4t$export$SVGFEGaussianBlurElementBuilder), $bl4t$exports.SVGFEImageElementBuilder = $bl4t$export$SVGFEImageElementBuilder), $bl4t$exports.SVGFEMergeElementBuilder = $bl4t$export$SVGFEMergeElementBuilder), $bl4t$exports.SVGFEMergeNodeElementBuilder = $bl4t$export$SVGFEMergeNodeElementBuilder), $bl4t$exports.SVGFEMorphologyElementBuilder = $bl4t$export$SVGFEMorphologyElementBuilder), $bl4t$exports.SVGFEOffsetElementBuilder = $bl4t$export$SVGFEOffsetElementBuilder), $bl4t$exports.SVGFEPointLightElementBuilder = $bl4t$export$SVGFEPointLightElementBuilder), $bl4t$exports.SVGFESpecularLightingElementBuilder = $bl4t$export$SVGFESpecularLightingElementBuilder), $bl4t$exports.SVGFESpotLightElementBuilder = $bl4t$export$SVGFESpotLightElementBuilder), $bl4t$exports.SVGFETileElementBuilder = $bl4t$export$SVGFETileElementBuilder), $bl4t$exports.SVGFETurbulenceElementBuilder = $bl4t$export$SVGFETurbulenceElementBuilder), $bl4t$exports.SVGFilterElementBuilder = $bl4t$export$SVGFilterElementBuilder), $bl4t$exports.SVGForeignObjectElementBuilder = $bl4t$export$SVGForeignObjectElementBuilder), $bl4t$exports.SVGGElementBuilder = $bl4t$export$SVGGElementBuilder), $bl4t$exports.SVGImageElementBuilder = $bl4t$export$SVGImageElementBuilder), $bl4t$exports.SVGLineElementBuilder = $bl4t$export$SVGLineElementBuilder), $bl4t$exports.SVGLinearGradientElementBuilder = $bl4t$export$SVGLinearGradientElementBuilder), $bl4t$exports.SVGMarkerElementBuilder = $bl4t$export$SVGMarkerElementBuilder), $bl4t$exports.SVGMaskElementBuilder = $bl4t$export$SVGMaskElementBuilder), $bl4t$exports.SVGMetadataElementBuilder = $bl4t$export$SVGMetadataElementBuilder), $bl4t$exports.SVGPathElementBuilder = $bl4t$export$SVGPathElementBuilder), $bl4t$exports.SVGPatternElementBuilder = $bl4t$export$SVGPatternElementBuilder), $bl4t$exports.SVGPolygonElementBuilder = $bl4t$export$SVGPolygonElementBuilder), $bl4t$exports.SVGPolylineElementBuilder = $bl4t$export$SVGPolylineElementBuilder), $bl4t$exports.SVGRadialGradientElementBuilder = $bl4t$export$SVGRadialGradientElementBuilder), $bl4t$exports.SVGScriptElementBuilder = $bl4t$export$SVGScriptElementBuilder), $bl4t$exports.SVGStopElementBuilder = $bl4t$export$SVGStopElementBuilder), $bl4t$exports.SVGStyleElementBuilder = $bl4t$export$SVGStyleElementBuilder), $bl4t$exports.SVGSVGElementBuilder = $bl4t$export$SVGSVGElementBuilder), $bl4t$exports.SVGSwitchElementBuilder = $bl4t$export$SVGSwitchElementBuilder), $bl4t$exports.SVGSymbolElementBuilder = $bl4t$export$SVGSymbolElementBuilder), $bl4t$exports.SVGTextElementBuilder = $bl4t$export$SVGTextElementBuilder), $bl4t$exports.SVGTextPathElementBuilder = $bl4t$export$SVGTextPathElementBuilder), $bl4t$exports.SVGTitleElementBuilder = $bl4t$export$SVGTitleElementBuilder), $bl4t$exports.SVGTSpanElementBuilder = $bl4t$export$SVGTSpanElementBuilder), $bl4t$exports.SVGUseElementBuilder = $bl4t$export$SVGUseElementBuilder), $bl4t$exports.SVGViewElementBuilder = $bl4t$export$SVGViewElementBuilder);
$bl4t$exports.SVGRectElementBuilder = $bl4t$export$SVGRectElementBuilder;
var $bl4t$export$SVG_NS = 'http://www.w3.org/2000/svg';
$bl4t$exports.SVG_NS = $bl4t$export$SVG_NS;

var $bl4t$var$BaseSVGBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(BaseSVGBuilder, _super);

  function BaseSVGBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BaseSVGBuilder.prototype.SvgEl = function (init) {
    if (init === void 0) {
      init = function () {};
    }

    var builder = $bl4t$var$svgEl(name);
    init(builder);

    this._children.push(builder.build());

    return this;
  }; // transform


  BaseSVGBuilder.prototype.Adapter = function (props) {
    return this.Append(new $kWOh$export$AdapterTemplate(props.bootstrapState, props.mergeStates, props.propagate || function () {
      return undefined;
    }, props.child));
  };

  BaseSVGBuilder.prototype.Component = function (reducer, init) {
    var builder = new $bl4t$var$ComponentSVGBuilder(reducer);
    init(builder);
    return this.Append(builder.build());
  };

  BaseSVGBuilder.prototype.LocalAdapter = function (props) {
    return this.Append(new $kWOh$export$AdapterTemplate(function (state) {
      return state;
    }, function (_a) {
      var outerState = _a.outerState;
      return outerState;
    }, props.propagate || function () {
      return undefined;
    }, props.child));
  };

  BaseSVGBuilder.prototype.HoldState = function (holdf) {
    return this.Append(new $fYSr$export$HoldStateTemplate(holdf, new $bl4t$var$FragmentSVGBuilder()));
  };

  BaseSVGBuilder.prototype.MapState = function (map, init) {
    var builder = new $bl4t$var$MapStateSVGBuilder(map);
    init(builder);
    return this.Append(builder.build());
  };

  BaseSVGBuilder.prototype.MapField = function (field, init) {
    return this.MapState(function (v) {
      return v[field];
    }, init);
  };

  BaseSVGBuilder.prototype.MapStateAndKeep = function (map, init) {
    var builder = new $bl4t$var$MapStateSVGBuilder(function (state) {
      var inner = $nFed$export$resolveAttribute(map)(state);

      if (inner !== undefined) {
        return [inner, state];
      } else {
        return undefined;
      }
    });
    init(builder);
    return this.Append(builder.build());
  };

  BaseSVGBuilder.prototype.MapAction = function (map, init) {
    var builder = new $bl4t$var$MapActionSVGBuilder(map);
    init(builder);
    return this.Append(builder.build());
  };

  BaseSVGBuilder.prototype.MapQuery = function (map, init) {
    var builder = new $bl4t$var$MapQuerySVGBuilder(map);
    init(builder);
    return this.Append(builder.build());
  };

  BaseSVGBuilder.prototype.MatchBool = function (props) {
    return this.Append(new $ZVXL$export$MatchBoolTemplate(props.condition, props.true, props.false));
  };

  BaseSVGBuilder.prototype.Lazy = function (lazyf) {
    return this.Append(new $hzRP$export$LazyTemplate(lazyf));
  };

  BaseSVGBuilder.prototype.ForEach = function (init) {
    return this.Until(function (_a) {
      var state = _a.state,
          index = _a.index;
      return state[index];
    }, init);
  };

  BaseSVGBuilder.prototype.Fragment = function (init) {
    var builder = new $bl4t$var$FragmentSVGBuilder();
    init(builder);
    return this.Append(builder.build());
  };

  BaseSVGBuilder.prototype.Iterate = function (map, init) {
    return this.MapState(function (outer) {
      var items = $nFed$export$resolveAttribute(map)(outer);
      return items !== undefined ? [items, outer] : undefined;
    }, function ($) {
      $.Until(function (_a) {
        var _b = _a.state,
            items = _b[0],
            state = _b[1],
            index = _a.index;
        return items[index] && [items[index], state, index];
      }, init);
    });
  };

  BaseSVGBuilder.prototype.Portal = function (appendChild, init) {
    var builder = new $bl4t$var$PortalSVGBuilder(appendChild);
    init(builder);
    return this.Append(builder.build());
  };

  BaseSVGBuilder.prototype.PortalWithSelector = function (selector, init) {
    return this.Portal(function (doc) {
      var el = doc.querySelector(selector);

      if (!el) {
        throw new Error("selector doesn't match any element: \"" + selector + "\"");
      }

      return el;
    }, init);
  };

  BaseSVGBuilder.prototype.HeadPortal = function (init) {
    return this.Portal(function (doc) {
      return doc.head;
    }, init);
  };

  BaseSVGBuilder.prototype.BodyPortal = function (init) {
    return this.Portal(function (doc) {
      return doc.body;
    }, init);
  }; // SimpleComponent(
  //   init: (builder: SimpleComponentBuilder<State, Query>) => void
  // ) {
  //   const builder = new SimpleComponentBuilder<State, Query>()
  //   init(builder)
  //   return this.append(builder.build())
  // }


  BaseSVGBuilder.prototype.Unless = function (condition, init) {
    return this.When(function (s) {
      return !condition(s);
    }, init);
  };

  BaseSVGBuilder.prototype.Until = function (next, init) {
    var builder = new $bl4t$var$UntilSVGBuilder(next);
    init(builder);
    return this.Append(builder.build());
  };

  BaseSVGBuilder.prototype.When = function (condition, init) {
    var builder = new $bl4t$var$MapStateSVGBuilder(function (s) {
      if (condition(s)) {
        return s;
      } else {
        return undefined;
      }
    });
    init(builder);
    return this.Append(builder.build());
  }; // derived children


  BaseSVGBuilder.prototype.A = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGAnchorElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.CIRCLE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGCircleElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.CLIP_PATH = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGElementBuilder('clipPath'), init, this);
  };

  BaseSVGBuilder.prototype.DEFS = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGElementBuilder('defs'), init, this);
  };

  BaseSVGBuilder.prototype.DESC = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGElementBuilder('desc'), init, this);
  };

  BaseSVGBuilder.prototype.ELLIPSE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGEllipseElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_BLEND = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEBlendElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_COLOR_MATRIX = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEColorMatrixElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_COMPONENT_TRANSFER = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEComponentTransferElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_COMPOSITE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFeCompositeElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_CONVOLVE_MATRIX = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEConvolveMatrixElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_DIFFUSE_LIGHTING = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEDiffuseLightingElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_DISPLACEMENT_MAP = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEDisplacementMapElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_DISTANT_LIGHT = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEDistantLightElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_FLOOD = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEFloodElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_FUNC_A = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEFuncAElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_FUNC_B = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEFuncBElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_FUNC_G = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEFuncGElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_FUNC_R = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEFuncRElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_GAUSSIAN_BLUR = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEGaussianBlurElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_IMAGE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEImageElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_MERGE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEMergeElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_MERGE_NODE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEMergeNodeElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_MORPHOLOGY = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEMorphologyElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_OFFSET = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEOffsetElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_POINT_LIGHT = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFEPointLightElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_SPECULAR_LIGHTING = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFESpecularLightingElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_SPOTLIGHT = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFESpotLightElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_TILE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFETileElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FE_TURBULENCE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFETurbulenceElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FILTER = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGFilterElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.FOREIGN_OBJECT = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGForeignObjectElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.G = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGGElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.IMAGE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGImageElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.LINE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGLineElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.LINEAR_GRADIENT = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGLinearGradientElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.MARKER = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGMarkerElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.MASK = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGMaskElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.METADATA = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGMetadataElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.PATH = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGPathElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.PATTERN = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGPatternElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.POLYGON = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGPolygonElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.POLYLINE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGPolylineElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.RADIALGRADIENT = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGRadialGradientElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.RECT = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGRectElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.SCRIPT = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGScriptElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.STOP = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGStopElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.STYLE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGStyleElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.SVG = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGSVGElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.SWITCH = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGSwitchElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.SYMBOL = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGSymbolElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.TEXT = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGTextElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.TEXT_PATH = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGTextPathElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.TITLE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGTitleElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.TSPAN = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGTSpanElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.USE = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGUseElementBuilder(), init, this);
  };

  BaseSVGBuilder.prototype.VIEW = function (init) {
    return $bl4t$var$initBuilder(new $bl4t$var$SVGViewElementBuilder(), init, this);
  };

  return BaseSVGBuilder;
}($yiha$export$DOMBuilder);

var $bl4t$export$BaseSVGBuilder = $bl4t$var$BaseSVGBuilder;
$bl4t$exports.BaseSVGBuilder = $bl4t$export$BaseSVGBuilder; // dom generic

function $bl4t$var$svgEl(tagName) {
  return new $bl4t$var$SVGElementBuilder(tagName);
}

var $bl4t$export$svgEl = $bl4t$var$svgEl;
$bl4t$exports.svgEl = $bl4t$export$svgEl;

var $bl4t$var$SVGElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGElementBuilder, _super);

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

    return new $X9Ob$export$DOMElement($lbKn$export$makeCreateElementNS($bl4t$export$SVG_NS, this.tagName), $yiha$export$extractLiterals(this._attributes), $yiha$export$extractDerived(this._attributes), $yiha$export$extractLiterals(this._styles), $yiha$export$extractDerived(this._styles), $g3Xg$export$keys(this._handlers).map(function (name) {
      return {
        name: name,
        callback: _this._handlers[name]
      };
    }), (_a = this._lifecycle) !== null && _a !== void 0 ? _a : $uV5V$export$makeEmptyLifecycle, (_b = this._respond) !== null && _b !== void 0 ? _b : function (query, el, ctx) {}, // TODO better typing required
    this._children);
  }; // attributes, styles and handlers


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
  }; // attribute shortcuts


  SVGElementBuilder.prototype.aria = function (name, value) {
    return this.attr("aria-" + name, value);
  };

  SVGElementBuilder.prototype.class = function (value) {
    return this.attr('class', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
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
    return this.attr('style', $nFed$export$mapAttribute(value, $yiha$export$stylesToString));
  };

  SVGElementBuilder.prototype.systemLanguage = function (value) {
    return this.attr('systemLanguage', value);
  };

  SVGElementBuilder.prototype.tabIndex = function (value) {
    return this.attr('tabindex', $nFed$export$mapAttribute(value, String));
  }; // presentation attributes // TODO
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
    return this.attr('fill-opacity', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.fillRule = function (value) {
    return this.attr('fill-rule', value);
  };

  SVGElementBuilder.prototype.filter = function (value) {
    return this.attr('filter', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  SVGElementBuilder.prototype.floodColor = function (value) {
    return this.attr('flood-color', value);
  };

  SVGElementBuilder.prototype.floodOpacity = function (value) {
    return this.attr('flood-opacity', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.fontFamily = function (value) {
    return this.attr('font-family', value);
  };

  SVGElementBuilder.prototype.fontSize = function (value) {
    return this.attr('font-size', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.fontSizeAdjust = function (value) {
    return this.attr('font-size-adjust', $nFed$export$mapAttribute(value, String));
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
    return this.attr('font-weight', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.imageRendering = function (value) {
    return this.attr('image-rendering', value);
  };

  SVGElementBuilder.prototype.letterSpacing = function (value) {
    return this.attr('letter-spacing', $nFed$export$mapAttribute(value, String));
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
    return this.attr('opacity', $nFed$export$mapAttribute(value, String));
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
    return this.attr('stop-opacity', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.stroke = function (value) {
    return this.attr('stroke', value);
  };

  SVGElementBuilder.prototype.strokeDashArray = function (value) {
    return this.attr('stroke-dasharray', value);
  };

  SVGElementBuilder.prototype.strokeDashoffset = function (value) {
    return this.attr('stroke-dashoffset', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.strokeLineCap = function (value) {
    return this.attr('stroke-linecap', value);
  };

  SVGElementBuilder.prototype.strokeLineJoin = function (value) {
    return this.attr('stroke-linejoin', value);
  };

  SVGElementBuilder.prototype.strokeMiterLimit = function (value) {
    return this.attr('stroke-miterlimit', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.strokeOpacity = function (value) {
    return this.attr('stroke-opacity', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.strokeWidth = function (value) {
    return this.attr('stroke-width', $nFed$export$mapAttribute(value, String));
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
    return this.attr('transform', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
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
    return this.attr('word-spacing', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.writingMode = function (value) {
    return this.attr('writing-mode', value);
  }; // aria


  SVGElementBuilder.prototype.ariaActiveDescendant = function (value) {
    return this.attr('aria-activedescendant', value);
  };

  SVGElementBuilder.prototype.ariaAtomic = function (value) {
    return this.attr('aria-atomic', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  SVGElementBuilder.prototype.ariaAutocomplete = function (value) {
    return this.attr('aria-autocomplete', value);
  };

  SVGElementBuilder.prototype.ariaBusy = function (value) {
    return this.attr('aria-busy', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  SVGElementBuilder.prototype.ariaChecked = function (value) {
    return this.attr('aria-checked', $nFed$export$mapAttribute(value, function (v) {
      return v === true ? 'true' : v === false ? 'false' : v;
    }));
  };

  SVGElementBuilder.prototype.ariaColCount = function (value) {
    return this.attr('aria-colcount', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaColIndex = function (value) {
    return this.attr('aria-colindex', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaColSpan = function (value) {
    return this.attr('aria-colspan', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaControls = function (value) {
    return this.attr('aria-controls', value);
  };

  SVGElementBuilder.prototype.ariaCurrent = function (value) {
    return this.attr('aria-current', $nFed$export$mapAttribute(value, function (v) {
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
    return this.attr('aria-disabled', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  SVGElementBuilder.prototype.ariaDropEffect = function (value) {
    return this.attr('aria-dropeffect', value);
  };

  SVGElementBuilder.prototype.ariaErrorMessage = function (value) {
    return this.attr('aria-errormessage', $nFed$export$mapAttribute(value, function (v) {
      return v === true ? 'true' : v === false ? 'false' : v;
    }));
  };

  SVGElementBuilder.prototype.ariaExpanded = function (value) {
    return this.attr('aria-expanded', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  SVGElementBuilder.prototype.ariaFlowTo = function (value) {
    return this.attr('aria-flowto', value);
  };

  SVGElementBuilder.prototype.ariaGrabbed = function (value) {
    return this.attr('aria-grabbed', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  SVGElementBuilder.prototype.ariaHasPopup = function (value) {
    return this.attr('aria-haspopup', $nFed$export$mapAttribute(value, function (v) {
      return v === true ? 'true' : v === false ? 'false' : v;
    }));
  };

  SVGElementBuilder.prototype.ariaHidden = function (value) {
    return this.attr('aria-hidden', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
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
    return this.attr('aria-level', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaLive = function (value) {
    return this.attr('aria-live', value);
  };

  SVGElementBuilder.prototype.ariaModal = function (value) {
    return this.attr('aria-modal', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  SVGElementBuilder.prototype.ariaMultiLine = function (value) {
    return this.attr('aria-multiline', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  SVGElementBuilder.prototype.ariaMultiSelectable = function (value) {
    return this.attr('aria-multiselectable', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
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
    return this.attr('aria-pointset', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaPosInSet = function (value) {
    return this.attr('aria-posinset', value);
  };

  SVGElementBuilder.prototype.ariaPressed = function (value) {
    return this.attr('aria-pressed', $nFed$export$mapAttribute(value, function (v) {
      return v === true ? 'true' : v === false ? 'false' : v;
    }));
  };

  SVGElementBuilder.prototype.ariaReadonly = function (value) {
    return this.attr('aria-readonly', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  SVGElementBuilder.prototype.ariaRequired = function (value) {
    return this.attr('aria-required', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  SVGElementBuilder.prototype.ariaRelevant = function (value) {
    return this.attr('aria-relevant', value);
  };

  SVGElementBuilder.prototype.ariaRoleDescription = function (value) {
    return this.attr('aria-roledescription', value);
  };

  SVGElementBuilder.prototype.ariaRowCount = function (value) {
    return this.attr('aria-rowcount', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaRowIndex = function (value) {
    return this.attr('aria-rowindex', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaRowSpan = function (value) {
    return this.attr('aria-rowspan', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaSelected = function (value) {
    return this.attr('aria-selected', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  SVGElementBuilder.prototype.ariaSetSize = function (value) {
    return this.attr('aria-setsize', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaSort = function (value) {
    return this.attr('aria-sort', value);
  };

  SVGElementBuilder.prototype.ariaValueMax = function (value) {
    return this.attr('aria-valuemax', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaValueMin = function (value) {
    return this.attr('aria-valuemin', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaValueNow = function (value) {
    return this.attr('aria-valuenow', $nFed$export$mapAttribute(value, String));
  };

  SVGElementBuilder.prototype.ariaValueText = function (value) {
    return this.attr('aria-valuetext', value);
  }; // event shortcuts


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
}($bl4t$var$BaseSVGBuilder);

var $bl4t$export$SVGElementBuilder = $bl4t$var$SVGElementBuilder;
$bl4t$exports.SVGElementBuilder = $bl4t$export$SVGElementBuilder;

var $bl4t$var$SVGGraphicsElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGGraphicsElementBuilder, _super);

  function SVGGraphicsElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return SVGGraphicsElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGGraphicsElementBuilder = $bl4t$var$SVGGraphicsElementBuilder;
$bl4t$exports.SVGGraphicsElementBuilder = $bl4t$export$SVGGraphicsElementBuilder;

var $bl4t$var$ComponentSVGBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(ComponentSVGBuilder, _super);

  function ComponentSVGBuilder(reducer) {
    var _this = _super.call(this) || this;

    _this.reducer = reducer;
    _this.delayed = false;

    _this.equals = function (a, b) {
      return a === b;
    };

    return _this;
  }

  ComponentSVGBuilder.prototype.build = function () {
    return new $eDHy$export$ComponentTemplate(this.delayed, this.reducer, this.equals, this._children);
  };

  return ComponentSVGBuilder;
}($bl4t$var$BaseSVGBuilder);

var $bl4t$export$ComponentSVGBuilder = $bl4t$var$ComponentSVGBuilder;
$bl4t$exports.ComponentSVGBuilder = $bl4t$export$ComponentSVGBuilder;

var $bl4t$var$FragmentSVGBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(FragmentSVGBuilder, _super);

  function FragmentSVGBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FragmentSVGBuilder.prototype.build = function () {
    return new $aQMP$export$FragmentTemplate(this._children);
  };

  return FragmentSVGBuilder;
}($bl4t$var$BaseSVGBuilder);

var $bl4t$export$FragmentSVGBuilder = $bl4t$var$FragmentSVGBuilder;
$bl4t$exports.FragmentSVGBuilder = $bl4t$export$FragmentSVGBuilder;

var $bl4t$var$MapActionSVGBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(MapActionSVGBuilder, _super);

  function MapActionSVGBuilder(map) {
    var _this = _super.call(this) || this;

    _this.map = map;
    return _this;
  }

  MapActionSVGBuilder.prototype.build = function () {
    return new $KxWc$export$MapActionTemplate(this.map, this._children);
  };

  return MapActionSVGBuilder;
}($bl4t$var$BaseSVGBuilder);

var $bl4t$export$MapActionSVGBuilder = $bl4t$var$MapActionSVGBuilder;
$bl4t$exports.MapActionSVGBuilder = $bl4t$export$MapActionSVGBuilder;

var $bl4t$var$MapQuerySVGBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(MapQuerySVGBuilder, _super);

  function MapQuerySVGBuilder(map) {
    var _this = _super.call(this) || this;

    _this.map = map;
    return _this;
  }

  MapQuerySVGBuilder.prototype.build = function () {
    return new $wbDd$export$MapQueryTemplate(this.map, this._children);
  };

  return MapQuerySVGBuilder;
}($bl4t$var$BaseSVGBuilder);

var $bl4t$export$MapQuerySVGBuilder = $bl4t$var$MapQuerySVGBuilder;
$bl4t$exports.MapQuerySVGBuilder = $bl4t$export$MapQuerySVGBuilder;

var $bl4t$var$MapStateSVGBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(MapStateSVGBuilder, _super);

  function MapStateSVGBuilder(map) {
    var _this = _super.call(this) || this;

    _this.map = map;

    _this.equals = function (a, b) {
      return a === b;
    };

    return _this;
  }

  MapStateSVGBuilder.prototype.build = function () {
    return new $kpTJ$export$MapStateTemplate(this.map, $yiha$export$childOrBuilderToTemplate(this.orElse), this.equals, this._children);
  };

  return MapStateSVGBuilder;
}($bl4t$var$BaseSVGBuilder);

var $bl4t$export$MapStateSVGBuilder = $bl4t$var$MapStateSVGBuilder;
$bl4t$exports.MapStateSVGBuilder = $bl4t$export$MapStateSVGBuilder;

var $bl4t$var$PortalSVGBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(PortalSVGBuilder, _super);

  function PortalSVGBuilder(appendChild) {
    var _this = _super.call(this) || this;

    _this.appendChild = appendChild;
    return _this;
  }

  PortalSVGBuilder.prototype.build = function () {
    return new $koeo$export$PortalTemplate(this.appendChild, this._children);
  };

  return PortalSVGBuilder;
}($bl4t$var$BaseSVGBuilder);

var $bl4t$export$PortalSVGBuilder = $bl4t$var$PortalSVGBuilder;
$bl4t$exports.PortalSVGBuilder = $bl4t$export$PortalSVGBuilder;

var $bl4t$var$SimpleComponentSVGBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SimpleComponentSVGBuilder, _super);

  function SimpleComponentSVGBuilder() {
    var _this = _super.call(this) || this;

    _this.delayed = false;
    return _this;
  }

  SimpleComponentSVGBuilder.prototype.build = function () {
    return new $LSkL$export$SimpleComponentTemplate(this.delayed, this._children);
  };

  return SimpleComponentSVGBuilder;
}($bl4t$var$BaseSVGBuilder);

var $bl4t$export$SimpleComponentSVGBuilder = $bl4t$var$SimpleComponentSVGBuilder;
$bl4t$exports.SimpleComponentSVGBuilder = $bl4t$export$SimpleComponentSVGBuilder;

var $bl4t$var$UntilSVGBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(UntilSVGBuilder, _super);

  function UntilSVGBuilder(next) {
    var _this = _super.call(this) || this;

    _this.next = next;
    return _this;
  }

  UntilSVGBuilder.prototype.build = function () {
    return new $Ttvv$export$UntilTemplate(this.next, this._children);
  };

  return UntilSVGBuilder;
}($bl4t$var$BaseSVGBuilder);

var $bl4t$export$UntilSVGBuilder = $bl4t$var$UntilSVGBuilder;
$bl4t$exports.UntilSVGBuilder = $bl4t$export$UntilSVGBuilder;

function $bl4t$var$initBuilder(builder, init, parent) {
  init && init(builder);
  return parent.Append(builder.build());
}

var $bl4t$var$SVGAnchorElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGAnchorElementBuilder, _super);

  function SVGAnchorElementBuilder() {
    return _super.call(this, 'a') || this;
  } // download(filename: Attribute<State, string>): this {
  //   return this.attr('download', filename)
  // }


  SVGAnchorElementBuilder.prototype.href = function (url) {
    return this.attr('href', url);
  };

  SVGAnchorElementBuilder.prototype.hreflang = function (lang) {
    return this.attr('hreflang', lang);
  }; // ping(url: Attribute<State, ListValue<string>>): this {
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
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGAnchorElementBuilder = $bl4t$var$SVGAnchorElementBuilder;
$bl4t$exports.SVGAnchorElementBuilder = $bl4t$export$SVGAnchorElementBuilder;

var $bl4t$var$SVGCircleElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGCircleElementBuilder, _super);

  function SVGCircleElementBuilder() {
    return _super.call(this, 'circle') || this;
  }

  SVGCircleElementBuilder.prototype.cx = function (value) {
    return this.attr('cx', $nFed$export$mapAttribute(value, String));
  };

  SVGCircleElementBuilder.prototype.cy = function (value) {
    return this.attr('cy', $nFed$export$mapAttribute(value, String));
  };

  SVGCircleElementBuilder.prototype.r = function (value) {
    return this.attr('r', $nFed$export$mapAttribute(value, String));
  };

  SVGCircleElementBuilder.prototype.pathLength = function (value) {
    return this.attr('pathLength', $nFed$export$mapAttribute(value, String));
  };

  return SVGCircleElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGCircleElementBuilder = $bl4t$var$SVGCircleElementBuilder;
$bl4t$exports.SVGCircleElementBuilder = $bl4t$export$SVGCircleElementBuilder;

var $bl4t$var$SVGEllipseElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGEllipseElementBuilder, _super);

  function SVGEllipseElementBuilder() {
    return _super.call(this, 'ellipse') || this;
  }

  SVGEllipseElementBuilder.prototype.cx = function (value) {
    return this.attr('cx', $nFed$export$mapAttribute(value, String));
  };

  SVGEllipseElementBuilder.prototype.cy = function (value) {
    return this.attr('cy', $nFed$export$mapAttribute(value, String));
  };

  SVGEllipseElementBuilder.prototype.rx = function (value) {
    return this.attr('rx', $nFed$export$mapAttribute(value, String));
  };

  SVGEllipseElementBuilder.prototype.ry = function (value) {
    return this.attr('ry', $nFed$export$mapAttribute(value, String));
  };

  SVGEllipseElementBuilder.prototype.pathLength = function (value) {
    return this.attr('pathLength', $nFed$export$mapAttribute(value, String));
  };

  return SVGEllipseElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGEllipseElementBuilder = $bl4t$var$SVGEllipseElementBuilder;
$bl4t$exports.SVGEllipseElementBuilder = $bl4t$export$SVGEllipseElementBuilder;

var $bl4t$var$SVGFEBlendElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEBlendElementBuilder, _super);

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
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEBlendElementBuilder = $bl4t$var$SVGFEBlendElementBuilder;
$bl4t$exports.SVGFEBlendElementBuilder = $bl4t$export$SVGFEBlendElementBuilder;

var $bl4t$var$SVGFEColorMatrixElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEColorMatrixElementBuilder, _super);

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
    return this.attr('mode', $nFed$export$mapAttribute(value, function (v) {
      return Array.isArray(v) ? v.join(' ') : String(v);
    }));
  };

  return SVGFEColorMatrixElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEColorMatrixElementBuilder = $bl4t$var$SVGFEColorMatrixElementBuilder;
$bl4t$exports.SVGFEColorMatrixElementBuilder = $bl4t$export$SVGFEColorMatrixElementBuilder;

var $bl4t$var$SVGFEComponentTransferElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEComponentTransferElementBuilder, _super);

  function SVGFEComponentTransferElementBuilder() {
    return _super.call(this, 'feComponentTransfer') || this;
  }

  SVGFEComponentTransferElementBuilder.prototype.in = function (value) {
    return this.attr('in', value);
  };

  return SVGFEComponentTransferElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEComponentTransferElementBuilder = $bl4t$var$SVGFEComponentTransferElementBuilder;
$bl4t$exports.SVGFEComponentTransferElementBuilder = $bl4t$export$SVGFEComponentTransferElementBuilder;

var $bl4t$var$SVGFeCompositeElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFeCompositeElementBuilder, _super);

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
    return this.attr('k1', $nFed$export$mapAttribute(value, String));
  };

  SVGFeCompositeElementBuilder.prototype.k2 = function (value) {
    return this.attr('k2', $nFed$export$mapAttribute(value, String));
  };

  SVGFeCompositeElementBuilder.prototype.k3 = function (value) {
    return this.attr('k3', $nFed$export$mapAttribute(value, String));
  };

  SVGFeCompositeElementBuilder.prototype.k4 = function (value) {
    return this.attr('k4', $nFed$export$mapAttribute(value, String));
  };

  return SVGFeCompositeElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFeCompositeElementBuilder = $bl4t$var$SVGFeCompositeElementBuilder;
$bl4t$exports.SVGFeCompositeElementBuilder = $bl4t$export$SVGFeCompositeElementBuilder;

var $bl4t$var$SVGFEConvolveMatrixElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEConvolveMatrixElementBuilder, _super);

  function SVGFEConvolveMatrixElementBuilder() {
    return _super.call(this, 'feConvolveMatrix') || this;
  }

  SVGFEConvolveMatrixElementBuilder.prototype.in = function (value) {
    return this.attr('in', value);
  };

  SVGFEConvolveMatrixElementBuilder.prototype.order = function (value) {
    return this.attr('order', $nFed$export$mapAttribute(value, String));
  };

  SVGFEConvolveMatrixElementBuilder.prototype.kernelMatrix = function (value) {
    return this.attr('kernelMatrix', $nFed$export$mapAttribute(value, $yiha$export$numbersListToString));
  };

  SVGFEConvolveMatrixElementBuilder.prototype.divisor = function (value) {
    return this.attr('divisor', $nFed$export$mapAttribute(value, String));
  };

  SVGFEConvolveMatrixElementBuilder.prototype.bias = function (value) {
    return this.attr('bias', $nFed$export$mapAttribute(value, String));
  };

  SVGFEConvolveMatrixElementBuilder.prototype.targetX = function (value) {
    return this.attr('targetX', $nFed$export$mapAttribute(value, String));
  };

  SVGFEConvolveMatrixElementBuilder.prototype.targetY = function (value) {
    return this.attr('targetY', $nFed$export$mapAttribute(value, String));
  };

  SVGFEConvolveMatrixElementBuilder.prototype.edgeMode = function (value) {
    return this.attr('edgeMode', value);
  };

  SVGFEConvolveMatrixElementBuilder.prototype.preserveAlpha = function (value) {
    return this.attr('preserveAlpha', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  return SVGFEConvolveMatrixElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEConvolveMatrixElementBuilder = $bl4t$var$SVGFEConvolveMatrixElementBuilder;
$bl4t$exports.SVGFEConvolveMatrixElementBuilder = $bl4t$export$SVGFEConvolveMatrixElementBuilder;

var $bl4t$var$SVGFEDiffuseLightingElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEDiffuseLightingElementBuilder, _super);

  function SVGFEDiffuseLightingElementBuilder() {
    return _super.call(this, 'feDiffuseLighting') || this;
  }

  SVGFEDiffuseLightingElementBuilder.prototype.in = function (value) {
    return this.attr('in', value);
  };

  SVGFEDiffuseLightingElementBuilder.prototype.surfaceScale = function (value) {
    return this.attr('surfaceScale', $nFed$export$mapAttribute(value, String));
  };

  SVGFEDiffuseLightingElementBuilder.prototype.diffuseConstant = function (value) {
    return this.attr('diffuseConstant', $nFed$export$mapAttribute(value, String));
  };

  return SVGFEDiffuseLightingElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEDiffuseLightingElementBuilder = $bl4t$var$SVGFEDiffuseLightingElementBuilder;
$bl4t$exports.SVGFEDiffuseLightingElementBuilder = $bl4t$export$SVGFEDiffuseLightingElementBuilder;

var $bl4t$var$SVGFEDisplacementMapElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEDisplacementMapElementBuilder, _super);

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
    return this.attr('scale', $nFed$export$mapAttribute(value, String));
  };

  SVGFEDisplacementMapElementBuilder.prototype.xChannelSelector = function (value) {
    return this.attr('xChannelSelector', value);
  };

  SVGFEDisplacementMapElementBuilder.prototype.yChannelSelector = function (value) {
    return this.attr('yChannelSelector', value);
  };

  return SVGFEDisplacementMapElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEDisplacementMapElementBuilder = $bl4t$var$SVGFEDisplacementMapElementBuilder;
$bl4t$exports.SVGFEDisplacementMapElementBuilder = $bl4t$export$SVGFEDisplacementMapElementBuilder;

var $bl4t$var$SVGFEDistantLightElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEDistantLightElementBuilder, _super);

  function SVGFEDistantLightElementBuilder() {
    return _super.call(this, 'feDistantLight') || this;
  }

  SVGFEDistantLightElementBuilder.prototype.azimuth = function (value) {
    return this.attr('azimuth', $nFed$export$mapAttribute(value, String));
  };

  SVGFEDistantLightElementBuilder.prototype.elevation = function (value) {
    return this.attr('elevation', $nFed$export$mapAttribute(value, String));
  };

  return SVGFEDistantLightElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEDistantLightElementBuilder = $bl4t$var$SVGFEDistantLightElementBuilder;
$bl4t$exports.SVGFEDistantLightElementBuilder = $bl4t$export$SVGFEDistantLightElementBuilder;

var $bl4t$var$SVGFEFloodElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEFloodElementBuilder, _super);

  function SVGFEFloodElementBuilder() {
    return _super.call(this, 'feFlood') || this;
  }

  SVGFEFloodElementBuilder.prototype.floodColor = function (value) {
    return this.attr('flood-color', value);
  };

  SVGFEFloodElementBuilder.prototype.floodOpacity = function (value) {
    return this.attr('flood-opacity', $nFed$export$mapAttribute(value, String));
  };

  return SVGFEFloodElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEFloodElementBuilder = $bl4t$var$SVGFEFloodElementBuilder;
$bl4t$exports.SVGFEFloodElementBuilder = $bl4t$export$SVGFEFloodElementBuilder;

var $bl4t$var$SVGFEFuncAElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEFuncAElementBuilder, _super);

  function SVGFEFuncAElementBuilder() {
    return _super.call(this, 'feFuncA') || this;
  }

  return SVGFEFuncAElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEFuncAElementBuilder = $bl4t$var$SVGFEFuncAElementBuilder;
$bl4t$exports.SVGFEFuncAElementBuilder = $bl4t$export$SVGFEFuncAElementBuilder;

var $bl4t$var$SVGFEFuncBElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEFuncBElementBuilder, _super);

  function SVGFEFuncBElementBuilder() {
    return _super.call(this, 'feFuncB') || this;
  }

  return SVGFEFuncBElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEFuncBElementBuilder = $bl4t$var$SVGFEFuncBElementBuilder;
$bl4t$exports.SVGFEFuncBElementBuilder = $bl4t$export$SVGFEFuncBElementBuilder;

var $bl4t$var$SVGFEFuncGElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEFuncGElementBuilder, _super);

  function SVGFEFuncGElementBuilder() {
    return _super.call(this, 'feFuncG') || this;
  }

  return SVGFEFuncGElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEFuncGElementBuilder = $bl4t$var$SVGFEFuncGElementBuilder;
$bl4t$exports.SVGFEFuncGElementBuilder = $bl4t$export$SVGFEFuncGElementBuilder;

var $bl4t$var$SVGFEFuncRElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEFuncRElementBuilder, _super);

  function SVGFEFuncRElementBuilder() {
    return _super.call(this, 'feFuncR') || this;
  }

  return SVGFEFuncRElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEFuncRElementBuilder = $bl4t$var$SVGFEFuncRElementBuilder;
$bl4t$exports.SVGFEFuncRElementBuilder = $bl4t$export$SVGFEFuncRElementBuilder;

var $bl4t$var$SVGFEGaussianBlurElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEGaussianBlurElementBuilder, _super);

  function SVGFEGaussianBlurElementBuilder() {
    return _super.call(this, 'feGaussianBlur') || this;
  }

  SVGFEGaussianBlurElementBuilder.prototype.in = function (value) {
    return this.attr('in', value);
  };

  SVGFEGaussianBlurElementBuilder.prototype.stdDeviation = function (value) {
    return this.attr('stdDeviation', $nFed$export$mapAttribute(value, String));
  };

  SVGFEGaussianBlurElementBuilder.prototype.edgeMode = function (value) {
    return this.attr('edgeMode', value);
  };

  return SVGFEGaussianBlurElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEGaussianBlurElementBuilder = $bl4t$var$SVGFEGaussianBlurElementBuilder;
$bl4t$exports.SVGFEGaussianBlurElementBuilder = $bl4t$export$SVGFEGaussianBlurElementBuilder;

var $bl4t$var$SVGFEImageElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEImageElementBuilder, _super);

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
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEImageElementBuilder = $bl4t$var$SVGFEImageElementBuilder;
$bl4t$exports.SVGFEImageElementBuilder = $bl4t$export$SVGFEImageElementBuilder;

var $bl4t$var$SVGFEMergeElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEMergeElementBuilder, _super);

  function SVGFEMergeElementBuilder() {
    return _super.call(this, 'feMerge') || this;
  }

  return SVGFEMergeElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEMergeElementBuilder = $bl4t$var$SVGFEMergeElementBuilder;
$bl4t$exports.SVGFEMergeElementBuilder = $bl4t$export$SVGFEMergeElementBuilder;

var $bl4t$var$SVGFEMergeNodeElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEMergeNodeElementBuilder, _super);

  function SVGFEMergeNodeElementBuilder() {
    return _super.call(this, 'feMergeNode') || this;
  }

  SVGFEMergeNodeElementBuilder.prototype.in = function (value) {
    return this.attr('in', value);
  };

  return SVGFEMergeNodeElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEMergeNodeElementBuilder = $bl4t$var$SVGFEMergeNodeElementBuilder;
$bl4t$exports.SVGFEMergeNodeElementBuilder = $bl4t$export$SVGFEMergeNodeElementBuilder;

var $bl4t$var$SVGFEMorphologyElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEMorphologyElementBuilder, _super);

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
    return this.attr('radius', $nFed$export$mapAttribute(value, String));
  };

  return SVGFEMorphologyElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEMorphologyElementBuilder = $bl4t$var$SVGFEMorphologyElementBuilder;
$bl4t$exports.SVGFEMorphologyElementBuilder = $bl4t$export$SVGFEMorphologyElementBuilder;

var $bl4t$var$SVGFEOffsetElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEOffsetElementBuilder, _super);

  function SVGFEOffsetElementBuilder() {
    return _super.call(this, 'feOffset') || this;
  }

  SVGFEOffsetElementBuilder.prototype.in = function (value) {
    return this.attr('in', value);
  };

  SVGFEOffsetElementBuilder.prototype.dx = function (value) {
    return this.attr('dx', $nFed$export$mapAttribute(value, String));
  };

  SVGFEOffsetElementBuilder.prototype.dy = function (value) {
    return this.attr('dy', $nFed$export$mapAttribute(value, String));
  };

  return SVGFEOffsetElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEOffsetElementBuilder = $bl4t$var$SVGFEOffsetElementBuilder;
$bl4t$exports.SVGFEOffsetElementBuilder = $bl4t$export$SVGFEOffsetElementBuilder;

var $bl4t$var$SVGFEPointLightElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFEPointLightElementBuilder, _super);

  function SVGFEPointLightElementBuilder() {
    return _super.call(this, 'fePointLight') || this;
  }

  SVGFEPointLightElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGFEPointLightElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGFEPointLightElementBuilder.prototype.z = function (value) {
    return this.attr('z', $nFed$export$mapAttribute(value, String));
  };

  return SVGFEPointLightElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFEPointLightElementBuilder = $bl4t$var$SVGFEPointLightElementBuilder;
$bl4t$exports.SVGFEPointLightElementBuilder = $bl4t$export$SVGFEPointLightElementBuilder;

var $bl4t$var$SVGFESpecularLightingElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFESpecularLightingElementBuilder, _super);

  function SVGFESpecularLightingElementBuilder() {
    return _super.call(this, 'feSpecularLighting') || this;
  }

  SVGFESpecularLightingElementBuilder.prototype.in = function (value) {
    return this.attr('in', value);
  };

  SVGFESpecularLightingElementBuilder.prototype.surfaceScale = function (value) {
    return this.attr('surfaceScale', $nFed$export$mapAttribute(value, String));
  };

  SVGFESpecularLightingElementBuilder.prototype.specularConstant = function (value) {
    return this.attr('specularConstant', $nFed$export$mapAttribute(value, String));
  };

  SVGFESpecularLightingElementBuilder.prototype.specularExponent = function (value) {
    return this.attr('specularExponent', $nFed$export$mapAttribute(value, String));
  };

  return SVGFESpecularLightingElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFESpecularLightingElementBuilder = $bl4t$var$SVGFESpecularLightingElementBuilder;
$bl4t$exports.SVGFESpecularLightingElementBuilder = $bl4t$export$SVGFESpecularLightingElementBuilder;

var $bl4t$var$SVGFESpotLightElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFESpotLightElementBuilder, _super);

  function SVGFESpotLightElementBuilder() {
    return _super.call(this, 'feSpotLight') || this;
  }

  SVGFESpotLightElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGFESpotLightElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGFESpotLightElementBuilder.prototype.z = function (value) {
    return this.attr('z', $nFed$export$mapAttribute(value, String));
  };

  SVGFESpotLightElementBuilder.prototype.pointsAtX = function (value) {
    return this.attr('pointsAtX', $nFed$export$mapAttribute(value, String));
  };

  SVGFESpotLightElementBuilder.prototype.pointsAtY = function (value) {
    return this.attr('pointsAtY', $nFed$export$mapAttribute(value, String));
  };

  SVGFESpotLightElementBuilder.prototype.pointsAtZ = function (value) {
    return this.attr('pointsAtZ', $nFed$export$mapAttribute(value, String));
  };

  SVGFESpotLightElementBuilder.prototype.specularComponent = function (value) {
    return this.attr('specularComponent', $nFed$export$mapAttribute(value, String));
  };

  SVGFESpotLightElementBuilder.prototype.limitingConeAngle = function (value) {
    return this.attr('limitingConeAngle', $nFed$export$mapAttribute(value, String));
  };

  return SVGFESpotLightElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFESpotLightElementBuilder = $bl4t$var$SVGFESpotLightElementBuilder;
$bl4t$exports.SVGFESpotLightElementBuilder = $bl4t$export$SVGFESpotLightElementBuilder;

var $bl4t$var$SVGFETileElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFETileElementBuilder, _super);

  function SVGFETileElementBuilder() {
    return _super.call(this, 'feTile') || this;
  }

  SVGFETileElementBuilder.prototype.in = function (value) {
    return this.attr('in', value);
  };

  return SVGFETileElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFETileElementBuilder = $bl4t$var$SVGFETileElementBuilder;
$bl4t$exports.SVGFETileElementBuilder = $bl4t$export$SVGFETileElementBuilder;

var $bl4t$var$SVGFETurbulenceElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFETurbulenceElementBuilder, _super);

  function SVGFETurbulenceElementBuilder() {
    return _super.call(this, 'feTurbulence') || this;
  }

  SVGFETurbulenceElementBuilder.prototype.baseFrequency = function (value) {
    return this.attr('baseFrequency', $nFed$export$mapAttribute(value, String));
  };

  SVGFETurbulenceElementBuilder.prototype.numOctaves = function (value) {
    return this.attr('numOctaves', $nFed$export$mapAttribute(value, String));
  };

  SVGFETurbulenceElementBuilder.prototype.seed = function (value) {
    return this.attr('seed', $nFed$export$mapAttribute(value, String));
  };

  SVGFETurbulenceElementBuilder.prototype.stitchTiles = function (value) {
    return this.attr('stitchTiles', value);
  };

  SVGFETurbulenceElementBuilder.prototype.type = function (value) {
    return this.attr('type', value);
  };

  return SVGFETurbulenceElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFETurbulenceElementBuilder = $bl4t$var$SVGFETurbulenceElementBuilder;
$bl4t$exports.SVGFETurbulenceElementBuilder = $bl4t$export$SVGFETurbulenceElementBuilder;

var $bl4t$var$SVGFilterElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGFilterElementBuilder, _super);

  function SVGFilterElementBuilder() {
    return _super.call(this, 'filter') || this;
  }

  SVGFilterElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGFilterElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGFilterElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  SVGFilterElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
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
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGFilterElementBuilder = $bl4t$var$SVGFilterElementBuilder;
$bl4t$exports.SVGFilterElementBuilder = $bl4t$export$SVGFilterElementBuilder;

var $bl4t$var$SVGForeignObjectElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGForeignObjectElementBuilder, _super);

  function SVGForeignObjectElementBuilder() {
    return _super.call(this, 'foreignObject') || this;
  }

  SVGForeignObjectElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGForeignObjectElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGForeignObjectElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  SVGForeignObjectElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return SVGForeignObjectElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGForeignObjectElementBuilder = $bl4t$var$SVGForeignObjectElementBuilder;
$bl4t$exports.SVGForeignObjectElementBuilder = $bl4t$export$SVGForeignObjectElementBuilder;

var $bl4t$var$SVGGElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGGElementBuilder, _super);

  function SVGGElementBuilder() {
    return _super.call(this, 'g') || this;
  }

  return SVGGElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGGElementBuilder = $bl4t$var$SVGGElementBuilder;
$bl4t$exports.SVGGElementBuilder = $bl4t$export$SVGGElementBuilder;

var $bl4t$var$SVGImageElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGImageElementBuilder, _super);

  function SVGImageElementBuilder() {
    return _super.call(this, 'image') || this;
  }

  SVGImageElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGImageElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGImageElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  SVGImageElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  SVGImageElementBuilder.prototype.href = function (value) {
    return this.attr('href', value);
  };

  SVGImageElementBuilder.prototype.preserveAspectRatio = function (value) {
    return this.attr('preserveAspectRatio', value);
  };

  return SVGImageElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGImageElementBuilder = $bl4t$var$SVGImageElementBuilder;
$bl4t$exports.SVGImageElementBuilder = $bl4t$export$SVGImageElementBuilder;

var $bl4t$var$SVGLineElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGLineElementBuilder, _super);

  function SVGLineElementBuilder() {
    return _super.call(this, 'line') || this;
  }

  SVGLineElementBuilder.prototype.x1 = function (value) {
    return this.attr('x1', $nFed$export$mapAttribute(value, String));
  };

  SVGLineElementBuilder.prototype.y1 = function (value) {
    return this.attr('y1', $nFed$export$mapAttribute(value, String));
  };

  SVGLineElementBuilder.prototype.x2 = function (value) {
    return this.attr('x2', $nFed$export$mapAttribute(value, String));
  };

  SVGLineElementBuilder.prototype.y2 = function (value) {
    return this.attr('y2', $nFed$export$mapAttribute(value, String));
  };

  SVGLineElementBuilder.prototype.pathLength = function (value) {
    return this.attr('pathLength', $nFed$export$mapAttribute(value, String));
  };

  return SVGLineElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGLineElementBuilder = $bl4t$var$SVGLineElementBuilder;
$bl4t$exports.SVGLineElementBuilder = $bl4t$export$SVGLineElementBuilder;

var $bl4t$var$SVGLinearGradientElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGLinearGradientElementBuilder, _super);

  function SVGLinearGradientElementBuilder() {
    return _super.call(this, 'linearGradient') || this;
  }

  SVGLinearGradientElementBuilder.prototype.gradientUnits = function (value) {
    return this.attr('gradientUnits', value);
  };

  SVGLinearGradientElementBuilder.prototype.gradientTransform = function (value) {
    return this.attr('gradientTransform', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  SVGLinearGradientElementBuilder.prototype.href = function (value) {
    return this.attr('href', value);
  };

  SVGLinearGradientElementBuilder.prototype.spreadMethod = function (value) {
    return this.attr('spreadMethod', value);
  };

  SVGLinearGradientElementBuilder.prototype.x1 = function (value) {
    return this.attr('x1', $nFed$export$mapAttribute(value, String));
  };

  SVGLinearGradientElementBuilder.prototype.y1 = function (value) {
    return this.attr('y1', $nFed$export$mapAttribute(value, String));
  };

  SVGLinearGradientElementBuilder.prototype.x2 = function (value) {
    return this.attr('x2', $nFed$export$mapAttribute(value, String));
  };

  SVGLinearGradientElementBuilder.prototype.y2 = function (value) {
    return this.attr('y2', $nFed$export$mapAttribute(value, String));
  };

  return SVGLinearGradientElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGLinearGradientElementBuilder = $bl4t$var$SVGLinearGradientElementBuilder;
$bl4t$exports.SVGLinearGradientElementBuilder = $bl4t$export$SVGLinearGradientElementBuilder;

var $bl4t$var$SVGMarkerElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGMarkerElementBuilder, _super);

  function SVGMarkerElementBuilder() {
    return _super.call(this, 'marker') || this;
  }

  SVGMarkerElementBuilder.prototype.markerHeight = function (value) {
    return this.attr('markerHeight', $nFed$export$mapAttribute(value, String));
  };

  SVGMarkerElementBuilder.prototype.markerUnits = function (value) {
    return this.attr('markerUnits', value);
  };

  SVGMarkerElementBuilder.prototype.markerWidth = function (value) {
    return this.attr('markerWidth', $nFed$export$mapAttribute(value, String));
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
    return this.attr('viewBox', $nFed$export$mapAttribute(value, $yiha$export$numbersListToString));
  };

  return SVGMarkerElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGMarkerElementBuilder = $bl4t$var$SVGMarkerElementBuilder;
$bl4t$exports.SVGMarkerElementBuilder = $bl4t$export$SVGMarkerElementBuilder;

var $bl4t$var$SVGMaskElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGMaskElementBuilder, _super);

  function SVGMaskElementBuilder() {
    return _super.call(this, 'mask') || this;
  }

  SVGMaskElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  SVGMaskElementBuilder.prototype.maskContentUnits = function (value) {
    return this.attr('maskContentUnits', value);
  };

  SVGMaskElementBuilder.prototype.maskUnits = function (value) {
    return this.attr('maskUnits', value);
  };

  SVGMaskElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGMaskElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGMaskElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return SVGMaskElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGMaskElementBuilder = $bl4t$var$SVGMaskElementBuilder;
$bl4t$exports.SVGMaskElementBuilder = $bl4t$export$SVGMaskElementBuilder;

var $bl4t$var$SVGMetadataElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGMetadataElementBuilder, _super);

  function SVGMetadataElementBuilder() {
    return _super.call(this, 'metadata') || this;
  }

  return SVGMetadataElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGMetadataElementBuilder = $bl4t$var$SVGMetadataElementBuilder;
$bl4t$exports.SVGMetadataElementBuilder = $bl4t$export$SVGMetadataElementBuilder;

var $bl4t$var$SVGPathElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGPathElementBuilder, _super);

  function SVGPathElementBuilder() {
    return _super.call(this, 'path') || this;
  }

  SVGPathElementBuilder.prototype.d = function (value) {
    return this.attr('d', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  SVGPathElementBuilder.prototype.pathLength = function (value) {
    return this.attr('pathLength', $nFed$export$mapAttribute(value, String));
  };

  return SVGPathElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGPathElementBuilder = $bl4t$var$SVGPathElementBuilder;
$bl4t$exports.SVGPathElementBuilder = $bl4t$export$SVGPathElementBuilder;

var $bl4t$var$SVGPatternElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGPatternElementBuilder, _super);

  function SVGPatternElementBuilder() {
    return _super.call(this, 'pattern') || this;
  }

  SVGPatternElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  SVGPatternElementBuilder.prototype.href = function (value) {
    return this.attr('href', value);
  };

  SVGPatternElementBuilder.prototype.patternContentUnits = function (value) {
    return this.attr('patternContentUnits', value);
  };

  SVGPatternElementBuilder.prototype.patternTransform = function (value) {
    return this.attr('patternTransform', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  SVGPatternElementBuilder.prototype.patternUnits = function (value) {
    return this.attr('patternUnits', value);
  };

  SVGPatternElementBuilder.prototype.preserveAspectRatio = function (value) {
    return this.attr('preserveAspectRatio', value);
  };

  SVGPatternElementBuilder.prototype.viewBox = function (value) {
    return this.attr('viewBox', $nFed$export$mapAttribute(value, $yiha$export$numbersListToString));
  };

  SVGPatternElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGPatternElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGPatternElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return SVGPatternElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGPatternElementBuilder = $bl4t$var$SVGPatternElementBuilder;
$bl4t$exports.SVGPatternElementBuilder = $bl4t$export$SVGPatternElementBuilder;

var $bl4t$var$SVGPolygonElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGPolygonElementBuilder, _super);

  function SVGPolygonElementBuilder() {
    return _super.call(this, 'polygon') || this;
  }

  SVGPolygonElementBuilder.prototype.points = function (value) {
    return this.attr('points', $nFed$export$mapAttribute(value, $yiha$export$numberPairsListToString));
  };

  SVGPolygonElementBuilder.prototype.pathLength = function (value) {
    return this.attr('pathLength', $nFed$export$mapAttribute(value, String));
  };

  return SVGPolygonElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGPolygonElementBuilder = $bl4t$var$SVGPolygonElementBuilder;
$bl4t$exports.SVGPolygonElementBuilder = $bl4t$export$SVGPolygonElementBuilder;

var $bl4t$var$SVGPolylineElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGPolylineElementBuilder, _super);

  function SVGPolylineElementBuilder() {
    return _super.call(this, 'polyline') || this;
  }

  SVGPolylineElementBuilder.prototype.points = function (value) {
    return this.attr('points', $nFed$export$mapAttribute(value, $yiha$export$numberPairsListToString));
  };

  SVGPolylineElementBuilder.prototype.pathLength = function (value) {
    return this.attr('pathLength', $nFed$export$mapAttribute(value, String));
  };

  return SVGPolylineElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGPolylineElementBuilder = $bl4t$var$SVGPolylineElementBuilder;
$bl4t$exports.SVGPolylineElementBuilder = $bl4t$export$SVGPolylineElementBuilder;

var $bl4t$var$SVGRadialGradientElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGRadialGradientElementBuilder, _super);

  function SVGRadialGradientElementBuilder() {
    return _super.call(this, 'radialGradient') || this;
  }

  SVGRadialGradientElementBuilder.prototype.cx = function (value) {
    return this.attr('cx', $nFed$export$mapAttribute(value, String));
  };

  SVGRadialGradientElementBuilder.prototype.cy = function (value) {
    return this.attr('cy', $nFed$export$mapAttribute(value, String));
  };

  SVGRadialGradientElementBuilder.prototype.fr = function (value) {
    return this.attr('fr', $nFed$export$mapAttribute(value, String));
  };

  SVGRadialGradientElementBuilder.prototype.fx = function (value) {
    return this.attr('fx', $nFed$export$mapAttribute(value, String));
  };

  SVGRadialGradientElementBuilder.prototype.fy = function (value) {
    return this.attr('fy', $nFed$export$mapAttribute(value, String));
  };

  SVGRadialGradientElementBuilder.prototype.gradientUnits = function (value) {
    return this.attr('gradientUnits', value);
  };

  SVGRadialGradientElementBuilder.prototype.gradientTransform = function (value) {
    return this.attr('gradientTransform', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  SVGRadialGradientElementBuilder.prototype.href = function (url) {
    return this.attr('href', url);
  };

  SVGRadialGradientElementBuilder.prototype.r = function (value) {
    return this.attr('r', $nFed$export$mapAttribute(value, String));
  };

  SVGRadialGradientElementBuilder.prototype.spreadMethod = function (value) {
    return this.attr('spreadMethod', value);
  };

  return SVGRadialGradientElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGRadialGradientElementBuilder = $bl4t$var$SVGRadialGradientElementBuilder;
$bl4t$exports.SVGRadialGradientElementBuilder = $bl4t$export$SVGRadialGradientElementBuilder;

var $bl4t$var$SVGScriptElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGScriptElementBuilder, _super);

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
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGScriptElementBuilder = $bl4t$var$SVGScriptElementBuilder;
$bl4t$exports.SVGScriptElementBuilder = $bl4t$export$SVGScriptElementBuilder;

var $bl4t$var$SVGStopElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGStopElementBuilder, _super);

  function SVGStopElementBuilder() {
    return _super.call(this, 'stop') || this;
  }

  SVGStopElementBuilder.prototype.offset = function (value) {
    return this.attr('offset', $nFed$export$mapAttribute(value, String));
  };

  SVGStopElementBuilder.prototype.stopColor = function (value) {
    return this.attr('stop-color', value);
  };

  SVGStopElementBuilder.prototype.stopOpacity = function (value) {
    return this.attr('stop-opacity', $nFed$export$mapAttribute(value, String));
  };

  return SVGStopElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGStopElementBuilder = $bl4t$var$SVGStopElementBuilder;
$bl4t$exports.SVGStopElementBuilder = $bl4t$export$SVGStopElementBuilder;

var $bl4t$var$SVGStyleElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGStyleElementBuilder, _super);

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
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGStyleElementBuilder = $bl4t$var$SVGStyleElementBuilder;
$bl4t$exports.SVGStyleElementBuilder = $bl4t$export$SVGStyleElementBuilder;

var $bl4t$var$SVGSVGElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGSVGElementBuilder, _super);

  function SVGSVGElementBuilder() {
    return _super.call(this, 'svg') || this;
  }

  SVGSVGElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  SVGSVGElementBuilder.prototype.preserveAspectRatio = function (value) {
    return this.attr('preserveAspectRatio', value);
  };

  SVGSVGElementBuilder.prototype.viewBox = function (value) {
    return this.attr('viewBox', $nFed$export$mapAttribute(value, $yiha$export$numbersListToString));
  };

  SVGSVGElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  SVGSVGElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGSVGElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  return SVGSVGElementBuilder;
}($bl4t$var$SVGGraphicsElementBuilder);

var $bl4t$export$SVGSVGElementBuilder = $bl4t$var$SVGSVGElementBuilder;
$bl4t$exports.SVGSVGElementBuilder = $bl4t$export$SVGSVGElementBuilder;

var $bl4t$var$SVGSwitchElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGSwitchElementBuilder, _super);

  function SVGSwitchElementBuilder() {
    return _super.call(this, 'switch') || this;
  }

  return SVGSwitchElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGSwitchElementBuilder = $bl4t$var$SVGSwitchElementBuilder;
$bl4t$exports.SVGSwitchElementBuilder = $bl4t$export$SVGSwitchElementBuilder;

var $bl4t$var$SVGSymbolElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGSymbolElementBuilder, _super);

  function SVGSymbolElementBuilder() {
    return _super.call(this, 'symbol') || this;
  }

  return SVGSymbolElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGSymbolElementBuilder = $bl4t$var$SVGSymbolElementBuilder;
$bl4t$exports.SVGSymbolElementBuilder = $bl4t$export$SVGSymbolElementBuilder;

var $bl4t$var$SVGTextElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGTextElementBuilder, _super);

  function SVGTextElementBuilder() {
    return _super.call(this, 'text') || this;
  }

  SVGTextElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGTextElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGTextElementBuilder.prototype.dx = function (value) {
    return this.attr('dx', $nFed$export$mapAttribute(value, String));
  };

  SVGTextElementBuilder.prototype.dy = function (value) {
    return this.attr('dy', $nFed$export$mapAttribute(value, String));
  };

  SVGTextElementBuilder.prototype.rotate = function (value) {
    return this.attr('rotate', $nFed$export$mapAttribute(value, $yiha$export$numbersListToString));
  };

  SVGTextElementBuilder.prototype.lengthAdjust = function (value) {
    return this.attr('lengthAdjust', value);
  };

  SVGTextElementBuilder.prototype.textLength = function (value) {
    return this.attr('textLength', $nFed$export$mapAttribute(value, String));
  };

  SVGTextElementBuilder.prototype.text = function (value) {
    this._children.push($H1te$export$text(value));

    return this;
  };

  return SVGTextElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGTextElementBuilder = $bl4t$var$SVGTextElementBuilder;
$bl4t$exports.SVGTextElementBuilder = $bl4t$export$SVGTextElementBuilder;

var $bl4t$var$SVGTextPathElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGTextPathElementBuilder, _super);

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
    return this.attr('start', $nFed$export$mapAttribute(value, String));
  };

  SVGTextPathElementBuilder.prototype.offset = function (value) {
    return this.attr('offset', $nFed$export$mapAttribute(value, String));
  };

  SVGTextPathElementBuilder.prototype.text = function (value) {
    this._children.push($H1te$export$text(value));

    return this;
  };

  SVGTextPathElementBuilder.prototype.textLength = function (value) {
    return this.attr('textLength', $nFed$export$mapAttribute(value, String));
  };

  return SVGTextPathElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGTextPathElementBuilder = $bl4t$var$SVGTextPathElementBuilder;
$bl4t$exports.SVGTextPathElementBuilder = $bl4t$export$SVGTextPathElementBuilder;

var $bl4t$var$SVGTitleElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGTitleElementBuilder, _super);

  function SVGTitleElementBuilder() {
    return _super.call(this, 'title') || this;
  }

  return SVGTitleElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGTitleElementBuilder = $bl4t$var$SVGTitleElementBuilder;
$bl4t$exports.SVGTitleElementBuilder = $bl4t$export$SVGTitleElementBuilder;

var $bl4t$var$SVGTSpanElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGTSpanElementBuilder, _super);

  function SVGTSpanElementBuilder() {
    return _super.call(this, 'tSpan') || this;
  }

  SVGTSpanElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGTSpanElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGTSpanElementBuilder.prototype.dx = function (value) {
    return this.attr('dx', $nFed$export$mapAttribute(value, String));
  };

  SVGTSpanElementBuilder.prototype.dy = function (value) {
    return this.attr('dy', $nFed$export$mapAttribute(value, String));
  };

  SVGTSpanElementBuilder.prototype.rotate = function (value) {
    return this.attr('rotate', $nFed$export$mapAttribute(value, $yiha$export$numbersListToString));
  };

  SVGTSpanElementBuilder.prototype.lengthAdjust = function (value) {
    return this.attr('lengthAdjust', value);
  };

  SVGTSpanElementBuilder.prototype.textLength = function (value) {
    return this.attr('textLength', $nFed$export$mapAttribute(value, String));
  };

  SVGTSpanElementBuilder.prototype.text = function (value) {
    this._children.push($H1te$export$text(value));

    return this;
  };

  return SVGTSpanElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGTSpanElementBuilder = $bl4t$var$SVGTSpanElementBuilder;
$bl4t$exports.SVGTSpanElementBuilder = $bl4t$export$SVGTSpanElementBuilder;

var $bl4t$var$SVGUseElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGUseElementBuilder, _super);

  function SVGUseElementBuilder() {
    return _super.call(this, 'use') || this;
  }

  SVGUseElementBuilder.prototype.href = function (value) {
    return this.attr('href', value);
  };

  SVGUseElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGUseElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGUseElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  SVGUseElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return SVGUseElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGUseElementBuilder = $bl4t$var$SVGUseElementBuilder;
$bl4t$exports.SVGUseElementBuilder = $bl4t$export$SVGUseElementBuilder;

var $bl4t$var$SVGViewElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGViewElementBuilder, _super);

  function SVGViewElementBuilder() {
    return _super.call(this, 'view') || this;
  }

  return SVGViewElementBuilder;
}($bl4t$var$SVGElementBuilder);

var $bl4t$export$SVGViewElementBuilder = $bl4t$var$SVGViewElementBuilder;
$bl4t$exports.SVGViewElementBuilder = $bl4t$export$SVGViewElementBuilder;

var $bl4t$var$SVGRectElementBuilder =
/** @class */
function (_super) {
  $bl4t$var$__extends(SVGRectElementBuilder, _super);

  function SVGRectElementBuilder() {
    return _super.call(this, 'rect') || this;
  }

  SVGRectElementBuilder.prototype.x = function (value) {
    return this.attr('x', $nFed$export$mapAttribute(value, String));
  };

  SVGRectElementBuilder.prototype.y = function (value) {
    return this.attr('y', $nFed$export$mapAttribute(value, String));
  };

  SVGRectElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  SVGRectElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  SVGRectElementBuilder.prototype.rx = function (value) {
    return this.attr('rx', $nFed$export$mapAttribute(value, String));
  };

  SVGRectElementBuilder.prototype.ry = function (value) {
    return this.attr('ry', $nFed$export$mapAttribute(value, String));
  };

  SVGRectElementBuilder.prototype.pathLength = function (value) {
    return this.attr('pathLength', $nFed$export$mapAttribute(value, String));
  };

  return SVGRectElementBuilder;
}($bl4t$var$SVGElementBuilder);

$bl4t$export$SVGRectElementBuilder = $bl4t$var$SVGRectElementBuilder;
$bl4t$exports.SVGRectElementBuilder = $bl4t$export$SVGRectElementBuilder; //# sourceMappingURL=svg_builder.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/html_builder.js
var $eyJE$exports = {};

var $eyJE$var$__extends = $eyJE$exports && $eyJE$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($eyJE$exports, "__esModule", {
  value: true
});
var $eyJE$export$UntilHTMLBuilder = ($eyJE$export$SimpleComponentHTMLBuilder = ($eyJE$export$PortalBuilder = ($eyJE$export$MapStateHTMLBuilder = ($eyJE$export$MapQueryHTMLBuilder = ($eyJE$export$MapActionHTMLBuilder = ($eyJE$export$FragmentHTMLBuilder = ($eyJE$export$ComponentHTMLBuilder = ($eyJE$export$HTMLVideoElementBuilder = ($eyJE$export$HTMLTrackElementBuilder = ($eyJE$export$HTMLTimeElementBuilder = ($eyJE$export$HTMLTextAreaElementBuilder = ($eyJE$export$HTMLTableHeaderCellElementBuilder = ($eyJE$export$HTMLTableDataCellElementBuilder = ($eyJE$export$HTMLTableColElementBuilder = ($eyJE$export$HTMLStyleElementBuilder = ($eyJE$export$HTMLSourceElementBuilder = ($eyJE$export$HTMLSlotElementBuilder = ($eyJE$export$HTMLSelectElementBuilder = ($eyJE$export$HTMLScriptElementBuilder = ($eyJE$export$HTMLQuoteElementBuilder = ($eyJE$export$HTMLProgressElementBuilder = ($eyJE$export$HTMLPictureElementBuilder = ($eyJE$export$HTMLParamElementBuilder = ($eyJE$export$HTMLOutputElementBuilder = ($eyJE$export$HTMLOptionElementBuilder = ($eyJE$export$HTMLOptGroupElementBuilder = ($eyJE$export$HTMLOListElementBuilder = ($eyJE$export$HTMLObjectElementBuilder = ($eyJE$export$HTMLModElementBuilder = ($eyJE$export$HTMLMeterElementBuilder = ($eyJE$export$HTMLMetaElementBuilder = ($eyJE$export$HTMLMapElementBuilder = ($eyJE$export$HTMLLinkElementBuilder = ($eyJE$export$HTMLLIElementBuilder = ($eyJE$export$HTMLLabelElementBuilder = ($eyJE$export$HTMLInputUrlElementBuilder = ($eyJE$export$InputTextElementBuilder = ($eyJE$export$HTMLInputTelElementBuilder = ($eyJE$export$HTMLInputSubmitElementBuilder = ($eyJE$export$HTMLInputSearchElementBuilder = ($eyJE$export$HTMLInputPasswordElementBuilder = ($eyJE$export$HTMLInputNumberElementBuilder = ($eyJE$export$HTMLInputImageElementBuilder = ($eyJE$export$HTMLInputFileElementBuilder = ($eyJE$export$HTMLInputEmailElementBuilder = ($eyJE$export$HTMLInputDateElementBuilder = ($eyJE$export$HTMLInputCheckedElementBuilder = ($eyJE$export$HTMLInputElementBuilder = ($eyJE$export$HTMLImageElementBuilder = ($eyJE$export$HTMLIFrameElementBuilder = ($eyJE$export$HTMLHtmlElementBuilder = ($eyJE$export$HTMLFormElementBuilder = ($eyJE$export$HTMLFieldSetElementBuilder = ($eyJE$export$HTMLEmbedElementBuilder = ($eyJE$export$HTMLDialogElementBuilder = ($eyJE$export$HTMLDetailsElementBuilder = ($eyJE$export$HTMLDataElementBuilder = ($eyJE$export$HTMLCanvasElementBuilder = ($eyJE$export$HTMLButtonElementBuilder = ($eyJE$export$HTMLBaseElementBuilder = ($eyJE$export$HTMLAudioElementBuilder = ($eyJE$export$HTMLAreaElementBuilder = ($eyJE$export$HTMLAnchorElementBuilder = ($eyJE$export$HTMLMediaElementBuilder = ($eyJE$export$HTMLElementBuilder = ($eyJE$export$El = ($eyJE$export$BaseHTMLBuilder = void 0, $eyJE$exports.BaseHTMLBuilder = $eyJE$export$BaseHTMLBuilder), $eyJE$exports.El = $eyJE$export$El), $eyJE$exports.HTMLElementBuilder = $eyJE$export$HTMLElementBuilder), $eyJE$exports.HTMLMediaElementBuilder = $eyJE$export$HTMLMediaElementBuilder), $eyJE$exports.HTMLAnchorElementBuilder = $eyJE$export$HTMLAnchorElementBuilder), $eyJE$exports.HTMLAreaElementBuilder = $eyJE$export$HTMLAreaElementBuilder), $eyJE$exports.HTMLAudioElementBuilder = $eyJE$export$HTMLAudioElementBuilder), $eyJE$exports.HTMLBaseElementBuilder = $eyJE$export$HTMLBaseElementBuilder), $eyJE$exports.HTMLButtonElementBuilder = $eyJE$export$HTMLButtonElementBuilder), $eyJE$exports.HTMLCanvasElementBuilder = $eyJE$export$HTMLCanvasElementBuilder), $eyJE$exports.HTMLDataElementBuilder = $eyJE$export$HTMLDataElementBuilder), $eyJE$exports.HTMLDetailsElementBuilder = $eyJE$export$HTMLDetailsElementBuilder), $eyJE$exports.HTMLDialogElementBuilder = $eyJE$export$HTMLDialogElementBuilder), $eyJE$exports.HTMLEmbedElementBuilder = $eyJE$export$HTMLEmbedElementBuilder), $eyJE$exports.HTMLFieldSetElementBuilder = $eyJE$export$HTMLFieldSetElementBuilder), $eyJE$exports.HTMLFormElementBuilder = $eyJE$export$HTMLFormElementBuilder), $eyJE$exports.HTMLHtmlElementBuilder = $eyJE$export$HTMLHtmlElementBuilder), $eyJE$exports.HTMLIFrameElementBuilder = $eyJE$export$HTMLIFrameElementBuilder), $eyJE$exports.HTMLImageElementBuilder = $eyJE$export$HTMLImageElementBuilder), $eyJE$exports.HTMLInputElementBuilder = $eyJE$export$HTMLInputElementBuilder), $eyJE$exports.HTMLInputCheckedElementBuilder = $eyJE$export$HTMLInputCheckedElementBuilder), $eyJE$exports.HTMLInputDateElementBuilder = $eyJE$export$HTMLInputDateElementBuilder), $eyJE$exports.HTMLInputEmailElementBuilder = $eyJE$export$HTMLInputEmailElementBuilder), $eyJE$exports.HTMLInputFileElementBuilder = $eyJE$export$HTMLInputFileElementBuilder), $eyJE$exports.HTMLInputImageElementBuilder = $eyJE$export$HTMLInputImageElementBuilder), $eyJE$exports.HTMLInputNumberElementBuilder = $eyJE$export$HTMLInputNumberElementBuilder), $eyJE$exports.HTMLInputPasswordElementBuilder = $eyJE$export$HTMLInputPasswordElementBuilder), $eyJE$exports.HTMLInputSearchElementBuilder = $eyJE$export$HTMLInputSearchElementBuilder), $eyJE$exports.HTMLInputSubmitElementBuilder = $eyJE$export$HTMLInputSubmitElementBuilder), $eyJE$exports.HTMLInputTelElementBuilder = $eyJE$export$HTMLInputTelElementBuilder), $eyJE$exports.InputTextElementBuilder = $eyJE$export$InputTextElementBuilder), $eyJE$exports.HTMLInputUrlElementBuilder = $eyJE$export$HTMLInputUrlElementBuilder), $eyJE$exports.HTMLLabelElementBuilder = $eyJE$export$HTMLLabelElementBuilder), $eyJE$exports.HTMLLIElementBuilder = $eyJE$export$HTMLLIElementBuilder), $eyJE$exports.HTMLLinkElementBuilder = $eyJE$export$HTMLLinkElementBuilder), $eyJE$exports.HTMLMapElementBuilder = $eyJE$export$HTMLMapElementBuilder), $eyJE$exports.HTMLMetaElementBuilder = $eyJE$export$HTMLMetaElementBuilder), $eyJE$exports.HTMLMeterElementBuilder = $eyJE$export$HTMLMeterElementBuilder), $eyJE$exports.HTMLModElementBuilder = $eyJE$export$HTMLModElementBuilder), $eyJE$exports.HTMLObjectElementBuilder = $eyJE$export$HTMLObjectElementBuilder), $eyJE$exports.HTMLOListElementBuilder = $eyJE$export$HTMLOListElementBuilder), $eyJE$exports.HTMLOptGroupElementBuilder = $eyJE$export$HTMLOptGroupElementBuilder), $eyJE$exports.HTMLOptionElementBuilder = $eyJE$export$HTMLOptionElementBuilder), $eyJE$exports.HTMLOutputElementBuilder = $eyJE$export$HTMLOutputElementBuilder), $eyJE$exports.HTMLParamElementBuilder = $eyJE$export$HTMLParamElementBuilder), $eyJE$exports.HTMLPictureElementBuilder = $eyJE$export$HTMLPictureElementBuilder), $eyJE$exports.HTMLProgressElementBuilder = $eyJE$export$HTMLProgressElementBuilder), $eyJE$exports.HTMLQuoteElementBuilder = $eyJE$export$HTMLQuoteElementBuilder), $eyJE$exports.HTMLScriptElementBuilder = $eyJE$export$HTMLScriptElementBuilder), $eyJE$exports.HTMLSelectElementBuilder = $eyJE$export$HTMLSelectElementBuilder), $eyJE$exports.HTMLSlotElementBuilder = $eyJE$export$HTMLSlotElementBuilder), $eyJE$exports.HTMLSourceElementBuilder = $eyJE$export$HTMLSourceElementBuilder), $eyJE$exports.HTMLStyleElementBuilder = $eyJE$export$HTMLStyleElementBuilder), $eyJE$exports.HTMLTableColElementBuilder = $eyJE$export$HTMLTableColElementBuilder), $eyJE$exports.HTMLTableDataCellElementBuilder = $eyJE$export$HTMLTableDataCellElementBuilder), $eyJE$exports.HTMLTableHeaderCellElementBuilder = $eyJE$export$HTMLTableHeaderCellElementBuilder), $eyJE$exports.HTMLTextAreaElementBuilder = $eyJE$export$HTMLTextAreaElementBuilder), $eyJE$exports.HTMLTimeElementBuilder = $eyJE$export$HTMLTimeElementBuilder), $eyJE$exports.HTMLTrackElementBuilder = $eyJE$export$HTMLTrackElementBuilder), $eyJE$exports.HTMLVideoElementBuilder = $eyJE$export$HTMLVideoElementBuilder), $eyJE$exports.ComponentHTMLBuilder = $eyJE$export$ComponentHTMLBuilder), $eyJE$exports.FragmentHTMLBuilder = $eyJE$export$FragmentHTMLBuilder), $eyJE$exports.MapActionHTMLBuilder = $eyJE$export$MapActionHTMLBuilder), $eyJE$exports.MapQueryHTMLBuilder = $eyJE$export$MapQueryHTMLBuilder), $eyJE$exports.MapStateHTMLBuilder = $eyJE$export$MapStateHTMLBuilder), $eyJE$exports.PortalBuilder = $eyJE$export$PortalBuilder), $eyJE$exports.SimpleComponentHTMLBuilder = $eyJE$export$SimpleComponentHTMLBuilder);
$eyJE$exports.UntilHTMLBuilder = $eyJE$export$UntilHTMLBuilder;

var $eyJE$var$BaseHTMLBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(BaseHTMLBuilder, _super);

  function BaseHTMLBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BaseHTMLBuilder.prototype.El = function (init) {
    if (init === void 0) {
      init = function () {};
    }

    var builder = $eyJE$var$El(name);
    init(builder);

    this._children.push(builder.build());

    return this;
  };

  BaseHTMLBuilder.prototype.text = function (value) {
    this._children.push($H1te$export$text(value));

    return this;
  }; // transform


  BaseHTMLBuilder.prototype.Adapter = function (props) {
    return this.Append(new $kWOh$export$AdapterTemplate(props.bootstrapState, props.mergeStates, props.propagate || function () {
      return undefined;
    }, props.child));
  };

  BaseHTMLBuilder.prototype.Component = function (reducer, init) {
    var builder = new $eyJE$var$ComponentHTMLBuilder(reducer);
    init(builder);
    return this.Append(builder.build());
  };

  BaseHTMLBuilder.prototype.LocalAdapter = function (props) {
    return this.Append(new $kWOh$export$AdapterTemplate(function (state) {
      return state;
    }, function (_a) {
      var outerState = _a.outerState;
      return outerState;
    }, props.propagate || function () {
      return undefined;
    }, props.child));
  };

  BaseHTMLBuilder.prototype.HoldState = function (holdf) {
    return this.Append(new $fYSr$export$HoldStateTemplate(holdf, new $eyJE$var$FragmentHTMLBuilder()));
  };

  BaseHTMLBuilder.prototype.MapState = function (map, init) {
    var builder = new $eyJE$var$MapStateHTMLBuilder(map);
    init(builder);
    return this.Append(builder.build());
  };

  BaseHTMLBuilder.prototype.MapField = function (field, init) {
    return this.MapState(function (v) {
      return v[field];
    }, init);
  };

  BaseHTMLBuilder.prototype.MapStateAndKeep = function (map, init) {
    var builder = new $eyJE$var$MapStateHTMLBuilder(function (state) {
      var inner = $nFed$export$resolveAttribute(map)(state);

      if (inner !== undefined) {
        return [inner, state];
      } else {
        return undefined;
      }
    });
    init(builder);
    return this.Append(builder.build());
  };

  BaseHTMLBuilder.prototype.MapAction = function (map, init) {
    var builder = new $eyJE$var$MapActionHTMLBuilder(map);
    init(builder);
    return this.Append(builder.build());
  };

  BaseHTMLBuilder.prototype.MapQuery = function (map, init) {
    var builder = new $eyJE$var$MapQueryHTMLBuilder(map);
    init(builder);
    return this.Append(builder.build());
  };

  BaseHTMLBuilder.prototype.MatchBool = function (props) {
    return this.Append(new $ZVXL$export$MatchBoolTemplate(props.condition, props.true, props.false));
  };

  BaseHTMLBuilder.prototype.Lazy = function (lazyf) {
    return this.Append(new $hzRP$export$LazyTemplate(lazyf));
  };

  BaseHTMLBuilder.prototype.ForEach = function (init) {
    return this.Until(function (_a) {
      var state = _a.state,
          index = _a.index;
      return state[index];
    }, init);
  };

  BaseHTMLBuilder.prototype.Fragment = function (init) {
    var builder = new $eyJE$var$FragmentHTMLBuilder();
    init(builder);
    return this.Append(builder.build());
  };

  BaseHTMLBuilder.prototype.Iterate = function (map, init) {
    return this.MapState(function (outer) {
      var items = $nFed$export$resolveAttribute(map)(outer);
      return items !== undefined ? [items, outer] : undefined;
    }, function ($) {
      $.Until(function (_a) {
        var _b = _a.state,
            items = _b[0],
            state = _b[1],
            index = _a.index;
        return items[index] && [items[index], state, index];
      }, init);
    });
  };

  BaseHTMLBuilder.prototype.Portal = function (appendChild, init) {
    var builder = new $eyJE$var$PortalBuilder(appendChild);
    init(builder);
    return this.Append(builder.build());
  };

  BaseHTMLBuilder.prototype.PortalWithSelector = function (selector, init) {
    return this.Portal(function (doc) {
      var el = doc.querySelector(selector);

      if (!el) {
        throw new Error("selector doesn't match any element: \"" + selector + "\"");
      }

      return el;
    }, init);
  };

  BaseHTMLBuilder.prototype.HeadPortal = function (init) {
    return this.Portal(function (doc) {
      return doc.head;
    }, init);
  };

  BaseHTMLBuilder.prototype.BodyPortal = function (init) {
    return this.Portal(function (doc) {
      return doc.body;
    }, init);
  }; //   init: (builder: SimpleComponentBuilder<State, Query>) => void
  // ) {
  //   const builder = new SimpleComponentBuilder<State, Query>()
  //   init(builder)
  //   return this.append(builder.build())
  // }


  BaseHTMLBuilder.prototype.Unless = function (condition, init) {
    return this.When(function (s) {
      return !condition(s);
    }, init);
  };

  BaseHTMLBuilder.prototype.Until = function (next, init) {
    var builder = new $eyJE$var$UntilHTMLBuilder(next);
    init(builder);
    return this.Append(builder.build());
  };

  BaseHTMLBuilder.prototype.When = function (condition, init) {
    var builder = new $eyJE$var$MapStateHTMLBuilder(function (s) {
      if (condition(s)) {
        return s;
      } else {
        return undefined;
      }
    });
    init(builder);
    return this.Append(builder.build());
  }; // derived children


  BaseHTMLBuilder.prototype.A = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLAnchorElementBuilder('a'), init, this);
  };

  BaseHTMLBuilder.prototype.ABBR = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('abbr'), init, this);
  };

  BaseHTMLBuilder.prototype.ADDRESS = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('address'), init, this);
  };

  BaseHTMLBuilder.prototype.AREA = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLAreaElementBuilder('area'), init, this);
  };

  BaseHTMLBuilder.prototype.ARTICLE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('article'), init, this);
  };

  BaseHTMLBuilder.prototype.ASIDE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('aside'), init, this);
  };

  BaseHTMLBuilder.prototype.AUDIO = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLAudioElementBuilder('audio'), init, this);
  };

  BaseHTMLBuilder.prototype.B = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('b'), init, this);
  };

  BaseHTMLBuilder.prototype.BASE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLBaseElementBuilder('base'), init, this);
  };

  BaseHTMLBuilder.prototype.BDI = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('bdi'), init, this);
  };

  BaseHTMLBuilder.prototype.BDO = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('bdo'), init, this);
  };

  BaseHTMLBuilder.prototype.BLOCKQUOTE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLQuoteElementBuilder('blockquote'), init, this);
  };

  BaseHTMLBuilder.prototype.BODY = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('body'), init, this);
  };

  BaseHTMLBuilder.prototype.BR = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('br'), init, this);
  };

  BaseHTMLBuilder.prototype.BUTTON = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLButtonElementBuilder('button'), init, this);
  };

  BaseHTMLBuilder.prototype.CANVAS = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLCanvasElementBuilder('canvas'), init, this);
  };

  BaseHTMLBuilder.prototype.CAPTION = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('caption'), init, this);
  };

  BaseHTMLBuilder.prototype.CITE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLQuoteElementBuilder('cite'), init, this);
  };

  BaseHTMLBuilder.prototype.CODE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('code'), init, this);
  };

  BaseHTMLBuilder.prototype.COL = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLTableColElementBuilder('col'), init, this);
  };

  BaseHTMLBuilder.prototype.COLGROUP = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLTableColElementBuilder('colgroup'), init, this);
  };

  BaseHTMLBuilder.prototype.DATA = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLDataElementBuilder('data'), init, this);
  };

  BaseHTMLBuilder.prototype.DATALIST = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('datalist'), init, this);
  };

  BaseHTMLBuilder.prototype.DD = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('dd'), init, this);
  };

  BaseHTMLBuilder.prototype.DEL = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLModElementBuilder('del'), init, this);
  };

  BaseHTMLBuilder.prototype.DETAILS = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLDetailsElementBuilder('details'), init, this);
  };

  BaseHTMLBuilder.prototype.DFN = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('dfn'), init, this);
  };

  BaseHTMLBuilder.prototype.DIALOG = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLDialogElementBuilder('dialog'), init, this);
  };

  BaseHTMLBuilder.prototype.DIV = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('div'), init, this);
  };

  BaseHTMLBuilder.prototype.DL = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('dl'), init, this);
  };

  BaseHTMLBuilder.prototype.DT = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('dt'), init, this);
  };

  BaseHTMLBuilder.prototype.EM = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('em'), init, this);
  };

  BaseHTMLBuilder.prototype.EMBED = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLEmbedElementBuilder('embed'), init, this);
  };

  BaseHTMLBuilder.prototype.FIELDSET = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLFieldSetElementBuilder('fieldset'), init, this);
  };

  BaseHTMLBuilder.prototype.FIG_CAPTION = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('figcaption'), init, this);
  };

  BaseHTMLBuilder.prototype.FIGURE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('figure'), init, this);
  };

  BaseHTMLBuilder.prototype.FOOTER = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('footer'), init, this);
  };

  BaseHTMLBuilder.prototype.FORM = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLFormElementBuilder('form'), init, this);
  };

  BaseHTMLBuilder.prototype.H1 = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('h1'), init, this);
  };

  BaseHTMLBuilder.prototype.H2 = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('h2'), init, this);
  };

  BaseHTMLBuilder.prototype.H3 = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('h3'), init, this);
  };

  BaseHTMLBuilder.prototype.H4 = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('h4'), init, this);
  };

  BaseHTMLBuilder.prototype.H5 = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('h5'), init, this);
  };

  BaseHTMLBuilder.prototype.H6 = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('h6'), init, this);
  };

  BaseHTMLBuilder.prototype.HEAD = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('head'), init, this);
  };

  BaseHTMLBuilder.prototype.HEADER = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('header'), init, this);
  };

  BaseHTMLBuilder.prototype.HGROUP = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('hgroup'), init, this);
  };

  BaseHTMLBuilder.prototype.HR = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('hr'), init, this);
  };

  BaseHTMLBuilder.prototype.HTML = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLHtmlElementBuilder('html'), init, this);
  };

  BaseHTMLBuilder.prototype.I = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('i'), init, this);
  };

  BaseHTMLBuilder.prototype.IFRAME = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLIFrameElementBuilder('iframe'), init, this);
  };

  BaseHTMLBuilder.prototype.IMG = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLImageElementBuilder('img'), init, this);
  };

  BaseHTMLBuilder.prototype.INPUT = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLInputElementBuilder('input'), init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_BUTTON = function (init) {
    var builder = new $eyJE$var$HTMLInputElementBuilder('input');
    builder.type('button');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_CHECKBOX = function (init) {
    var builder = new $eyJE$var$HTMLInputCheckedElementBuilder('input');
    builder.type('checkbox');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_COLOR = function (init) {
    var builder = new $eyJE$var$HTMLInputElementBuilder('input');
    builder.type('color');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_DATE = function (init) {
    var builder = new $eyJE$var$HTMLInputDateElementBuilder('input');
    builder.type('date');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_DATETIME_LOCAL = function (init) {
    var builder = new $eyJE$var$HTMLInputDateElementBuilder('input');
    builder.type('datetime-local');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_EMAIL = function (init) {
    var builder = new $eyJE$var$HTMLInputEmailElementBuilder('input');
    builder.type('email');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_FILE = function (init) {
    var builder = new $eyJE$var$HTMLInputFileElementBuilder('input');
    builder.type('file');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_HIDDEN = function (init) {
    var builder = new $eyJE$var$HTMLInputElementBuilder('input');
    builder.type('hidden');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_IMAGE = function (init) {
    var builder = new $eyJE$var$HTMLInputImageElementBuilder('input');
    builder.type('image');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_MONTH = function (init) {
    var builder = new $eyJE$var$HTMLInputDateElementBuilder('input');
    builder.type('month');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_NUMBER = function (init) {
    var builder = new $eyJE$var$HTMLInputNumberElementBuilder('input');
    builder.type('number');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_PASSWORD = function (init) {
    var builder = new $eyJE$var$HTMLInputPasswordElementBuilder('input');
    builder.type('password');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_RADIO = function (init) {
    var builder = new $eyJE$var$HTMLInputCheckedElementBuilder('input');
    builder.type('radio');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_RANGE = function (init) {
    var builder = new $eyJE$var$HTMLInputNumberElementBuilder('input');
    builder.type('range');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_RESET = function (init) {
    var builder = new $eyJE$var$HTMLInputElementBuilder('input');
    builder.type('reset');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_SEARCH = function (init) {
    var builder = new $eyJE$var$HTMLInputSearchElementBuilder('input');
    builder.type('search');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_SUBMIT = function (init) {
    var builder = new $eyJE$var$HTMLInputSubmitElementBuilder('input');
    builder.type('submit');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_TEL = function (init) {
    var builder = new $eyJE$var$HTMLInputTelElementBuilder('input');
    builder.type('tel');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_TEXT = function (init) {
    var builder = new $eyJE$var$InputTextElementBuilder('input');
    builder.type('text');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_TIME = function (init) {
    var builder = new $eyJE$var$HTMLInputDateElementBuilder('input');
    builder.type('time');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_URL = function (init) {
    var builder = new $eyJE$var$HTMLInputUrlElementBuilder('input');
    builder.type('url');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INPUT_WEEK = function (init) {
    var builder = new $eyJE$var$HTMLInputDateElementBuilder('input');
    builder.type('week');
    return $eyJE$var$initBuilder(builder, init, this);
  };

  BaseHTMLBuilder.prototype.INS = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLModElementBuilder('ins'), init, this);
  };

  BaseHTMLBuilder.prototype.KBD = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('kbd'), init, this);
  };

  BaseHTMLBuilder.prototype.LABEL = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLLabelElementBuilder('label'), init, this);
  };

  BaseHTMLBuilder.prototype.LEGEND = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('legend'), init, this);
  };

  BaseHTMLBuilder.prototype.LI = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLLIElementBuilder('li'), init, this);
  };

  BaseHTMLBuilder.prototype.LINK = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLLinkElementBuilder('link'), init, this);
  };

  BaseHTMLBuilder.prototype.MAIN = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('main'), init, this);
  };

  BaseHTMLBuilder.prototype.MAP = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLMapElementBuilder('map'), init, this);
  };

  BaseHTMLBuilder.prototype.MARK = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('mark'), init, this);
  };

  BaseHTMLBuilder.prototype.META = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLMetaElementBuilder('meta'), init, this);
  };

  BaseHTMLBuilder.prototype.METER = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLMeterElementBuilder('meter'), init, this);
  };

  BaseHTMLBuilder.prototype.NAV = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('nav'), init, this);
  };

  BaseHTMLBuilder.prototype.NOSCRIPT = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('noscript'), init, this);
  };

  BaseHTMLBuilder.prototype.OBJECT = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLObjectElementBuilder('object'), init, this);
  };

  BaseHTMLBuilder.prototype.OL = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLOListElementBuilder('ol'), init, this);
  };

  BaseHTMLBuilder.prototype.OPTGROUP = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLOptGroupElementBuilder('optgroup'), init, this);
  };

  BaseHTMLBuilder.prototype.OPTION = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLOptionElementBuilder('option'), init, this);
  };

  BaseHTMLBuilder.prototype.OUTPUT = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLOutputElementBuilder('output'), init, this);
  };

  BaseHTMLBuilder.prototype.P = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('p'), init, this);
  };

  BaseHTMLBuilder.prototype.PARAM = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLParamElementBuilder('param'), init, this);
  };

  BaseHTMLBuilder.prototype.PICTURE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLPictureElementBuilder('picture'), init, this);
  };

  BaseHTMLBuilder.prototype.PRE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('pre'), init, this);
  };

  BaseHTMLBuilder.prototype.PROGRESS = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLProgressElementBuilder('progress'), init, this);
  };

  BaseHTMLBuilder.prototype.Q = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLQuoteElementBuilder('q'), init, this);
  };

  BaseHTMLBuilder.prototype.RP = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('rp'), init, this);
  };

  BaseHTMLBuilder.prototype.RT = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('rt'), init, this);
  };

  BaseHTMLBuilder.prototype.RUBY = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('ruby'), init, this);
  };

  BaseHTMLBuilder.prototype.S = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('s'), init, this);
  };

  BaseHTMLBuilder.prototype.SAMP = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('samp'), init, this);
  };

  BaseHTMLBuilder.prototype.SCRIPT = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLScriptElementBuilder('script'), init, this);
  };

  BaseHTMLBuilder.prototype.SECTION = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('section'), init, this);
  };

  BaseHTMLBuilder.prototype.SELECT = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLSelectElementBuilder('select'), init, this);
  };

  BaseHTMLBuilder.prototype.SLOT = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLSlotElementBuilder('slot'), init, this);
  };

  BaseHTMLBuilder.prototype.SMALL = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('small'), init, this);
  };

  BaseHTMLBuilder.prototype.SOURCE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLSourceElementBuilder('source'), init, this);
  };

  BaseHTMLBuilder.prototype.SPAN = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('span'), init, this);
  };

  BaseHTMLBuilder.prototype.STRONG = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('strong'), init, this);
  };

  BaseHTMLBuilder.prototype.STYLE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLStyleElementBuilder('style'), init, this);
  };

  BaseHTMLBuilder.prototype.SUB = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('sub'), init, this);
  };

  BaseHTMLBuilder.prototype.SUMMARY = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('summary'), init, this);
  };

  BaseHTMLBuilder.prototype.SUP = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('sup'), init, this);
  };

  BaseHTMLBuilder.prototype.SVG = function (init) {
    return $eyJE$var$initBuilder(new $bl4t$export$SVGSVGElementBuilder(), init, this);
  };

  BaseHTMLBuilder.prototype.TABLE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('table'), init, this);
  };

  BaseHTMLBuilder.prototype.TBODY = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('tbody'), init, this);
  };

  BaseHTMLBuilder.prototype.TD = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLTableDataCellElementBuilder('td'), init, this);
  };

  BaseHTMLBuilder.prototype.TEMPLATE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('template'), init, this);
  };

  BaseHTMLBuilder.prototype.TEXTAREA = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLTextAreaElementBuilder('textarea'), init, this);
  };

  BaseHTMLBuilder.prototype.TFOOT = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('tfoot'), init, this);
  };

  BaseHTMLBuilder.prototype.TH = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLTableHeaderCellElementBuilder('th'), init, this);
  };

  BaseHTMLBuilder.prototype.THEAD = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('thead'), init, this);
  };

  BaseHTMLBuilder.prototype.TIME = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLTimeElementBuilder('time'), init, this);
  };

  BaseHTMLBuilder.prototype.TITLE = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('title'), init, this);
  };

  BaseHTMLBuilder.prototype.TR = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('tr'), init, this);
  };

  BaseHTMLBuilder.prototype.TRACK = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLTrackElementBuilder('track'), init, this);
  };

  BaseHTMLBuilder.prototype.U = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('u'), init, this);
  };

  BaseHTMLBuilder.prototype.UL = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('ul'), init, this);
  };

  BaseHTMLBuilder.prototype.VAR = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('var'), init, this);
  };

  BaseHTMLBuilder.prototype.VIDEO = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLVideoElementBuilder('video'), init, this);
  };

  BaseHTMLBuilder.prototype.WBR = function (init) {
    return $eyJE$var$initBuilder(new $eyJE$var$HTMLElementBuilder('wbr'), init, this);
  };

  return BaseHTMLBuilder;
}($yiha$export$DOMBuilder);

var $eyJE$export$BaseHTMLBuilder = $eyJE$var$BaseHTMLBuilder;
$eyJE$exports.BaseHTMLBuilder = $eyJE$export$BaseHTMLBuilder; // dom generic

function $eyJE$var$El(tagName) {
  if (tagName === void 0) {
    tagName = 'div';
  }

  return new $eyJE$var$HTMLElementBuilder(tagName);
}

var $eyJE$export$El = $eyJE$var$El;
$eyJE$exports.El = $eyJE$export$El;

var $eyJE$var$HTMLElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLElementBuilder, _super);

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

    return new $X9Ob$export$DOMElement($lbKn$export$makeCreateElement(this.tagName), $yiha$export$extractLiterals(this._attributes), $yiha$export$extractDerived(this._attributes), $yiha$export$extractLiterals(this._styles), $yiha$export$extractDerived(this._styles), $g3Xg$export$keys(this._handlers).map(function (name) {
      return {
        name: name,
        callback: _this._handlers[name]
      };
    }), (_a = this._lifecycle) !== null && _a !== void 0 ? _a : $uV5V$export$makeEmptyLifecycle, (_b = this._respond) !== null && _b !== void 0 ? _b : function (query, el, ctx) {}, // TODO better typing needed
    this._children);
  }; // attributes, styles and handlers


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
  }; // attribute shortcuts


  HTMLElementBuilder.prototype.accessKey = function (value) {
    return this.attr('accesskey', value);
  };

  HTMLElementBuilder.prototype.aria = function (name, value) {
    return this.attr("aria-" + name, value);
  };

  HTMLElementBuilder.prototype.class = function (value) {
    return this.attr('class', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  HTMLElementBuilder.prototype.contentEditable = function (value) {
    return this.attr('contenteditable', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.data = function (name, value) {
    return this.attr("data-" + name, value);
  };

  HTMLElementBuilder.prototype.dir = function (value) {
    return this.attr('role', value);
  };

  HTMLElementBuilder.prototype.draggable = function (value) {
    return this.attr('draggable', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.hidden = function (value) {
    return this.attr('hidden', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('hidden')));
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
    return this.attr('part', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  HTMLElementBuilder.prototype.role = function (value) {
    return this.attr('role', value);
  };

  HTMLElementBuilder.prototype.slot = function (value) {
    return this.attr('slot', value);
  };

  HTMLElementBuilder.prototype.spellCheck = function (value) {
    return this.attr('spellcheck', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.styles = function (value) {
    return this.attr('style', $nFed$export$mapAttribute(value, $yiha$export$stylesToString));
  };

  HTMLElementBuilder.prototype.tabIndex = function (value) {
    return this.attr('tabindex', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.title = function (value) {
    return this.attr('title', value);
  }; // aria


  HTMLElementBuilder.prototype.ariaActiveDescendant = function (value) {
    return this.attr('aria-activedescendant', value);
  };

  HTMLElementBuilder.prototype.ariaAtomic = function (value) {
    return this.attr('aria-atomic', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.ariaAutocomplete = function (value) {
    return this.attr('aria-autocomplete', value);
  };

  HTMLElementBuilder.prototype.ariaBusy = function (value) {
    return this.attr('aria-busy', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.ariaChecked = function (value) {
    return this.attr('aria-checked', $nFed$export$mapAttribute(value, function (v) {
      return v === true ? 'true' : v === false ? 'false' : v;
    }));
  };

  HTMLElementBuilder.prototype.ariaColCount = function (value) {
    return this.attr('aria-colcount', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaColIndex = function (value) {
    return this.attr('aria-colindex', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaColSpan = function (value) {
    return this.attr('aria-colspan', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaControls = function (value) {
    return this.attr('aria-controls', value);
  };

  HTMLElementBuilder.prototype.ariaCurrent = function (value) {
    return this.attr('aria-current', $nFed$export$mapAttribute(value, function (v) {
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
    return this.attr('aria-disabled', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.ariaDropEffect = function (value) {
    return this.attr('aria-dropeffect', value);
  };

  HTMLElementBuilder.prototype.ariaErrorMessage = function (value) {
    return this.attr('aria-errormessage', $nFed$export$mapAttribute(value, function (v) {
      return v === true ? 'true' : v === false ? 'false' : v;
    }));
  };

  HTMLElementBuilder.prototype.ariaExpanded = function (value) {
    return this.attr('aria-expanded', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.ariaFlowTo = function (value) {
    return this.attr('aria-flowto', value);
  };

  HTMLElementBuilder.prototype.ariaGrabbed = function (value) {
    return this.attr('aria-grabbed', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.ariaHasPopup = function (value) {
    return this.attr('aria-haspopup', $nFed$export$mapAttribute(value, function (v) {
      return v === true ? 'true' : v === false ? 'false' : v;
    }));
  };

  HTMLElementBuilder.prototype.ariaHidden = function (value) {
    return this.attr('aria-hidden', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
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
    return this.attr('aria-level', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaLive = function (value) {
    return this.attr('aria-live', value);
  };

  HTMLElementBuilder.prototype.ariaModal = function (value) {
    return this.attr('aria-modal', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.ariaMultiLine = function (value) {
    return this.attr('aria-multiline', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.ariaMultiSelectable = function (value) {
    return this.attr('aria-multiselectable', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
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
    return this.attr('aria-pointset', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaPosInSet = function (value) {
    return this.attr('aria-posinset', value);
  };

  HTMLElementBuilder.prototype.ariaPressed = function (value) {
    return this.attr('aria-pressed', $nFed$export$mapAttribute(value, function (v) {
      return v === true ? 'true' : v === false ? 'false' : v;
    }));
  };

  HTMLElementBuilder.prototype.ariaReadonly = function (value) {
    return this.attr('aria-readonly', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.ariaRequired = function (value) {
    return this.attr('aria-required', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.ariaRelevant = function (value) {
    return this.attr('aria-relevant', value);
  };

  HTMLElementBuilder.prototype.ariaRoleDescription = function (value) {
    return this.attr('aria-roledescription', value);
  };

  HTMLElementBuilder.prototype.ariaRowCount = function (value) {
    return this.attr('aria-rowcount', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaRowIndex = function (value) {
    return this.attr('aria-rowindex', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaRowSpan = function (value) {
    return this.attr('aria-rowspan', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaSelected = function (value) {
    return this.attr('aria-selected', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLElementBuilder.prototype.ariaSetSize = function (value) {
    return this.attr('aria-setsize', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaSort = function (value) {
    return this.attr('aria-sort', value);
  };

  HTMLElementBuilder.prototype.ariaValueMax = function (value) {
    return this.attr('aria-valuemax', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaValueMin = function (value) {
    return this.attr('aria-valuemin', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaValueNow = function (value) {
    return this.attr('aria-valuenow', $nFed$export$mapAttribute(value, String));
  };

  HTMLElementBuilder.prototype.ariaValueText = function (value) {
    return this.attr('aria-valuetext', value);
  }; // event shortcuts


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
}($eyJE$var$BaseHTMLBuilder);

var $eyJE$export$HTMLElementBuilder = $eyJE$var$HTMLElementBuilder;
$eyJE$exports.HTMLElementBuilder = $eyJE$export$HTMLElementBuilder;

function $eyJE$var$initBuilder(builder, init, parent) {
  init && init(builder);
  return parent.Append(builder.build());
}

var $eyJE$var$HTMLMediaElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLMediaElementBuilder, _super);

  function HTMLMediaElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLMediaElementBuilder.prototype.autoPlay = function (value) {
    return this.attr('autoplay', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('autoplay')));
  };

  HTMLMediaElementBuilder.prototype.controls = function (value) {
    return this.attr('controls', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('controls')));
  };

  HTMLMediaElementBuilder.prototype.crossOrigin = function (value) {
    return this.attr('crossorigin', value);
  };

  HTMLMediaElementBuilder.prototype.loop = function (value) {
    return this.attr('loop', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('loop')));
  };

  HTMLMediaElementBuilder.prototype.muted = function (value) {
    return this.attr('muted', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('muted')));
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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLMediaElementBuilder = $eyJE$var$HTMLMediaElementBuilder;
$eyJE$exports.HTMLMediaElementBuilder = $eyJE$export$HTMLMediaElementBuilder;

var $eyJE$var$HTMLAnchorElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLAnchorElementBuilder, _super);

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
    return this.attr('ping', $nFed$export$mapAttribute(url, $yiha$export$listOrRecordToSpaceSeparated));
  };

  HTMLAnchorElementBuilder.prototype.rel = function (value) {
    return this.attr('rel', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  HTMLAnchorElementBuilder.prototype.target = function (name) {
    return this.attr('target', name);
  };

  HTMLAnchorElementBuilder.prototype.type = function (name) {
    return this.attr('type', name);
  };

  return HTMLAnchorElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLAnchorElementBuilder = $eyJE$var$HTMLAnchorElementBuilder;
$eyJE$exports.HTMLAnchorElementBuilder = $eyJE$export$HTMLAnchorElementBuilder;

var $eyJE$var$HTMLAreaElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLAreaElementBuilder, _super);

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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLAreaElementBuilder = $eyJE$var$HTMLAreaElementBuilder;
$eyJE$exports.HTMLAreaElementBuilder = $eyJE$export$HTMLAreaElementBuilder;

var $eyJE$var$HTMLAudioElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLAudioElementBuilder, _super);

  function HTMLAudioElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return HTMLAudioElementBuilder;
}($eyJE$var$HTMLMediaElementBuilder);

var $eyJE$export$HTMLAudioElementBuilder = $eyJE$var$HTMLAudioElementBuilder;
$eyJE$exports.HTMLAudioElementBuilder = $eyJE$export$HTMLAudioElementBuilder;

var $eyJE$var$HTMLBaseElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLBaseElementBuilder, _super);

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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLBaseElementBuilder = $eyJE$var$HTMLBaseElementBuilder;
$eyJE$exports.HTMLBaseElementBuilder = $eyJE$export$HTMLBaseElementBuilder;

var $eyJE$var$HTMLButtonElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLButtonElementBuilder, _super);

  function HTMLButtonElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLButtonElementBuilder.prototype.autofocus = function (value) {
    return this.attr('autofocus', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('autofocus')));
  };

  HTMLButtonElementBuilder.prototype.disabled = function (value) {
    return this.attr('disabled', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('disabled')));
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
    return this.attr('formnovalidate', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('formnovalidate')));
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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLButtonElementBuilder = $eyJE$var$HTMLButtonElementBuilder;
$eyJE$exports.HTMLButtonElementBuilder = $eyJE$export$HTMLButtonElementBuilder;

var $eyJE$var$HTMLCanvasElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLCanvasElementBuilder, _super);

  function HTMLCanvasElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLCanvasElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  HTMLCanvasElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return HTMLCanvasElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLCanvasElementBuilder = $eyJE$var$HTMLCanvasElementBuilder;
$eyJE$exports.HTMLCanvasElementBuilder = $eyJE$export$HTMLCanvasElementBuilder;

var $eyJE$var$HTMLDataElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLDataElementBuilder, _super);

  function HTMLDataElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLDataElementBuilder.prototype.value = function (value) {
    return this.attr('value', value);
  };

  return HTMLDataElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLDataElementBuilder = $eyJE$var$HTMLDataElementBuilder;
$eyJE$exports.HTMLDataElementBuilder = $eyJE$export$HTMLDataElementBuilder;

var $eyJE$var$HTMLDetailsElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLDetailsElementBuilder, _super);

  function HTMLDetailsElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLDetailsElementBuilder.prototype.open = function (value) {
    return this.attr('open', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('open')));
  };

  return HTMLDetailsElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLDetailsElementBuilder = $eyJE$var$HTMLDetailsElementBuilder;
$eyJE$exports.HTMLDetailsElementBuilder = $eyJE$export$HTMLDetailsElementBuilder;

var $eyJE$var$HTMLDialogElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLDialogElementBuilder, _super);

  function HTMLDialogElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLDialogElementBuilder.prototype.open = function (value) {
    return this.attr('open', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('open')));
  };

  return HTMLDialogElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLDialogElementBuilder = $eyJE$var$HTMLDialogElementBuilder;
$eyJE$exports.HTMLDialogElementBuilder = $eyJE$export$HTMLDialogElementBuilder;

var $eyJE$var$HTMLEmbedElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLEmbedElementBuilder, _super);

  function HTMLEmbedElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLEmbedElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  HTMLEmbedElementBuilder.prototype.src = function (value) {
    return this.attr('src', value);
  };

  HTMLEmbedElementBuilder.prototype.type = function (value) {
    return this.attr('type', value);
  };

  HTMLEmbedElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return HTMLEmbedElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLEmbedElementBuilder = $eyJE$var$HTMLEmbedElementBuilder;
$eyJE$exports.HTMLEmbedElementBuilder = $eyJE$export$HTMLEmbedElementBuilder;

var $eyJE$var$HTMLFieldSetElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLFieldSetElementBuilder, _super);

  function HTMLFieldSetElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLFieldSetElementBuilder.prototype.disabled = function (value) {
    return this.attr('disabled', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('disabled')));
  };

  HTMLFieldSetElementBuilder.prototype.form = function (value) {
    return this.attr('form', value);
  };

  HTMLFieldSetElementBuilder.prototype.name = function (value) {
    return this.attr('name', value);
  };

  return HTMLFieldSetElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLFieldSetElementBuilder = $eyJE$var$HTMLFieldSetElementBuilder;
$eyJE$exports.HTMLFieldSetElementBuilder = $eyJE$export$HTMLFieldSetElementBuilder;

var $eyJE$var$HTMLFormElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLFormElementBuilder, _super);

  function HTMLFormElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLFormElementBuilder.prototype.acceptCharset = function (value) {
    return this.attr('accept-charset', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
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
    return this.attr('novalidate', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('novalidate')));
  };

  HTMLFormElementBuilder.prototype.rel = function (value) {
    return this.attr('rel', value);
  };

  HTMLFormElementBuilder.prototype.target = function (value) {
    return this.attr('target', value);
  };

  return HTMLFormElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLFormElementBuilder = $eyJE$var$HTMLFormElementBuilder;
$eyJE$exports.HTMLFormElementBuilder = $eyJE$export$HTMLFormElementBuilder;

var $eyJE$var$HTMLHtmlElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLHtmlElementBuilder, _super);

  function HTMLHtmlElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLHtmlElementBuilder.prototype.xmlns = function (value) {
    return this.attr('xmlns', value);
  };

  return HTMLHtmlElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLHtmlElementBuilder = $eyJE$var$HTMLHtmlElementBuilder;
$eyJE$exports.HTMLHtmlElementBuilder = $eyJE$export$HTMLHtmlElementBuilder;

var $eyJE$var$HTMLIFrameElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLIFrameElementBuilder, _super);

  function HTMLIFrameElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLIFrameElementBuilder.prototype.allow = function (value) {
    return this.attr('allow', value);
  };

  HTMLIFrameElementBuilder.prototype.allowfullscreen = function (value) {
    return this.attr('allowfullscreen', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLIFrameElementBuilder.prototype.allowpaymentrequest = function (value) {
    return this.attr('allowpaymentrequest', $nFed$export$mapAttribute(value, $yiha$export$booleanToString));
  };

  HTMLIFrameElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
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
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return HTMLIFrameElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLIFrameElementBuilder = $eyJE$var$HTMLIFrameElementBuilder;
$eyJE$exports.HTMLIFrameElementBuilder = $eyJE$export$HTMLIFrameElementBuilder;

var $eyJE$var$HTMLImageElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLImageElementBuilder, _super);

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
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  HTMLImageElementBuilder.prototype.ismap = function (value) {
    return this.attr('ismap', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('ismap')));
  };

  HTMLImageElementBuilder.prototype.loading = function (value) {
    return this.attr('loading', value);
  };

  HTMLImageElementBuilder.prototype.sizes = function (value) {
    return this.attr('sizes', $nFed$export$mapAttribute(value, $yiha$export$lostOrRecordToCommaSeparated));
  };

  HTMLImageElementBuilder.prototype.src = function (value) {
    return this.attr('src', value);
  };

  HTMLImageElementBuilder.prototype.srcset = function (value) {
    return this.attr('srcset', $nFed$export$mapAttribute(value, $yiha$export$lostOrRecordToCommaSeparated));
  };

  HTMLImageElementBuilder.prototype.usemap = function (value) {
    return this.attr('usemap', value);
  };

  HTMLImageElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return HTMLImageElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLImageElementBuilder = $eyJE$var$HTMLImageElementBuilder;
$eyJE$exports.HTMLImageElementBuilder = $eyJE$export$HTMLImageElementBuilder;

var $eyJE$var$HTMLInputElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputElementBuilder, _super);

  function HTMLInputElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLInputElementBuilder.prototype.type = function (value) {
    return this.attr('type', value);
  };

  HTMLInputElementBuilder.prototype.autoComplete = function (value) {
    return this.attr('autocomplete', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  HTMLInputElementBuilder.prototype.autoFocus = function (value) {
    return this.attr('autofocus', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('disabled')));
  };

  HTMLInputElementBuilder.prototype.disabled = function (value) {
    return this.attr('disabled', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('disabled')));
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
    return this.attr('readonly', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('readonly')));
  };

  HTMLInputElementBuilder.prototype.required = function (value) {
    return this.attr('required', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('required')));
  };

  HTMLInputElementBuilder.prototype.value = function (value) {
    return this.attr('value', value);
  };

  return HTMLInputElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLInputElementBuilder = $eyJE$var$HTMLInputElementBuilder;
$eyJE$exports.HTMLInputElementBuilder = $eyJE$export$HTMLInputElementBuilder;

var $eyJE$var$HTMLInputCheckedElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputCheckedElementBuilder, _super);

  function HTMLInputCheckedElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLInputCheckedElementBuilder.prototype.checked = function (value) {
    return this.attr('checked', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('checked')));
  };

  return HTMLInputCheckedElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputCheckedElementBuilder = $eyJE$var$HTMLInputCheckedElementBuilder;
$eyJE$exports.HTMLInputCheckedElementBuilder = $eyJE$export$HTMLInputCheckedElementBuilder;

var $eyJE$var$HTMLInputDateElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputDateElementBuilder, _super);

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
    return this.attr('step', $nFed$export$mapAttribute(value, String));
  };

  return HTMLInputDateElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputDateElementBuilder = $eyJE$var$HTMLInputDateElementBuilder;
$eyJE$exports.HTMLInputDateElementBuilder = $eyJE$export$HTMLInputDateElementBuilder;

var $eyJE$var$HTMLInputEmailElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputEmailElementBuilder, _super);

  function HTMLInputEmailElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLInputEmailElementBuilder.prototype.multiple = function (value) {
    return this.attr('multiple', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('multiple')));
  };

  HTMLInputEmailElementBuilder.prototype.size = function (value) {
    return this.attr('size', $nFed$export$mapAttribute(value, String));
  };

  return HTMLInputEmailElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputEmailElementBuilder = $eyJE$var$HTMLInputEmailElementBuilder;
$eyJE$exports.HTMLInputEmailElementBuilder = $eyJE$export$HTMLInputEmailElementBuilder;

var $eyJE$var$HTMLInputFileElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputFileElementBuilder, _super);

  function HTMLInputFileElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLInputFileElementBuilder.prototype.accept = function (value) {
    return this.attr('accept', $nFed$export$mapAttribute(value, $yiha$export$lostOrRecordToCommaSeparated));
  };

  HTMLInputFileElementBuilder.prototype.capture = function (value) {
    return this.attr('capture', value);
  };

  HTMLInputFileElementBuilder.prototype.multiple = function (value) {
    return this.attr('multiple', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('multiple')));
  };

  return HTMLInputFileElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputFileElementBuilder = $eyJE$var$HTMLInputFileElementBuilder;
$eyJE$exports.HTMLInputFileElementBuilder = $eyJE$export$HTMLInputFileElementBuilder;

var $eyJE$var$HTMLInputImageElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputImageElementBuilder, _super);

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
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputImageElementBuilder.prototype.src = function (value) {
    return this.attr('src', value);
  };

  HTMLInputImageElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return HTMLInputImageElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputImageElementBuilder = $eyJE$var$HTMLInputImageElementBuilder;
$eyJE$exports.HTMLInputImageElementBuilder = $eyJE$export$HTMLInputImageElementBuilder;

var $eyJE$var$HTMLInputNumberElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputNumberElementBuilder, _super);

  function HTMLInputNumberElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLInputNumberElementBuilder.prototype.max = function (value) {
    return this.attr('max', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputNumberElementBuilder.prototype.min = function (value) {
    return this.attr('min', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputNumberElementBuilder.prototype.step = function (value) {
    return this.attr('step', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputNumberElementBuilder.prototype.value = function (value) {
    return this.attr('value', $nFed$export$mapAttribute(value, String));
  };

  return HTMLInputNumberElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputNumberElementBuilder = $eyJE$var$HTMLInputNumberElementBuilder;
$eyJE$exports.HTMLInputNumberElementBuilder = $eyJE$export$HTMLInputNumberElementBuilder;

var $eyJE$var$HTMLInputPasswordElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputPasswordElementBuilder, _super);

  function HTMLInputPasswordElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLInputPasswordElementBuilder.prototype.maxlength = function (value) {
    return this.attr('maxlength', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputPasswordElementBuilder.prototype.minlength = function (value) {
    return this.attr('minlength', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputPasswordElementBuilder.prototype.pattern = function (value) {
    return this.attr('pattern', value);
  };

  HTMLInputPasswordElementBuilder.prototype.placeholder = function (value) {
    return this.attr('placeholder', value);
  };

  HTMLInputPasswordElementBuilder.prototype.size = function (value) {
    return this.attr('size', $nFed$export$mapAttribute(value, String));
  };

  return HTMLInputPasswordElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputPasswordElementBuilder = $eyJE$var$HTMLInputPasswordElementBuilder;
$eyJE$exports.HTMLInputPasswordElementBuilder = $eyJE$export$HTMLInputPasswordElementBuilder;

var $eyJE$var$HTMLInputSearchElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputSearchElementBuilder, _super);

  function HTMLInputSearchElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLInputSearchElementBuilder.prototype.dirname = function (value) {
    return this.attr('dirname', value);
  };

  HTMLInputSearchElementBuilder.prototype.maxlength = function (value) {
    return this.attr('maxlength', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputSearchElementBuilder.prototype.minlength = function (value) {
    return this.attr('minlength', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputSearchElementBuilder.prototype.placeholder = function (value) {
    return this.attr('placeholder', value);
  };

  return HTMLInputSearchElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputSearchElementBuilder = $eyJE$var$HTMLInputSearchElementBuilder;
$eyJE$exports.HTMLInputSearchElementBuilder = $eyJE$export$HTMLInputSearchElementBuilder;

var $eyJE$var$HTMLInputSubmitElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputSubmitElementBuilder, _super);

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
    return this.attr('formvalidate', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('formvalidate')));
  };

  HTMLInputSubmitElementBuilder.prototype.formTarget = function (value) {
    return this.attr('formtarget', value);
  };

  return HTMLInputSubmitElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputSubmitElementBuilder = $eyJE$var$HTMLInputSubmitElementBuilder;
$eyJE$exports.HTMLInputSubmitElementBuilder = $eyJE$export$HTMLInputSubmitElementBuilder;

var $eyJE$var$HTMLInputTelElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputTelElementBuilder, _super);

  function HTMLInputTelElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLInputTelElementBuilder.prototype.maxlength = function (value) {
    return this.attr('maxlength', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputTelElementBuilder.prototype.minlength = function (value) {
    return this.attr('minlength', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputTelElementBuilder.prototype.pattern = function (value) {
    return this.attr('pattern', value);
  };

  HTMLInputTelElementBuilder.prototype.placeholder = function (value) {
    return this.attr('placeholder', value);
  };

  HTMLInputTelElementBuilder.prototype.size = function (value) {
    return this.attr('size', $nFed$export$mapAttribute(value, String));
  };

  return HTMLInputTelElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputTelElementBuilder = $eyJE$var$HTMLInputTelElementBuilder;
$eyJE$exports.HTMLInputTelElementBuilder = $eyJE$export$HTMLInputTelElementBuilder;

var $eyJE$var$InputTextElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(InputTextElementBuilder, _super);

  function InputTextElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  InputTextElementBuilder.prototype.dirname = function (value) {
    return this.attr('dirname', value);
  };

  InputTextElementBuilder.prototype.maxlength = function (value) {
    return this.attr('maxlength', $nFed$export$mapAttribute(value, String));
  };

  InputTextElementBuilder.prototype.minlength = function (value) {
    return this.attr('minlength', $nFed$export$mapAttribute(value, String));
  };

  InputTextElementBuilder.prototype.pattern = function (value) {
    return this.attr('pattern', value);
  };

  InputTextElementBuilder.prototype.placeholder = function (value) {
    return this.attr('placeholder', value);
  };

  InputTextElementBuilder.prototype.size = function (value) {
    return this.attr('size', $nFed$export$mapAttribute(value, String));
  };

  return InputTextElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$InputTextElementBuilder = $eyJE$var$InputTextElementBuilder;
$eyJE$exports.InputTextElementBuilder = $eyJE$export$InputTextElementBuilder;

var $eyJE$var$HTMLInputUrlElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLInputUrlElementBuilder, _super);

  function HTMLInputUrlElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLInputUrlElementBuilder.prototype.maxlength = function (value) {
    return this.attr('maxlength', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputUrlElementBuilder.prototype.minlength = function (value) {
    return this.attr('minlength', $nFed$export$mapAttribute(value, String));
  };

  HTMLInputUrlElementBuilder.prototype.placeholder = function (value) {
    return this.attr('placeholder', value);
  };

  return HTMLInputUrlElementBuilder;
}($eyJE$var$HTMLInputElementBuilder);

var $eyJE$export$HTMLInputUrlElementBuilder = $eyJE$var$HTMLInputUrlElementBuilder;
$eyJE$exports.HTMLInputUrlElementBuilder = $eyJE$export$HTMLInputUrlElementBuilder;

var $eyJE$var$HTMLLabelElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLLabelElementBuilder, _super);

  function HTMLLabelElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLLabelElementBuilder.prototype.for = function (value) {
    return this.attr('for', value);
  };

  return HTMLLabelElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLLabelElementBuilder = $eyJE$var$HTMLLabelElementBuilder;
$eyJE$exports.HTMLLabelElementBuilder = $eyJE$export$HTMLLabelElementBuilder;

var $eyJE$var$HTMLLIElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLLIElementBuilder, _super);

  function HTMLLIElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLLIElementBuilder.prototype.value = function (value) {
    return this.attr('value', value);
  };

  return HTMLLIElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLLIElementBuilder = $eyJE$var$HTMLLIElementBuilder;
$eyJE$exports.HTMLLIElementBuilder = $eyJE$export$HTMLLIElementBuilder;

var $eyJE$var$HTMLLinkElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLLinkElementBuilder, _super);

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
    return this.attr('disabled', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('disabled')));
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
    return this.attr('sizes', $nFed$export$mapAttribute(value, $yiha$export$lostOrRecordToCommaSeparated));
  };

  HTMLLinkElementBuilder.prototype.title = function (value) {
    return this.attr('title', value);
  };

  HTMLLinkElementBuilder.prototype.type = function (value) {
    return this.attr('type', value);
  };

  return HTMLLinkElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLLinkElementBuilder = $eyJE$var$HTMLLinkElementBuilder;
$eyJE$exports.HTMLLinkElementBuilder = $eyJE$export$HTMLLinkElementBuilder;

var $eyJE$var$HTMLMapElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLMapElementBuilder, _super);

  function HTMLMapElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLMapElementBuilder.prototype.name = function (value) {
    return this.attr('name', value);
  };

  return HTMLMapElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLMapElementBuilder = $eyJE$var$HTMLMapElementBuilder;
$eyJE$exports.HTMLMapElementBuilder = $eyJE$export$HTMLMapElementBuilder;

var $eyJE$var$HTMLMetaElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLMetaElementBuilder, _super);

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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLMetaElementBuilder = $eyJE$var$HTMLMetaElementBuilder;
$eyJE$exports.HTMLMetaElementBuilder = $eyJE$export$HTMLMetaElementBuilder;

var $eyJE$var$HTMLMeterElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLMeterElementBuilder, _super);

  function HTMLMeterElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLMeterElementBuilder.prototype.form = function (value) {
    return this.attr('step', value);
  };

  HTMLMeterElementBuilder.prototype.high = function (value) {
    return this.attr('high', $nFed$export$mapAttribute(value, String));
  };

  HTMLMeterElementBuilder.prototype.low = function (value) {
    return this.attr('low', $nFed$export$mapAttribute(value, String));
  };

  HTMLMeterElementBuilder.prototype.max = function (value) {
    return this.attr('max', $nFed$export$mapAttribute(value, String));
  };

  HTMLMeterElementBuilder.prototype.min = function (value) {
    return this.attr('min', $nFed$export$mapAttribute(value, String));
  };

  HTMLMeterElementBuilder.prototype.optimum = function (value) {
    return this.attr('optimum', $nFed$export$mapAttribute(value, String));
  };

  HTMLMeterElementBuilder.prototype.value = function (value) {
    return this.attr('value', $nFed$export$mapAttribute(value, String));
  };

  return HTMLMeterElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLMeterElementBuilder = $eyJE$var$HTMLMeterElementBuilder;
$eyJE$exports.HTMLMeterElementBuilder = $eyJE$export$HTMLMeterElementBuilder;

var $eyJE$var$HTMLModElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLModElementBuilder, _super);

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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLModElementBuilder = $eyJE$var$HTMLModElementBuilder;
$eyJE$exports.HTMLModElementBuilder = $eyJE$export$HTMLModElementBuilder;

var $eyJE$var$HTMLObjectElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLObjectElementBuilder, _super);

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
    return this.attr('height', $nFed$export$mapAttribute(value, String));
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
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return HTMLObjectElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLObjectElementBuilder = $eyJE$var$HTMLObjectElementBuilder;
$eyJE$exports.HTMLObjectElementBuilder = $eyJE$export$HTMLObjectElementBuilder;

var $eyJE$var$HTMLOListElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLOListElementBuilder, _super);

  function HTMLOListElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLOListElementBuilder.prototype.reversed = function (value) {
    return this.attr('reversed', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('reversed')));
  };

  HTMLOListElementBuilder.prototype.start = function (value) {
    return this.attr('start', $nFed$export$mapAttribute(value, String));
  };

  HTMLOListElementBuilder.prototype.type = function (value) {
    return this.attr('type', $nFed$export$mapAttribute(value, String));
  };

  return HTMLOListElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLOListElementBuilder = $eyJE$var$HTMLOListElementBuilder;
$eyJE$exports.HTMLOListElementBuilder = $eyJE$export$HTMLOListElementBuilder;

var $eyJE$var$HTMLOptGroupElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLOptGroupElementBuilder, _super);

  function HTMLOptGroupElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLOptGroupElementBuilder.prototype.disabled = function (value) {
    return this.attr('disabled', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('disabled')));
  };

  HTMLOptGroupElementBuilder.prototype.label = function (value) {
    return this.attr('label', value);
  };

  return HTMLOptGroupElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLOptGroupElementBuilder = $eyJE$var$HTMLOptGroupElementBuilder;
$eyJE$exports.HTMLOptGroupElementBuilder = $eyJE$export$HTMLOptGroupElementBuilder;

var $eyJE$var$HTMLOptionElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLOptionElementBuilder, _super);

  function HTMLOptionElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLOptionElementBuilder.prototype.disabled = function (value) {
    return this.attr('disabled', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('disabled')));
  };

  HTMLOptionElementBuilder.prototype.label = function (value) {
    return this.attr('label', value);
  };

  HTMLOptionElementBuilder.prototype.selected = function (value) {
    return this.attr('selected', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('selected')));
  };

  HTMLOptionElementBuilder.prototype.value = function (value) {
    return this.attr('value', value);
  };

  return HTMLOptionElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLOptionElementBuilder = $eyJE$var$HTMLOptionElementBuilder;
$eyJE$exports.HTMLOptionElementBuilder = $eyJE$export$HTMLOptionElementBuilder;

var $eyJE$var$HTMLOutputElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLOutputElementBuilder, _super);

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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLOutputElementBuilder = $eyJE$var$HTMLOutputElementBuilder;
$eyJE$exports.HTMLOutputElementBuilder = $eyJE$export$HTMLOutputElementBuilder;

var $eyJE$var$HTMLParamElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLParamElementBuilder, _super);

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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLParamElementBuilder = $eyJE$var$HTMLParamElementBuilder;
$eyJE$exports.HTMLParamElementBuilder = $eyJE$export$HTMLParamElementBuilder;

var $eyJE$var$HTMLPictureElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLPictureElementBuilder, _super);

  function HTMLPictureElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return HTMLPictureElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLPictureElementBuilder = $eyJE$var$HTMLPictureElementBuilder;
$eyJE$exports.HTMLPictureElementBuilder = $eyJE$export$HTMLPictureElementBuilder;

var $eyJE$var$HTMLProgressElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLProgressElementBuilder, _super);

  function HTMLProgressElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLProgressElementBuilder.prototype.max = function (value) {
    return this.attr('max', $nFed$export$mapAttribute(value, String));
  };

  HTMLProgressElementBuilder.prototype.value = function (value) {
    return this.attr('value', $nFed$export$mapAttribute(value, String));
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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLProgressElementBuilder = $eyJE$var$HTMLProgressElementBuilder;
$eyJE$exports.HTMLProgressElementBuilder = $eyJE$export$HTMLProgressElementBuilder;

var $eyJE$var$HTMLQuoteElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLQuoteElementBuilder, _super);

  function HTMLQuoteElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLQuoteElementBuilder.prototype.cite = function (value) {
    return this.attr('cite', value);
  };

  return HTMLQuoteElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLQuoteElementBuilder = $eyJE$var$HTMLQuoteElementBuilder;
$eyJE$exports.HTMLQuoteElementBuilder = $eyJE$export$HTMLQuoteElementBuilder;

var $eyJE$var$HTMLScriptElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLScriptElementBuilder, _super);

  function HTMLScriptElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLScriptElementBuilder.prototype.async = function (value) {
    return this.attr('async', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('async')));
  };

  HTMLScriptElementBuilder.prototype.crossOrigin = function (value) {
    return this.attr('crossorigin', value);
  };

  HTMLScriptElementBuilder.prototype.defer = function (value) {
    return this.attr('defer', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('defer')));
  };

  HTMLScriptElementBuilder.prototype.integrity = function (value) {
    return this.attr('integrity', value);
  };

  HTMLScriptElementBuilder.prototype.nomodule = function (value) {
    return this.attr('nomodule', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('nomodule')));
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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLScriptElementBuilder = $eyJE$var$HTMLScriptElementBuilder;
$eyJE$exports.HTMLScriptElementBuilder = $eyJE$export$HTMLScriptElementBuilder;

var $eyJE$var$HTMLSelectElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLSelectElementBuilder, _super);

  function HTMLSelectElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLSelectElementBuilder.prototype.autoComplete = function (value) {
    return this.attr('autocomplete', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  HTMLSelectElementBuilder.prototype.autoFocus = function (value) {
    return this.attr('autofocus', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('disabled')));
  };

  HTMLSelectElementBuilder.prototype.disabled = function (value) {
    return this.attr('disabled', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('disabled')));
  };

  HTMLSelectElementBuilder.prototype.form = function (value) {
    return this.attr('form', value);
  };

  HTMLSelectElementBuilder.prototype.multiple = function (value) {
    return this.attr('multiple', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('multiple')));
  };

  HTMLSelectElementBuilder.prototype.name = function (value) {
    return this.attr('name', value);
  };

  HTMLSelectElementBuilder.prototype.required = function (value) {
    return this.attr('required', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('required')));
  };

  HTMLSelectElementBuilder.prototype.size = function (value) {
    return this.attr('size', $nFed$export$mapAttribute(value, String));
  };

  return HTMLSelectElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLSelectElementBuilder = $eyJE$var$HTMLSelectElementBuilder;
$eyJE$exports.HTMLSelectElementBuilder = $eyJE$export$HTMLSelectElementBuilder;

var $eyJE$var$HTMLSlotElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLSlotElementBuilder, _super);

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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLSlotElementBuilder = $eyJE$var$HTMLSlotElementBuilder;
$eyJE$exports.HTMLSlotElementBuilder = $eyJE$export$HTMLSlotElementBuilder;

var $eyJE$var$HTMLSourceElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLSourceElementBuilder, _super);

  function HTMLSourceElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLSourceElementBuilder.prototype.media = function (value) {
    return this.attr('media', value);
  };

  HTMLSourceElementBuilder.prototype.sizes = function (value) {
    return this.attr('sizes', $nFed$export$mapAttribute(value, $yiha$export$lostOrRecordToCommaSeparated));
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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLSourceElementBuilder = $eyJE$var$HTMLSourceElementBuilder;
$eyJE$exports.HTMLSourceElementBuilder = $eyJE$export$HTMLSourceElementBuilder;

var $eyJE$var$HTMLStyleElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLStyleElementBuilder, _super);

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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLStyleElementBuilder = $eyJE$var$HTMLStyleElementBuilder;
$eyJE$exports.HTMLStyleElementBuilder = $eyJE$export$HTMLStyleElementBuilder;

var $eyJE$var$HTMLTableColElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLTableColElementBuilder, _super);

  function HTMLTableColElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLTableColElementBuilder.prototype.span = function (value) {
    return this.attr('span', $nFed$export$mapAttribute(value, String));
  };

  return HTMLTableColElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLTableColElementBuilder = $eyJE$var$HTMLTableColElementBuilder;
$eyJE$exports.HTMLTableColElementBuilder = $eyJE$export$HTMLTableColElementBuilder;

var $eyJE$var$HTMLTableDataCellElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLTableDataCellElementBuilder, _super);

  function HTMLTableDataCellElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLTableDataCellElementBuilder.prototype.colSpan = function (value) {
    return this.attr('colspan', $nFed$export$mapAttribute(value, String));
  };

  HTMLTableDataCellElementBuilder.prototype.headers = function (value) {
    return this.attr('headers', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  HTMLTableDataCellElementBuilder.prototype.rowSpan = function (value) {
    return this.attr('rowspan', $nFed$export$mapAttribute(value, String));
  };

  return HTMLTableDataCellElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLTableDataCellElementBuilder = $eyJE$var$HTMLTableDataCellElementBuilder;
$eyJE$exports.HTMLTableDataCellElementBuilder = $eyJE$export$HTMLTableDataCellElementBuilder;

var $eyJE$var$HTMLTableHeaderCellElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLTableHeaderCellElementBuilder, _super);

  function HTMLTableHeaderCellElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLTableHeaderCellElementBuilder.prototype.abbr = function (value) {
    return this.attr('abbr', $nFed$export$mapAttribute(value, String));
  };

  HTMLTableHeaderCellElementBuilder.prototype.colSpan = function (value) {
    return this.attr('colspan', $nFed$export$mapAttribute(value, String));
  };

  HTMLTableHeaderCellElementBuilder.prototype.headers = function (value) {
    return this.attr('headers', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  HTMLTableHeaderCellElementBuilder.prototype.rowSpan = function (value) {
    return this.attr('rowspan', $nFed$export$mapAttribute(value, String));
  };

  HTMLTableHeaderCellElementBuilder.prototype.scope = function (value) {
    return this.attr('scope', value);
  };

  return HTMLTableHeaderCellElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLTableHeaderCellElementBuilder = $eyJE$var$HTMLTableHeaderCellElementBuilder;
$eyJE$exports.HTMLTableHeaderCellElementBuilder = $eyJE$export$HTMLTableHeaderCellElementBuilder;

var $eyJE$var$HTMLTextAreaElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLTextAreaElementBuilder, _super);

  function HTMLTextAreaElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLTextAreaElementBuilder.prototype.autoComplete = function (value) {
    return this.attr('autocomplete', $nFed$export$mapAttribute(value, $yiha$export$listOrRecordToSpaceSeparated));
  };

  HTMLTextAreaElementBuilder.prototype.autoFocus = function (value) {
    return this.attr('autofocus', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('autofocus')));
  };

  HTMLTextAreaElementBuilder.prototype.cols = function (value) {
    return this.attr('cols', $nFed$export$mapAttribute(value, String));
  };

  HTMLTextAreaElementBuilder.prototype.disabled = function (value) {
    return this.attr('disabled', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('disabled')));
  };

  HTMLTextAreaElementBuilder.prototype.form = function (value) {
    return this.attr('form', value);
  };

  HTMLTextAreaElementBuilder.prototype.maxlength = function (value) {
    return this.attr('maxlength', $nFed$export$mapAttribute(value, String));
  };

  HTMLTextAreaElementBuilder.prototype.minlength = function (value) {
    return this.attr('minlength', $nFed$export$mapAttribute(value, String));
  };

  HTMLTextAreaElementBuilder.prototype.name = function (value) {
    return this.attr('name', value);
  };

  HTMLTextAreaElementBuilder.prototype.placeholder = function (value) {
    return this.attr('placeholder', value);
  };

  HTMLTextAreaElementBuilder.prototype.readonly = function (value) {
    return this.attr('readonly', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('readonly')));
  };

  HTMLTextAreaElementBuilder.prototype.required = function (value) {
    return this.attr('required', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('required')));
  };

  HTMLTextAreaElementBuilder.prototype.rows = function (value) {
    return this.attr('rows', $nFed$export$mapAttribute(value, String));
  };

  HTMLTextAreaElementBuilder.prototype.spellCheck = function (value) {
    return this.attr('spellcheck', $nFed$export$mapAttribute(value, String));
  };

  HTMLTextAreaElementBuilder.prototype.wrap = function (value) {
    return this.attr('wrap', $nFed$export$mapAttribute(value, String));
  };

  return HTMLTextAreaElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLTextAreaElementBuilder = $eyJE$var$HTMLTextAreaElementBuilder;
$eyJE$exports.HTMLTextAreaElementBuilder = $eyJE$export$HTMLTextAreaElementBuilder;

var $eyJE$var$HTMLTimeElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLTimeElementBuilder, _super);

  function HTMLTimeElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLTimeElementBuilder.prototype.dateTime = function (value) {
    return this.attr('datetime', value);
  };

  return HTMLTimeElementBuilder;
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLTimeElementBuilder = $eyJE$var$HTMLTimeElementBuilder;
$eyJE$exports.HTMLTimeElementBuilder = $eyJE$export$HTMLTimeElementBuilder;

var $eyJE$var$HTMLTrackElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLTrackElementBuilder, _super);

  function HTMLTrackElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLTrackElementBuilder.prototype.default = function (value) {
    return this.attr('default', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('default')));
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
}($eyJE$var$HTMLElementBuilder);

var $eyJE$export$HTMLTrackElementBuilder = $eyJE$var$HTMLTrackElementBuilder;
$eyJE$exports.HTMLTrackElementBuilder = $eyJE$export$HTMLTrackElementBuilder;

var $eyJE$var$HTMLVideoElementBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(HTMLVideoElementBuilder, _super);

  function HTMLVideoElementBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  HTMLVideoElementBuilder.prototype.height = function (value) {
    return this.attr('height', $nFed$export$mapAttribute(value, String));
  };

  HTMLVideoElementBuilder.prototype.playsInline = function (value) {
    return this.attr('playsinline', $nFed$export$mapAttribute(value, $yiha$export$toggleToString('playsinline')));
  };

  HTMLVideoElementBuilder.prototype.poster = function (value) {
    return this.attr('poster', value);
  };

  HTMLVideoElementBuilder.prototype.width = function (value) {
    return this.attr('width', $nFed$export$mapAttribute(value, String));
  };

  return HTMLVideoElementBuilder;
}($eyJE$var$HTMLMediaElementBuilder);

var $eyJE$export$HTMLVideoElementBuilder = $eyJE$var$HTMLVideoElementBuilder;
$eyJE$exports.HTMLVideoElementBuilder = $eyJE$export$HTMLVideoElementBuilder; // transforms

var $eyJE$var$ComponentHTMLBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(ComponentHTMLBuilder, _super);

  function ComponentHTMLBuilder(reducer) {
    var _this = _super.call(this) || this;

    _this.reducer = reducer;
    _this.delayed = false;

    _this.equals = function (a, b) {
      return a === b;
    };

    return _this;
  }

  ComponentHTMLBuilder.prototype.build = function () {
    return new $eDHy$export$ComponentTemplate(this.delayed, this.reducer, this.equals, this._children);
  };

  return ComponentHTMLBuilder;
}($eyJE$var$BaseHTMLBuilder);

var $eyJE$export$ComponentHTMLBuilder = $eyJE$var$ComponentHTMLBuilder;
$eyJE$exports.ComponentHTMLBuilder = $eyJE$export$ComponentHTMLBuilder;

var $eyJE$var$FragmentHTMLBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(FragmentHTMLBuilder, _super);

  function FragmentHTMLBuilder() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  FragmentHTMLBuilder.prototype.build = function () {
    return new $aQMP$export$FragmentTemplate(this._children);
  };

  return FragmentHTMLBuilder;
}($eyJE$var$BaseHTMLBuilder);

var $eyJE$export$FragmentHTMLBuilder = $eyJE$var$FragmentHTMLBuilder;
$eyJE$exports.FragmentHTMLBuilder = $eyJE$export$FragmentHTMLBuilder;

var $eyJE$var$MapActionHTMLBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(MapActionHTMLBuilder, _super);

  function MapActionHTMLBuilder(map) {
    var _this = _super.call(this) || this;

    _this.map = map;
    return _this;
  }

  MapActionHTMLBuilder.prototype.build = function () {
    return new $KxWc$export$MapActionTemplate(this.map, this._children);
  };

  return MapActionHTMLBuilder;
}($eyJE$var$BaseHTMLBuilder);

var $eyJE$export$MapActionHTMLBuilder = $eyJE$var$MapActionHTMLBuilder;
$eyJE$exports.MapActionHTMLBuilder = $eyJE$export$MapActionHTMLBuilder;

var $eyJE$var$MapQueryHTMLBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(MapQueryHTMLBuilder, _super);

  function MapQueryHTMLBuilder(map) {
    var _this = _super.call(this) || this;

    _this.map = map;
    return _this;
  }

  MapQueryHTMLBuilder.prototype.build = function () {
    return new $wbDd$export$MapQueryTemplate(this.map, this._children);
  };

  return MapQueryHTMLBuilder;
}($eyJE$var$BaseHTMLBuilder);

var $eyJE$export$MapQueryHTMLBuilder = $eyJE$var$MapQueryHTMLBuilder;
$eyJE$exports.MapQueryHTMLBuilder = $eyJE$export$MapQueryHTMLBuilder;

var $eyJE$var$MapStateHTMLBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(MapStateHTMLBuilder, _super);

  function MapStateHTMLBuilder(map) {
    var _this = _super.call(this) || this;

    _this.map = map;

    _this.equals = function (a, b) {
      return a === b;
    };

    return _this;
  }

  MapStateHTMLBuilder.prototype.build = function () {
    return new $kpTJ$export$MapStateTemplate(this.map, $yiha$export$childOrBuilderToTemplate(this.orElse), this.equals, this._children);
  };

  return MapStateHTMLBuilder;
}($eyJE$var$BaseHTMLBuilder);

var $eyJE$export$MapStateHTMLBuilder = $eyJE$var$MapStateHTMLBuilder;
$eyJE$exports.MapStateHTMLBuilder = $eyJE$export$MapStateHTMLBuilder;

var $eyJE$var$PortalBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(PortalBuilder, _super);

  function PortalBuilder(appendChild) {
    var _this = _super.call(this) || this;

    _this.appendChild = appendChild;
    return _this;
  }

  PortalBuilder.prototype.build = function () {
    return new $koeo$export$PortalTemplate(this.appendChild, this._children);
  };

  return PortalBuilder;
}($eyJE$var$BaseHTMLBuilder);

var $eyJE$export$PortalBuilder = $eyJE$var$PortalBuilder;
$eyJE$exports.PortalBuilder = $eyJE$export$PortalBuilder;

var $eyJE$var$SimpleComponentHTMLBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(SimpleComponentHTMLBuilder, _super);

  function SimpleComponentHTMLBuilder() {
    var _this = _super.call(this) || this;

    _this.delayed = false;
    return _this;
  }

  SimpleComponentHTMLBuilder.prototype.build = function () {
    return new $LSkL$export$SimpleComponentTemplate(this.delayed, this._children);
  };

  return SimpleComponentHTMLBuilder;
}($eyJE$var$BaseHTMLBuilder);

var $eyJE$export$SimpleComponentHTMLBuilder = $eyJE$var$SimpleComponentHTMLBuilder;
$eyJE$exports.SimpleComponentHTMLBuilder = $eyJE$export$SimpleComponentHTMLBuilder;

var $eyJE$var$UntilHTMLBuilder =
/** @class */
function (_super) {
  $eyJE$var$__extends(UntilHTMLBuilder, _super);

  function UntilHTMLBuilder(next) {
    var _this = _super.call(this) || this;

    _this.next = next;
    return _this;
  }

  UntilHTMLBuilder.prototype.build = function () {
    return new $Ttvv$export$UntilTemplate(this.next, this._children);
  };

  return UntilHTMLBuilder;
}($eyJE$var$BaseHTMLBuilder);

$eyJE$export$UntilHTMLBuilder = $eyJE$var$UntilHTMLBuilder;
$eyJE$exports.UntilHTMLBuilder = $eyJE$export$UntilHTMLBuilder; //# sourceMappingURL=html_builder.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/match_template.js
var $HSRy$exports = {};
Object.defineProperty($HSRy$exports, "__esModule", {
  value: true
});
var $HSRy$export$MatchTemplate = void 0;
$HSRy$exports.MatchTemplate = $HSRy$export$MatchTemplate;

var $HSRy$var$MatchTemplate =
/** @class */
function () {
  function MatchTemplate(path, matcher) {
    this.path = path;
    this.matcher = $g3Xg$export$keys(matcher).reduce(function (acc, key) {
      acc[key] = $yiha$export$childOrBuilderToTemplate(matcher[key]);
      return acc;
    }, {});
  }

  MatchTemplate.prototype.render = function (ctx, state) {
    var _a = ctx.withAppendToReference(),
        newCtx = _a.ctx,
        ref = _a.ref;

    var _b = this,
        path = _b.path,
        matcher = _b.matcher;

    var key = this.path.reduce(function (acc, key) {
      return acc[key];
    }, state);
    var view = matcher[key].render(newCtx, state);
    return {
      change: function (state) {
        var newKey = path.reduce(function (acc, key) {
          return acc[key];
        }, state);

        if (newKey === key) {
          view.change(state);
        } else {
          view.destroy();
          key = newKey;
          view = matcher[newKey].render(newCtx, state);
        }
      },
      destroy: function () {
        $lbKn$export$removeNode(ref);
        view.destroy();
      },
      request: function (query) {
        view.request(query);
      }
    };
  };

  return MatchTemplate;
}();

$HSRy$export$MatchTemplate = $HSRy$var$MatchTemplate;
$HSRy$exports.MatchTemplate = $HSRy$export$MatchTemplate; //# sourceMappingURL=match_template.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/match_value_template.js
var $oCpq$exports = {};
Object.defineProperty($oCpq$exports, "__esModule", {
  value: true
});
var $oCpq$export$MatchValueTemplate = void 0;
$oCpq$exports.MatchValueTemplate = $oCpq$export$MatchValueTemplate;

var $oCpq$var$MatchValueTemplate =
/** @class */
function () {
  function MatchValueTemplate(path, matcher, orElse) {
    var _this = this;

    this.path = path;
    this.matcher = $g3Xg$export$keys(matcher).reduce(function (acc, key) {
      acc[key] = $yiha$export$childOrBuilderToTemplate(_this.matcher[key]);
      return acc;
    }, {});
    this.orElse = $yiha$export$childOrBuilderToTemplate(orElse);
  }

  MatchValueTemplate.prototype.render = function (ctx, state) {
    var _this = this;

    var _a = this,
        matcher = _a.matcher,
        orElse = _a.orElse;

    var _b = ctx.withAppendToReference(),
        newCtx = _b.ctx,
        ref = _b.ref;

    var oldKey = this.path.reduce(function (acc, key) {
      return acc[key];
    }, state);
    var template = this.matcher[oldKey] || this.orElse;
    var view = template.render(newCtx, state);
    return {
      change: function (state) {
        var newKey = _this.path.reduce(function (acc, key) {
          return acc[key];
        }, state);

        if (newKey === oldKey) {
          view.change(state);
        } else {
          view.destroy();
          oldKey = newKey;
          var template_1 = matcher[newKey] || orElse;
          view = template_1.render(newCtx, state);
        }
      },
      destroy: function () {
        $lbKn$export$removeNode(ref);
        view.destroy();
      },
      request: function (query) {
        view.request(query);
      }
    };
  };

  return MatchValueTemplate;
}();

$oCpq$export$MatchValueTemplate = $oCpq$var$MatchValueTemplate;
$oCpq$exports.MatchValueTemplate = $oCpq$export$MatchValueTemplate; //# sourceMappingURL=match_value_template.js.map

// ASSET: ../node_modules/tempo-dom/lib/impl/html.js
var $aXl4$export$El,
    $aXl4$exports = {};
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

Object.defineProperty($aXl4$exports, "__esModule", {
  value: true
});
var $aXl4$export$When = ($aXl4$export$Until = ($aXl4$export$Unless = ($aXl4$export$SimpleComponent = ($aXl4$export$PortalWithSelector = ($aXl4$export$Portal = ($aXl4$export$Fragment = ($aXl4$export$Lazy = ($aXl4$export$MatchAsyncResult = ($aXl4$export$MatchAsync = ($aXl4$export$MatchResult = ($aXl4$export$MatchMaybe = ($aXl4$export$MatchOption = ($aXl4$export$MatchValue = ($aXl4$export$MatchBool = ($aXl4$export$MatchKind = ($aXl4$export$Match = ($aXl4$export$MapQuery = ($aXl4$export$MapAction = ($aXl4$export$MapStateAndKeep = ($aXl4$export$MapField = ($aXl4$export$MapState = ($aXl4$export$Iterate = ($aXl4$export$Component = ($aXl4$export$LocalAdapter = ($aXl4$export$Adapter = ($aXl4$export$WBR = ($aXl4$export$VIDEO = ($aXl4$export$VAR = ($aXl4$export$UL = ($aXl4$export$U = ($aXl4$export$TRACK = ($aXl4$export$TR = ($aXl4$export$TITLE = ($aXl4$export$TIME = ($aXl4$export$THEAD = ($aXl4$export$TH = ($aXl4$export$TFOOT = ($aXl4$export$TEXTAREA = ($aXl4$export$TEMPLATE = ($aXl4$export$TD = ($aXl4$export$TBODY = ($aXl4$export$TABLE = ($aXl4$export$SUP = ($aXl4$export$SUMMARY = ($aXl4$export$SUB = ($aXl4$export$STYLE = ($aXl4$export$STRONG = ($aXl4$export$SPAN = ($aXl4$export$SOURCE = ($aXl4$export$SMALL = ($aXl4$export$SLOT = ($aXl4$export$SELECT = ($aXl4$export$SECTION = ($aXl4$export$SCRIPT = ($aXl4$export$SAMP = ($aXl4$export$S = ($aXl4$export$RUBY = ($aXl4$export$RT = ($aXl4$export$RP = ($aXl4$export$Q = ($aXl4$export$PROGRESS = ($aXl4$export$PRE = ($aXl4$export$PICTURE = ($aXl4$export$PARAM = ($aXl4$export$P = ($aXl4$export$OUTPUT = ($aXl4$export$OPTION = ($aXl4$export$OPTGROUP = ($aXl4$export$OL = ($aXl4$export$OBJECT = ($aXl4$export$NOSCRIPT = ($aXl4$export$NAV = ($aXl4$export$METER = ($aXl4$export$META = ($aXl4$export$MARK = ($aXl4$export$MAP = ($aXl4$export$MAIN = ($aXl4$export$LINK = ($aXl4$export$LI = ($aXl4$export$LEGEND = ($aXl4$export$LABEL = ($aXl4$export$KBD = ($aXl4$export$INS = ($aXl4$export$INPUT = ($aXl4$export$IMG = ($aXl4$export$IFRAME = ($aXl4$export$I = ($aXl4$export$HTML = ($aXl4$export$HR = ($aXl4$export$HGROUP = ($aXl4$export$HEADER = ($aXl4$export$HEAD = ($aXl4$export$H6 = ($aXl4$export$H5 = ($aXl4$export$H4 = ($aXl4$export$H3 = ($aXl4$export$H2 = ($aXl4$export$H1 = ($aXl4$export$FORM = ($aXl4$export$FOOTER = ($aXl4$export$FIGURE = ($aXl4$export$FIGCAPTION = ($aXl4$export$FIELDSET = ($aXl4$export$EMBED = ($aXl4$export$EM = ($aXl4$export$DT = ($aXl4$export$DL = ($aXl4$export$DIV = ($aXl4$export$DIALOG = ($aXl4$export$DFN = ($aXl4$export$DETAILS = ($aXl4$export$DEL = ($aXl4$export$DD = ($aXl4$export$DATALIST = ($aXl4$export$DATA = ($aXl4$export$COLGROUP = ($aXl4$export$COL = ($aXl4$export$CODE = ($aXl4$export$CITE = ($aXl4$export$CAPTION = ($aXl4$export$CANVAS = ($aXl4$export$BUTTON = ($aXl4$export$BR = ($aXl4$export$BODY = ($aXl4$export$BLOCKQUOTE = ($aXl4$export$BDO = ($aXl4$export$BDI = ($aXl4$export$BASE = ($aXl4$export$B = ($aXl4$export$AUDIO = ($aXl4$export$ASIDE = ($aXl4$export$ARTICLE = ($aXl4$export$AREA = ($aXl4$export$ADDRESS = ($aXl4$export$ABBR = ($aXl4$export$A = ($aXl4$export$El = void 0, $aXl4$exports.El = $aXl4$export$El), $aXl4$exports.A = $aXl4$export$A), $aXl4$exports.ABBR = $aXl4$export$ABBR), $aXl4$exports.ADDRESS = $aXl4$export$ADDRESS), $aXl4$exports.AREA = $aXl4$export$AREA), $aXl4$exports.ARTICLE = $aXl4$export$ARTICLE), $aXl4$exports.ASIDE = $aXl4$export$ASIDE), $aXl4$exports.AUDIO = $aXl4$export$AUDIO), $aXl4$exports.B = $aXl4$export$B), $aXl4$exports.BASE = $aXl4$export$BASE), $aXl4$exports.BDI = $aXl4$export$BDI), $aXl4$exports.BDO = $aXl4$export$BDO), $aXl4$exports.BLOCKQUOTE = $aXl4$export$BLOCKQUOTE), $aXl4$exports.BODY = $aXl4$export$BODY), $aXl4$exports.BR = $aXl4$export$BR), $aXl4$exports.BUTTON = $aXl4$export$BUTTON), $aXl4$exports.CANVAS = $aXl4$export$CANVAS), $aXl4$exports.CAPTION = $aXl4$export$CAPTION), $aXl4$exports.CITE = $aXl4$export$CITE), $aXl4$exports.CODE = $aXl4$export$CODE), $aXl4$exports.COL = $aXl4$export$COL), $aXl4$exports.COLGROUP = $aXl4$export$COLGROUP), $aXl4$exports.DATA = $aXl4$export$DATA), $aXl4$exports.DATALIST = $aXl4$export$DATALIST), $aXl4$exports.DD = $aXl4$export$DD), $aXl4$exports.DEL = $aXl4$export$DEL), $aXl4$exports.DETAILS = $aXl4$export$DETAILS), $aXl4$exports.DFN = $aXl4$export$DFN), $aXl4$exports.DIALOG = $aXl4$export$DIALOG), $aXl4$exports.DIV = $aXl4$export$DIV), $aXl4$exports.DL = $aXl4$export$DL), $aXl4$exports.DT = $aXl4$export$DT), $aXl4$exports.EM = $aXl4$export$EM), $aXl4$exports.EMBED = $aXl4$export$EMBED), $aXl4$exports.FIELDSET = $aXl4$export$FIELDSET), $aXl4$exports.FIGCAPTION = $aXl4$export$FIGCAPTION), $aXl4$exports.FIGURE = $aXl4$export$FIGURE), $aXl4$exports.FOOTER = $aXl4$export$FOOTER), $aXl4$exports.FORM = $aXl4$export$FORM), $aXl4$exports.H1 = $aXl4$export$H1), $aXl4$exports.H2 = $aXl4$export$H2), $aXl4$exports.H3 = $aXl4$export$H3), $aXl4$exports.H4 = $aXl4$export$H4), $aXl4$exports.H5 = $aXl4$export$H5), $aXl4$exports.H6 = $aXl4$export$H6), $aXl4$exports.HEAD = $aXl4$export$HEAD), $aXl4$exports.HEADER = $aXl4$export$HEADER), $aXl4$exports.HGROUP = $aXl4$export$HGROUP), $aXl4$exports.HR = $aXl4$export$HR), $aXl4$exports.HTML = $aXl4$export$HTML), $aXl4$exports.I = $aXl4$export$I), $aXl4$exports.IFRAME = $aXl4$export$IFRAME), $aXl4$exports.IMG = $aXl4$export$IMG), $aXl4$exports.INPUT = $aXl4$export$INPUT), $aXl4$exports.INS = $aXl4$export$INS), $aXl4$exports.KBD = $aXl4$export$KBD), $aXl4$exports.LABEL = $aXl4$export$LABEL), $aXl4$exports.LEGEND = $aXl4$export$LEGEND), $aXl4$exports.LI = $aXl4$export$LI), $aXl4$exports.LINK = $aXl4$export$LINK), $aXl4$exports.MAIN = $aXl4$export$MAIN), $aXl4$exports.MAP = $aXl4$export$MAP), $aXl4$exports.MARK = $aXl4$export$MARK), $aXl4$exports.META = $aXl4$export$META), $aXl4$exports.METER = $aXl4$export$METER), $aXl4$exports.NAV = $aXl4$export$NAV), $aXl4$exports.NOSCRIPT = $aXl4$export$NOSCRIPT), $aXl4$exports.OBJECT = $aXl4$export$OBJECT), $aXl4$exports.OL = $aXl4$export$OL), $aXl4$exports.OPTGROUP = $aXl4$export$OPTGROUP), $aXl4$exports.OPTION = $aXl4$export$OPTION), $aXl4$exports.OUTPUT = $aXl4$export$OUTPUT), $aXl4$exports.P = $aXl4$export$P), $aXl4$exports.PARAM = $aXl4$export$PARAM), $aXl4$exports.PICTURE = $aXl4$export$PICTURE), $aXl4$exports.PRE = $aXl4$export$PRE), $aXl4$exports.PROGRESS = $aXl4$export$PROGRESS), $aXl4$exports.Q = $aXl4$export$Q), $aXl4$exports.RP = $aXl4$export$RP), $aXl4$exports.RT = $aXl4$export$RT), $aXl4$exports.RUBY = $aXl4$export$RUBY), $aXl4$exports.S = $aXl4$export$S), $aXl4$exports.SAMP = $aXl4$export$SAMP), $aXl4$exports.SCRIPT = $aXl4$export$SCRIPT), $aXl4$exports.SECTION = $aXl4$export$SECTION), $aXl4$exports.SELECT = $aXl4$export$SELECT), $aXl4$exports.SLOT = $aXl4$export$SLOT), $aXl4$exports.SMALL = $aXl4$export$SMALL), $aXl4$exports.SOURCE = $aXl4$export$SOURCE), $aXl4$exports.SPAN = $aXl4$export$SPAN), $aXl4$exports.STRONG = $aXl4$export$STRONG), $aXl4$exports.STYLE = $aXl4$export$STYLE), $aXl4$exports.SUB = $aXl4$export$SUB), $aXl4$exports.SUMMARY = $aXl4$export$SUMMARY), $aXl4$exports.SUP = $aXl4$export$SUP), $aXl4$exports.TABLE = $aXl4$export$TABLE), $aXl4$exports.TBODY = $aXl4$export$TBODY), $aXl4$exports.TD = $aXl4$export$TD), $aXl4$exports.TEMPLATE = $aXl4$export$TEMPLATE), $aXl4$exports.TEXTAREA = $aXl4$export$TEXTAREA), $aXl4$exports.TFOOT = $aXl4$export$TFOOT), $aXl4$exports.TH = $aXl4$export$TH), $aXl4$exports.THEAD = $aXl4$export$THEAD), $aXl4$exports.TIME = $aXl4$export$TIME), $aXl4$exports.TITLE = $aXl4$export$TITLE), $aXl4$exports.TR = $aXl4$export$TR), $aXl4$exports.TRACK = $aXl4$export$TRACK), $aXl4$exports.U = $aXl4$export$U), $aXl4$exports.UL = $aXl4$export$UL), $aXl4$exports.VAR = $aXl4$export$VAR), $aXl4$exports.VIDEO = $aXl4$export$VIDEO), $aXl4$exports.WBR = $aXl4$export$WBR), $aXl4$exports.Adapter = $aXl4$export$Adapter), $aXl4$exports.LocalAdapter = $aXl4$export$LocalAdapter), $aXl4$exports.Component = $aXl4$export$Component), $aXl4$exports.Iterate = $aXl4$export$Iterate), $aXl4$exports.MapState = $aXl4$export$MapState), $aXl4$exports.MapField = $aXl4$export$MapField), $aXl4$exports.MapStateAndKeep = $aXl4$export$MapStateAndKeep), $aXl4$exports.MapAction = $aXl4$export$MapAction), $aXl4$exports.MapQuery = $aXl4$export$MapQuery), $aXl4$exports.Match = $aXl4$export$Match), $aXl4$exports.MatchKind = $aXl4$export$MatchKind), $aXl4$exports.MatchBool = $aXl4$export$MatchBool), $aXl4$exports.MatchValue = $aXl4$export$MatchValue), $aXl4$exports.MatchOption = $aXl4$export$MatchOption), $aXl4$exports.MatchMaybe = $aXl4$export$MatchMaybe), $aXl4$exports.MatchResult = $aXl4$export$MatchResult), $aXl4$exports.MatchAsync = $aXl4$export$MatchAsync), $aXl4$exports.MatchAsyncResult = $aXl4$export$MatchAsyncResult), $aXl4$exports.Lazy = $aXl4$export$Lazy), $aXl4$exports.Fragment = $aXl4$export$Fragment), $aXl4$exports.Portal = $aXl4$export$Portal), $aXl4$exports.PortalWithSelector = $aXl4$export$PortalWithSelector), $aXl4$exports.SimpleComponent = $aXl4$export$SimpleComponent), $aXl4$exports.Unless = $aXl4$export$Unless), $aXl4$exports.Until = $aXl4$export$Until);
$aXl4$exports.When = $aXl4$export$When;
Object.defineProperty($aXl4$exports, "El", {
  enumerable: true,
  get: function () {
    return $eyJE$export$El;
  }
});

// dom specific
function $aXl4$var$A(init) {
  var builder = new $eyJE$export$HTMLAnchorElementBuilder('a');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$A = $aXl4$var$A;
$aXl4$exports.A = $aXl4$export$A;

function $aXl4$var$ABBR(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('abbr');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$ABBR = $aXl4$var$ABBR;
$aXl4$exports.ABBR = $aXl4$export$ABBR;

function $aXl4$var$ADDRESS(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('address');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$ADDRESS = $aXl4$var$ADDRESS;
$aXl4$exports.ADDRESS = $aXl4$export$ADDRESS;

function $aXl4$var$AREA(init) {
  var builder = new $eyJE$export$HTMLAreaElementBuilder('area');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$AREA = $aXl4$var$AREA;
$aXl4$exports.AREA = $aXl4$export$AREA;

function $aXl4$var$ARTICLE(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('article');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$ARTICLE = $aXl4$var$ARTICLE;
$aXl4$exports.ARTICLE = $aXl4$export$ARTICLE;

function $aXl4$var$ASIDE(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('aside');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$ASIDE = $aXl4$var$ASIDE;
$aXl4$exports.ASIDE = $aXl4$export$ASIDE;

function $aXl4$var$AUDIO(init) {
  var builder = new $eyJE$export$HTMLAudioElementBuilder('audio');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$AUDIO = $aXl4$var$AUDIO;
$aXl4$exports.AUDIO = $aXl4$export$AUDIO;

function $aXl4$var$B(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('b');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$B = $aXl4$var$B;
$aXl4$exports.B = $aXl4$export$B;

function $aXl4$var$BASE(init) {
  var builder = new $eyJE$export$HTMLBaseElementBuilder('base');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$BASE = $aXl4$var$BASE;
$aXl4$exports.BASE = $aXl4$export$BASE;

function $aXl4$var$BDI(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('bdi');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$BDI = $aXl4$var$BDI;
$aXl4$exports.BDI = $aXl4$export$BDI;

function $aXl4$var$BDO(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('bdo');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$BDO = $aXl4$var$BDO;
$aXl4$exports.BDO = $aXl4$export$BDO;

function $aXl4$var$BLOCKQUOTE(init) {
  var builder = new $eyJE$export$HTMLQuoteElementBuilder('blockquote');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$BLOCKQUOTE = $aXl4$var$BLOCKQUOTE;
$aXl4$exports.BLOCKQUOTE = $aXl4$export$BLOCKQUOTE;

function $aXl4$var$BODY(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('body');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$BODY = $aXl4$var$BODY;
$aXl4$exports.BODY = $aXl4$export$BODY;

function $aXl4$var$BR(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('br');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$BR = $aXl4$var$BR;
$aXl4$exports.BR = $aXl4$export$BR;

function $aXl4$var$BUTTON(init) {
  var builder = new $eyJE$export$HTMLButtonElementBuilder('button');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$BUTTON = $aXl4$var$BUTTON;
$aXl4$exports.BUTTON = $aXl4$export$BUTTON;

function $aXl4$var$CANVAS(init) {
  var builder = new $eyJE$export$HTMLCanvasElementBuilder('canvas');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$CANVAS = $aXl4$var$CANVAS;
$aXl4$exports.CANVAS = $aXl4$export$CANVAS;

function $aXl4$var$CAPTION(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('caption');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$CAPTION = $aXl4$var$CAPTION;
$aXl4$exports.CAPTION = $aXl4$export$CAPTION;

function $aXl4$var$CITE(init) {
  var builder = new $eyJE$export$HTMLQuoteElementBuilder('cite');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$CITE = $aXl4$var$CITE;
$aXl4$exports.CITE = $aXl4$export$CITE;

function $aXl4$var$CODE(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('code');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$CODE = $aXl4$var$CODE;
$aXl4$exports.CODE = $aXl4$export$CODE;

function $aXl4$var$COL(init) {
  var builder = new $eyJE$export$HTMLTableColElementBuilder('col');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$COL = $aXl4$var$COL;
$aXl4$exports.COL = $aXl4$export$COL;

function $aXl4$var$COLGROUP(init) {
  var builder = new $eyJE$export$HTMLTableColElementBuilder('colgroup');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$COLGROUP = $aXl4$var$COLGROUP;
$aXl4$exports.COLGROUP = $aXl4$export$COLGROUP;

function $aXl4$var$DATA(init) {
  var builder = new $eyJE$export$HTMLDataElementBuilder('data');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$DATA = $aXl4$var$DATA;
$aXl4$exports.DATA = $aXl4$export$DATA;

function $aXl4$var$DATALIST(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('datalist');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$DATALIST = $aXl4$var$DATALIST;
$aXl4$exports.DATALIST = $aXl4$export$DATALIST;

function $aXl4$var$DD(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('dd');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$DD = $aXl4$var$DD;
$aXl4$exports.DD = $aXl4$export$DD;

function $aXl4$var$DEL(init) {
  var builder = new $eyJE$export$HTMLModElementBuilder('del');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$DEL = $aXl4$var$DEL;
$aXl4$exports.DEL = $aXl4$export$DEL;

function $aXl4$var$DETAILS(init) {
  var builder = new $eyJE$export$HTMLDetailsElementBuilder('details');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$DETAILS = $aXl4$var$DETAILS;
$aXl4$exports.DETAILS = $aXl4$export$DETAILS;

function $aXl4$var$DFN(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('dfn');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$DFN = $aXl4$var$DFN;
$aXl4$exports.DFN = $aXl4$export$DFN;

function $aXl4$var$DIALOG(init) {
  var builder = new $eyJE$export$HTMLDialogElementBuilder('dialog');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$DIALOG = $aXl4$var$DIALOG;
$aXl4$exports.DIALOG = $aXl4$export$DIALOG;

function $aXl4$var$DIV(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('div');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$DIV = $aXl4$var$DIV;
$aXl4$exports.DIV = $aXl4$export$DIV;

function $aXl4$var$DL(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('dl');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$DL = $aXl4$var$DL;
$aXl4$exports.DL = $aXl4$export$DL;

function $aXl4$var$DT(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('dt');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$DT = $aXl4$var$DT;
$aXl4$exports.DT = $aXl4$export$DT;

function $aXl4$var$EM(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('em');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$EM = $aXl4$var$EM;
$aXl4$exports.EM = $aXl4$export$EM;

function $aXl4$var$EMBED(init) {
  var builder = new $eyJE$export$HTMLEmbedElementBuilder('embed');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$EMBED = $aXl4$var$EMBED;
$aXl4$exports.EMBED = $aXl4$export$EMBED;

function $aXl4$var$FIELDSET(init) {
  var builder = new $eyJE$export$HTMLFieldSetElementBuilder('fieldset');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$FIELDSET = $aXl4$var$FIELDSET;
$aXl4$exports.FIELDSET = $aXl4$export$FIELDSET;

function $aXl4$var$FIGCAPTION(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('figcaption');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$FIGCAPTION = $aXl4$var$FIGCAPTION;
$aXl4$exports.FIGCAPTION = $aXl4$export$FIGCAPTION;

function $aXl4$var$FIGURE(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('figure');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$FIGURE = $aXl4$var$FIGURE;
$aXl4$exports.FIGURE = $aXl4$export$FIGURE;

function $aXl4$var$FOOTER(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('footer');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$FOOTER = $aXl4$var$FOOTER;
$aXl4$exports.FOOTER = $aXl4$export$FOOTER;

function $aXl4$var$FORM(init) {
  var builder = new $eyJE$export$HTMLFormElementBuilder('form');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$FORM = $aXl4$var$FORM;
$aXl4$exports.FORM = $aXl4$export$FORM;

function $aXl4$var$H1(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('h1');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$H1 = $aXl4$var$H1;
$aXl4$exports.H1 = $aXl4$export$H1;

function $aXl4$var$H2(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('h2');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$H2 = $aXl4$var$H2;
$aXl4$exports.H2 = $aXl4$export$H2;

function $aXl4$var$H3(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('h3');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$H3 = $aXl4$var$H3;
$aXl4$exports.H3 = $aXl4$export$H3;

function $aXl4$var$H4(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('h4');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$H4 = $aXl4$var$H4;
$aXl4$exports.H4 = $aXl4$export$H4;

function $aXl4$var$H5(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('h5');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$H5 = $aXl4$var$H5;
$aXl4$exports.H5 = $aXl4$export$H5;

function $aXl4$var$H6(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('h6');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$H6 = $aXl4$var$H6;
$aXl4$exports.H6 = $aXl4$export$H6;

function $aXl4$var$HEAD(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('head');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$HEAD = $aXl4$var$HEAD;
$aXl4$exports.HEAD = $aXl4$export$HEAD;

function $aXl4$var$HEADER(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('header');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$HEADER = $aXl4$var$HEADER;
$aXl4$exports.HEADER = $aXl4$export$HEADER;

function $aXl4$var$HGROUP(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('hgroup');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$HGROUP = $aXl4$var$HGROUP;
$aXl4$exports.HGROUP = $aXl4$export$HGROUP;

function $aXl4$var$HR(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('hr');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$HR = $aXl4$var$HR;
$aXl4$exports.HR = $aXl4$export$HR;

function $aXl4$var$HTML(init) {
  var builder = new $eyJE$export$HTMLHtmlElementBuilder('html');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$HTML = $aXl4$var$HTML;
$aXl4$exports.HTML = $aXl4$export$HTML;

function $aXl4$var$I(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('i');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$I = $aXl4$var$I;
$aXl4$exports.I = $aXl4$export$I;

function $aXl4$var$IFRAME(init) {
  var builder = new $eyJE$export$HTMLIFrameElementBuilder('iframe');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$IFRAME = $aXl4$var$IFRAME;
$aXl4$exports.IFRAME = $aXl4$export$IFRAME;

function $aXl4$var$IMG(init) {
  var builder = new $eyJE$export$HTMLImageElementBuilder('img');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$IMG = $aXl4$var$IMG;
$aXl4$exports.IMG = $aXl4$export$IMG;

function $aXl4$var$INPUT(init) {
  var builder = new $eyJE$export$HTMLInputElementBuilder('input');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$INPUT = $aXl4$var$INPUT;
$aXl4$exports.INPUT = $aXl4$export$INPUT;

function $aXl4$var$INS(init) {
  var builder = new $eyJE$export$HTMLModElementBuilder('ins');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$INS = $aXl4$var$INS;
$aXl4$exports.INS = $aXl4$export$INS;

function $aXl4$var$KBD(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('kbd');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$KBD = $aXl4$var$KBD;
$aXl4$exports.KBD = $aXl4$export$KBD;

function $aXl4$var$LABEL(init) {
  var builder = new $eyJE$export$HTMLLabelElementBuilder('label');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$LABEL = $aXl4$var$LABEL;
$aXl4$exports.LABEL = $aXl4$export$LABEL;

function $aXl4$var$LEGEND(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('legend');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$LEGEND = $aXl4$var$LEGEND;
$aXl4$exports.LEGEND = $aXl4$export$LEGEND;

function $aXl4$var$LI(init) {
  var builder = new $eyJE$export$HTMLLIElementBuilder('li');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$LI = $aXl4$var$LI;
$aXl4$exports.LI = $aXl4$export$LI;

function $aXl4$var$LINK(init) {
  var builder = new $eyJE$export$HTMLLinkElementBuilder('link');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$LINK = $aXl4$var$LINK;
$aXl4$exports.LINK = $aXl4$export$LINK;

function $aXl4$var$MAIN(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('main');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$MAIN = $aXl4$var$MAIN;
$aXl4$exports.MAIN = $aXl4$export$MAIN;

function $aXl4$var$MAP(init) {
  var builder = new $eyJE$export$HTMLMapElementBuilder('map');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$MAP = $aXl4$var$MAP;
$aXl4$exports.MAP = $aXl4$export$MAP;

function $aXl4$var$MARK(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('mark');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$MARK = $aXl4$var$MARK;
$aXl4$exports.MARK = $aXl4$export$MARK;

function $aXl4$var$META(init) {
  var builder = new $eyJE$export$HTMLMetaElementBuilder('meta');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$META = $aXl4$var$META;
$aXl4$exports.META = $aXl4$export$META;

function $aXl4$var$METER(init) {
  var builder = new $eyJE$export$HTMLMeterElementBuilder('meter');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$METER = $aXl4$var$METER;
$aXl4$exports.METER = $aXl4$export$METER;

function $aXl4$var$NAV(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('nav');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$NAV = $aXl4$var$NAV;
$aXl4$exports.NAV = $aXl4$export$NAV;

function $aXl4$var$NOSCRIPT(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('noscript');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$NOSCRIPT = $aXl4$var$NOSCRIPT;
$aXl4$exports.NOSCRIPT = $aXl4$export$NOSCRIPT;

function $aXl4$var$OBJECT(init) {
  var builder = new $eyJE$export$HTMLObjectElementBuilder('object');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$OBJECT = $aXl4$var$OBJECT;
$aXl4$exports.OBJECT = $aXl4$export$OBJECT;

function $aXl4$var$OL(init) {
  var builder = new $eyJE$export$HTMLOListElementBuilder('ol');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$OL = $aXl4$var$OL;
$aXl4$exports.OL = $aXl4$export$OL;

function $aXl4$var$OPTGROUP(init) {
  var builder = new $eyJE$export$HTMLOptGroupElementBuilder('optgroup');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$OPTGROUP = $aXl4$var$OPTGROUP;
$aXl4$exports.OPTGROUP = $aXl4$export$OPTGROUP;

function $aXl4$var$OPTION(init) {
  var builder = new $eyJE$export$HTMLOptionElementBuilder('option');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$OPTION = $aXl4$var$OPTION;
$aXl4$exports.OPTION = $aXl4$export$OPTION;

function $aXl4$var$OUTPUT(init) {
  var builder = new $eyJE$export$HTMLOutputElementBuilder('output');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$OUTPUT = $aXl4$var$OUTPUT;
$aXl4$exports.OUTPUT = $aXl4$export$OUTPUT;

function $aXl4$var$P(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('p');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$P = $aXl4$var$P;
$aXl4$exports.P = $aXl4$export$P;

function $aXl4$var$PARAM(init) {
  var builder = new $eyJE$export$HTMLParamElementBuilder('param');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$PARAM = $aXl4$var$PARAM;
$aXl4$exports.PARAM = $aXl4$export$PARAM;

function $aXl4$var$PICTURE(init) {
  var builder = new $eyJE$export$HTMLPictureElementBuilder('picture');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$PICTURE = $aXl4$var$PICTURE;
$aXl4$exports.PICTURE = $aXl4$export$PICTURE;

function $aXl4$var$PRE(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('pre');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$PRE = $aXl4$var$PRE;
$aXl4$exports.PRE = $aXl4$export$PRE;

function $aXl4$var$PROGRESS(init) {
  var builder = new $eyJE$export$HTMLProgressElementBuilder('progress');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$PROGRESS = $aXl4$var$PROGRESS;
$aXl4$exports.PROGRESS = $aXl4$export$PROGRESS;

function $aXl4$var$Q(init) {
  var builder = new $eyJE$export$HTMLQuoteElementBuilder('q');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$Q = $aXl4$var$Q;
$aXl4$exports.Q = $aXl4$export$Q;

function $aXl4$var$RP(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('rp');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$RP = $aXl4$var$RP;
$aXl4$exports.RP = $aXl4$export$RP;

function $aXl4$var$RT(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('rt');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$RT = $aXl4$var$RT;
$aXl4$exports.RT = $aXl4$export$RT;

function $aXl4$var$RUBY(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('ruby');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$RUBY = $aXl4$var$RUBY;
$aXl4$exports.RUBY = $aXl4$export$RUBY;

function $aXl4$var$S(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('s');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$S = $aXl4$var$S;
$aXl4$exports.S = $aXl4$export$S;

function $aXl4$var$SAMP(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('samp');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SAMP = $aXl4$var$SAMP;
$aXl4$exports.SAMP = $aXl4$export$SAMP;

function $aXl4$var$SCRIPT(init) {
  var builder = new $eyJE$export$HTMLScriptElementBuilder('script');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SCRIPT = $aXl4$var$SCRIPT;
$aXl4$exports.SCRIPT = $aXl4$export$SCRIPT;

function $aXl4$var$SECTION(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('section');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SECTION = $aXl4$var$SECTION;
$aXl4$exports.SECTION = $aXl4$export$SECTION;

function $aXl4$var$SELECT(init) {
  var builder = new $eyJE$export$HTMLSelectElementBuilder('select');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SELECT = $aXl4$var$SELECT;
$aXl4$exports.SELECT = $aXl4$export$SELECT;

function $aXl4$var$SLOT(init) {
  var builder = new $eyJE$export$HTMLSlotElementBuilder('slot');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SLOT = $aXl4$var$SLOT;
$aXl4$exports.SLOT = $aXl4$export$SLOT;

function $aXl4$var$SMALL(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('small');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SMALL = $aXl4$var$SMALL;
$aXl4$exports.SMALL = $aXl4$export$SMALL;

function $aXl4$var$SOURCE(init) {
  var builder = new $eyJE$export$HTMLSourceElementBuilder('source');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SOURCE = $aXl4$var$SOURCE;
$aXl4$exports.SOURCE = $aXl4$export$SOURCE;

function $aXl4$var$SPAN(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('span');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SPAN = $aXl4$var$SPAN;
$aXl4$exports.SPAN = $aXl4$export$SPAN;

function $aXl4$var$STRONG(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('strong');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$STRONG = $aXl4$var$STRONG;
$aXl4$exports.STRONG = $aXl4$export$STRONG;

function $aXl4$var$STYLE(init) {
  var builder = new $eyJE$export$HTMLStyleElementBuilder('style');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$STYLE = $aXl4$var$STYLE;
$aXl4$exports.STYLE = $aXl4$export$STYLE;

function $aXl4$var$SUB(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('sub');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SUB = $aXl4$var$SUB;
$aXl4$exports.SUB = $aXl4$export$SUB;

function $aXl4$var$SUMMARY(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('summary');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SUMMARY = $aXl4$var$SUMMARY;
$aXl4$exports.SUMMARY = $aXl4$export$SUMMARY;

function $aXl4$var$SUP(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('sup');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$SUP = $aXl4$var$SUP;
$aXl4$exports.SUP = $aXl4$export$SUP;

function $aXl4$var$TABLE(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('table');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TABLE = $aXl4$var$TABLE;
$aXl4$exports.TABLE = $aXl4$export$TABLE;

function $aXl4$var$TBODY(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('tbody');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TBODY = $aXl4$var$TBODY;
$aXl4$exports.TBODY = $aXl4$export$TBODY;

function $aXl4$var$TD(init) {
  var builder = new $eyJE$export$HTMLTableDataCellElementBuilder('td');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TD = $aXl4$var$TD;
$aXl4$exports.TD = $aXl4$export$TD;

function $aXl4$var$TEMPLATE(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('template');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TEMPLATE = $aXl4$var$TEMPLATE;
$aXl4$exports.TEMPLATE = $aXl4$export$TEMPLATE;

function $aXl4$var$TEXTAREA(init) {
  var builder = new $eyJE$export$HTMLTextAreaElementBuilder('textarea');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TEXTAREA = $aXl4$var$TEXTAREA;
$aXl4$exports.TEXTAREA = $aXl4$export$TEXTAREA;

function $aXl4$var$TFOOT(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('tfoot');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TFOOT = $aXl4$var$TFOOT;
$aXl4$exports.TFOOT = $aXl4$export$TFOOT;

function $aXl4$var$TH(init) {
  var builder = new $eyJE$export$HTMLTableHeaderCellElementBuilder('th');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TH = $aXl4$var$TH;
$aXl4$exports.TH = $aXl4$export$TH;

function $aXl4$var$THEAD(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('thead');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$THEAD = $aXl4$var$THEAD;
$aXl4$exports.THEAD = $aXl4$export$THEAD;

function $aXl4$var$TIME(init) {
  var builder = new $eyJE$export$HTMLTimeElementBuilder('time');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TIME = $aXl4$var$TIME;
$aXl4$exports.TIME = $aXl4$export$TIME;

function $aXl4$var$TITLE(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('title');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TITLE = $aXl4$var$TITLE;
$aXl4$exports.TITLE = $aXl4$export$TITLE;

function $aXl4$var$TR(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('tr');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TR = $aXl4$var$TR;
$aXl4$exports.TR = $aXl4$export$TR;

function $aXl4$var$TRACK(init) {
  var builder = new $eyJE$export$HTMLTrackElementBuilder('track');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$TRACK = $aXl4$var$TRACK;
$aXl4$exports.TRACK = $aXl4$export$TRACK;

function $aXl4$var$U(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('u');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$U = $aXl4$var$U;
$aXl4$exports.U = $aXl4$export$U;

function $aXl4$var$UL(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('ul');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$UL = $aXl4$var$UL;
$aXl4$exports.UL = $aXl4$export$UL;

function $aXl4$var$VAR(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('varEl');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$VAR = $aXl4$var$VAR;
$aXl4$exports.VAR = $aXl4$export$VAR;

function $aXl4$var$VIDEO(init) {
  var builder = new $eyJE$export$HTMLVideoElementBuilder('video');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$VIDEO = $aXl4$var$VIDEO;
$aXl4$exports.VIDEO = $aXl4$export$VIDEO;

function $aXl4$var$WBR(init) {
  var builder = new $eyJE$export$HTMLElementBuilder('wbr');
  if (init !== undefined) init(builder);
  return builder;
}

var $aXl4$export$WBR = $aXl4$var$WBR;
$aXl4$exports.WBR = $aXl4$export$WBR;

function $aXl4$var$Adapter(props) {
  return new $kWOh$export$AdapterTemplate(props.bootstrapState, props.mergeStates, props.propagate || function () {
    return undefined;
  }, props.child);
}

var $aXl4$export$Adapter = $aXl4$var$Adapter;
$aXl4$exports.Adapter = $aXl4$export$Adapter;

function $aXl4$var$LocalAdapter(props) {
  return new $kWOh$export$AdapterTemplate(function (state) {
    return state;
  }, function (_a) {
    var outerState = _a.outerState;
    return outerState;
  }, props.propagate || function () {
    return undefined;
  }, props.child);
}

var $aXl4$export$LocalAdapter = $aXl4$var$LocalAdapter;
$aXl4$exports.LocalAdapter = $aXl4$export$LocalAdapter;

function $aXl4$var$Component(reducer, init) {
  var builder = new $eyJE$export$ComponentHTMLBuilder(reducer);
  init(builder);
  return builder;
}

var $aXl4$export$Component = $aXl4$var$Component;
$aXl4$exports.Component = $aXl4$export$Component;

function $aXl4$var$Iterate(map, init) {
  return $aXl4$var$MapState(function (outer) {
    var items = $nFed$export$resolveAttribute(map)(outer);
    return items !== undefined ? [items, outer] : undefined;
  }, function (n) {
    n.Until(function (_a) {
      var _b = _a.state,
          items = _b[0],
          state = _b[1],
          index = _a.index;
      return items[index] && [items[index], state, index];
    }, init);
  });
}

var $aXl4$export$Iterate = $aXl4$var$Iterate;
$aXl4$exports.Iterate = $aXl4$export$Iterate;

function $aXl4$var$MapState(map, init) {
  var builder = new $eyJE$export$MapStateHTMLBuilder(map);
  init(builder);
  return builder;
}

var $aXl4$export$MapState = $aXl4$var$MapState;
$aXl4$exports.MapState = $aXl4$export$MapState;

function $aXl4$var$MapField(field, init) {
  return $aXl4$var$MapState(function (v) {
    return v[field];
  }, init);
}

var $aXl4$export$MapField = $aXl4$var$MapField;
$aXl4$exports.MapField = $aXl4$export$MapField;

function $aXl4$var$MapStateAndKeep(map, init) {
  return $aXl4$var$MapState(function (state) {
    var inner = $nFed$export$resolveAttribute(map)(state);

    if (inner !== undefined) {
      return [inner, state];
    } else {
      return undefined;
    }
  }, init);
}

var $aXl4$export$MapStateAndKeep = $aXl4$var$MapStateAndKeep;
$aXl4$exports.MapStateAndKeep = $aXl4$export$MapStateAndKeep;

function $aXl4$var$MapAction(map, init) {
  var builder = new $eyJE$export$MapActionHTMLBuilder(map);
  init(builder);
  return builder;
}

var $aXl4$export$MapAction = $aXl4$var$MapAction;
$aXl4$exports.MapAction = $aXl4$export$MapAction;

function $aXl4$var$MapQuery(map, init) {
  var builder = new $eyJE$export$MapQueryHTMLBuilder(map);
  init(builder);
  return builder;
}

var $aXl4$export$MapQuery = $aXl4$var$MapQuery;
$aXl4$exports.MapQuery = $aXl4$export$MapQuery;

function $aXl4$var$Match(props) {
  return new $HSRy$export$MatchTemplate(props.path, props.matcher);
}

var $aXl4$export$Match = $aXl4$var$Match;
$aXl4$exports.Match = $aXl4$export$Match;

function $aXl4$var$MatchKind(matcher) {
  return $aXl4$var$Match({
    path: ['kind'],
    matcher: matcher
  });
}

var $aXl4$export$MatchKind = $aXl4$var$MatchKind;
$aXl4$exports.MatchKind = $aXl4$export$MatchKind;

function $aXl4$var$MatchBool(props) {
  return new $ZVXL$export$MatchBoolTemplate(props.condition, props.true, props.false);
}

var $aXl4$export$MatchBool = $aXl4$var$MatchBool;
$aXl4$exports.MatchBool = $aXl4$export$MatchBool;

function $aXl4$var$MatchValue(props) {
  return new $oCpq$export$MatchValueTemplate(props.path, props.matcher, props.orElse);
}

var $aXl4$export$MatchValue = $aXl4$var$MatchValue;
$aXl4$exports.MatchValue = $aXl4$export$MatchValue;

function $aXl4$var$MatchOption(props) {
  return $aXl4$var$MatchKind({
    Some: $aXl4$var$MapField('value', function (n) {
      return n.Append(props.Some);
    }),
    None: $aXl4$var$MapState(function () {
      return null;
    }, function (n) {
      return n.Append(props.None);
    })
  });
}

var $aXl4$export$MatchOption = $aXl4$var$MatchOption;
$aXl4$exports.MatchOption = $aXl4$export$MatchOption;

function $aXl4$var$MatchMaybe(props) {
  return new $ZVXL$export$MatchBoolTemplate(function (v) {
    return v !== undefined;
  }, $aXl4$var$MapState(function (opt) {
    return opt;
  }, function (n) {
    return n.Append(props.Just);
  }), props.Nothing);
}

var $aXl4$export$MatchMaybe = $aXl4$var$MatchMaybe;
$aXl4$exports.MatchMaybe = $aXl4$export$MatchMaybe;

function $aXl4$var$MatchResult(props) {
  return $aXl4$var$MatchKind({
    Success: $aXl4$var$MapField('value', function (n) {
      return n.Append(props.Success);
    }),
    Failure: $aXl4$var$MapField('error', function (n) {
      return n.Append(props.Failure);
    })
  });
}

var $aXl4$export$MatchResult = $aXl4$var$MatchResult;
$aXl4$exports.MatchResult = $aXl4$export$MatchResult;

function $aXl4$var$MatchAsync(props) {
  return $aXl4$var$MatchKind({
    Outcome: $aXl4$var$MapField('value', function (n) {
      return n.Append(props.Outcome);
    }),
    Loading: $aXl4$var$MapField('progress', function (n) {
      return n.Append(props.Loading);
    }),
    NotAsked: $aXl4$var$MapState(function () {
      return null;
    }, function (n) {
      return n.Append(props.NotAsked);
    })
  });
}

var $aXl4$export$MatchAsync = $aXl4$var$MatchAsync;
$aXl4$exports.MatchAsync = $aXl4$export$MatchAsync;

function $aXl4$var$MatchAsyncResult(props) {
  return $aXl4$var$MatchKind({
    Outcome: $aXl4$var$MapState(function (o) {
      return o.value;
    }, function (n) {
      return n.Append($aXl4$var$MatchResult({
        Success: props.Success,
        Failure: props.Failure
      }));
    }),
    Loading: $aXl4$var$MapField('progress', function ($) {
      return $.Append(props.Loading);
    }),
    NotAsked: $aXl4$var$MapState(function () {
      return null;
    }, function (n) {
      return n.Append(props.NotAsked);
    })
  });
}

var $aXl4$export$MatchAsyncResult = $aXl4$var$MatchAsyncResult;
$aXl4$exports.MatchAsyncResult = $aXl4$export$MatchAsyncResult;

function $aXl4$var$Lazy(lazyf) {
  return new $hzRP$export$LazyTemplate(lazyf);
}

var $aXl4$export$Lazy = $aXl4$var$Lazy;
$aXl4$exports.Lazy = $aXl4$export$Lazy;

function $aXl4$var$Fragment(init) {
  var builder = new $eyJE$export$FragmentHTMLBuilder();
  init(builder);
  return builder;
}

var $aXl4$export$Fragment = $aXl4$var$Fragment;
$aXl4$exports.Fragment = $aXl4$export$Fragment;

function $aXl4$var$Portal(appendChild, init) {
  var builder = new $eyJE$export$PortalBuilder(appendChild);
  init(builder);
  return builder;
}

var $aXl4$export$Portal = $aXl4$var$Portal;
$aXl4$exports.Portal = $aXl4$export$Portal;

function $aXl4$var$PortalWithSelector(selector, init) {
  return $aXl4$var$Portal(function (doc, node) {
    var el = doc.querySelector(selector);

    if (!el) {
      throw new Error("selector doesn't match any element: \"" + selector + "\"");
    }

    el.appendChild(node);
  }, init);
}

var $aXl4$export$PortalWithSelector = $aXl4$var$PortalWithSelector;
$aXl4$exports.PortalWithSelector = $aXl4$export$PortalWithSelector;

function $aXl4$var$SimpleComponent(init) {
  var builder = new $eyJE$export$SimpleComponentHTMLBuilder();
  init(builder);
  return builder;
}

var $aXl4$export$SimpleComponent = $aXl4$var$SimpleComponent;
$aXl4$exports.SimpleComponent = $aXl4$export$SimpleComponent;

function $aXl4$var$Unless(condition, init) {
  return $aXl4$var$When(function (s) {
    return !condition(s);
  }, init);
}

var $aXl4$export$Unless = $aXl4$var$Unless;
$aXl4$exports.Unless = $aXl4$export$Unless;

function $aXl4$var$Until(next, init) {
  var builder = new $eyJE$export$UntilHTMLBuilder(next);
  init(builder);
  return builder;
}

var $aXl4$export$Until = $aXl4$var$Until;
$aXl4$exports.Until = $aXl4$export$Until;

function $aXl4$var$When(condition, init) {
  var builder = new $eyJE$export$MapStateHTMLBuilder(function (s) {
    if (condition(s)) {
      return s;
    } else {
      return undefined;
    }
  });
  init(builder);
  return builder;
}

$aXl4$export$When = $aXl4$var$When;
$aXl4$exports.When = $aXl4$export$When; //# sourceMappingURL=html.js.map

// ASSET: ../node_modules/tempo-dom/lib/tempo.js
var $UPGL$exports = {};

var $UPGL$var$__assign = $UPGL$exports && $UPGL$exports.__assign || function () {
  $UPGL$var$__assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return $UPGL$var$__assign.apply(this, arguments);
};

Object.defineProperty($UPGL$exports, "__esModule", {
  value: true
});
var $UPGL$export$Tempo = void 0;
$UPGL$exports.Tempo = $UPGL$export$Tempo;
$UPGL$export$Tempo = {
  renderComponent: function (options) {
    var maybeElement = options.el,
        component = options.component,
        state = options.state;
    var doc = options.document || document;
    var el = maybeElement || doc.body;

    var append = function (node) {
      return el.appendChild(node);
    };

    var template = $yiha$export$childOrBuilderToTemplate(component);
    var view = template.render(new $OJrv$export$DOMContext(doc, append, function () {}), state);
    return {
      view: view,
      store: view.store
    };
  },
  render: function (options) {
    var el = options.el,
        state = options.state,
        reducer = options.reducer,
        equal = options.equal,
        document = options.document,
        template = options.template,
        delayed = options.delayed;
    var comp = $aXl4$export$Component(reducer, function ($) {
      if (equal !== undefined) $.equals = equal;
      if (delayed !== undefined) $.delayed = delayed;
      $.Append(template);
    });
    return $UPGL$export$Tempo.renderComponent({
      el: el,
      component: comp,
      state: state,
      document: document
    });
  },
  renderSimple: function (options) {
    var maybeElement = options.el,
        component = options.component,
        state = options.state;
    var doc = options.document || document;
    var el = maybeElement || doc.body;

    var append = function (node) {
      return el.appendChild(node);
    };

    var onChange = function (state) {};

    var template = $yiha$export$childOrBuilderToTemplate(component);
    var result = $UPGL$var$__assign($UPGL$var$__assign({}, template.render(new $OJrv$export$DOMContext(doc, append, function (state) {
      result.onChange(state);
    }), state)), {
      onChange: onChange
    });
    return result;
  }
};
$UPGL$exports.Tempo = $UPGL$export$Tempo; //# sourceMappingURL=tempo.js.map

// ASSET: ../node_modules/tempo-std/lib/maybe.js
var $KScB$exports = {};
Object.defineProperty($KScB$exports, "__esModule", {
  value: true
});
var $KScB$export$isJust = ($KScB$export$isNothing = ($KScB$export$just = ($KScB$export$nothing = void 0, $KScB$exports.nothing = $KScB$export$nothing), $KScB$exports.just = $KScB$export$just), $KScB$exports.isNothing = $KScB$export$isNothing);
$KScB$exports.isJust = $KScB$export$isJust;
var $KScB$export$nothing = undefined;
$KScB$exports.nothing = $KScB$export$nothing;

function $KScB$var$just(value) {
  return value;
}

var $KScB$export$just = $KScB$var$just;
$KScB$exports.just = $KScB$export$just;

function $KScB$var$isNothing(maybe) {
  return maybe == null;
}

var $KScB$export$isNothing = $KScB$var$isNothing;
$KScB$exports.isNothing = $KScB$export$isNothing;

function $KScB$var$isJust(maybe) {
  return maybe != null;
}

$KScB$export$isJust = $KScB$var$isJust;
$KScB$exports.isJust = $KScB$export$isJust;
// ASSET: ../node_modules/tempo-std/lib/objects.js
var $F6rw$exports = {};
Object.defineProperty($F6rw$exports, "__esModule", {
  value: true
});
var $F6rw$export$merge = ($F6rw$export$removeFields = ($F6rw$export$keys = void 0, $F6rw$exports.keys = $F6rw$export$keys), $F6rw$exports.removeFields = $F6rw$export$removeFields);
$F6rw$exports.merge = $F6rw$export$merge;

function $F6rw$var$keys(object) {
  return Object.keys(object);
}

var $F6rw$export$keys = $F6rw$var$keys;
$F6rw$exports.keys = $F6rw$export$keys;

function $F6rw$var$removeFields(ob) {
  var fields = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    fields[_i - 1] = arguments[_i];
  }

  return $F6rw$var$keys(ob).reduce(function (acc, key) {
    if (fields.indexOf(key) < 0) acc[key] = ob[key];
    return acc;
  }, {});
}

var $F6rw$export$removeFields = $F6rw$var$removeFields;
$F6rw$exports.removeFields = $F6rw$export$removeFields;

function $F6rw$var$merge(a, b) {
  return Object.assign({}, a, b);
}

$F6rw$export$merge = $F6rw$var$merge;
$F6rw$exports.merge = $F6rw$export$merge;
// ASSET: ../node_modules/tempo-std/lib/arrays.js
var $o25q$exports = {};
Object.defineProperty($o25q$exports, "__esModule", {
  value: true
});
var $o25q$export$ofIterableIterator = ($o25q$export$remove = ($o25q$export$distinctByPredicate = ($o25q$export$distinctPrimitive = ($o25q$export$fill = ($o25q$export$numbersRange = ($o25q$export$range = ($o25q$export$sort = ($o25q$export$makeCompare = ($o25q$export$concat = ($o25q$export$each = ($o25q$export$any = ($o25q$export$all = ($o25q$export$foldLeft = ($o25q$export$flatten = ($o25q$export$filter = ($o25q$export$hasValues = ($o25q$export$isEmpty = ($o25q$export$makeEquals = ($o25q$export$equals = ($o25q$export$tail = ($o25q$export$head = ($o25q$export$flatMap = ($o25q$export$map = void 0, $o25q$exports.map = $o25q$export$map), $o25q$exports.flatMap = $o25q$export$flatMap), $o25q$exports.head = $o25q$export$head), $o25q$exports.tail = $o25q$export$tail), $o25q$exports.equals = $o25q$export$equals), $o25q$exports.makeEquals = $o25q$export$makeEquals), $o25q$exports.isEmpty = $o25q$export$isEmpty), $o25q$exports.hasValues = $o25q$export$hasValues), $o25q$exports.filter = $o25q$export$filter), $o25q$exports.flatten = $o25q$export$flatten), $o25q$exports.foldLeft = $o25q$export$foldLeft), $o25q$exports.all = $o25q$export$all), $o25q$exports.any = $o25q$export$any), $o25q$exports.each = $o25q$export$each), $o25q$exports.concat = $o25q$export$concat), $o25q$exports.makeCompare = $o25q$export$makeCompare), $o25q$exports.sort = $o25q$export$sort), $o25q$exports.range = $o25q$export$range), $o25q$exports.numbersRange = $o25q$export$numbersRange), $o25q$exports.fill = $o25q$export$fill), $o25q$exports.distinctPrimitive = $o25q$export$distinctPrimitive), $o25q$exports.distinctByPredicate = $o25q$export$distinctByPredicate), $o25q$exports.remove = $o25q$export$remove);
$o25q$exports.ofIterableIterator = $o25q$export$ofIterableIterator;

function $o25q$var$map(arr, f) {
  var length = arr.length;
  var buff = new Array(length);

  for (var i = 0; i < length; i++) {
    buff[i] = f(arr[i]);
  }

  return buff;
}

var $o25q$export$map = $o25q$var$map;
$o25q$exports.map = $o25q$export$map;

function $o25q$var$flatMap(arr, f) {
  var buff = new Array();

  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var el = arr_1[_i];
    buff.push.apply(buff, f(el));
  }

  return buff;
}

var $o25q$export$flatMap = $o25q$var$flatMap;
$o25q$exports.flatMap = $o25q$export$flatMap;

function $o25q$var$head(arr) {
  return arr.length > 0 ? arr[0] : $KScB$export$nothing;
}

var $o25q$export$head = $o25q$var$head;
$o25q$exports.head = $o25q$export$head;

function $o25q$var$tail(arr) {
  return arr.slice(1);
}

var $o25q$export$tail = $o25q$var$tail;
$o25q$exports.tail = $o25q$export$tail;

function $o25q$var$equals(a, b, predicate) {
  if (a.length !== b.length) return false;else {
    for (var i = 0; i < a.length; i++) {
      if (!predicate(a[i], b[i])) return false;
    }

    return true;
  }
}

var $o25q$export$equals = $o25q$var$equals;
$o25q$exports.equals = $o25q$export$equals;

function $o25q$var$makeEquals(predicate) {
  return function (a, b) {
    return $o25q$var$equals(a, b, predicate);
  };
}

var $o25q$export$makeEquals = $o25q$var$makeEquals;
$o25q$exports.makeEquals = $o25q$export$makeEquals;

function $o25q$var$isEmpty(arr) {
  return arr.length === 0;
}

var $o25q$export$isEmpty = $o25q$var$isEmpty;
$o25q$exports.isEmpty = $o25q$export$isEmpty;

function $o25q$var$hasValues(arr) {
  return arr.length > 0;
}

var $o25q$export$hasValues = $o25q$var$hasValues;
$o25q$exports.hasValues = $o25q$export$hasValues;

function $o25q$var$filter(arr, predicate) {
  var buff = [];

  for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
    var a = arr_2[_i];
    if (predicate(a)) buff.push(a);
  }

  return buff;
}

var $o25q$export$filter = $o25q$var$filter;
$o25q$exports.filter = $o25q$export$filter;

function $o25q$var$flatten(arr) {
  var _a;

  return (_a = []).concat.apply(_a, arr);
}

var $o25q$export$flatten = $o25q$var$flatten;
$o25q$exports.flatten = $o25q$export$flatten;

function $o25q$var$foldLeft(arr, f, b) {
  for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
    var a = arr_3[_i];
    b = f(b, a);
  }

  return b;
}

var $o25q$export$foldLeft = $o25q$var$foldLeft;
$o25q$exports.foldLeft = $o25q$export$foldLeft;

function $o25q$var$all(arr, predicate) {
  for (var _i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
    var a = arr_4[_i];

    if (!predicate(a)) {
      return false;
    }
  }

  return true;
}

var $o25q$export$all = $o25q$var$all;
$o25q$exports.all = $o25q$export$all;

function $o25q$var$any(arr, predicate) {
  for (var _i = 0, arr_5 = arr; _i < arr_5.length; _i++) {
    var a = arr_5[_i];

    if (predicate(a)) {
      return true;
    }
  }

  return false;
}

var $o25q$export$any = $o25q$var$any;
$o25q$exports.any = $o25q$export$any;

function $o25q$var$each(arr, f) {
  for (var _i = 0, arr_6 = arr; _i < arr_6.length; _i++) {
    var a = arr_6[_i];
    f(a);
  }
}

var $o25q$export$each = $o25q$var$each;
$o25q$exports.each = $o25q$export$each;

function $o25q$var$concat() {
  var _a;

  var arrs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    arrs[_i] = arguments[_i];
  }

  return (_a = []).concat.apply(_a, arrs);
}

var $o25q$export$concat = $o25q$var$concat;
$o25q$exports.concat = $o25q$export$concat;

function $o25q$var$makeCompare(comparef, shorterFirst) {
  if (shorterFirst === void 0) {
    shorterFirst = true;
  }

  return function (a, b) {
    if (a.length < b.length) {
      return -1 * (shorterFirst ? 1 : -1);
    } else if (a.length > b.length) {
      return 1 * (shorterFirst ? 1 : -1);
    }

    for (var i = 0; i < a.length; i++) {
      var ord = comparef(a[i], b[i]);
      if (ord !== 0) return ord;
    }

    return 0;
  };
}

var $o25q$export$makeCompare = $o25q$var$makeCompare;
$o25q$exports.makeCompare = $o25q$export$makeCompare;

function $o25q$var$sort(compare, arr) {
  return arr.slice().sort(compare);
}

var $o25q$export$sort = $o25q$var$sort;
$o25q$exports.sort = $o25q$export$sort;

function $o25q$var$range(length, f) {
  var buff = new Array(length);

  for (var i = 0; i < length; i++) buff[i] = f(i);

  return buff;
}

var $o25q$export$range = $o25q$var$range;
$o25q$exports.range = $o25q$export$range;

function $o25q$var$numbersRange(length, startAt) {
  if (startAt === void 0) {
    startAt = 0;
  }

  return $o25q$var$range(length, function (i) {
    return startAt + i;
  });
}

var $o25q$export$numbersRange = $o25q$var$numbersRange;
$o25q$exports.numbersRange = $o25q$export$numbersRange;

function $o25q$var$fill(length, value) {
  return $o25q$var$range(length, function () {
    return value;
  });
}

var $o25q$export$fill = $o25q$var$fill;
$o25q$exports.fill = $o25q$export$fill;

function $o25q$var$distinctPrimitive(values) {
  return Array.from(new Set(values));
}

var $o25q$export$distinctPrimitive = $o25q$var$distinctPrimitive;
$o25q$exports.distinctPrimitive = $o25q$export$distinctPrimitive;

function $o25q$var$distinctByPredicate(values, predicate) {
  var map = {};
  values.forEach(function (v) {
    map[predicate(v)] = v;
  });
  return $F6rw$export$keys(map).map(function (k) {
    return map[k];
  });
}

var $o25q$export$distinctByPredicate = $o25q$var$distinctByPredicate;
$o25q$exports.distinctByPredicate = $o25q$export$distinctByPredicate;

function $o25q$var$remove(arr, item, predicate) {
  var index;

  if (predicate !== undefined) {
    index = arr.findIndex(predicate);
  } else {
    index = arr.indexOf(item);
  }

  if (index < 0) {
    return false;
  } else {
    arr.splice(index, 1);
    return true;
  }
}

var $o25q$export$remove = $o25q$var$remove;
$o25q$exports.remove = $o25q$export$remove;

function $o25q$var$ofIterableIterator(it) {
  var buff = [];

  for (var r = it.next(); !r.done; r = it.next()) {
    buff.push(r.value);
  }

  return buff;
}

$o25q$export$ofIterableIterator = $o25q$var$ofIterableIterator;
$o25q$exports.ofIterableIterator = $o25q$export$ofIterableIterator;
// ASSET: ../node_modules/tempo-std/lib/result.js
var $NUZN$exports = {};
Object.defineProperty($NUZN$exports, "__esModule", {
  value: true
});
var $NUZN$export$spread = ($NUZN$export$combine = ($NUZN$export$swap = ($NUZN$export$recoverFromError = ($NUZN$export$recover = ($NUZN$export$firstSuccess = ($NUZN$export$each = ($NUZN$export$any = ($NUZN$export$all = ($NUZN$export$foldLeft = ($NUZN$export$cataLazy = ($NUZN$export$cata = ($NUZN$export$match = ($NUZN$export$flatten = ($NUZN$export$toOption = ($NUZN$export$toMaybe = ($NUZN$export$toArray = ($NUZN$export$toBoolean = ($NUZN$export$getOrElseLazy = ($NUZN$export$getOrElse = ($NUZN$export$getOrThrow = ($NUZN$export$filterLazy = ($NUZN$export$filter = ($NUZN$export$isSuccess = ($NUZN$export$isFailure = ($NUZN$export$makeEquals = ($NUZN$export$equals = ($NUZN$export$flatMapNWithCombine = ($NUZN$export$flatMapN = ($NUZN$export$flatMap = ($NUZN$export$mapNWithCombine = ($NUZN$export$mapN = ($NUZN$export$mapError = ($NUZN$export$map = ($NUZN$export$forEach = ($NUZN$export$apNWithCombine = ($NUZN$export$apN = ($NUZN$export$ap = ($NUZN$export$ofNullable = ($NUZN$export$failure = ($NUZN$export$success = void 0, $NUZN$exports.success = $NUZN$export$success), $NUZN$exports.failure = $NUZN$export$failure), $NUZN$exports.ofNullable = $NUZN$export$ofNullable), $NUZN$exports.ap = $NUZN$export$ap), $NUZN$exports.apN = $NUZN$export$apN), $NUZN$exports.apNWithCombine = $NUZN$export$apNWithCombine), $NUZN$exports.forEach = $NUZN$export$forEach), $NUZN$exports.map = $NUZN$export$map), $NUZN$exports.mapError = $NUZN$export$mapError), $NUZN$exports.mapN = $NUZN$export$mapN), $NUZN$exports.mapNWithCombine = $NUZN$export$mapNWithCombine), $NUZN$exports.flatMap = $NUZN$export$flatMap), $NUZN$exports.flatMapN = $NUZN$export$flatMapN), $NUZN$exports.flatMapNWithCombine = $NUZN$export$flatMapNWithCombine), $NUZN$exports.equals = $NUZN$export$equals), $NUZN$exports.makeEquals = $NUZN$export$makeEquals), $NUZN$exports.isFailure = $NUZN$export$isFailure), $NUZN$exports.isSuccess = $NUZN$export$isSuccess), $NUZN$exports.filter = $NUZN$export$filter), $NUZN$exports.filterLazy = $NUZN$export$filterLazy), $NUZN$exports.getOrThrow = $NUZN$export$getOrThrow), $NUZN$exports.getOrElse = $NUZN$export$getOrElse), $NUZN$exports.getOrElseLazy = $NUZN$export$getOrElseLazy), $NUZN$exports.toBoolean = $NUZN$export$toBoolean), $NUZN$exports.toArray = $NUZN$export$toArray), $NUZN$exports.toMaybe = $NUZN$export$toMaybe), $NUZN$exports.toOption = $NUZN$export$toOption), $NUZN$exports.flatten = $NUZN$export$flatten), $NUZN$exports.match = $NUZN$export$match), $NUZN$exports.cata = $NUZN$export$cata), $NUZN$exports.cataLazy = $NUZN$export$cataLazy), $NUZN$exports.foldLeft = $NUZN$export$foldLeft), $NUZN$exports.all = $NUZN$export$all), $NUZN$exports.any = $NUZN$export$any), $NUZN$exports.each = $NUZN$export$each), $NUZN$exports.firstSuccess = $NUZN$export$firstSuccess), $NUZN$exports.recover = $NUZN$export$recover), $NUZN$exports.recoverFromError = $NUZN$export$recoverFromError), $NUZN$exports.swap = $NUZN$export$swap), $NUZN$exports.combine = $NUZN$export$combine);
$NUZN$exports.spread = $NUZN$export$spread;

function $NUZN$var$success(value) {
  return {
    kind: 'Success',
    value: value
  };
}

var $NUZN$export$success = $NUZN$var$success;
$NUZN$exports.success = $NUZN$export$success;

function $NUZN$var$failure(error) {
  return {
    kind: 'Failure',
    error: error
  };
}

var $NUZN$export$failure = $NUZN$var$failure;
$NUZN$exports.failure = $NUZN$export$failure;

function $NUZN$var$ofNullable(value, error) {
  if (value == null) return $NUZN$var$failure(error);else return $NUZN$var$success(value);
}

var $NUZN$export$ofNullable = $NUZN$var$ofNullable;
$NUZN$exports.ofNullable = $NUZN$export$ofNullable;

function $NUZN$var$ap(result, resultf) {
  return $NUZN$var$flatten($NUZN$var$map(resultf, function (f) {
    return $NUZN$var$map(result, function (v) {
      return f(v);
    });
  }));
}

var $NUZN$export$ap = $NUZN$var$ap;
$NUZN$exports.ap = $NUZN$export$ap;

function $NUZN$var$apN() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var f = args.pop();
  if (f.kind === 'Failure') return f;

  for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
    var a = args_1[_a];
    if (a.kind === 'Failure') return a;
  }

  var results = $o25q$export$map(args, function (a) {
    return a.value;
  });
  return $NUZN$var$success(f.value.apply(f, results));
}

var $NUZN$export$apN = $NUZN$var$apN;
$NUZN$exports.apN = $NUZN$export$apN;

function $NUZN$var$apNWithCombine() {
  var _a;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var combineErrors = args.pop();
  var f = args.pop();
  var err = null;
  if (f.kind === 'Failure') err = f.error;

  for (var _b = 0, args_2 = args; _b < args_2.length; _b++) {
    var a = args_2[_b];

    if (a.kind === 'Failure') {
      if (err !== null) {
        err = combineErrors(err, a.error);
      } else {
        err = a.error;
      }
    }
  }

  if (err !== null) {
    return $NUZN$var$failure(err);
  } else {
    var results = $o25q$export$map(args, function (a) {
      return a.value;
    });
    return $NUZN$var$success((_a = f).value.apply(_a, results));
  }
}

var $NUZN$export$apNWithCombine = $NUZN$var$apNWithCombine;
$NUZN$exports.apNWithCombine = $NUZN$export$apNWithCombine;

function $NUZN$var$forEach(result, f) {
  switch (result.kind) {
    case 'Failure':
      return;

    case 'Success':
      f(result.value);
  }
}

var $NUZN$export$forEach = $NUZN$var$forEach;
$NUZN$exports.forEach = $NUZN$export$forEach;

function $NUZN$var$map(result, f) {
  switch (result.kind) {
    case 'Failure':
      return result;

    case 'Success':
      return $NUZN$var$success(f(result.value));
  }
}

var $NUZN$export$map = $NUZN$var$map;
$NUZN$exports.map = $NUZN$export$map;

function $NUZN$var$mapError(result, f) {
  switch (result.kind) {
    case 'Failure':
      return $NUZN$var$failure(f(result.error));

    case 'Success':
      return $NUZN$var$success(result.value);
  }
}

var $NUZN$export$mapError = $NUZN$var$mapError;
$NUZN$exports.mapError = $NUZN$export$mapError;

function $NUZN$var$mapN() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var f = args.pop();

  for (var _a = 0, args_3 = args; _a < args_3.length; _a++) {
    var a = args_3[_a];
    if (a.kind === 'Failure') return a;
  }

  var results = $o25q$export$map(args, function (a) {
    return a.value;
  });
  return $NUZN$var$success(f.apply(void 0, results));
}

var $NUZN$export$mapN = $NUZN$var$mapN;
$NUZN$exports.mapN = $NUZN$export$mapN;

function $NUZN$var$mapNWithCombine() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var combineErrors = args.pop();
  var f = args.pop();
  var error = null;

  for (var _a = 0, args_4 = args; _a < args_4.length; _a++) {
    var a = args_4[_a];

    if (a.kind === 'Failure') {
      if (error !== null) error = combineErrors(error, a.error);else error = a.error;
    }
  }

  if (error !== null) {
    return $NUZN$var$failure(error);
  } else {
    var results = $o25q$export$map(args, function (a) {
      return a.value;
    });
    return $NUZN$var$success(f.apply(void 0, results));
  }
}

var $NUZN$export$mapNWithCombine = $NUZN$var$mapNWithCombine;
$NUZN$exports.mapNWithCombine = $NUZN$export$mapNWithCombine;

function $NUZN$var$flatMap(result, f) {
  switch (result.kind) {
    case 'Failure':
      return result;

    case 'Success':
      return f(result.value);
  }
}

var $NUZN$export$flatMap = $NUZN$var$flatMap;
$NUZN$exports.flatMap = $NUZN$export$flatMap;

function $NUZN$var$flatMapN() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var f = args.pop();

  for (var _a = 0, args_5 = args; _a < args_5.length; _a++) {
    var a = args_5[_a];

    if (a.kind === 'Failure') {
      return a;
    }
  }

  var results = $o25q$export$map(args, function (a) {
    return a.value;
  });
  return f.apply(void 0, results);
}

var $NUZN$export$flatMapN = $NUZN$var$flatMapN;
$NUZN$exports.flatMapN = $NUZN$export$flatMapN;

function $NUZN$var$flatMapNWithCombine() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var combineErrors = args.pop();
  var f = args.pop();
  var error = null;

  for (var _a = 0, args_6 = args; _a < args_6.length; _a++) {
    var a = args_6[_a];

    if (a.kind === 'Failure') {
      if (error !== null) error = combineErrors(error, a.error);else error = a.error;
    }
  }

  if (error !== null) {
    return $NUZN$var$failure(error);
  } else {
    var results = $o25q$export$map(args, function (a) {
      return a.value;
    });
    return f.apply(void 0, results);
  }
}

var $NUZN$export$flatMapNWithCombine = $NUZN$var$flatMapNWithCombine;
$NUZN$exports.flatMapNWithCombine = $NUZN$export$flatMapNWithCombine;

function $NUZN$var$equals(a, b, predicate) {
  if (a.kind !== b.kind) return false;else if (a.kind === 'Failure' && b.kind === 'Failure') return true;else return predicate(a.value, b.value);
}

var $NUZN$export$equals = $NUZN$var$equals;
$NUZN$exports.equals = $NUZN$export$equals;

function $NUZN$var$makeEquals(predicate) {
  return function (a, b) {
    return $NUZN$var$equals(a, b, predicate);
  };
}

var $NUZN$export$makeEquals = $NUZN$var$makeEquals;
$NUZN$exports.makeEquals = $NUZN$export$makeEquals;

function $NUZN$var$isFailure(result) {
  return result.kind === 'Failure';
}

var $NUZN$export$isFailure = $NUZN$var$isFailure;
$NUZN$exports.isFailure = $NUZN$export$isFailure;

function $NUZN$var$isSuccess(result) {
  return result.kind === 'Success';
}

var $NUZN$export$isSuccess = $NUZN$var$isSuccess;
$NUZN$exports.isSuccess = $NUZN$export$isSuccess;

function $NUZN$var$filter(result, predicate, error) {
  switch (result.kind) {
    case 'Failure':
      return result;

    case 'Success':
      if (predicate(result.value)) {
        return result;
      } else {
        return $NUZN$var$failure(error);
      }

  }
}

var $NUZN$export$filter = $NUZN$var$filter;
$NUZN$exports.filter = $NUZN$export$filter;

function $NUZN$var$filterLazy(result, predicate, errorf) {
  switch (result.kind) {
    case 'Failure':
      return result;

    case 'Success':
      if (predicate(result.value)) {
        return result;
      } else {
        return $NUZN$var$failure(errorf());
      }

  }
}

var $NUZN$export$filterLazy = $NUZN$var$filterLazy;
$NUZN$exports.filterLazy = $NUZN$export$filterLazy;

function $NUZN$var$getOrThrow(result) {
  switch (result.kind) {
    case 'Failure':
      throw result.error;

    case 'Success':
      return result.value;
  }
}

var $NUZN$export$getOrThrow = $NUZN$var$getOrThrow;
$NUZN$exports.getOrThrow = $NUZN$export$getOrThrow;

function $NUZN$var$getOrElse(result, alt) {
  switch (result.kind) {
    case 'Failure':
      return alt;

    case 'Success':
      return result.value;
  }
}

var $NUZN$export$getOrElse = $NUZN$var$getOrElse;
$NUZN$exports.getOrElse = $NUZN$export$getOrElse;

function $NUZN$var$getOrElseLazy(result, alt) {
  switch (result.kind) {
    case 'Failure':
      return alt();

    case 'Success':
      return result.value;
  }
}

var $NUZN$export$getOrElseLazy = $NUZN$var$getOrElseLazy;
$NUZN$exports.getOrElseLazy = $NUZN$export$getOrElseLazy;

function $NUZN$var$toBoolean(result) {
  switch (result.kind) {
    case 'Failure':
      return false;

    case 'Success':
      return true;
  }
}

var $NUZN$export$toBoolean = $NUZN$var$toBoolean;
$NUZN$exports.toBoolean = $NUZN$export$toBoolean;

function $NUZN$var$toArray(result) {
  switch (result.kind) {
    case 'Failure':
      return [];

    case 'Success':
      return [result.value];
  }
}

var $NUZN$export$toArray = $NUZN$var$toArray;
$NUZN$exports.toArray = $NUZN$export$toArray;

function $NUZN$var$toMaybe(result) {
  switch (result.kind) {
    case 'Failure':
      return $KScB$export$nothing;

    case 'Success':
      return $KScB$export$just(result.value);
  }
}

var $NUZN$export$toMaybe = $NUZN$var$toMaybe;
$NUZN$exports.toMaybe = $NUZN$export$toMaybe;

function $NUZN$var$toOption(result) {
  switch (result.kind) {
    case 'Failure':
      return $pF3E$export$none;

    case 'Success':
      return $pF3E$export$some(result.value);
  }
}

var $NUZN$export$toOption = $NUZN$var$toOption;
$NUZN$exports.toOption = $NUZN$export$toOption;

function $NUZN$var$flatten(result) {
  switch (result.kind) {
    case 'Failure':
      return $NUZN$var$failure(result.error);

    case 'Success':
      return result.value;
  }
}

var $NUZN$export$flatten = $NUZN$var$flatten;
$NUZN$exports.flatten = $NUZN$export$flatten;

function $NUZN$var$match(result, f, fErr) {
  switch (result.kind) {
    case 'Success':
      return f(result.value);

    case 'Failure':
      return fErr(result.error);
  }
}

var $NUZN$export$match = $NUZN$var$match;
$NUZN$exports.match = $NUZN$export$match;

function $NUZN$var$cata(result, f, ifNone) {
  switch (result.kind) {
    case 'Failure':
      return ifNone;

    case 'Success':
      return f(result.value);
  }
}

var $NUZN$export$cata = $NUZN$var$cata;
$NUZN$exports.cata = $NUZN$export$cata;

function $NUZN$var$cataLazy(result, f, ifNone) {
  switch (result.kind) {
    case 'Failure':
      return ifNone();

    case 'Success':
      return f(result.value);
  }
}

var $NUZN$export$cataLazy = $NUZN$var$cataLazy;
$NUZN$exports.cataLazy = $NUZN$export$cataLazy;

function $NUZN$var$foldLeft(result, f, b) {
  switch (result.kind) {
    case 'Failure':
      return b;

    case 'Success':
      return f(b, result.value);
  }
}

var $NUZN$export$foldLeft = $NUZN$var$foldLeft;
$NUZN$exports.foldLeft = $NUZN$export$foldLeft;

function $NUZN$var$all(result, f) {
  switch (result.kind) {
    case 'Failure':
      return true;

    case 'Success':
      return f(result.value);
  }
}

var $NUZN$export$all = $NUZN$var$all;
$NUZN$exports.all = $NUZN$export$all;

function $NUZN$var$any(result, f) {
  switch (result.kind) {
    case 'Failure':
      return false;

    case 'Success':
      return f(result.value);
  }
}

var $NUZN$export$any = $NUZN$var$any;
$NUZN$exports.any = $NUZN$export$any;

function $NUZN$var$each(result, f) {
  switch (result.kind) {
    case 'Failure':
      return;

    case 'Success':
      return f(result.value);
  }
}

var $NUZN$export$each = $NUZN$var$each;
$NUZN$exports.each = $NUZN$export$each;

function $NUZN$var$firstSuccess() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  for (var _a = 0, args_7 = args; _a < args_7.length; _a++) {
    var a = args_7[_a];
    if ($NUZN$var$isSuccess(a)) return a;
  }

  for (var _b = 0, args_8 = args; _b < args_8.length; _b++) {
    var a = args_8[_b];
    return a;
  }

  throw 'cannot use `firstSuccess` with empty argument list';
}

var $NUZN$export$firstSuccess = $NUZN$var$firstSuccess;
$NUZN$exports.firstSuccess = $NUZN$export$firstSuccess;

function $NUZN$var$recover(result, whenFailure) {
  switch (result.kind) {
    case 'Failure':
      return $NUZN$var$success(whenFailure);

    case 'Success':
      return result;
  }
}

var $NUZN$export$recover = $NUZN$var$recover;
$NUZN$exports.recover = $NUZN$export$recover;

function $NUZN$var$recoverFromError(result, whenFailuref) {
  switch (result.kind) {
    case 'Failure':
      return $NUZN$var$success(whenFailuref(result.error));

    case 'Success':
      return result;
  }
}

var $NUZN$export$recoverFromError = $NUZN$var$recoverFromError;
$NUZN$exports.recoverFromError = $NUZN$export$recoverFromError;

function $NUZN$var$swap(result) {
  switch (result.kind) {
    case 'Failure':
      return $NUZN$var$success(result.error);

    case 'Success':
      return $NUZN$var$failure(result.value);
  }
}

var $NUZN$export$swap = $NUZN$var$swap;
$NUZN$exports.swap = $NUZN$export$swap;

function $NUZN$var$combine(a, b) {
  return $NUZN$var$mapN(a, b, function (a, b) {
    return [a, b];
  });
}

var $NUZN$export$combine = $NUZN$var$combine;
$NUZN$exports.combine = $NUZN$export$combine;

function $NUZN$var$spread(f, v) {
  return $NUZN$var$map(v, function (t) {
    return f(t[0], t[1]);
  });
}

$NUZN$export$spread = $NUZN$var$spread;
$NUZN$exports.spread = $NUZN$export$spread; //# sourceMappingURL=result.js.map

// ASSET: ../node_modules/tempo-std/lib/option.js
var $pF3E$exports = {};
Object.defineProperty($pF3E$exports, "__esModule", {
  value: true
});
var $pF3E$export$spread = ($pF3E$export$combine = ($pF3E$export$recoverLazy = ($pF3E$export$recover = ($pF3E$export$firstSome = ($pF3E$export$each = ($pF3E$export$any = ($pF3E$export$all = ($pF3E$export$foldLeft = ($pF3E$export$cataLazy = ($pF3E$export$cata = ($pF3E$export$flatten = ($pF3E$export$toResultLazy = ($pF3E$export$toResult = ($pF3E$export$toArray = ($pF3E$export$toBoolean = ($pF3E$export$getOrElseLazy = ($pF3E$export$getOrElse = ($pF3E$export$getUnsafe = ($pF3E$export$toMaybe = ($pF3E$export$getOrThrow = ($pF3E$export$filter = ($pF3E$export$isSome = ($pF3E$export$isNone = ($pF3E$export$makeEquals = ($pF3E$export$equals = ($pF3E$export$flatMapN = ($pF3E$export$flatMap = ($pF3E$export$mapN = ($pF3E$export$map = ($pF3E$export$apN = ($pF3E$export$ap = ($pF3E$export$ofValue = ($pF3E$export$none = ($pF3E$export$some = void 0, $pF3E$exports.some = $pF3E$export$some), $pF3E$exports.none = $pF3E$export$none), $pF3E$exports.ofValue = $pF3E$export$ofValue), $pF3E$exports.ap = $pF3E$export$ap), $pF3E$exports.apN = $pF3E$export$apN), $pF3E$exports.map = $pF3E$export$map), $pF3E$exports.mapN = $pF3E$export$mapN), $pF3E$exports.flatMap = $pF3E$export$flatMap), $pF3E$exports.flatMapN = $pF3E$export$flatMapN), $pF3E$exports.equals = $pF3E$export$equals), $pF3E$exports.makeEquals = $pF3E$export$makeEquals), $pF3E$exports.isNone = $pF3E$export$isNone), $pF3E$exports.isSome = $pF3E$export$isSome), $pF3E$exports.filter = $pF3E$export$filter), $pF3E$exports.getOrThrow = $pF3E$export$getOrThrow), $pF3E$exports.toMaybe = $pF3E$export$toMaybe), $pF3E$exports.getUnsafe = $pF3E$export$getUnsafe), $pF3E$exports.getOrElse = $pF3E$export$getOrElse), $pF3E$exports.getOrElseLazy = $pF3E$export$getOrElseLazy), $pF3E$exports.toBoolean = $pF3E$export$toBoolean), $pF3E$exports.toArray = $pF3E$export$toArray), $pF3E$exports.toResult = $pF3E$export$toResult), $pF3E$exports.toResultLazy = $pF3E$export$toResultLazy), $pF3E$exports.flatten = $pF3E$export$flatten), $pF3E$exports.cata = $pF3E$export$cata), $pF3E$exports.cataLazy = $pF3E$export$cataLazy), $pF3E$exports.foldLeft = $pF3E$export$foldLeft), $pF3E$exports.all = $pF3E$export$all), $pF3E$exports.any = $pF3E$export$any), $pF3E$exports.each = $pF3E$export$each), $pF3E$exports.firstSome = $pF3E$export$firstSome), $pF3E$exports.recover = $pF3E$export$recover), $pF3E$exports.recoverLazy = $pF3E$export$recoverLazy), $pF3E$exports.combine = $pF3E$export$combine);
$pF3E$exports.spread = $pF3E$export$spread;

function $pF3E$var$some(value) {
  return {
    kind: 'Some',
    value: value
  };
}

var $pF3E$export$some = $pF3E$var$some;
$pF3E$exports.some = $pF3E$export$some;
var $pF3E$export$none = {
  kind: 'None'
};
$pF3E$exports.none = $pF3E$export$none;

function $pF3E$var$ofValue(value) {
  if (value == null) return $pF3E$export$none;else return $pF3E$var$some(value);
}

var $pF3E$export$ofValue = $pF3E$var$ofValue;
$pF3E$exports.ofValue = $pF3E$export$ofValue;

function $pF3E$var$ap(opt, optf) {
  return $pF3E$var$flatten($pF3E$var$map(optf, function (f) {
    return $pF3E$var$map(opt, function (v) {
      return f(v);
    });
  }));
}

var $pF3E$export$ap = $pF3E$var$ap;
$pF3E$exports.ap = $pF3E$export$ap;

function $pF3E$var$apN() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var f = args.pop();
  if (f.kind === 'None') return $pF3E$export$none;

  for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
    var a = args_1[_a];
    if (a.kind === 'None') return $pF3E$export$none;
  }

  var results = $o25q$export$map(args, function (a) {
    return a.value;
  });
  return $pF3E$var$some(f.value.apply(f, results));
}

var $pF3E$export$apN = $pF3E$var$apN;
$pF3E$exports.apN = $pF3E$export$apN;

function $pF3E$var$map(opt, f) {
  switch (opt.kind) {
    case 'None':
      return opt;

    case 'Some':
      return $pF3E$var$some(f(opt.value));
  }
}

var $pF3E$export$map = $pF3E$var$map;
$pF3E$exports.map = $pF3E$export$map;

function $pF3E$var$mapN() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var f = args.pop();

  for (var _a = 0, args_2 = args; _a < args_2.length; _a++) {
    var a = args_2[_a];
    if (a.kind === 'None') return $pF3E$export$none;
  }

  var results = $o25q$export$map(args, function (a) {
    return a.value;
  });
  return $pF3E$var$some(f.apply(void 0, results));
}

var $pF3E$export$mapN = $pF3E$var$mapN;
$pF3E$exports.mapN = $pF3E$export$mapN;

function $pF3E$var$flatMap(opt, f) {
  switch (opt.kind) {
    case 'None':
      return opt;

    case 'Some':
      return f(opt.value);
  }
}

var $pF3E$export$flatMap = $pF3E$var$flatMap;
$pF3E$exports.flatMap = $pF3E$export$flatMap;

function $pF3E$var$flatMapN() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var f = args.pop();

  for (var _a = 0, args_3 = args; _a < args_3.length; _a++) {
    var a = args_3[_a];
    if (a.kind === 'None') return $pF3E$export$none;
  }

  var results = $o25q$export$map(args, function (a) {
    return a.value;
  });
  return f.apply(void 0, results);
}

var $pF3E$export$flatMapN = $pF3E$var$flatMapN;
$pF3E$exports.flatMapN = $pF3E$export$flatMapN;

function $pF3E$var$equals(a, b, predicate) {
  if (a.kind !== b.kind) return false;else if (a.kind === 'None' && b.kind === 'None') return true;else return predicate(a.value, b.value);
}

var $pF3E$export$equals = $pF3E$var$equals;
$pF3E$exports.equals = $pF3E$export$equals;

function $pF3E$var$makeEquals(predicate) {
  return function (a, b) {
    return $pF3E$var$equals(a, b, predicate);
  };
}

var $pF3E$export$makeEquals = $pF3E$var$makeEquals;
$pF3E$exports.makeEquals = $pF3E$export$makeEquals;

function $pF3E$var$isNone(option) {
  return option.kind === 'None';
}

var $pF3E$export$isNone = $pF3E$var$isNone;
$pF3E$exports.isNone = $pF3E$export$isNone;

function $pF3E$var$isSome(option) {
  return option.kind === 'Some';
}

var $pF3E$export$isSome = $pF3E$var$isSome;
$pF3E$exports.isSome = $pF3E$export$isSome;

function $pF3E$var$filter(option, predicate) {
  switch (option.kind) {
    case 'None':
      return $pF3E$export$none;

    case 'Some':
      if (predicate(option.value)) {
        return option;
      } else {
        return $pF3E$export$none;
      }

  }
}

var $pF3E$export$filter = $pF3E$var$filter;
$pF3E$exports.filter = $pF3E$export$filter;

function $pF3E$var$getOrThrow(option, exception) {
  switch (option.kind) {
    case 'None':
      throw exception;

    case 'Some':
      return option.value;
  }
}

var $pF3E$export$getOrThrow = $pF3E$var$getOrThrow;
$pF3E$exports.getOrThrow = $pF3E$export$getOrThrow;

function $pF3E$var$toMaybe(option) {
  switch (option.kind) {
    case 'None':
      return undefined;

    case 'Some':
      return option.value;
  }
}

var $pF3E$export$toMaybe = $pF3E$var$toMaybe;
$pF3E$exports.toMaybe = $pF3E$export$toMaybe;

function $pF3E$var$getUnsafe(option) {
  return $pF3E$var$getOrThrow(option, 'unable to extract value from None');
}

var $pF3E$export$getUnsafe = $pF3E$var$getUnsafe;
$pF3E$exports.getUnsafe = $pF3E$export$getUnsafe;

function $pF3E$var$getOrElse(option, alt) {
  switch (option.kind) {
    case 'None':
      return alt;

    case 'Some':
      return option.value;
  }
}

var $pF3E$export$getOrElse = $pF3E$var$getOrElse;
$pF3E$exports.getOrElse = $pF3E$export$getOrElse;

function $pF3E$var$getOrElseLazy(option, alt) {
  switch (option.kind) {
    case 'None':
      return alt();

    case 'Some':
      return option.value;
  }
}

var $pF3E$export$getOrElseLazy = $pF3E$var$getOrElseLazy;
$pF3E$exports.getOrElseLazy = $pF3E$export$getOrElseLazy;

function $pF3E$var$toBoolean(option) {
  switch (option.kind) {
    case 'None':
      return false;

    case 'Some':
      return true;
  }
}

var $pF3E$export$toBoolean = $pF3E$var$toBoolean;
$pF3E$exports.toBoolean = $pF3E$export$toBoolean;

function $pF3E$var$toArray(option) {
  switch (option.kind) {
    case 'None':
      return [];

    case 'Some':
      return [option.value];
  }
}

var $pF3E$export$toArray = $pF3E$var$toArray;
$pF3E$exports.toArray = $pF3E$export$toArray;

function $pF3E$var$toResult(option, error) {
  switch (option.kind) {
    case 'None':
      return $NUZN$export$failure(error);

    case 'Some':
      return $NUZN$export$success(option.value);
  }
}

var $pF3E$export$toResult = $pF3E$var$toResult;
$pF3E$exports.toResult = $pF3E$export$toResult;

function $pF3E$var$toResultLazy(option, errorf) {
  switch (option.kind) {
    case 'None':
      return $NUZN$export$failure(errorf());

    case 'Some':
      return $NUZN$export$success(option.value);
  }
}

var $pF3E$export$toResultLazy = $pF3E$var$toResultLazy;
$pF3E$exports.toResultLazy = $pF3E$export$toResultLazy;

function $pF3E$var$flatten(option) {
  switch (option.kind) {
    case 'None':
      return $pF3E$export$none;

    case 'Some':
      return option.value;
  }
}

var $pF3E$export$flatten = $pF3E$var$flatten;
$pF3E$exports.flatten = $pF3E$export$flatten;

function $pF3E$var$cata(f, option, ifNone) {
  switch (option.kind) {
    case 'None':
      return ifNone;

    case 'Some':
      return f(option.value);
  }
}

var $pF3E$export$cata = $pF3E$var$cata;
$pF3E$exports.cata = $pF3E$export$cata;

function $pF3E$var$cataLazy(f, option, ifNone) {
  switch (option.kind) {
    case 'None':
      return ifNone();

    case 'Some':
      return f(option.value);
  }
}

var $pF3E$export$cataLazy = $pF3E$var$cataLazy;
$pF3E$exports.cataLazy = $pF3E$export$cataLazy;

function $pF3E$var$foldLeft(f, option, b) {
  switch (option.kind) {
    case 'None':
      return b;

    case 'Some':
      return f(b, option.value);
  }
}

var $pF3E$export$foldLeft = $pF3E$var$foldLeft;
$pF3E$exports.foldLeft = $pF3E$export$foldLeft;

function $pF3E$var$all(f, option) {
  switch (option.kind) {
    case 'None':
      return true;

    case 'Some':
      return f(option.value);
  }
}

var $pF3E$export$all = $pF3E$var$all;
$pF3E$exports.all = $pF3E$export$all;

function $pF3E$var$any(f, option) {
  switch (option.kind) {
    case 'None':
      return false;

    case 'Some':
      return f(option.value);
  }
}

var $pF3E$export$any = $pF3E$var$any;
$pF3E$exports.any = $pF3E$export$any;

function $pF3E$var$each(f, option) {
  switch (option.kind) {
    case 'None':
      return;

    case 'Some':
      return f(option.value);
  }
}

var $pF3E$export$each = $pF3E$var$each;
$pF3E$exports.each = $pF3E$export$each;

function $pF3E$var$firstSome() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  for (var _a = 0, args_4 = args; _a < args_4.length; _a++) {
    var a = args_4[_a];
    if ($pF3E$var$isSome(a)) return a;
  }

  return $pF3E$export$none;
}

var $pF3E$export$firstSome = $pF3E$var$firstSome;
$pF3E$exports.firstSome = $pF3E$export$firstSome;

function $pF3E$var$recover(result, whenFailure) {
  switch (result.kind) {
    case 'None':
      return $pF3E$var$some(whenFailure);

    case 'Some':
      return result;
  }
}

var $pF3E$export$recover = $pF3E$var$recover;
$pF3E$exports.recover = $pF3E$export$recover;

function $pF3E$var$recoverLazy(result, whenFailuref) {
  switch (result.kind) {
    case 'None':
      return $pF3E$var$some(whenFailuref());

    case 'Some':
      return result;
  }
}

var $pF3E$export$recoverLazy = $pF3E$var$recoverLazy;
$pF3E$exports.recoverLazy = $pF3E$export$recoverLazy;

function $pF3E$var$combine(a, b) {
  return $pF3E$var$mapN(a, b, function (a, b) {
    return [a, b];
  });
}

var $pF3E$export$combine = $pF3E$var$combine;
$pF3E$exports.combine = $pF3E$export$combine;

function $pF3E$var$spread(f, v) {
  return $pF3E$var$map(v, function (t) {
    return f(t[0], t[1]);
  });
}

$pF3E$export$spread = $pF3E$var$spread;
$pF3E$exports.spread = $pF3E$export$spread; //# sourceMappingURL=option.js.map

// ASSET: ../node_modules/tempo-std/lib/newtype.js
var $fPXN$exports = {};
Object.defineProperty($fPXN$exports, "__esModule", {
  value: true
});
var $fPXN$export$NewtypeClass = void 0;
$fPXN$exports.NewtypeClass = $fPXN$export$NewtypeClass;
/**
 * Usage:
 *
 * ```ts
 * export interface Int extends Newtype<
 *   number,
 *   { readonly Int: unique symbol }
 * > {}
 *
 * export const Int = new class extends NewtypeClass<Int> {
 *   isValid(v: number) { return Number.isInteger(v) }
 * }()
 * ```
 */

var $fPXN$var$NewtypeClass =
/** @class */
function () {
  function NewtypeClass() {}

  NewtypeClass.prototype.unsafeOf = function (v) {
    return v;
  };

  NewtypeClass.prototype.of = function (v) {
    return $pF3E$export$ofValue(this.maybeOf(v));
  };

  NewtypeClass.prototype.maybeOf = function (v) {
    return this.isValid(v) ? v : undefined;
  };

  NewtypeClass.prototype.get = function (v) {
    return v;
  };

  NewtypeClass.prototype.maybeModify = function (f) {
    var _this = this;

    return function (value) {
      return _this.maybeOf(f(_this.get(value)));
    };
  };

  NewtypeClass.prototype.modify = function (f) {
    var mf = this.maybeModify(f);
    return function (value) {
      return $pF3E$export$ofValue(mf(value));
    };
  };

  NewtypeClass.prototype.unsafeModify = function (f) {
    var _this = this;

    return function (value) {
      return _this.unsafeOf(f(_this.get(value)));
    };
  };

  return NewtypeClass;
}();

$fPXN$export$NewtypeClass = $fPXN$var$NewtypeClass;
$fPXN$exports.NewtypeClass = $fPXN$export$NewtypeClass; //# sourceMappingURL=newtype.js.map

// ASSET: ../node_modules/tempo-std/lib/uuid.js
var $MFoz$exports = {};

var $MFoz$var$__extends = $MFoz$exports && $MFoz$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($MFoz$exports, "__esModule", {
  value: true
});
var $MFoz$export$toString = ($MFoz$export$UUID = ($MFoz$export$create = void 0, $MFoz$exports.create = $MFoz$export$create), $MFoz$exports.UUID = $MFoz$export$UUID);
$MFoz$exports.toString = $MFoz$export$toString;
/**
 * Helper functions to generate and validate [UUID](http://en.wikipedia.org/wiki/Universally_unique_identifier)
 * strings (version 4).
 */

var $MFoz$var$random = function (max) {
  return Math.floor(Math.random() * max);
};

var $MFoz$var$srandom = function () {
  return '0123456789abcdef'.charAt($MFoz$var$random(0x10));
};
/**
 * `Uuid.create()` returns a string value representing a random UUID string.
 */


function $MFoz$var$create() {
  var s = [];
  var i = 0;

  for (i = 0; i < 8; i++) s[i] = $MFoz$var$srandom();

  s[8] = '-';

  for (i = 9; i < 13; i++) s[i] = $MFoz$var$srandom();

  s[13] = '-';
  s[14] = '4';

  for (i = 15; i < 18; i++) s[i] = $MFoz$var$srandom();

  s[18] = '-';
  s[19] = '89AB'.charAt($MFoz$var$random(0x3));

  for (i = 20; i < 23; i++) s[i] = $MFoz$var$srandom();

  s[23] = '-';

  for (i = 24; i < 36; i++) s[i] = $MFoz$var$srandom();

  return $MFoz$export$UUID.unsafeOf(s.join(''));
}

var $MFoz$export$create = $MFoz$var$create;
$MFoz$exports.create = $MFoz$export$create;
var $MFoz$var$pattern = /^[0123456789abcdef]{8}-[0123456789abcdef]{4}-4[0123456789abcdef]{3}-[89ab][0123456789abcdef]{3}-[0123456789abcdef]{12}$/i;
var $MFoz$export$UUID = new (
/** @class */
function (_super) {
  $MFoz$var$__extends(class_1, _super);

  function class_1() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  class_1.prototype.isValid = function (uuid) {
    return $MFoz$var$pattern.test(uuid);
  };

  return class_1;
}($fPXN$export$NewtypeClass))();
$MFoz$exports.UUID = $MFoz$export$UUID;

function $MFoz$var$toString(uuid) {
  return $MFoz$export$UUID.get(uuid);
}

$MFoz$export$toString = $MFoz$var$toString;
$MFoz$exports.toString = $MFoz$export$toString; //# sourceMappingURL=uuid.js.map

// ASSET: state.ts
var $mIWh$export$Filter,
    $mIWh$exports = {};
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

Object.defineProperty($mIWh$exports, "__esModule", {
  value: true
});
var $mIWh$export$emptyState = ($mIWh$export$createTodo = ($mIWh$export$Filter = void 0, $mIWh$exports.Filter = $mIWh$export$Filter), $mIWh$exports.createTodo = $mIWh$export$createTodo);
$mIWh$exports.emptyState = $mIWh$export$emptyState;

function $mIWh$var$makeUUID() {
  return $MFoz$export$UUID.get($MFoz$export$create());
}

var $mIWh$var$Filter;

(function (Filter) {
  Filter[Filter["All"] = 0] = "All";
  Filter[Filter["Active"] = 1] = "Active";
  Filter[Filter["Completed"] = 2] = "Completed";
})($mIWh$var$Filter = $mIWh$export$Filter || ($mIWh$export$Filter = {}, $mIWh$exports.Filter = $mIWh$export$Filter));

var $mIWh$export$createTodo = function (title) {
  return {
    id: $mIWh$var$makeUUID(),
    title: title,
    completed: false
  };
};

$mIWh$exports.createTodo = $mIWh$export$createTodo;

$mIWh$export$emptyState = function () {
  return {
    filter: $mIWh$var$Filter.All,
    filtered: [],
    todos: [],
    completed: 0,
    adding: undefined,
    editing: undefined
  };
};

$mIWh$exports.emptyState = $mIWh$export$emptyState;
// ASSET: reducer.ts
var $pSX2$exports = {};

var $pSX2$var$__assign = $pSX2$exports && $pSX2$exports.__assign || function () {
  $pSX2$var$__assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return $pSX2$var$__assign.apply(this, arguments);
};

var $pSX2$var$__spreadArrays = $pSX2$exports && $pSX2$exports.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

Object.defineProperty($pSX2$exports, "__esModule", {
  value: true
});
var $pSX2$export$reducer = void 0;
$pSX2$exports.reducer = $pSX2$export$reducer;

var $pSX2$var$filterF = function filterF(filter) {
  if (filter === $mIWh$export$Filter.All) {
    return function (_) {
      return true;
    };
  } else if (filter === $mIWh$export$Filter.Completed) {
    return function (todo) {
      return todo.completed;
    };
  } else {
    return function (todo) {
      return !todo.completed;
    };
  }
};

var $pSX2$var$filterTodos = function filterTodos(todos, filter) {
  return todos.filter($pSX2$var$filterF(filter));
};

$pSX2$export$reducer = function (state, action) {
  switch (action.kind) {
    case 'adding-todo':
      if (action.title) {
        return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
          adding: action.title
        });
      } else {
        return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
          adding: undefined
        });
      }

    case 'create-todo':
      if (action.title) {
        var todos_1 = state.todos.concat([$mIWh$export$createTodo(action.title)]);
        var filtered_1 = $pSX2$var$filterTodos(todos_1, state.filter);
        return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
          todos: todos_1,
          filtered: filtered_1,
          completed: todos_1.filter(function (todo) {
            return todo.completed;
          }).length,
          adding: undefined
        });
      } else {
        return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
          adding: undefined
        });
      }

    case 'editing-todo':
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        editing: {
          id: action.id,
          title: action.title
        }
      });

    case 'cancel-adding-todo':
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        adding: undefined
      });

    case 'cancel-editing-todo':
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        editing: undefined
      });

    case 'clear-completed':
      var todos = state.todos.filter(function (v) {
        return !v.completed;
      });
      var filtered = $pSX2$var$filterTodos(todos, state.filter);
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        completed: 0,
        filtered: filtered,
        todos: todos
      });

    case 'remove-todo':
      var todos2 = state.todos.filter(function (v) {
        return v.id !== action.id;
      });
      var filtered2 = $pSX2$var$filterTodos(todos2, state.filter);
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        completed: todos2.filter(function (todo) {
          return todo.completed;
        }).length,
        todos: todos2,
        filtered: filtered2
      });

    case 'toggle-completed':
      var index = state.todos.findIndex(function (v) {
        return v.id === action.id;
      });
      var current = state.todos[index];
      var todo = $pSX2$var$__assign($pSX2$var$__assign({}, current), {
        completed: !current.completed
      });
      var todos3 = $pSX2$var$__spreadArrays(state.todos.slice(0, index), [todo], state.todos.slice(index + 1));
      var filtered3 = $pSX2$var$filterTodos(todos3, state.filter);
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        completed: todos3.filter(function (todo) {
          return todo.completed;
        }).length,
        todos: todos3,
        filtered: filtered3
      });

    case 'toggle-all-todo':
      var allCompleted_1 = state.completed === state.todos.length;
      var todos4 = $o25q$export$map(state.todos, function (todo) {
        if (todo.completed !== allCompleted_1) {
          return todo;
        } else {
          return $pSX2$var$__assign($pSX2$var$__assign({}, todo), {
            completed: !allCompleted_1
          });
        }
      });
      var filtered4 = $pSX2$var$filterTodos(todos4, state.filter);
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        todos: todos4,
        filtered: filtered4,
        completed: allCompleted_1 ? 0 : state.todos.length
      });

    case 'toggle-filter':
      var filtered5 = $pSX2$var$filterTodos(state.todos, action.filter);
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        filtered: filtered5,
        filter: action.filter
      });

    case 'update-todo':
      var index2 = state.todos.findIndex(function (o) {
        return o.id === action.id;
      });

      if (index2 >= 0) {
        var updated = {
          id: action.id,
          title: action.title,
          completed: state.todos[index2].completed
        };
        var todos_2 = $pSX2$var$__spreadArrays(state.todos.slice(0, index2), [updated], state.todos.slice(index2 + 1));
        var filtered_2 = $pSX2$var$filterTodos(todos_2, state.filter);
        return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
          editing: undefined,
          completed: todos_2.filter(function (todo) {
            return todo.completed;
          }).length,
          todos: todos_2,
          filtered: filtered_2
        });
      } else {
        return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
          editing: undefined
        });
      }

    default:
      throw 'unreacheable code';
  }
};

$pSX2$exports.reducer = $pSX2$export$reducer;
// ASSET: action.ts
var $FLek$exports = {};
Object.defineProperty($FLek$exports, "__esModule", {
  value: true
});
var $FLek$export$Action = ($FLek$export$UpdateTodo = ($FLek$export$ToggleAllTodo = ($FLek$export$ToggleTodo = ($FLek$export$ToggleFilter = ($FLek$export$RemoveTodo = ($FLek$export$EditingTodo = ($FLek$export$ClearCompleted = ($FLek$export$CancelEditingTodo = ($FLek$export$CancelAddingTodo = ($FLek$export$CreateTodo = ($FLek$export$AddingTodo = void 0, $FLek$exports.AddingTodo = $FLek$export$AddingTodo), $FLek$exports.CreateTodo = $FLek$export$CreateTodo), $FLek$exports.CancelAddingTodo = $FLek$export$CancelAddingTodo), $FLek$exports.CancelEditingTodo = $FLek$export$CancelEditingTodo), $FLek$exports.ClearCompleted = $FLek$export$ClearCompleted), $FLek$exports.EditingTodo = $FLek$export$EditingTodo), $FLek$exports.RemoveTodo = $FLek$export$RemoveTodo), $FLek$exports.ToggleFilter = $FLek$export$ToggleFilter), $FLek$exports.ToggleTodo = $FLek$export$ToggleTodo), $FLek$exports.ToggleAllTodo = $FLek$export$ToggleAllTodo), $FLek$exports.UpdateTodo = $FLek$export$UpdateTodo);
$FLek$exports.Action = $FLek$export$Action;

var $FLek$var$AddingTodo =
/** @class */
function () {
  function AddingTodo(title) {
    this.title = title;
    this.kind = 'adding-todo';
  }

  return AddingTodo;
}();

var $FLek$export$AddingTodo = $FLek$var$AddingTodo;
$FLek$exports.AddingTodo = $FLek$export$AddingTodo;

var $FLek$var$CreateTodo =
/** @class */
function () {
  function CreateTodo(title) {
    this.title = title;
    this.kind = 'create-todo';
  }

  return CreateTodo;
}();

var $FLek$export$CreateTodo = $FLek$var$CreateTodo;
$FLek$exports.CreateTodo = $FLek$export$CreateTodo;

var $FLek$var$CancelAddingTodo =
/** @class */
function () {
  function CancelAddingTodo() {
    this.kind = 'cancel-adding-todo';
  }

  return CancelAddingTodo;
}();

var $FLek$export$CancelAddingTodo = $FLek$var$CancelAddingTodo;
$FLek$exports.CancelAddingTodo = $FLek$export$CancelAddingTodo;

var $FLek$var$CancelEditingTodo =
/** @class */
function () {
  function CancelEditingTodo() {
    this.kind = 'cancel-editing-todo';
  }

  return CancelEditingTodo;
}();

var $FLek$export$CancelEditingTodo = $FLek$var$CancelEditingTodo;
$FLek$exports.CancelEditingTodo = $FLek$export$CancelEditingTodo;

var $FLek$var$ClearCompleted =
/** @class */
function () {
  function ClearCompleted() {
    this.kind = 'clear-completed';
  }

  return ClearCompleted;
}();

var $FLek$export$ClearCompleted = $FLek$var$ClearCompleted;
$FLek$exports.ClearCompleted = $FLek$export$ClearCompleted;

var $FLek$var$EditingTodo =
/** @class */
function () {
  function EditingTodo(id, title) {
    this.id = id;
    this.title = title;
    this.kind = 'editing-todo';
  }

  return EditingTodo;
}();

var $FLek$export$EditingTodo = $FLek$var$EditingTodo;
$FLek$exports.EditingTodo = $FLek$export$EditingTodo;

var $FLek$var$RemoveTodo =
/** @class */
function () {
  function RemoveTodo(id) {
    this.id = id;
    this.kind = 'remove-todo';
  }

  return RemoveTodo;
}();

var $FLek$export$RemoveTodo = $FLek$var$RemoveTodo;
$FLek$exports.RemoveTodo = $FLek$export$RemoveTodo;

var $FLek$var$ToggleFilter =
/** @class */
function () {
  function ToggleFilter(filter) {
    this.filter = filter;
    this.kind = 'toggle-filter';
  }

  return ToggleFilter;
}();

var $FLek$export$ToggleFilter = $FLek$var$ToggleFilter;
$FLek$exports.ToggleFilter = $FLek$export$ToggleFilter;

var $FLek$var$ToggleTodo =
/** @class */
function () {
  function ToggleTodo(id) {
    this.id = id;
    this.kind = 'toggle-completed';
  }

  return ToggleTodo;
}();

var $FLek$export$ToggleTodo = $FLek$var$ToggleTodo;
$FLek$exports.ToggleTodo = $FLek$export$ToggleTodo;

var $FLek$var$ToggleAllTodo =
/** @class */
function () {
  function ToggleAllTodo() {
    this.kind = 'toggle-all-todo';
  }

  return ToggleAllTodo;
}();

var $FLek$export$ToggleAllTodo = $FLek$var$ToggleAllTodo;
$FLek$exports.ToggleAllTodo = $FLek$export$ToggleAllTodo;

var $FLek$var$UpdateTodo =
/** @class */
function () {
  function UpdateTodo(id, title) {
    this.id = id;
    this.title = title;
    this.kind = 'update-todo';
  }

  return UpdateTodo;
}();

var $FLek$export$UpdateTodo = $FLek$var$UpdateTodo;
$FLek$exports.UpdateTodo = $FLek$export$UpdateTodo;
$FLek$export$Action = {
  adddingTodo: function adddingTodo(title) {
    return new $FLek$var$AddingTodo(title);
  },
  createTodo: function createTodo(title) {
    return new $FLek$var$CreateTodo(title);
  },
  cancelAddingTodo: new $FLek$var$CancelAddingTodo(),
  cancelEditingTodo: new $FLek$var$CancelEditingTodo(),
  clearCompleted: new $FLek$var$ClearCompleted(),
  editingTodo: function editingTodo(id, title) {
    return new $FLek$var$EditingTodo(id, title);
  },
  removeTodo: function removeTodo(id) {
    return new $FLek$var$RemoveTodo(id);
  },
  toggleTodo: function toggleTodo(id) {
    return new $FLek$var$ToggleTodo(id);
  },
  toggleAllTodo: new $FLek$var$ToggleAllTodo(),
  toggleFilter: function toggleFilter(filter) {
    return new $FLek$var$ToggleFilter(filter);
  },
  updateTodo: function updateTodo(id, title) {
    return new $FLek$var$UpdateTodo(id, title);
  }
};
$FLek$exports.Action = $FLek$export$Action;
// ASSET: app_template.ts
var $yo0O$exports = {};
Object.defineProperty($yo0O$exports, "__esModule", {
  value: true
});
var $yo0O$export$template = void 0;
$yo0O$exports.template = $yo0O$export$template;

var $yo0O$var$changeF = function changeF(filter) {
  return function (state) {
    return state.filter === filter ? undefined : $FLek$export$Action.toggleFilter(filter);
  };
};

var $yo0O$var$selectedF = function selectedF(filter) {
  return function (state) {
    return state.filter === filter ? 'selected' : undefined;
  };
};

var $yo0O$var$isEditing = function isEditing(state, todo) {
  return state.editing && state.editing.id === todo.id || false;
};

$yo0O$export$template = $zQMt$exports.Fragment(function ($) {
  return $.SECTION(function ($) {
    return $.class('todoapp').DIV(function ($) {
      return $.HEADER(function ($) {
        return $.class('header').H1(function ($) {
          return $.text('todos');
        }).INPUT_TEXT(function ($) {
          return $.class('new-todo').placeholder('What needs to be done?').autoFocus(function (s) {
            return s.editing == null;
          }).value(function (s) {
            return s.adding;
          }).onKeyDown(function (_, ev, input) {
            if (ev.keyCode === 13) {
              return $FLek$export$Action.createTodo(input.value.trim());
            } else if (ev.keyCode === 27) {
              return $FLek$export$Action.cancelAddingTodo;
            } else {
              return $FLek$export$Action.adddingTodo(input.value);
            }
          });
        });
      }).SECTION(function ($) {
        return $.class('main').style('visibility', function (s) {
          return s.todos.length === 0 ? 'hidden' : '';
        }).INPUT_CHECKBOX(function ($) {
          return $.id('toggle-all').class('toggle-all').checked(function (s) {
            return s.completed === s.todos.length;
          }).onClick(function () {
            return $FLek$export$Action.toggleAllTodo;
          });
        }).LABEL(function ($) {
          return $.for('toggle-all').text('Mark all as complete');
        }).UL(function ($) {
          return $.class('todo-list').Iterate(function (s) {
            return s.filtered;
          }, function ($) {
            return $.LI(function ($) {
              return $.class(function (_a) {
                var todo = _a[0],
                    state = _a[1];
                return {
                  completed: todo.completed,
                  editing: $yo0O$var$isEditing(state, todo)
                };
              }).DIV(function ($) {
                return $.class('view').INPUT_CHECKBOX(function ($) {
                  return $.class('toggle').checked(function (_a) {
                    var todo = _a[0];
                    return todo.completed;
                  }).onChange(function (_a) {
                    var todo = _a[0];
                    return $FLek$export$Action.toggleTodo(todo.id);
                  });
                }).LABEL(function ($) {
                  return $.onDblClick(function (_a) {
                    var todo = _a[0];
                    return $FLek$export$Action.editingTodo(todo.id, todo.title);
                  }).text(function (_a) {
                    var todo = _a[0];
                    return todo.title;
                  });
                }).BUTTON(function ($) {
                  return $.class('destroy').onClick(function (_a) {
                    var todo = _a[0];
                    return $FLek$export$Action.removeTodo(todo.id);
                  });
                });
              }).When(function (_a) {
                var todo = _a[0],
                    state = _a[1];
                return $yo0O$var$isEditing(state, todo);
              }, function ($) {
                return $.INPUT_TEXT(function ($) {
                  return $.class('edit').value(function (_a) {
                    var _ = _a[0],
                        state = _a[1];
                    return state.editing && state.editing.title;
                  }).onKeyDown(function (_a, ev, input) {
                    var todo = _a[0];

                    if (ev.keyCode === 13) {
                      var value = input.value.trim();

                      if (value !== '') {
                        return $FLek$export$Action.updateTodo(todo.id, value);
                      } else {
                        return $FLek$export$Action.removeTodo(todo.id);
                      }
                    } else if (ev.keyCode === 27) {
                      return $FLek$export$Action.cancelEditingTodo;
                    } else {
                      return $FLek$export$Action.editingTodo(todo.id, input.value);
                    }
                  }).onBlur(function (_a, _, el) {
                    var todo = _a[0];
                    var input = el;
                    var value = input.value.trim();

                    if (value !== '') {
                      return $FLek$export$Action.updateTodo(todo.id, value);
                    } else {
                      return $FLek$export$Action.removeTodo(todo.id);
                    }
                  });
                });
              });
            });
          });
        });
      });
    }).FOOTER(function ($) {
      return $.class('footer').style('display', function (s) {
        return s.todos.length === 0 ? 'none' : 'block';
      }).SPAN(function ($) {
        return $.class('todo-count').text(function (s) {
          var left = s.todos.length - s.completed;

          if (left === 1) {
            return '1 item left';
          } else {
            return left + " items left";
          }
        });
      }).UL(function ($) {
        return $.class('filters').LI(function ($) {
          return $.A(function ($) {
            return $.href('#/').class($yo0O$var$selectedF($mIWh$export$Filter.All)).onClick($yo0O$var$changeF($mIWh$export$Filter.All)).text('All');
          });
        }).LI(function ($) {
          return $.A(function ($) {
            return $.href('#/active').class($yo0O$var$selectedF($mIWh$export$Filter.Active)).onClick($yo0O$var$changeF($mIWh$export$Filter.Active)).text('Active');
          });
        }).LI(function ($) {
          return $.A(function ($) {
            return $.href('#/completed').class($yo0O$var$selectedF($mIWh$export$Filter.Completed)).onClick($yo0O$var$changeF($mIWh$export$Filter.Completed)).text('Completed');
          });
        });
      }).When(function (s) {
        return s.completed > 0;
      }, function ($) {
        return $.BUTTON(function ($) {
          return $.class('clear-completed').onClick(function () {
            return $FLek$export$Action.clearCompleted;
          }).text('Clear completed');
        });
      });
    });
  }).FOOTER(function ($) {
    return $.class('info').P(function ($) {
      return $.text('Double-click to edit a todo');
    }).P(function ($) {
      return $.text('Created by ').A(function ($) {
        return $.href('http://github.com/fponticelli');
      }).text('Franco Ponticelli');
    }).P(function ($) {
      return $.text('Part of ').A(function ($) {
        return $.href('http://todomvc.com').text('TodoMVC');
      });
    });
  });
});
$yo0O$exports.template = $yo0O$export$template;
// ASSET: main.ts
var $ZCfc$exports = {};
Object.defineProperty($ZCfc$exports, "__esModule", {
  value: true
});
// const state = DataStore.get()
// const saveToDataStore = debounce(250)((state: State) => DataStore.set(state))
// store.property.observable.on(saveToDataStore)
// store.observable.on(console.log)
$UPGL$export$Tempo.render({
  state: $mIWh$export$emptyState(),
  reducer: $pSX2$export$reducer,
  template: $yo0O$export$template,
  delayed: false
});

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $ZCfc$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $ZCfc$exports;
  });
}

return {
  "ZCfc": $ZCfc$exports
};
});