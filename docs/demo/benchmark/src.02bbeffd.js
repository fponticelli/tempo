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
      maxTime: 0.2
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

// ASSET: ../node_modules/tempo-dom/node_modules/tempo-core/lib/util/map.js
var $tBUf$exports = {};
Object.defineProperty($tBUf$exports, "__esModule", {
  value: true
});

var $tBUf$export$mapArray = function (arr, f) {
  var length = arr.length;
  var buff = new Array(length);

  for (var i = 0; i < length; i++) {
    buff[i] = f(arr[i]);
  }

  return buff;
};

$tBUf$exports.mapArray = $tBUf$export$mapArray; //# sourceMappingURL=map.js.map

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
    var s = $tBUf$export$mapArray(Object.keys(value), function (k) {
      return k + ": " + value[k] + ";";
    }).join(' ');
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

// ASSET: ../node_modules/tempo-dom/lib/node_view.js
var $wNw6$exports = {};

var $wNw6$var$__extends = $wNw6$exports && $wNw6$exports.__extends || function () {
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

Object.defineProperty($wNw6$exports, "__esModule", {
  value: true
});

var $wNw6$var$DOMBaseNodeView =
/** @class */
function () {
  function DOMBaseNodeView(node, children, request, beforeDestroy) {
    this.node = node;
    this.children = children;
    this.request = request;
    this.beforeDestroy = beforeDestroy;
  }

  DOMBaseNodeView.prototype.destroy = function () {
    if (this.beforeDestroy) this.beforeDestroy();
    $TnZD$export$removeNode(this.node);

    for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
      var c = _a[_i];
      c.destroy();
    }
  };

  return DOMBaseNodeView;
}();

var $wNw6$export$DOMBaseNodeView = $wNw6$var$DOMBaseNodeView;
$wNw6$exports.DOMBaseNodeView = $wNw6$export$DOMBaseNodeView;

var $wNw6$var$DOMStaticNodeView =
/** @class */
function (_super) {
  $wNw6$var$__extends(DOMStaticNodeView, _super);

  function DOMStaticNodeView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.kind = 'static';
    return _this;
  }

  return DOMStaticNodeView;
}($wNw6$var$DOMBaseNodeView);

var $wNw6$export$DOMStaticNodeView = $wNw6$var$DOMStaticNodeView;
$wNw6$exports.DOMStaticNodeView = $wNw6$export$DOMStaticNodeView;

var $wNw6$var$DOMDynamicNodeView =
/** @class */
function (_super) {
  $wNw6$var$__extends(DOMDynamicNodeView, _super);

  function DOMDynamicNodeView(node, children, change, request, beforeDestroy) {
    var _this = _super.call(this, node, children, request, beforeDestroy) || this;

    _this.node = node;
    _this.children = children;
    _this.change = change;
    _this.request = request;
    _this.beforeDestroy = beforeDestroy;
    _this.kind = 'dynamic';
    return _this;
  }

  return DOMDynamicNodeView;
}($wNw6$var$DOMBaseNodeView);

var $wNw6$export$DOMDynamicNodeView = $wNw6$var$DOMDynamicNodeView;
$wNw6$exports.DOMDynamicNodeView = $wNw6$export$DOMDynamicNodeView; //# sourceMappingURL=node_view.js.map

// ASSET: ../node_modules/tempo-dom/lib/text.js
var $GqEk$exports = {};
Object.defineProperty($GqEk$exports, "__esModule", {
  value: true
});

var $GqEk$var$renderLiteral = function (ctx, value) {
  var node = ctx.doc.createTextNode(value || '');
  var view = new $wNw6$export$DOMStaticNodeView(node, [], function () {});
  ctx.append(node);
  return view;
};

