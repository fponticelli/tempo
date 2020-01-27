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
import { Path, Matrix } from 'paper';
import { reduceOnKind } from 'tempo-store/lib/reducer';
import { Mode } from './state';
export var reducer = reduceOnKind({
    AddSegment: function (state, action) {
        var current = state.current.concat([action.segment]);
        return __assign(__assign({}, state), { current: current });
    },
    AddPath: function (state) {
        if (state.current.length <= 1)
            return state;
        var path = new Path({
            segments: state.current,
            insert: false,
            applyMatrix: false
        });
        path.simplify(10);
        var paths = state.paths.concat([
            {
                segments: path.segments.map(function (seg) {
                    var newSeg = seg.clone();
                    newSeg.transform(new Matrix(1, 0, 0, 1, -path.position.x, -path.position.y));
                    return newSeg;
                }),
                position: path.position
            }
        ]);
        path.remove();
        return __assign(__assign({}, state), { paths: paths, current: [], mode: Mode.editing(paths.length - 1) });
    },
    RemovePath: function (state) {
        if (state.mode.kind === 'drawing')
            return state;
        var paths = state.paths
            .slice(0, state.mode.pathIndex)
            .concat(state.paths.slice(state.mode.pathIndex + 1));
        return __assign(__assign({}, state), { mode: Mode.drawing, paths: paths });
    },
    ChangeMode: function (state, action) {
        return __assign(__assign({}, state), { mode: action.mode });
    },
    UpdatePosition: function (state, action) {
        if (state.mode.kind === 'editing') {
            var old = state.paths[state.mode.pathIndex];
            var item = __assign(__assign({}, old), { position: old.position.add(action.delta) });
            var paths = state.paths
                .slice(0, state.mode.pathIndex)
                .concat([item])
                .concat(state.paths.slice(state.mode.pathIndex + 1));
            return __assign(__assign({}, state), { paths: paths });
        }
        else {
            return state;
        }
    }
});
