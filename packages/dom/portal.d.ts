import { DOMTemplate, DOMChild } from './template';
import { DOMContext } from './context';
export declare class DOMPortal<State, Action> implements DOMTemplate<State, Action> {
    readonly getParent: (doc: Document) => Element;
    readonly append: (doc: Document, node: Node) => void;
    readonly children: DOMTemplate<State, Action>[];
    constructor(getParent: (doc: Document) => Element, append: (doc: Document, node: Node) => void, children: DOMTemplate<State, Action>[]);
    render(ctx: DOMContext<Action>, state: State): import("./fragment").DOMStaticFragmentView | import("./fragment").DOMDynamicFragmentView<State>;
}
export declare const portal: <State, Action>(opts: {
    getParent: (doc: Document) => Element;
    append: (doc: Document, node: Node) => void;
}, ...children: DOMChild<State, Action>[]) => DOMPortal<State, Action>;
export declare const portalWithSelector: <State, Action>(opts: {
    selector: string;
}, ...children: DOMChild<State, Action>[]) => DOMPortal<State, Action>;
export declare const headPortal: <State, Action>(...children: DOMChild<State, Action>[]) => DOMPortal<State, Action>;
export declare const bodyPortal: <State, Action>(...children: DOMChild<State, Action>[]) => DOMPortal<State, Action>;
//# sourceMappingURL=portal.d.ts.map