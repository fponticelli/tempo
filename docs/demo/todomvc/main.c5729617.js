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
// ASSET: ../node_modules/@tempo/dom/node_modules/@tempo/core/lib/util/map.js
var $UNaj$exports = {};
Object.defineProperty($UNaj$exports, "__esModule", {
  value: true
});

var $UNaj$export$mapArray = function (arr, f) {
  var length = arr.length;
  var buff = new Array(length);

  for (var i = 0; i < length; i++) {
    buff[i] = f(arr[i]);
  }

  return buff;
};

$UNaj$exports.mapArray = $UNaj$export$mapArray; //# sourceMappingURL=map.js.map

// ASSET: ../node_modules/@tempo/dom/lib/utils/set_attribute.js
var $AxMU$exports = {};
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

Object.defineProperty($AxMU$exports, "__esModule", {
  value: true
});

function $AxMU$var$setOneStyle(el, name, value) {
  var anyStyle = el.style;

  if (value == null) {
    anyStyle[name] = null;
  } else {
    anyStyle[name] = value;
  }
}

var $AxMU$export$setOneStyle = $AxMU$var$setOneStyle;
$AxMU$exports.setOneStyle = $AxMU$export$setOneStyle;

function $AxMU$var$setAttribute(el, name, value) {
  if (value == null) {
    el.removeAttribute(name);
  } else {
    el.setAttribute(name, value);
  }
}

var $AxMU$export$setAttribute = $AxMU$var$setAttribute;
$AxMU$exports.setAttribute = $AxMU$export$setAttribute;

function $AxMU$var$setProperty(el, name, value) {
  var anyEl = el;

  if (value == null) {
    anyEl[name] = null;
  } else {
    anyEl[name] = value;
  }
}

var $AxMU$export$setProperty = $AxMU$var$setProperty;
$AxMU$exports.setProperty = $AxMU$export$setProperty;

function $AxMU$var$setStyleAttribute(el, name, value) {
  var html = el;

  if (value == null) {
    html.removeAttribute(name);
  } else if (typeof value === 'string') {
    $AxMU$var$setAttribute(el, name, value);
  } else {
    var s = $UNaj$export$mapArray(Object.keys(value), function (k) {
      return k + ": " + value[k] + ";";
    }).join(' ');
    $AxMU$var$setAttribute(el, name, s.length && s || null);
  }
}

var $AxMU$export$setStyleAttribute = $AxMU$var$setStyleAttribute;
$AxMU$exports.setStyleAttribute = $AxMU$export$setStyleAttribute;

function $AxMU$var$setBoolProperty(el, name, value) {
  var anyEl = el;

  if (value == null) {
    anyEl[name] = null;
  } else {
    var bool = value === true || value === 'true';
    anyEl[name] = bool;
  }
}

var $AxMU$export$setBoolProperty = $AxMU$var$setBoolProperty;
$AxMU$exports.setBoolProperty = $AxMU$export$setBoolProperty;

function $AxMU$var$setEnumBoolAttribute(el, name, value) {
  $AxMU$var$setAttribute(el, name, value === true || value === 'true' ? 'true' : value === false ? 'false' : null);
}

var $AxMU$export$setEnumBoolAttribute = $AxMU$var$setEnumBoolAttribute;
$AxMU$exports.setEnumBoolAttribute = $AxMU$export$setEnumBoolAttribute;

function $AxMU$var$setBoolAttribute(el, name, value) {
  $AxMU$var$setAttribute(el, name, value === true || value === 'true' ? '' : null);
}

var $AxMU$export$setBoolAttribute = $AxMU$var$setBoolAttribute;
$AxMU$exports.setBoolAttribute = $AxMU$export$setBoolAttribute;

function $AxMU$var$setCommaSeparated(el, name, values) {
  if (Array.isArray(values)) $AxMU$var$setAttribute(el, name, values.join(', ') || null);else $AxMU$var$setAttribute(el, name, values && String(values) || null);
}

var $AxMU$export$setCommaSeparated = $AxMU$var$setCommaSeparated;
$AxMU$exports.setCommaSeparated = $AxMU$export$setCommaSeparated;

function $AxMU$var$setSpaceSeparated(el, name, values) {
  if (Array.isArray(values)) $AxMU$var$setAttribute(el, name, values.join(' ') || null);else $AxMU$var$setAttribute(el, name, values && String(values) || null);
}

var $AxMU$export$setSpaceSeparated = $AxMU$var$setSpaceSeparated;
$AxMU$exports.setSpaceSeparated = $AxMU$export$setSpaceSeparated; //# sourceMappingURL=set_attribute.js.map

// ASSET: ../node_modules/@tempo/dom/lib/dom_attributes_mapper.js
var $QBLY$exports = {};
Object.defineProperty($QBLY$exports, "__esModule", {
  value: true
});
/* istanbul ignore file */

var $QBLY$export$attributeNameMap = {
  acceptcharset: 'accept-charset',
  asattr: 'as',
  classname: 'class',
  httpequiv: 'http-equiv',
  htmlfor: 'for'
};
$QBLY$exports.attributeNameMap = $QBLY$export$attributeNameMap;
var $QBLY$export$htmlAttributeMap = {
  'accept-charset': $AxMU$export$setSpaceSeparated,
  class: $AxMU$export$setSpaceSeparated,
  acceptcharset: $AxMU$export$setSpaceSeparated,
  async: $AxMU$export$setBoolAttribute,
  autofocus: $AxMU$export$setBoolAttribute,
  autoplay: $AxMU$export$setBoolAttribute,
  checked: $AxMU$export$setBoolProperty,
  contenteditable: $AxMU$export$setEnumBoolAttribute,
  controls: $AxMU$export$setBoolAttribute,
  default: $AxMU$export$setBoolAttribute,
  defer: $AxMU$export$setBoolAttribute,
  disabled: $AxMU$export$setBoolAttribute,
  draggable: $AxMU$export$setEnumBoolAttribute,
  formnovalidate: $AxMU$export$setBoolAttribute,
  headers: $AxMU$export$setSpaceSeparated,
  hidden: $AxMU$export$setBoolAttribute,
  ismap: $AxMU$export$setBoolAttribute,
  itemscope: $AxMU$export$setBoolAttribute,
  loop: $AxMU$export$setBoolAttribute,
  multiple: $AxMU$export$setBoolProperty,
  muted: $AxMU$export$setBoolProperty,
  nomodule: $AxMU$export$setBoolAttribute,
  novalidate: $AxMU$export$setBoolAttribute,
  open: $AxMU$export$setBoolAttribute,
  ping: $AxMU$export$setSpaceSeparated,
  playsinline: $AxMU$export$setBoolAttribute,
  readonly: $AxMU$export$setBoolAttribute,
  rel: $AxMU$export$setSpaceSeparated,
  required: $AxMU$export$setBoolAttribute,
  reversed: $AxMU$export$setBoolAttribute,
  selected: $AxMU$export$setBoolProperty,
  sizes: $AxMU$export$setCommaSeparated,
  srcset: $AxMU$export$setCommaSeparated,
  style: $AxMU$export$setStyleAttribute,
  typemustmatch: $AxMU$export$setBoolAttribute,
  value: $AxMU$export$setProperty
};
$QBLY$exports.htmlAttributeMap = $QBLY$export$htmlAttributeMap; //# sourceMappingURL=dom_attributes_mapper.js.map

// ASSET: ../node_modules/@tempo/dom/lib/node_view.js
var $TJFn$exports = {};

var $TJFn$var$__extends = $TJFn$exports && $TJFn$exports.__extends || function () {
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

Object.defineProperty($TJFn$exports, "__esModule", {
  value: true
});

var $TJFn$var$DOMBaseNodeView =
/** @class */
function () {
  function DOMBaseNodeView(node, children, beforeDestroy) {
    this.node = node;
    this.children = children;
    this.beforeDestroy = beforeDestroy;
  }

  DOMBaseNodeView.prototype.destroy = function () {
    if (this.beforeDestroy) this.beforeDestroy();
    $KfbX$export$removeNode(this.node);

    for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
      var c = _a[_i];
      c.destroy();
    }
  };

  return DOMBaseNodeView;
}();

