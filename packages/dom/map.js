"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var fragment_1 = require("./fragment");
var MapStateTemplate = /** @class */ (function () {
    function MapStateTemplate(map, children) {
        this.map = map;
        this.children = children;
    }
    MapStateTemplate.prototype.render = function (ctx, state) {
        var _a = this, children = _a.children, map = _a.map;
        var innerState = map(state);
        var views = children.map(function (c) { return c.render(ctx, innerState); });
        var dynamics = utils_1.filterDynamics(views);
        if (dynamics.length === 0) {
            return new fragment_1.DOMStaticFragmentView(views);
        }
        else {
            return new fragment_1.DOMDynamicFragmentView(views, function (state) {
                var innerState = map(state);
                dynamics.forEach(function (d) { return d.change(innerState); });
            });
        }
    };
    return MapStateTemplate;
}());
exports.MapStateTemplate = MapStateTemplate;
exports.mapState = function (opts) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new MapStateTemplate(opts.map, children.map(utils_1.domChildToTemplate));
};
var MapActionTemplate = /** @class */ (function () {
    function MapActionTemplate(map, children) {
        this.map = map;
        this.children = children;
    }
    MapActionTemplate.prototype.render = function (ctx, state) {
        var _a = this, children = _a.children, map = _a.map;
        var views = children.map(function (c) { return c.render(ctx.conditionalMapAction(map), state); });
        return fragment_1.fragmentView(views);
    };
    return MapActionTemplate;
}());
exports.MapActionTemplate = MapActionTemplate;
exports.mapAction = function (opts) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return new MapActionTemplate(opts.map, children.map(utils_1.domChildToTemplate));
};
//# sourceMappingURL=map.js.map