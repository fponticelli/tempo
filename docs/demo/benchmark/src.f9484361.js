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
// ASSET: generator.ts
var $L0ny$exports = {};
Object.defineProperty($L0ny$exports, "__esModule", {
  value: true
});
var $L0ny$var$alphabet = 'abcdefghijklmnopqrstuvwxyz';

var $L0ny$export$createArray = function (num) {
  var res = [];

  for (var i = 0; i < num; i++) {
    res.push(i);
  }

  return res;
};

$L0ny$exports.createArray = $L0ny$export$createArray;

var $L0ny$export$createRange = function (num) {
  return $L0ny$export$createArray(num).map(function (_) {
    return Math.floor(Math.random() * num);
  });
};

$L0ny$exports.createRange = $L0ny$export$createRange;

var $L0ny$export$repeat = function (times, f) {
  return $L0ny$export$createArray(times).map(f);
};

$L0ny$exports.repeat = $L0ny$export$repeat;

var $L0ny$export$repeatf = function (f) {
  return function (times) {
    return $L0ny$export$createArray(times).map(f);
  };
};

$L0ny$exports.repeatf = $L0ny$export$repeatf;

var $L0ny$export$repeatfWithNulls = function (f) {
  return function (ratio, times) {
    return $L0ny$export$createArray(times).map(function (i) {
      if (Math.random() < ratio) {
        return f(i);
      } else {
        return null;
      }
    });
  };
};

$L0ny$exports.repeatfWithNulls = $L0ny$export$repeatfWithNulls;

var $L0ny$export$createRanges = function (values) {
  return values.map($L0ny$export$createRange);
};

$L0ny$exports.createRanges = $L0ny$export$createRanges;

var $L0ny$export$createWord = function (num) {
  var w = '';

  for (var i = 0; i < num; i++) {
    w += $L0ny$var$alphabet[Math.floor($L0ny$var$alphabet.length * Math.random())];
  }

  return w;
};

$L0ny$exports.createWord = $L0ny$export$createWord;

var $L0ny$export$createRandomWord = function (min, max) {
  var length = min + Math.round((max - min) * Math.random());
  return $L0ny$export$createWord(length);
};

$L0ny$exports.createRandomWord = $L0ny$export$createRandomWord;

var $L0ny$export$createWords = function (num, min, max) {
  return $L0ny$export$createArray(num).map(function (_) {
    return $L0ny$export$createRandomWord(min, max);
  }).join(' ');
};

$L0ny$exports.createWords = $L0ny$export$createWords;

var $L0ny$export$createWordsBetween = function (minWords, maxWords, minLength, maxLentgh) {
  var num = $L0ny$export$randomInt(minWords, maxWords);
  return $L0ny$export$createArray(num).map(function (_) {
    return $L0ny$export$createRandomWord(minLength, maxLentgh);
  }).join(' ');
};

$L0ny$exports.createWordsBetween = $L0ny$export$createWordsBetween;

var $L0ny$export$createDeep = function () {
  return {
    id: $L0ny$export$createWord(8),
    name: $L0ny$export$createRandomWord(4, 12),
    address: {
      line1: $L0ny$export$createWords(3, 4, 6),
      line2: $L0ny$export$createWords(2, 4, 6)
    },
    paragraph: $L0ny$export$createWords(30, 1, 8)
  };
};

$L0ny$exports.createDeep = $L0ny$export$createDeep;

var $L0ny$export$createAttributes = function () {
  return {
    id: $L0ny$export$randomValueOrNull(0.4, $L0ny$export$createRandomWord(2, 8)),
    className: $L0ny$export$randomValueOrNull(0.4, $L0ny$export$createWordsBetween(1, 4, 2, 8)),
    title: $L0ny$export$randomValueOrNull(0.4, $L0ny$export$createWordsBetween(1, 6, 2, 8))
  };
};

$L0ny$exports.createAttributes = $L0ny$export$createAttributes;
var $L0ny$var$hexAlphabet = '0123456789ABCDEF';

var $L0ny$export$randomColor = function () {
  function randomHex() {
    var pos = Math.floor(Math.random() * $L0ny$var$hexAlphabet.length);
    return $L0ny$var$hexAlphabet[pos];
  }

  return "#" + randomHex() + randomHex() + randomHex() + randomHex() + randomHex() + randomHex();
};

$L0ny$exports.randomColor = $L0ny$export$randomColor;
var $L0ny$export$createManyAttributes = $L0ny$export$repeatf($L0ny$export$createAttributes);
$L0ny$exports.createManyAttributes = $L0ny$export$createManyAttributes;

var $L0ny$export$randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

$L0ny$exports.randomInt = $L0ny$export$randomInt;

var $L0ny$export$randomOrNull = function (ratio, f) {
  if (Math.random() <= ratio) return f();else return null;
};

$L0ny$exports.randomOrNull = $L0ny$export$randomOrNull;

var $L0ny$export$randomValueOrNull = function (ratio, v) {
  if (Math.random() <= ratio) return v;else return null;
};

$L0ny$exports.randomValueOrNull = $L0ny$export$randomValueOrNull;

var $L0ny$export$createStyles = function () {
  return {
    backgroundColor: $L0ny$export$randomOrNull(0.4, $L0ny$export$randomColor),
    color: $L0ny$export$randomOrNull(0.4, $L0ny$export$randomColor),
    border: $L0ny$export$randomOrNull(0.4, function () {
      return $L0ny$export$randomInt(1, 4) + "px solid " + $L0ny$export$randomColor();
    })
  };
};

$L0ny$exports.createStyles = $L0ny$export$createStyles;

