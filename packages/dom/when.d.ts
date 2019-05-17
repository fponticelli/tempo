import { DOMChild, DOMTemplate } from './template';
import { DOMContext } from './context';
import { DynamicView } from '@mood/core/view';
export interface WhenOptions<State> {
    condition: (state: State) => boolean;
    refId?: string;
}
export declare class DOMWhenView<State, Action> implements DynamicView<State> {
    readonly condition: (state: State) => boolean;
    readonly ctx: DOMContext<Action>;
    readonly dispatch: (action: Action) => void;
    readonly removeNode: () => void;
    readonly children: DOMTemplate<State, Action>[];
    readonly kind = "dynamic";
    constructor(condition: (state: State) => boolean, ctx: DOMContext<Action>, dispatch: (action: Action) => void, removeNode: () => void, children: DOMTemplate<State, Action>[]);
    change(value: State): void;
    destroy(): void;
    private views;
    private dynamics;
    private destroyViews;
}
export declare class DOMWhen<State, Action> implements DOMTemplate<State, Action> {
    readonly opts: WhenOptions<State>;
    readonly children: DOMChild<State, Action>[];
    constructor(opts: WhenOptions<State>, children: DOMChild<State, Action>[]);
    render(ctx: DOMContext<Action>, state: State): DOMWhenView<State, Action>;
}
export declare const when: <State, Action>(opts: WhenOptions<State>, ...children: DOMChild<State, Action>[]) => DOMWhen<State, Action>;
export declare const unless: <State, Action>(opts: WhenOptions<State>, ...children: DOMChild<State, Action>[]) => DOMWhen<State, Action>;
//# sourceMappingURL=when.d.ts.map