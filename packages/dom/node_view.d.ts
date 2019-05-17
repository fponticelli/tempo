import { DynamicView, StaticView, View } from '@mood/core/view';
export declare class DOMBaseNodeView<State> {
    readonly node: Node;
    readonly children: View<State>[];
    readonly beforeDestroy?: (() => void) | undefined;
    constructor(node: Node, children: View<State>[], beforeDestroy?: (() => void) | undefined);
    destroy(): void;
}
export declare class DOMStaticNodeView<State> extends DOMBaseNodeView<State> implements StaticView {
    readonly kind = "static";
}
export declare class DOMDynamicNodeView<State> extends DOMBaseNodeView<State> implements DynamicView<State> {
    readonly node: Node;
    readonly children: View<State>[];
    readonly change: (state: State) => void;
    readonly beforeDestroy?: (() => void) | undefined;
    readonly kind = "dynamic";
    constructor(node: Node, children: View<State>[], change: (state: State) => void, beforeDestroy?: (() => void) | undefined);
}
//# sourceMappingURL=node_view.d.ts.map