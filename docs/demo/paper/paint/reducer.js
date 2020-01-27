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
import { reduceOnKind } from 'tempo-store/lib/reducer';
export var reducer = reduceOnKind({
    ChangeUrl: function (state, action) {
        return __assign(__assign({}, state), { url: action.url });
    },
    LoadUrl: function (state, action) {
        return state;
    },
    RasterLoaded: function (state, action) {
        return __assign(__assign({}, state), { raster: action.raster });
    }
});
