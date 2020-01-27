import { component } from 'tempo-paper/lib/component';
import { Action } from './action';
import { tool } from 'tempo-paper/lib/tool';
import { Color, Segment } from 'paper';
import { path } from 'tempo-paper/lib/path';
import { htmlPortalWithSelector } from 'tempo-paper/lib/html_portal';
import { iterate } from 'tempo-paper/lib/iterate';
import { matchKind } from 'tempo-core';
import { toolbar } from './toolbar';
export var makeApp = function (store) {
    return component({ store: store }, htmlPortalWithSelector({ selector: '#toolbar' }, toolbar), tool({
        active: function (_a) {
            var mode = _a.mode;
            return mode.kind === 'drawing';
        },
        onMouseDown: function (_1, event, _3, project) {
            var target = project.hitTest(event.point, {
                stroke: true,
                tolerance: 5
            });
            if (target) {
                return Action.selectPath(target.item.index);
            }
            else {
                return Action.draw;
            }
        },
        onMouseUp: function () { return Action.addPath; },
        onMouseDrag: function (_, event) {
            return Action.addSegment(new Segment(event.point));
        }
    }), tool({
        active: function (_a) {
            var mode = _a.mode;
            return mode.kind === 'editing';
        },
        onMouseDown: function (state, event, _3, project) {
            var target = project.hitTest(event.point, {
                stroke: true,
                tolerance: 5
            });
            if (target) {
                return Action.selectPath(target.item.index);
            }
            else {
                return Action.draw;
            }
        },
        onMouseDrag: function (_1, event) {
            return Action.updatePosition(event.delta);
        }
    }), path({
        segments: function (state) { return state.current; },
        selected: true
    }), iterate({ getArray: function (state) { return state.paths; } }, path({
        applyMatrix: false,
        position: function (_a) {
            var item = _a[0];
            return item.position;
        },
        segments: function (_a) {
            var item = _a[0];
            return item.segments;
        },
        strokeWidth: 1,
        strokeColor: new Color(0.2, 0.2, 0.2),
        fullySelected: function (_a) {
            var _ = _a[0], state = _a[1], index = _a[2];
            return matchKind({
                drawing: function () { return false; },
                editing: function (_a) {
                    var pathIndex = _a.pathIndex;
                    return pathIndex === index;
                }
            })(state.mode);
        }
    })));
};
