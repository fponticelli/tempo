import { View, StaticView, DynamicView } from '@mood/core/view';
export declare class DOMBaseFragmentView {
    readonly views: View<any>[];
    constructor(views: View<any>[]);
    destroy(): void;
}
export declare class DOMStaticFragmentView extends DOMBaseFragmentView implements StaticView {
    readonly kind = "static";
}
export declare class DOMDynamicFragmentView<State> extends DOMBaseFragmentView implements DynamicView<State> {
    readonly change: (state: State) => void;
    readonly kind = "dynamic";
    constructor(views: View<any>[], change: (state: State) => void);
}
export declare const fragmentView: <State>(views: View<State>[]) => DOMStaticFragmentView | DOMDynamicFragmentView<State>;
//# sourceMappingURL=fragment.d.ts.map