var $L0ny$export$randomBoolean = function () {
  if (Math.random() <= 0.5) return true;else return false;
};

$L0ny$exports.randomBoolean = $L0ny$export$randomBoolean;
var $L0ny$export$createManyStyles = $L0ny$export$repeatf($L0ny$export$createStyles);
$L0ny$exports.createManyStyles = $L0ny$export$createManyStyles;

var $L0ny$export$createProperties = function () {
  return {
    value: $L0ny$export$randomValueOrNull(0.4, $L0ny$export$createWordsBetween(1, 6, 2, 8)),
    disabled: $L0ny$export$randomOrNull(0.4, $L0ny$export$randomBoolean)
  };
};

$L0ny$exports.createProperties = $L0ny$export$createProperties;
var $L0ny$export$createManyProperties = $L0ny$export$repeatf($L0ny$export$createProperties);
$L0ny$exports.createManyProperties = $L0ny$export$createManyProperties;
// ASSET: tests.ts
var $cibo$exports = {};
Object.defineProperty($cibo$exports, "__esModule", {
  value: true
});
var $cibo$export$tests = [{
  id: 'render-list-50',
  name: 'Render List (50)',
  fn: 'renderListElements',
  args: $L0ny$export$createRange(50),
  selected: false
}, {
  id: 'render-list-500',
  name: 'Render List (500)',
  fn: 'renderListElements',
  args: $L0ny$export$createRange(500),
  selected: true
}, {
  id: 'render-destroy-list-500',
  name: 'Render List & Destroy (500)',
  fn: 'renderListElementsAndDestroy',
  args: $L0ny$export$createRange(500),
  selected: false
}, {
  id: 'render-update-list',
  name: 'Render List & Update',
  fn: 'renderListAndUpdate',
  args: $L0ny$export$createRanges([200, 100, 50, 20, 0, 20, 50, 100, 200]),
  selected: true
}, {
  id: 'render-update-deep',
  name: 'Render Deep & Update',
  fn: 'renderDeepAndUpdate',
  args: $L0ny$export$repeat(1000, $L0ny$export$createDeep),
  selected: true
}, {
  id: 'update-attributes',
  name: 'Update Attributes',
  fn: 'updateAttributes',
  args: $L0ny$export$createManyAttributes(1000),
  selected: true
}, {
  id: 'update-properties',
  name: 'Update Properties',
  fn: 'updateProperty',
  args: $L0ny$export$createManyProperties(1000),
  selected: true
}, {
  id: 'update-styles',
  name: 'Update Styles',
  fn: 'updateStyles',
  args: $L0ny$export$createManyStyles(500),
  selected: true
}, {
  id: 'trigger-events',
  name: 'Update and Trigger Events',
  fn: 'updateAndTriggerEvents',
  args: $L0ny$export$createWords(100, 3, 6),
  selected: true
}];
$cibo$exports.tests = $cibo$export$tests;

var $cibo$export$availableTests = function () {
  return $cibo$export$tests.map(function (test) {
    return {
      id: test.id,
      name: test.name,
      selected: test.selected
    };
  });
};

$cibo$exports.availableTests = $cibo$export$availableTests;
// ASSET: state.ts
var $mIWh$exports = {};
Object.defineProperty($mIWh$exports, "__esModule", {
  value: true
});

var $mIWh$export$makeTestRunId = function (versionId, testId) {
  return versionId + ":" + testId;
};

$mIWh$exports.makeTestRunId = $mIWh$export$makeTestRunId;

var $mIWh$export$unpackTestRunId = function (testRunId) {
  var parts = testRunId.split(':');
  return {
    versionId: parts[0],
    testId: parts[1]
  };
};

$mIWh$exports.unpackTestRunId = $mIWh$export$unpackTestRunId;

var $mIWh$var$sortVersionIds = function sortVersionIds(a, b) {
  if (a === 'current' || a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
};

var $mIWh$export$createState = function (versionIds) {
  var tests = $cibo$export$availableTests();
  var versions = versionIds.sort($mIWh$var$sortVersionIds).map(function (id, i) {
    return {
      id: id,
      selected: i < 2 || i === versionIds.length - 1
    };
  });
  return {
    versions: versions,
    tests: tests,
    options: {
      maxTime: 2
    },
    results: {},
    processing: new Set(),
    stats: {}
  };
};

$mIWh$exports.createState = $mIWh$export$createState;

var $mIWh$export$getSelectedTests = function (state) {
  return {
    tests: state.tests.filter(function (t) {
      return t.selected;
    }).map(function (t) {
      return t.id;
    }),
    versions: state.versions.filter(function (t) {
      return t.selected;
    }).map(function (t) {
      return t.id;
    })
  };
};

$mIWh$exports.getSelectedTests = $mIWh$export$getSelectedTests;

var $mIWh$export$countAllTests = function (state) {
  return state.tests.length * state.versions.length;
};

$mIWh$exports.countAllTests = $mIWh$export$countAllTests;

var $mIWh$export$countSelectedTests = function (state) {
  var _a = $mIWh$export$getSelectedTests(state),
      tests = _a.tests,
      versions = _a.versions;

  return tests.length * versions.length;
};

$mIWh$exports.countSelectedTests = $mIWh$export$countSelectedTests;

var $mIWh$export$hasSelectedTests = function (state) {
  return $mIWh$export$countSelectedTests(state) > 0;
};

$mIWh$exports.hasSelectedTests = $mIWh$export$hasSelectedTests;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var $vCxL$var$extendStatics = function (d, b) {
  $vCxL$var$extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return $vCxL$var$extendStatics(d, b);
};

var $vCxL$export$__assign = function () {
  $vCxL$export$__assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return $vCxL$export$__assign.apply(this, arguments);
};

function $vCxL$export$__awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function $vCxL$export$__generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

;

function $vCxL$export$__await(v) {
  return this instanceof $vCxL$export$__await ? (this.v = v, this) : new $vCxL$export$__await(v);
}

;
// ASSET: config.ts
var $C9JJ$exports = {};
Object.defineProperty($C9JJ$exports, "__esModule", {
  value: true
});

var $C9JJ$export$loadConfig = function () {
  return $vCxL$export$__awaiter(void 0, void 0, Promise, function () {
    var response;
    return $vCxL$export$__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4, fetch('./config.json')];

        case 1:
          response = _a.sent();
          return [2, response.json()];
      }
    });
  });
};

