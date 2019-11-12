"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mood_1 = require("@mood/dom/lib/mood");
var web_1 = require("@mood/dom/lib/web");
var div = web_1.html.div, button = web_1.html.button;
var map_1 = require("@mood/dom/lib/map");
var store_1 = require("@mood/store/lib/store");
var state = { count: 0 };
var decrement = function (_) { return ({ kind: 'decrement' }); };
var increment = function (_) { return ({ kind: 'increment' }); };
var reducer = function (state, action) {
    switch (action.kind) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw "this should never happen";
    }
};
var store = store_1.Store.ofState({ state: state, reducer: reducer });
var template = div({ className: 'app' }, map_1.mapState({ map: function (state) { return state.count; } }, div({ className: 'count count-small' }, 'count'), div({ className: 'count' }, String), div({ className: 'buttons' }, button({ onclick: decrement, disabled: function (count) { return count <= 0; } }, '-'), button({ onclick: increment }, '+'))));
mood_1.Mood.render({ store: store, template: template });
