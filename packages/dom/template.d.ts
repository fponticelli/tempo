import { Template } from '@mood/core/template';
import { DOMContext } from './context';
import { DOMTextValue } from './value';
export interface DOMTemplate<State, Action> extends Template<State, DOMContext<Action>> {
}
export declare type DOMChild<State, Action> = DOMTemplate<State, Action> | DOMTextValue<State>;
//# sourceMappingURL=template.d.ts.map