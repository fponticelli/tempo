import { DOMDynamicFragmentView } from './fragment';
import { View, DynamicView } from '@mood/core/view';
import { DOMTemplate, DOMChild } from './template';
import { DOMContext } from './context';
export declare class DOMComponentView<State, Action> extends DOMDynamicFragmentView<State> {
    state: State;
    readonly dispatch: (action: Action) => void;
    constructor(state: State, dispatch: (action: Action) => void, children: View<State>[], dynamics: DynamicView<State>[]);
}
export declare type UpdateF<State, Action> = (state: State, action: Action, dispatch: (action: Action) => void) => State;
export declare class DOMComponent<State, Action> implements DOMTemplate<State, Action> {
    readonly state: State;
    readonly update: UpdateF<State, Action>;
    readonly children: DOMTemplate<State, Action>[];
    constructor(state: State, update: UpdateF<State, Action>, children: DOMTemplate<State, Action>[]);
    render(ctx: DOMContext<Action>, state: State): DOMComponentView<State, Action>;
}
export declare const component: <State, Action>(attributes: {
    state: State;
    update: (state: State, action: Action, dispatch: (action: Action) => void) => State;
}, ...children: DOMChild<State, Action>[]) => DOMComponent<State, Action>;
//# sourceMappingURL=component.d.ts.map