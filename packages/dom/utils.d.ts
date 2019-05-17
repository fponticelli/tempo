import { View, DynamicView } from '@mood/core/view';
import { UnwrappedDerivedValue, WrappedDerivedValue } from '@mood/core/value';
import { DOMChild, DOMTemplate } from './template';
export declare const removeNode: (node: Node) => void;
export declare const insertBefore: (ref: Node) => (node: Node) => void;
export declare const filterDynamics: <State>(children: View<State>[]) => DynamicView<State>[];
export declare const domChildToTemplate: <State, Action>(dom: DOMChild<State, Action>) => DOMTemplate<State, Action>;
export declare type Acc<State> = {
    statics: (() => void)[];
    dynamics: ((state: State) => void)[];
};
export declare const processAttribute: <State, Action>(el: HTMLElement, name: string, value: Action | UnwrappedDerivedValue<State, Action> | ((event: any) => Action | undefined) | WrappedDerivedValue<State, (event: any) => Action | undefined>, dispatch: (action: Action) => void, acc: Acc<State>) => Acc<State>;
//# sourceMappingURL=utils.d.ts.map