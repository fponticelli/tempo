import { DynamicView } from '@mood/core/view';
import { DOMComponentView, DOMComponent } from './component';
import { DOMTemplate } from './template';
import { DOMContext } from './context';
export declare class DOMAdapterView<OuterState, InnerState, OuterAction, InnerAction> implements DynamicView<OuterState> {
    readonly mergeStates: (outerState: OuterState, innerState: InnerState) => InnerState | undefined;
    readonly child: DOMComponentView<InnerState, InnerAction>;
    readonly kind = "dynamic";
    constructor(mergeStates: (outerState: OuterState, innerState: InnerState) => InnerState | undefined, child: DOMComponentView<InnerState, InnerAction>);
    destroy(): void;
    change(outerState: OuterState): void;
}
export declare class DOMAdapter<OuterState, InnerState, OuterAction, InnerAction> implements DOMTemplate<OuterState, OuterAction> {
    readonly mergeStates: (outerState: OuterState, innerState: InnerState) => InnerState | undefined;
    readonly propagate: (action: InnerAction, innerState: InnerState, outerState: OuterState, dispatchInner: (action: InnerAction) => void, dispatchOuter: (action: OuterAction) => void) => void;
    readonly child: DOMComponent<InnerState, InnerAction>;
    constructor(mergeStates: (outerState: OuterState, innerState: InnerState) => InnerState | undefined, propagate: (action: InnerAction, innerState: InnerState, outerState: OuterState, dispatchInner: (action: InnerAction) => void, dispatchOuter: (action: OuterAction) => void) => void, child: DOMComponent<InnerState, InnerAction>);
    render(ctx: DOMContext<OuterAction>, outerState: OuterState): DynamicView<OuterState>;
}
export declare const adapter: <OuterState, InnerState, OuterAction, InnerAction>(opts: {
    mergeStates?: ((outerState: OuterState, innerState: InnerState) => InnerState | undefined) | undefined;
    propagate?: ((action: InnerAction, innerState: InnerState, outerState: OuterState, dispatchInner: (action: InnerAction) => void, dispatchOuter: (action: OuterAction) => void) => void) | undefined;
}, child: DOMComponent<InnerState, InnerAction>) => DOMAdapter<OuterState, InnerState, OuterAction, InnerAction>;
//# sourceMappingURL=adapter.d.ts.map