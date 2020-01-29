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
// ASSET: ../node_modules/tempo-dom/node_modules/tempo-std/lib/maybe.js
var $pwth$exports = {};
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

Object.defineProperty($pwth$exports, "__esModule", {
  value: true
});
var $pwth$export$nothing = undefined;
$pwth$exports.nothing = $pwth$export$nothing;

var $pwth$export$just = function (value) {
  return value;
};

$pwth$exports.just = $pwth$export$just;

var $pwth$export$isNothing = function (maybe) {
  return maybe == null;
};

$pwth$exports.isNothing = $pwth$export$isNothing;

var $pwth$export$isJust = function (maybe) {
  return maybe != null;
};

$pwth$exports.isJust = $pwth$export$isJust; //# sourceMappingURL=maybe.js.map

// ASSET: ../node_modules/tempo-dom/node_modules/tempo-std/lib/arrays.js
var $LAOm$exports = {};
Object.defineProperty($LAOm$exports, "__esModule", {
  value: true
});

var $LAOm$export$map = function (f, arr) {
  var length = arr.length;
  var buff = new Array(length);

  for (var i = 0; i < length; i++) {
    buff[i] = f(arr[i]);
  }

  return buff;
};

$LAOm$exports.map = $LAOm$export$map;

var $LAOm$export$flatMap = function (f, arr) {
  var buff = new Array();

  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var el = arr_1[_i];
    buff.push.apply(buff, f(el));
  }

  return buff;
};

$LAOm$exports.flatMap = $LAOm$export$flatMap;

var $LAOm$export$head = function (arr) {
  return arr.length > 0 ? arr[0] : $pwth$export$nothing;
};

$LAOm$exports.head = $LAOm$export$head;

var $LAOm$export$tail = function (arr) {
  return arr.slice(1);
};

$LAOm$exports.tail = $LAOm$export$tail;

var $LAOm$export$equals = function (predicate, a, b) {
  if (a.length !== b.length) return false;else {
    for (var i = 0; i < a.length; i++) {
      if (!predicate(a[i], b[i])) return false;
    }

    return true;
  }
};

$LAOm$exports.equals = $LAOm$export$equals;

var $LAOm$export$isEmpty = function (arr) {
  return arr.length === 0;
};

$LAOm$exports.isEmpty = $LAOm$export$isEmpty;

var $LAOm$export$hasValues = function (arr) {
  return arr.length > 0;
};

$LAOm$exports.hasValues = $LAOm$export$hasValues;

var $LAOm$export$filter = function (predicate, arr) {
  var buff = [];

  for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
    var a = arr_2[_i];
    if (predicate(a)) buff.push(a);
  }

  return buff;
};

$LAOm$exports.filter = $LAOm$export$filter;

var $LAOm$export$flatten = function (arr) {
  var _a;

  return (_a = []).concat.apply(_a, arr);
};

$LAOm$exports.flatten = $LAOm$export$flatten;

var $LAOm$export$foldLeft = function (f, arr, b) {
  for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
    var a = arr_3[_i];
    b = f(b, a);
  }

  return b;
};

$LAOm$exports.foldLeft = $LAOm$export$foldLeft;

var $LAOm$export$all = function (predicate, arr) {
  for (var _i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
    var a = arr_4[_i];

    if (!predicate(a)) {
      return false;
    }
  }

  return true;
};

$LAOm$exports.all = $LAOm$export$all;

var $LAOm$export$any = function (predicate, arr) {
  for (var _i = 0, arr_5 = arr; _i < arr_5.length; _i++) {
    var a = arr_5[_i];

    if (predicate(a)) {
      return true;
    }
  }

  return false;
};

$LAOm$exports.any = $LAOm$export$any;

var $LAOm$export$each = function (f, arr) {
  for (var _i = 0, arr_6 = arr; _i < arr_6.length; _i++) {
    var a = arr_6[_i];
    f(a);
  }
};

$LAOm$exports.each = $LAOm$export$each;

var $LAOm$export$concat = function () {
  var _a;

  var arrs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    arrs[_i] = arguments[_i];
  }

  return (_a = []).concat.apply(_a, arrs);
};

$LAOm$exports.concat = $LAOm$export$concat;

var $LAOm$export$sort = function (compare, arr) {
  return arr.slice().sort(compare);
};

$LAOm$exports.sort = $LAOm$export$sort;

var $LAOm$export$range = function (length, f) {
  var buff = new Array(length);

  for (var i = 0; i < length; i++) buff[i] = f(i);

  return buff;
};

$LAOm$exports.range = $LAOm$export$range;

var $LAOm$export$numbersRange = function (length, startAt) {
  if (startAt === void 0) {
    startAt = 0;
  }

  return $LAOm$export$range(length, function (i) {
    return startAt + i;
  });
};

$LAOm$exports.numbersRange = $LAOm$export$numbersRange;

var $LAOm$export$fill = function (length, value) {
  return $LAOm$export$range(length, function () {
    return value;
  });
};

$LAOm$exports.fill = $LAOm$export$fill; //# sourceMappingURL=arrays.js.map

// ASSET: ../node_modules/tempo-dom/lib/utils/set_attribute.js
var $BEVE$exports = {};
Object.defineProperty($BEVE$exports, "__esModule", {
  value: true
});

function $BEVE$var$setOneStyle(el, name, value) {
  var anyStyle = el.style;

  if (value == null) {
    anyStyle[name] = null;
  } else {
    anyStyle[name] = value;
  }
}

var $BEVE$export$setOneStyle = $BEVE$var$setOneStyle;
$BEVE$exports.setOneStyle = $BEVE$export$setOneStyle;

function $BEVE$var$setAttribute(el, name, value) {
  if (value == null) {
    el.removeAttribute(name);
  } else {
    el.setAttribute(name, value);
  }
}

var $BEVE$export$setAttribute = $BEVE$var$setAttribute;
$BEVE$exports.setAttribute = $BEVE$export$setAttribute;

function $BEVE$var$setProperty(el, name, value) {
  var anyEl = el;

  if (value == null) {
    anyEl[name] = null;
  } else {
    anyEl[name] = value;
  }
}

var $BEVE$export$setProperty = $BEVE$var$setProperty;
$BEVE$exports.setProperty = $BEVE$export$setProperty;

function $BEVE$var$setStyleAttribute(el, name, value) {
  var html = el;

  if (value == null) {
    html.removeAttribute(name);
  } else if (typeof value === 'string') {
    $BEVE$var$setAttribute(el, name, value);
  } else {
    var s = $LAOm$export$map(function (k) {
      return k + ": " + value[k] + ";";
    }, Object.keys(value)).join(' ');
    $BEVE$var$setAttribute(el, name, s.length && s || null);
  }
}

var $BEVE$export$setStyleAttribute = $BEVE$var$setStyleAttribute;
$BEVE$exports.setStyleAttribute = $BEVE$export$setStyleAttribute;

function $BEVE$var$setBoolProperty(el, name, value) {
  var anyEl = el;

  if (value == null) {
    anyEl[name] = null;
  } else {
    var bool = value === true || value === 'true';
    anyEl[name] = bool;
  }
}

var $BEVE$export$setBoolProperty = $BEVE$var$setBoolProperty;
$BEVE$exports.setBoolProperty = $BEVE$export$setBoolProperty;

function $BEVE$var$setEnumBoolAttribute(el, name, value) {
  $BEVE$var$setAttribute(el, name, value === true || value === 'true' ? 'true' : value === false ? 'false' : null);
}

var $BEVE$export$setEnumBoolAttribute = $BEVE$var$setEnumBoolAttribute;
$BEVE$exports.setEnumBoolAttribute = $BEVE$export$setEnumBoolAttribute;

function $BEVE$var$setBoolAttribute(el, name, value) {
  $BEVE$var$setAttribute(el, name, value === true || value === 'true' ? '' : null);
}

var $BEVE$export$setBoolAttribute = $BEVE$var$setBoolAttribute;
$BEVE$exports.setBoolAttribute = $BEVE$export$setBoolAttribute;

function $BEVE$var$setCommaSeparated(el, name, values) {
  if (Array.isArray(values)) $BEVE$var$setAttribute(el, name, values.join(', ') || null);else $BEVE$var$setAttribute(el, name, values && String(values) || null);
}

var $BEVE$export$setCommaSeparated = $BEVE$var$setCommaSeparated;
$BEVE$exports.setCommaSeparated = $BEVE$export$setCommaSeparated;

function $BEVE$var$setSpaceSeparated(el, name, values) {
  if (Array.isArray(values)) $BEVE$var$setAttribute(el, name, values.join(' ') || null);else $BEVE$var$setAttribute(el, name, values && String(values) || null);
}

