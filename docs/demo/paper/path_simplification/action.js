import { Mode } from './state';
export var Action = {
    addSegment: function (segment) {
        return { kind: 'AddSegment', segment: segment };
    },
    addPath: { kind: 'AddPath' },
    removePath: { kind: 'RemovePath' },
    selectPath: function (pathIndex) {
        return { kind: 'ChangeMode', mode: Mode.editing(pathIndex) };
    },
    draw: { kind: 'ChangeMode', mode: Mode.drawing },
    updatePosition: function (delta) {
        return { kind: 'UpdatePosition', delta: delta };
    }
};