var $TJFn$export$DOMBaseNodeView = $TJFn$var$DOMBaseNodeView;
$TJFn$exports.DOMBaseNodeView = $TJFn$export$DOMBaseNodeView;

var $TJFn$var$DOMStaticNodeView =
/** @class */
function (_super) {
  $TJFn$var$__extends(DOMStaticNodeView, _super);

  function DOMStaticNodeView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.kind = 'static';
    return _this;
  }

  return DOMStaticNodeView;
}($TJFn$var$DOMBaseNodeView);

var $TJFn$export$DOMStaticNodeView = $TJFn$var$DOMStaticNodeView;
$TJFn$exports.DOMStaticNodeView = $TJFn$export$DOMStaticNodeView;

var $TJFn$var$DOMDynamicNodeView =
/** @class */
function (_super) {
  $TJFn$var$__extends(DOMDynamicNodeView, _super);

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
}($TJFn$var$DOMBaseNodeView);

var $TJFn$export$DOMDynamicNodeView = $TJFn$var$DOMDynamicNodeView;
$TJFn$exports.DOMDynamicNodeView = $TJFn$export$DOMDynamicNodeView; //# sourceMappingURL=node_view.js.map

// ASSET: ../node_modules/@tempo/dom/lib/text.js
var $jTie$exports = {};
Object.defineProperty($jTie$exports, "__esModule", {
  value: true
});

var $jTie$var$renderLiteral = function (ctx, value) {
  var node = ctx.doc.createTextNode(value || '');
  var view = new $TJFn$export$DOMStaticNodeView(node, []);
  ctx.append(node);
  return view;
};

var $jTie$var$renderFunction = function (ctx, state, map) {
  var node = ctx.doc.createTextNode(map(state) || '');

  var f = function (state) {
    var newContent = map(state) || '';
    node.nodeValue = newContent;
  };

  var view = new $TJFn$export$DOMDynamicNodeView(node, [], f);
  ctx.append(node);
  return view;
};

var $jTie$var$DOMText =
/** @class */
function () {
  function DOMText(content) {
    this.content = content;
  }

  DOMText.prototype.render = function (ctx, state) {
    if (typeof this.content === 'function') {
      return $jTie$var$renderFunction(ctx, state, this.content);
    } else {
      return $jTie$var$renderLiteral(ctx, this.content);
    }
  };

  return DOMText;
}();

var $jTie$export$DOMText = $jTie$var$DOMText;
$jTie$exports.DOMText = $jTie$export$DOMText;

var $jTie$export$text = function (content) {
  return new $jTie$var$DOMText(content);
};

$jTie$exports.text = $jTie$export$text; //# sourceMappingURL=text.js.map

// ASSET: ../node_modules/@tempo/dom/lib/utils/dom.js
var $KfbX$exports = {};
Object.defineProperty($KfbX$exports, "__esModule", {
  value: true
});

function $KfbX$var$removeNode(node) {
  var el = node;

  if (el && el.onblur) {
    el.onblur = null;
  }

  if (!node || node.ownerDocument === undefined) return;

  if (node.parentElement) {
    node.parentElement.removeChild(node);
  }
}

var $KfbX$export$removeNode = $KfbX$var$removeNode;
$KfbX$exports.removeNode = $KfbX$export$removeNode;

function $KfbX$var$insertBefore(ref) {
  return function (node) {
    if (ref.parentElement != null) {
      ref.parentElement.insertBefore(node, ref);
    }
  };
}

var $KfbX$export$insertBefore = $KfbX$var$insertBefore;
$KfbX$exports.insertBefore = $KfbX$export$insertBefore;

function $KfbX$var$filterDynamics(children) {
  return children.filter(function (child) {
    return child.kind === 'dynamic';
  });
}

var $KfbX$export$filterDynamics = $KfbX$var$filterDynamics;
$KfbX$exports.filterDynamics = $KfbX$export$filterDynamics;

function $KfbX$var$domChildToTemplate(dom) {
  if (typeof dom === 'string' || typeof dom === 'function') return $jTie$export$text(dom);else return dom;
}

var $KfbX$export$domChildToTemplate = $KfbX$var$domChildToTemplate;
$KfbX$exports.domChildToTemplate = $KfbX$export$domChildToTemplate;

function $KfbX$var$processAttribute(el, name, value, acc) {
  var set = $QBLY$export$htmlAttributeMap[name] || $AxMU$export$setAttribute;

  if (typeof value === 'function') {
    var f = function (state) {
      return set(el, name, value(state));
    };

    acc.push(f);
  } else {
    set(el, name, value);
  }

  return acc;
}

var $KfbX$export$processAttribute = $KfbX$var$processAttribute;
$KfbX$exports.processAttribute = $KfbX$export$processAttribute;

function $KfbX$var$processEvent(el, name, value, dispatch, acc) {
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

var $KfbX$export$processEvent = $KfbX$var$processEvent;
$KfbX$exports.processEvent = $KfbX$export$processEvent;

function $KfbX$var$processStyle(el, name, value, acc) {
  if (typeof value === 'function') {
    var f = function (state) {
      return $AxMU$export$setOneStyle(el, name, value(state));
    };

    acc.push(f);
  } else {
    $AxMU$export$setOneStyle(el, name, value);
  }

  return acc;
}

var $KfbX$export$processStyle = $KfbX$var$processStyle;
$KfbX$exports.processStyle = $KfbX$export$processStyle; //# sourceMappingURL=dom.js.map

// ASSET: ../node_modules/@tempo/dom/lib/fragment.js
var $xGqp$exports = {};

var $xGqp$var$__extends = $xGqp$exports && $xGqp$exports.__extends || function () {
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

Object.defineProperty($xGqp$exports, "__esModule", {
  value: true
});

var $xGqp$var$DOMBaseFragmentView =
/** @class */
function () {
  function DOMBaseFragmentView(views) {
    this.views = views;
  }

  DOMBaseFragmentView.prototype.destroy = function () {
    for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
      var v = _a[_i];
      v.destroy();
    }
  };

  return DOMBaseFragmentView;
}();

var $xGqp$export$DOMBaseFragmentView = $xGqp$var$DOMBaseFragmentView;
$xGqp$exports.DOMBaseFragmentView = $xGqp$export$DOMBaseFragmentView;

var $xGqp$var$DOMStaticFragmentView =
/** @class */
function (_super) {
  $xGqp$var$__extends(DOMStaticFragmentView, _super);

  function DOMStaticFragmentView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.kind = 'static';
    return _this;
  }

  return DOMStaticFragmentView;
}($xGqp$var$DOMBaseFragmentView);

var $xGqp$export$DOMStaticFragmentView = $xGqp$var$DOMStaticFragmentView;
$xGqp$exports.DOMStaticFragmentView = $xGqp$export$DOMStaticFragmentView;

var $xGqp$var$DOMDynamicFragmentView =
/** @class */
function (_super) {
  $xGqp$var$__extends(DOMDynamicFragmentView, _super);

  function DOMDynamicFragmentView(views, change) {
    var _this = _super.call(this, views) || this;

    _this.change = change;
    _this.kind = 'dynamic';
    return _this;
  }

  return DOMDynamicFragmentView;
}($xGqp$var$DOMBaseFragmentView);

var $xGqp$export$DOMDynamicFragmentView = $xGqp$var$DOMDynamicFragmentView;
$xGqp$exports.DOMDynamicFragmentView = $xGqp$export$DOMDynamicFragmentView;

var $xGqp$export$fragmentView = function (views) {
  var dynamics = $KfbX$export$filterDynamics(views);

  if (dynamics.length > 0) {
    return new $xGqp$var$DOMDynamicFragmentView(views, function (state) {
      for (var _i = 0, dynamics_1 = dynamics; _i < dynamics_1.length; _i++) {
        var d = dynamics_1[_i];
        d.change(state);
      }
    });
  } else {
    return new $xGqp$var$DOMStaticFragmentView(views);
  }
};