var $BEVE$export$setSpaceSeparated = $BEVE$var$setSpaceSeparated;
$BEVE$exports.setSpaceSeparated = $BEVE$export$setSpaceSeparated; //# sourceMappingURL=set_attribute.js.map

// ASSET: ../node_modules/tempo-dom/lib/dom_attributes_mapper.js
var $UKQ2$exports = {};
Object.defineProperty($UKQ2$exports, "__esModule", {
  value: true
});
/* istanbul ignore file */

var $UKQ2$export$attributeNameMap = {
  acceptcharset: 'accept-charset',
  asattr: 'as',
  classname: 'class',
  httpequiv: 'http-equiv',
  htmlfor: 'for'
};
$UKQ2$exports.attributeNameMap = $UKQ2$export$attributeNameMap;
var $UKQ2$export$htmlAttributeMap = {
  'accept-charset': $BEVE$export$setSpaceSeparated,
  class: $BEVE$export$setSpaceSeparated,
  acceptcharset: $BEVE$export$setSpaceSeparated,
  async: $BEVE$export$setBoolAttribute,
  autofocus: $BEVE$export$setBoolAttribute,
  autoplay: $BEVE$export$setBoolAttribute,
  checked: $BEVE$export$setBoolProperty,
  contenteditable: $BEVE$export$setEnumBoolAttribute,
  controls: $BEVE$export$setBoolAttribute,
  default: $BEVE$export$setBoolAttribute,
  defer: $BEVE$export$setBoolAttribute,
  disabled: $BEVE$export$setBoolAttribute,
  draggable: $BEVE$export$setEnumBoolAttribute,
  formnovalidate: $BEVE$export$setBoolAttribute,
  headers: $BEVE$export$setSpaceSeparated,
  hidden: $BEVE$export$setBoolAttribute,
  ismap: $BEVE$export$setBoolAttribute,
  itemscope: $BEVE$export$setBoolAttribute,
  loop: $BEVE$export$setBoolAttribute,
  multiple: $BEVE$export$setBoolProperty,
  muted: $BEVE$export$setBoolProperty,
  nomodule: $BEVE$export$setBoolAttribute,
  novalidate: $BEVE$export$setBoolAttribute,
  open: $BEVE$export$setBoolAttribute,
  ping: $BEVE$export$setSpaceSeparated,
  playsinline: $BEVE$export$setBoolAttribute,
  readonly: $BEVE$export$setBoolAttribute,
  rel: $BEVE$export$setSpaceSeparated,
  required: $BEVE$export$setBoolAttribute,
  reversed: $BEVE$export$setBoolAttribute,
  selected: $BEVE$export$setBoolProperty,
  sizes: $BEVE$export$setCommaSeparated,
  srcset: $BEVE$export$setCommaSeparated,
  style: $BEVE$export$setStyleAttribute,
  typemustmatch: $BEVE$export$setBoolAttribute,
  value: $BEVE$export$setProperty
};
$UKQ2$exports.htmlAttributeMap = $UKQ2$export$htmlAttributeMap; //# sourceMappingURL=dom_attributes_mapper.js.map

// ASSET: ../node_modules/tempo-dom/lib/text.js
var $GqEk$exports = {};
Object.defineProperty($GqEk$exports, "__esModule", {
  value: true
});

var $GqEk$var$DOMDerivedTextTemplate =
/** @class */
function () {
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
          if (newContent.length < 5000) content = newContent;
        }
      },
      destroy: function () {
        $TnZD$export$removeNode(node);
      },
      request: function (_) {}
    };
  };

  return DOMDerivedTextTemplate;
}();

var $GqEk$export$DOMDerivedTextTemplate = $GqEk$var$DOMDerivedTextTemplate;
$GqEk$exports.DOMDerivedTextTemplate = $GqEk$export$DOMDerivedTextTemplate;

var $GqEk$var$DOMLiteralTextTemplate =
/** @class */
function () {
  function DOMLiteralTextTemplate(content) {
    this.content = content;
  }

  DOMLiteralTextTemplate.prototype.render = function (ctx, _) {
    var node = ctx.doc.createTextNode(this.content);
    ctx.append(node);
    return {
      change: function (_) {},
      destroy: function () {
        $TnZD$export$removeNode(node);
      },
      request: function (_) {}
    };
  };

  return DOMLiteralTextTemplate;
}();

var $GqEk$export$DOMLiteralTextTemplate = $GqEk$var$DOMLiteralTextTemplate;
$GqEk$exports.DOMLiteralTextTemplate = $GqEk$export$DOMLiteralTextTemplate;

var $GqEk$export$text = function (content) {
  if (typeof content === 'function') {
    return new $GqEk$var$DOMDerivedTextTemplate(content);
  } else {
    return new $GqEk$var$DOMLiteralTextTemplate(content || '');
  }
};

$GqEk$exports.text = $GqEk$export$text; //# sourceMappingURL=text.js.map

// ASSET: ../node_modules/tempo-dom/lib/utils/dom.js
var $TnZD$exports = {};
Object.defineProperty($TnZD$exports, "__esModule", {
  value: true
});

function $TnZD$var$removeNode(node) {
  var el = node;

  if (el && el.onblur) {
    el.onblur = null;
  }

  if (!node || node.ownerDocument === undefined) return;

  if (node.parentElement) {
    node.parentElement.removeChild(node);
  }
}

var $TnZD$export$removeNode = $TnZD$var$removeNode;
$TnZD$exports.removeNode = $TnZD$export$removeNode;

function $TnZD$var$insertFBefore(ref) {
  return function (node) {
    if (ref.parentElement != null) {
      ref.parentElement.insertBefore(node, ref);
    }
  };
}

var $TnZD$export$insertFBefore = $TnZD$var$insertFBefore;
$TnZD$exports.insertFBefore = $TnZD$export$insertFBefore;

function $TnZD$var$domChildToTemplate(dom) {
  if (typeof dom === 'string' || typeof dom === 'function' || typeof dom === 'undefined') return $GqEk$export$text(dom);else return dom;
}

var $TnZD$export$domChildToTemplate = $TnZD$var$domChildToTemplate;
$TnZD$exports.domChildToTemplate = $TnZD$export$domChildToTemplate;

function $TnZD$var$processAttribute(el, name, value, acc) {
  var set = $UKQ2$export$htmlAttributeMap[name] || $BEVE$export$setAttribute;

  if (typeof value === 'function') {
    // state in inputs can incorrectly map to state
    if (el.nodeName === 'INPUT' || el.nodeName === 'TEXTAREA') {
      var f = function (state) {
        var newValue = value(state);
        set(el, name, newValue);
      };

      acc.push(f);
    } else {
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
  } else {
    set(el, name, value);
  }

  return acc;
}

var $TnZD$export$processAttribute = $TnZD$var$processAttribute;
$TnZD$exports.processAttribute = $TnZD$export$processAttribute;

function $TnZD$var$processEvent(el, name, value, dispatch, acc) {
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

var $TnZD$export$processEvent = $TnZD$var$processEvent;
$TnZD$exports.processEvent = $TnZD$export$processEvent;

function $TnZD$var$processStyle(el, name, value, acc) {
  if (typeof value === 'function') {
    var oldValue_2;

    var f = function (state) {
      var newValue = value(state);

      if (newValue !== oldValue_2) {
        $BEVE$export$setOneStyle(el, name, newValue);
        oldValue_2 = newValue;
      }
    };

    acc.push(f);
  } else {
    $BEVE$export$setOneStyle(el, name, value);
  }

  return acc;
}

var $TnZD$export$processStyle = $TnZD$var$processStyle;
$TnZD$exports.processStyle = $TnZD$export$processStyle;

var $TnZD$export$containerSize = function (el) {
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

$TnZD$exports.containerSize = $TnZD$export$containerSize; //# sourceMappingURL=dom.js.map

// ASSET: ../node_modules/tempo-dom/lib/component.js
var $yVFQ$exports = {};
Object.defineProperty($yVFQ$exports, "__esModule", {
  value: true
});

var $yVFQ$var$DOMComponentTemplate =
/** @class */
function () {
  function DOMComponentTemplate(store, children, delayed) {
    this.store = store;
    this.children = children;
    this.delayed = delayed;
  }

  DOMComponentTemplate.prototype.render = function (ctx, state) {
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

    var store = this.store;
    var property = store.property;
    property.observable.on(update);

    var innerDispatch = function (action) {
      store.process(action);
    };

    var newCtx = ctx.withDispatch(innerDispatch);
    var views = $LAOm$export$map(function (child) {
      return child.render(newCtx, property.get());
    }, this.children);
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
      }
    };
    property.set(state);
    return view;
  };

  return DOMComponentTemplate;
}();

var $yVFQ$export$DOMComponentTemplate = $yVFQ$var$DOMComponentTemplate;
$yVFQ$exports.DOMComponentTemplate = $yVFQ$export$DOMComponentTemplate;

var $yVFQ$export$component = function (attributes) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $yVFQ$var$DOMComponentTemplate(attributes.store, $LAOm$export$map($TnZD$export$domChildToTemplate, children), attributes.delayed || false);
};