$C9JJ$exports.loadConfig = $C9JJ$export$loadConfig;
// ASSET: reducer.ts
var $pSX2$exports = {};
Object.defineProperty($pSX2$exports, "__esModule", {
  value: true
});

var $pSX2$export$reducer = function (state, action) {
  var _a;

  switch (action.kind) {
    case 'ChangeOptionMaxTime':
      var options = $vCxL$export$__assign($vCxL$export$__assign({}, state.options), {
        maxTime: action.value
      });
      return $vCxL$export$__assign($vCxL$export$__assign({}, state), {
        options: options
      });

    case 'ToggleTest':
      var tests1 = state.tests.map(function (test) {
        if (test.id === action.id) {
          return $vCxL$export$__assign($vCxL$export$__assign({}, test), {
            selected: action.selected
          });
        } else {
          return test;
        }
      });
      return $vCxL$export$__assign($vCxL$export$__assign({}, state), {
        tests: tests1
      });

    case 'ToggleAllTests':
      var selected1_1 = state.tests.filter(function (test) {
        return test.selected;
      }).length !== state.tests.length;
      var tests2 = state.tests.map(function (test) {
        return $vCxL$export$__assign($vCxL$export$__assign({}, test), {
          selected: selected1_1
        });
      });
      return $vCxL$export$__assign($vCxL$export$__assign({}, state), {
        tests: tests2
      });

    case 'ToggleVersion':
      return $vCxL$export$__assign($vCxL$export$__assign({}, state), {
        versions: state.versions.map(function (v) {
          if (v.id === action.id) return {
            id: v.id,
            selected: action.selected
          };else return v;
        })
      });

    case 'ToggleAllVersions':
      var selected2_1 = state.versions.filter(function (v) {
        return v.selected;
      }).length !== state.versions.length;
      var versions2 = state.versions.map(function (v) {
        return $vCxL$export$__assign($vCxL$export$__assign({}, v), {
          selected: selected2_1
        });
      }, {});
      return $vCxL$export$__assign($vCxL$export$__assign({}, state), {
        versions: versions2
      });

    case 'ExecuteSelectedTests':
      return state;

    case 'ExecuteTests':
      var ids = action.versionIds.reduce(function (acc, versionId) {
        return action.testIds.reduce(function (acc, testId) {
          return acc.concat([$mIWh$export$makeTestRunId(versionId, testId)]);
        }, acc);
      }, []);
      var processing_1 = new Set(state.processing);
      ids.forEach(function (id) {
        return processing_1.add(id);
      });
      return $vCxL$export$__assign($vCxL$export$__assign({}, state), {
        processing: processing_1
      });

    case 'TestsExecuted':
      return state;

    case 'UpdateResult':
      var runnerId = action.runnerId,
          testId = action.testId,
          result = action.target;
      var processing2 = new Set(state.processing);
      var id = $mIWh$export$makeTestRunId(runnerId, testId);
      processing2.delete(id);

      if (result) {
        var results2 = $vCxL$export$__assign($vCxL$export$__assign({}, state.results), (_a = {}, _a[id] = result, _a));
        var stats = $pSX2$var$calculateMinMax(results2, state.tests);
        return $vCxL$export$__assign($vCxL$export$__assign({}, state), {
          results: results2,
          processing: processing2,
          stats: $vCxL$export$__assign($vCxL$export$__assign({}, state.stats), stats)
        });
      } else {
        return $vCxL$export$__assign($vCxL$export$__assign({}, state), {
          processing: processing2
        });
      }

    default:
      throw "unhandled case " + action;
  }
};

$pSX2$exports.reducer = $pSX2$export$reducer;

var $pSX2$var$calculateMinMaxForTest = function calculateMinMaxForTest(results, test) {
  var count = 0;
  var min = Infinity;
  var max = -Infinity;

  for (var _i = 0, _a = Object.keys(results); _i < _a.length; _i++) {
    var testRunId = _a[_i];
    var testId = $mIWh$export$unpackTestRunId(testRunId).testId;
    if (testId !== test.id) continue;
    var result = results[testRunId];

    if (result) {
      if (result.hz < min) min = result.hz;
      if (result.hz > max) max = result.hz;
      count++;
    }
  }

  if (count > 1) return {
    min: min,
    max: max
  };else return undefined;
};

var $pSX2$var$calculateMinMax = function calculateMinMax(results, tests) {
  return tests.reduce(function (acc, test) {
    var _a;

    var stats = $pSX2$var$calculateMinMaxForTest(results, test);

    if (stats) {
      return $vCxL$export$__assign($vCxL$export$__assign({}, acc), (_a = {}, _a[test.id] = stats, _a));
    } else {
      return acc;
    }
  }, {});
};

// ASSET: ../node_modules/@tempo/dom/lib/utils/set_attribute.js
var $AxMU$exports = {};
Object.defineProperty($AxMU$exports, "__esModule", {
  value: true
});