$xGqp$exports.fragmentView = $xGqp$export$fragmentView;

var $xGqp$var$DOMFragment =
/** @class */
function () {
  function DOMFragment(children) {
    this.children = children;
  }

  DOMFragment.prototype.render = function (ctx, state) {
    var views = $UNaj$export$mapArray(this.children, function (child) {
      return child.render(ctx, state);
    });
    return $xGqp$export$fragmentView(views);
  };

  return DOMFragment;
}();

var $xGqp$export$DOMFragment = $xGqp$var$DOMFragment;
$xGqp$exports.DOMFragment = $xGqp$export$DOMFragment;

var $xGqp$export$fragment = function () {
  var children = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    children[_i] = arguments[_i];
  }

  return new $xGqp$var$DOMFragment($UNaj$export$mapArray(children, $KfbX$export$domChildToTemplate));
};

$xGqp$exports.fragment = $xGqp$export$fragment; //# sourceMappingURL=fragment.js.map

// ASSET: ../node_modules/@tempo/dom/lib/component.js
var $Mlpu$exports = {};

var $Mlpu$var$__extends = $Mlpu$exports && $Mlpu$exports.__extends || function () {
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

Object.defineProperty($Mlpu$exports, "__esModule", {
  value: true
});

var $Mlpu$var$DOMComponentView =
/** @class */
function (_super) {
  $Mlpu$var$__extends(DOMComponentView, _super);
  /* istanbul ignore next */

  function DOMComponentView(store, dispatch, children, dynamics, _destroy) {
    var _this = _super.call(this, children, function (state) {
      store.property.set(state);

      for (var _i = 0, dynamics_1 = dynamics; _i < dynamics_1.length; _i++) {
        var dy = dynamics_1[_i];
        dy.change(state);
      }
    }) || this;

    _this.store = store;
    _this.dispatch = dispatch;
    _this._destroy = _destroy;
    return _this;
  }

  DOMComponentView.prototype.destroy = function () {
    this._destroy();

    _super.prototype.destroy.call(this);
  };

  return DOMComponentView;
}($xGqp$export$DOMDynamicFragmentView);

var $Mlpu$export$DOMComponentView = $Mlpu$var$DOMComponentView;
$Mlpu$exports.DOMComponentView = $Mlpu$export$DOMComponentView;

var $Mlpu$var$DOMComponent =
/** @class */
function () {
  function DOMComponent(store, children, delayed) {
    this.store = store;
    this.children = children;
    this.delayed = delayed;
  }

  DOMComponent.prototype.render = function (ctx, state) {
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
    store.property.observable.on(update);

    var innerDispatch = function (action) {
      store.process(action);
    };

    var newCtx = ctx.withDispatch(innerDispatch);
    var viewChildren = $UNaj$export$mapArray(this.children, function (child) {
      return child.render(newCtx, store.property.get());
    });
    var dynamics = $KfbX$export$filterDynamics(viewChildren);
    var view = new $Mlpu$var$DOMComponentView(store, innerDispatch, viewChildren, dynamics, function () {
      store.property.observable.off(update);
    });
    store.property.set(state);
    return view;
  };

  return DOMComponent;
}();

var $Mlpu$export$DOMComponent = $Mlpu$var$DOMComponent;
$Mlpu$exports.DOMComponent = $Mlpu$export$DOMComponent;

var $Mlpu$export$component = function (attributes) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $Mlpu$var$DOMComponent(attributes.store, $UNaj$export$mapArray(children, $KfbX$export$domChildToTemplate), attributes.delayed || false);
};

$Mlpu$exports.component = $Mlpu$export$component; //# sourceMappingURL=component.js.map

// ASSET: ../node_modules/@tempo/dom/lib/context.js
var $TsAd$exports = {};
Object.defineProperty($TsAd$exports, "__esModule", {
  value: true
});

var $TsAd$var$DOMContext =
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

var $TsAd$export$DOMContext = $TsAd$var$DOMContext;
$TsAd$exports.DOMContext = $TsAd$export$DOMContext; //# sourceMappingURL=context.js.map

// ASSET: ../node_modules/@tempo/dom/lib/tempo.js
var $sCte$export$Tempo,
    $sCte$exports = {};
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

Object.defineProperty($sCte$exports, "__esModule", {
  value: true
});
var $sCte$var$Tempo;

(function (Tempo) {
  function renderComponent(options) {
    var maybeElement = options.el,
        component = options.component;
    var store = component.store;
    /* istanbul ignore next */

    var doc = options.document || document;
    var el = maybeElement || doc.body;

    var append = function (node) {
      return el.appendChild(node);
    };

    var view = component.render(new $TsAd$export$DOMContext(doc, append, el, function () {}), store.property.get());
    return {
      destroy: function () {
        return view.destroy();
      },
      store: store
    };
  }

  Tempo.renderComponent = renderComponent;

  function render(options) {
    var el = options.el,
        store = options.store,
        document = options.document,
        template = options.template,
        delayed = options.delayed;
    var comp = $Mlpu$export$component({
      store: store,
      delayed: delayed
    }, template);
    return Tempo.renderComponent({
      el: el,
      component: comp,
      document: document
    });
  }

  Tempo.render = render;
})($sCte$var$Tempo = $sCte$export$Tempo || ($sCte$export$Tempo = {}, $sCte$exports.Tempo = $sCte$export$Tempo)); //# sourceMappingURL=tempo.js.map


// ASSET: ../node_modules/@tempo/store/lib/emitter.js
var $bSoa$exports = {};
Object.defineProperty($bSoa$exports, "__esModule", {
  value: true
});

var $bSoa$var$Emitter =
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

var $bSoa$export$Emitter = $bSoa$var$Emitter;
$bSoa$exports.Emitter = $bSoa$export$Emitter;

var $bSoa$export$debounce = function (delay) {
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

$bSoa$exports.debounce = $bSoa$export$debounce;

var $bSoa$export$nextFrame = function (listener) {
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

$bSoa$exports.nextFrame = $bSoa$export$nextFrame; //# sourceMappingURL=emitter.js.map

// ASSET: ../node_modules/@tempo/store/lib/equality.js
var $a8lm$exports = {};
Object.defineProperty($a8lm$exports, "__esModule", {
  value: true
});

var $a8lm$export$strictEqual = function (a, b) {
  return a === b || a !== a && b !== b;
};

$a8lm$exports.strictEqual = $a8lm$export$strictEqual;

var $a8lm$export$deepEqual = function (a, b) {
  if ($a8lm$export$strictEqual(a, b)) return true;
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
      if (!$a8lm$export$deepEqual(aArr[i], bArr[i])) return false;
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
      if (!$a8lm$export$deepEqual(aMap.get(curr.value), bMap.get(curr.value))) return false;
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
      if (!$a8lm$export$deepEqual(aObj[field], bObj[field])) return false;
    }

    return true;
  }

  return false;
};

$a8lm$exports.deepEqual = $a8lm$export$deepEqual; //# sourceMappingURL=equality.js.map

// ASSET: ../node_modules/@tempo/store/lib/property.js
var $HNeW$exports = {};
Object.defineProperty($HNeW$exports, "__esModule", {
  value: true
});

// @ts-ignore
var $HNeW$var$Property =
/** @class */
function () {
  function Property(value, equal) {
    if (equal === void 0) {
      equal = $a8lm$export$deepEqual;
    }

    this.value = value;
    this.equal = equal;
    this.observable = this.emitter = $bSoa$export$Emitter.ofOne();
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

var $HNeW$export$Property = $HNeW$var$Property;
$HNeW$exports.Property = $HNeW$export$Property; //# sourceMappingURL=property.js.map

// ASSET: ../node_modules/@tempo/store/lib/store.js
var $UiLj$exports = {};
Object.defineProperty($UiLj$exports, "__esModule", {
  value: true
});

var $UiLj$var$Store =
/** @class */
function () {
  function Store(property, reducer) {
    this.property = property;
    this.reducer = reducer;
    this.observable = this.emitter = $bSoa$export$Emitter.ofThree();
  }

  Store.ofState = function (options) {
    return new Store(new $HNeW$export$Property(options.state, options.equal), options.reducer);
  };

  Store.prototype.process = function (action) {
    var value = this.reducer(this.property.get(), action);
    var result = this.property.set(value);
    this.emitter.emit(value, action, result);
    return result;
  };

  return Store;
}();

var $UiLj$export$Store = $UiLj$var$Store;
$UiLj$exports.Store = $UiLj$export$Store; //# sourceMappingURL=store.js.map

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
      // tslint:disable-next-line:no-bitwise
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
    todos: [],
    completed: 0,
    adding: undefined,
    editing: undefined
  };
};