var $GqEk$var$renderFunction = function (ctx, state, map) {
  var node = ctx.doc.createTextNode(map(state) || '');
  var oldContent = '';

  var f = function (state) {
    var newContent = map(state) || '';

    if (newContent !== oldContent) {
      node.nodeValue = newContent;
      if (newContent.length < 5000) oldContent = newContent;
    }
  };

  var view = new $wNw6$export$DOMDynamicNodeView(node, [], f, function () {});
  ctx.append(node);
  return view;
};

var $GqEk$var$DOMTextTemplate =
/** @class */
function () {
  function DOMTextTemplate(content) {
    this.content = content;
  }

  DOMTextTemplate.prototype.render = function (ctx, state) {
    if (typeof this.content === 'function') {
      return $GqEk$var$renderFunction(ctx, state, this.content);
    } else {
      return $GqEk$var$renderLiteral(ctx, this.content);
    }
  };

  return DOMTextTemplate;
}();

var $GqEk$export$DOMTextTemplate = $GqEk$var$DOMTextTemplate;
$GqEk$exports.DOMTextTemplate = $GqEk$export$DOMTextTemplate;

var $GqEk$export$text = function (content) {
  return new $GqEk$var$DOMTextTemplate(content);
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

function $TnZD$var$insertBefore(ref) {
  return function (node) {
    if (ref.parentElement != null) {
      ref.parentElement.insertBefore(node, ref);
    }
  };
}

var $TnZD$export$insertBefore = $TnZD$var$insertBefore;
$TnZD$exports.insertBefore = $TnZD$export$insertBefore;

function $TnZD$var$filterDynamics(children) {
  return children.filter(function (child) {
    return child.kind === 'dynamic';
  });
}

var $TnZD$export$filterDynamics = $TnZD$var$filterDynamics;
$TnZD$exports.filterDynamics = $TnZD$export$filterDynamics;

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
$TnZD$exports.processStyle = $TnZD$export$processStyle; //# sourceMappingURL=dom.js.map

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
    var allDynamics = [];

    for (var _i = 0, _a = this.attrs; _i < _a.length; _i++) {
      var o = _a[_i];
      $TnZD$export$processAttribute(el, o.name, o.value, allDynamics);
    }

    for (var _b = 0, _c = this.events; _b < _c.length; _b++) {
      var o = _c[_b];
      $TnZD$export$processEvent(el, o.name, o.value, ctx.dispatch, allDynamics);
    }

    for (var _d = 0, _e = this.styles; _d < _e.length; _d++) {
      var o = _e[_d];
      $TnZD$export$processStyle(el, o.name, o.value, allDynamics);
    }

    for (var _f = 0, allDynamics_1 = allDynamics; _f < allDynamics_1.length; _f++) {
      var dy = allDynamics_1[_f];
      dy(state);
    } // children


    var appendChild = function (n) {
      return el.appendChild(n);
    };

    var newCtx = ctx.withAppend(appendChild).withParent(el);
    var views = $tBUf$export$mapArray(this.children, function (child) {
      return child.render(newCtx, state);
    });
    ctx.append(el);

    if (this.afterrender) {
      value = $bbLX$var$applyAfterRender(this.afterrender, el, ctx, state);
    }

    var dynamicChildren = $tBUf$export$mapArray($TnZD$export$filterDynamics(views), function (child) {
      return function (state) {
        return child.change(state);
      };
    });
    allDynamics.push.apply(allDynamics, dynamicChildren);

    if (this.beforechange) {
      var change_1 = $bbLX$var$applyChange(this.beforechange, el, ctx);

      var update = function (state) {
        value = change_1(state, value);
      };

      allDynamics.unshift(update);
    }

    if (this.afterchange) {
      var change_2 = $bbLX$var$applyChange(this.afterchange, el, ctx);

      var update = function (state) {
        value = change_2(state, value);
      };

      allDynamics.push(update);
    }

    var beforedestroyf = this.beforedestroy && function () {
      return _this.beforedestroy(el, ctx, value);
    };

    var request = this.respond ? function (query) {
      views.forEach(function (view) {
        return view.request(query);
      });

      _this.respond(query, el, ctx);
    } : function () {};

    if (allDynamics.length > 0) {
      return new $wNw6$export$DOMDynamicNodeView(el, views, function (state) {
        for (var _i = 0, allDynamics_2 = allDynamics; _i < allDynamics_2.length; _i++) {
          var f = allDynamics_2[_i];
          f(state);
        }
      }, request, beforedestroyf);
    } else {
      return new $wNw6$export$DOMStaticNodeView(el, views, request, beforedestroyf);
    }
  };

  return DOMElement;
}();