$yVFQ$exports.component = $yVFQ$export$component; //# sourceMappingURL=component.js.map

// ASSET: ../node_modules/tempo-dom/lib/utils/index.js
var $Na9D$exports = {};

function $Na9D$var$__export(m) {
  for (var p in m) if (!$Na9D$exports.hasOwnProperty(p)) $Na9D$exports[p] = m[p];
}

Object.defineProperty($Na9D$exports, "__esModule", {
  value: true
});
$Na9D$var$__export($TnZD$exports);
$Na9D$var$__export($BEVE$exports); //# sourceMappingURL=index.js.map

// ASSET: ../node_modules/tempo-dom/lib/context.js
var $OJrv$exports = {};
Object.defineProperty($OJrv$exports, "__esModule", {
  value: true
});

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
var $OJrv$var$DOMContext =
/** @class */
function () {
  function DOMContext(doc, append, parent, dispatch) {
    this.doc = doc;
    this.append = append;
    this.parent = parent;
    this.dispatch = dispatch;
  }

  DOMContext.fromElement = function (element, dispatch) {
    return new DOMContext(
    /* istanbul ignore next */
    element.ownerDocument || window && window.document, function (node) {
      return element.appendChild(node);
    }, element, dispatch);
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
      ctx: this.withAppend($Na9D$exports.insertFBefore(ref)),
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
}();

var $OJrv$export$DOMContext = $OJrv$var$DOMContext;
$OJrv$exports.DOMContext = $OJrv$export$DOMContext; //# sourceMappingURL=context.js.map

// ASSET: ../node_modules/tempo-dom/lib/tempo.js
var $UPGL$exports = {};
Object.defineProperty($UPGL$exports, "__esModule", {
  value: true
});
var $UPGL$export$Tempo = {
  renderComponent: function (options) {
    var maybeElement = options.el,
        component = options.component;
    var store = component.store;
    var doc = options.document || document;
    var el = maybeElement || doc.body;

    var append = function (node) {
      return el.appendChild(node);
    };

    var view = component.render(new $OJrv$export$DOMContext(doc, append, el, function () {}), store.property.get());
    return {
      view: view,
      store: store
    };
  },
  render: function (options) {
    var el = options.el,
        store = options.store,
        document = options.document,
        template = options.template,
        delayed = options.delayed;
    var comp = $yVFQ$export$component({
      store: store,
      delayed: delayed
    }, template);
    return $UPGL$export$Tempo.renderComponent({
      el: el,
      component: comp,
      document: document
    });
  }
};
$UPGL$exports.Tempo = $UPGL$export$Tempo; //# sourceMappingURL=tempo.js.map

// ASSET: ../node_modules/tempo-store/lib/emitter.js
var $bXMb$exports = {};
Object.defineProperty($bXMb$exports, "__esModule", {
  value: true
});

var $bXMb$var$Emitter =
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

var $bXMb$export$Emitter = $bXMb$var$Emitter;
$bXMb$exports.Emitter = $bXMb$export$Emitter;

var $bXMb$export$debounce = function (delay) {
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
};

$bXMb$exports.debounce = $bXMb$export$debounce;

var $bXMb$export$nextFrame = function (listener) {
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
};

$bXMb$exports.nextFrame = $bXMb$export$nextFrame; //# sourceMappingURL=emitter.js.map

// ASSET: ../node_modules/tempo-store/node_modules/tempo-std/lib/equals.js
var $fRdy$exports = {};
Object.defineProperty($fRdy$exports, "__esModule", {
  value: true
});

var $fRdy$export$strictEqual = function (a, b) {
  return a === b || a !== a && b !== b;
};

$fRdy$exports.strictEqual = $fRdy$export$strictEqual;

var $fRdy$export$deepEqual = function (a, b) {
  if ($fRdy$export$strictEqual(a, b)) return true;
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
      if (!$fRdy$export$deepEqual(aArr[i], bArr[i])) return false;
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
      if (!$fRdy$export$deepEqual(aMap.get(curr.value), bMap.get(curr.value))) return false;
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
      if (!$fRdy$export$deepEqual(aObj[field], bObj[field])) return false;
    }

    return true;
  }

  return false;
};

$fRdy$exports.deepEqual = $fRdy$export$deepEqual; //# sourceMappingURL=equals.js.map

// ASSET: ../node_modules/tempo-store/lib/property.js
var $zFui$exports = {};
Object.defineProperty($zFui$exports, "__esModule", {
  value: true
});

var $zFui$var$Property =
/** @class */
function () {
  function Property(value, equal) {
    if (equal === void 0) {
      equal = $fRdy$export$strictEqual;
    }

    this.value = value;
    this.equal = equal;
    this.observable = this.emitter = $bXMb$export$Emitter.ofOne();
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

var $zFui$export$Property = $zFui$var$Property;
$zFui$exports.Property = $zFui$export$Property; //# sourceMappingURL=property.js.map

// ASSET: ../node_modules/tempo-store/lib/store.js
var $xN6r$exports = {};
Object.defineProperty($xN6r$exports, "__esModule", {
  value: true
});

var $xN6r$var$Store =
/** @class */
function () {
  function Store(property, reducer) {
    this.property = property;
    this.reducer = reducer;
    this.observable = this.emitter = $bXMb$export$Emitter.ofThree();
  }

  Store.ofState = function (options) {
    return new Store(new $zFui$export$Property(options.state, options.equal), options.reducer);
  };

  Store.prototype.process = function (action) {
    var value = this.reducer(this.property.get(), action);
    var result = this.property.set(value);
    this.emitter.emit(value, action, result);
    return result;
  };

  return Store;
}();

var $xN6r$export$Store = $xN6r$var$Store;
$xN6r$exports.Store = $xN6r$export$Store; //# sourceMappingURL=store.js.map

// ASSET: utils.ts
var $UnXq$exports = {};
Object.defineProperty($UnXq$exports, "__esModule", {
  value: true
});

var $UnXq$var$Utils =
/** @class */
function () {
  function Utils() {}

  Utils.uuid = function () {
    var uuid = '';

    for (var i = 0; i < 32; i++) {
      var random = Math.random() * 16 | 0;

      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      } // tslint:disable-next-line:no-bitwise


      uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
    }

    return uuid;
  };

  Utils.pluralize = function (count, word) {
    return count === 1 ? word : word + 's';
  };

  return Utils;
}();

var $UnXq$export$Utils = $UnXq$var$Utils;
$UnXq$exports.Utils = $UnXq$export$Utils;
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
var $mIWh$var$Filter;

(function (Filter) {
  Filter[Filter["All"] = 0] = "All";
  Filter[Filter["Active"] = 1] = "Active";
  Filter[Filter["Completed"] = 2] = "Completed";
})($mIWh$var$Filter = $mIWh$export$Filter || ($mIWh$export$Filter = {}, $mIWh$exports.Filter = $mIWh$export$Filter));

var $mIWh$export$createTodo = function (title) {
  return {
    id: $UnXq$export$Utils.uuid(),
    title: title,
    completed: false
  };
};

$mIWh$exports.createTodo = $mIWh$export$createTodo;

var $mIWh$export$emptyState = function () {
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
// ASSET: ../node_modules/tempo-std/lib/maybe.js
var $KScB$exports = {};
Object.defineProperty($KScB$exports, "__esModule", {
  value: true
});
var $KScB$export$nothing = undefined;
$KScB$exports.nothing = $KScB$export$nothing;

var $KScB$export$just = function (value) {
  return value;
};

$KScB$exports.just = $KScB$export$just;

var $KScB$export$isNothing = function (maybe) {
  return maybe == null;
};

$KScB$exports.isNothing = $KScB$export$isNothing;

var $KScB$export$isJust = function (maybe) {
  return maybe != null;
};

$KScB$exports.isJust = $KScB$export$isJust;
// ASSET: ../node_modules/tempo-std/lib/arrays.js
var $o25q$exports = {};
Object.defineProperty($o25q$exports, "__esModule", {
  value: true
});

var $o25q$export$map = function (f, arr) {
  var length = arr.length;
  var buff = new Array(length);

  for (var i = 0; i < length; i++) {
    buff[i] = f(arr[i]);
  }

  return buff;
};

$o25q$exports.map = $o25q$export$map;

var $o25q$export$flatMap = function (f, arr) {
  var buff = new Array();

  for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var el = arr_1[_i];
    buff.push.apply(buff, f(el));
  }

  return buff;
};

$o25q$exports.flatMap = $o25q$export$flatMap;

var $o25q$export$head = function (arr) {
  return arr.length > 0 ? arr[0] : $KScB$export$nothing;
};

$o25q$exports.head = $o25q$export$head;

var $o25q$export$tail = function (arr) {
  return arr.slice(1);
};

$o25q$exports.tail = $o25q$export$tail;

var $o25q$export$equals = function (predicate, a, b) {
  if (a.length !== b.length) return false;else {
    for (var i = 0; i < a.length; i++) {
      if (!predicate(a[i], b[i])) return false;
    }

    return true;
  }
};

$o25q$exports.equals = $o25q$export$equals;

var $o25q$export$isEmpty = function (arr) {
  return arr.length === 0;
};

$o25q$exports.isEmpty = $o25q$export$isEmpty;

var $o25q$export$hasValues = function (arr) {
  return arr.length > 0;
};

$o25q$exports.hasValues = $o25q$export$hasValues;

var $o25q$export$filter = function (predicate, arr) {
  var buff = [];

  for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
    var a = arr_2[_i];
    if (predicate(a)) buff.push(a);
  }

  return buff;
};