$mIWh$exports.emptyState = $mIWh$export$emptyState;
// ASSET: ../node_modules/@tempo/core/lib/util/map.js
var $xdbv$exports = {};
Object.defineProperty($xdbv$exports, "__esModule", {
  value: true
});

var $xdbv$export$mapArray = function (arr, f) {
  var length = arr.length;
  var buff = new Array(length);

  for (var i = 0; i < length; i++) {
    buff[i] = f(arr[i]);
  }

  return buff;
};

$xdbv$exports.mapArray = $xdbv$export$mapArray;
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
        return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
          todos: todos_1,
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
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        completed: todos.filter(function (todo) {
          return todo.completed;
        }).length,
        todos: todos
      });

    case 'remove-todo':
      var todos2 = state.todos.filter(function (v) {
        return v.id !== action.id;
      });
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        completed: todos2.filter(function (todo) {
          return todo.completed;
        }).length,
        todos: todos2
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
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        completed: todos3.filter(function (todo) {
          return todo.completed;
        }).length,
        todos: todos3
      });

    case 'toggle-all-todo':
      var allCompleted_1 = state.completed === state.todos.length;
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
        todos: $xdbv$export$mapArray(state.todos, function (todo) {
          return $pSX2$var$__assign($pSX2$var$__assign({}, todo), {
            completed: !allCompleted_1
          });
        }),
        completed: allCompleted_1 ? 0 : state.todos.length
      });

    case 'toggle-filter':
      return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
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
        return $pSX2$var$__assign($pSX2$var$__assign({}, state), {
          editing: undefined,
          completed: todos_2.filter(function (todo) {
            return todo.completed;
          }).length,
          todos: todos_2
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
// ASSET: ../node_modules/@tempo/dom/lib/element.js
var $Mmj0$exports = {};
Object.defineProperty($Mmj0$exports, "__esModule", {
  value: true
});

var $Mmj0$var$applyChange = function (change, el, ctx) {
  return function (state, value) {
    return change(state, el, ctx, value);
  };
};

var $Mmj0$var$applyAfterRender = function (attr, el, ctx, state) {
  if (typeof attr !== undefined) {
    return attr(state, el, ctx);
  } else {
    return undefined;
  }
};

var $Mmj0$var$DOMElement =
/** @class */
function () {
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
      $KfbX$export$processAttribute(el, o.name, o.value, allDynamics);
    }

    for (var _b = 0, _c = this.events; _b < _c.length; _b++) {
      var o = _c[_b];
      $KfbX$export$processEvent(el, o.name, o.value, ctx.dispatch, allDynamics);
    }

    for (var _d = 0, _e = this.styles; _d < _e.length; _d++) {
      var o = _e[_d];
      $KfbX$export$processStyle(el, o.name, o.value, allDynamics);
    }

    for (var _f = 0, allDynamics_1 = allDynamics; _f < allDynamics_1.length; _f++) {
      var dy = allDynamics_1[_f];
      dy(state);
    } // children


    var appendChild = function (n) {
      return el.appendChild(n);
    };

    var newCtx = ctx.withAppend(appendChild).withParent(el);
    var views = $UNaj$export$mapArray(this.children, function (child) {
      return child.render(newCtx, state);
    });
    ctx.append(el);

    if (this.afterrender) {
      value = $Mmj0$var$applyAfterRender(this.afterrender, el, ctx, state);
    }

    var dynamicChildren = $UNaj$export$mapArray($KfbX$export$filterDynamics(views), function (child) {
      return function (state) {
        return child.change(state);
      };
    });
    allDynamics.push.apply(allDynamics, dynamicChildren);

    if (this.beforechange) {
      var change_1 = $Mmj0$var$applyChange(this.beforechange, el, ctx);

      var update = function (state) {
        value = change_1(state, value);
      };

      allDynamics.unshift(update);
    }

    if (this.afterchange) {
      var change_2 = $Mmj0$var$applyChange(this.afterchange, el, ctx);

      var update = function (state) {
        value = change_2(state, value);
      };

      allDynamics.push(update);
    }

    var beforedestroyf = this.beforedestroy && function () {
      return _this.beforedestroy(el, ctx, value);
    };

    if (allDynamics.length > 0) {
      return new $TJFn$export$DOMDynamicNodeView(el, views, function (state) {
        for (var _i = 0, allDynamics_2 = allDynamics; _i < allDynamics_2.length; _i++) {
          var f = allDynamics_2[_i];
          f(state);
        }
      }, beforedestroyf);
    } else {
      return new $TJFn$export$DOMStaticNodeView(el, views, beforedestroyf);
    }
  };

  return DOMElement;
}();

var $Mmj0$export$DOMElement = $Mmj0$var$DOMElement;
$Mmj0$exports.DOMElement = $Mmj0$export$DOMElement;

function $Mmj0$var$extractAttrs(attrs) {
  return $UNaj$export$mapArray(Object.keys(attrs || {}), function (attName) {
    var name = attName.toLowerCase();
    name = $QBLY$export$attributeNameMap[name] || name;
    return {
      name: name,
      value: attrs[attName]
    };
  });
}

function $Mmj0$var$extractEvents(attrs) {
  return $UNaj$export$mapArray(Object.keys(attrs || {}), function (eventName) {
    var name = "on" + eventName.toLowerCase();
    return {
      name: name,
      value: attrs[eventName]
    };
  });
}

function $Mmj0$var$extractStyles(attrs) {
  return $UNaj$export$mapArray(Object.keys(attrs || {}), function (name) {
    return {
      name: name,
      value: attrs[name]
    };
  });
}

var $Mmj0$var$makeCreateElement = function (name) {
  return function (doc) {
    return doc.createElement(name);
  };
};

var $Mmj0$export$el = function (name, attributes) {
  var children = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    children[_i - 2] = arguments[_i];
  }

  return new $Mmj0$var$DOMElement($Mmj0$var$makeCreateElement(name), $Mmj0$var$extractAttrs(attributes.attrs), $Mmj0$var$extractEvents(attributes.events), $Mmj0$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, $UNaj$export$mapArray(children, $KfbX$export$domChildToTemplate));
};

$Mmj0$exports.el = $Mmj0$export$el;

var $Mmj0$export$el2 = function (name) {
  return function (attributes) {
    var children = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      children[_i - 1] = arguments[_i];
    }

    return new $Mmj0$var$DOMElement($Mmj0$var$makeCreateElement(name), $Mmj0$var$extractAttrs(attributes.attrs), $Mmj0$var$extractEvents(attributes.events), $Mmj0$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, $UNaj$export$mapArray(children, $KfbX$export$domChildToTemplate));
  };
};

$Mmj0$exports.el2 = $Mmj0$export$el2;
var $Mmj0$export$defaultNamespaces = {
  'svg': 'http://www.w3.org/2000/svg'
};
$Mmj0$exports.defaultNamespaces = $Mmj0$export$defaultNamespaces;

var $Mmj0$var$makeCreateElementNS = function (namespace, name) {
  return function (doc) {
    return doc.createElementNS(namespace, name);
  };
};

var $Mmj0$export$elNS = function (ns, name, attributes) {
  var children = [];

  for (var _i = 3; _i < arguments.length; _i++) {
    children[_i - 3] = arguments[_i];
  }

  var namespace = $Mmj0$export$defaultNamespaces[ns] || ns;
  return new $Mmj0$var$DOMElement($Mmj0$var$makeCreateElementNS(namespace, name), $Mmj0$var$extractAttrs(attributes.attrs), $Mmj0$var$extractEvents(attributes.events), $Mmj0$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, $UNaj$export$mapArray(children, $KfbX$export$domChildToTemplate));
};