var $AxMU$export$setOneStyle = function (el, name, value) {
  var anyStyle = el.style;

  if (value == null) {
    anyStyle[name] = null;
  } else {
    anyStyle[name] = value;
  }
};

$AxMU$exports.setOneStyle = $AxMU$export$setOneStyle;

var $AxMU$export$setAttribute = function (el, name, value) {
  if (value == null) {
    el.removeAttribute(name);
  } else {
    el.setAttribute(name, value);
  }
};

$AxMU$exports.setAttribute = $AxMU$export$setAttribute;

var $AxMU$export$setProperty = function (el, name, value) {
  var anyEl = el;

  if (value == null) {
    anyEl[name] = null;
  } else {
    anyEl[name] = value;
  }
};

$AxMU$exports.setProperty = $AxMU$export$setProperty;

var $AxMU$export$setStyleAttribute = function (el, name, value) {
  var html = el;

  if (value == null) {
    html.removeAttribute(name);
  } else if (typeof value === 'string') {
    $AxMU$export$setAttribute(el, name, value);
  } else {
    var s = Object.keys(value).map(function (k) {
      return k + ": " + value[k] + ";";
    }).join(' ');
    $AxMU$export$setAttribute(el, name, s.length && s || null);
  }
};

$AxMU$exports.setStyleAttribute = $AxMU$export$setStyleAttribute;

var $AxMU$export$setBoolProperty = function (el, name, value) {
  var anyEl = el;

  if (value == null) {
    anyEl[name] = null;
  } else {
    var bool = value === true || value === 'true';
    anyEl[name] = bool;
  }
};

$AxMU$exports.setBoolProperty = $AxMU$export$setBoolProperty;

var $AxMU$export$setEnumBoolAttribute = function (el, name, value) {
  $AxMU$export$setAttribute(el, name, value === true || value === 'true' ? 'true' : value === false ? 'false' : null);
};

$AxMU$exports.setEnumBoolAttribute = $AxMU$export$setEnumBoolAttribute;

var $AxMU$export$setBoolAttribute = function (el, name, value) {
  $AxMU$export$setAttribute(el, name, value === true || value === 'true' ? '' : null);
};

$AxMU$exports.setBoolAttribute = $AxMU$export$setBoolAttribute;

var $AxMU$export$setCommaSeparated = function (el, name, values) {
  if (Array.isArray(values)) $AxMU$export$setAttribute(el, name, values.join(', ') || null);else $AxMU$export$setAttribute(el, name, values && String(values) || null);
};

$AxMU$exports.setCommaSeparated = $AxMU$export$setCommaSeparated;

var $AxMU$export$setSpaceSeparated = function (el, name, values) {
  if (Array.isArray(values)) $AxMU$export$setAttribute(el, name, values.join(' ') || null);else $AxMU$export$setAttribute(el, name, values && String(values) || null);
};

$AxMU$exports.setSpaceSeparated = $AxMU$export$setSpaceSeparated; //# sourceMappingURL=set_attribute.js.map

// ASSET: ../node_modules/@tempo/dom/lib/dom_attributes_mapper.js
var $QBLY$exports = {};
Object.defineProperty($QBLY$exports, "__esModule", {
  value: true
});
/* istanbul ignore file */

var $QBLY$export$htmlAttributeNameMap = {
  acceptcharset: 'accept-charset',
  asattr: 'as',
  classname: 'class',
  httpequiv: 'http-equiv',
  htmlfor: 'for'
};
$QBLY$exports.htmlAttributeNameMap = $QBLY$export$htmlAttributeNameMap;
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

var $KfbX$export$removeNode = function (node) {
  var el = node;

  if (el && el.onblur) {
    el.onblur = null;
  }

  if (node && node.parentElement) {
    node.parentElement.removeChild(node);
  }
};

$KfbX$exports.removeNode = $KfbX$export$removeNode;

var $KfbX$export$insertBefore = function (ref) {
  return function (node) {
    if (ref.parentElement != null) {
      ref.parentElement.insertBefore(node, ref);
    }
  };
};

$KfbX$exports.insertBefore = $KfbX$export$insertBefore;

var $KfbX$export$filterDynamics = function (children) {
  return children.filter(function (child) {
    return child.kind === 'dynamic';
  });
};

$KfbX$exports.filterDynamics = $KfbX$export$filterDynamics;

var $KfbX$export$domChildToTemplate = function (dom) {
  if (typeof dom === 'string' || typeof dom === 'function') return $jTie$export$text(dom);else return dom;
};

$KfbX$exports.domChildToTemplate = $KfbX$export$domChildToTemplate;

var $KfbX$export$processAttribute = function (el, name, value, acc) {
  name = name.toLowerCase();
  name = $QBLY$export$htmlAttributeNameMap[name] || name;
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
};

$KfbX$exports.processAttribute = $KfbX$export$processAttribute;

var $KfbX$export$processEvent = function (el, name, value, dispatch, acc) {
  var localState;
  el.addEventListener(name.toLowerCase(), function (ev) {
    var r = value(localState, ev, el);

    if (r !== undefined) {
      dispatch(r);
    }
  }, false);

  var f = function (state) {
    localState = state;
  };

  acc.push(f);
  return acc;
};

$KfbX$exports.processEvent = $KfbX$export$processEvent;

var $KfbX$export$processStyle = function (el, name, value, acc) {
  if (typeof value === 'function') {
    var f = function (state) {
      return $AxMU$export$setOneStyle(el, name, value(state));
    };

    acc.push(f);
  } else {
    $AxMU$export$setOneStyle(el, name, value);
  }

  return acc;
};