$o25q$exports.filter = $o25q$export$filter;

var $o25q$export$flatten = function (arr) {
  var _a;

  return (_a = []).concat.apply(_a, arr);
};

$o25q$exports.flatten = $o25q$export$flatten;

var $o25q$export$foldLeft = function (f, arr, b) {
  for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
    var a = arr_3[_i];
    b = f(b, a);
  }

  return b;
};

$o25q$exports.foldLeft = $o25q$export$foldLeft;

var $o25q$export$all = function (predicate, arr) {
  for (var _i = 0, arr_4 = arr; _i < arr_4.length; _i++) {
    var a = arr_4[_i];

    if (!predicate(a)) {
      return false;
    }
  }

  return true;
};

$o25q$exports.all = $o25q$export$all;

var $o25q$export$any = function (predicate, arr) {
  for (var _i = 0, arr_5 = arr; _i < arr_5.length; _i++) {
    var a = arr_5[_i];

    if (predicate(a)) {
      return true;
    }
  }

  return false;
};

$o25q$exports.any = $o25q$export$any;

var $o25q$export$each = function (f, arr) {
  for (var _i = 0, arr_6 = arr; _i < arr_6.length; _i++) {
    var a = arr_6[_i];
    f(a);
  }
};

$o25q$exports.each = $o25q$export$each;

var $o25q$export$concat = function () {
  var _a;

  var arrs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    arrs[_i] = arguments[_i];
  }

  return (_a = []).concat.apply(_a, arrs);
};

$o25q$exports.concat = $o25q$export$concat;

var $o25q$export$sort = function (compare, arr) {
  return arr.slice().sort(compare);
};

$o25q$exports.sort = $o25q$export$sort;

var $o25q$export$range = function (length, f) {
  var buff = new Array(length);

  for (var i = 0; i < length; i++) buff[i] = f(i);

  return buff;
};

$o25q$exports.range = $o25q$export$range;

var $o25q$export$numbersRange = function (length, startAt) {
  if (startAt === void 0) {
    startAt = 0;
  }

  return $o25q$export$range(length, function (i) {
    return startAt + i;
  });
};

$o25q$exports.numbersRange = $o25q$export$numbersRange;

var $o25q$export$fill = function (length, value) {
  return $o25q$export$range(length, function () {
    return value;
  });
};

$o25q$exports.fill = $o25q$export$fill;
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

