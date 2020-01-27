import { Point, Color } from 'paper';
import { component } from 'tempo-paper/lib/component';
import { rectangle } from 'tempo-paper/lib/shape';
import { Store } from 'tempo-store/lib/store';
import { makeState } from './state';
import { reducer } from './reducer';
import { htmlPortalWithSelector } from 'tempo-paper/lib/html_portal';
import { toolbar } from './toolbar';
var state = makeState('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg');
var store = Store.ofState({ state: state, reducer: reducer });
export var app = component({ store: store }, htmlPortalWithSelector({ selector: '#toolbar' }, toolbar), rectangle({
    opacity: 0.0,
    size: function (state) { return state.size; },
    fillColor: new Color(0.11, 0.1, 0.15),
    position: function (state) {
        return new Point(state.size.width / 2, state.size.height / 2);
    },
}));