$KfbX$exports.processStyle = $KfbX$export$processStyle; //# sourceMappingURL=dom.js.map

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
  if (attr != null) {
    return attr(state, el, ctx);
  } else {
    return undefined;
  }
};

var $Mmj0$var$DOMElement =
/** @class */
function () {
  function DOMElement(createElement, attributes, children) {
    this.createElement = createElement;
    this.attributes = attributes;
    this.children = children;
  }

  DOMElement.prototype.render = function (ctx, state) {
    var el = this.createElement(ctx.doc);
    var value = undefined;
    var _a = this.attributes,
        attrs = _a.attrs,
        events = _a.events,
        styles = _a.styles,
        afterrender = _a.afterrender,
        beforechange = _a.beforechange,
        afterchange = _a.afterchange,
        beforedestroy = _a.beforedestroy;

    var beforedestroyf = beforedestroy && function () {
      return beforedestroy(el, ctx, value);
    };

    var allDynamics = [];

    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        return $KfbX$export$processAttribute(el, key, attrs[key], allDynamics);
      });
    }

    if (events) {
      Object.keys(events).forEach(function (key) {
        return $KfbX$export$processEvent(el, key, events[key], ctx.dispatch, allDynamics);
      });
    }

    if (styles) {
      Object.keys(styles).forEach(function (key) {
        return $KfbX$export$processStyle(el, key, styles[key], allDynamics);
      });
    }

    for (var _i = 0, allDynamics_1 = allDynamics; _i < allDynamics_1.length; _i++) {
      var dy = allDynamics_1[_i];
      dy(state);
    } // children


    var appendChild = function (n) {
      return el.appendChild(n);
    };

    var newCtx = ctx.withAppend(appendChild).withParent(el);
    var views = this.children.map(function (child) {
      return child.render(newCtx, state);
    });
    ctx.append(el);

    if (afterrender) {
      value = $Mmj0$var$applyAfterRender(afterrender, el, ctx, state);
    }

    var dynamicChildren = $KfbX$export$filterDynamics(views).map(function (child) {
      return function (state) {
        return child.change(state);
      };
    });
    allDynamics.push.apply(allDynamics, dynamicChildren);

    if (beforechange) {
      var change_1 = $Mmj0$var$applyChange(beforechange, el, ctx);

      var update = function (state) {
        value = change_1(state, value);
      };

      allDynamics.unshift(update);
    }

    if (afterchange) {
      var change_2 = $Mmj0$var$applyChange(afterchange, el, ctx);

      var update = function (state) {
        value = change_2(state, value);
      };

      allDynamics.push(update);
    }

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

  return new $Mmj0$var$DOMElement($Mmj0$var$makeCreateElement(name), attributes, children.map($KfbX$export$domChildToTemplate));
};

$Mmj0$exports.el = $Mmj0$export$el;

var $Mmj0$export$el2 = function (name) {
  return function (attributes) {
    var children = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      children[_i - 1] = arguments[_i];
    }

    return new $Mmj0$var$DOMElement($Mmj0$var$makeCreateElement(name), attributes, children.map($KfbX$export$domChildToTemplate));
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
  return new $Mmj0$var$DOMElement($Mmj0$var$makeCreateElementNS(namespace, name), attributes, children.map($KfbX$export$domChildToTemplate));
};

$Mmj0$exports.elNS = $Mmj0$export$elNS;