var $pSX2$export$reducer = function (state, action) {
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
      var todos4 = $o25q$export$map(function (todo) {
        if (todo.completed !== allCompleted_1) {
          return todo;
        } else {
          return $pSX2$var$__assign($pSX2$var$__assign({}, todo), {
            completed: !allCompleted_1
          });
        }
      }, state.todos);
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
// ASSET: ../node_modules/tempo-dom/lib/element.js
var $bbLX$exports = {};
Object.defineProperty($bbLX$exports, "__esModule", {
  value: true
});

var $bbLX$var$applyChange = function (change, el, ctx) {
  return function (state, value) {
    return change(state, el, ctx, value);
  };
};

var $bbLX$var$applyAfterRender = function (attr, el, ctx, state) {
  if (typeof attr !== undefined) {
    return attr(state, el, ctx);
  } else {
    return undefined;
  }
};

var $bbLX$var$DOMElement =
/** @class */
function () {
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
      $TnZD$export$processAttribute(el, o.name, o.value, allChanges);
    }

    for (var _b = 0, _c = this.events; _b < _c.length; _b++) {
      var o = _c[_b];
      $TnZD$export$processEvent(el, o.name, o.value, ctx.dispatch, allChanges);
    }

    for (var _d = 0, _e = this.styles; _d < _e.length; _d++) {
      var o = _e[_d];
      $TnZD$export$processStyle(el, o.name, o.value, allChanges);
    }

    for (var _f = 0, allChanges_1 = allChanges; _f < allChanges_1.length; _f++) {
      var change = allChanges_1[_f];
      change(state);
    } // children


    var appendChild = function (n) {
      return el.appendChild(n);
    };

    var newCtx = ctx.withAppend(appendChild).withParent(el);
    var views = $LAOm$export$map(function (child) {
      return child.render(newCtx, state);
    }, this.children);
    ctx.append(el);

    if (this.afterrender) {
      value = $bbLX$var$applyAfterRender(this.afterrender, el, ctx, state);
    }

    var viewChanges = $LAOm$export$map(function (child) {
      return function (state) {
        return child.change(state);
      };
    }, views);
    allChanges.push.apply(allChanges, viewChanges);

    if (this.beforechange) {
      var change_1 = $bbLX$var$applyChange(this.beforechange, el, ctx);

      var update = function (state) {
        value = change_1(state, value);
      };

      allChanges.unshift(update);
    }

    if (this.afterchange) {
      var change_2 = $bbLX$var$applyChange(this.afterchange, el, ctx);

      var update = function (state) {
        value = change_2(state, value);
      };

      allChanges.push(update);
    }

    var beforedestroyf = this.beforedestroy && function () {
      return _this.beforedestroy(el, ctx, value);
    };

    var respond = this.respond;
    return {
      change: function (state) {
        for (var _i = 0, allChanges_2 = allChanges; _i < allChanges_2.length; _i++) {
          var change = allChanges_2[_i];
          change(state);
        }
      },
      destroy: function () {
        if (beforedestroyf) beforedestroyf();
        $TnZD$export$removeNode(el);

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
}();

var $bbLX$export$DOMElement = $bbLX$var$DOMElement;
$bbLX$exports.DOMElement = $bbLX$export$DOMElement;

function $bbLX$var$extractAttrs(attrs) {
  return $LAOm$export$map(function (attName) {
    var name = attName.toLowerCase();
    name = $UKQ2$export$attributeNameMap[name] || name;
    return {
      name: name,
      value: attrs[attName]
    };
  }, Object.keys(attrs || {}));
}

function $bbLX$var$extractEvents(attrs) {
  return $LAOm$export$map(function (eventName) {
    var name = "on" + eventName.toLowerCase();
    return {
      name: name,
      value: attrs[eventName]
    };
  }, Object.keys(attrs || {}));
}

function $bbLX$var$extractStyles(attrs) {
  return $LAOm$export$map(function (name) {
    return {
      name: name,
      value: attrs[name]
    };
  }, Object.keys(attrs || {}));
}

var $bbLX$var$makeCreateElement = function (name) {
  return function (doc) {
    return doc.createElement(name);
  };
};

var $bbLX$export$el = function (name, attributes) {
  var children = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    children[_i - 2] = arguments[_i];
  }

  return new $bbLX$var$DOMElement($bbLX$var$makeCreateElement(name), $bbLX$var$extractAttrs(attributes.attrs), $bbLX$var$extractEvents(attributes.events), $bbLX$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$bbLX$exports.el = $bbLX$export$el;

var $bbLX$export$el2 = function (name) {
  return function (attributes) {
    var children = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      children[_i - 1] = arguments[_i];
    }

    return new $bbLX$var$DOMElement($bbLX$var$makeCreateElement(name), $bbLX$var$extractAttrs(attributes.attrs), $bbLX$var$extractEvents(attributes.events), $bbLX$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
  };
};

$bbLX$exports.el2 = $bbLX$export$el2;
var $bbLX$export$defaultNamespaces = {
  'svg': 'http://www.w3.org/2000/svg'
};
$bbLX$exports.defaultNamespaces = $bbLX$export$defaultNamespaces;

var $bbLX$var$makeCreateElementNS = function (namespace, name) {
  return function (doc) {
    return doc.createElementNS(namespace, name);
  };
};

var $bbLX$export$elNS = function (ns, name, attributes) {
  var children = [];

  for (var _i = 3; _i < arguments.length; _i++) {
    children[_i - 3] = arguments[_i];
  }

  var namespace = $bbLX$export$defaultNamespaces[ns] || ns;
  return new $bbLX$var$DOMElement($bbLX$var$makeCreateElementNS(namespace, name), $bbLX$var$extractAttrs(attributes.attrs), $bbLX$var$extractEvents(attributes.events), $bbLX$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$bbLX$exports.elNS = $bbLX$export$elNS;

var $bbLX$export$elNS2 = function (namespace, name) {
  return function (attributes) {
    var children = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      children[_i - 1] = arguments[_i];
    }

    return new $bbLX$var$DOMElement($bbLX$var$makeCreateElementNS(namespace, name), $bbLX$var$extractAttrs(attributes.attrs), $bbLX$var$extractEvents(attributes.events), $bbLX$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
  };
};

$bbLX$exports.elNS2 = $bbLX$export$elNS2; //# sourceMappingURL=element.js.map

// ASSET: ../node_modules/tempo-dom/lib/html.js
var $zQMt$exports = {};
Object.defineProperty($zQMt$exports, "__esModule", {
  value: true
});
var $zQMt$export$a = $bbLX$export$el2('a');
$zQMt$exports.a = $zQMt$export$a;
var $zQMt$export$abbr = $bbLX$export$el2('abbr');
$zQMt$exports.abbr = $zQMt$export$abbr;
var $zQMt$export$address = $bbLX$export$el2('address');
$zQMt$exports.address = $zQMt$export$address;
var $zQMt$export$applet = $bbLX$export$el2('applet');
$zQMt$exports.applet = $zQMt$export$applet;
var $zQMt$export$area = $bbLX$export$el2('area');
$zQMt$exports.area = $zQMt$export$area;
var $zQMt$export$article = $bbLX$export$el2('article');
$zQMt$exports.article = $zQMt$export$article;
var $zQMt$export$aside = $bbLX$export$el2('aside');
$zQMt$exports.aside = $zQMt$export$aside;
var $zQMt$export$audio = $bbLX$export$el2('audio');
$zQMt$exports.audio = $zQMt$export$audio;
var $zQMt$export$b = $bbLX$export$el2('b');
$zQMt$exports.b = $zQMt$export$b;
var $zQMt$export$base = $bbLX$export$el2('base');
$zQMt$exports.base = $zQMt$export$base;
var $zQMt$export$basefont = $bbLX$export$el2('basefont');
$zQMt$exports.basefont = $zQMt$export$basefont;
var $zQMt$export$bdi = $bbLX$export$el2('bdi');
$zQMt$exports.bdi = $zQMt$export$bdi;
var $zQMt$export$bdo = $bbLX$export$el2('bdo');
$zQMt$exports.bdo = $zQMt$export$bdo;
var $zQMt$export$blockquote = $bbLX$export$el2('blockquote');
$zQMt$exports.blockquote = $zQMt$export$blockquote;
var $zQMt$export$body = $bbLX$export$el2('body');
$zQMt$exports.body = $zQMt$export$body;
var $zQMt$export$br = $bbLX$export$el2('br');
$zQMt$exports.br = $zQMt$export$br;
var $zQMt$export$button = $bbLX$export$el2('button');
$zQMt$exports.button = $zQMt$export$button;
var $zQMt$export$canvas = $bbLX$export$el2('canvas');
$zQMt$exports.canvas = $zQMt$export$canvas;
var $zQMt$export$caption = $bbLX$export$el2('caption');
$zQMt$exports.caption = $zQMt$export$caption;
var $zQMt$export$cite = $bbLX$export$el2('cite');
$zQMt$exports.cite = $zQMt$export$cite;
var $zQMt$export$code = $bbLX$export$el2('code');
$zQMt$exports.code = $zQMt$export$code;
var $zQMt$export$col = $bbLX$export$el2('col');
$zQMt$exports.col = $zQMt$export$col;
var $zQMt$export$colgroup = $bbLX$export$el2('colgroup');
$zQMt$exports.colgroup = $zQMt$export$colgroup;
var $zQMt$export$data = $bbLX$export$el2('data');
$zQMt$exports.data = $zQMt$export$data;
var $zQMt$export$datalist = $bbLX$export$el2('datalist');
$zQMt$exports.datalist = $zQMt$export$datalist;
var $zQMt$export$dd = $bbLX$export$el2('dd');
$zQMt$exports.dd = $zQMt$export$dd;
var $zQMt$export$del = $bbLX$export$el2('del');
$zQMt$exports.del = $zQMt$export$del;
var $zQMt$export$details = $bbLX$export$el2('details');
$zQMt$exports.details = $zQMt$export$details;
var $zQMt$export$dfn = $bbLX$export$el2('dfn');
$zQMt$exports.dfn = $zQMt$export$dfn;
var $zQMt$export$dialog = $bbLX$export$el2('dialog');
$zQMt$exports.dialog = $zQMt$export$dialog;
var $zQMt$export$dir = $bbLX$export$el2('dir');
$zQMt$exports.dir = $zQMt$export$dir;
var $zQMt$export$div = $bbLX$export$el2('div');
$zQMt$exports.div = $zQMt$export$div;
var $zQMt$export$dl = $bbLX$export$el2('dl');
$zQMt$exports.dl = $zQMt$export$dl;
var $zQMt$export$dt = $bbLX$export$el2('dt');
$zQMt$exports.dt = $zQMt$export$dt;
var $zQMt$export$em = $bbLX$export$el2('em');
$zQMt$exports.em = $zQMt$export$em;
var $zQMt$export$embed = $bbLX$export$el2('embed');
$zQMt$exports.embed = $zQMt$export$embed;
var $zQMt$export$fieldset = $bbLX$export$el2('fieldset');
$zQMt$exports.fieldset = $zQMt$export$fieldset;
var $zQMt$export$figcaption = $bbLX$export$el2('figcaption');
$zQMt$exports.figcaption = $zQMt$export$figcaption;
var $zQMt$export$figure = $bbLX$export$el2('figure');
$zQMt$exports.figure = $zQMt$export$figure;
var $zQMt$export$font = $bbLX$export$el2('font');
$zQMt$exports.font = $zQMt$export$font;
var $zQMt$export$footer = $bbLX$export$el2('footer');
$zQMt$exports.footer = $zQMt$export$footer;
var $zQMt$export$form = $bbLX$export$el2('form');
$zQMt$exports.form = $zQMt$export$form;
var $zQMt$export$frame = $bbLX$export$el2('frame');
$zQMt$exports.frame = $zQMt$export$frame;
var $zQMt$export$frameset = $bbLX$export$el2('frameset');
$zQMt$exports.frameset = $zQMt$export$frameset;
var $zQMt$export$h1 = $bbLX$export$el2('h1');
$zQMt$exports.h1 = $zQMt$export$h1;
var $zQMt$export$h2 = $bbLX$export$el2('h2');
$zQMt$exports.h2 = $zQMt$export$h2;
var $zQMt$export$h3 = $bbLX$export$el2('h3');
$zQMt$exports.h3 = $zQMt$export$h3;
var $zQMt$export$h4 = $bbLX$export$el2('h4');
$zQMt$exports.h4 = $zQMt$export$h4;
var $zQMt$export$h5 = $bbLX$export$el2('h5');
$zQMt$exports.h5 = $zQMt$export$h5;
var $zQMt$export$h6 = $bbLX$export$el2('h6');
$zQMt$exports.h6 = $zQMt$export$h6;
var $zQMt$export$head = $bbLX$export$el2('head');
$zQMt$exports.head = $zQMt$export$head;
var $zQMt$export$header = $bbLX$export$el2('header');
$zQMt$exports.header = $zQMt$export$header;
var $zQMt$export$hgroup = $bbLX$export$el2('hgroup');
$zQMt$exports.hgroup = $zQMt$export$hgroup;
var $zQMt$export$hr = $bbLX$export$el2('hr');
$zQMt$exports.hr = $zQMt$export$hr;
var $zQMt$export$html = $bbLX$export$el2('html');
$zQMt$exports.html = $zQMt$export$html;
var $zQMt$export$i = $bbLX$export$el2('i');
$zQMt$exports.i = $zQMt$export$i;
var $zQMt$export$iframe = $bbLX$export$el2('iframe');
$zQMt$exports.iframe = $zQMt$export$iframe;
var $zQMt$export$img = $bbLX$export$el2('img');
$zQMt$exports.img = $zQMt$export$img;
var $zQMt$export$input = $bbLX$export$el2('input');
$zQMt$exports.input = $zQMt$export$input;
var $zQMt$export$ins = $bbLX$export$el2('ins');
$zQMt$exports.ins = $zQMt$export$ins;
var $zQMt$export$kbd = $bbLX$export$el2('kbd');
$zQMt$exports.kbd = $zQMt$export$kbd;
var $zQMt$export$label = $bbLX$export$el2('label');
$zQMt$exports.label = $zQMt$export$label;
var $zQMt$export$legend = $bbLX$export$el2('legend');
$zQMt$exports.legend = $zQMt$export$legend;
var $zQMt$export$li = $bbLX$export$el2('li');
$zQMt$exports.li = $zQMt$export$li;
var $zQMt$export$link = $bbLX$export$el2('link');
$zQMt$exports.link = $zQMt$export$link;
var $zQMt$export$listing = $bbLX$export$el2('listing');
$zQMt$exports.listing = $zQMt$export$listing;
var $zQMt$export$main = $bbLX$export$el2('main');
$zQMt$exports.main = $zQMt$export$main;
var $zQMt$export$map = $bbLX$export$el2('map');
$zQMt$exports.map = $zQMt$export$map;
var $zQMt$export$mark = $bbLX$export$el2('mark');
$zQMt$exports.mark = $zQMt$export$mark;
var $zQMt$export$marquee = $bbLX$export$el2('marquee');
$zQMt$exports.marquee = $zQMt$export$marquee;
var $zQMt$export$menu = $bbLX$export$el2('menu');
$zQMt$exports.menu = $zQMt$export$menu;
var $zQMt$export$meta = $bbLX$export$el2('meta');
$zQMt$exports.meta = $zQMt$export$meta;
var $zQMt$export$meter = $bbLX$export$el2('meter');
$zQMt$exports.meter = $zQMt$export$meter;
var $zQMt$export$nav = $bbLX$export$el2('nav');
$zQMt$exports.nav = $zQMt$export$nav;
var $zQMt$export$noscript = $bbLX$export$el2('noscript');
$zQMt$exports.noscript = $zQMt$export$noscript;
var $zQMt$export$object = $bbLX$export$el2('object');
$zQMt$exports.object = $zQMt$export$object;
var $zQMt$export$ol = $bbLX$export$el2('ol');
$zQMt$exports.ol = $zQMt$export$ol;
var $zQMt$export$optgroup = $bbLX$export$el2('optgroup');
$zQMt$exports.optgroup = $zQMt$export$optgroup;
var $zQMt$export$option = $bbLX$export$el2('option');
$zQMt$exports.option = $zQMt$export$option;
var $zQMt$export$output = $bbLX$export$el2('output');
$zQMt$exports.output = $zQMt$export$output;
var $zQMt$export$p = $bbLX$export$el2('p');
$zQMt$exports.p = $zQMt$export$p;
var $zQMt$export$param = $bbLX$export$el2('param');
$zQMt$exports.param = $zQMt$export$param;
var $zQMt$export$picture = $bbLX$export$el2('picture');
$zQMt$exports.picture = $zQMt$export$picture;
var $zQMt$export$pre = $bbLX$export$el2('pre');
$zQMt$exports.pre = $zQMt$export$pre;
var $zQMt$export$progress = $bbLX$export$el2('progress');
$zQMt$exports.progress = $zQMt$export$progress;
var $zQMt$export$q = $bbLX$export$el2('q');
$zQMt$exports.q = $zQMt$export$q;
var $zQMt$export$rp = $bbLX$export$el2('rp');
$zQMt$exports.rp = $zQMt$export$rp;
var $zQMt$export$rt = $bbLX$export$el2('rt');
$zQMt$exports.rt = $zQMt$export$rt;
var $zQMt$export$ruby = $bbLX$export$el2('ruby');
$zQMt$exports.ruby = $zQMt$export$ruby;
var $zQMt$export$s = $bbLX$export$el2('s');
$zQMt$exports.s = $zQMt$export$s;
var $zQMt$export$samp = $bbLX$export$el2('samp');
$zQMt$exports.samp = $zQMt$export$samp;
var $zQMt$export$script = $bbLX$export$el2('script');
$zQMt$exports.script = $zQMt$export$script;
var $zQMt$export$section = $bbLX$export$el2('section');
$zQMt$exports.section = $zQMt$export$section;
var $zQMt$export$select = $bbLX$export$el2('select');
$zQMt$exports.select = $zQMt$export$select;
var $zQMt$export$slot = $bbLX$export$el2('slot');
$zQMt$exports.slot = $zQMt$export$slot;
var $zQMt$export$small = $bbLX$export$el2('small');
$zQMt$exports.small = $zQMt$export$small;
var $zQMt$export$source = $bbLX$export$el2('source');
$zQMt$exports.source = $zQMt$export$source;
var $zQMt$export$span = $bbLX$export$el2('span');
$zQMt$exports.span = $zQMt$export$span;
var $zQMt$export$strong = $bbLX$export$el2('strong');
$zQMt$exports.strong = $zQMt$export$strong;
var $zQMt$export$style = $bbLX$export$el2('style');
$zQMt$exports.style = $zQMt$export$style;
var $zQMt$export$sub = $bbLX$export$el2('sub');
$zQMt$exports.sub = $zQMt$export$sub;
var $zQMt$export$summary = $bbLX$export$el2('summary');
$zQMt$exports.summary = $zQMt$export$summary;
var $zQMt$export$sup = $bbLX$export$el2('sup');
$zQMt$exports.sup = $zQMt$export$sup;
var $zQMt$export$table = $bbLX$export$el2('table');
$zQMt$exports.table = $zQMt$export$table;
var $zQMt$export$tbody = $bbLX$export$el2('tbody');
$zQMt$exports.tbody = $zQMt$export$tbody;
var $zQMt$export$td = $bbLX$export$el2('td');
$zQMt$exports.td = $zQMt$export$td;
var $zQMt$export$template = $bbLX$export$el2('template');
$zQMt$exports.template = $zQMt$export$template;
var $zQMt$export$textarea = $bbLX$export$el2('textarea');
$zQMt$exports.textarea = $zQMt$export$textarea;
var $zQMt$export$tfoot = $bbLX$export$el2('tfoot');
$zQMt$exports.tfoot = $zQMt$export$tfoot;
var $zQMt$export$th = $bbLX$export$el2('th');
$zQMt$exports.th = $zQMt$export$th;
var $zQMt$export$thead = $bbLX$export$el2('thead');
$zQMt$exports.thead = $zQMt$export$thead;
var $zQMt$export$time = $bbLX$export$el2('time');
$zQMt$exports.time = $zQMt$export$time;
var $zQMt$export$title = $bbLX$export$el2('title');
$zQMt$exports.title = $zQMt$export$title;
var $zQMt$export$tr = $bbLX$export$el2('tr');
$zQMt$exports.tr = $zQMt$export$tr;
var $zQMt$export$track = $bbLX$export$el2('track');
$zQMt$exports.track = $zQMt$export$track;
var $zQMt$export$u = $bbLX$export$el2('u');
$zQMt$exports.u = $zQMt$export$u;
var $zQMt$export$ul = $bbLX$export$el2('ul');
$zQMt$exports.ul = $zQMt$export$ul;
var $zQMt$export$varEl = $bbLX$export$el2('var');
$zQMt$exports.varEl = $zQMt$export$varEl;
var $zQMt$export$video = $bbLX$export$el2('video');
$zQMt$exports.video = $zQMt$export$video;
var $zQMt$export$wbr = $bbLX$export$el2('wbr');
$zQMt$exports.wbr = $zQMt$export$wbr;
var $zQMt$export$xmp = $bbLX$export$el2('xmp');
$zQMt$exports.xmp = $zQMt$export$xmp; //# sourceMappingURL=html.js.map

// ASSET: ../node_modules/tempo-dom/lib/filter.js
var $Utso$exports = {};
Object.defineProperty($Utso$exports, "__esModule", {
  value: true
});

var $Utso$var$FilterStateTemplate =
/** @class */
function () {
  function FilterStateTemplate(isSame, children) {
    this.isSame = isSame;
    this.children = children;
  }

  FilterStateTemplate.prototype.render = function (ctx, state) {
    var _a = this,
        children = _a.children,
        filter = _a.isSame;

    var views = $LAOm$export$map(function (c) {
      return c.render(ctx, state);
    }, children);
    var prevState = state;
    return {
      change: function (newState) {
        if (!filter(prevState, newState)) {
          prevState = newState;

          for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
            var view = views_1[_i];
            view.change(newState);
          }
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

  return FilterStateTemplate;
}();

var $Utso$export$FilterStateTemplate = $Utso$var$FilterStateTemplate;
$Utso$exports.FilterStateTemplate = $Utso$export$FilterStateTemplate;

var $Utso$export$filterState = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $Utso$var$FilterStateTemplate(options.isSame || function (a, b) {
    return a === b;
  }, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$Utso$exports.filterState = $Utso$export$filterState; //# sourceMappingURL=filter.js.map

// ASSET: ../node_modules/tempo-dom/lib/map.js
var $qep0$exports = {};
Object.defineProperty($qep0$exports, "__esModule", {
  value: true
});

var $qep0$var$MapStateTemplate =
/** @class */
function () {
  function MapStateTemplate(map, children) {
    this.map = map;
    this.children = children;
  }

  MapStateTemplate.prototype.render = function (ctx, state) {
    var _a = this,
        children = _a.children,
        map = _a.map;

    var innerState = map(state);
    var views = $LAOm$export$map(function (c) {
      return c.render(ctx, innerState);
    }, children);
    return {
      change: function (state) {
        var innerState = map(state);

        for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
          var view = views_1[_i];
          view.change(innerState);
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

  return MapStateTemplate;
}();

var $qep0$export$MapStateTemplate = $qep0$var$MapStateTemplate;
$qep0$exports.MapStateTemplate = $qep0$export$MapStateTemplate;

var $qep0$export$mapState = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $qep0$var$MapStateTemplate(options.map, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$qep0$exports.mapState = $qep0$export$mapState;

var $qep0$export$mapStateAndKeep = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $qep0$var$MapStateTemplate(function (state) {
    return [options.map(state), state];
  }, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$qep0$exports.mapStateAndKeep = $qep0$export$mapStateAndKeep;

var $qep0$var$MapActionTemplate =
/** @class */
function () {
  function MapActionTemplate(map, children) {
    this.map = map;
    this.children = children;
  }

  MapActionTemplate.prototype.render = function (ctx, state) {
    var _a = this,
        children = _a.children,
        map = _a.map;

    var newCtx = ctx.conditionalMapAction(map);
    var views = $LAOm$export$map(function (c) {
      return c.render(newCtx, state);
    }, children);
    return {
      change: function (state) {
        for (var _i = 0, views_4 = views; _i < views_4.length; _i++) {
          var view = views_4[_i];
          view.change(state);
        }
      },
      destroy: function () {
        for (var _i = 0, views_5 = views; _i < views_5.length; _i++) {
          var view = views_5[_i];
          view.destroy();
        }
      },
      request: function (query) {
        for (var _i = 0, views_6 = views; _i < views_6.length; _i++) {
          var view = views_6[_i];
          view.request(query);
        }
      }
    };
  };

  return MapActionTemplate;
}();

var $qep0$export$MapActionTemplate = $qep0$var$MapActionTemplate;
$qep0$exports.MapActionTemplate = $qep0$export$MapActionTemplate;

var $qep0$export$mapAction = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $qep0$var$MapActionTemplate(options.map, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$qep0$exports.mapAction = $qep0$export$mapAction;

var $qep0$var$MapQueryTemplate =
/** @class */
function () {
  function MapQueryTemplate(map, children) {
    this.map = map;
    this.children = children;
  }

  MapQueryTemplate.prototype.render = function (ctx, state) {
    var _a = this,
        children = _a.children,
        map = _a.map;

    var views = $LAOm$export$map(function (c) {
      return c.render(ctx, state);
    }, children);
    return {
      change: function (state) {
        for (var _i = 0, views_7 = views; _i < views_7.length; _i++) {
          var view = views_7[_i];
          view.change(state);
        }
      },
      destroy: function () {
        for (var _i = 0, views_8 = views; _i < views_8.length; _i++) {
          var view = views_8[_i];
          view.destroy();
        }
      },
      request: function (query) {
        var innerQuery = map(query);

        if (typeof innerQuery !== 'undefined') {
          views.forEach(function (view) {
            return view.request(innerQuery);
          });
        }
      }
    };
  };

  return MapQueryTemplate;
}();

var $qep0$export$MapQueryTemplate = $qep0$var$MapQueryTemplate;
$qep0$exports.MapQueryTemplate = $qep0$export$MapQueryTemplate;

var $qep0$export$mapQuery = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $qep0$var$MapQueryTemplate(options.map, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$qep0$exports.mapQuery = $qep0$export$mapQuery;

var $qep0$export$mapQueryConditional = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $qep0$var$MapQueryTemplate(options.map, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$qep0$exports.mapQueryConditional = $qep0$export$mapQueryConditional; //# sourceMappingURL=map.js.map

// ASSET: ../node_modules/tempo-dom/lib/until.js
var $UU8h$exports = {};
Object.defineProperty($UU8h$exports, "__esModule", {
  value: true
});

var $UU8h$var$DOMUntilTemplate = function () {
  function DOMUntilTemplate(options, children) {
    this.options = options;
    this.children = children;
  }

  DOMUntilTemplate.prototype.render = function (ctx, state) {
    var children = this.children;
    var _a = this.options,
        refId = _a.refId,
        repeatUntil = _a.repeatUntil;

    var _b = ctx.withAppendToReference(refId),
        newCtx = _b.ctx,
        ref = _b.ref;

    var childrenViews = [];
    var view = {
      change: function (state) {
        var currentLength = childrenViews.length;
        var index = 0;

        var _loop_1 = function () {
          var value = repeatUntil(state, index);
          if (typeof value === 'undefined') return "break";

          if (index < currentLength) {
            // replace existing
            var filteredViews = childrenViews[index];

            for (var _i = 0, filteredViews_1 = filteredViews; _i < filteredViews_1.length; _i++) {
              var view_1 = filteredViews_1[_i];
              view_1.change(value);
            }
          } else {
            // add node
            childrenViews.push($LAOm$export$map(function (el) {
              return el.render(newCtx, value);
            }, children));
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
        $TnZD$export$removeNode(ref);

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
}();

var $UU8h$export$DOMUntilTemplate = $UU8h$var$DOMUntilTemplate;
$UU8h$exports.DOMUntilTemplate = $UU8h$export$DOMUntilTemplate;

var $UU8h$export$until = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $UU8h$var$DOMUntilTemplate(options, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$UU8h$exports.until = $UU8h$export$until; //# sourceMappingURL=until.js.map

// ASSET: ../node_modules/tempo-dom/lib/iterate.js
var $GBq0$exports = {};

var $GBq0$var$__spreadArrays = $GBq0$exports && $GBq0$exports.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty($GBq0$exports, "__esModule", {
  value: true
});

var $GBq0$export$iterate = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  var outerState;
  return $qep0$export$mapState({
    map: function (outer) {
      outerState = outer;
      return options.getArray(outer);
    }
  }, $UU8h$export$until.apply(void 0, $GBq0$var$__spreadArrays([{
    repeatUntil: function (value, index) {
      return value[index] && [value[index], outerState, index];
    }
  }], children)));
};

$GBq0$exports.iterate = $GBq0$export$iterate;

var $GBq0$export$iterateItems = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return $qep0$export$mapState({
    map: function (outer) {
      return options.getArray(outer);
    }
  }, $UU8h$export$until.apply(void 0, $GBq0$var$__spreadArrays([{
    repeatUntil: function (value, index) {
      return value[index];
    }
  }], children)));
};

$GBq0$exports.iterateItems = $GBq0$export$iterateItems; //# sourceMappingURL=iterate.js.map

// ASSET: ../node_modules/tempo-dom/lib/when.js
var $Qev4$exports = {};
Object.defineProperty($Qev4$exports, "__esModule", {
  value: true
});

var $Qev4$var$DOMWhenTemplate =
/** @class */
function () {
  function DOMWhenTemplate(options, children) {
    this.options = options;
    this.children = children;
  }

  DOMWhenTemplate.prototype.render = function (ctx, state) {
    var _this = this;

    var _a = this.options,
        condition = _a.condition,
        refId = _a.refId;

    var _b = ctx.withAppendToReference(refId || 't:when'),
        newCtx = _b.ctx,
        ref = _b.ref;

    var views;
    var view = {
      change: function (state) {
        if (condition(state)) {
          if (typeof views === 'undefined') {
            // it has never been rendered before
            views = $LAOm$export$map(function (c) {
              return c.render(newCtx, state);
            }, _this.children);
          } else {
            for (var _i = 0, views_1 = views; _i < views_1.length; _i++) {
              var view_1 = views_1[_i];
              view_1.change(state);
            }
          }
        } else if (typeof views !== 'undefined') {
          for (var _a = 0, views_2 = views; _a < views_2.length; _a++) {
            var view_2 = views_2[_a];
            view_2.destroy();
          }

          views = undefined;
        }
      },
      destroy: function () {
        $TnZD$export$removeNode(ref);

        if (typeof views !== 'undefined') {
          for (var _i = 0, views_3 = views; _i < views_3.length; _i++) {
            var view_3 = views_3[_i];
            view_3.destroy();
          }
        }
      },
      request: function (query) {
        if (typeof views !== 'undefined') {
          for (var _i = 0, views_4 = views; _i < views_4.length; _i++) {
            var view_4 = views_4[_i];
            view_4.request(query);
          }
        }
      }
    };
    view.change(state);
    return view;
  };

  return DOMWhenTemplate;
}();

var $Qev4$export$DOMWhenTemplate = $Qev4$var$DOMWhenTemplate;
$Qev4$exports.DOMWhenTemplate = $Qev4$export$DOMWhenTemplate;

var $Qev4$export$when = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $Qev4$var$DOMWhenTemplate(options, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$Qev4$exports.when = $Qev4$export$when;

var $Qev4$export$unless = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $Qev4$var$DOMWhenTemplate({
    condition: function (v) {
      return !options.condition(v);
    },
    refId: options.refId || 't:unless'
  }, $LAOm$export$map($TnZD$export$domChildToTemplate, children));
};

$Qev4$exports.unless = $Qev4$export$unless; //# sourceMappingURL=when.js.map

// ASSET: action.ts
var $FLek$exports = {};
Object.defineProperty($FLek$exports, "__esModule", {
  value: true
});

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
var $FLek$export$Action = {
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

var $yo0O$export$template = $zQMt$export$section({}, $zQMt$export$section({
  attrs: {
    className: 'todoapp'
  }
}, $zQMt$export$header({
  attrs: {
    className: 'header'
  }
}, $zQMt$export$h1({}, 'todos'), $Utso$export$filterState({
  isSame: function isSame(a, b) {
    return false;
  }
}, $zQMt$export$input({
  attrs: {
    type: 'text',
    className: 'new-todo',
    placeholder: 'What needs to be done?',
    autofocus: function autofocus(state) {
      return state.editing == null;
    },
    value: function value(state) {
      return state.adding;
    }
  },
  events: {
    keydown: function keydown(_, e, input) {
      if (e.keyCode === 13) {
        return $FLek$export$Action.createTodo(input.value.trim());
      } else if (e.keyCode === 27) {
        return $FLek$export$Action.cancelAddingTodo;
      } else {
        return $FLek$export$Action.adddingTodo(input.value);
      }
    }
  }
}))), $zQMt$export$section({
  attrs: {
    className: 'main'
  },
  styles: {
    visibility: function visibility(state) {
      return state.todos.length === 0 ? 'hidden' : '';
    }
  }
}, $zQMt$export$input({
  attrs: {
    id: 'toggle-all',
    className: 'toggle-all',
    type: 'checkbox',
    checked: function checked(state) {
      return state.completed === state.todos.length;
    }
  },
  events: {
    click: function click() {
      return $FLek$export$Action.toggleAllTodo;
    }
  }
}), $zQMt$export$label({
  attrs: {
    for: 'toggle-all'
  }
}, 'Mark all as complete'), $zQMt$export$ul({
  attrs: {
    className: 'todo-list'
  }
}, $GBq0$export$iterate({
  getArray: function getArray(state) {
    return state.filtered;
  }
}, $Utso$export$filterState({
  isSame: function isSame(_a, _b) {
    var a = _a[0],
        sa = _a[1];
    var b = _b[0],
        sb = _b[1];
    return a === b && sa.editing === sb.editing;
  }
}, $zQMt$export$li({
  attrs: {
    className: function className(_a) {
      var todo = _a[0],
          state = _a[1];
      var classes = [todo.completed ? 'completed' : undefined, $yo0O$var$isEditing(state, todo) ? 'editing' : undefined].filter(function (v) {
        return v != null;
      });
      return classes.join(' ') || undefined;
    }
  }
}, $zQMt$export$div({
  attrs: {
    className: 'view'
  }
}, $zQMt$export$input({
  attrs: {
    className: 'toggle',
    type: 'checkbox',
    checked: function checked(_a) {
      var todo = _a[0];
      return todo.completed;
    }
  },
  events: {
    change: function change(_a) {
      var todo = _a[0];
      return $FLek$export$Action.toggleTodo(todo.id);
    }
  }
}), $zQMt$export$label({
  events: {
    dblclick: function dblclick(_a) {
      var todo = _a[0];
      return $FLek$export$Action.editingTodo(todo.id, todo.title);
    }
  }
}, function (_a) {
  var todo = _a[0];
  return todo.title;
}), $zQMt$export$button({
  attrs: {
    className: 'destroy'
  },
  events: {
    click: function click(_a) {
      var todo = _a[0];
      return $FLek$export$Action.removeTodo(todo.id);
    }
  }
})), $Qev4$export$when({
  condition: function condition(_a) {
    var todo = _a[0],
        state = _a[1];
    return $yo0O$var$isEditing(state, todo);
  }
  /* todo.editing */

}, $zQMt$export$input({
  afterrender: function afterrender(_, el) {
    return el.focus();
  },
  attrs: {
    type: 'text',
    className: 'edit',
    value: function value(_a) {
      var _ = _a[0],
          state = _a[1];
      return state.editing && state.editing.title;
    }
  },
  events: {
    keydown: function keydown(_a, e, input) {
      var todo = _a[0];

      if (e.keyCode === 13) {
        var value = input.value.trim();

        if (value !== '') {
          return $FLek$export$Action.updateTodo(todo.id, value);
        } else {
          return $FLek$export$Action.removeTodo(todo.id);
        }
      } else if (e.keyCode === 27) {
        return $FLek$export$Action.cancelEditingTodo;
      } else {
        return $FLek$export$Action.editingTodo(todo.id, input.value);
      }
    },
    blur: function blur(_a, e, input) {
      var todo = _a[0];
      var value = input.value.trim();

      if (value !== '') {
        return $FLek$export$Action.updateTodo(todo.id, value);
      } else {
        return $FLek$export$Action.removeTodo(todo.id);
      }
    }
  }
}))))))), $Utso$export$filterState({
  isSame: function isSame(a, b) {
    return a.filter === b.filter && a.completed === b.completed && a.todos.length === b.todos.length;
  }
}, $zQMt$export$footer({
  attrs: {
    className: 'footer'
  },
  styles: {
    display: function display(state) {
      return state.todos.length === 0 ? 'none' : 'block';
    }
  }
}, $zQMt$export$span({
  attrs: {
    className: 'todo-count'
  }
}, function (state) {
  var left = state.todos.length - state.completed;

  if (left === 1) {
    return '1 item left';
  } else {
    return left + " items left";
  }
}), $zQMt$export$ul({
  attrs: {
    className: 'filters'
  }
}, $zQMt$export$li({}, $zQMt$export$a({
  attrs: {
    href: '#/',
    className: $yo0O$var$selectedF($mIWh$export$Filter.All)
  },
  events: {
    click: $yo0O$var$changeF($mIWh$export$Filter.All)
  }
}, 'All')), $zQMt$export$li({}, $zQMt$export$a({
  attrs: {
    href: '#/active',
    className: $yo0O$var$selectedF($mIWh$export$Filter.Active)
  },
  events: {
    click: $yo0O$var$changeF($mIWh$export$Filter.Active)
  }
}, 'Active')), $zQMt$export$li({}, $zQMt$export$a({
  attrs: {
    href: '#/completed',
    className: $yo0O$var$selectedF($mIWh$export$Filter.Completed)
  },
  events: {
    click: $yo0O$var$changeF($mIWh$export$Filter.Completed)
  }
}, 'Completed'))), $Qev4$export$when({
  condition: function condition(state) {
    return state.completed > 0;
  }
}, $zQMt$export$button({
  attrs: {
    className: 'clear-completed'
  },
  events: {
    click: function click() {
      return $FLek$export$Action.clearCompleted;
    }
  }
}, 'Clear completed'))))), $zQMt$export$footer({
  attrs: {
    className: 'info'
  }
}, $zQMt$export$p({}, 'Double-click to edit a todo'), $zQMt$export$p({}, 'Created by ', $zQMt$export$a({
  attrs: {
    href: 'http://github.com/fponticelli'
  }
}, 'Franco Ponticelli')), $zQMt$export$p({}, 'Part of ', $zQMt$export$a({
  attrs: {
    href: 'http://todomvc.com'
  }
}, 'TodoMVC'))));
$yo0O$exports.template = $yo0O$export$template;
// ASSET: main.ts
var $ZCfc$exports = {};
Object.defineProperty($ZCfc$exports, "__esModule", {
  value: true
});
// const state = DataStore.get()
var $ZCfc$var$store = $xN6r$export$Store.ofState({
  state: $mIWh$export$emptyState(),
  reducer: $pSX2$export$reducer
}); // const saveToDataStore = debounce(250)((state: State) => DataStore.set(state))
// store.property.observable.on(saveToDataStore)
// store.observable.on(console.log)

$UPGL$export$Tempo.render({
  store: $ZCfc$var$store,
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