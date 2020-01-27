import { span, input } from 'tempo-dom/lib/html';
export var toolbar = span({}, span({ attrs: { class: 'message' } }, function (state) { return state.message; }), span({ attrs: { class: 'action' } }, input({
    attrs: {
        type: 'text',
        value: function (state) { return state.url; }
    }
})));
