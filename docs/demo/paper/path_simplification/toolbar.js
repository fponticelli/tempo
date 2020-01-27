import { span, button } from 'tempo-dom/lib/html';
import { Action } from './action';
import { match } from 'tempo-dom/lib/match';
export var toolbar = span({}, span({ attrs: { class: 'message' } }, match(['mode', 'kind'], {
    editing: function (state) {
        return "Selected line has " + state.paths[state.mode.pathIndex].segments.length + " segments";
    },
    drawing: function (state) {
        if (state.current.length > 0)
            return "line has " + state.current.length + " segments";
        else if (state.paths.length > 0)
            return 'click to select a line or click and drag to draw';
        else
            return 'click and drag to draw a line';
    }
})), span({ attrs: { class: 'actions' } }, button({
    attrs: {
        disabled: function (state) { return state.mode.kind !== 'editing'; }
    },
    events: {
        click: function () { return Action.removePath; }
    }
}, 'Remove Selected')));
