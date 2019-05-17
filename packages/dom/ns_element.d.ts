import { DOMTemplate } from './template';
import { DOMAttributes } from './attributes';
import { DOMContext } from './context';
import { DOMDynamicNodeView, DOMStaticNodeView } from './node_view';
export declare class DOMNSElement<State, Action> implements DOMTemplate<State, Action> {
    readonly ns: string;
    readonly name: string;
    readonly attributes: DOMAttributes<State, Action>;
    readonly children: DOMTemplate<State, Action>[];
    constructor(ns: string, name: string, attributes: DOMAttributes<State, Action>, children: DOMTemplate<State, Action>[]);
    render(ctx: DOMContext<Action>, state: State): DOMDynamicNodeView<State> | DOMStaticNodeView<State>;
}
//# sourceMappingURL=ns_element.d.ts.map