$Mmj0$exports.elNS = $Mmj0$export$elNS;

var $Mmj0$export$elNS2 = function (namespace, name) {
  return function (attributes) {
    var children = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      children[_i - 1] = arguments[_i];
    }

    return new $Mmj0$var$DOMElement($Mmj0$var$makeCreateElementNS(namespace, name), $Mmj0$var$extractAttrs(attributes.attrs), $Mmj0$var$extractEvents(attributes.events), $Mmj0$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, $UNaj$export$mapArray(children, $KfbX$export$domChildToTemplate));
  };
};

$Mmj0$exports.elNS2 = $Mmj0$export$elNS2; //# sourceMappingURL=element.js.map

// ASSET: ../node_modules/@tempo/dom/lib/html.js
var $YzxN$exports = {};
Object.defineProperty($YzxN$exports, "__esModule", {
  value: true
});
var $YzxN$export$a = $Mmj0$export$el2('a');
$YzxN$exports.a = $YzxN$export$a;
var $YzxN$export$abbr = $Mmj0$export$el2('abbr');
$YzxN$exports.abbr = $YzxN$export$abbr;
var $YzxN$export$address = $Mmj0$export$el2('address');
$YzxN$exports.address = $YzxN$export$address;
var $YzxN$export$applet = $Mmj0$export$el2('applet');
$YzxN$exports.applet = $YzxN$export$applet;
var $YzxN$export$area = $Mmj0$export$el2('area');
$YzxN$exports.area = $YzxN$export$area;
var $YzxN$export$article = $Mmj0$export$el2('article');
$YzxN$exports.article = $YzxN$export$article;
var $YzxN$export$aside = $Mmj0$export$el2('aside');
$YzxN$exports.aside = $YzxN$export$aside;
var $YzxN$export$audio = $Mmj0$export$el2('audio');
$YzxN$exports.audio = $YzxN$export$audio;
var $YzxN$export$b = $Mmj0$export$el2('b');
$YzxN$exports.b = $YzxN$export$b;
var $YzxN$export$base = $Mmj0$export$el2('base');
$YzxN$exports.base = $YzxN$export$base;
var $YzxN$export$basefont = $Mmj0$export$el2('basefont');
$YzxN$exports.basefont = $YzxN$export$basefont;
var $YzxN$export$bdi = $Mmj0$export$el2('bdi');
$YzxN$exports.bdi = $YzxN$export$bdi;
var $YzxN$export$bdo = $Mmj0$export$el2('bdo');
$YzxN$exports.bdo = $YzxN$export$bdo;
var $YzxN$export$blockquote = $Mmj0$export$el2('blockquote');
$YzxN$exports.blockquote = $YzxN$export$blockquote;
var $YzxN$export$body = $Mmj0$export$el2('body');
$YzxN$exports.body = $YzxN$export$body;
var $YzxN$export$br = $Mmj0$export$el2('br');
$YzxN$exports.br = $YzxN$export$br;
var $YzxN$export$button = $Mmj0$export$el2('button');
$YzxN$exports.button = $YzxN$export$button;
var $YzxN$export$canvas = $Mmj0$export$el2('canvas');
$YzxN$exports.canvas = $YzxN$export$canvas;
var $YzxN$export$caption = $Mmj0$export$el2('caption');
$YzxN$exports.caption = $YzxN$export$caption;
var $YzxN$export$cite = $Mmj0$export$el2('cite');
$YzxN$exports.cite = $YzxN$export$cite;
var $YzxN$export$code = $Mmj0$export$el2('code');
$YzxN$exports.code = $YzxN$export$code;
var $YzxN$export$col = $Mmj0$export$el2('col');
$YzxN$exports.col = $YzxN$export$col;
var $YzxN$export$colgroup = $Mmj0$export$el2('colgroup');
$YzxN$exports.colgroup = $YzxN$export$colgroup;
var $YzxN$export$data = $Mmj0$export$el2('data');
$YzxN$exports.data = $YzxN$export$data;
var $YzxN$export$datalist = $Mmj0$export$el2('datalist');
$YzxN$exports.datalist = $YzxN$export$datalist;
var $YzxN$export$dd = $Mmj0$export$el2('dd');
$YzxN$exports.dd = $YzxN$export$dd;
var $YzxN$export$del = $Mmj0$export$el2('del');
$YzxN$exports.del = $YzxN$export$del;
var $YzxN$export$details = $Mmj0$export$el2('details');
$YzxN$exports.details = $YzxN$export$details;
var $YzxN$export$dfn = $Mmj0$export$el2('dfn');
$YzxN$exports.dfn = $YzxN$export$dfn;
var $YzxN$export$dialog = $Mmj0$export$el2('dialog');
$YzxN$exports.dialog = $YzxN$export$dialog;
var $YzxN$export$dir = $Mmj0$export$el2('dir');
$YzxN$exports.dir = $YzxN$export$dir;
var $YzxN$export$div = $Mmj0$export$el2('div');
$YzxN$exports.div = $YzxN$export$div;
var $YzxN$export$dl = $Mmj0$export$el2('dl');
$YzxN$exports.dl = $YzxN$export$dl;
var $YzxN$export$dt = $Mmj0$export$el2('dt');
$YzxN$exports.dt = $YzxN$export$dt;
var $YzxN$export$em = $Mmj0$export$el2('em');
$YzxN$exports.em = $YzxN$export$em;
var $YzxN$export$embed = $Mmj0$export$el2('embed');
$YzxN$exports.embed = $YzxN$export$embed;
var $YzxN$export$fieldset = $Mmj0$export$el2('fieldset');
$YzxN$exports.fieldset = $YzxN$export$fieldset;
var $YzxN$export$figcaption = $Mmj0$export$el2('figcaption');
$YzxN$exports.figcaption = $YzxN$export$figcaption;
var $YzxN$export$figure = $Mmj0$export$el2('figure');
$YzxN$exports.figure = $YzxN$export$figure;
var $YzxN$export$font = $Mmj0$export$el2('font');
$YzxN$exports.font = $YzxN$export$font;
var $YzxN$export$footer = $Mmj0$export$el2('footer');
$YzxN$exports.footer = $YzxN$export$footer;
var $YzxN$export$form = $Mmj0$export$el2('form');
$YzxN$exports.form = $YzxN$export$form;
var $YzxN$export$frame = $Mmj0$export$el2('frame');
$YzxN$exports.frame = $YzxN$export$frame;
var $YzxN$export$frameset = $Mmj0$export$el2('frameset');
$YzxN$exports.frameset = $YzxN$export$frameset;
var $YzxN$export$h1 = $Mmj0$export$el2('h1');
$YzxN$exports.h1 = $YzxN$export$h1;
var $YzxN$export$h2 = $Mmj0$export$el2('h2');
$YzxN$exports.h2 = $YzxN$export$h2;
var $YzxN$export$h3 = $Mmj0$export$el2('h3');
$YzxN$exports.h3 = $YzxN$export$h3;
var $YzxN$export$h4 = $Mmj0$export$el2('h4');
$YzxN$exports.h4 = $YzxN$export$h4;
var $YzxN$export$h5 = $Mmj0$export$el2('h5');
$YzxN$exports.h5 = $YzxN$export$h5;
var $YzxN$export$h6 = $Mmj0$export$el2('h6');
$YzxN$exports.h6 = $YzxN$export$h6;
var $YzxN$export$head = $Mmj0$export$el2('head');
$YzxN$exports.head = $YzxN$export$head;
var $YzxN$export$header = $Mmj0$export$el2('header');
$YzxN$exports.header = $YzxN$export$header;
var $YzxN$export$hgroup = $Mmj0$export$el2('hgroup');
$YzxN$exports.hgroup = $YzxN$export$hgroup;
var $YzxN$export$hr = $Mmj0$export$el2('hr');
$YzxN$exports.hr = $YzxN$export$hr;
var $YzxN$export$html = $Mmj0$export$el2('html');
$YzxN$exports.html = $YzxN$export$html;
var $YzxN$export$i = $Mmj0$export$el2('i');
$YzxN$exports.i = $YzxN$export$i;
var $YzxN$export$iframe = $Mmj0$export$el2('iframe');
$YzxN$exports.iframe = $YzxN$export$iframe;
var $YzxN$export$img = $Mmj0$export$el2('img');
$YzxN$exports.img = $YzxN$export$img;
var $YzxN$export$input = $Mmj0$export$el2('input');
$YzxN$exports.input = $YzxN$export$input;
var $YzxN$export$ins = $Mmj0$export$el2('ins');
$YzxN$exports.ins = $YzxN$export$ins;
var $YzxN$export$kbd = $Mmj0$export$el2('kbd');
$YzxN$exports.kbd = $YzxN$export$kbd;
var $YzxN$export$label = $Mmj0$export$el2('label');
$YzxN$exports.label = $YzxN$export$label;
var $YzxN$export$legend = $Mmj0$export$el2('legend');
$YzxN$exports.legend = $YzxN$export$legend;
var $YzxN$export$li = $Mmj0$export$el2('li');
$YzxN$exports.li = $YzxN$export$li;
var $YzxN$export$link = $Mmj0$export$el2('link');
$YzxN$exports.link = $YzxN$export$link;
var $YzxN$export$listing = $Mmj0$export$el2('listing');
$YzxN$exports.listing = $YzxN$export$listing;
var $YzxN$export$main = $Mmj0$export$el2('main');
$YzxN$exports.main = $YzxN$export$main;
var $YzxN$export$map = $Mmj0$export$el2('map');
$YzxN$exports.map = $YzxN$export$map;
var $YzxN$export$mark = $Mmj0$export$el2('mark');
$YzxN$exports.mark = $YzxN$export$mark;
var $YzxN$export$marquee = $Mmj0$export$el2('marquee');
$YzxN$exports.marquee = $YzxN$export$marquee;
var $YzxN$export$menu = $Mmj0$export$el2('menu');
$YzxN$exports.menu = $YzxN$export$menu;
var $YzxN$export$meta = $Mmj0$export$el2('meta');
$YzxN$exports.meta = $YzxN$export$meta;
var $YzxN$export$meter = $Mmj0$export$el2('meter');
$YzxN$exports.meter = $YzxN$export$meter;
var $YzxN$export$nav = $Mmj0$export$el2('nav');
$YzxN$exports.nav = $YzxN$export$nav;
var $YzxN$export$noscript = $Mmj0$export$el2('noscript');
$YzxN$exports.noscript = $YzxN$export$noscript;
var $YzxN$export$object = $Mmj0$export$el2('object');
$YzxN$exports.object = $YzxN$export$object;
var $YzxN$export$ol = $Mmj0$export$el2('ol');
$YzxN$exports.ol = $YzxN$export$ol;
var $YzxN$export$optgroup = $Mmj0$export$el2('optgroup');
$YzxN$exports.optgroup = $YzxN$export$optgroup;
var $YzxN$export$option = $Mmj0$export$el2('option');
$YzxN$exports.option = $YzxN$export$option;
var $YzxN$export$output = $Mmj0$export$el2('output');
$YzxN$exports.output = $YzxN$export$output;
var $YzxN$export$p = $Mmj0$export$el2('p');
$YzxN$exports.p = $YzxN$export$p;
var $YzxN$export$param = $Mmj0$export$el2('param');
$YzxN$exports.param = $YzxN$export$param;
var $YzxN$export$picture = $Mmj0$export$el2('picture');
$YzxN$exports.picture = $YzxN$export$picture;
var $YzxN$export$pre = $Mmj0$export$el2('pre');
$YzxN$exports.pre = $YzxN$export$pre;
var $YzxN$export$progress = $Mmj0$export$el2('progress');
$YzxN$exports.progress = $YzxN$export$progress;
var $YzxN$export$q = $Mmj0$export$el2('q');
$YzxN$exports.q = $YzxN$export$q;
var $YzxN$export$rp = $Mmj0$export$el2('rp');
$YzxN$exports.rp = $YzxN$export$rp;
var $YzxN$export$rt = $Mmj0$export$el2('rt');
$YzxN$exports.rt = $YzxN$export$rt;
var $YzxN$export$ruby = $Mmj0$export$el2('ruby');
$YzxN$exports.ruby = $YzxN$export$ruby;
var $YzxN$export$s = $Mmj0$export$el2('s');
$YzxN$exports.s = $YzxN$export$s;
var $YzxN$export$samp = $Mmj0$export$el2('samp');
$YzxN$exports.samp = $YzxN$export$samp;
var $YzxN$export$script = $Mmj0$export$el2('script');
$YzxN$exports.script = $YzxN$export$script;
var $YzxN$export$section = $Mmj0$export$el2('section');
$YzxN$exports.section = $YzxN$export$section;
var $YzxN$export$select = $Mmj0$export$el2('select');
$YzxN$exports.select = $YzxN$export$select;
var $YzxN$export$slot = $Mmj0$export$el2('slot');
$YzxN$exports.slot = $YzxN$export$slot;
var $YzxN$export$small = $Mmj0$export$el2('small');
$YzxN$exports.small = $YzxN$export$small;
var $YzxN$export$source = $Mmj0$export$el2('source');
$YzxN$exports.source = $YzxN$export$source;
var $YzxN$export$span = $Mmj0$export$el2('span');
$YzxN$exports.span = $YzxN$export$span;
var $YzxN$export$strong = $Mmj0$export$el2('strong');
$YzxN$exports.strong = $YzxN$export$strong;
var $YzxN$export$style = $Mmj0$export$el2('style');
$YzxN$exports.style = $YzxN$export$style;
var $YzxN$export$sub = $Mmj0$export$el2('sub');
$YzxN$exports.sub = $YzxN$export$sub;
var $YzxN$export$summary = $Mmj0$export$el2('summary');
$YzxN$exports.summary = $YzxN$export$summary;
var $YzxN$export$sup = $Mmj0$export$el2('sup');
$YzxN$exports.sup = $YzxN$export$sup;
var $YzxN$export$table = $Mmj0$export$el2('table');
$YzxN$exports.table = $YzxN$export$table;
var $YzxN$export$tbody = $Mmj0$export$el2('tbody');
$YzxN$exports.tbody = $YzxN$export$tbody;
var $YzxN$export$td = $Mmj0$export$el2('td');
$YzxN$exports.td = $YzxN$export$td;
var $YzxN$export$template = $Mmj0$export$el2('template');
$YzxN$exports.template = $YzxN$export$template;
var $YzxN$export$textarea = $Mmj0$export$el2('textarea');
$YzxN$exports.textarea = $YzxN$export$textarea;
var $YzxN$export$tfoot = $Mmj0$export$el2('tfoot');
$YzxN$exports.tfoot = $YzxN$export$tfoot;
var $YzxN$export$th = $Mmj0$export$el2('th');
$YzxN$exports.th = $YzxN$export$th;
var $YzxN$export$thead = $Mmj0$export$el2('thead');
$YzxN$exports.thead = $YzxN$export$thead;
var $YzxN$export$time = $Mmj0$export$el2('time');
$YzxN$exports.time = $YzxN$export$time;
var $YzxN$export$title = $Mmj0$export$el2('title');
$YzxN$exports.title = $YzxN$export$title;
var $YzxN$export$tr = $Mmj0$export$el2('tr');
$YzxN$exports.tr = $YzxN$export$tr;
var $YzxN$export$track = $Mmj0$export$el2('track');
$YzxN$exports.track = $YzxN$export$track;
var $YzxN$export$u = $Mmj0$export$el2('u');
$YzxN$exports.u = $YzxN$export$u;
var $YzxN$export$ul = $Mmj0$export$el2('ul');
$YzxN$exports.ul = $YzxN$export$ul;
var $YzxN$export$varEl = $Mmj0$export$el2('var');
$YzxN$exports.varEl = $YzxN$export$varEl;
var $YzxN$export$video = $Mmj0$export$el2('video');
$YzxN$exports.video = $YzxN$export$video;
var $YzxN$export$wbr = $Mmj0$export$el2('wbr');
$YzxN$exports.wbr = $YzxN$export$wbr;
var $YzxN$export$xmp = $Mmj0$export$el2('xmp');
$YzxN$exports.xmp = $YzxN$export$xmp; //# sourceMappingURL=html.js.map

