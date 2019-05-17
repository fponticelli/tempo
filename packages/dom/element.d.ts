import { DOMTemplate, DOMChild } from './template';
import { DOMContext } from './context';
import { View } from '@mood/core/view';
import { DOMAttributes } from './attributes';
export declare class DOMElement<State, Action> implements DOMTemplate<State, Action> {
    readonly name: string;
    readonly attributes: DOMAttributes<State, Action>;
    readonly children: DOMTemplate<State, Action>[];
    constructor(name: string, attributes: DOMAttributes<State, Action>, children: DOMTemplate<State, Action>[]);
    render(ctx: DOMContext<Action>, state: State): View<State>;
}
export declare const el: <State, Action>(name: string, attributes: DOMAttributes<State, Action>, ...children: DOMChild<State, Action>[]) => DOMElement<State, Action>;
//# sourceMappingURL=element.d.ts.map