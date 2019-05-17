import { DOMTemplate } from './template';
import { DOMContext } from './context';
import { View } from '@mood/core/view';
import { DOMTextValue } from './value';
export declare class DOMText<State, Action> implements DOMTemplate<State, Action> {
    readonly content: DOMTextValue<State>;
    constructor(content: DOMTextValue<State>);
    render(ctx: DOMContext<Action>, state: State): View<State>;
}
export declare const text: <State, Action>(content: import("../../../packages/core/value").UnwrappedValue<State, string>) => DOMText<State, Action>;
//# sourceMappingURL=text.d.ts.map