var $Mmj0$export$elNS2 = function (namespace, name) {
  return function (attributes) {
    var children = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      children[_i - 1] = arguments[_i];
    }

    return new $Mmj0$var$DOMElement($Mmj0$var$makeCreateElementNS(namespace, name), attributes, children.map($KfbX$export$domChildToTemplate));
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

// ASSET: action.ts
var $FLek$exports = {};
Object.defineProperty($FLek$exports, "__esModule", {
  value: true
});
var $FLek$export$Action = {
  changeOptionMaxTime: function changeOptionMaxTime(value) {
    return {
      kind: 'ChangeOptionMaxTime',
      value: value
    };
  },
  toggleVersion: function toggleVersion(id, selected) {
    return {
      kind: 'ToggleVersion',
      id: id,
      selected: selected
    };
  },
  toggleAllVersions: function toggleAllVersions() {
    return {
      kind: 'ToggleAllVersions'
    };
  },
  toggleTest: function toggleTest(id, selected) {
    return {
      kind: 'ToggleTest',
      id: id,
      selected: selected
    };
  },
  toggleAllTests: function toggleAllTests() {
    return {
      kind: 'ToggleAllTests'
    };
  },
  executeTests: function executeTests(versionIds, testIds) {
    return {
      kind: 'ExecuteTests',
      versionIds: versionIds,
      testIds: testIds
    };
  },
  executeSelectedTests: function executeSelectedTests() {
    return {
      kind: 'ExecuteSelectedTests'
    };
  },
  testsExecuted: function testsExecuted() {
    return {
      kind: 'TestsExecuted'
    };
  },
  updateResult: function updateResult(runnerId, testId, target) {
    return {
      kind: 'UpdateResult',
      runnerId: runnerId,
      testId: testId,
      target: target
    };
  }
};
$FLek$exports.Action = $FLek$export$Action;
// ASSET: template/options_selection.ts
var $JiXW$exports = {};
Object.defineProperty($JiXW$exports, "__esModule", {
  value: true
});
var $JiXW$export$optionsSelection = $YzxN$export$div({}, $YzxN$export$table({}, $YzxN$export$tr({}, $YzxN$export$th({}, $YzxN$export$label({
  attrs: {
    for: 'options_max_time'
  }
}, 'max execution time')), $YzxN$export$td({
  attrs: {
    className: 'option-value'
  }
}, $YzxN$export$input({
  attrs: {
    id: 'options_max_time',
    type: 'number',
    min: 0,
    value: function value(options) {
      return options.maxTime;
    }
  },
  events: {
    change: function change(_s, _e, el) {
      return $FLek$export$Action.changeOptionMaxTime(Number(el.value));
    }
  }
})))));
$JiXW$exports.optionsSelection = $JiXW$export$optionsSelection;
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
    var views = this.children.map(function (child) {
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

  return new $xGqp$var$DOMFragment(children.map($KfbX$export$domChildToTemplate));
};

$xGqp$exports.fragment = $xGqp$export$fragment; //# sourceMappingURL=fragment.js.map

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
    var views = children.map(function (c) {
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

  return new $YLN0$var$MapStateTemplate(options.map, children.map($KfbX$export$domChildToTemplate));
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

    var views = children.map(function (c) {
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

  return new $YLN0$var$MapActionTemplate(options.map, children.map($KfbX$export$domChildToTemplate));
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
    var count = 0;
    var value;

    while ((value = this.repeatUntil(state, count)) !== undefined) {
      if (count < currentViewLength) {
        // replace existing
        for (var _i = 0, _a = $KfbX$export$filterDynamics(this.childrenView[count]); _i < _a.length; _i++) {
          var v = _a[_i];
          v.change(value);
        }
      } else {
        // add node
        this.childrenView.push(this.children.map(function (el) {
          return el.render(_this.ctx, value);
        }));
      }

      count++;
    }

    var i = count;

    while (i < currentViewLength) {
      // remove extra nodes
      for (var _b = 0, _c = this.childrenView[i]; _b < _c.length; _b++) {
        var c = _c[_b];
        c.destroy();
      }

      i++;
    }

    this.childrenView = this.childrenView.slice(0, count);
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
    var ref = ctx.doc.createComment(this.options.refId || 'md:until');
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

  return new $hYCi$var$DOMUntilTemplate(options, children.map($KfbX$export$domChildToTemplate));
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
    refId: options.refId || 'md:for_each',
    repeatUntil: function (state, index) {
      return state[index];
    }
  }], children));
};

$xmUo$exports.forEach = $xmUo$export$forEach; //# sourceMappingURL=for_each.js.map

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
      if (this.views == null) {
        // it has never been rendered before
        this.views = this.children.map(function (c) {
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
    if (this.views != null) {
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
    var ref = ctx.doc.createComment(this.options.refId || 'md:when');
    ctx.append(ref);
    var parent = ref.parentElement;
    var view = new $rPBd$var$DOMWhenView(this.options.condition, ctx.withAppend(function (node) {
      return parent.insertBefore(node, ref);
    }), ctx.dispatch, function () {
      return $KfbX$export$removeNode(ref);
    }, this.children.map($KfbX$export$domChildToTemplate));
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
    refId: options.refId || 'md:unless'
  }, children);
};

$rPBd$exports.unless = $rPBd$export$unless; //# sourceMappingURL=when.js.map

// ASSET: template/table_view.ts
var $Seec$exports = {};
Object.defineProperty($Seec$exports, "__esModule", {
  value: true
});

var $Seec$var$resultToOpsPerSec = function resultToOpsPerSec(r) {
  return r.hz.toFixed(r.hz < 100 ? 2 : 0);
};

var $Seec$var$resultToSamples = function resultToSamples(r) {
  var size = r.stats.sample.length;
  return "error \xB1" + r.stats.rme.toFixed(2) + "%, " + size + " sample" + (size === 1 ? '' : 's');
};

var $Seec$var$colHeader = $xGqp$export$fragment($rPBd$export$when({
  condition: function condition(s) {
    return s.id === 'current';
  }
}, 'current', $YzxN$export$br({}), function (s) {
  return s.selected ? '✅' : '⛔️';
}), $rPBd$export$when({
  condition: function condition(s) {
    return s.id !== 'current';
  }
}, $YLN0$export$mapState({
  map: function map(s) {
    var parts = s.id.split('-');
    var dates = parts[0];
    var year = Number(dates.substring(0, 4));
    var month = Number(dates.substring(4, 6)) - 1;
    var day = Number(dates.substring(6, 8));
    var date = new Date(year, month, day);
    var commit = parts[1];
    return {
      date: date,
      commit: commit,
      selected: s.selected
    };
  }
}, $YzxN$export$div({
  attrs: {
    className: 'date'
  }
}, function (s) {
  return s.date.toDateString();
}), $YzxN$export$span({
  attrs: {
    className: 'commit'
  }
}, function (s) {
  return s.commit;
}), ' ', function (s) {
  return s.selected ? '✅' : '⛔️';
})));
var $Seec$export$tableView = $YzxN$export$table({}, $YzxN$export$tr({
  attrs: {
    className: 'header-row'
  }
}, $YzxN$export$th({}, $rPBd$export$when({
  condition: function condition(s) {
    return s.processing.size > 0;
  }
}, $YzxN$export$span({
  attrs: {
    className: 'details'
  }
}, function (s) {
  return " running " + s.processing.size + " tests";
}), $YzxN$export$br({})), $YzxN$export$button({
  events: {
    click: function click() {
      return $FLek$export$Action.executeSelectedTests();
    }
  }
}, 'execute selected tests')), $YzxN$export$th({}), $YLN0$export$mapState({
  map: function map(state) {
    return state.versions;
  }
}, $xmUo$export$forEach({}, $YzxN$export$th({
  attrs: {
    className: 'version-header'
  }
}, $YzxN$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click(s) {
      return $FLek$export$Action.toggleVersion(s.id, !s.selected);
    }
  }
}, $Seec$var$colHeader))))), $YzxN$export$tr({
  attrs: {
    className: 'header-row'
  }
}, $YzxN$export$th({}, 'toggle: ', $YzxN$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click() {
      return $FLek$export$Action.toggleAllTests();
    }
  }
}, 'tests'), ', ', $YzxN$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click() {
      return $FLek$export$Action.toggleAllVersions();
    }
  }
}, 'versions')), $YzxN$export$th({}), $YLN0$export$mapState({
  map: function map(state) {
    return state.versions.map(function (version) {
      return {
        version: version,
        tests: state.tests.map(function (t) {
          return t.id;
        })
      };
    });
  }
}, $xmUo$export$forEach({}, $YzxN$export$th({
  attrs: {
    className: 'hand'
  }
}, $YzxN$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click(s) {
      return $FLek$export$Action.executeTests([s.version.id], s.tests);
    }
  }
}, '👇'))))), $YLN0$export$mapState({
  map: function map(state) {
    return state.tests.map(function (test) {
      return {
        test: test,
        state: state
      };
    });
  }
}, $xmUo$export$forEach({}, $YzxN$export$tr({}, $YzxN$export$th({
  attrs: {
    className: 'header-col'
  }
}, $YzxN$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click(s) {
      return $FLek$export$Action.toggleTest(s.test.id, !s.test.selected);
    }
  }
}, function (item) {
  return (item.test.selected ? '✅' : '⛔️') + ' ' + item.test.name;
})), $YzxN$export$th({
  attrs: {
    className: 'hand'
  }
}, $YzxN$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click(s) {
      return $FLek$export$Action.executeTests(s.state.versions.map(function (v) {
        return v.id;
      }), [s.test.id]);
    }
  }
}, '👉')), $YLN0$export$mapState({
  map: function map(item) {
    var testId = item.test.id;
    var results = item.state.results;
    var stats = item.state.stats[testId];
    return item.state.versions.map(function (v) {
      var id = $mIWh$export$makeTestRunId(v.id, testId);
      var result = results[id] || null;
      return {
        result: result,
        selected: v.selected && item.test.selected,
        test: item.test.id,
        version: v.id,
        stats: stats,
        processing: item.state.processing.has(id),
        faster: result && stats && result.hz / stats.min - 1
      };
    });
  }
}, $xmUo$export$forEach({}, $YzxN$export$td({
  attrs: {
    className: function className(s) {
      var buff = [];
      if (s.selected) buff.push('selected');
      if (s.processing) buff.push('processing');
      return buff.join(' ');
    }
  }
}, $rPBd$export$when({
  condition: function condition(s) {
    return s.result != null;
  }
}, function (s) {
  return $Seec$var$resultToOpsPerSec(s.result);
}, $YzxN$export$span({
  attrs: {
    className: 'details',
    title: function title(s) {
      return $Seec$var$resultToSamples(s.result);
    }
  }
}, ' ops/sec'), $YzxN$export$br({}), $rPBd$export$when({
  condition: function condition(s) {
    return !!s.faster && s.faster >= 0.05;
  }
}, $YzxN$export$span({
  attrs: {
    className: 'details'
  }
}, $YzxN$export$b({}, function (s) {
  return (s.faster * 100).toFixed(0) + "% faster";
}))), $rPBd$export$when({
  condition: function condition(s) {
    return !s.processing;
  }
}, ' ', $YzxN$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click(s) {
      return $FLek$export$Action.executeTests([s.version], [s.test]);
    }
  }
}, '▶️'))), $rPBd$export$when({
  condition: function condition(s) {
    return s.result == null && !s.processing;
  }
}, $YzxN$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click(s) {
      return $FLek$export$Action.executeTests([s.version], [s.test]);
    }
  }
}, '▶️')))))))));
$Seec$exports.tableView = $Seec$export$tableView;
// ASSET: template.ts
var $ywMA$exports = {};
Object.defineProperty($ywMA$exports, "__esModule", {
  value: true
});
var $ywMA$export$template = $YzxN$export$div({
  attrs: {
    className: 'display_test'
  }
}, $YLN0$export$mapState({
  map: function map(state) {
    return state.options;
  }
}, $JiXW$export$optionsSelection), $Seec$export$tableView);
$ywMA$exports.template = $ywMA$export$template;
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