// ASSET: ../node_modules/@tempo/dom/lib/filter.js
var $jvX0$exports = {};
Object.defineProperty($jvX0$exports, "__esModule", {
  value: true
});

var $jvX0$var$FilterStateTemplate =
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

    var views = $UNaj$export$mapArray(children, function (c) {
      return c.render(ctx, state);
    });
    var dynamics = $KfbX$export$filterDynamics(views);

    if (dynamics.length === 0) {
      return new $xGqp$export$DOMStaticFragmentView(views);
    } else {
      var prevState_1 = state;
      return new $xGqp$export$DOMDynamicFragmentView(views, function (newState) {
        if (!filter(prevState_1, newState)) {
          prevState_1 = newState;

          for (var _i = 0, dynamics_1 = dynamics; _i < dynamics_1.length; _i++) {
            var d = dynamics_1[_i];
            d.change(newState);
          }
        }
      });
    }
  };

  return FilterStateTemplate;
}();

var $jvX0$export$FilterStateTemplate = $jvX0$var$FilterStateTemplate;
$jvX0$exports.FilterStateTemplate = $jvX0$export$FilterStateTemplate;

var $jvX0$export$filterState = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $jvX0$var$FilterStateTemplate(options.isSame || function (a, b) {
    return a === b;
  }, $UNaj$export$mapArray(children, $KfbX$export$domChildToTemplate));
};

