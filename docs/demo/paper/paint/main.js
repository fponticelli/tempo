var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { lazy } from 'tempo-paper/lib/lazy';
import { adapter } from 'tempo-paper/lib/adapter';
import { app } from './app';
export var template = lazy(function () {
    return adapter({
        mergeStates: function (outer, inner) {
            return __assign(__assign({}, inner), { size: outer.size });
        }
    }, app);
});