// ASSET: ../node_modules/@tempo/dom/node_modules/@tempo/store/lib/emitter.js
var $U7VT$exports = {};
Object.defineProperty($U7VT$exports, "__esModule", {
  value: true
});

var $U7VT$var$Emitter = function () {
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

var $U7VT$export$Emitter = $U7VT$var$Emitter;
$U7VT$exports.Emitter = $U7VT$export$Emitter;

var $U7VT$export$debounce = function (delay) {
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

$U7VT$exports.debounce = $U7VT$export$debounce;

var $U7VT$export$nextFrame = function (listener) {
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

$U7VT$exports.nextFrame = $U7VT$export$nextFrame;
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
    var update = function (state) {
      return view.change(state);
    };

    if (this.delayed) {
      update = $U7VT$export$nextFrame(update);
    }

    var store = this.store;
    store.property.observable.on(update);

    var innerDispatch = function (action) {
      store.process(action);
    };

    var newCtx = ctx.withDispatch(innerDispatch);
    var viewChildren = this.children.map(function (child) {
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

  return new $Mlpu$var$DOMComponent(attributes.store, children.map($KfbX$export$domChildToTemplate), attributes.delayed || false);
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

      if (newAction !== undefined) {
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
        template = options.template;
    var comp = $Mlpu$export$component({
      store: store
    }, template);
    return Tempo.renderComponent({
      el: el,
      component: comp,
      document: document
    });
  }

  Tempo.render = render;
})($sCte$var$Tempo = $sCte$export$Tempo || ($sCte$export$Tempo = {}, $sCte$exports.Tempo = $sCte$export$Tempo)); //# sourceMappingURL=tempo.js.map


// ASSET: test_runner.ts
var $MWVc$exports = {};
Object.defineProperty($MWVc$exports, "__esModule", {
  value: true
});

function $MWVc$var$setup() {}

function $MWVc$var$teardown() {
  document.getElementById('test').innerHTML = '';
}

var $MWVc$var$loadScript = function loadScript(runnerId) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');

    script.onload = function () {
      console.log("loaded tests for " + runnerId + ", now executing ...");
      var anyWin = window;
      var mod = anyWin.__tests__;
      delete anyWin.__tests__;
      document.body.removeChild(script);
      resolve(mod);
    };

    script.src = "./" + runnerId + "/main.js";
    document.body.appendChild(script);
  });
};