$jvX0$exports.filterState = $jvX0$export$filterState; //# sourceMappingURL=filter.js.map

// ASSET: ../node_modules/@tempo/dom/lib/map.js
var $YLN0$exports = {};
Object.defineProperty($YLN0$exports, "__esModule", {
  value: true
});

var $YLN0$var$MapStateTemplate =
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
    var views = $UNaj$export$mapArray(children, function (c) {
      return c.render(ctx, innerState);
    });
    var dynamics = $KfbX$export$filterDynamics(views);

    if (dynamics.length === 0) {
      return new $xGqp$export$DOMStaticFragmentView(views);
    } else {
      return new $xGqp$export$DOMDynamicFragmentView(views, function (state) {
        var innerState = map(state);

        for (var _i = 0, dynamics_1 = dynamics; _i < dynamics_1.length; _i++) {
          var d = dynamics_1[_i];
          d.change(innerState);
        }
      });
    }
  };

  return MapStateTemplate;
}();

var $YLN0$export$MapStateTemplate = $YLN0$var$MapStateTemplate;
$YLN0$exports.MapStateTemplate = $YLN0$export$MapStateTemplate;

var $YLN0$export$mapState = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $YLN0$var$MapStateTemplate(options.map, $UNaj$export$mapArray(children, $KfbX$export$domChildToTemplate));
};

$YLN0$exports.mapState = $YLN0$export$mapState;

var $YLN0$var$MapActionTemplate =
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

    var views = $UNaj$export$mapArray(children, function (c) {
      return c.render(ctx.conditionalMapAction(map), state);
    });
    return $xGqp$export$fragmentView(views);
  };

  return MapActionTemplate;
}();

var $YLN0$export$MapActionTemplate = $YLN0$var$MapActionTemplate;
$YLN0$exports.MapActionTemplate = $YLN0$export$MapActionTemplate;

var $YLN0$export$mapAction = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $YLN0$var$MapActionTemplate(options.map, $UNaj$export$mapArray(children, $KfbX$export$domChildToTemplate));
};

$YLN0$exports.mapAction = $YLN0$export$mapAction; //# sourceMappingURL=map.js.map

// ASSET: ../node_modules/@tempo/dom/lib/until.js
var $hYCi$exports = {};
Object.defineProperty($hYCi$exports, "__esModule", {
  value: true
});

var $hYCi$var$DOMUntilView =
/** @class */
function () {
  function DOMUntilView(ref, repeatUntil, ctx, children) {
    this.ref = ref;
    this.repeatUntil = repeatUntil;
    this.ctx = ctx;
    this.children = children;
    this.kind = 'dynamic';
    this.childrenView = [];
  }

  DOMUntilView.prototype.destroy = function () {
    $KfbX$export$removeNode(this.ref);

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
      if (typeof value === 'undefined') return "break";

      if (index < currentViewLength) {
        // replace existing
        var filtered = $KfbX$export$filterDynamics(this_1.childrenView[index]);

        for (var _i = 0, filtered_1 = filtered; _i < filtered_1.length; _i++) {
          var v = filtered_1[_i];
          v.change(value);
        }
      } else {
        // add node
        this_1.childrenView.push($UNaj$export$mapArray(this_1.children, function (el) {
          return el.render(_this.ctx, value);
        }));
      }

      index++;
    };

    var this_1 = this;

    while (true) {
      var state_1 = _loop_1();

      if (state_1 === "break") break;
    }

    var i = index; // remove extra nodes

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
}();

var $hYCi$export$DOMUntilView = $hYCi$var$DOMUntilView;
$hYCi$exports.DOMUntilView = $hYCi$export$DOMUntilView;

var $hYCi$var$DOMUntilTemplate =
/** @class */
function () {
  function DOMUntilTemplate(options, children) {
    this.options = options;
    this.children = children;
  }

  DOMUntilTemplate.prototype.render = function (ctx, state) {
    var ref = ctx.doc.createComment(this.options.refId || 't:until');
    ctx.append(ref);
    var view = new $hYCi$var$DOMUntilView(ref, this.options.repeatUntil, ctx.withAppend($KfbX$export$insertBefore(ref)), this.children);
    view.change(state);
    return view;
  };

  return DOMUntilTemplate;
}();

var $hYCi$export$DOMUntilTemplate = $hYCi$var$DOMUntilTemplate;
$hYCi$exports.DOMUntilTemplate = $hYCi$export$DOMUntilTemplate;

var $hYCi$export$until = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $hYCi$var$DOMUntilTemplate(options, $UNaj$export$mapArray(children, $KfbX$export$domChildToTemplate));
};

$hYCi$exports.until = $hYCi$export$until; //# sourceMappingURL=until.js.map

// ASSET: ../node_modules/@tempo/dom/lib/for_each.js
var $xmUo$exports = {};

var $xmUo$var$__spreadArrays = $xmUo$exports && $xmUo$exports.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty($xmUo$exports, "__esModule", {
  value: true
});

var $xmUo$export$forEach = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return $hYCi$export$until.apply(void 0, $xmUo$var$__spreadArrays([{
    refId: options.refId || 't:for_each',
    repeatUntil: function (state, index) {
      return state[index];
    }
  }], children));
};

$xmUo$exports.forEach = $xmUo$export$forEach; //# sourceMappingURL=for_each.js.map

// ASSET: ../node_modules/@tempo/dom/lib/iterate.js
var $EcG8$exports = {};

var $EcG8$var$__spreadArrays = $EcG8$exports && $EcG8$exports.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty($EcG8$exports, "__esModule", {
  value: true
});

var $EcG8$export$iterate = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  var outerState;
  return $YLN0$export$mapState({
    map: function (outer) {
      outerState = outer;
      return options.getArray(outer);
    }
  }, $xmUo$export$forEach({
    refId: options.refId
  }, $YLN0$export$mapState.apply(void 0, $EcG8$var$__spreadArrays([{
    map: function (value) {
      return [value, outerState];
    }
  }], children))));
};

$EcG8$exports.iterate = $EcG8$export$iterate; //# sourceMappingURL=iterate.js.map

// ASSET: ../node_modules/@tempo/dom/lib/when.js
var $rPBd$exports = {};
Object.defineProperty($rPBd$exports, "__esModule", {
  value: true
});

