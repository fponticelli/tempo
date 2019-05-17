import { DynamicView } from '@mood/core/view';
import { DOMContext } from './context';
import { DOMTemplate, DOMChild } from './template';
export declare class DOMElementsView<Element, State extends Element[], Action> implements DynamicView<State> {
    readonly ref: Node;
    readonly ctx: DOMContext<Action>;
    readonly children: DOMTemplate<Element, Action>[];
    readonly kind = "dynamic";
    constructor(ref: Node, ctx: DOMContext<Action>, children: DOMTemplate<Element, Action>[]);
    destroy(): void;
    change(state: State): void;
    private childrenView;
}
export declare class DOMElementsTemplate<Element, State extends Element[], Action> implements DOMTemplate<State, Action> {
    readonly opts: {
        refId?: string;
    };
    readonly children: DOMTemplate<Element, Action>[];
    constructor(opts: {
        refId?: string;
    }, children: DOMTemplate<Element, Action>[]);
    render(ctx: DOMContext<Action>, state: State): DynamicView<State>;
}
export declare const elements: <State extends any[], Action>(opts: {
    refId?: string | undefined;
}, ...children: DOMChild<State[number], Action>[]) => DOMElementsTemplate<State[number], State, Action>;
//# sourceMappingURL=elements.d.ts.map