var $MWVc$var$makeSuite = function makeSuite(runnerId, testDescriptions, options, dispatch) {
  return new Promise(function (resolve) {
    return $vCxL$export$__awaiter(void 0, void 0, void 0, function () {
      var mod, suite, _loop_1, _i, testDescriptions_1, test;

      return $vCxL$export$__generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, $MWVc$var$loadScript(runnerId)];

          case 1:
            mod = _a.sent();
            suite = new Benchmark.Suite();

            _loop_1 = function _loop_1(test) {
              if (!mod[test.fn]) {
                console.log("skip (no implementation): " + runnerId + ": " + test.id);
                dispatch(runnerId, test.id, undefined);
                return "continue";
              }

              suite.add({
                id: test.id,
                async: true,
                fn: function fn() {
                  mod[test.fn](test.args);
                },
                name: test.name,
                setup: $MWVc$var$setup,
                teardown: $MWVc$var$teardown,
                maxTime: options.maxTime
              });
            };

            for (_i = 0, testDescriptions_1 = testDescriptions; _i < testDescriptions_1.length; _i++) {
              test = testDescriptions_1[_i];

              _loop_1(test);
            }

            suite.on('cycle', function (event) {
              console.log(runnerId + ": " + String(event.target));
              dispatch(runnerId, event.target.id, event.target);
            });
            suite.on('complete', resolve);
            suite.run({
              async: true,
              queued: true
            });
            return [2];
        }
      });
    });
  });
};

var $MWVc$export$runTests = function (runnerIds, testDescriptions, options, dispatch) {
  return $vCxL$export$__awaiter(void 0, void 0, void 0, function () {
    var _i, runnerIds_1, id;

    return $vCxL$export$__generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _i = 0, runnerIds_1 = runnerIds;
          _a.label = 1;

        case 1:
          if (!(_i < runnerIds_1.length)) return [3, 4];
          id = runnerIds_1[_i];
          return [4, $MWVc$var$makeSuite(id, testDescriptions, options, dispatch)];

        case 2:
          _a.sent();

          _a.label = 3;

        case 3:
          _i++;
          return [3, 1];

        case 4:
          return [2];
      }
    });
  });
};

$MWVc$exports.runTests = $MWVc$export$runTests;
// ASSET: middleware.ts
var $GrqS$exports = {};
Object.defineProperty($GrqS$exports, "__esModule", {
  value: true
});

var $GrqS$export$middleware = function (app) {
  return function (state, action) {
    switch (action.kind) {
      case 'ExecuteSelectedTests':
        var _a = $mIWh$export$getSelectedTests(state),
            tests = _a.tests,
            versions = _a.versions;

        app.store.process($FLek$export$Action.executeTests(versions, tests));
        return;

      case 'ExecuteTests':
        var versionIds_1 = action.versionIds,
            testIds = action.testIds;
        var options_1 = state.options;
        var set_1 = new Set(testIds);
        var testsToRun_1 = $cibo$export$tests.filter(function (test) {
          return set_1.has(test.id);
        });
        setTimeout(function () {
          $MWVc$export$runTests(versionIds_1, testsToRun_1, options_1, function (runnerId, testId, target) {
            app.store.process($FLek$export$Action.updateResult(runnerId, testId, target));
          }).then(function () {
            return app.store.process($FLek$export$Action.testsExecuted());
          });
        }, 1);
        return;

      default:
    }
  };
};

$GrqS$exports.middleware = $GrqS$export$middleware;
// ASSET: create_app.ts
var $ZMBm$exports = {};
Object.defineProperty($ZMBm$exports, "__esModule", {
  value: true
});

var $ZMBm$export$createApp = function (state) {
  var store = $UiLj$export$Store.ofState({
    state: state,
    reducer: $pSX2$export$reducer
  });
  var el = document.getElementById('app');
  var app = $sCte$export$Tempo.render({
    store: store,
    template: $ywMA$export$template,
    el: el
  });
  app.store.observable.on($GrqS$export$middleware(app));
};

$ZMBm$exports.createApp = $ZMBm$export$createApp;
// ASSET: index.ts
var $QCba$exports = {};
Object.defineProperty($QCba$exports, "__esModule", {
  value: true
});
$C9JJ$export$loadConfig().then(function (config) {
  return $ZMBm$export$createApp($mIWh$export$createState(config.versions));
});

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $QCba$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $QCba$exports;
  });
}

return {
  "QCba": $QCba$exports
};
});