var $rPBd$var$DOMWhenView =
/** @class */
function () {
  function DOMWhenView(condition, ctx, dispatch, removeNode, children) {
    this.condition = condition;
    this.ctx = ctx;
    this.dispatch = dispatch;
    this.removeNode = removeNode;
    this.children = children;
    this.kind = 'dynamic';
  }

  DOMWhenView.prototype.change = function (value) {
    var _this = this;

    if (this.condition(value)) {
      if (typeof this.views === 'undefined') {
        // it has never been rendered before
        this.views = $UNaj$export$mapArray(this.children, function (c) {
          return c.render(_this.ctx, value);
        });
        this.dynamics = $KfbX$export$filterDynamics(this.views);
      } else if (this.dynamics) {
        for (var _i = 0, _a = this.dynamics; _i < _a.length; _i++) {
          var d = _a[_i];
          d.change(value);
        }
      }
    } else {
      this.destroyViews();
    }
  };

  DOMWhenView.prototype.destroy = function () {
    this.destroyViews();
    this.removeNode();
  };

  DOMWhenView.prototype.destroyViews = function () {
    if (typeof this.views !== 'undefined') {
      for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
        var v = _a[_i];
        v.destroy();
      }

      this.views = undefined;
      this.dynamics = undefined;
    }
  };

  return DOMWhenView;
}();

var $rPBd$export$DOMWhenView = $rPBd$var$DOMWhenView;
$rPBd$exports.DOMWhenView = $rPBd$export$DOMWhenView;

var $rPBd$var$DOMWhen =
/** @class */
function () {
  function DOMWhen(options, children) {
    this.options = options;
    this.children = children;
  }

  DOMWhen.prototype.render = function (ctx, state) {
    var ref = ctx.doc.createComment(this.options.refId || 't:when');
    ctx.append(ref);
    var parent = ref.parentElement;
    var view = new $rPBd$var$DOMWhenView(this.options.condition, ctx.withAppend(function (node) {
      return parent.insertBefore(node, ref);
    }), ctx.dispatch, function () {
      return $KfbX$export$removeNode(ref);
    }, $UNaj$export$mapArray(this.children, $KfbX$export$domChildToTemplate));
    view.change(state);
    return view;
  };

  return DOMWhen;
}();

var $rPBd$export$DOMWhen = $rPBd$var$DOMWhen;
$rPBd$exports.DOMWhen = $rPBd$export$DOMWhen;

var $rPBd$export$when = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $rPBd$var$DOMWhen(options, children);
};

$rPBd$exports.when = $rPBd$export$when;

var $rPBd$export$unless = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $rPBd$var$DOMWhen({
    condition: function (v) {
      return !options.condition(v);
    },
    refId: options.refId || 't:unless'
  }, children);
};

$rPBd$exports.unless = $rPBd$export$unless; //# sourceMappingURL=when.js.map

// ASSET: action.ts
var $FLek$exports = {};
Object.defineProperty($FLek$exports, "__esModule", {
  value: true
});

var $FLek$var$AddingTodo = function () {
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

var $yo0O$var$filterF = function filterF(filter) {
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

var $yo0O$var$selectedF = function selectedF(filter) {
  return function (state) {
    return state.filter === filter ? 'selected' : undefined;
  };
};

var $yo0O$var$isEditing = function isEditing(state, todo) {
  return state.editing && state.editing.id === todo.id || false;
};

var $yo0O$export$template = $YzxN$export$section({}, $YzxN$export$section({
  attrs: {
    className: 'todoapp'
  }
}, $YzxN$export$header({
  attrs: {
    className: 'header'
  }
}, $YzxN$export$h1({}, 'todos'), $jvX0$export$filterState({
  isSame: function isSame(a, b) {
    return a.adding === b.adding && a.editing === b.editing && a.todos.length === b.todos.length;
  }
}, $YzxN$export$input({
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
}))), $YzxN$export$section({
  attrs: {
    className: 'main'
  },
  styles: {
    visibility: function visibility(state) {
      return state.todos.length === 0 ? 'hidden' : '';
    }
  }
}, $YzxN$export$input({
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
}), $YzxN$export$label({
  attrs: {
    for: 'toggle-all'
  }
}, 'Mark all as complete'), $YzxN$export$ul({
  attrs: {
    className: 'todo-list'
  }
}, $EcG8$export$iterate({
  getArray: function getArray(state) {
    return state.todos.filter($yo0O$var$filterF(state.filter));
  }
}, $jvX0$export$filterState({
  isSame: function isSame(_a, _b) {
    var a = _a[0],
        sa = _a[1];
    var b = _b[0],
        sb = _b[1];
    return a === b && sa.editing === sb.editing;
  }
}, $YzxN$export$li({
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
}, $YzxN$export$div({
  attrs: {
    className: 'view'
  }
}, $YzxN$export$input({
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
}), $YzxN$export$label({
  events: {
    dblclick: function dblclick(_a) {
      var todo = _a[0];
      return $FLek$export$Action.editingTodo(todo.id, todo.title);
    }
  }
}, function (_a) {
  var todo = _a[0];
  return todo.title;
}), $YzxN$export$button({
  attrs: {
    className: 'destroy'
  },
  events: {
    click: function click(_a) {
      var todo = _a[0];
      return $FLek$export$Action.removeTodo(todo.id);
    }
  }
})), $rPBd$export$when({
  condition: function condition(_a) {
    var todo = _a[0],
        state = _a[1];
    return $yo0O$var$isEditing(state, todo);
  }
  /* todo.editing */

}, $YzxN$export$input({
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
}))))))), $jvX0$export$filterState({
  isSame: function isSame(a, b) {
    return a.completed === b.completed && a.todos.length === b.todos.length;
  }
}, $YzxN$export$footer({
  attrs: {
    className: 'footer'
  },
  styles: {
    display: function display(state) {
      return state.todos.length === 0 ? 'none' : 'block';
    }
  }
}, $YzxN$export$span({
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
}), $YzxN$export$ul({
  attrs: {
    className: 'filters'
  }
}, $YzxN$export$li({}, $YzxN$export$a({
  attrs: {
    href: '#/',
    className: $yo0O$var$selectedF($mIWh$export$Filter.All)
  },
  events: {
    click: $yo0O$var$changeF($mIWh$export$Filter.All)
  }
}, 'All')), $YzxN$export$li({}, $YzxN$export$a({
  attrs: {
    href: '#/active',
    className: $yo0O$var$selectedF($mIWh$export$Filter.Active)
  },
  events: {
    click: $yo0O$var$changeF($mIWh$export$Filter.Active)
  }
}, 'Active')), $YzxN$export$li({}, $YzxN$export$a({
  attrs: {
    href: '#/completed',
    className: $yo0O$var$selectedF($mIWh$export$Filter.Completed)
  },
  events: {
    click: $yo0O$var$changeF($mIWh$export$Filter.Completed)
  }
}, 'Completed'))), $rPBd$export$when({
  condition: function condition(state) {
    return state.completed > 0;
  }
}, $YzxN$export$button({
  attrs: {
    className: 'clear-completed'
  },
  events: {
    click: function click() {
      return $FLek$export$Action.clearCompleted;
    }
  }
}, 'Clear completed'))))), $YzxN$export$footer({
  attrs: {
    className: 'info'
  }
}, $YzxN$export$p({}, 'Double-click to edit a todo'), $YzxN$export$p({}, 'Created by ', $YzxN$export$a({
  attrs: {
    href: 'http://github.com/fponticelli'
  }
}, 'Franco Ponticelli')), $YzxN$export$p({}, 'Part of ', $YzxN$export$a({
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
var $ZCfc$var$store = $UiLj$export$Store.ofState({
  state: $mIWh$export$emptyState(),
  reducer: $pSX2$export$reducer,
  equal: $a8lm$export$strictEqual
}); // const saveToDataStore = debounce(250)((state: State) => DataStore.set(state))
// store.property.observable.on(saveToDataStore)
// store.observable.on(console.log)

$sCte$export$Tempo.render({
  store: $ZCfc$var$store,
  template: $yo0O$export$template,
  delayed: true
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