var $bbLX$export$DOMElement = $bbLX$var$DOMElement;
$bbLX$exports.DOMElement = $bbLX$export$DOMElement;

function $bbLX$var$extractAttrs(attrs) {
  return $tBUf$export$mapArray(Object.keys(attrs || {}), function (attName) {
    var name = attName.toLowerCase();
    name = $UKQ2$export$attributeNameMap[name] || name;
    return {
      name: name,
      value: attrs[attName]
    };
  });
}

function $bbLX$var$extractEvents(attrs) {
  return $tBUf$export$mapArray(Object.keys(attrs || {}), function (eventName) {
    var name = "on" + eventName.toLowerCase();
    return {
      name: name,
      value: attrs[eventName]
    };
  });
}

function $bbLX$var$extractStyles(attrs) {
  return $tBUf$export$mapArray(Object.keys(attrs || {}), function (name) {
    return {
      name: name,
      value: attrs[name]
    };
  });
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

  return new $bbLX$var$DOMElement($bbLX$var$makeCreateElement(name), $bbLX$var$extractAttrs(attributes.attrs), $bbLX$var$extractEvents(attributes.events), $bbLX$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
};

$bbLX$exports.el = $bbLX$export$el;

var $bbLX$export$el2 = function (name) {
  return function (attributes) {
    var children = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      children[_i - 1] = arguments[_i];
    }

    return new $bbLX$var$DOMElement($bbLX$var$makeCreateElement(name), $bbLX$var$extractAttrs(attributes.attrs), $bbLX$var$extractEvents(attributes.events), $bbLX$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
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
  return new $bbLX$var$DOMElement($bbLX$var$makeCreateElementNS(namespace, name), $bbLX$var$extractAttrs(attributes.attrs), $bbLX$var$extractEvents(attributes.events), $bbLX$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
};

$bbLX$exports.elNS = $bbLX$export$elNS;

var $bbLX$export$elNS2 = function (namespace, name) {
  return function (attributes) {
    var children = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      children[_i - 1] = arguments[_i];
    }

    return new $bbLX$var$DOMElement($bbLX$var$makeCreateElementNS(namespace, name), $bbLX$var$extractAttrs(attributes.attrs), $bbLX$var$extractEvents(attributes.events), $bbLX$var$extractStyles(attributes.styles), attributes.afterrender, attributes.beforechange, attributes.afterchange, attributes.beforedestroy, attributes.respond, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
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
var $JiXW$export$optionsSelection = $zQMt$export$div({}, $zQMt$export$table({}, $zQMt$export$tr({}, $zQMt$export$th({}, $zQMt$export$label({
  attrs: {
    for: 'options_max_time'
  }
}, 'max execution time')), $zQMt$export$td({
  attrs: {
    className: 'option-value'
  }
}, $zQMt$export$input({
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
// ASSET: ../node_modules/tempo-dom/lib/fragment.js
var $Gdta$exports = {};

var $Gdta$var$__extends = $Gdta$exports && $Gdta$exports.__extends || function () {
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

Object.defineProperty($Gdta$exports, "__esModule", {
  value: true
});

var $Gdta$var$DOMBaseFragmentView =
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

  DOMBaseFragmentView.prototype.request = function (query) {
    for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
      var v = _a[_i];
      v.request(query);
    }
  };

  return DOMBaseFragmentView;
}();

var $Gdta$export$DOMBaseFragmentView = $Gdta$var$DOMBaseFragmentView;
$Gdta$exports.DOMBaseFragmentView = $Gdta$export$DOMBaseFragmentView;

var $Gdta$var$DOMStaticFragmentView =
/** @class */
function (_super) {
  $Gdta$var$__extends(DOMStaticFragmentView, _super);

  function DOMStaticFragmentView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.kind = 'static';
    return _this;
  }

  return DOMStaticFragmentView;
}($Gdta$var$DOMBaseFragmentView);

var $Gdta$export$DOMStaticFragmentView = $Gdta$var$DOMStaticFragmentView;
$Gdta$exports.DOMStaticFragmentView = $Gdta$export$DOMStaticFragmentView;

var $Gdta$var$DOMDynamicFragmentView =
/** @class */
function (_super) {
  $Gdta$var$__extends(DOMDynamicFragmentView, _super);

  function DOMDynamicFragmentView(views, change) {
    var _this = _super.call(this, views) || this;

    _this.change = change;
    _this.kind = 'dynamic';
    return _this;
  }

  return DOMDynamicFragmentView;
}($Gdta$var$DOMBaseFragmentView);

var $Gdta$export$DOMDynamicFragmentView = $Gdta$var$DOMDynamicFragmentView;
$Gdta$exports.DOMDynamicFragmentView = $Gdta$export$DOMDynamicFragmentView;

var $Gdta$export$fragmentView = function (views) {
  var dynamics = $TnZD$export$filterDynamics(views);

  if (dynamics.length > 0) {
    return new $Gdta$var$DOMDynamicFragmentView(views, function (state) {
      for (var _i = 0, dynamics_1 = dynamics; _i < dynamics_1.length; _i++) {
        var d = dynamics_1[_i];
        d.change(state);
      }
    });
  } else {
    return new $Gdta$var$DOMStaticFragmentView(views);
  }
};

$Gdta$exports.fragmentView = $Gdta$export$fragmentView;

var $Gdta$var$DOMFragmentTemplate =
/** @class */
function () {
  function DOMFragmentTemplate(children) {
    this.children = children;
  }

  DOMFragmentTemplate.prototype.render = function (ctx, state) {
    var views = $tBUf$export$mapArray(this.children, function (child) {
      return child.render(ctx, state);
    });
    return $Gdta$export$fragmentView(views);
  };

  return DOMFragmentTemplate;
}();

var $Gdta$export$DOMFragmentTemplate = $Gdta$var$DOMFragmentTemplate;
$Gdta$exports.DOMFragmentTemplate = $Gdta$export$DOMFragmentTemplate;

var $Gdta$export$fragment = function () {
  var children = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    children[_i] = arguments[_i];
  }

  return new $Gdta$var$DOMFragmentTemplate($tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
};

$Gdta$exports.fragment = $Gdta$export$fragment; //# sourceMappingURL=fragment.js.map

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
    var views = $tBUf$export$mapArray(children, function (c) {
      return c.render(ctx, innerState);
    });
    var dynamics = $TnZD$export$filterDynamics(views);

    if (dynamics.length === 0) {
      return new $Gdta$export$DOMStaticFragmentView(views);
    } else {
      return new $Gdta$export$DOMDynamicFragmentView(views, function (state) {
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

var $qep0$export$MapStateTemplate = $qep0$var$MapStateTemplate;
$qep0$exports.MapStateTemplate = $qep0$export$MapStateTemplate;

var $qep0$export$mapState = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $qep0$var$MapStateTemplate(options.map, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
};

$qep0$exports.mapState = $qep0$export$mapState;

var $qep0$export$mapStateAndKeep = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $qep0$var$MapStateTemplate(function (state) {
    return [options.map(state), state];
  }, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
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

    var views = $tBUf$export$mapArray(children, function (c) {
      return c.render(ctx.conditionalMapAction(map), state);
    });
    return $Gdta$export$fragmentView(views);
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

  return new $qep0$var$MapActionTemplate(options.map, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
};

$qep0$exports.mapAction = $qep0$export$mapAction;

var $qep0$var$MapQueryDynamicView =
/** @class */
function () {
  function MapQueryDynamicView(map, views, dynamicViews) {
    this.map = map;
    this.views = views;
    this.dynamicViews = dynamicViews;
    this.kind = 'dynamic';
  }

  MapQueryDynamicView.prototype.request = function (query) {
    var innerQuery = this.map(query);

    if (typeof innerQuery !== 'undefined') {
      this.views.forEach(function (view) {
        return view.request(innerQuery);
      });
    }
  };

  MapQueryDynamicView.prototype.change = function (state) {
    this.dynamicViews.forEach(function (view) {
      return view.change(state);
    });
  };

  MapQueryDynamicView.prototype.destroy = function () {
    this.views.forEach(function (view) {
      return view.destroy();
    });
  };

  return MapQueryDynamicView;
}();

var $qep0$export$MapQueryDynamicView = $qep0$var$MapQueryDynamicView;
$qep0$exports.MapQueryDynamicView = $qep0$export$MapQueryDynamicView;

var $qep0$var$MapQueryStaticView =
/** @class */
function () {
  function MapQueryStaticView(map, views) {
    this.map = map;
    this.views = views;
    this.kind = 'static';
  }

  MapQueryStaticView.prototype.request = function (query) {
    var innerQuery = this.map(query);

    if (typeof innerQuery !== 'undefined') {
      this.views.forEach(function (view) {
        return view.request(innerQuery);
      });
    }
  };

  MapQueryStaticView.prototype.destroy = function () {
    this.views.forEach(function (view) {
      return view.destroy();
    });
  };

  return MapQueryStaticView;
}();

var $qep0$export$MapQueryStaticView = $qep0$var$MapQueryStaticView;
$qep0$exports.MapQueryStaticView = $qep0$export$MapQueryStaticView;

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

    var views = $tBUf$export$mapArray(children, function (c) {
      return c.render(ctx, state);
    });
    var dynamicViews = $TnZD$export$filterDynamics(views);

    if (dynamicViews.length > 0) {
      return new $qep0$var$MapQueryDynamicView(map, views, dynamicViews);
    } else {
      return new $qep0$var$MapQueryStaticView(map, views);
    }
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

  return new $qep0$var$MapQueryTemplate(options.map, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
};

$qep0$exports.mapQuery = $qep0$export$mapQuery;

var $qep0$export$mapQueryConditional = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $qep0$var$MapQueryTemplate(options.map, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
};

$qep0$exports.mapQueryConditional = $qep0$export$mapQueryConditional; //# sourceMappingURL=map.js.map

// ASSET: ../node_modules/tempo-dom/lib/until.js
var $UU8h$exports = {};
Object.defineProperty($UU8h$exports, "__esModule", {
  value: true
});

var $UU8h$var$DOMUntilView =
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
    $TnZD$export$removeNode(this.ref);

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
        var filtered = $TnZD$export$filterDynamics(this_1.childrenView[index]);

        for (var _i = 0, filtered_1 = filtered; _i < filtered_1.length; _i++) {
          var v = filtered_1[_i];
          v.change(value);
        }
      } else {
        // add node
        this_1.childrenView.push($tBUf$export$mapArray(this_1.children, function (el) {
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

  DOMUntilView.prototype.request = function (query) {
    this.childrenView.forEach(function (views) {
      return views.forEach(function (view) {
        return view.request(query);
      });
    });
  };

  return DOMUntilView;
}();

var $UU8h$export$DOMUntilView = $UU8h$var$DOMUntilView;
$UU8h$exports.DOMUntilView = $UU8h$export$DOMUntilView;

var $UU8h$var$DOMUntilTemplate =
/** @class */
function () {
  function DOMUntilTemplate(options, children) {
    this.options = options;
    this.children = children;
  }

  DOMUntilTemplate.prototype.render = function (ctx, state) {
    var ref = ctx.doc.createComment(this.options.refId || 't:until');
    ctx.append(ref);
    var view = new $UU8h$var$DOMUntilView(ref, this.options.repeatUntil, ctx.withAppend($TnZD$export$insertBefore(ref)), this.children);
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

  return new $UU8h$var$DOMUntilTemplate(options, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate));
};

$UU8h$exports.until = $UU8h$export$until; //# sourceMappingURL=until.js.map

// ASSET: ../node_modules/tempo-dom/lib/for_each.js
var $kxUV$exports = {};

var $kxUV$var$__spreadArrays = $kxUV$exports && $kxUV$exports.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty($kxUV$exports, "__esModule", {
  value: true
});

var $kxUV$export$forEach = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return $UU8h$export$until.apply(void 0, $kxUV$var$__spreadArrays([{
    refId: options.refId || 't:for_each',
    repeatUntil: function (state, index) {
      return state[index];
    }
  }], children));
};

$kxUV$exports.forEach = $kxUV$export$forEach; //# sourceMappingURL=for_each.js.map

// ASSET: ../node_modules/tempo-dom/lib/when.js
var $Qev4$exports = {};
Object.defineProperty($Qev4$exports, "__esModule", {
  value: true
});

var $Qev4$var$DOMWhenView =
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
        this.views = $tBUf$export$mapArray(this.children, function (c) {
          return c.render(_this.ctx, value);
        });
        this.dynamics = $TnZD$export$filterDynamics(this.views);
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

  DOMWhenView.prototype.request = function (query) {
    var _a;

    (_a = this.views) === null || _a === void 0 ? void 0 : _a.forEach(function (view) {
      return view.request(query);
    });
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

var $Qev4$export$DOMWhenView = $Qev4$var$DOMWhenView;
$Qev4$exports.DOMWhenView = $Qev4$export$DOMWhenView;

var $Qev4$var$DOMWhenTemplate =
/** @class */
function () {
  function DOMWhenTemplate(options, children) {
    this.options = options;
    this.children = children;
  }

  DOMWhenTemplate.prototype.render = function (ctx, state) {
    var ref = ctx.doc.createComment(this.options.refId || 't:when');
    ctx.append(ref);
    var parent = ref.parentElement;
    var view = new $Qev4$var$DOMWhenView(this.options.condition, ctx.withAppend(function (node) {
      return parent.insertBefore(node, ref);
    }), ctx.dispatch, function () {
      return $TnZD$export$removeNode(ref);
    }, $tBUf$export$mapArray(this.children, $TnZD$export$domChildToTemplate));
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

  return new $Qev4$var$DOMWhenTemplate(options, children);
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
  }, children);
};

$Qev4$exports.unless = $Qev4$export$unless; //# sourceMappingURL=when.js.map

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

var $Seec$var$colHeader = $Gdta$export$fragment($Qev4$export$when({
  condition: function condition(s) {
    return s.id === 'current';
  }
}, 'current', $zQMt$export$br({}), function (s) {
  return s.selected ? '✅' : '⛔️';
}), $Qev4$export$when({
  condition: function condition(s) {
    return s.id !== 'current';
  }
}, $qep0$export$mapState({
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
}, $zQMt$export$div({
  attrs: {
    className: 'date'
  }
}, function (s) {
  return s.date.toDateString();
}), $zQMt$export$span({
  attrs: {
    className: 'commit'
  }
}, function (s) {
  return s.commit;
}), ' ', function (s) {
  return s.selected ? '✅' : '⛔️';
})));
var $Seec$export$tableView = $zQMt$export$table({}, $zQMt$export$tr({
  attrs: {
    className: 'header-row'
  }
}, $zQMt$export$th({}, $Qev4$export$when({
  condition: function condition(s) {
    return s.processing.size > 0;
  }
}, $zQMt$export$span({
  attrs: {
    className: 'details'
  }
}, function (s) {
  return " running " + s.processing.size + " tests";
}), $zQMt$export$br({})), $zQMt$export$button({
  events: {
    click: function click() {
      return $FLek$export$Action.executeSelectedTests();
    }
  }
}, 'execute selected tests')), $zQMt$export$th({}), $qep0$export$mapState({
  map: function map(state) {
    return state.versions;
  }
}, $kxUV$export$forEach({}, $zQMt$export$th({
  attrs: {
    className: 'version-header'
  }
}, $zQMt$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click(s) {
      return $FLek$export$Action.toggleVersion(s.id, !s.selected);
    }
  }
}, $Seec$var$colHeader))))), $zQMt$export$tr({
  attrs: {
    className: 'header-row'
  }
}, $zQMt$export$th({}, 'toggle: ', $zQMt$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click() {
      return $FLek$export$Action.toggleAllTests();
    }
  }
}, 'tests'), ', ', $zQMt$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click() {
      return $FLek$export$Action.toggleAllVersions();
    }
  }
}, 'versions')), $zQMt$export$th({}), $qep0$export$mapState({
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
}, $kxUV$export$forEach({}, $zQMt$export$th({
  attrs: {
    className: 'hand'
  }
}, $zQMt$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click(s) {
      return $FLek$export$Action.executeTests([s.version.id], s.tests);
    }
  }
}, '👇'))))), $qep0$export$mapState({
  map: function map(state) {
    return state.tests.map(function (test) {
      return {
        test: test,
        state: state
      };
    });
  }
}, $kxUV$export$forEach({}, $zQMt$export$tr({}, $zQMt$export$th({
  attrs: {
    className: 'header-col'
  }
}, $zQMt$export$a({
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
})), $zQMt$export$th({
  attrs: {
    className: 'hand'
  }
}, $zQMt$export$a({
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
}, '👉')), $qep0$export$mapState({
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
}, $kxUV$export$forEach({}, $zQMt$export$td({
  attrs: {
    className: function className(s) {
      var buff = [];
      if (s.selected) buff.push('selected');
      if (s.processing) buff.push('processing');
      return buff.join(' ');
    }
  }
}, $Qev4$export$when({
  condition: function condition(s) {
    return s.result != null;
  }
}, function (s) {
  return $Seec$var$resultToOpsPerSec(s.result);
}, $zQMt$export$span({
  attrs: {
    className: 'details',
    title: function title(s) {
      return $Seec$var$resultToSamples(s.result);
    }
  }
}, ' ops/sec'), $zQMt$export$br({}), $Qev4$export$when({
  condition: function condition(s) {
    return !!s.faster && s.faster >= 0.05;
  }
}, $zQMt$export$span({
  attrs: {
    className: 'details'
  }
}, $zQMt$export$b({}, function (s) {
  return (s.faster * 100).toFixed(0) + "% faster";
}))), $Qev4$export$when({
  condition: function condition(s) {
    return !s.processing;
  }
}, ' ', $zQMt$export$a({
  attrs: {
    href: '#'
  },
  events: {
    click: function click(s) {
      return $FLek$export$Action.executeTests([s.version], [s.test]);
    }
  }
}, '▶️'))), $Qev4$export$when({
  condition: function condition(s) {
    return s.result == null && !s.processing;
  }
}, $zQMt$export$a({
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
var $ywMA$export$template = $zQMt$export$div({
  attrs: {
    className: 'display_test'
  }
}, $qep0$export$mapState({
  map: function map(state) {
    return state.options;
  }
}, $JiXW$export$optionsSelection), $Seec$export$tableView);
$ywMA$exports.template = $ywMA$export$template;
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

// ASSET: ../node_modules/tempo-store/lib/equality.js
var $dLEG$exports = {};
Object.defineProperty($dLEG$exports, "__esModule", {
  value: true
});

var $dLEG$export$strictEqual = function (a, b) {
  return a === b || a !== a && b !== b;
};

$dLEG$exports.strictEqual = $dLEG$export$strictEqual;

var $dLEG$export$deepEqual = function (a, b) {
  if ($dLEG$export$strictEqual(a, b)) return true;
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
      if (!$dLEG$export$deepEqual(aArr[i], bArr[i])) return false;
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
      if (!$dLEG$export$deepEqual(aMap.get(curr.value), bMap.get(curr.value))) return false;
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
      if (!$dLEG$export$deepEqual(aObj[field], bObj[field])) return false;
    }

    return true;
  }

  return false;
};

$dLEG$exports.deepEqual = $dLEG$export$deepEqual; //# sourceMappingURL=equality.js.map

// ASSET: ../node_modules/tempo-store/lib/property.js
var $zFui$exports = {};
Object.defineProperty($zFui$exports, "__esModule", {
  value: true
});

// @ts-ignore
var $zFui$var$Property =
/** @class */
function () {
  function Property(value, equal) {
    if (equal === void 0) {
      equal = $dLEG$export$deepEqual;
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

// ASSET: ../node_modules/tempo-dom/lib/component.js
var $yVFQ$exports = {};

var $yVFQ$var$__extends = $yVFQ$exports && $yVFQ$exports.__extends || function () {
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

Object.defineProperty($yVFQ$exports, "__esModule", {
  value: true
});

var $yVFQ$var$DOMComponentView =
/** @class */
function (_super) {
  $yVFQ$var$__extends(DOMComponentView, _super);
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

  DOMComponentView.prototype.request = function (query) {
    throw 'TODO'; // TODO
  };

  DOMComponentView.prototype.destroy = function () {
    this._destroy();

    _super.prototype.destroy.call(this);
  };

  return DOMComponentView;
}($Gdta$export$DOMDynamicFragmentView);

var $yVFQ$export$DOMComponentView = $yVFQ$var$DOMComponentView;
$yVFQ$exports.DOMComponentView = $yVFQ$export$DOMComponentView;

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
    var viewChildren = $tBUf$export$mapArray(this.children, function (child) {
      return child.render(newCtx, property.get());
    });
    var dynamics = $TnZD$export$filterDynamics(viewChildren);
    var view = new $yVFQ$var$DOMComponentView(store, innerDispatch, viewChildren, dynamics, function () {
      property.observable.off(update);
    });
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

  return new $yVFQ$var$DOMComponentTemplate(attributes.store, $tBUf$export$mapArray(children, $TnZD$export$domChildToTemplate), attributes.delayed || false);
};

$yVFQ$exports.component = $yVFQ$export$component; //# sourceMappingURL=component.js.map

// ASSET: ../node_modules/tempo-dom/lib/context.js
var $OJrv$exports = {};
Object.defineProperty($OJrv$exports, "__esModule", {
  value: true
});

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
var $UPGL$export$Tempo,
    $UPGL$exports = {};
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

Object.defineProperty($UPGL$exports, "__esModule", {
  value: true
});
var $UPGL$var$Tempo;

(function (Tempo) {
  function renderComponent(options) {
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
      destroy: function () {
        return view.destroy();
      },
      request: function (query) {
        return view.request(query);
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
    var comp = $yVFQ$export$component({
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
})($UPGL$var$Tempo = $UPGL$export$Tempo || ($UPGL$export$Tempo = {}, $UPGL$exports.Tempo = $UPGL$export$Tempo)); //# sourceMappingURL=tempo.js.map


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
  var store = $xN6r$export$Store.ofState({
    state: state,
    reducer: $pSX2$export$reducer
  });
  var el = document.getElementById('app');
  var app = $UPGL$export$Tempo.render({
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