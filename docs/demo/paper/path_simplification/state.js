export var Mode = {
    drawing: { kind: 'drawing' },
    editing: function (pathIndex) {
        return { kind: 'editing', pathIndex: pathIndex };
    }
};
export var state = {
    paths: [],
    current: [],
    mode: Mode.drawing
};
