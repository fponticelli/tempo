import { adapter } from 'tempo-paper/lib/adapter';
import { state } from './state';
import { reducer } from './reducer';
import { Store } from 'tempo-store/lib/store';
import { makeApp } from './app';
var store = Store.ofState({
    state: state,
    reducer: reducer
});
export var template = adapter({}, makeApp(store));
