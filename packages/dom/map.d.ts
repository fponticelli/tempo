import { DOMChild, DOMTemplate } from './template';
import { View } from '@mood/core/view';
import { DOMContext } from './context';
export declare class MapStateTemplate<OuterState, InnerState, Action> implements DOMTemplate<OuterState, Action> {
    readonly map: (value: OuterState) => InnerState;
    readonly children: DOMTemplate<InnerState, Action>[];
    constructor(map: (value: OuterState) => InnerState, children: DOMTemplate<InnerState, Action>[]);
    render(ctx: DOMContext<Action>, state: OuterState): View<OuterState>;
}
export declare const mapState: <OuterState, InnerState, Action>(opts: {
    map: (value: OuterState) => InnerState;
}, ...children: DOMChild<InnerState, Action>[]) => MapStateTemplate<OuterState, InnerState, Action>;
export declare class MapActionTemplate<State, OuterAction, InnerAction> implements DOMTemplate<State, OuterAction> {
    readonly map: (value: InnerAction) => OuterAction | undefined;
    readonly children: DOMTemplate<State, InnerAction>[];
    constructor(map: (value: InnerAction) => OuterAction | undefined, children: DOMTemplate<State, InnerAction>[]);
    render(ctx: DOMContext<OuterAction>, state: State): View<State>;
}
export declare const mapAction: <State, OuterAction, InnerAction>(opts: {
    map: (value: InnerAction) => OuterAction | undefined;
}, ...children: DOMChild<State, InnerAction>[]) => MapActionTemplate<State, OuterAction, InnerAction>;
//# sourceMappingURL=map.d.ts.map